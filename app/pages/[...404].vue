<template>
  <div class="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden selection:bg-[color:var(--accent-1)] selection:text-white pt-20">
    
    <!-- Background Glow Effect (The "Error" Red Vibe) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,rgba(229,72,77,0.06)_0%,transparent_60%)] pointer-events-none"></div>

    <div class="max-w-3xl w-full mx-auto relative z-10 animate-[rise_.6s_cubic-bezier(.19,1,.22,1)_both]">
      
      <!-- Error Code & Badge -->
      <div class="flex flex-col md:flex-row md:items-end gap-6 mb-8">
        <h1 class="text-[6rem] md:text-[9rem] font-black leading-none tracking-tighter text-[color:var(--ink)]">
          404
        </h1>
        <div class="pb-3 md:pb-6">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            Event Logged
          </span>
        </div>
      </div>

      <!-- The UX Copy -->
      <h2 class="text-3xl md:text-4xl font-extrabold text-[color:var(--ink)] tracking-tight mb-4">
        This link is broken (and logged).
      </h2>
      
      <p class="text-lg md:text-xl text-[color:var(--ink-soft)] leading-relaxed max-w-2xl mb-8 md:mb-12">
        As a data-driven designer, I hate dead ends. My analytics stack just caught this <strong class="text-[color:var(--ink)]">404 event</strong> on route <code class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-1.5 py-0.5 rounded text-[14px]">{{ currentPath }}</code>, and it will be fixed. In the meantime, let's get you back on track.
      </p>

      <!-- Recovery Options (The Routing Strategy) -->
      <div class="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <!-- Primary Recovery -->
        <!-- 🚀 تم حقن تتبع التعافي هنا -->
        <NuxtLink 
          to="/" 
          @click="trackEvent('404_recovery_click', { action: 'home' })"
          class="group bg-[color:var(--ink)] hover:bg-black dark:hover:bg-white text-white dark:text-black border border-[color:var(--ink)] rounded-xl p-5 text-left transition-[transform,box-shadow,background-color] duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <h3 class="font-bold text-sm mb-1 flex items-center justify-between">
            Return Home
            <Icon name="lucide:arrow-right" class="w-4 h-4 opacity-0 -translate-x-2 transition-[transform,box-shadow,background-color] duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </h3>
          <p class="text-xs opacity-70">Start over from the beginning.</p>
        </NuxtLink>

        <!-- Secondary Recovery (Content) -->
        <!-- 🚀 تم حقن تتبع التعافي هنا -->
        <NuxtLink 
          to="/projects" 
          @click="trackEvent('404_recovery_click', { action: 'case_study' })"
          class="group bg-[color:var(--card-bg)] hover:bg-[color:var(--input-bg)] border border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] text-[color:var(--ink)] rounded-xl p-5 text-left transition-[transform,box-shadow,background-color] duration-300"
        >
          <h3 class="font-bold text-sm mb-1 flex items-center justify-between">
            Read a Case Study
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-[color:var(--accent-1)] opacity-0 -translate-x-2 transition-[transform,box-shadow,background-color] duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </h3>
          <p class="text-xs text-[color:var(--ink-soft)]">See how I fix funnels like this.</p>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
// 🚀 استدعاء الـ Composable للتتبع
import { useTracking } from '~/composables/useTracking'

const route = useRoute()
const currentPath = route.path
const { trackEvent } = useTracking()

setResponseStatus(404)

// 🚀 تتبع ظهور الخطأ فور تحميل المكون
onMounted(() => {
  trackEvent('404_view', { broken_path: currentPath })
})

usePageMeta({
  title: 'Page Not Found — Event Logged | Mamdouh Ghaneemy',
  description: 'This link is broken and logged. Let me help you find what you were looking for.',
  noindex: true, // ← مهم: لا تفهرس صفحات 404
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: '404', url: route.path },
  ],
})
</script>

<style scoped>
@keyframes rise {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>