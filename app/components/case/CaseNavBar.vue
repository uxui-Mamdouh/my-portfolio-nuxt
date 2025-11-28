<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b dark:bg-neutral-800 border-neutral-200"
  >
    <div class="px-12 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="font-extrabold text-neutral-900 text-lg tracking-tight"
      >
        M.
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <NuxtLink
          to="/"
          class="text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          Projects
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          About
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Mobile Button -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 text-neutral-700 hover:text-neutral-900"
      >
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-white border-b border-neutral-200 shadow-sm px-12 py-4 flex flex-col gap-3"
    >
      <NuxtLink @click="close" to="/" class="mobile-item">Home</NuxtLink>
      <NuxtLink @click="close" to="/projects" class="mobile-item"
        >Projects</NuxtLink
      >
      <NuxtLink @click="close" to="/about" class="mobile-item">About</NuxtLink>
      <NuxtLink @click="close" to="/contact" class="mobile-item"
        >Contact</NuxtLink
      >
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mobileOpen = ref(false);

const toggleMenu = () => {
  mobileOpen.value = !mobileOpen.value;
};

const close = () => {
  mobileOpen.value = false;
};

onMounted(() => {
  if (window.lucide) window.lucide.createIcons();
});
</script>

<style scoped>
.mobile-item {
  @apply py-2 text-neutral-600 font-medium hover:text-neutral-900 transition-colors;
}
</style>
