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
      ] ,
      script: [
  {
    tagPosition: 'head',
    tagPriority: 'critical',
    innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'granted', // ← التغيير الأساسي
        'wait_for_update': 500
      });
    `
  }
],
link: [
        {
          rel: 'manifest',
          href: '/manifest.json'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
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
    "@nuxtjs/sitemap"
    // ✅ تم إزالة @nuxt/content
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
    // 🔒 private — server-only (يتجاوز RLS — لا يُكشف أبداً للعميل)
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,

    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      gtmId: process.env.NUXT_PUBLIC_GTM_ID,
    },
  },
});