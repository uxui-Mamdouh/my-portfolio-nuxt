export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true,
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
      meta: [
        {
          name: 'google-site-verification',
          content: 'LKMGOdlieUwcUH5AuIw1oHe7gHIglY1MIOtRxC90cRc'
        }
      ]
    },
  },

  components: true,

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/sitemap"
  ],

  // ═══════════════════════════════════════════════════════
  // 🗺️ SITE + SITEMAP CONFIGURATION
  // ═══════════════════════════════════════════════════════
  site: {
    url: 'https://mamdouh-ghaneemy.com',
    name: 'Mamdouh Ghaneemy',
    description: 'Strategic Product Designer for Fintech & SaaS Founders',
    defaultLocale: 'en',
  },

  sitemap: {
    // 🚀 Sources — بتجيب المقالات والمشاريع من Supabase
    sources: [
      '/api/__sitemap__/urls',
    ],

    // 🚫 Exclude — صفحات مش محتاجة تتفهرس
    exclude: [
      '/blog-copy',
      '/404',
      '/admin/**',
      '/**?gtm_debug**',
      '/**?**',  // منع أي URL بـ query params
    ],

    // 📄 Static URLs — الصفحات الثابتة
    urls: [
      { loc: '/',          changefreq: 'weekly',  priority: 1.0 },
      { loc: '/about',     changefreq: 'monthly', priority: 0.8 },
      { loc: '/contact',   changefreq: 'monthly', priority: 0.9 },
      { loc: '/projects',  changefreq: 'weekly',  priority: 0.9 },
      { loc: '/blog',      changefreq: 'weekly',  priority: 0.9 },
      { loc: '/decisions', changefreq: 'monthly', priority: 0.7 },
    ],

    // ⚙️ إعدادات إضافية
    xsl: false,
    cacheMaxAgeSeconds: 3600,       // cache لمدة ساعة
    autoLastmod: true,              // تحديث lastmod تلقائياً
    trailingSlash: false,           // مهم لـ SEO
    
  },

  // ═══════════════════════════════════════════════════════
  // 🎨 MODULE CONFIGS
  // ═══════════════════════════════════════════════════════
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

  plugins: ["~/plugins/lenis.client.ts"],
  
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      gtmId: process.env.NUXT_PUBLIC_GTM_ID
    },
  },
});