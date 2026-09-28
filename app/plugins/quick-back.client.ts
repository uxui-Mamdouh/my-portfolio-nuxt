/**
 * Quick Back Detector
 * ====================
 * يرصد الخروج من الصفحة في أقل من 5 ثواني
 * يستخدم sendBeacon لضمان الإرسال
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const TIME_THRESHOLD_MS = 5000

  let pageEnterTime = Date.now()
  let pageEnterPath = window.location.pathname
  let hasInteracted = false
  let fired = false

  // ─── Track interaction (لو المستخدم تفاعل، مش quick back) ───
  const markInteracted = () => { hasInteracted = true }

  document.addEventListener('click', markInteracted, { passive: true, once: true })
  document.addEventListener('scroll', markInteracted, { passive: true, once: true })
  document.addEventListener('keydown', markInteracted, { passive: true, once: true })

  // ─── Fire on pagehide ───
  const onPageHide = () => {
    if (fired || hasInteracted) return

    const timeOnPage = Date.now() - pageEnterTime
    if (timeOnPage >= TIME_THRESHOLD_MS) return

    fired = true

    const payload = {
      event: 'quick_back',
      time_on_page_ms: timeOnPage,
      time_on_page_sec: Math.round(timeOnPage / 1000),
      from_page: pageEnterPath,
      to_page: document.referrer || 'unknown',
      page_url: window.location.href,
      timestamp: Date.now()
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(payload)
    console.log('[QUICK_BACK]', timeOnPage + 'ms', pageEnterPath)

    // Send via beacon (reliable for page unload)
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
      navigator.sendBeacon?.('https://www.google-analytics.com/g/collect', blob)
    } catch (e) { /* silent */ }
  }

  window.addEventListener('pagehide', onPageHide)

  // ─── Reset on route change ───
  const router = useRouter()
  router.afterEach(() => {
    pageEnterTime = Date.now()
    pageEnterPath = window.location.pathname
    hasInteracted = false
    fired = false
  })

  console.log('[QUICK-BACK] Detector loaded ✅')
})