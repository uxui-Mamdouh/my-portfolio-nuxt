export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

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

  const sendPageView = (path: string) => {
    if (typeof window === 'undefined') return

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_type: getPageType(path),
      content_slug: getContentSlug(path),
      content_category: getPageType(path) === 'playbook' ? 'playbook' : 'case_study',
      page_url: window.location.href,
      referrer: document.referrer,
      timestamp: Date.now()
    })

    if (import.meta.dev) console.log('[PAGE_VIEW]', path, getPageType(path))
  }

  // أول تحميل
  nuxtApp.hook('app:mounted', () => {
    sendPageView(router.currentRoute.value.fullPath)
  })

  // كل تنقل
  router.afterEach((to) => {
    sendPageView(to.fullPath)
  })
})