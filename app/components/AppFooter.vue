<template>
  <footer class="relative w-full border-t border-[color:var(--card-border)] bg-[color:var(--page-bg-1)] overflow-hidden pt-24 pb-8 transition-colors duration-500">
    
    <!-- Subtle Gradient Glow Background -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[color:var(--accent-1)]/10 to-transparent blur-[120px] pointer-events-none dark:opacity-50 opacity-20"></div>

    <div class="container mx-auto px-4 md:px-[120px] relative z-10">
      
      <!-- ============ TOP CTA (Controlled by Prop) ============ -->
      <div v-if="!hideTopCta">
        <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-10">
          <div class="max-w-2xl">
            <h2 class="text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)]">
              If your site is leaking deals —<br class="hidden sm:block" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]">let's find out why.</span>
            </h2>
          </div>
          
          <div class="shrink-0 mb-2">
            <AppButton to="/contact" variant="primary" size="lg" rounded="xl" icon-right="ArrowUpRight" @click="trackBookCall('footer_top')">
              Book a Free Audit Call
            </AppButton>
          </div>
        </div>

        <!-- Divider -->
        <div class="w-full h-px bg-[color:var(--card-border)] mb-16"></div>
      </div>

      <!-- ============ MIDDLE: The Grid ============ -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20" :class="{ 'mt-12': hideTopCta }">
        
        <!-- Brand & Intro -->
        <div class="md:col-span-6 flex flex-col items-start">
          <NuxtLink 
            to="/" 
            class="font-extrabold text-[32px] tracking-[-0.02em] text-[color:var(--ink)] no-underline mb-6 hover:opacity-80 transition-opacity"
            aria-label="Mamdouh Ghaneemy — Home"
          >
            M.
          </NuxtLink>
          <p class="text-[color:var(--ink-soft)] max-w-md mb-8 text-[15.5px] leading-[1.7]">
            Strategic Product Designer for Fintech & SaaS founders — from Pre-Series A to Series B. 
            One owner: strategy, design, build, and the analytics to prove it worked.
          </p>
          
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[color:var(--card-bg)] border border-[color:var(--card-border)] shadow-sm">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span class="text-sm font-medium text-[color:var(--ink)] tracking-wide">
              Next opening — {{ availabilityMonth }}
            </span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="md:col-span-3 flex flex-col gap-4">
          <h3 class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-[0.15em] mb-4 opacity-50">Navigation</h3>
          <NuxtLink to="/" class="footer-link group">Home <Icon name="lucide:arrow-up-right" class="footer-icon" /></NuxtLink>
          <NuxtLink to="/projects" class="footer-link group">Projects <Icon name="lucide:arrow-up-right" class="footer-icon" /></NuxtLink>
          <NuxtLink to="/about" class="footer-link group">About <Icon name="lucide:arrow-up-right" class="footer-icon" /></NuxtLink>
          <NuxtLink to="/blog" class="footer-link group">Playbooks <Icon name="lucide:arrow-up-right" class="footer-icon" /></NuxtLink>
          <NuxtLink to="/decisions" class="footer-link group">Design Logs <Icon name="lucide:arrow-up-right" class="footer-icon" /></NuxtLink>
          <NuxtLink to="/contact" class="footer-link group">Contact <Icon name="lucide:arrow-up-right" class="footer-icon" /></NuxtLink>
        </div>

        <!-- Connect -->
        <div class="md:col-span-3 flex flex-col gap-4">
          <h3 class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-[0.15em] mb-4 opacity-50">Connect</h3>
          
          <a href="https://linkedin.com/in/mamdouh-ghaneemy" target="_blank" rel="noopener" class="footer-link group flex-col !items-start gap-0.5" @click="trackLinkedinClick('footer_connect')">
            <span class="inline-flex items-center gap-1.5">
              LinkedIn <Icon name="lucide:arrow-up-right" class="footer-icon" />
            </span>
            <span class="text-[12.5px] text-[color:var(--ink-soft)] opacity-60 font-normal">
              Network, recommendations, writing
            </span>
          </a>
          
          <a href="https://behance.net/ghaneemy" target="_blank" rel="noopener" class="footer-link group flex-col !items-start gap-0.5"  @click="trackBehanceClick('footer_connect')">
            <span class="inline-flex items-center gap-1.5">
              Behance <Icon name="lucide:arrow-up-right" class="footer-icon" />
            </span>
            <span class="text-[12.5px] text-[color:var(--ink-soft)] opacity-60 font-normal">
              Visual portfolio & explorations
            </span>
          </a>
          
          <a href="mailto:hello@mamdouh-ghaneemy.com" class="footer-link group flex-col !items-start gap-0.5">
            <span class="inline-flex items-center gap-1.5">
              Email <Icon name="lucide:arrow-up-right" class="footer-icon" />
            </span>
            <span class="text-[12.5px] text-[color:var(--ink-soft)] opacity-60 font-normal">
              Reply within 24 hours — usually sooner
            </span>
          </a>
        </div>
        
      </div>

      <!-- ============ BOTTOM: Legal & Time ============ -->
      <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[color:var(--card-border)] gap-6">
        
        <p class="text-sm text-[color:var(--ink-soft)]">
          © {{ currentYear }} Mamdouh Ghaneemy. All rights reserved.
        </p>
        
        <div class="flex items-center gap-6 sm:gap-10 w-full md:w-auto justify-between md:justify-end">
          <!-- Local Time -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span class="text-[13px] text-[color:var(--ink-soft)] uppercase tracking-wider">Local time (EGY)</span>
            <span class="text-sm font-semibold text-[color:var(--ink)] tabular-nums">{{ localTime }}</span>
          </div>

          <!-- Back to Top -->
          <button 
            @click="scrollToTop" 
            class="group w-10 h-10 rounded-full bg-[color:var(--card-bg)] border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] shadow-sm hover:shadow-md hover:border-[color:var(--accent-text)] transition-all duration-300 hover:-translate-y-1 focus:outline-none"
            aria-label="Back to top"
          >
            <Icon name="lucide:arrow-up" class="w-[18px] h-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { trackEvent } = useTracking()

const trackEmailClick = (location: string) => {
  trackEvent('email_click', {
    link_location: location,
    current_page: route.path
  })
}

const trackLinkedinClick = (location: string) => {
  trackEvent('linkedin_click', {
    link_location: location,
    current_page: route.path
  })
}

const trackBookCall = (location: string) => {
  trackEvent('book_call_click', {
    cta_location: location,
    current_page: route.path
  })
}
const trackBehanceClick = (location: string) => {
  trackEvent('behance_click', {
    link_location: location,
    current_page: route.path
  })
}
defineProps({
  hideTopCta: {
    type: Boolean,
    default: false
  }
})

const currentYear = new Date().getFullYear()

const availabilityMonth = computed(() => {
  const now = new Date()
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  const monthName = nextMonth.toLocaleDateString('en-US', { month: 'long' })
  const year = nextMonth.getFullYear()
  return `${monthName} ${year}`
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const localTime = ref('')
let timer

const updateTime = () => {
  localTime.value = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Africa/Cairo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 60000)
})

onUnmounted(() => {
  clearInterval(timer)
})

</script>

<style scoped>
.footer-link {
  @apply text-[15.5px] font-medium text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors duration-300 inline-flex items-center gap-1.5 w-fit;
}

.footer-icon {
  @apply w-4 h-4 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[color:var(--accent-text)];
}
</style>