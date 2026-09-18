<template>
  <div 
    class="hero relative w-full min-h-[calc(100vh-28px)] bg-no-repeat flex flex-col px-4 md:px-[120px]"
    :style="{
      backgroundImage: `url('${currentBg}')`,
      backgroundSize: isMobile ? '150%' : 'cover',
      backgroundPosition: isMobile ? 'center bottom -5%' : 'center',
      transition: 'background-image 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
    }"
  >
    <!-- Navbar Slot -->
    <slot name="nav"></slot>

    <!-- Hero Content -->
    <div class="content relative z-[4] flex-1 flex items-start md:items-center px-1 md:px-10 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        <div class="content-inner max-w-[640px] w-full mt-10 md:mt-0">
          
          <!-- Badge -->
          <span
            v-if="badgeText"
            class="badge inline-flex items-center gap-[9px] bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] py-2 pl-3 pr-4 rounded-full text-sm font-medium text-[color:var(--ink)] mb-[26px] animate-[rise_.7s_cubic-bezier(.19,1,.22,1)_both]"
          >
            <span
              v-if="showBadgeDot"
              class="dot w-2 h-2 rounded-full bg-[#33cc95] shadow-[0_0_0_4px_rgba(51,204,149,0.18)]"
            ></span>
            {{ badgeText }}
          </span>

          <!-- ═══════════════════════════════════════════
               Title — Line-by-Line Curtain Reveal (Sped Up)
               ═══════════════════════════════════════════ -->
          <h1 class="hero-title text-[clamp(34px,6vw,64px)] leading-[1.08] font-extrabold tracking-[-0.02em] mb-[22px] text-[color:var(--ink)]">
            <span
              v-for="(line, i) in titleLines"
              :key="i"
              class="hero-line block overflow-hidden"
            >
              <span
                class="hero-line-inner block"
                :style="{ animationDelay: `${0.1 + i * 0.03}s` }"
                v-html="line"
              ></span>
            </span>
          </h1>

          <!-- Description 1 -->
          <p
            v-if="desc1"
            class="lede text-base md:text-lg leading-[1.55] text-[color:var(--ink-soft)] mb-[14px] max-w-[480px] animate-[rise_.7s_.45s_cubic-bezier(.19,1,.22,1)_both]"
          >
            {{ desc1 }}
          </p>

          <!-- Description 2 -->
          <p
            v-if="desc2"
            class="lede text-base md:text-lg leading-[1.55]  max-w-[480px] animate-[rise_.7s_.55s_cubic-bezier(.19,1,.22,1)_both]"
            :class="
              isDesc2Bold
                ? 'font-bold text-[color:var(--ink)] text-[14px] md:text-[15px]'
                : 'text-[color:var(--ink-soft)]'
            "
          >
            {{ desc2 }}
          </p>

          <!-- Dynamic Buttons Mapping -->
          <div
            v-if="buttons && buttons.length"
            class="cta-row mt-[30px] flex flex-wrap gap-[14px] w-full md:w-auto animate-[rise_.7s_.65s_cubic-bezier(.19,1,.22,1)_both]"
          >
            <AppButton
              v-for="(btn, index) in buttons"
              :key="index"
              :to="btn.to"
              :href="btn.href"
              :variant="btn.variant || 'primary'"
              :size="btn.size || 'md'"
              :rounded="btn.rounded || 'xl'"
              :icon-left="btn.iconLeft"
              :icon-right="btn.iconRight"
              class="w-full sm:w-auto"
            >
              {{ btn.label }}
            </AppButton>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  // ═══ Title as Array of HTML lines ═══
  titleLines: {
    type: Array,
    default: () => []
  },

  // Texts
  badgeText: { type: String, default: '' },
  showBadgeDot: { type: Boolean, default: false },
  desc1: { type: String, default: '' },
  desc2: { type: String, default: '' },
  isDesc2Bold: { type: Boolean, default: false },

  // Dynamic Buttons Array
  buttons: { type: Array, default: () => [] },

  // Background Images
  bgLightDesktop: { type: String, required: true },
  bgDarkDesktop: { type: String, required: true },
  bgLightMobile: { type: String, required: true },
  bgDarkMobile: { type: String, required: true }
})

// Logic لاختيار الصورة الصحيحة
const colorMode = useColorMode()
const windowWidth = ref(1024)

const updateWindowWidth = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth
  }
}

const isMobile = computed(() => windowWidth.value < 768)

const currentBg = computed(() => {
  if (colorMode.value === 'dark') {
    return isMobile.value ? props.bgDarkMobile : props.bgDarkDesktop
  } else {
    return isMobile.value ? props.bgLightMobile : props.bgLightDesktop
  }
})

onMounted(() => {
  if (process.client) {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateWindowWidth)
  }
})
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
   HERO TITLE — Line-by-Line Curtain Reveal (Sped Up)
   ═══════════════════════════════════════════════════════ */

.hero-line {
  display: block;
  overflow: hidden;
  /* padding-bottom صغير لتفادي قص الحروف النازلة (y, g, p) */
  padding-bottom: 0.08em;
  margin-bottom: -0.08em;
}

.hero-line-inner {
  display: block;
  transform: translateY(110%);
  
  /* ⚡ أسرع: 0.75s بدل 1.1s */
  animation: heroLineReveal 0.50s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  
  will-change: transform;
  line-height: inherit;
}

@keyframes heroLineReveal {
  from {
    transform: translateY(110%);
  }
  to {
    transform: translateY(0);
  }
}

/* ═══════════════════════════════════════════════════════
   احترام تفضيلات المستخدم
   ═══════════════════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .hero-line-inner {
    transform: none;
    animation: none;
  }
}
</style>