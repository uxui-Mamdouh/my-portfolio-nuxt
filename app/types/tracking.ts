export const TrackingEvents = {
  // ==== Navigation & Page ====
  PAGE_VIEW: 'page_view',

  // ==== Intent & CTA ====
  CTA_CLICK: 'cta_click',
  BOOK_CALL_CLICK: 'book_call_click',
  CONTACT_FORM_START: 'contact_form_start',
  CONTACT_FORM_SUBMIT: 'generate_lead',
  EMAIL_CLICK: 'email_click',
  EMAIL_COPIED: 'email_copied',
  LINKEDIN_CLICK: 'linkedin_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  RESUME_DOWNLOAD: 'resume_download',

  // ==== Content ====
  CASE_STUDY_OPEN: 'case_study_open',
  PLAYBOOK_OPEN: 'playbook_open',
  DESIGN_LOG_OPEN: 'design_log_open',
  CROSS_CASE_LINK: 'cross_case_link',
  EXTERNAL_LINK: 'external_link_click',
  READING_COMPLETE: 'reading_complete',

  // ==== Engagement ====
  SCROLL_MILESTONE: 'scroll_milestone',
  SECTION_VIEW: 'section_view',
  THEME_TOGGLE: 'theme_toggle',
  FAQ_EXPAND: 'faq_expand',
  BACK_TO_TOP: 'back_to_top',

  // ==== Form Friction ====
  FORM_FIELD_FOCUS: 'form_field_focus',
  FORM_FIELD_CONFUSION: 'form_field_confusion',
  FORM_FIELD_PASTE: 'form_field_paste',
  FORM_FIELD_ABANDON: 'form_field_abandon',

  // ==== Errors & UX ====
  ERROR_404_VIEW: '404_view',
  JS_ERROR: 'js_error',
  RAGE_CLICK: 'rage_click',
  DEAD_CLICK: 'dead_click',
  QUICK_BACK: 'quick_back',
  CTA_HESITATION: 'cta_hesitation',

  // ==== Session Quality ====
  SESSION_QUALITY: 'session_quality',
  HIGH_INTENT_SESSION: 'high_intent_session',

  // ==== Multi-Session ====
  USER_INTENT_SNAPSHOT: 'user_intent_snapshot',
  RETURN_VISIT: 'return_visit',
  DORMANT_REACTIVATION: 'dormant_reactivation',
  PAGE_REVISIT: 'page_revisit'
} as const

export type TrackingEvent = typeof TrackingEvents[keyof typeof TrackingEvents]