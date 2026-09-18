<template>
  <!-- 
    شاشة التحميل (Preloader)
    تغطي الشاشة بالكامل بخلفية داكنة جداً (أو فاتحة حسب الثيم)
    وتختفي فقط عندما تكتمل عملية التحميل
  -->
  <div 
    v-show="!isComplete"
    ref="preloader" 
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[color:var(--page-bg-1)] text-[color:var(--ink)]"
  >
    <!-- اللوجو أو العلامة -->
    <div ref="logo" class="font-extrabold text-5xl tracking-tighter opacity-0 mb-4">
      M.
    </div>

    <!-- شريط التقدم (Progress Line) والعداد (Counter) -->
    <div class="flex flex-col items-center gap-2">
      <!-- العداد (مثال: 100%) -->
      <div ref="counter" class="font-mono text-sm font-bold opacity-0">
        0%
      </div>
      
      <!-- شريط التحميل (الخط) -->
      <div class="w-32 h-[2px] bg-[color:var(--card-border)] rounded-full overflow-hidden">
        <div ref="progressLine" class="h-full w-0 bg-[color:var(--accent-1)] rounded-full"></div>
      </div>
    </div>
  </div>
</template>

// app/components/AppPreloader.vue
<script setup>
import { ref, onMounted } from 'vue'
const { gsap } = await import('gsap')  // Lazy
import { useNuxtApp } from '#app'
import { useDeviceCapabilities } from '~/composables/useDeviceCapabilities'

const isComplete = ref(false)
const preloader = ref(null)
const logo = ref(null)
const counter = ref(null)
const progressLine = ref(null)
const nuxtApp = useNuxtApp()

// ✅ كشف الجهاز
const { shouldAnimate, prefersReducedMotion } = useDeviceCapabilities()

onMounted(() => {
  if (nuxtApp.$lenis) nuxtApp.$lenis.stop()
  document.body.style.overflow = 'hidden'

  // ✅ لو المستخدم يفضّل حركة أقل → تخطّى الـ preloader تماماً
  if (!shouldAnimate()) {
    isComplete.value = true
    document.body.style.overflow = ''
    if (nuxtApp.$lenis) nuxtApp.$lenis.start()
    return
  }

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
    duration: 1.2 * speed,           // ← أسرع (كان 1.5)
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
    duration: 0.7 * speed,            // ← أسرع (كان 0.8)
    ease: 'power4.inOut',
    // ❌ احذف: delay: 0.2
  })
})
</script>