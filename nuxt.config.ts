export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true, // تفعيل الـ SSR
  devtools: { enabled: true },

  css: ["~/assets/css/main.css", "~/assets/css/style.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  components: true, // تأكد أن Nuxt يقرأ المكونات تلقائيًا

  modules: [
    "@nuxt/icon",
    "nuxt-aos",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },

  icon: {
    clientBundle: {
      scan: true,
    },
    collections: ["solar"],
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: "swap",
  },

  plugins: ["~/plugins/lenis.client.ts", "~/plugins/gtm.client.ts"],
});
