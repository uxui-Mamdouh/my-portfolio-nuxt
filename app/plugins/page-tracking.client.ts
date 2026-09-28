export default defineNuxtPlugin((nuxtApp) => {
  console.log('[PAGE-TRACKING] Plugin loaded ✅')

  const router = useRouter()

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

  const getContentCategory = (path: string): string => {
    if (path.startsWith('/projects/')) return 'case_study'
    if (path.startsWith('/blog/playbook')) return 'playbook'
    if (path.startsWith('/blog/design-log')) return 'design_log'
    if (path.startsWith('/blog/')) return 'playbook'
    return ''
  }

  const sendPageView = (path: string, source: string = 'router') => {
    if (typeof window === 'undefined') return

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_type: getPageType(path),
      content_slug: getContentSlug(path),
      content_category: getContentCategory(path),
      page_url: window.location.href,
      referrer: document.referrer,
      timestamp: Date.now(),
      tracking_source: source
    })

    console.log('[PAGE-VIEW]', path, {
      page_type: getPageType(path),
      content_category: getContentCategory(path),
      source
    })
  }

  // ─── 1. Initial page load ───
  // طريقة 1: app:suspense:resolve (أحدث وأوثق)
  nuxtApp.hook('app:suspense:resolve', () => {
    console.log('[PAGE-TRACKING] app:suspense:resolve fired')
    if (router.currentRoute.value?.fullPath) {
      sendPageView(router.currentRoute.value.fullPath, 'initial_load')
    }
  })

  // ─── 2. Client-side navigation ───
  router.afterEach((to, from) => {
    console.log('[PAGE-TRACKING] route change:', from.fullPath, '→', to.fullPath)
    // منع تكرار initial load (لأن from فارغ في أول مرة)
    if (from.fullPath && from.fullPath !== to.fullPath) {
      // تأجيل بسيط لضمان تحديث الـ DOM
      setTimeout(() => {
        sendPageView(to.fullPath, 'spa_navigation')
      }, 0)
    }
  })

  // ─── 3. Fallback: أول تحميل لو hooks فوق مش اشتغلت ───
  router.isReady().then(() => {
    console.log('[PAGE-TRACKING] router.isReady fired')
    // تأكد إننا مش هنعمل push مكرر
    if (!(window as any).__PAGE_VIEW_INITIAL_FIRED__) {
      ;(window as any).__PAGE_VIEW_INITIAL_FIRED__ = true
      sendPageView(router.currentRoute.value.fullPath, 'fallback_ready')
    }
  })
})