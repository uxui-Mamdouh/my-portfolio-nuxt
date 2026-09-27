export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true, // تفعيل الـ SSR
  devtools: { enabled: true },

  css: ["~/assets/css/main.css", "~/assets/css/style.css"],

  // ==========================================
  // إعدادات الـ App و GSAP Transitions
  // ==========================================
  app: {
    pageTransition: { 
      name: "page", 
      mode: "out-in",
     
    },
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  components: true, // تأكد أن Nuxt يقرأ المكونات تلقائيًا

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/sitemap"
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
      Manrope: [400, 500, 600, 700, 800],
    },
    display: "swap",
  },

  plugins: ["~/plugins/lenis.client.ts", "~/plugins/gtm.client.ts"],
  
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
});