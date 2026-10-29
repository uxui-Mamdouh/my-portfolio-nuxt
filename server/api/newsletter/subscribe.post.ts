import { createClient } from '@supabase/supabase-js'

// 🔒 Rate limit بسيط في الذاكرة (in-memory)
// ملاحظة: يعمل بشكل مثالي على VPS / Node server.
// على Vercel/Netlify serverless، كل invocation = memory جديدة
// (في هذه الحالة تحتاج Redis أو Upstash لاحقاً).
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 3        // 3 محاولات
const RATE_LIMIT_WINDOW_MS = 60_000 // في 60 ثانية

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count++
  return true
}

// 🧹 تنظيف دوري للـ map (لمنع تسرب الذاكرة)
setInterval(() => {
  const now = Date.now()
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (entry.resetAt < now) rateLimitMap.delete(ip)
  }
}, 5 * 60_000)

export default defineEventHandler(async (event) => {
  // 1️⃣ Rate limit حسب IP
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (!checkRateLimit(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many attempts. Please try again in a minute.',
    })
  }

  // 2️⃣ قراءة + تنقية الـ body
  const body = await readBody(event)
  const email = String(body?.email || '').trim().toLowerCase()
  const source = String(body?.source || '/').slice(0, 200)

  // 3️⃣ التحقق من صحة الإيميل
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !EMAIL_REGEX.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please enter a valid email address.',
    })
  }

  // 4️⃣ الإدخال باستخدام service_role (يتجاوز RLS)
  const config = useRuntimeConfig()
  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseServiceKey,
    { auth: { persistSession: false } }
  )

  const { error } = await supabase
    .from('subscribers')
    .insert([{ email, source, status: 'active' }])

  if (error) {
    // الإيميل موجود مسبقاً
    if (error.code === '23505') {
      throw createError({
        statusCode: 409,
        statusMessage: 'This email is already on the list.',
      })
    }
    console.error('[newsletter] Supabase error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong. Please try again.',
    })
  }

  return { success: true }
})