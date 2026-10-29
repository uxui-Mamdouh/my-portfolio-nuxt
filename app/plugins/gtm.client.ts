// plugins/gtm.client.ts
import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // ✅ شغل GTM فوراً بغض النظر عن الموافقة
  // سيتم التحكم في ما يرسله من خلال Consent Mode
  nuxtApp.vueApp.use(
    createGtm({
      id: config.public.gtmId,
      enabled: process.client,
      debug: import.meta.dev,
      trackOnNextTick: false
    })
  )
  
  if (import.meta.dev) console.log('✅ [GTM] Initialized.')
})