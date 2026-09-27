<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    leave-active-class="transition-opacity duration-300 ease-in"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-[50]"
      aria-hidden="true"
      @click="$emit('close')"
    ></div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['close'])
</script>