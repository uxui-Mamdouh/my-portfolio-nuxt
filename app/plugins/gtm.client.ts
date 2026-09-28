import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(
    createGtm({
      id: config.public.gtmId,
      enabled: process.client,
      debug: import.meta.dev,
      trackOnNextTick: false
      // ✅ شيلنا vueRouter — هنعمله يدوي في plugin منفصل
    })
  )
})