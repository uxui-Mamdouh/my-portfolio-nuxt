/**
 * Reading Progress Tracking (Blog Only)
 * ======================================
 * يرصد 25% / 50% / 90% من قراءة المقالات في /blog/*
 * يدعم Lenis Smooth Scroll
 */

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  const MILESTONES = [25, 50, 90]
  const fired = new Set<number>()
  let ticking = false

  // ─── Helpers ───
  const isBlogArticle = (): boolean => {
    const path = window.location.pathname
    return path.startsWith('/blog/') && path.split('/').filter(Boolean).length >= 2
  }

  const getArticleSlug = (): string => {
    const parts = window.location.pathname.split('/').filter(Boolean)
    return parts[parts.length - 1] || ''
  }

  // ─── Get scroll percent (Lenis-aware) ───
  const getScrollPercent = (): number => {
    // ✅ المحاولة 1: Lenis
    const lenis = (nuxtApp as any).$lenis
    if (lenis) {
      const limit = lenis.limit || 0
      const scroll = lenis.scroll || 0
      if (limit > 0) {
        return Math.min(100, Math.round((scroll / limit) * 100))
      }
    }

    // ✅ المحاولة 2: document.documentElement (fallback)
    const scrollTop = window.scrollY ||
                     document.documentElement.scrollTop ||
                     document.body.scrollTop ||
                     0
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

    console.log('[READING_PROGRESS] ✅', percent + '%', path)
  }

  // ─── Check milestones ───
  const checkMilestones = () => {
    ticking = false

    if (!isBlogArticle()) return

    const percent = getScrollPercent()

    for (const milestone of MILESTONES) {
      if (percent >= milestone && !fired.has(milestone)) {
        fired.add(milestone)
        pushProgress(milestone)
      }
    }
  }

  const onScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(checkMilestones)
    }
  }

  // ═══════════════════════════════════════════════════════
  // 🚀 Register scroll listeners — مع Lenis
  // ═══════════════════════════════════════════════════════
  const lenis = (nuxtApp as any).$lenis

  if (lenis && typeof lenis.on === 'function') {
    console.log('[READING-PROGRESS] Using Lenis scroll listener ✅')
    lenis.on('scroll', onScroll)
  } else {
    console.log('[READING-PROGRESS] Using native scroll listener')
    window.addEventListener('scroll', onScroll, { passive: true })
  }

  // Fallback: also listen to native scroll (safe — no double count because of `fired`)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })

  // ─── Initial check (بعد ما الصفحة تحمل) ───
  setTimeout(checkMilestones, 1000)
  setTimeout(checkMilestones, 2500)

  // ─── Reset on route change ───
  const router = useRouter()
  router.afterEach(() => {
    fired.clear()
    setTimeout(checkMilestones, 800)
  })

  // ─── Visibility recheck ───
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      setTimeout(checkMilestones, 200)
    }
  })

  console.log('[READING-PROGRESS] Plugin loaded ✅')
})