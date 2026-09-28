/**
 * Rage Click Detector
 * ====================
 * يكشف 3+ ضغطات على نفس العنصر خلال 2 ثانية
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const WINDOW_MS = 2000
  const THRESHOLD = 3

  const clickMap = new Map<string, number[]>()

  const getSelector = (el: HTMLElement): string => {
    if (el.id) return `#${el.id}`
    const dataAttr = el.getAttribute('data-cta') || el.getAttribute('data-cta-location')
    if (dataAttr) return `[data-cta="${dataAttr}"]`

    const path: string[] = []
    let cur: HTMLElement | null = el
    let depth = 0
    while (cur && cur !== document.body && depth < 4) {
      const tag = cur.tagName.toLowerCase()
      const cls = cur.className && typeof cur.className === 'string'
        ? '.' + cur.className.trim().split(/\s+/)[0]
        : ''
      path.unshift(tag + cls)
      cur = cur.parentElement
      depth++
    }
    return path.join(' > ')
  }

  const onDocumentClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target) return

    const interactive = target.closest('a, button, [role="button"], input, select, textarea')
    if (!interactive) return

    const el = interactive as HTMLElement
    const selector = getSelector(el)
    const now = Date.now()

    if (!clickMap.has(selector)) clickMap.set(selector, [])
    const timestamps = clickMap.get(selector)!.filter(t => now - t < WINDOW_MS)
    timestamps.push(now)
    clickMap.set(selector, timestamps)

    if (timestamps.length >= THRESHOLD) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'rage_click',
        element_selector: selector,
        element_text: (el.textContent || '').trim().slice(0, 80),
        click_count: timestamps.length,
        window_ms: WINDOW_MS,
        page_path: window.location.pathname,
        page_url: window.location.href,
        timestamp: now
      })
      console.log('[RAGE_CLICK]', selector, timestamps.length)
      clickMap.set(selector, []) // reset
    }
  }

  document.addEventListener('click', onDocumentClick, { passive: true })

  console.log('[RAGE-CLICK] Detector loaded ✅')
})