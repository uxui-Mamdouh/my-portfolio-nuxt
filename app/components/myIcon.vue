<template>
  <Icon :name="name" :class="['text-2xl', textClass]" />
</template>

<script setup>
// --- props ---
const props = defineProps({
  name: {
    type: String,
    default: "solar:arrow-right-outline",
  },
  textClass: {
    type: String,
    default: "text-neutral-200", // اللون أو أي utility إضافي
  },
});
</script>
