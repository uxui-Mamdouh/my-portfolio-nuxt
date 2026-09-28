/**
 * Contact Form Start Tracking
 * ============================
 * يرصد أول تفاعل مع أي حقل في أي form (تركيز / كتابة)
 * بيفير مرة واحدة فقط لكل form per session
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const trackedForms = new Set<string>()

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

  const handleFocusIn = (e: FocusEvent) => {
    const target = e.target as HTMLElement
    if (!target) return

    // دوّر على أقرب form
    const form = target.closest('form')
    if (!form) return

    const formId = form.id || form.getAttribute('name') || 'unnamed_form'
    if (trackedForms.has(formId)) return

    trackedForms.add(formId)

    const fieldName = target.getAttribute('name') ||
                     target.getAttribute('type') ||
                     target.tagName.toLowerCase()

    const path = window.location.pathname

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'contact_form_start',
      form_id: formId,
      first_field: fieldName,
      page_path: path,
      page_type: getPageType(path),
      page_url: window.location.href,
      timestamp: Date.now()
    })

    console.log('[FORM_START]', formId, '/', fieldName)
  }

  document.addEventListener('focusin', handleFocusIn, { passive: true })

  // ─── Reset on route change ───
  const router = useRouter()
  router.afterEach(() => {
    trackedForms.clear()
  })

  console.log('[FORM-TRACKING] Plugin loaded ✅')
})