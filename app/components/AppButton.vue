<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    :type="nativeType"
    :disabled="isDisabled"
    :class="[
      baseClasses,
      variantClasses[variant],
      sizeClasses[iconOnly ? 'icon' : size],
      roundedClasses[rounded],
      block && !iconOnly ? 'w-full flex' : 'inline-flex',
      isDisabled ? disabledClasses : '',
      motionClasses[motion],
      'group'
    ]"
    @click="handleClick"
  >
    <!-- ═══════════════════════════════════════════════════
         Corner Marks — تظهر فقط عند motion="corners"
         ═══════════════════════════════════════════════════ -->
    <template v-if="motion === 'corners'">
      <span aria-hidden="true" class="corner-mark corner-tl"></span>
      <span aria-hidden="true" class="corner-mark corner-tr"></span>
      <span aria-hidden="true" class="corner-mark corner-bl"></span>
      <span aria-hidden="true" class="corner-mark corner-br"></span>
    </template>

    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="animate-spin absolute z-20"
      :class="iconSizeClasses[size]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <!-- Content Wrapper -->
    <span
      class="cta btn-content relative z-10 inline-flex items-center justify-center gap-2 w-full transition-opacity duration-300"
      :class="{ 'opacity-0': loading }"
    >
      <!-- Icon Only Mode -->
      <template v-if="iconOnly">
        <component
          v-if="iconName"
          :is="lucideIcons[iconName]"
          :class="iconSizeClasses[size]"
          stroke-width="2"
        />
        <slot v-else name="icon"></slot>
      </template>

      <!-- Standard Mode -->
      <template v-else>
        <component
          v-if="iconLeft"
          :is="lucideIcons[iconLeft]"
          :class="iconSizeClasses[size]"
          stroke-width="2"
          class="shrink-0"
        />
        <slot v-else name="icon-left"></slot>

        <slot v-if="$slots.default"></slot>

        <component
          v-if="iconRight"
          :is="lucideIcons[iconRight]"
          :class="iconSizeClasses[size]"
          stroke-width="2"
          class="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
        <slot v-else name="icon-right"></slot>
      </template>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import * as lucideIcons from 'lucide-vue-next'

const props = defineProps({
  // Navigation
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  nativeType: { type: String, default: 'button' },

  // Style Options
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'solid', 'secondary', 'ghost', 'glass'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  rounded: {
    type: String,
    default: 'full',
    validator: (v) => ['none', 'sm', 'md', 'lg', 'xl', 'full'].includes(v)
  },
  block: { type: Boolean, default: false },

  // ═══════════════════════════════════════════════════════
  // Motion — 3 خيارات للحركة على الهوفر
  // 'ghost'     → طبقة "شبح" تظهر خلف الزر (الافتراضي)
  // 'breathing' → الحروف تتنفس (letter-spacing)
  // 'corners'   → 4 زوايا هندسية ترسم عند الهوفر
  // ═══════════════════════════════════════════════════════
  motion: {
    type: String,
    default: 'ghost',
    validator: (v) => ['ghost', 'breathing', 'corners'].includes(v)
  },

  // States
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },

  // Icon Control
  iconOnly: { type: Boolean, default: false },
  iconName: { type: String, default: null },
  iconLeft: { type: String, default: null },
  iconRight: { type: String, default: null },
})

const emit = defineEmits(['click'])

const componentTag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const isDisabled = computed(() => props.disabled || props.loading)

const handleClick = (e) => {
  if (!isDisabled.value) {
    emit('click', e)
  } else {
    e.preventDefault()
  }
}

// ═══════════════════════════════════════════════════════
// Base Classes
// ═══════════════════════════════════════════════════════
const baseClasses = "relative items-center justify-center font-semibold no-underline focus:outline-none transition-[transform,box-shadow,background-color] duration-300"

// ═══════════════════════════════════════════════════════
// Variant Classes — بدون lift، بدون hardcoded hover shadows
// ═══════════════════════════════════════════════════════
const variantClasses = {
  primary:
    "bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white shadow-[0_8px_20px_rgba(109,94,240,0.25)]",
  solid:
    "bg-[color:var(--ink)] text-[color:var(--page-bg-1)] shadow-sm",
  secondary:
    "bg-[color:var(--card-bg)] border border-[color:var(--card-border)] text-[color:var(--ink)] shadow-sm",
  ghost:
    "bg-transparent text-[color:var(--ink)]",
  glass:
    "bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 text-[color:var(--ink)] shadow-sm"
}

