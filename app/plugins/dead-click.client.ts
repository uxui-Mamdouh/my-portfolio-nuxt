/**
 * Dead Click Detector
 * ====================
 * يكشف ضغط على عنصر شكله تفاعلي (cursor:pointer) لكنه مش <a>/<button>
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const getSelector = (el: HTMLElement): string => {
    if (el.id) return `#${el.id}`
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

    // ═══ Skip if inside real interactive ═══
    const isInteractive = target.closest(
      'a, button, [role="button"], input, select, textarea, [onclick], [contenteditable="true"]'
    )
    if (isInteractive) return

    // ═══ Check if it looks clickable ═══
    const styles = window.getComputedStyle(target)
    const looksClickable =
      styles.cursor === 'pointer' ||
      target.classList.contains('clickable') ||
      target.closest('[data-looks-clickable]')

    if (!looksClickable) return

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'dead_click',
      element_selector: getSelector(target),
      element_text: (target.textContent || '').trim().slice(0, 80),
      page_path: window.location.pathname,
      page_url: window.location.href,
      timestamp: Date.now()
    })

    console.log('[DEAD_CLICK]', getSelector(target))
  }

  document.addEventListener('click', onDocumentClick, { passive: true })

  console.log('[DEAD-CLICK] Detector loaded ✅')
})