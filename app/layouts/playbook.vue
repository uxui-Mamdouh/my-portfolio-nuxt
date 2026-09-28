<template>
  <div
    class="page-wrapper bg-[color:var(--page-bg-1)] min-h-screen transition-colors duration-300 relative"
  >
    <!-- THE READING PROGRESS BAR -->
    <div
      class="fixed top-0 left-0 h-1 bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] z-[60] transition-all duration-150 ease-out"
      :style="{ width: readingProgress + '%' }"
    ></div>

    <!-- MINIMAL TOPBAR -->
    <header
      class="playpack-header sticky md:fixed top-0 left-0 w-full z-50 bg-[color:var(--page-bg-1)]/90 backdrop-blur-md border-b border-[color:var(--card-border)] h-20 flex items-center transition-all duration-300 mt-1"
    >
      <div
        class="container mx-auto px-4 md:px-[60px] lg:px-[120px] flex items-center justify-between"
      >
        <!-- Logo / Home Link -->
        <NuxtLink
          to="/"
          class="font-extrabold text-2xl text-[color:var(--ink)] tracking-tighter hover:text-[color:var(--accent-1)] transition-colors"
        >
          M.
        </NuxtLink>

        <!-- Right Actions -->
        <div class="flex items-center gap-4 md:gap-6">
          <!-- Dark/Light Mode Toggle -->
          <ClientOnly>
            <button
              @click="toggleTheme"
              class="w-10 h-10 rounded-full border border-[color:var(--card-border)] bg-[color:var(--card-bg)] flex items-center justify-center text-[color:var(--ink)] hover:text-[color:var(--accent-1)] hover:border-[color:var(--accent-1)] transition-colors shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              <Icon v-if="isDark" name="lucide:sun" class="w-4.5 h-4.5" />
              <Icon v-else name="lucide:moon" class="w-4.5 h-4.5" />
            </button>
          </ClientOnly>

          <NuxtLink
            :to="backTo"
            class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] hover:text-[color:var(--accent-1)] transition-colors group"
          >
            <Icon
              :name="backIcon"
              class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            />
            {{ backLabel }}
          </NuxtLink>

          <AppButton to="/contact" variant="primary" size="sm" rounded="full">
            Let's Talk
          </AppButton>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT (Removed any overflow limits here) -->
    <main class="pt-32 pb-8 md:pb-20">
      <slot />
    </main>

    <!-- FOOTER -->
    <AppFooter :hide-top-cta="true" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// ✅ قراءة backLabel و backTo من route.meta
const backLabel = computed(() => route.meta.backLabel || "Playbooks");
const backTo = computed(() => route.meta.backTo || "/blog");
const backIcon = computed(() => route.meta.backIcon || "lucide:arrow-left");

// ================= LAYOUT PROPS =================
const props = defineProps({
  backLabel: {
    type: String,
    default: "Playbooks",
  },
  backTo: {
    type: String,
    default: "/blog",
  },
  backIcon: {
    type: String,
    default: "lucide:arrow-left",
  },
});

// ================= THEME TOGGLE — موحّد مع NavBar =================
// ✅ استخدام useColorMode() بدل الإدارة اليدوية
const colorMode = useColorMode();

// الحالة الحالية — تعمل تلقائياً مع النظام
const isDark = computed(() => colorMode.value === "dark");

const toggleTheme = () => {
  // ✅ بدّل بين light و dark — يُحفظ في nuxt-color-mode تلقائياً
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

// ================= PROGRESS BAR LOGIC =================
const readingProgress = ref(0);

const updateProgress = () => {
  if (process.client) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    readingProgress.value = Math.min(scrollPercent, 100);
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateProgress);
  updateProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});



watch(() => route.fullPath, (newPath) => {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'page_view',
    page_path: newPath,
    page_url: window.location.href,
    page_type: getPageType(newPath),
    timestamp: Date.now()
  })

  console.log('[PAGE_VIEW]', newPath)
}, { immediate: true })

function getPageType(path) {
  if (path === '/') return 'home'
  if (path.startsWith('/projects/')) return 'case_study'
  if (path.startsWith('/projects')) return 'projects'
  if (path.startsWith('/blog/')) return 'playbook'
  if (path.startsWith('/blog')) return 'blog'
  if (path.startsWith('/about')) return 'about'
  if (path.startsWith('/contact')) return 'contact'
  if (path.startsWith('/decisions')) return 'design_logs'
  return 'other'
}

</script>
<style>
.playpack-header {
  width: 100% !important;
}
</style>
