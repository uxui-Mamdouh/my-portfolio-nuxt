<template>
  <NuxtLink
    :to="to"
    :class="rounedBorder"
    class="cursor-pointer group relative bg-neutral-200 hover:bg-neutral-50 text-indigo-600 font-semibold text-sm px-8 py-4 border border-indigo-600 transition-all duration-200 ease-in-out shadow hover:shadow-lg w-fit h-fit"
  >
    <div class="relative flex items-center justify-center gap-2">
      <span class="relative inline-block overflow-hidden">
        <span
          class="block transition-transform duration-300 group-hover:-translate-y-full"
        >
          {{ textMain }}
        </span>
        <span
          class="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
        >
          {{ textSec }}
        </span>
      </span>
      <MyIcon
        :name="iconName"
        textClass="text-indigo-600"
        class="text-base transition-transform duration-200 group-hover:rotate-45"
      />
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  textMain: {
    type: String,
    default: "Hire Me for Your Team",
  },
  textSec: {
    type: String,
    default: "Right Now",
  },
  to: {
    type: String,
    default: "/contact",
  },

  iconName: {
    type: String,
    default: "solar:box-minimalistic-bold",
  },
  rounedBorder: {
    type: String,
    default: "rounded-2xl ",
  },
});
</script>
