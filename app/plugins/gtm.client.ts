// استيراد المكتبة أولًا
import VueGtm from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const gtmId = config.public.gtmId || "GTM-MCJMCRXQ";

  nuxtApp.vueApp.use(VueGtm, {
    id: gtmId,
    enabled: true,
    debug: false,
    loadScript: true,
    vueRouter: useRouter(),
    trackOnNextTick: false,
  });
});
