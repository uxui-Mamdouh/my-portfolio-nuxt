<template>
  <div class="min-h-screen flex flex-col bg-white text-neutral-900">
    <!-- Top Navigation -->
    <CaseNavBar />

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer Navigation (Prev / Next Projects) -->
    <CaseFooterNav
      :prev="{
        title: 'E-Commerce Redesign',
        link: '/projects/ecommerce',
        image: '/img/projects/ecommerce.jpg',
      }"
      :next="{
        title: 'AI Dashboard UX',
        link: '/projects/ai-dashboard',
        image: '/img/projects/ai.jpg',
      }"
    />

    <!-- Global Footer -->
    <footer
      class="py-12 border-t border-neutral-100 text-center text-neutral-400 text-sm"
    >
      <p>© 2025 Case Studies. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUpdated } from "vue";
import CaseNavBar from "~/components/CaseNavBar.vue";

const nuxtApp = useNuxtApp();

/**
 * Scroll to top when page loads or route changes
 * Works with Lenis plugin that you're already using.
 */
onMounted(() => {
  nuxtApp.$lenis?.scrollTo(0, { immediate: true });
});

onUpdated(() => {
  nuxtApp.$lenis?.scrollTo(0, { immediate: true });
});
</script>

<style scoped>
/* Page transitions from nuxt.config.js (matching your setup) */

.page-enter-active {
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-leave-active {
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  filter: blur(4px);
}
.page-leave-to {
  opacity: 0;
  filter: blur(3px);
}

/* Optional — prevent scrolling during page leave */
.page-leave-active {
  position: fixed;
  inset: 0;
  z-index: 50;
}
</style>
