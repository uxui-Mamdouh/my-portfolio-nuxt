/**
 * CTA Hesitation Detector
 * ========================
 * يرصد hover 3+ ثواني على CTA بدون ضغط
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const HESITATION_MS = 3000
  const attached = new WeakSet<Element>()

  const onMouseEnter = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    if (!target) return

    const enterTime = Date.now()
    let clicked = false
    let left = false

    const onClick = () => { clicked = true }
    const onMouseLeave = () => {
      left = true
      target.removeEventListener('click', onClick)
      target.removeEventListener('mouseleave', onMouseLeave)

      if (clicked) return

      const duration = Date.now() - enterTime
      if (duration < HESITATION_MS) return

      // Get CTA location via data attribute
      const ctaLocation = target.getAttribute('data-cta-location') ||
                          target.closest('[data-cta-location]')?.getAttribute('data-cta-location') ||
                          'unknown'

      const ctaLabel = (target.textContent || '').trim().slice(0, 60)

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'cta_hesitation',
        cta_location: ctaLocation,
        cta_label: ctaLabel,
        hover_duration_ms: duration,
        page_path: window.location.pathname,
        page_url: window.location.href,
        timestamp: Date.now()
      })

      console.log('[CTA_HESITATION]', ctaLocation, duration + 'ms')
    }

    target.addEventListener('click', onClick, { once: true })
    target.addEventListener('mouseleave', onMouseLeave, { once: true })
  }

  // ─── Attach to all .cta elements (and new ones via observer) ───
  const attach = (root: ParentNode = document) => {
    root.querySelectorAll?.('.cta').forEach(el => {
      if (attached.has(el)) return
      attached.add(el)
      el.addEventListener('mouseenter', onMouseEnter as EventListener)
    })
  }

  attach()

  // ─── Watch for new .cta elements ───
  const observer = new MutationObserver(() => attach())
  observer.observe(document.body, { childList: true, subtree: true })

  console.log('[CTA-HESITATION] Detector loaded ✅')
})