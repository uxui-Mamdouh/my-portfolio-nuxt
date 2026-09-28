/**
 * Session Start Tracker
 * ======================
 * fires once per session at the first page load:
 *   - return_visit
 *   - dormant_reactivation
 *   - brand_search_visit
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const SESSION_FLAG = 'mgh_session_active'

  // ═══ Only run on new session ═══
  if (sessionStorage.getItem(SESSION_FLAG)) {
    console.log('[SESSION-START] Already initialized this session, skipping')
    return
  }
  sessionStorage.setItem(SESSION_FLAG, '1')
  sessionStorage.setItem('mgh_session_start', String(Date.now()))

  // ═══ Read visit data from localStorage ═══
  const visitCount = parseInt(localStorage.getItem('visit_count') || '1', 10)
  const lastVisit = localStorage.getItem('last_visit')
  const firstVisit = localStorage.getItem('first_visit')

  const daysSinceLast = lastVisit
    ? Math.floor((Date.now() - new Date(lastVisit).getTime()) / 86400000)
    : 0

  const daysSinceFirst = firstVisit
    ? Math.floor((Date.now() - new Date(firstVisit).getTime()) / 86400000)
    : 0

  const push = (payload: Record<string, unknown>) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      page_path: window.location.pathname,
      page_url: window.location.href,
      timestamp: Date.now(),
      ...payload
    })
  }

  // ═══════════════════════════════════════════════════════
  // 1. RETURN VISIT
  // ═══════════════════════════════════════════════════════
  if (visitCount > 1) {
    push({
      event: 'return_visit',
      visit_count: visitCount,
      days_since_first_visit: daysSinceFirst,
      days_since_last_visit: daysSinceLast
    })
    console.log('[RETURN_VISIT]', visitCount, 'visits')
  }

  // ═══════════════════════════════════════════════════════
  // 2. DORMANT REACTIVATION (7+ days away)
  // ═══════════════════════════════════════════════════════
  if (visitCount > 1 && daysSinceLast >= 7) {
    push({
      event: 'dormant_reactivation',
      dormant_days: daysSinceLast,
      visit_count: visitCount
    })
    console.log('[DORMANT_REACTIVATION]', daysSinceLast, 'days away')
  }

  // ═══════════════════════════════════════════════════════
  // 3. BRAND SEARCH VISIT (from Google)
  // ═══════════════════════════════════════════════════════
  const referrer = document.referrer || ''
  const isGoogleReferrer = /google\./i.test(referrer)

  if (isGoogleReferrer) {
    push({
      event: 'brand_search_visit',
      referrer: referrer,
      is_returning_visitor: visitCount > 1,
      visit_count: visitCount
    })
    console.log('[BRAND_SEARCH_VISIT] from', referrer)
  }

  console.log('[SESSION-START] Initialized ✅ (visit:', visitCount, ', days since last:', daysSinceLast, ')')
})