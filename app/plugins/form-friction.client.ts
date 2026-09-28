/**
 * Form Friction Detector
 * ========================
 * يكشف:
 *   - form_field_confusion: 3+ focus على نفس الحقل
 *   - form_field_paste: لصق في حقل
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const FOCUS_THRESHOLD = 3

  const focusCount = new Map<string, number>()
  const confusedReported = new Set<string>()

  const getFieldKey = (el: HTMLElement): string => {
    const form = el.closest('form')
    const formId = form?.id || 'unknown'
    const fieldName = el.getAttribute('name') || el.getAttribute('type') || el.tagName.toLowerCase()
    return `${formId}::${fieldName}`
  }

  // ─── Focus tracking ───
  const onFocusIn = (e: FocusEvent) => {
    const target = e.target as HTMLElement
    if (!target || !target.matches('input, textarea, select')) return

    const key = getFieldKey(target)
    const count = (focusCount.get(key) || 0) + 1
    focusCount.set(key, count)

    if (count >= FOCUS_THRESHOLD && !confusedReported.has(key)) {
      confusedReported.add(key)

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'form_field_confusion',
        field_name: target.getAttribute('name') || target.tagName.toLowerCase(),
        focus_count: count,
        form_id: target.closest('form')?.id || 'unknown',
        page_path: window.location.pathname,
        timestamp: Date.now()
      })

      console.log('[FORM_CONFUSION]', key, count)
    }
  }

  // ─── Paste tracking ───
  const onPaste = (e: ClipboardEvent) => {
    const target = e.target as HTMLElement
    if (!target || !target.matches('input, textarea')) return

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'form_field_paste',
      field_name: target.getAttribute('name') || target.tagName.toLowerCase(),
      field_type: (target as HTMLInputElement).type || target.tagName.toLowerCase(),
      form_id: target.closest('form')?.id || 'unknown',
      page_path: window.location.pathname,
      timestamp: Date.now()
    })

    console.log('[FORM_PASTE]', (target as HTMLInputElement).name)
  }

  document.addEventListener('focusin', onFocusIn, { passive: true })
  document.addEventListener('paste', onPaste, { passive: true })

  // ─── Reset on route change ───
  const router = useRouter()
  router.afterEach(() => {
    focusCount.clear()
    confusedReported.clear()
  })

  console.log('[FORM-FRICTION] Detector loaded ✅')
})