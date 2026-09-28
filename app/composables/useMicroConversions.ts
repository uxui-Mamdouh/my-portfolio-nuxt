/**
 * Micro Conversions Helpers
 * ==========================
 * Handlers جاهزة لأحداث:
 * - whatsapp_click
 * - calendar_click
 * 
 * استخدمها لما تضيف الأزرار في المستقبل
 */

export const useMicroConversions = () => {
  const route = useRoute()
  const { trackEvent } = useTracking()

  /**
   * WhatsApp click
   * الاستخدام: @click="trackWhatsAppClick('contact_card')"
   */
  const trackWhatsAppClick = (location: string) => {
    trackEvent('whatsapp_click', {
      cta_location: location,
      current_page: route.path
    })
  }

  /**
   * Calendar click (Calendly / Cal.com)
   * الاستخدام: @click="trackCalendarClick('hero')"
   */
  const trackCalendarClick = (location: string, calendarProvider: string = 'calendly') => {
    trackEvent('calendar_click', {
      cta_location: location,
      calendar_provider: calendarProvider,
      current_page: route.path
    })
  }

  return {
    trackWhatsAppClick,
    trackCalendarClick
  }
}