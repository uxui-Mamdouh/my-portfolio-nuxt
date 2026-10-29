<template>
  <!-- استخدمنا v-show بدلاً من v-if للحفاظ على العنصر في الـ DOM لتجنب مشاكل إعادة الرسم -->
  <div v-show="!isTouch && isReady" ref="cursor" class="custom-cursor"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const isTouch = ref(false)
const isReady = ref(false)

let rafId: number | null = null
let moveHandler: ((e: MouseEvent) => void) | null = null
let overHandler: ((e: MouseEvent) => void) | null = null
let outHandler: ((e: MouseEvent) => void) | null = null

onMounted(() => {
  // 1. التأكد إنه مش جهاز تاتش
  if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
    isTouch.value = true
    return
  }

  // 2. إخفاء المؤشر حتى يكتمل تحميل الصفحة (لمنع التعارض مع الـ Preloader)
  // ننتظر قليلاً حتى تختفي شاشة التحميل
  setTimeout(() => {
    isReady.value = true
    initCursor()
  }, 1500) // تأخير بسيط جداً لضمان اختفاء الـ Preloader
})

const initCursor = () => {
  nextTick(() => {
    const el = cursor.value
    if (!el) return

    let x = 0, y = 0, targetX = 0, targetY = 0
    let scale = 1, targetScale = 1

    // 3. حركة الماوس
    moveHandler = (e: MouseEvent) => {
      targetX = e.clientX - el.offsetWidth / 2
      targetY = e.clientY - el.offsetHeight / 2
    }
    window.addEventListener('mousemove', moveHandler)

    // 4. الـ Animation Loop
    const update = () => {
      x += (targetX - x) * 0.2
      y += (targetY - y) * 0.2
      scale += (targetScale - scale) * 0.2
      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
      rafId = requestAnimationFrame(update)
    }
    update()

    // 5. التفاعل مع العناصر (تكبير الدايرة)
    const interactiveSelector = 'a, button, img, .cursor-hover'

    overHandler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(interactiveSelector)
      if (target) {
        targetScale = 2
        el.classList.add('cursor-active')
      }
    }

    outHandler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(interactiveSelector)
      if (target) {
        targetScale = 1
        el.classList.remove('cursor-active')
      }
    }

    document.addEventListener('mouseover', overHandler)
    document.addEventListener('mouseout', outHandler)
  })
}

onUnmounted(() => {
  if (moveHandler) window.removeEventListener('mousemove', moveHandler)
  if (overHandler) document.removeEventListener('mouseover', overHandler)
  if (outHandler) document.removeEventListener('mouseout', outHandler)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style>
.custom-cursor {
  display: block !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 99999 !important; 
  background-color: #6366f1 !important;
  opacity: 0.7 !important;
  transition: background-color 0.3s ease, opacity 0.3s ease !important;
  will-change: transform !important;
  transform: translate(-100px, -100px); /* مخفي بره الشاشة لحد ما يتحرك */
}

.custom-cursor.cursor-active {
  background-color: #000000 !important;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8) !important;
}

.dark .custom-cursor {
  background-color: #818cf8 !important;
}
.dark .custom-cursor.cursor-active {
  background-color: #ffffff !important;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8) !important;
}
</style>