// ═══════════════════════════════════════════════════════
// Motion Classes — on root
// ═══════════════════════════════════════════════════════
const motionClasses = {
  ghost: 'motion-ghost',
  breathing: 'motion-breathing',
  corners: 'motion-corners',
}

// ═══════════════════════════════════════════════════════
// Size Classes
// ═══════════════════════════════════════════════════════
const sizeClasses = {
  sm: "text-[13.5px] px-4 py-[8px]",
  md: "text-[15px] px-6 py-[15px]",
  lg: "text-[16px] px-8 py-[18px]",
  icon: {
    sm: "w-8 h-8 p-0 flex",
    md: "w-10 h-10 p-0 flex",
    lg: "w-12 h-12 p-0 flex"
  }[props.size]
}

const iconSizeClasses = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}

// ═══════════════════════════════════════════════════════
// Rounded Classes
// ═══════════════════════════════════════════════════════
const roundedClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}

// ═══════════════════════════════════════════════════════
// Disabled State
// ═══════════════════════════════════════════════════════
const disabledClasses = "opacity-50 cursor-not-allowed shadow-none pointer-events-none"
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
   MOTION 1 — GHOST STACK (الافتراضي)
   طبقة "شبح" تظهر خلف الزر بإزاحة 6px عند الهوفر
   نستخدم box-shadow بـ 0 blur لإنشاء "نسخة ملوّنة" من الزر
   ═══════════════════════════════════════════════════════ */

.motion-ghost {
  box-shadow: 0 0 0 0 transparent;
  transition:
    box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.3s ease-out;
}

.motion-ghost:hover {
  box-shadow: 6px 6px 0 0 var(--accent-1);
}

.motion-ghost:active {
  box-shadow: 3px 3px 0 0 var(--accent-1);
  transform: translate(3px, 3px);
}

/* ═══════════════════════════════════════════════════════
   MOTION 2 — BREATHING TEXT
   الحروف تتنفس: letter-spacing يزيد قليلاً عند الهوفر
   ═══════════════════════════════════════════════════════ */

.motion-breathing .btn-content {
  transition: letter-spacing 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  letter-spacing: 0;
}

.motion-breathing:hover .btn-content {
  letter-spacing: 0.04em;
}

/* للموبايل — لا hover حقيقي، نعتمد على active */
@media (hover: none) {
  .motion-breathing:active .btn-content {
    letter-spacing: 0.04em;
  }
}

/* ═══════════════════════════════════════════════════════
   MOTION 3 — CORNER MARKS
   4 زوايا هندسية (crop marks) ترسم عند الهوفر
   ═══════════════════════════════════════════════════════ */

.motion-corners {
  /* نحتاج overflow: visible لتظهر الزوايا خارج الزر */
  overflow: visible !important;
}

.motion-corners .corner-mark {
  position: absolute;
  width: 10px;
  height: 10px;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.4);
  transition:
    opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Top-Left */
.corner-tl {
  top: -4px;
  left: -4px;
  border-top: 2px solid var(--accent-1);
  border-left: 2px solid var(--accent-1);
  border-top-left-radius: 2px;
}

/* Top-Right */
.corner-tr {
  top: -4px;
  right: -4px;
  border-top: 2px solid var(--accent-1);
  border-right: 2px solid var(--accent-1);
  border-top-right-radius: 2px;
}

/* Bottom-Left */
.corner-bl {
  bottom: -4px;
  left: -4px;
  border-bottom: 2px solid var(--accent-1);
  border-left: 2px solid var(--accent-1);
  border-bottom-left-radius: 2px;
}

/* Bottom-Right */
.corner-br {
  bottom: -4px;
  right: -4px;
  border-bottom: 2px solid var(--accent-1);
  border-right: 2px solid var(--accent-1);
  border-bottom-right-radius: 2px;
}

/* عند الهوفر — كل الزوايا تظهر بتتابع خفيف */
.motion-corners:hover .corner-tl {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0ms;
}

.motion-corners:hover .corner-tr {
  opacity: 1;
  transform: scale(1);
  transition-delay: 50ms;
}

.motion-corners:hover .corner-bl {
  opacity: 1;
  transform: scale(1);
  transition-delay: 100ms;
}

.motion-corners:hover .corner-br {
  opacity: 1;
  transform: scale(1);
  transition-delay: 150ms;
}

/* ═══════════════════════════════════════════════════════
   Reduced Motion
   ═══════════════════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .motion-breathing .btn-content,
  .motion-ghost,
  .motion-corners .corner-mark {
    transition-duration: 0.01ms !important;
  }
}
</style>