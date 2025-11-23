<template>
  <button
    @click="toggleTheme"
    class="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors border-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-800"
    :aria-pressed="theme === 'dark'"
  >
    <span class="flex items-center justify-center" v-if="theme === 'light'">
      <MyIcon
        name="material-symbols-light:light-mode"
        textClass="text-neutral-800"
      />
    </span>
    <span class="flex items-center justify-center" v-else>
      <MyIcon
        name="material-symbols-light:dark-mode"
        textClass="text-neutral-800"
      />
    </span>
    <span class="sr-only">Toggle theme</span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "~/composables/useTheme";
const { theme, toggleTheme } = useTheme();
</script>
