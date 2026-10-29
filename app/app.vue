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
    
    <AppPreloader class="preload-component" />
    <CustomCursor />
    <BackToTop />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  useIntentScore().pushSnapshot();
});
</script>

<style>
#__nuxt {
  width: 100%;
}

:deep(body.drawer-open) {
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .preload-component {
    display: none !important;
  }
  
}
</style>