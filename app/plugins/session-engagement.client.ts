/**
 * Session Engagement Tracker
 * ===========================
 * - Tracks 4 signals: case_study, about, resume, contact
 * - Fires `high_intent_session` when 3+ signals in same session
 * - Accumulates quality metrics (scroll, time, clicks, pages)
 * - Fires `session_quality` on pagehide
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const SIGNALS_KEY = 'mgh_session_signals'
  const HIGH_INTENT_THRESHOLD = 3
  const HIGH_INTENT_FLAG = 'mgh_high_intent_fired'

  // ═══════════════════════════════════════════════════════
  // SESSION STATE (per-session, cleared on tab close)
  // ═══════════════════════════════════════════════════════
  let maxScrollDepth = 0
  let totalClicks = 0
  let rageClicks = 0
  let pagesViewed = new Set<string>()

  const sessionStart = parseInt(sessionStorage.getItem('mgh_session_start') || String(Date.now()))
  pagesViewed.add(window.location.pathname)

  // ═══════════════════════════════════════════════════════
  // SIGNAL TRACKING
  // ═══════════════════════════════════════════════════════
  const getSignals = (): string[] => {
    try {
      return JSON.parse(sessionStorage.getItem(SIGNALS_KEY) || '[]')
    } catch {
      return []
    }
  }

  const addSignal = (signal: string) => {
    const signals = getSignals()
    if (signals.includes(signal)) return

    signals.push(signal)
    sessionStorage.setItem(SIGNALS_KEY, JSON.stringify(signals))
    console.log('[SESSION-SIGNAL] Added:', signal, '→ total:', signals.length)

    // Check if we hit threshold
    const alreadyFired = sessionStorage.getItem(HIGH_INTENT_FLAG) === '1'
    if (!alreadyFired && signals.length >= HIGH_INTENT_THRESHOLD) {
      sessionStorage.setItem(HIGH_INTENT_FLAG, '1')

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'high_intent_session',
        signals: signals.join(','),
        signal_count: signals.length,
        page_path: window.location.pathname,
        page_url: window.location.href,
        timestamp: Date.now()
      })

      console.log('[HIGH_INTENT_SESSION] 🎯', signals.join(', '))
    }
  }

  // ═══════════════════════════════════════════════════════
  // LISTEN TO ALL TRACKING EVENTS (from useTracking)
  // ═══════════════════════════════════════════════════════
  window.addEventListener('mgh:track', ((e: CustomEvent) => {
    const { event } = e.detail as { event: string; params: Record<string, unknown> }

    switch (event) {
      case 'case_study_open':
        addSignal('case_study_view')
        break
      case 'about_open':
        addSignal('about_view')
        break
      case 'resume_open':
        addSignal('resume_view')
        break
      case 'contact_form_start':
      case 'contact_form_submit':
      case 'generate_lead':
        addSignal('contact_engaged')
        break
      case 'book_call_click':
        addSignal('cta_engaged')
        break
      case 'playbook_open':
        addSignal('playbook_read')
        break
    }
  }) as EventListener)

  // ═══════════════════════════════════════════════════════
  // PAGE-BASED SIGNALS (from route)
  // ═══════════════════════════════════════════════════════
  const router = useRouter()

  const checkRouteSignals = (path: string) => {
    if (path.startsWith('/projects/')) addSignal('case_study_view')
    if (path.startsWith('/about')) addSignal('about_view')
    if (path.startsWith('/contact')) addSignal('contact_engaged')
    if (path.startsWith('/blog/') && path !== '/blog') addSignal('playbook_read')
  }

  // Check current route at load
  checkRouteSignals(window.location.pathname)

  router.afterEach((to) => {
    pagesViewed.add(to.path)
    checkRouteSignals(to.path)
  })

  // ═══════════════════════════════════════════════════════
  // QUALITY METRICS TRACKING
  // ═══════════════════════════════════════════════════════
  let ticking = false

  const updateScrollDepth = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight > 0) {
      const percent = Math.min(100, (scrollTop / docHeight) * 100)
      if (percent > maxScrollDepth) maxScrollDepth = percent
    }
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(updateScrollDepth)
    }
  }, { passive: true })

  // Track clicks
  document.addEventListener('click', () => { totalClicks++ }, { passive: true })

  // Track rage clicks (listen for dataLayer)
  window.addEventListener('mgh:track', ((e: CustomEvent) => {
    if (e.detail.event === 'rage_click') rageClicks++
  }) as EventListener)

  // ═══════════════════════════════════════════════════════
  // SESSION QUALITY SCORE + FIRE ON PAGEHIDE
  // ═══════════════════════════════════════════════════════
  let qualityFired = false

  const calculateScore = (): number => {
    const timeOnSession = (Date.now() - sessionStart) / 1000 // seconds

    const score =
      Math.min(100, maxScrollDepth) * 0.25 +
      Math.min(100, timeOnSession / 3) * 0.30 +
      Math.min(100, pagesViewed.size * 20) * 0.25 +
      Math.min(100, totalClicks * 5) * 0.20 -
      rageClicks * 15

    return Math.max(0, Math.min(100, Math.round(score)))
  }

  const pushSessionQuality = () => {
    if (qualityFired) return
    qualityFired = true

    const score = calculateScore()
    const timeOnSession = Math.round((Date.now() - sessionStart) / 1000)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'session_quality',
      session_score: score,
      session_quality_score: score, // alias
      max_scroll_depth: Math.round(maxScrollDepth),
      session_time_sec: timeOnSession,
      pages_viewed: pagesViewed.size,
      total_clicks: totalClicks,
      rage_clicks: rageClicks,
      page_path: window.location.pathname,
      timestamp: Date.now()
    })

    console.log('[SESSION_QUALITY]', score, {
      scroll: Math.round(maxScrollDepth),
      time: timeOnSession + 's',
      pages: pagesViewed.size,
      clicks: totalClicks,
      rage: rageClicks
    })
  }

  window.addEventListener('pagehide', pushSessionQuality)

  console.log('[SESSION-ENGAGEMENT] Tracker loaded ✅')
})