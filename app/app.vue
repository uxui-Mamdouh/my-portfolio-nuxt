<template>
  <div class="bg-neutral-50 dark:bg-neutral-800 relative">
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
    </Head>

    <!-- المؤشر المخصص -->
    <div ref="cursor" class="cursor"></div>

    <!-- عناصر التحكم -->
    <ThemeToggle class="fixed bottom-8 right-8 z-40" />
    <BackToTop class="fixed bottom-[80px] right-8 z-40" />

    <!-- المحتوى الرئيسي -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

// 🎯 كود المؤشر
const cursor = ref(null);

onMounted(() => {
  const el = cursor.value;
  if (!el) return;

  let x = 0,
    y = 0;
  let targetX = 0,
    targetY = 0;
  let rafId = null;

  // تحديث موضع المؤشر
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

  // تأثير hover على روابط وأزرار وصور
  setTimeout(() => {
    const hoverElems = document.querySelectorAll(
      "a, button, img, .cursor-hover"
    );
    hoverElems.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        el.classList.add("cursor-active");
      });
      target.addEventListener("mouseleave", () => {
        el.classList.remove("cursor-active");
      });
    });
  }, 100);

  onUnmounted(() => {
    window.removeEventListener("mousemove", move);
    if (rafId) cancelAnimationFrame(rafId);
  });
});
</script>

<style>
/* 🎨 شكل المؤشر */
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
  will-change: transform;
  backface-visibility: hidden;
}

/* عند المرور على العناصر */
.cursor-active {
  transform: scale(2);
  background-color: #000000;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8);
}

/* لون المؤشر في الوضع الداكن */
.dark .cursor {
  background-color: #818cf8;
}
.dark .cursor-active {
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8);
}
</style>
