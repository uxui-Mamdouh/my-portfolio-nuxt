// composables/useTracking.ts
import { useGtm } from '@gtm-support/vue-gtm'

export const useTracking = () => {
  const gtm = useGtm()

  const trackEvent = (event: string, params: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return

    // ✅ التتبع الأساسي (Analytics) مسموح دائماً
    // ✅ التتبع التسويقي (Marketing) يحتاج موافقة
    const consent = localStorage.getItem('cookie_consent')
    
    // إذا كان الحدث تسويقي بحت (مثل generate_lead) نتحقق من الموافقة
    const marketingEvents = ['generate_lead', 'book_call_click', 'email_click']
    const isMarketingEvent = marketingEvents.includes(event)
    
    if (isMarketingEvent && consent !== 'granted') {
      if (import.meta.dev) console.log(`🛑 [GTM BLOCKED] Marketing Event: ${event} - No consent.`)
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

    window.dispatchEvent(new CustomEvent('mgh:track', {
      detail: { event, params: enriched }
    }))

    if (import.meta.dev) console.log('[GTM]', event, enriched)
  }

  return { trackEvent }
}