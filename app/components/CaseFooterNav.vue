<template>
  <div class="mt-32 py-16 border-t border-neutral-200">
    <div class="max-w-4xl mx-auto px-6">
      <!-- CTA Hiring -->
      <div class="text-center mb-20">
        <h3 class="text-2xl font-bold text-neutral-900 mb-3">
          Have a similar project?
        </h3>
        <p class="text-neutral-600 mb-6">
          I help companies design clear, impactful, user-centered products.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-all"
        >
          Let’s Work Together
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </NuxtLink>
      </div>

      <!-- Prev / Next Cards -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Previous -->
        <NuxtLink
          v-if="prev"
          :to="prev.link"
          class="group p-6 bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 rounded-2xl hover:shadow-xl transition-all flex gap-6"
        >
          <img :src="prev.image" class="w-24 h-24 rounded-xl object-cover" />
          <div class="flex flex-col justify-center">
            <p class="text-xs uppercase tracking-wider text-neutral-400 mb-1">
              Previous Project
            </p>
            <h4
              class="font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors"
            >
              {{ prev.title }}
            </h4>
          </div>
        </NuxtLink>

        <!-- Next -->
        <NuxtLink
          v-if="next"
          :to="next.link"
          class="group p-6 bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 rounded-2xl hover:shadow-xl transition-all flex gap-6"
        >
          <img :src="next.image" class="w-24 h-24 rounded-xl object-cover" />
          <div class="flex flex-col justify-center">
            <p class="text-xs uppercase tracking-wider text-neutral-400 mb-1">
              Next Project
            </p>
            <h4
              class="font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors"
            >
              {{ next.title }}
            </h4>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  prev: {
    type: Object,
    default: null,
  },
  next: {
    type: Object,
    default: null,
  },
});
</script>
