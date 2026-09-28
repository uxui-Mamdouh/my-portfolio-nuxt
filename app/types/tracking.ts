export const TrackingEvents = {

  PAGE_VIEW: 'page_view',

  HERO_CTA_CLICK: 'hero_cta_click',

  CONTACT_CLICK: 'contact_click',

  NAVIGATION_CLICK: 'navigation_click',

  ARTICLE_OPEN: 'article_open',

  CASE_STUDY_OPEN: 'case_study_open',

  NEWSLETTER_SUBMIT: 'newsletter_submit',

  EMAIL_CLICK: 'email_click',

  WHATSAPP_CLICK: 'whatsapp_click',

  CV_DOWNLOAD: 'cv_download',

  THEME_CHANGE: 'theme_change'

} as const

export type TrackingEvent =
  typeof TrackingEvents[keyof typeof TrackingEvents]