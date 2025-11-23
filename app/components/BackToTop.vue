<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-300 border-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 shadow-md"
      aria-label="Back to top"
    >
      <MyIcon
        name="solar:arrow-up-linear"
        textClass="text-neutral-800 dark:text-neutral-100"
      />
      <span class="sr-only">Back to top</span>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300; // يظهر بعد 300px
};

const scrollToTop = () => {
  const nuxtApp = useNuxtApp();
  nuxtApp.$lenis?.scrollTo(0);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
