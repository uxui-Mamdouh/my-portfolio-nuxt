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
      css: false, // تعطيل الـ CSS Transitions للاعتماد على GSAP
      
      onEnter: (el, done) => {
        // استدعاء GSAP عالمياً
        const gsap = window.gsap || require('gsap').gsap; 
        
        // تجهيز العنصر: شفاف ومسحوب للأسفل قليلاً
        gsap.set(el, { opacity: 0, y: 30 });
        
        // الدخول البطيء والفخم (Fade in & Slide up)
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.2, // بطيء ومريح للعين
          ease: 'power4.out', // حركة سريعة في البداية وتستقر ببطء شديد
          onComplete: done
        });
      },
      
      onLeave: (el, done) => {
        const gsap = window.gsap || require('gsap').gsap;
        
        // الخروج: يختفي ويتحرك للأعلى
        gsap.to(el, {
          opacity: 0,
          y: -30, 
          duration: 0.8, // خروج أسرع قليلاً من الدخول لعدم إملال المستخدم
          ease: 'power3.inOut',
          onComplete: done
        });
      }
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
    // "nuxt-aos",
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