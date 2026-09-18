<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)]">
    <!-- === BACKDROP === -->
    <div 
      class="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-[50] transition-opacity duration-400 ease-out"
      :class="isSheetOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeSheet"
    ></div>

    <!-- ================= 1. HERO SECTION ================= -->
    <HeroSection
      badge-text="Field Notes & Playbooks"
      :show-badge-dot="true"
      desc1="Unfiltered notes on how SaaS and FinTech companies actually solve complex UI problems, reduce churn, and scale."
      desc2="0% fluff. 100% actionable metrics and component architecture."
      :is-desc2-bold="true"
      :buttons="heroButtons"
      :bg-light-desktop="imgLightDesktop"
      :bg-dark-desktop="imgDarkDesktop"
      :bg-light-mobile="imgLightMobile"
      :bg-dark-mobile="imgDarkMobile"
    >
      <template #nav>
        <NavBar 
          :is-sheet-open="isSheetOpen" 
          @toggle-drawer="toggleSheet" 
          @close-drawer="closeSheet" 
        />
      </template>

      <template #title>
        The Playbook.<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]">Not the theory.</span>
      </template>
    </HeroSection>

    <!-- ================= 2. FEATURED ARTICLE (Flat Structural Hero Post) ================= -->
    <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] relative z-10 -mt-10">
      <div class="container mx-auto" data-aos="fade-up">
        <div class="flex items-center justify-between mb-6">
          <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)]">Latest Deep Dive</span>
          <span class="text-xs font-medium text-[color:var(--ink-soft)]">Featured Playbook</span>
        </div>
        
        <NuxtLink to="/blog/fintech-dashboard-4-second-test" class="group block">
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-14 hover:border-[color:var(--accent-1)] transition-colors duration-300">
            
            <div class="grid lg:grid-cols-12 gap-8 items-center">
              
              <!-- Left Content (Typography & Meta) -->
              <div class="lg:col-span-7 space-y-6">
                <div class="flex gap-3">
                  <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 px-3 py-1 rounded border border-[color:var(--accent-1)]/20">UI/UX Strategy</span>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] px-3 py-1 rounded border border-[color:var(--card-border)]">12 Min Read</span>
                </div>
                
                <h2 class="text-3xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight group-hover:text-[color:var(--accent-1)] transition-colors">
                  Why Your FinTech Dashboard Fails the "4-Second Test" (And the Bento Grid fix).
                </h2>
                
                <p class="text-[color:var(--ink-soft)] text-lg leading-relaxed">
                  In enterprise SaaS, if a user can't find their primary action in 4 seconds, you've lost them. Here's a structural breakdown of how migrating to a Bento Grid architecture reduced cognitive load by 40% for a major trading platform.
                </p>
                
                <div class="inline-flex items-center gap-2 text-xs font-bold text-[color:var(--ink)] uppercase tracking-widest pt-4">
                  Read the Playbook <Icon name="lucide:arrow-right" class="w-4 h-4 text-[color:var(--accent-1)] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <!-- Right Technical Preview Box (No Shadows, Clean Border) -->
              <div class="lg:col-span-5 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 h-64 flex flex-col justify-between relative overflow-hidden">
                <div class="flex justify-between items-center text-xs text-[color:var(--ink-soft)] uppercase tracking-wider font-semibold">
                  <span>Architecture Spec</span>
                  <span class="text-[color:var(--accent-1)]">Active Case</span>
                </div>
                <div class="space-y-3 my-auto">
                  <div class="w-full h-2 bg-[color:var(--card-border)] rounded-full overflow-hidden">
                    <div class="h-full bg-[color:var(--accent-1)] w-3/4 rounded-full"></div>
                  </div>
                  <div class="w-2/3 h-2 bg-[color:var(--card-border)] rounded-full overflow-hidden">
                    <div class="h-full bg-[color:var(--accent-2)] w-1/2 rounded-full"></div>
                  </div>
                </div>
                <div class="text-[11px] text-[color:var(--ink-soft)] font-mono">
                  Metrics: +40% Task Completion Velocity
                </div>
              </div>

            </div>

          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ================= 3. THE ARCHIVE (Interactive Filtering & Load More) ================= -->
    <section id="articles" class="py-24 px-4 md:px-[120px] bg-gradient-to-b from-[color:var(--card-bg)] to-transparent border-t border-[color:var(--card-border)]">
      <div class="container mx-auto">
        
        <!-- Header & Category Filters -->
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)] mb-2 block">The Archive</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em]">Filter by impact.</h2>
          </div>
          
          <!-- Interactive Category Filters -->
          <div class="flex flex-wrap gap-2">
            <button 
              @click="activeCategory = 'all'"
              :class="activeCategory === 'all' ? 'text-white bg-[color:var(--ink)]' : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] hover:text-[color:var(--ink)]'"
              class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors">
              All
            </button>
            <button 
              @click="activeCategory = 'strategy'"
              :class="activeCategory === 'strategy' ? 'text-white bg-[color:var(--ink)]' : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] hover:text-[color:var(--ink)]'"
              class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors">
              Strategy
            </button>
            <button 
              @click="activeCategory = 'frontend'"
              :class="activeCategory === 'frontend' ? 'text-white bg-[color:var(--ink)]' : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] hover:text-[color:var(--ink)]'"
              class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors">
              Front-end
            </button>
            <button 
              @click="activeCategory = 'ui'"
              :class="activeCategory === 'ui' ? 'text-white bg-[color:var(--ink)]' : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] hover:text-[color:var(--ink)]'"
              class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors">
              UI Design
            </button>
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <NuxtLink 
            v-for="article in paginatedArticles" 
            :key="article.id" 
            :to="`/blog/${article.slug}`" 
            class="group" 
            data-aos="fade-up">
            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] overflow-hidden hover:border-[color:var(--accent-1)] transition-colors duration-300 h-full flex flex-col">
              
              <!-- Card Header Info Box -->
              <div class="h-44 bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)] p-6 flex flex-col justify-between">
                <div class="flex justify-between items-center text-xs font-mono text-[color:var(--ink-soft)]">
                  <span>{{ article.date }}</span>
                  <span class="text-[color:var(--accent-text)] uppercase text-[10px] tracking-widest font-bold">{{ article.categoryLabel }}</span>
                </div>
                <div class="text-sm font-semibold text-[color:var(--ink)] opacity-60">
                  Field Note #0{{ article.id }}
                </div>
              </div>

              <!-- Card Body -->
              <div class="p-8 flex flex-col flex-grow relative">
                <h3 class="text-xl font-bold text-[color:var(--ink)] leading-snug mb-3 group-hover:text-[color:var(--accent-1)] transition-colors">
                  {{ article.title }}
                </h3>
                <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed flex-grow">
                  {{ article.excerpt }}
                </p>
                <div class="mt-6 pt-6 border-t border-[color:var(--card-border)] flex justify-between items-center text-xs font-bold text-[color:var(--ink-soft)] uppercase tracking-widest">
                  <span>Read Note</span>
                  <Icon name="lucide:arrow-up-right" class="w-4 h-4 group-hover:text-[color:var(--accent-1)] transition-colors" />
                </div>
              </div>

            </div>
          </NuxtLink>

        </div>

        <!-- Empty State if no articles match filter -->
        <div v-if="paginatedArticles.length === 0" class="text-center py-20 text-[color:var(--ink-soft)]">
          <p>No playbooks found in this category.</p>
        </div>
        
        <!-- Interactive Load More Button -->
        <div v-if="hasMoreArticles" class="flex justify-center mt-16" data-aos="fade-up">
           <AppButton @click="loadMore" variant="glass" size="md" rounded="full">Load More Notes</AppButton>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import imgLightDesktop from "~/assets/images/blog-hero-bg.png";
