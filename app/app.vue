<template>
  <div class="relative">   
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
    </Head>
     <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-P24NNWGB");
    </script>
    <AppPreloader />
    <CustomCursor />
    <BackToTop />
    <!-- عناصر التحكم -->

    <!-- المحتوى الرئيسي -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
     <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-P24NNWGB"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style>
#__nuxt {
  width: 100%;
}
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
:deep(body.drawer-open) {
  overflow: hidden;
}
</style>
