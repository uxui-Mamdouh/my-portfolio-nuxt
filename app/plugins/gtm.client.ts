// plugins/gtm.client.ts
import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // ✅ شغل GTM فوراً. 
  // جوجل سيتعرف على التحليلات لأننا جعلناها granted في GTM وفي البانر.
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