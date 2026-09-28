import { useGtm } from '@gtm-support/vue-gtm'
import type { TrackingEvent } from '~/types/tracking'

export const useTracking = () => {
  const gtm = useGtm()

  const trackEvent = (
    event: TrackingEvent | string,
    params: Record<string, unknown> = {}
  ) => {
    if (typeof window === 'undefined') return

    const enriched = {
      page_path: window.location.pathname,
      page_url: window.location.href,
      page_title: document.title,
      timestamp: Date.now(),
      ...params
    }

    gtm?.trackEvent({ event, ...enriched })

    if (import.meta.dev) console.log('[GTM]', event, enriched)
  }

  return { trackEvent }
}