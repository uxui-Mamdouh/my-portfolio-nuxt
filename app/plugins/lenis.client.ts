// app/plugins/lenis.client.ts
import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  // ✅ لا تعمل على الأجهزة اللمسية (موبايل/تابلت)
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (isTouch || prefersReducedMotion) {
    // ✅ نُعيد كائن وهمي حتى لا ينكسر الكود الذي يستدعيه
    nuxtApp.provide('lenis', {
      scrollTo: (target: any, opts?: any) => window.scrollTo({ top: 0, behavior: 'smooth' }),
      stop: () => {},
      start: () => {},
      raf: () => {},
      destroy: () => {},
    })
    return
  }

  // ✅ Lenis للـ Desktop فقط
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  nuxtApp.provide('lenis', lenis)
})