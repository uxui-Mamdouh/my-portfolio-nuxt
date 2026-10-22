// plugins/gtm.client.ts
import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const initGtm = () => {
    nuxtApp.vueApp.use(
      createGtm({
        id: config.public.gtmId,
        enabled: process.client,
        debug: import.meta.dev,
        trackOnNextTick: false
      })
    )
    if (import.meta.dev) console.log('✅ [GTM] Initialized after consent.')
  }

  // 1. لو المستخدم وافق قبل كده في زيارة سابقة
  if (localStorage.getItem('cookie_consent') === 'granted') {
    initGtm()
  } else {
    // 2. استنى البانر لما يبعت إشارة الموافقة
    window.addEventListener('cookie_consent_update', (e: any) => {
      if (e.detail === 'granted') {
        initGtm()
      }
    })
  }
})