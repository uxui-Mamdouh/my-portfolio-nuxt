import { useGtm } from '@gtm-support/vue-gtm'

export const useTracking = () => {
  const gtm = useGtm()

  const trackEvent = (
    event: string,
    params: Record<string, unknown> = {}
  ) => {
    gtm?.trackEvent({
      event,
      ...params
    })

    if (import.meta.dev) {
      console.log('[GTM]', event, params)
    }
  }

  return {
    trackEvent
  }
}