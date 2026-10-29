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
    
    <AppPreloader />
    <CustomCursor />
    <BackToTop />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieBanner />
  </div>
</template>

<script setup>
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
</style>