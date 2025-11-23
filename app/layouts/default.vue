<template>
  <div>
    <slot />
  </div>
</template>
<style>
.page-enter-active {
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-leave-active {
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-enter-from {
  opacity: 0; /* transform: scale(0.96) translateY(8px); */
  filter: blur(4px);
}
.page-leave-to {
  opacity: 0; /* transform: scale(1.02) translateY(-6px); */
  filter: blur(3px);
} /* (اختياري) تثبيت الشاشة لمنع التمرير أثناء الانتقال */
.page-leave-active {
  position: fixed;
  inset: 0;
  z-index: 50;
}
</style>
<script setup>
const nuxtApp = useNuxtApp();

onMounted(() => {
  // Scroll لأعلى بعد التنقل
  nuxtApp.$lenis?.scrollTo(0, { immediate: true });
});

onUpdated(() => {
  nuxtApp.$lenis?.scrollTo(0, { immediate: true });
});
</script>