import imgDarkDesktop from "~/assets/images/blog-hero-bg-dark.png";
import imgLightMobile from "~/assets/images/blog-hero-bg-mobile.png";
import imgDarkMobile from "~/assets/images/blog-hero-bg-dark-mobile.png";

useHead({
  title: 'Playbooks & Field Notes | Mamdouh Ghaneemy',
  meta: [
    { name: 'description', content: 'Unfiltered notes on how SaaS and FinTech companies actually solve complex UI problems, reduce churn, and scale.' }
  ],
  bodyAttrs: {
    class: 'flex flex-col items-start justify-center min-h-screen'
  }
})

const heroButtons = [
  { label: 'Read The Latest', to: '#articles', variant: 'primary', iconRight: 'ArrowDown' },
]

// === Reactive Filtering & Pagination State ===
const activeCategory = ref('all')
const visibleCount = ref(3)

const articles = ref([
  {
    id: 1,
    title: 'The "Rage-Click" Audit: How fixing one hidden button saved a SaaS client $12k in monthly churn.',
    excerpt: 'A deep dive into session recordings that revealed a critical flaw in a checkout flow, and the exact UI changes we made to stop the bleeding.',
    category: 'strategy',
    categoryLabel: 'Case Study',
    date: 'Oct 12, 2026',
    slug: 'rage-click-audit'
  },
  {
    id: 2,
    title: 'Design Systems vs. UI Kits: Why your startup is shipping 3x slower.',
    excerpt: 'Stop buying templates. The difference between a true design system (with CSS variables and tokens) and a static Figma file is the difference between scaling and stalling.',
    category: 'frontend',
    categoryLabel: 'Front-end',
    date: 'Sep 28, 2026',
    slug: 'design-systems-vs-ui-kits'
  },
  {
    id: 3,
    title: 'The "Invisible" Dark Mode: Designing for enterprise without killing readability.',
    excerpt: 'Pure black (#000000) is the enemy of enterprise UI. How to use neutral grays, elevation layers, and smart contrast ratios to build a premium dark theme.',
    category: 'ui',
    categoryLabel: 'UI Design',
    date: 'Aug 15, 2026',
    slug: 'invisible-dark-mode'
  },
  {
    id: 4,
    title: 'Component Architecture in Nuxt 3: Building a design-token-driven UI.',
    excerpt: 'How we structure Vue components, Tailwind tokens, and global themes to maintain absolute consistency across enterprise web applications.',
    category: 'frontend',
    categoryLabel: 'Front-end',
    date: 'Jul 04, 2026',
    slug: 'nuxt-component-architecture'
  },
  {
    id: 5,
    title: 'CRO Patterns for FinTech: Increasing conversion without looking spammy.',
    excerpt: 'Balancing aggressive conversion funnels with the strict trust and security requirements of financial technology products.',
    category: 'strategy',
    categoryLabel: 'Strategy',
    date: 'Jun 19, 2026',
    slug: 'fintech-cro-patterns'
  }
])

const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') return articles.value
  return articles.value.filter(art => art.category === activeCategory.value)
})

const paginatedArticles = computed(() => {
  return filteredArticles.value.slice(0, visibleCount.value)
})

const hasMoreArticles = computed(() => {
  return visibleCount.value < filteredArticles.value.length
})

const loadMore = () => {
  visibleCount.value += 3
}

// === Mobile Drawer Logic ===
const isSheetOpen = ref(false)

const toggleSheet = () => {
  isSheetOpen.value = !isSheetOpen.value
  if (process.client) {
    if (isSheetOpen.value) {
      document.body.classList.add('drawer-open')
    } else {
      document.body.classList.remove('drawer-open')
    }
  }
}

const closeSheet = () => {
  if (isSheetOpen.value) toggleSheet()
}

const handleResize = () => {
  if (process.client && window.innerWidth > 768 && isSheetOpen.value) {
    closeSheet()
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
:deep(body.drawer-open) {
  overflow: hidden;
}
</style>