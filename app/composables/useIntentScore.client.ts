export function useIntentScore() {
  const getContext = () => {
    if (!process.client) return null

    const ctx = {
      firstVisit: localStorage.getItem('first_visit') || new Date().toISOString(),
      visitCount: parseInt(localStorage.getItem('visit_count') || '0') + 1,
      lastVisit: localStorage.getItem('last_visit'),
      totalTime: parseInt(localStorage.getItem('total_time') || '0'),
      pagesViewed: JSON.parse(localStorage.getItem('pages_viewed') || '[]') as string[]
    }

    localStorage.setItem('first_visit', ctx.firstVisit)
    localStorage.setItem('visit_count', ctx.visitCount.toString())
    localStorage.setItem('last_visit', new Date().toISOString())

    return ctx
  }

  const calculateScore = (ctx: any) => {
    const daysSinceFirst = Math.floor(
      (Date.now() - new Date(ctx.firstVisit).getTime()) / 86400000
    )
    const daysSinceLast = ctx.lastVisit
      ? Math.floor((Date.now() - new Date(ctx.lastVisit).getTime()) / 86400000)
      : 0

    let score = 0
    score += ctx.visitCount * 5
    score += ctx.pagesViewed.length * 2
    score += ctx.totalTime * 0.5
    score += daysSinceFirst * 1.5
    if (daysSinceLast <= 7) score += 10
    if (daysSinceLast <= 1) score += 15

    return {
      score: Math.min(100, Math.max(0, Math.round(score))),
      daysSinceFirst,
      daysSinceLast
    }
  }

  const getTier = (score: number) => {
    if (score <= 20) return 'cold'
    if (score <= 40) return 'warm'
    if (score <= 60) return 'hot'
    if (score <= 80) return 'very_hot'
    return 'qualified'
  }

  const pushSnapshot = () => {
    const ctx = getContext()
    if (!ctx) return

    const { score, daysSinceFirst, daysSinceLast } = calculateScore(ctx)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'user_intent_snapshot',
      intent_score: score,
      intent_tier: getTier(score),
      visit_count: ctx.visitCount,
      days_since_first_visit: daysSinceFirst,
      days_since_last_visit: daysSinceLast,
      is_returning_visitor: ctx.visitCount > 1
    })

    if (import.meta.dev) {
      console.log('[INTENT]', score, getTier(score))
    }
  }

  return { pushSnapshot, getContext, calculateScore, getTier }
}