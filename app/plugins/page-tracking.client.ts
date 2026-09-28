export default defineNuxtPlugin(() => {
  // الـ plugin ده مش بيعمل push للـ page_view
  // GTM History Change Trigger هو المسؤول
  // بنسيبه للـ future use (session intent, etc)
  console.log('[PAGE-TRACKING] Plugin loaded ✅ (page_view handled by GTM)')
})