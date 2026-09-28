<template>
  <main>
    <slot />
    <AppFooter :hide-top-cta="true" />
  </main>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useNuxtApp, useRoute } from '#app'

const nuxtApp = useNuxtApp()
const route = useRoute()

// ✅ Scroll reset فقط عند تغيير الصفحة (بدل onUpdated العنيف)
watch(() => route.path, () => {
  // ننتظر قليلاً حتى تنتهي حركة الـ transition
  setTimeout(() => {
    if (nuxtApp.$lenis) {
      nuxtApp.$lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, 300) // ← يزامن مع page-leave duration
})

onMounted(() => {
  // تأكد أننا في أعلى الصفحة عند أول تحميل
  if (nuxtApp.$lenis) {
    nuxtApp.$lenis.scrollTo(0, { immediate: true })
  } else {
    window.scrollTo(0, 0)
  }
})



watch(() => route.fullPath, (newPath) => {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'page_view',
    page_path: newPath,
    page_url: window.location.href,
    page_type: getPageType(newPath),
    timestamp: Date.now()
  })

  console.log('[PAGE_VIEW]', newPath)
}, { immediate: true })

function getPageType(path) {
  if (path === '/') return 'home'
  if (path.startsWith('/projects/')) return 'case_study'
  if (path.startsWith('/projects')) return 'projects'
  if (path.startsWith('/blog/')) return 'playbook'
  if (path.startsWith('/blog')) return 'blog'
  if (path.startsWith('/about')) return 'about'
  if (path.startsWith('/contact')) return 'contact'
  if (path.startsWith('/decisions')) return 'design_logs'
  return 'other'
}

</script>

<style>
/* =========================================
   🎬 PAGE TRANSITIONS — احترافية
   ========================================= */
.page-enter-active {
  transition: 
    opacity var(--motion-page-enter) var(--ease-out-quart),
    transform var(--motion-page-enter) var(--ease-out-quart);
}

.page-leave-active {
  transition: 
    opacity var(--motion-page-leave) var(--ease-in-out-cubic),
    transform var(--motion-page-leave) var(--ease-in-out-cubic);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ✅ احترام المستخدم */
@media (prefers-reduced-motion: reduce) {
  .page-enter-from,
  .page-leave-to {
    transform: none;
  }
}
</style>