<template>
  <div class="nav-wrap relative z-[50] py-5">
    <nav class="relative z-[60] flex items-center justify-between w-full mx-auto rounded-xl  bg-white/20 dark:bg-black/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3 pl-[26px] pr-[14px] transition-all duration-500">
      
      <!-- Logo -->
      <NuxtLink 
        to="/" 
        class="logo font-extrabold text-[22px] tracking-[-0.02em] text-[color:var(--accent-text)] no-underline hover:scale-105 transition-transform duration-300"
        aria-label="Mamdouh Ghaneemy — Home"
      >
        M.
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-[38px] list-none m-0 p-0 relative">
        <li v-for="link in navLinks" :key="link.path" class="relative group">
          <NuxtLink 
            :to="link.path" 
            class="nav-link block text-[color:var(--ink)] no-underline text-[15px] font-medium py-1 transition-all duration-300"
            :class="{ 'is-active': route.path === link.path }"
          >
            <span class="relative z-10 group-hover:text-[color:var(--accent-text)] transition-colors duration-300">
              {{ link.name }}
            </span>
            
            <!-- Active Indicator -->
            <span 
              class="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"
              :class="{ '!w-full shadow-[0_0_8px_rgba(109,94,240,0.6)]': route.path === link.path }"
            ></span>
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <!-- Theme Toggle -->
        <button 
          @click="toggleTheme" 
          type="button" 
          class="theme-toggle inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 dark:bg-black/40 border border-white/50 dark:border-white/10 text-[color:var(--ink)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white/60 dark:hover:bg-black/60"
          aria-label="Toggle color theme"
        >
          <svg v-if="colorMode.value === 'dark'" class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>

          <svg v-else class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </button> 

        <!-- Resume — Ghost -->
        <AppButton 
          to="/resume.pdf" 
          target="_blank"
          variant="ghost" 
          size="md" 
          rounded="xl" 
          class="hidden sm:inline-flex"
          @click="trackResumeDownload"
        >
          Resume
        </AppButton>

        <!-- CTA — موحّد مع كل الصفحات الداخلية -->
        <AppButton 
          to="/contact" 
          variant="primary" 
          size="md" 
          rounded="xl" 
          icon-right="ArrowRight"
          class="hidden sm:inline-flex"
          @click="trackPrimaryCtaClick('navbar_desktop')"
        >
          Book a Call
        </AppButton>

        <!-- Hamburger -->
        <button 
          @click="emit('toggleDrawer')" 
          class="relative z-[100] md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          :aria-label="isSheetOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isSheetOpen"
        >
          <span class="line block w-5 h-[2px] bg-[color:var(--ink)] rounded-sm transform origin-center transition-all duration-400" :class="isSheetOpen ? 'rotate-45 translate-y-[3.5px]' : ''"></span>
          <span class="line block w-5 h-[2px] bg-[color:var(--ink)] rounded-sm transform origin-center transition-all duration-400" :class="isSheetOpen ? '-rotate-45 -translate-y-[3.5px]' : ''"></span>
        </button>
      </div>
    </nav>

    <!-- === BOTTOM SHEET DRAWER === -->
    <div 
      class="fixed bottom-0 left-0 right-0 z-[100] bg-[color:var(--card-bg)] border-t border-[color:var(--card-border)] rounded-t-[32px] px-6 pt-4 pb-10 flex flex-col gap-5 transition-transform duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.4)]"
      style="transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);"
      :class="isSheetOpen ? 'translate-y-0' : 'translate-y-full'"
    >
      <div class="w-12 h-1.5 bg-[color:var(--card-border)] rounded-full mx-auto mb-2"></div>
      
      <div class="flex flex-col gap-2 mt-2">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path" 
          @click="emit('closeDrawer')"
          class="mobile-link text-[color:var(--ink)] text-xl font-semibold p-2 rounded-xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between group"
          :class="{ 'text-[color:var(--accent-text)] bg-black/5 dark:bg-white/5': route.path === link.path }"
        >
          {{ link.name }}
          <svg class="w-5 h-5 text-[color:var(--ink-soft)] transition-transform duration-300 group-hover:translate-x-1" :class="{ 'text-[color:var(--accent-text)] translate-x-1': route.path === link.path }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </NuxtLink>
      </div>
      
      <div class="h-[1px] w-full bg-[color:var(--card-border)] my-2"></div>
      
      <!-- Mobile CTA — موحّد مع Desktop -->
      <NuxtLink 
        @click="handleMobileCtaClick" 
        to="/contact" 
        class="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white font-semibold text-[16px] px-6 py-[16px] rounded-[16px] w-full shadow-[0_6px_16px_rgba(109,94,240,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        Book a Free Audit Call
        <svg class="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </NuxtLink>

      <!-- Response promise — microcopy -->
      <p class="text-center text-xs text-[color:var(--ink-soft)] flex items-center justify-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#33cc95]"></span>
        Reply within 24 hours — usually sooner
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useColorMode } from '#imports'
import { useTracking } from '~/composables/useTracking'

defineProps({
  isSheetOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggleDrawer', 'closeDrawer'])

const route = useRoute()
const colorMode = useColorMode()
const { trackEvent } = useTracking()

// ✅ Terminology موحّد
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Playbooks", path: "/blog" },        // ← كان "insights"
  { name: "Design Logs", path: "/decisions" },  // ← كان "Design Log"
  { name: "Contact", path: "/contact" },
]

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}

// ✅ Tracking موحّد
const trackResumeDownload = () => {
  trackEvent('cv_download', {
    page_location: route.path
  })
}

const trackPrimaryCtaClick = (location) => {
  trackEvent('primary_cta_click', {
    cta_label: 'book_a_call',
    button_location: location,
    current_page: route.path
  })
}

const handleMobileCtaClick = () => {
  emit('closeDrawer')
  trackPrimaryCtaClick('navbar_mobile')
}
</script>

<style scoped>
.nav-link:not(.is-active) {
  opacity: 0.7;
}
.nav-link:hover {
  opacity: 1;
}
.nav-link.is-active {
  opacity: 1;
  font-weight: 600;
}
</style>