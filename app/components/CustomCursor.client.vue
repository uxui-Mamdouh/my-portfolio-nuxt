<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const cursor = ref(null);

onMounted(() => {
  const el = cursor.value;
  if (!el) return;

  let x = 0,
    y = 0;
  let targetX = 0,
    targetY = 0;
  let rafId = null;

  // حركة الماوس
  const move = (e) => {
    targetX = e.clientX - el.offsetWidth / 2;
    targetY = e.clientY - el.offsetHeight / 2;
  };

  const update = () => {
    x += (targetX - x) * 0.2;
    y += (targetY - y) * 0.2;
    el.style.transform = `translate(${x}px, ${y}px)`;
    rafId = requestAnimationFrame(update);
  };

  window.addEventListener("mousemove", move);
  update();

  // تأثير hover على عناصر محددة مع تأخير لضمان تحميل DOM
  setTimeout(() => {
    const hoverElems = document.querySelectorAll(
      "a, button, img, .cursor-hover"
    );
    hoverElems.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        if (el) el.classList.add("cursor-active");
      });
      target.addEventListener("mouseleave", () => {
        if (el) el.classList.remove("cursor-active");
      });
    });
  }, 100);

  onUnmounted(() => {
    window.removeEventListener("mousemove", move);
    if (rafId) cancelAnimationFrame(rafId);
  });
});
</script>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background-color: #6366f1;
  opacity: 0.7;
  transition: transform 0.15s ease-out, background-color 0.3s ease;
  /* إضافة خصائص للأداء */
  will-change: transform;
  backface-visibility: hidden;
}

.cursor-active {
  transform: scale(2);
  background-color: #000000;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8);
}
</style>
