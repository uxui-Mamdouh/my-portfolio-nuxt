<template>
  <ClientOnly>
    <Transition name="rail-enter">
      <div
        v-show="visible"
        class="fixed right-6 bottom-8 z-40 hidden md:flex flex-col items-center gap-3 group"
      >
        <!-- ═══════════════════════════════════════
             ☀️/🌙 THEME TOGGLE — same hover as arrow
             ═══════════════════════════════════════ -->
        <button
          @click="toggleTheme"
          class="relative w-10 h-10 rounded-full cursor-pointer border
                 bg-[color:var(--card-bg)]/90 backdrop-blur-md
                 border-[color:var(--card-border)]
                 flex items-center justify-center
                 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.4)_inset]
                 transition-all duration-500 ease-out
                 hover:-translate-y-1 hover:scale-105
                 hover:border-[color:var(--accent-1)]
                 hover:shadow-[0_14px_36px_-8px_rgba(109,94,240,0.55),0_0_0_1px_rgba(109,94,240,0.15)_inset]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-1)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
        >
          <!-- Sun icon (dark mode active) -->
          <svg
            v-if="isDark"
            class="w-[18px] h-[18px] text-[color:var(--ink)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>

          <!-- Moon icon (light mode active) -->
          <svg
            v-else
            class="w-[18px] h-[18px] text-[color:var(--ink)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>

        <!-- ═══════════════════════════════════════
             ⬆️ ARROW BUTTON — with Arrow Swap
             ═══════════════════════════════════════ -->
        <button
          @click="scrollToTop"
          class="back-to-top-btn relative w-10 h-10 rounded-full cursor-pointer border-none p-0
                 bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)]
                 shadow-[0_6px_20px_-4px_rgba(109,94,240,0.5),0_0_0_1px_rgba(255,255,255,0.12)_inset]
                 transition-all duration-500 ease-out
                 hover:-translate-y-1 hover:scale-105
                 hover:shadow-[0_14px_36px_-8px_rgba(109,94,240,0.75),0_0_0_1px_rgba(255,255,255,0.2)_inset]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-1)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                 flex items-center justify-center overflow-hidden"
          aria-label="Back to top"
        >
          <!-- Subtle shine sweep on hover -->
          <span
            class="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent
                   opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            aria-hidden="true"
          ></span>

          <!-- ═══ Arrow Wrapper — عمودي، يقص الأسهم خارج الإطار ═══ -->
          <span
            class="arrow-swap relative inline-flex flex-col items-center justify-center w-[18px] h-[18px] overflow-hidden"
            aria-hidden="true"
          >
            <!-- Arrow 1 — في الموضع الأصلي -->
            <Icon
              name="lucide:arrow-up"
              class="arrow-swap-icon absolute w-[18px] h-[18px] text-white"
            />
            <!-- Arrow 2 — تحت، جاهز للدخول -->
            <Icon
              name="lucide:arrow-up"
              class="arrow-swap-icon-clone absolute w-[18px] h-[18px] text-white"
            />
          </span>
        </button>

        <!-- ═══════════════════════════════════════
             🎚️ THE SCROLL SLIDER — Draggable rail
             ═══════════════════════════════════════ -->
        <div
          ref="railRef"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
          @lostpointercapture="onPointerUp"
          class="relative w-4 h-[140px] select-none touch-none focus:outline-none"
          :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
          role="slider"
          :aria-valuenow="Math.round(progress)"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-valuetext="`${Math.round(progress)}% scrolled`"
          aria-label="Page scroll position"
          tabindex="0"
          @keydown.up.prevent="nudge(-5)"
          @keydown.down.prevent="nudge(5)"
          @keydown.page-up.prevent="nudge(-20)"
          @keydown.page-down.prevent="nudge(20)"
          @keydown.home.prevent="scrollToTop"
          @keydown.end.prevent="scrollToBottom"
          @keydown.enter.prevent="scrollToTop"
          @keydown.space.prevent="scrollToTop"
        >
          <!-- ─── Rail (background track) ─── -->
          <span
            class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-[color:var(--card-border)] rounded-full transition-all duration-300 group-hover:w-[4px]"
            :class="isDragging && '!w-[5px]'"
            aria-hidden="true"
          ></span>

          <!-- ─── Rail inner glow (visible on hover) ─── -->
          <span
            class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-[color:var(--accent-1)]/0 via-[color:var(--accent-1)]/10 to-[color:var(--accent-1)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="isDragging && '!opacity-100'"
            aria-hidden="true"
          ></span>

          <!-- ─── Fill (from top to knob = scrolled portion) ─── -->
          <span
            class="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[color:var(--accent-1)] via-[color:var(--accent-2)] to-[color:var(--accent-1)] rounded-full transition-[width] duration-300 group-hover:w-[4px]"
            :class="isDragging && '!w-[5px]'"
            :style="{ height: `${progress}%` }"
            aria-hidden="true"
          ></span>

          <!-- ─── Knob (draggable dot) ─── -->
          <span
            class="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white dark:bg-[color:var(--ink)] border-[2.5px] border-[color:var(--accent-1)] transition-transform duration-200 will-change-transform pointer-events-none"
            :class="[
              !isDragging && 'rail-dot-pulse',
              isDragging && 'scale-[1.35] !border-[color:var(--accent-2)]',
            ]"
            :style="{ top: `calc(${progress}% - 6px)` }"
            aria-hidden="true"
          ></span>

          <!-- ─── Floating % bubble (visible during drag) ─── -->
          <Transition name="bubble">
            <span
              v-show="isDragging"
              class="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-[color:var(--ink)] text-[color:var(--page-bg-1)] font-mono text-[10px] font-bold tabular-nums shadow-xl pointer-events-none"
              :style="{ transform: `translateY(-50%) scale(${isDragging ? 1 : 0.9})` }"
            >
              {{ Math.round(progress) }}%
            </span>
          </Transition>
        </div>

        <!-- ═══════════════════════════════════════
             🔢 PERCENTAGE (idle state)
             ═══════════════════════════════════════ -->
        <span
          class="font-mono text-[11px] font-bold tabular-nums text-[color:var(--ink-soft)] tracking-tight transition-colors duration-500 group-hover:text-[color:var(--accent-1)]"
          aria-hidden="true"
        >
          {{ Math.round(progress) }}<span class="text-[8px] opacity-40 ml-px">%</span>
        </span>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ═══ Nuxt App (for Lenis) ═══
