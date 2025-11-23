<template>
  <header class="flex flex-col gap-3">
    <span
      v-if="subTitle"
      class="text-indigo-600 text-sm font-normal leading-tight"
    >
      {{ subTitle }}
    </span>

    <h2 class="text-neutral-800 text-3xl font-bold leading-10">
      {{ title }}
    </h2>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subTitle?: string;
}

defineProps<Props>();
</script>

<style scoped>
/* optional: register font-inter once globally */
.font-inter {
  font-family: "Inter", sans-serif;
}
</style>
