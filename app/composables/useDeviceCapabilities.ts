// app/composables/useDeviceCapabilities.ts
import { ref, onMounted } from 'vue'

export const useDeviceCapabilities = () => {
  const isMobile = ref(false)
  const isTouch = ref(false)
  const prefersReducedMotion = ref(false)
  const isLowEndDevice = ref(false)
  const isSlowConnection = ref(false)

  const detect = () => {
    if (typeof window === 'undefined') return

    // 1. جهاز لمسي (موبايل/تابلت)
    isTouch.value = window.matchMedia('(pointer: coarse)').matches
    isMobile.value = window.innerWidth < 768

    // 2. تفضيل المستخدم لحركات أقل
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // 3. جهاز ضعيف (ذاكرة أقل من 4GB أو معالج بطيء)
    const memory = (navigator as any).deviceMemory
    const cores = navigator.hardwareConcurrency || 4
    isLowEndDevice.value = (memory && memory < 4) || cores < 4

    // 4. اتصال بطيء
    const connection = (navigator as any).connection
    if (connection) {
      isSlowConnection.value = ['slow-2g', '2g', '3g'].includes(connection.effectiveType)
    }
  }

  onMounted(detect)

  // ✅ دالة مساعدة: هل نستخدم الحركات؟
  const shouldAnimate = () => {
    return !prefersReducedMotion.value && !isLowEndDevice.value && !isSlowConnection.value
  }

  return {
    isMobile,
    isTouch,
    prefersReducedMotion,
    isLowEndDevice,
    isSlowConnection,
    shouldAnimate,
  }
}