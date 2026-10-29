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

    // ✅ 1. جهاز لمسي حقيقي فقط: لازم "لا hover" + "pointer coarse"
    // (لابتوب بشاشة لمس + ماوس/تراك باد = مش هيتعرف كـ touch)
    const noHover = window.matchMedia('(hover: none)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    isTouch.value = noHover && coarse

    isMobile.value = window.innerWidth < 768

    // 2. تفضيل المستخدم لحركات أقل
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // 3. جهاز ضعيف — معايير ألطف (2GB RAM / أقل من 2 cores)
    const memory = (navigator as any).deviceMemory
    const cores = navigator.hardwareConcurrency || 4
    isLowEndDevice.value = (memory && memory < 2) || cores < 2

    // 4. اتصال بطيء جدًا فقط (slow-2g / 2g) — '3g' مش بطيء دائمًا
    const connection = (navigator as any).connection
    if (connection) {
      isSlowConnection.value = ['slow-2g', '2g'].includes(connection.effectiveType)
    }
  }

  // ✅ init متزامن على الكلاينت — يمنع فلاش الكيرسور
  // (on server: typeof window === 'undefined' → detect() بترجع فورًا)
  if (typeof window !== 'undefined') detect()

  onMounted(detect)

  // ✅ الحركات تتعطل فقط لو المستخدم طلب تقليل الحركة
  // الأجهزة الضعيفة/الاتصال البطيء → حل مبسط، مش إخفاء كامل
  const shouldAnimate = () => {
    return !prefersReducedMotion.value
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