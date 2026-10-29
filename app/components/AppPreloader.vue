<template>
  <div 
    v-show="!isComplete"
    ref="preloader" 
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[color:var(--page-bg-1)] text-[color:var(--ink)]"
  >
    <!-- اللوجو -->
    <div ref="logo" class="font-extrabold text-5xl tracking-tighter opacity-0 mb-4">
      M.
    </div>

    <!-- شريط التقدم والعداد -->
    <div class="flex flex-col items-center gap-2">
      <div ref="counter" class="font-mono text-sm font-bold opacity-0">
        0%
      </div>
      
      <div class="w-32 h-[2px] bg-[color:var(--card-border)] rounded-full overflow-hidden">
        <div ref="progressLine" class="h-full w-0 bg-[color:var(--accent-1)] rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { useDeviceCapabilities } from '~/composables/useDeviceCapabilities'

const isComplete = ref(false)
const preloader = ref(null)
const logo = ref(null)
const counter = ref(null)
const progressLine = ref(null)
const nuxtApp = useNuxtApp()

const { shouldAnimate, prefersReducedMotion } = useDeviceCapabilities()

onMounted(async () => {
  if (nuxtApp.$lenis) nuxtApp.$lenis.stop()
  document.body.style.overflow = 'hidden'

  // ✅ Fallback أمان: إخفاء الـ Preloader غصباً بعد 3.5 ثانية لو حصل أي خطأ
  setTimeout(() => {
    if (!isComplete.value) {
      isComplete.value = true
      document.body.style.overflow = ''
      if (nuxtApp.$lenis) nuxtApp.$lenis.start()
    }
  }, 3500)

  // لو المستخدم مفضل حركة أقل، أو جهاز ضعيف
  if (!shouldAnimate()) {
    isComplete.value = true
    document.body.style.overflow = ''
    if (nuxtApp.$lenis) nuxtApp.$lenis.start()
    return
  }

  try {
    // استدعاء GSAP بطريقة آمنة
    const { gsap } = await import('gsap')
    
    const progressObj = { value: 0 }
    const speed = prefersReducedMotion.value ? 0.3 : 1

    const tl = gsap.timeline({
      onComplete: () => {
        isComplete.value = true
        document.body.style.overflow = ''
        if (nuxtApp.$lenis) nuxtApp.$lenis.start()
      }
    })

    tl.to([logo.value, counter.value], {
      opacity: 1,
      y: 0,
      duration: 0.5 * speed,
      ease: 'power2.out',
    })
    .to(progressLine.value, {
      width: '100%',
      duration: 1.2 * speed,
      ease: 'power3.inOut'
    }, '-=0.2')
    .to(progressObj, {
      value: 100,
      duration: 1.2 * speed,
      ease: 'power3.inOut',
      onUpdate: () => {
        if (counter.value) {
          counter.value.textContent = Math.round(progressObj.value) + '%'
        }
      }
    }, '<')
    .to(preloader.value, {
      yPercent: -100,
      duration: 0.7 * speed,
      ease: 'power4.inOut',
    })
  } catch (error) {
    console.error("GSAP Error in Preloader:", error)
    // لو GSAP حصلها مشكلة، نقفل الـ Preloader فوراً
    isComplete.value = true
    document.body.style.overflow = ''
    if (nuxtApp.$lenis) nuxtApp.$lenis.start()
  }
})
</script>