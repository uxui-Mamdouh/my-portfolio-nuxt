/**
 * Clarity Custom Tags
 * ====================
 * يرسل tags إلى Microsoft Clarity عشان فلترة التسجيلات
 * 
 * Tags المتاحة (10 max في الخطة المجانية):
 * - intent_tier: cold | warm | hot | very_hot | qualified
 * - returning: yes | no
 * - high_intent: yes | no
 * - lead_budget: Under $10k | $10k – $25k | $25k – $50k | $50k+
 * - session_score: 0-100
 * - has_read_case_study: yes | no
 * - has_viewed_about: yes | no
 * - has_viewed_resume: yes | no
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  // ═══ Clarity not loaded yet? Wait ═══
  let clarityReady = false
  const pendingTags: Array<[string, string]> = []

  const setTag = (key: string, value: string) => {
    const clarity = (window as any).clarity
    if (typeof clarity === 'function') {
      clarity('set', key, value)
      clarityReady = true
    } else {
      pendingTags.push([key, value])
    }
  }

  // Flush pending tags after clarity loads
  setTimeout(() => {
    const clarity = (window as any).clarity
    if (typeof clarity === 'function') {
      clarityReady = true
      while (pendingTags.length) {
        const [k, v] = pendingTags.shift()!
        clarity('set', k, v)
      }
    }
  }, 2000)

  // ═══════════════════════════════════════════════════════
  // TAG 1 & 2: Intent Tier + Returning Visitor
  // ═══════════════════════════════════════════════════════
  const intentTier = localStorage.getItem('intent_tier') || 'cold'
  const visitCount = parseInt(localStorage.getItem('visit_count') || '1', 10)

  setTag('intent_tier', intentTier)
  setTag('returning', visitCount > 1 ? 'yes' : 'no')

  // ═══════════════════════════════════════════════════════
  // TAG 3-5: Content Engagement Flags
  // ═══════════════════════════════════════════════════════
  const SESSION_SIGNALS_KEY = 'mgh_session_signals'

  const getSignals = (): string[] => {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_SIGNALS_KEY) || '[]')
    } catch {
      return []
    }
  }

  const hasSignal = (signal: string): boolean => {
    return getSignals().includes(signal)
  }

  // Set initial content flags
  setTag('has_read_case_study', hasSignal('case_study_view') ? 'yes' : 'no')
  setTag('has_viewed_about', hasSignal('about_view') ? 'yes' : 'no')
  setTag('has_viewed_resume', hasSignal('resume_view') ? 'yes' : 'no')

  // ═══════════════════════════════════════════════════════
  // LISTEN TO EVENTS — Update tags in real-time
  // ═══════════════════════════════════════════════════════
  window.addEventListener('mgh:track', ((e: CustomEvent) => {
    const { event } = e.detail as { event: string; params: Record<string, unknown> }

    // Update content flags
    switch (event) {
      case 'case_study_open':
        setTag('has_read_case_study', 'yes')
        break
      case 'about_open':
        setTag('has_viewed_about', 'yes')
        break
      case 'resume_open':
        setTag('has_viewed_resume', 'yes')
        break

      case 'high_intent_session':
        setTag('high_intent', 'yes')
        break

      case 'generate_lead':
        // Lead Budget
        const budget = (e.detail.params as any).lead_budget || 'unknown'
        setTag('lead_budget', budget)

        // Lead Quality based on budget
        const qualityMap: Record<string, string> = {
          '$50k+': 'premium',
          '$25k – $50k': 'high',
          '$10k – $25k': 'medium',
          'Under $10k': 'low',
          'Not sure yet': 'unknown'
        }
        setTag('lead_quality', qualityMap[budget] || 'unknown')
        break

      case 'session_quality':
        const score = (e.detail.params as any).session_score
        if (score !== undefined) {
          setTag('session_score', String(score))
        }
        break
    }
  }) as EventListener)

  // ═══════════════════════════════════════════════════════
  // HIGH INTENT FLAG (from localStorage)
  // ═══════════════════════════════════════════════════════
  if (sessionStorage.getItem('mgh_high_intent_fired') === '1') {
    setTag('high_intent', 'yes')
  }

  console.log('[CLARITY-TAGS] Plugin loaded ✅')
})