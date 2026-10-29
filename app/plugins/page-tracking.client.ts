export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()

  // helper: تصنيف نوع الصفحة من المسار
  function getPageType(path: string): string {
    if (path === "/") return "home"
    if (path.startsWith("/projects/")) return "case_study"
    if (path.startsWith("/projects")) return "projects"
    if (path.startsWith("/blog/")) return "playbook"
    if (path.startsWith("/blog")) return "blog"
    if (path.startsWith("/about")) return "about"
    if (path.startsWith("/contact")) return "contact"
    if (path.startsWith("/decisions")) return "design_logs"
    return "other"
  }

  // ═══════════════════════════════════════════════════════
  // page:finish hook — يُطلق مرة واحدة بالضبط لكل تنقل
  // (يتجنب مشكلة watch المزدوج أثناء Hydration)
  // ═══════════════════════════════════════════════════════
  nuxtApp.hook('page:finish', () => {
    if (typeof window === 'undefined') return

    const path = route.fullPath

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "page_view",
      page_path: path,
      page_url: window.location.href,
      page_type: getPageType(path),
      timestamp: Date.now(),
    })

    if (process.dev) {
      console.log("[PAGE_VIEW]", path, "→", getPageType(path))
    }
  })
})