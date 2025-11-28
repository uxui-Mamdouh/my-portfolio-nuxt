<template>
  <div
    class="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-neutral-200 z-50 flex items-center justify-between px-6 transition-all duration-300"
  >
    <span class="font-bold text-neutral-900 text-lg">AEO SaaS</span>
    <button
      @click="$emit('toggleMobileMenu')"
      class="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
    >
      <i data-lucide="menu" class="w-6 h-6"></i>
    </button>
  </div>
</template>

<script setup lang="ts"></script>
