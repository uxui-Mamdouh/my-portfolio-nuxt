<template>
  <div v-show="!isTouch" ref="cursor" class="cursor"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useDeviceCapabilities } from '~/composables/useDeviceCapabilities'

const cursor = ref(null)
const { isTouch, shouldAnimate, isLowEndDevice } = useDeviceCapabilities()

let rafId = null
let moveHandler = null
let overHandler = null
let outHandler = null

onMounted(() => {
  // 🔍 Debug — شيله بعد ما تتأكد إن كل حاجة شغالة
  console.log('[Cursor]', {
    isTouch: isTouch.value,
    shouldAnimate: shouldAnimate(),
    isLowEndDevice: isLowEndDevice.value,
    el: !!cursor.value,
    display: cursor.value ? getComputedStyle(cursor.value).display : 'no-el',
    pointerCoarse: window.matchMedia('(pointer: coarse)').matches,
    hoverNone: window.matchMedia('(hover: none)').matches,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    cores: navigator.hardwareConcurrency,
    deviceMemory: (navigator as any).deviceMemory,
  })

  if (isTouch.value) return

  const el = cursor.value
  if (!el) return

  // لو حركة مخفضة أو جهاز ضعيف → حركة مباشرة بدون lerp/raf
  const useLerp = shouldAnimate() && !isLowEndDevice.value

  let x = 0, y = 0, targetX = 0, targetY = 0
  let scale = 1, targetScale = 1

  moveHandler = (e) => {
    targetX = e.clientX - el.offsetWidth / 2
    targetY = e.clientY - el.offsetHeight / 2
    if (!useLerp) {
      el.style.transform = `translate(${targetX}px, ${targetY}px) scale(${scale})`
    }
  }

  window.addEventListener('mousemove', moveHandler)

  if (useLerp) {
    const update = () => {
      x += (targetX - x) * 0.2
      y += (targetY - y) * 0.2
      scale += (targetScale - scale) * 0.2
      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
      rafId = requestAnimationFrame(update)
    }
    update()
  }

  const interactiveSelector = 'a, button, img, .cursor-hover'

  overHandler = (e) => {
    if (e.target?.closest?.(interactiveSelector)) {
      el.classList.add('cursor-active')
      targetScale = 2
      if (!useLerp) el.style.transform = `translate(${targetX}px, ${targetY}px) scale(2)`
    }
  }

  outHandler = (e) => {
    const target = e.target?.closest?.(interactiveSelector)
    if (target) {
      const related = e.relatedTarget
      if (!related || !target.contains(related)) {
        el.classList.remove('cursor-active')
        targetScale = 1
        if (!useLerp) el.style.transform = `translate(${targetX}px, ${targetY}px) scale(1)`
      }
    }
  }

  document.addEventListener('mouseover', overHandler)
  document.addEventListener('mouseout', outHandler)
})

onUnmounted(() => {
  if (moveHandler) window.removeEventListener('mousemove', moveHandler)
  if (overHandler) document.removeEventListener('mouseover', overHandler)
  if (outHandler) document.removeEventListener('mouseout', outHandler)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor {
  display: block;           /* ✅ تأمين صريح ضد أي override */
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background-color: #6366f1;
  opacity: 0.7;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  will-change: transform;
  backface-visibility: hidden;
}

.cursor-active {
  background-color: #000000;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8);
}

:global(.dark) .cursor {
  background-color: #818cf8;
}
:global(.dark) .cursor-active {
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8);
}

/* ✅ تم حذف @media (pointer: coarse) — الـ JS (v-show) مسؤول عن الإخفاء */
</style>