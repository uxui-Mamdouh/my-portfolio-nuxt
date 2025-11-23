<template>
  <article
    class="bg-indigo-50 hover:bg-indigo-600 rounded-3xl p-6 flex flex-col gap-6 group transition-all duration-300 ease-in hover:scale-[1.04] hover:-translate-y-2 hover:shadow-lg"
  >
    <div class="flex items-center gap-3">
      <!-- <img
        :src="image"
        :alt="`${name}, ${role}`"
        class="w-14 h-14 rounded-2xl transition-all duration-300 ease-in group-hover:scale-110 group-hover:rotate-6"
      /> -->
      <nuxt-img
        :src="image"
        :alt="`${name}, ${role}`"
        class="w-14 h-14 rounded-2xl transition-all duration-300 ease-in group-hover:scale-110 group-hover:rotate-6"
        format="webp"
        quality="80"
        loading="lazy"
      />
      <div class="flex flex-col gap-1">
        <h3
          class="text-neutral-700 text-xl font-medium transition-all duration-300 ease-in group-hover:translate-x-1 group-hover:text-indigo-100"
        >
          {{ name }}
        </h3>
        <p
          class="group-hover:text-indigo-200 text-neutral-500 text-base transition-all duration-300 ease-in group-hover:translate-x-2 group-hover:opacity-95"
        >
          {{ role }}
        </p>
      </div>
    </div>

    <p
      class="group-hover:text-indigo-100 text-neutral-600 text-lg transition-all duration-300 ease-in group-hover:translate-x-3 group-hover:opacity-95"
    >
      {{ description }}
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  role: string;
  description: string;
  image: string;
}>();
</script>
