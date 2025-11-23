<template>
  <div
    class="group w-full md:w-64 p-6 bg-indigo-50 rounded-2xl flex flex-col items-start gap-6 transition-all duration-300 ease-in hover:scale-[1.04] hover:-translate-y-2 hover:shadow-lg"
  >
    <span
      class="text-indigo-600 text-sm font-medium transition-all duration-300 ease-in group-hover:text-indigo-800 group-hover:translate-x-1"
      style="transition-delay: 80ms"
      >{{ number }}</span
    >
    <div
      class="w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-xl text-white transition-all duration-300 ease-in group-hover:scale-110 group-hover:rotate-6"
      style="transition-delay: 160ms"
    >
      <Icon :name="icon" size="24" />
    </div>
    <div class="flex flex-col gap-2">
      <h3
        class="text-2xl font-semibold text-neutral-800 transition-all duration-300 ease-in group-hover:translate-x-1 group-hover:text-indigo-700"
        style="transition-delay: 200ms"
      >
        {{ title }}
      </h3>
      <p
        class="text-neutral-700 text-base leading-relaxed transition-all duration-300 ease-in group-hover:translate-x-2 group-hover:opacity-95"
        style="transition-delay: 240ms"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string | number;
  icon: string;
  title: string;
  description: string;
}>();
</script>
