import { useGtm } from '@gtm-support/vue-gtm'
import type { TrackingEvent } from '~/utils/tracking'

export const useTracking = () => {
  const gtm = useGtm()

  const trackEvent = (
    event: TrackingEvent | string,
    params: Record<string, unknown> = {}
  ) => {
    if (typeof window === 'undefined') return

    const enrichedParams = {
      page_path: window.location.pathname,
      page_url: window.location.href,
      page_title: document.title,
      timestamp: Date.now(),
      ...params
    }

    gtm?.trackEvent({
      event,
      ...enrichedParams
    })

    if (import.meta.dev) {
      console.log('[GTM]', event, enrichedParams)
    }
  }

  return { trackEvent }
}