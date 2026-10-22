// composables/useTracking.ts
import { useGtm } from '@gtm-support/vue-gtm'

export const useTracking = () => {
  const gtm = useGtm()

  const trackEvent = (
    event: string,
    params: Record<string, unknown> = {}
  ) => {
    if (typeof window === 'undefined') return

    // 🛑 فحص الموافقة (Consent Check)
    // لو مفيش موافقة، ارفض الحدث واطلع بره
    const hasConsent = localStorage.getItem('cookie_consent') === 'granted'
    if (!hasConsent) {
      if (import.meta.dev) console.log(`🛑 [GTM BLOCKED] Event: ${event} - No consent.`)
      return
    }

    const enriched = {
      page_path: window.location.pathname,
      page_url: window.location.href,
      page_title: document.title,
      timestamp: Date.now(),
      ...params
    }

    gtm?.trackEvent({ event, ...enriched })

    // 🚀 Dispatch DOM event for session tracker to catch
    window.dispatchEvent(new CustomEvent('mgh:track', {
      detail: { event, params: enriched }
    }))

    if (import.meta.dev) console.log('[GTM]', event, enriched)
  }

  return { trackEvent }
}