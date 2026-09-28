<template>
  <div class="featured-article-wrapper">
    
    <!-- =========================================================
         V1 — Split Ledger
         ========================================================= -->
    <section v-if="variant === 'v1'" class="py-24 md:py-32 relative group">
      <div class="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0 items-start">
        <div class="font-mono text-[100px] md:text-[150px] font-medium leading-none text-transparent self-start pointer-events-none" style="-webkit-text-stroke: 1.5px var(--card-border);">
          {{ indexNumber }}
        </div>
        
        <!-- 🚀 إطلاق حدث النقر وتمرير نوع الـ Variant -->
        <NuxtLink 
  :to="computedLink" 
  :target="isExternalLink ? '_blank' : '_self'" 
  class="border-l border-[color:var(--card-border)] pl-8 md:pl-14 relative pb-10 block cursor-pointer"
  @mouseenter="isHovered = true" 
  @mouseleave="isHovered = false"
  @click="trackEvent('playbook_open', { 
    playbook_slug: article.slug, 
    entry_point: 'featured_blog',
    variant_type: variant 
  })"
>
          <!-- ... محتوى V1 الداخلي ... -->
          <div class="flex items-center gap-2 mb-5">
            <span class="text-[10px] font-bold tracking-[0.04em] text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 rounded-md px-2.5 py-1">
              {{ article.category_label || 'Insight' }}
            </span>
            <span class="text-[10px] font-bold tracking-[0.04em] text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-md px-2.5 py-1">
              {{ article.read_time_minutes }} Min Read
            </span>
          </div>
          
          <h2 class="text-4xl md:text-[56px] font-extrabold tracking-[-0.02em] leading-[1.05] text-[color:var(--ink)] max-w-[720px] mb-5 transition-colors group-hover:text-[color:var(--accent-1)]">
            {{ article.title }}
          </h2>
          <p class="text-[color:var(--ink-soft)] leading-[1.6] max-w-[600px] mb-8 text-[15px] md:text-base line-clamp-3">
            {{ article.excerpt }}
          </p>
        </NuxtLink>
      </div>
    </section>

    <!-- =========================================================
         V5 — Ticker Anchor
         ========================================================= -->
    <section v-else-if="variant === 'v5'" class="py-24 md:py-32 text-center overflow-hidden">
      <div class="max-w-[1240px] mx-auto px-6">
        <span class="block text-[12px] font-semibold text-[color:var(--accent-text)] mb-5">Latest Deep Dive</span>
        
        <!-- 🚀 إطلاق حدث النقر -->
        <NuxtLink 
          :to="computedLink" 
          :target="isExternalLink ? '_blank' : '_self'" 
          class="group inline-block cursor-pointer"
        @click="trackEvent('playbook_open', { 
  playbook_slug: article.slug, 
  entry_point: 'featured_ticker',
  variant_type: variant 
})"
        >
          <h2 class="text-4xl md:text-[64px] font-extrabold tracking-[-0.02em] leading-[1.05] text-[color:var(--ink)] max-w-[820px] mx-auto mb-6 transition-colors group-hover:text-[color:var(--accent-1)]">
            {{ article.title }}
          </h2>
          <p class="text-[color:var(--ink-soft)] leading-[1.6] max-w-[560px] mx-auto text-[15px] md:text-base line-clamp-2">
            {{ article.excerpt }}
          </p>
        </NuxtLink>
      </div>
      <!-- ... Ticker Content ... -->
    </section>

    <!-- =========================================================
         V6 — Sidebar Rail
         ========================================================= -->
    <section v-else-if="variant === 'v6'" class="py-24 md:py-32">
      <div class="max-w-[1240px] mx-auto px-6 flex gap-0">
        <!-- ... Rail Content ... -->
        
        <div class="flex-1 md:pl-12 md:border-l border-[color:var(--card-border)] flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          <div class="flex-1">
            <span class="text-[10px] font-bold tracking-[0.04em] text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 rounded-md px-2.5 py-1 inline-block mb-4">
              {{ article.category_label || 'Insight' }} · Featured
            </span>
            
            <!-- 🚀 إطلاق حدث النقر -->
            <NuxtLink 
              :to="computedLink" 
              :target="isExternalLink ? '_blank' : '_self'" 
              class="group cursor-pointer block"
              @click="trackEvent('playbook_open', { 
  playbook_slug: article.slug, 
  entry_point: 'featured_sidebar',
  variant_type: variant 
})"
            >
              <h2 class="text-3xl md:text-[46px] font-extrabold tracking-[-0.02em] leading-[1.1] text-[color:var(--ink)] max-w-[520px] mb-4 transition-colors group-hover:text-[color:var(--accent-1)]">
                {{ article.title }}
              </h2>
              <p class="text-[color:var(--ink-soft)] leading-[1.6] max-w-[460px] text-[15px] md:text-base line-clamp-3">
                {{ article.excerpt }}
              </p>
            </NuxtLink>
          </div>

          <!-- 🚀 إطلاق حدث النقر على الصورة أيضاً -->
          <NuxtLink 
            v-if="article.thumbnail_url" 
            :to="computedLink" 
            :target="isExternalLink ? '_blank' : '_self'" 
            class="w-full lg:w-[280px] shrink-0 border border-[color:var(--card-border)] rounded-xl overflow-hidden group cursor-pointer block"
            @click="trackEvent('featured_article_click', { variant_type: variant, article_slug: article.slug })"
          >
            <img :src="article.thumbnail_url" class="w-full aspect-square object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-[transform,box-shadow,background-color] duration-500" alt="Article Thumbnail">
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// 🚀 استدعاء الـ Composable للتتبع
import { useTracking } from '~/composables/useTracking'

const props = defineProps({
  article: { type: Object, required: true },
  variant: { type: String, default: 'v1', validator: (value) => ['v1', 'v5', 'v6'].includes(value) },
  indexNumber: { type: String, default: '01' },
  articleLink: { type: String, default: '' }
})

const isHovered = ref(false)
const { trackEvent } = useTracking() // تهيئة التتبع

const computedLink = computed(() => {
  if (props.articleLink) return props.articleLink
  if (props.article.external_url) return props.article.external_url
  return `/blog/${props.article.slug}`
})

const isExternalLink = computed(() => computedLink.value.startsWith('http'))

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
trackEvent('playbook_open', { 
  playbook_slug: article.slug,
  variant_type: variant,
  entry_point: 'featured'
})
</script>