const nuxtApp = useNuxtApp()

// ═══ Color Mode ═══
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// ═══ State ═══
const visible = ref(false)
const progress = ref(0)
const isDragging = ref(false)
const railRef = ref(null)

// ═══ Internal refs ═══
let rafId = null
let ticking = false
let activePointerId = null

// ═══════════════════════════════════════
// 📐 Scroll helpers
// ═══════════════════════════════════════
const getMaxScroll = () =>
  document.documentElement.scrollHeight - window.innerHeight

const scrollImmediate = (y) => {
  if (nuxtApp.$lenis) {
    nuxtApp.$lenis.scrollTo(y, { immediate: true })
  } else {
    window.scrollTo(0, y)
  }
}

const scrollSmooth = (y, duration = 1.2) => {
  if (nuxtApp.$lenis) {
    nuxtApp.$lenis.scrollTo(y, { duration })
  } else {
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

// ═══════════════════════════════════════
// 📊 Progress updater
// ═══════════════════════════════════════
const update = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const max = getMaxScroll()
  progress.value = max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0
  visible.value = scrollTop > 200
}

const onScroll = () => {
  if (!ticking) {
    ticking = true
    rafId = requestAnimationFrame(() => {
      update()
      ticking = false
    })
  }
}

// ═══════════════════════════════════════
// 🎚️ DRAG LOGIC
// ═══════════════════════════════════════
const pointerToScroll = (clientY) => {
  if (!railRef.value) return 0
  const rect = railRef.value.getBoundingClientRect()
  const ratio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
  return getMaxScroll() * ratio
}

const onPointerDown = (e) => {
  if (e.button !== 0 && e.pointerType === 'mouse') return

  isDragging.value = true
  activePointerId = e.pointerId

  railRef.value?.setPointerCapture(e.pointerId)

  const targetY = pointerToScroll(e.clientY)
  scrollImmediate(targetY)
  update()

  e.preventDefault()
}

const onPointerMove = (e) => {
  if (!isDragging.value || e.pointerId !== activePointerId) return

  const targetY = pointerToScroll(e.clientY)
  scrollImmediate(targetY)
  update()
}

const onPointerUp = (e) => {
  if (!isDragging.value) return
  if (e && e.pointerId !== activePointerId) return

  isDragging.value = false

  if (railRef.value && activePointerId !== null) {
    try {
      railRef.value.releasePointerCapture(activePointerId)
    } catch (_) {
      /* capture already released */
    }
  }
  activePointerId = null
}

// ═══════════════════════════════════════
// ⌨️ KEYBOARD
// ═══════════════════════════════════════
const nudge = (deltaPercent) => {
  const max = getMaxScroll()
  const currentY = window.scrollY || document.documentElement.scrollTop
  const target = currentY + (max * deltaPercent) / 100
  scrollSmooth(Math.max(0, Math.min(max, target)), 0.35)
}

const scrollToTop = () => {
  scrollSmooth(0, 1.4)
}

const scrollToBottom = () => {
  scrollSmooth(getMaxScroll(), 1.4)
}

// ═══════════════════════════════════════
// 🚀 LIFECYCLE
// ═══════════════════════════════════════
onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', update, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', update)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
/* ═══ Entrance Animation ═══ */
.rail-enter-enter-active,
.rail-enter-leave-active {
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.rail-enter-enter-from,
.rail-enter-leave-to {
  opacity: 0;
  transform: translateX(28px);
}

/* ═══════════════════════════════════════
   ⬆️ ARROW SWAP — على الهوفر فقط
   ═══════════════════════════════════════ */

.arrow-swap-icon {
  top: 0;
  transform: translateY(0);
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
}

.arrow-swap-icon-clone {
  top: 0;
  transform: translateY(150%);
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
}

.back-to-top-btn:hover .arrow-swap-icon {
  transform: translateY(-150%);
}

.back-to-top-btn:hover .arrow-swap-icon-clone {
  transform: translateY(0);
}

/* ═══ Knob pulse (idle) ═══ */
@keyframes dot-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 5px rgba(109, 94, 240, 0.12),
      0 0 18px rgba(109, 94, 240, 0.4);
  }
  50% {
    box-shadow: 0 0 0 9px rgba(109, 94, 240, 0.06),
      0 0 28px rgba(109, 94, 240, 0.55);
  }
}
.rail-dot-pulse {
  animation: dot-pulse 2.6s ease-in-out infinite;
}

/* ═══ % Bubble entrance ═══ */
.bubble-enter-active,
.bubble-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.bubble-enter-from,
.bubble-leave-to {
  opacity: 0;
  transform: translateY(-50%) scale(0.85);
}

/* ═══ Reduced Motion ═══ */
@media (prefers-reduced-motion: reduce) {
  .rail-dot-pulse {
    animation: none;
  }
  .arrow-swap-icon,
  .arrow-swap-icon-clone {
    transition: none;
  }
  * {
    transition-duration: 0.01ms !important;
  }
}
</style>