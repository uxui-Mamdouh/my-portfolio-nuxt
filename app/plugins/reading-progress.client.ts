/**
 * Reading Progress Tracking (Blog Only)
 * ======================================
 * يرصد 25% / 50% / 90% من قراءة المقالات في /blog/*
 * بيفير مرة واحدة لكل milestone في كل مقال
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const MILESTONES = [25, 50, 90]
  const fired = new Set<number>()
  let ticking = false

  // ─── Helpers ───
  const isBlogArticle = (): boolean => {
    const path = window.location.pathname
    // /blog/slug-here (not /blog itself)
    return path.startsWith('/blog/') && path.split('/').filter(Boolean).length >= 2
  }

  const getArticleSlug = (): string => {
    const parts = window.location.pathname.split('/').filter(Boolean)
    return parts[parts.length - 1] || ''
  }

  const getScrollPercent = (): number => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) return 0
    return Math.min(100, Math.round((scrollTop / docHeight) * 100))
  }

  const pushProgress = (percent: number) => {
    const path = window.location.pathname

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'reading_progress',
      scroll_depth_percent: percent,
      article_slug: getArticleSlug(),
      page_path: path,
      page_url: window.location.href,
      timestamp: Date.now()
    })

    console.log('[READING_PROGRESS]', percent + '%', path)
  }

  // ─── Check milestones ───
  const checkMilestones = () => {
    if (!isBlogArticle()) {
      ticking = false
      return
    }

    const percent = getScrollPercent()

    for (const milestone of MILESTONES) {
      if (percent >= milestone && !fired.has(milestone)) {
        fired.add(milestone)
        pushProgress(milestone)
      }
    }

    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(checkMilestones)
    }
  }

  // ─── Register listener ───
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })

  // ─── Initial check ───
  setTimeout(checkMilestones, 500)

  // ─── Reset on route change ───
  const router = useRouter()
  router.afterEach(() => {
    fired.clear()
    setTimeout(checkMilestones, 300)
  })

  // ─── Visibility recheck ───
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      setTimeout(checkMilestones, 100)
    }
  })

  console.log('[READING-PROGRESS] Plugin loaded ✅')
})