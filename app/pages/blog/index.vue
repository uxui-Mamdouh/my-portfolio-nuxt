<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)] relative">
    
    <!-- === BACKDROP === -->
    <MobileBackdrop :is-open="isSheetOpen" @close="closeSheet" />

    <!-- ================= 1. HERO SECTION ================= -->
    <HeroSection
      badge-text="Field Notes & Playbooks"
      :show-badge-dot="true"
      :title-lines="[
        'The Playbook.',
        `<span class='text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]'>Not the theory.</span>`
      ]"
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
    </HeroSection>

    <!-- === LOADING STATE === -->
    <div v-if="pending" class="text-center py-32 text-[color:var(--ink-soft)] flex flex-col items-center gap-4 relative z-10">
      <Icon name="lucide:loader-2" class="w-8 h-8 animate-spin text-[color:var(--accent-1)]" />
      <p>Loading playbooks…</p>
    </div>

    <!-- === ERROR STATE === -->
    <div v-else-if="error" class="text-center py-32 text-red-500 relative z-10">
      <p>Couldn't load the playbooks. Refresh the page?</p>
    </div>

    <!-- === EMPTY STATE === -->
    <div v-else-if="!articles || articles.length === 0" class="text-center py-32 text-[color:var(--ink-soft)] relative z-10">
      <p>No playbooks published yet. First one drops soon.</p>
    </div>

    <template v-else>
      <!-- ================= 2. FEATURED ARTICLE (with hover image) ================= -->
            <!-- ================= 2. FEATURED ARTICLE (with hover image) ================= -->
      <div
        v-if="featuredArticle"
        @mouseenter="onFeaturedEnter(featuredArticle, $event)"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <FeaturedArticle 
          :article="featuredArticle" 
          variant="v1" 
          index-number="01" 
          :article-link="featuredArticle.external_url ? featuredArticle.external_url : `/blog/${featuredArticle.slug}`"
        />
      </div>

      <!-- ================= 3. THE ARCHIVE ================= -->
      <section 
        id="articles" 
        class="relative w-full py-24 bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)] z-10" 
        ref="archiveSection"
      >
        <div class="container mx-auto px-4 md:px-[120px]">
          
          <!-- Header & Filters -->
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
            <div>
              <span class="text-[color:var(--accent-text)] font-semibold tracking-wider uppercase text-sm mb-2 block">Archive</span>
              <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em]">
                Every playbook, in order.
              </h2>
              <p class="text-base text-[color:var(--ink-soft)] mt-3 max-w-2xl">
                Written for founders and designers who'd rather ship a tracked v1 than defend a beautiful v0.
              </p>
            </div>
            
            <!-- ✅ Filters — Dynamic from DB -->
            <div v-if="availableCategories.length > 0" class="flex flex-wrap gap-2">
              <!-- All Button -->
              <button 
                @click="handleFilterChange('all')"
                :aria-pressed="activeCategory === 'all'"
                class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
                :class="activeCategory === 'all' 
                  ? 'text-white bg-[color:var(--accent-1)] border-[color:var(--accent-1)] shadow-[0_4px_14px_-4px_rgba(109,94,240,0.5)]' 
                  : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)]/40'"
              >
                All
                <span class="ml-1.5 text-[10px] opacity-70 font-mono">
                  {{ archiveArticles.length }}
                </span>
              </button>

              <!-- ✅ Dynamic Category Buttons -->
              <button 
                v-for="cat in availableCategories"
                :key="cat.slug"
                @click="handleFilterChange(cat.slug)"
                :aria-pressed="activeCategory === cat.slug"
                class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
                :class="activeCategory === cat.slug 
                  ? 'text-white bg-[color:var(--accent-1)] border-[color:var(--accent-1)] shadow-[0_4px_14px_-4px_rgba(109,94,240,0.5)]' 
                  : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)]/40'"
              >
                {{ cat.label }}
                <span class="ml-1.5 text-[10px] opacity-70 font-mono">
                  {{ cat.count }}
                </span>
              </button>
            </div>
          </div>

          <!-- The Interactive Table Area -->
          <div 
            class="w-full border-t border-[color:var(--card-border)] relative cursor-default" 
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            
            <!-- Table Header -->
            <div class="hidden md:grid grid-cols-12 gap-4 py-6 border-b border-[color:var(--card-border)] text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">
              <div class="col-span-7 pl-4">Playbook</div>
              <div class="col-span-3">Category</div>
              <div class="col-span-2 text-right pr-4">Date</div>
            </div>

            <!-- Empty State for Filters -->
            <div v-if="paginatedArticles.length === 0" class="py-20 text-center text-[color:var(--ink-soft)]">
              <p>Nothing in this category yet. Try "All" — or check back soon.</p>
            </div>

            <!-- ═══════════════════════════════════════════════════
                 TABLE ROWS — with Hover Animation
                 ═══════════════════════════════════════════════════ -->
            <template v-else>
              <NuxtLink 
                v-for="(article, index) in paginatedArticles" 
                :key="article.slug"
                :to="article.external_url ? article.external_url : `/blog/${article.slug}`"
                :target="article.external_url ? '_blank' : '_self'"
                class="group relative block border-b border-[color:var(--card-border)] 
                       transition-all duration-500 ease-out
                       hover:pl-6 hover:bg-[color:var(--input-bg)]/30
                       z-20"
                @mouseenter="setActiveArticle(article)"
                @click="trackPlaybookOpen(article, index)"
              >
                <!-- Left Accent Border -->
                <span
                  class="absolute left-0 top-0 bottom-0 w-[2px]
                         bg-gradient-to-b from-[color:var(--accent-1)] to-[color:var(--accent-2)]
                         scale-y-0 origin-top
                         transition-transform duration-500 ease-out
                         group-hover:scale-y-100"
                  aria-hidden="true"
                ></span>

                <!-- Desktop Row -->
                <div class="hidden md:grid grid-cols-12 gap-4 py-8 items-center text-[color:var(--ink-soft)]">
                  
                  <!-- Number + Title + Arrow -->
                  <div class="col-span-7 pl-2 flex items-center gap-4 pr-6">
                    <span class="font-mono text-xs text-[color:var(--accent-text)] opacity-60 w-6 shrink-0">
                      0{{ index + 2 }}
                    </span>
                    <span class="text-xl font-bold text-[color:var(--ink)] group-hover:text-[color:var(--accent-text)] transition-colors duration-300 line-clamp-1 leading-snug">
                      {{ article.title }}
                    </span>
                    
                    <!-- Arrow -->
                    <Icon
                      name="lucide:arrow-up-right"
                      class="w-5 h-5 text-[color:var(--accent-1)] opacity-0 -translate-x-2 translate-y-2
                             group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                             transition-all duration-500 ease-out shrink-0"
                    />
                  </div>

                  <!-- Category -->
                  <div class="col-span-3 text-sm font-medium transition-colors duration-300 group-hover:text-[color:var(--ink)]">
                    {{ article.category_label }}
                  </div>

                  <!-- Date -->
                  <div class="col-span-2 text-right pr-4 text-sm font-mono transition-colors duration-300 group-hover:text-[color:var(--accent-text)]">
                    {{ formatShortDate(article.published_at) }}
                  </div>
                </div>

                <!-- Mobile Row -->
                <div class="md:hidden flex flex-col gap-3 py-6 pl-2 pr-4">
                  <div class="flex justify-between items-start gap-4">
                    <span class="text-[17px] font-bold text-[color:var(--ink)] group-hover:text-[color:var(--accent-text)] transition-colors duration-300 leading-snug">
                      {{ article.title }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center text-xs font-mono text-[color:var(--ink-soft)]">
                    <span class="uppercase tracking-widest">{{ article.category_label }}</span>
                    <span>{{ formatShortDate(article.published_at) }}</span>
                  </div>
                </div>
              </NuxtLink>
            </template>

          </div>
          
          <!-- Load More Button -->
          <div v-if="hasMoreArticles" class="flex justify-center mt-16" data-aos="fade-up">
             <AppButton @click="handleLoadMore" variant="glass" size="md" rounded="full">Load more playbooks</AppButton>
          </div>

        </div>
      </section>
    </template>

    <!-- === THE FLOATING CURSOR IMAGE === -->
    <Teleport to="body" v-if="mounted && allHoverableArticles.length > 0">
      <div 
        class="pointer-events-none fixed z-[100] w-[350px] h-[250px] overflow-hidden rounded-[24px] shadow-2xl transition-opacity duration-300 ease-out hidden md:block"
        :class="isHoveringRow ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        :style="{
          left: `${currentX}px`,
          top: `${currentY}px`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`
        }"
      >
        <!-- ✅ Now includes featuredArticle + paginatedArticles -->
        <div 
          v-for="article in allHoverableArticles" 
          :key="'img-' + article.slug"
          class="absolute inset-0 w-full h-full transition-opacity duration-500 bg-[color:var(--card-bg)]"
          :class="activeArticleSlug === article.slug ? 'opacity-100 z-10' : 'opacity-0 z-0'"
        >
          <NuxtImg
            v-if="article.thumbnail_url"
            :src="article.thumbnail_url"
            :alt="article.title"
            class="w-full h-full object-cover grayscale opacity-90"
            width="350"
            height="250"
            sizes="350px"
            format="webp"
            quality="90"
            loading="lazy"
            decoding="async"
          />
          <div v-else class="w-full h-full bg-gradient-to-br from-[color:var(--accent-1)]/20 to-transparent flex items-center justify-center">
            <Icon name="lucide:file-text" class="w-12 h-12 text-[color:var(--accent-1)] opacity-50" />
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useSupabase } from '~/composables/utils/supabase'

// ═══════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════
interface BlogArticle {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  category_label: string
  thumbnail_url: string | null
  read_time_minutes: number
  published_at: string
  external_url: string | null
}

interface Category {
  slug: string
  label: string
  count: number
}

// ═══════════════════════════════════════════════════════
// IMAGES
// ═══════════════════════════════════════════════════════
const imgLightDesktop = "/images/blog-hero-bg.png"
const imgDarkDesktop = "/images/blog-hero-bg-dark.png"
const imgLightMobile = "/images/blog-hero-bg-mobile.png"
const imgDarkMobile = "/images/blog-hero-bg-dark-mobile.png"

// ═══════════════════════════════════════════════════════
// SEO
// ═══════════════════════════════════════════════════════
usePageMeta({
  title: 'Playbooks & Field Notes | Mamdouh Ghaneemy',
  description: 'Unfiltered notes on how SaaS and FinTech teams actually solve complex UI problems — and prove the results. Recordings first, opinions last.',
  keywords: [
    'fintech design playbook',
    'saas ux field notes',
    'measurable ux',
    'design analytics',
    'ga4 for designers',
    'product design playbook',
    'ux case studies',
  ],
  ogType: 'website',
  ogImage: 'https://mamdouhghaneemy.com/images/blog-hero-bg.png',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Playbooks', url: '/blog' },
  ],
  faqItems: [
    {
      question: 'What kind of content is on this playbook?',
      answer: 'Practical field notes on SaaS and FinTech design: session recording analysis, GA4 tracking setups, conversion patterns, and honest write-ups of redesign decisions — each ending with a measurable receipt.',
    },
    {
      question: 'Who is the playbook written for?',
      answer: 'Founders, VPs of Growth, and product designers who want to move from opinion-based design to receipt-based design. Everything is written founder-to-founder, not designer-to-designer.',
    },
    {
      question: 'How often do you publish?',
      answer: 'Roughly one deep-dive per month. When something is worth writing, it gets a full playbook. When it isn\'t, silence — no filler content.',
    },
  ],
})

// ═══════════════════════════════════════════════════════
// HERO BUTTONS
// ═══════════════════════════════════════════════════════
const heroButtons = [
  { label: 'Read the Latest', to: '#articles', variant: 'primary', iconRight: 'ArrowDown' },
]

// ═══════════════════════════════════════════════════════
// 🚀 TRACKING
// ═══════════════════════════════════════════════════════
const { trackEvent } = useTracking()

const trackPlaybookOpen = (article: BlogArticle, index: number) => {
  trackEvent('playbook_open', {
    playbook_slug: article.slug,
    entry_point: 'blog_archive',
    article_index: String(index + 1).padStart(2, '0')
  })
}

// ═══════════════════════════════════════════════════════
// FETCH DATA FROM SUPABASE
// ═══════════════════════════════════════════════════════
const supabase = useSupabase()

const { data: articles, pending, error } = await useAsyncData<BlogArticle[]>('blog-articles', async () => {
  const { data, error } = await supabase
    .from('articles')
    .select('id, title, slug, excerpt, category, category_label, thumbnail_url, read_time_minutes, published_at, external_url')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
  return data
})

// ═══════════════════════════════════════════════════════
// COMPUTED — Featured & Archive
// ═══════════════════════════════════════════════════════
const featuredArticle = computed<BlogArticle | null>(() => {
  if (articles.value && articles.value.length > 0) return articles.value[0]
  return null
})

const archiveArticles = computed<BlogArticle[]>(() => {
  if (articles.value && articles.value.length > 1) return articles.value.slice(1)
  return []
})

// ═══════════════════════════════════════════════════════
// FILTERING & PAGINATION
// ═══════════════════════════════════════════════════════
const activeCategory = ref<string>('all')
const visibleCount = ref<number>(5)

const filteredArticles = computed<BlogArticle[]>(() => {
  if (activeCategory.value === 'all') return archiveArticles.value
  return archiveArticles.value.filter(art => art.category === activeCategory.value)
})

const paginatedArticles = computed<BlogArticle[]>(() => {
  return filteredArticles.value.slice(0, visibleCount.value)
})

const hasMoreArticles = computed<boolean>(() => {
  return visibleCount.value < filteredArticles.value.length
})

// Reset pagination when filter changes
watch(activeCategory, () => {
  visibleCount.value = 5
})

// ═══════════════════════════════════════════════════════
// DYNAMIC CATEGORIES
// ═══════════════════════════════════════════════════════
const availableCategories = computed<Category[]>(() => {
  if (!archiveArticles.value?.length) return []

  const map = new Map<string, Category>()
  archiveArticles.value.forEach((art: BlogArticle) => {
    const code = art.category || 'uncategorized'
    if (!map.has(code)) {
      map.set(code, {
        slug: code,
        label: art.category_label || code,
        count: 0,
      })
    }
    map.get(code)!.count++
  })

  return Array.from(map.values()).sort((a, b) =>
    a.label.localeCompare(b.label)
  )
})

// ═══════════════════════════════════════════════════════
// ALL HOVERABLE ARTICLES
// يجمع الـ Featured + Archive عشان صورة الكيرسور تظهر للاتنين
// ═══════════════════════════════════════════════════════
const allHoverableArticles = computed<BlogArticle[]>(() => {
  const list: BlogArticle[] = []
  if (featuredArticle.value) list.push(featuredArticle.value)
  list.push(...paginatedArticles.value)
  return list
})

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════
const formatShortDate = (dateString: string | null): string => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

// ═══════════════════════════════════════════════════════
// FLOATING IMAGE LOGIC
// ═══════════════════════════════════════════════════════
const mounted = ref<boolean>(false)
const isHoveringRow = ref<boolean>(false)
const activeArticleSlug = ref<string | null>(null)

const targetX = ref<number>(0)
const targetY = ref<number>(0)
const currentX = ref<number>(0)
const currentY = ref<number>(0)
const rotation = ref<number>(0)

let animationFrameId: number | null = null
let lastX = 0

const handleMouseMove = (e: MouseEvent) => {
  targetX.value = e.clientX
  targetY.value = e.clientY

  if (!isHoveringRow.value) {
    currentX.value = e.clientX
    currentY.value = e.clientY
    lastX = e.clientX
    isHoveringRow.value = true
  }
}

const handleMouseLeave = () => {
  isHoveringRow.value = false
  activeArticleSlug.value = null
}

const setActiveArticle = (article: BlogArticle) => {
  activeArticleSlug.value = article.slug
  isHoveringRow.value = true
}

// Hover handler للـ Featured Article
const onFeaturedEnter = (article: BlogArticle, e: MouseEvent) => {
  activeArticleSlug.value = article.slug
  isHoveringRow.value = true
  // اضبط الإحداثيات على مكان الماوس الحالي
  targetX.value = e.clientX
  targetY.value = e.clientY
  currentX.value = e.clientX
  currentY.value = e.clientY
  lastX = e.clientX
}

const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor
}

const animateImage = () => {
  if (isHoveringRow.value) {
    currentX.value = lerp(currentX.value, targetX.value, 0.1)
    currentY.value = lerp(currentY.value, targetY.value, 0.1)

    const speedX = targetX.value - lastX
    const targetRotation = speedX * 0.1
    const clampedRotation = Math.max(-15, Math.min(15, targetRotation))
    rotation.value = lerp(rotation.value, clampedRotation, 0.1)

    lastX = targetX.value
  }

  animationFrameId = requestAnimationFrame(animateImage)
}

// ═══════════════════════════════════════════════════════
// MOBILE DRAWER
// ═══════════════════════════════════════════════════════
const isSheetOpen = ref<boolean>(false)

const toggleSheet = () => {
  isSheetOpen.value = !isSheetOpen.value
  if (process.client) {
    if (isSheetOpen.value) document.body.classList.add('drawer-open')
    else document.body.classList.remove('drawer-open')
  }
}

const closeSheet = () => {
  if (isSheetOpen.value) toggleSheet()
}

const handleResize = () => {
  if (process.client && window.innerWidth > 768 && isSheetOpen.value) closeSheet()
}

// ═══════════════════════════════════════════════════════
// FILTER & LOAD MORE TRACKING
// ═══════════════════════════════════════════════════════
const handleFilterChange = (catSlug: string) => {
  activeCategory.value = catSlug

  trackEvent('filter_engaged', {
    selected_category: catSlug,
    current_page: '/blog'
  })
}

const handleLoadMore = () => {
  const previousCount = visibleCount.value
  visibleCount.value += 5

  trackEvent('load_more_clicks', {
    current_visible_count: String(visibleCount.value),
    previous_visible_count: String(previousCount),
    current_page: '/blog'
  })
}

// ═══════════════════════════════════════════════════════
// LIFECYCLE
// ═══════════════════════════════════════════════════════
onMounted(() => {
  mounted.value = true
  window.addEventListener('resize', handleResize)
  animationFrameId = requestAnimationFrame(animateImage)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
:deep(body.drawer-open) { overflow: hidden; }
html { scroll-behavior: smooth; }

.group:hover {
  background-color: color-mix(in srgb, var(--input-bg) 40%, transparent);
}
.hero {
  height: 100vh;
  background-color: var(--page-bg-1);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
@media (max-width: 767px) {
  .hero {
    height: 100vh;
  }
}
</style>