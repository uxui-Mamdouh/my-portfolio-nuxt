/**
 * Engagement Time Tracking
 * =========================
 * يرصد 30 ثانية من التفاعل الحقيقي (مش شامل tab hidden)
 * بيعيد التهيئة مع كل تنقل
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const ENGAGEMENT_THRESHOLD_MS = 30000 // 30 seconds
  const TICK_INTERVAL_MS = 1000          // Check every 1s

  let activeTime = 0
  let lastTick = Date.now()
  let fired = false
  let timerId: number | null = null

  // ─── Helpers ───
  const getPageType = (path: string): string => {
    if (path === '/') return 'home'
    if (path.startsWith('/projects/')) return 'case_study'
    if (path.startsWith('/projects')) return 'projects'
    if (path.startsWith('/blog/')) return 'playbook'
    if (path.startsWith('/blog')) return 'blog'
    if (path.startsWith('/about')) return 'about'
    if (path.startsWith('/contact')) return 'contact'
    if (path.startsWith('/decisions')) return 'design_logs'
    return 'other'
  }

  const pushEngagement = () => {
    const path = window.location.pathname

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'engagement_30s',
      engagement_time_ms: activeTime,
      engagement_time_sec: Math.round(activeTime / 1000),
      page_path: path,
      page_type: getPageType(path),
      page_url: window.location.href,
      timestamp: Date.now()
    })

    console.log('[ENGAGEMENT_30S]', path, activeTime + 'ms')
  }

  // ─── Tick: accumulate active time ───
  const tick = () => {
    const now = Date.now()

    // Only count time when tab is visible
    if (!document.hidden) {
      activeTime += now - lastTick
    }
    lastTick = now

    // Check threshold
    if (!fired && activeTime >= ENGAGEMENT_THRESHOLD_MS) {
      fired = true
      pushEngagement()
    }
  }

  // ─── Start / Stop timer ───
  const startTimer = () => {
    if (timerId !== null) return
    lastTick = Date.now()
    timerId = window.setInterval(tick, TICK_INTERVAL_MS)
  }

  const stopTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId)
      timerId = null
    }
  }

  // ─── Reset on route change ───
  const reset = () => {
    activeTime = 0
    lastTick = Date.now()
    fired = false
  }

  // ─── Handle tab visibility ───
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Tab hidden — stop ticking
      stopTimer()
    } else {
      // Tab visible again — resume
      lastTick = Date.now()
      startTimer()
    }
  })

  // ─── Router hook ───
  const router = useRouter()
  router.afterEach(() => {
    reset()
  })

  // ─── Start ───
  startTimer()

  console.log('[ENGAGEMENT-TIME] Plugin loaded ✅')
})