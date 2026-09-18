// app/plugins/aos.client.ts
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isTouch = window.matchMedia('(pointer: coarse)').matches

  AOS.init({
    duration: prefersReducedMotion ? 0 : 600,
    easing: 'ease-out-cubic',
    once: true,           // ← يعمل مرة واحدة فقط (أداء)
    offset: 80,           // ← يبدأ قبل قليل
    delay: 0,             // ← يمنع التأخيرات
    disable: isTouch || prefersReducedMotion ? true : false,  // ✅ تعطيل كامل للأجهزة الضعيفة
    mirror: false,        // ← لا يعيد الحركة عند الرجوع للأعلى
    anchorPlacement: 'top-bottom',
  })

  // ✅ إعادة الحساب عند تغيير الصفحة
  nuxtApp.hook('page:finish', () => {
    AOS.refreshHard()
  })
})