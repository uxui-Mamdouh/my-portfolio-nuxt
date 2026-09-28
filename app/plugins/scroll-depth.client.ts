/**
 * Scroll Depth Tracking
 * =====================
 * يرصد الوصول لـ 25% / 50% / 75% / 100% من الصفحة
 * كل milestone بيتسجل مرة واحدة فقط في كل صفحة
 * بيشتغل مع Lenis وبدونه
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const MILESTONES = [25, 50, 75, 100]
  const fired = new Set<number>()
  let ticking = false
  let isInitialized = false

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

  const getContentSlug = (path: string): string => {
    const parts = path.split('/').filter(Boolean)
    if (parts.length >= 2 && (parts[0] === 'projects' || parts[0] === 'blog')) {
      return parts[parts.length - 1]
    }
    return ''
  }

  const getScrollPercent = (): number => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) return 0
    return Math.min(100, Math.round((scrollTop / docHeight) * 100))
  }

  const pushMilestone = (percent: number) => {
    const path = window.location.pathname

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'scroll_milestone',
      scroll_percent: percent,
      page_path: path,
      page_type: getPageType(path),
      content_slug: getContentSlug(path),
      page_url: window.location.href,
      timestamp: Date.now()
    })

    console.log('[SCROLL_MILESTONE]', percent + '%', path)
  }

  // ─── Check milestones on scroll ───
  const checkMilestones = () => {
    const percent = getScrollPercent()

    for (const milestone of MILESTONES) {
      if (percent >= milestone && !fired.has(milestone)) {
        fired.add(milestone)
        pushMilestone(milestone)
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

  // ─── Register scroll listener (once) ───
  if (!isInitialized) {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    isInitialized = true
  }

  // ─── Initial check (in case page is short and fully visible) ───
  setTimeout(checkMilestones, 500)

  // ─── Reset on route change ───
  const router = useRouter()
  router.afterEach(() => {
    fired.clear()
    // Delay check to let the new page render
    setTimeout(checkMilestones, 300)
  })

  // ─── Handle tab visibility (re-check when back) ───
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      setTimeout(checkMilestones, 100)
    }
  })

  console.log('[SCROLL-DEPTH] Plugin loaded ✅')
})