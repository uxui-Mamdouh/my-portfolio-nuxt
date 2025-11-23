<template>
  <div
    class="group w-80 h-[420px] p-6 bg-indigo-50 rounded-3xl flex flex-col gap-6 transition-all duration-500 ease-[cubic-bezier(.19,1,.22,1)] hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl"
  >
    <div class="flex justify-end items-center">
      <div
        class="p-3 bg-indigo-200 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6"
        style="transition-delay: 100ms"
      >
        <Icon
          :name="icon"
          class="text-4xl text-indigo-600 transition-all duration-500 ease-in-out group-hover:scale-125"
          style="transition-delay: 200ms"
        />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <span
        class="text-neutral-900 text-4xl font-semibold transition-all duration-500 ease-in-out group-hover:text-indigo-700 group-hover:translate-x-2"
        style="transition-delay: 300ms"
        >{{ number }}</span
      >
      <div class="flex flex-col gap-4">
        <h3
          class="text-neutral-900 text-2xl font-semibold leading-9 transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
          style="transition-delay: 400ms"
        >
          {{ title }}
        </h3>
        <p
          class="text-neutral-700 text-base leading-normal transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:opacity-80"
          style="transition-delay: 500ms"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  number: { type: [String, Number], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>
