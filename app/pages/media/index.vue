<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)] relative">

    <!-- === BACKDROP === -->
    <MobileBackdrop :is-open="isSheetOpen" @close="closeSheet" />

    <!-- ================= 1. HERO SECTION ================= -->
    <HeroSection
      badge-text="Cadence Studio"
      :show-badge-dot="true"
      :title-lines="[
        'Every episode.',
        `<span class='text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic'>Every format.</span>`
      ]"
      desc1="Deep-dive frameworks on SaaS UX, Fintech onboarding, and design strategy. Watch, listen, or read — wherever you are."
      desc2="One idea. Three formats. Zero friction."
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
      <p>Loading episodes…</p>
    </div>

    <!-- === ERROR STATE === -->
    <div v-else-if="error" class="text-center py-32 text-red-500 relative z-10">
      <p>Couldn't load the episodes. Refresh the page?</p>
    </div>

    <!-- === EMPTY STATE === -->
    <div v-else-if="!items || items.length === 0" class="text-center py-32 text-[color:var(--ink-soft)] relative z-10">
      <Icon name="lucide:radio" class="w-12 h-12 mx-auto mb-4 opacity-30" />
      <p>No episodes published yet. First one drops soon.</p>
    </div>

    <template v-else>

      

      <!-- ================= 3. FEATURED MEDIA ================= -->
      <FeaturedMedia
        v-if="featuredItem"
        :item="featuredItem"
        :series="getSeries(featuredItem.series_slug)"
        @open="handleOpen"
      />

      <!-- ================= 4. THE ARCHIVE ================= -->
      <section
        id="episodes"
        class="relative w-full py-24 bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)] z-10"
      >
        <div class="container mx-auto px-4 md:px-[120px]">

          <!-- Header & Filters -->
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
            <div>
              <span class="text-[color:var(--accent-text)] font-semibold tracking-wider uppercase text-sm mb-2 block">
                Archive
              </span>
              <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em]">
                Every episode, in order.
              </h2>
              <p class="text-base text-[color:var(--ink-soft)] mt-3 max-w-2xl">
                Frameworks for founders and designers who'd rather ship a tracked v1 than defend a beautiful v0.
              </p>
            </div>

            <!-- ✅ Filters — Dynamic from DB -->
            <div v-if="availableSeries.length > 0" class="flex flex-wrap gap-2">
              <!-- All Button -->
              <button
                @click="handleFilterChange('all')"
                :aria-pressed="activeSeries === 'all'"
                class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
                :class="activeSeries === 'all'
                  ? 'text-white bg-[color:var(--accent-1)] border-[color:var(--accent-1)] shadow-[0_4px_14px_-4px_rgba(109,94,240,0.5)]'
                  : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)]/40'"
              >
                All
                <span class="ml-1.5 text-[10px] opacity-70 font-mono">
                  {{ archiveItems.length }}
                </span>
              </button>

              <!-- ✅ Dynamic Series Buttons -->
              <button
                v-for="s in availableSeries"
                :key="s.slug"
                @click="handleFilterChange(s.slug)"
                :aria-pressed="activeSeries === s.slug"
                class="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5"
                :class="activeSeries === s.slug
                  ? 'text-white bg-[color:var(--accent-1)] border-[color:var(--accent-1)] shadow-[0_4px_14px_-4px_rgba(109,94,240,0.5)]'
                  : 'text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)]/40'"
              >
                <Icon :name="s.icon || 'lucide:layers'" class="w-3 h-3" />
                {{ s.name }}
                <span class="ml-1.5 text-[10px] opacity-70 font-mono">
                  {{ s.count }}
                </span>
              </button>
            </div>
          </div>

          <!-- The Interactive Table Area -->
          <div class="w-full border-t border-[color:var(--card-border)] relative cursor-default">

            <!-- Table Header -->
            <div class="hidden md:grid grid-cols-12 gap-4 py-6 border-b border-[color:var(--card-border)] text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">
              <div class="col-span-7 pl-4">Episode</div>
              <div class="col-span-3">Series</div>
              <div class="col-span-2 text-right pr-4">Date</div>
            </div>

            <!-- Empty State -->
            <div v-if="paginatedItems.length === 0" class="py-20 text-center text-[color:var(--ink-soft)]">
              <p>Nothing in this series yet. Try "All" — or check back soon.</p>
            </div>

            <!-- Rows -->
            <template v-else>
              <MediaRow
                v-for="(item, idx) in paginatedItems"
                :key="item.id"
                :item="item"
                :number="String(idx + 2).padStart(2, '0')"
                @open="handleOpen"
              />
            </template>
          </div>

          <!-- Load More Button -->
          <div v-if="hasMoreItems" class="flex justify-center mt-16" data-aos="fade-up">
            <AppButton @click="handleLoadMore" variant="glass" size="md" rounded="full">
              Load more episodes
            </AppButton>
          </div>

        </div>
      </section>

            <!-- ═══ 5. CLOSING CTA — Split: Subscribe + Explore ═══ -->
      <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)]">
        <div class="container mx-auto max-w-3xl text-center">

          <!-- Header -->
          <div class="mb-12" data-aos="fade-up">
            <span class="text-[color:var(--accent-text)] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Cadence Studio
            </span>
            <h2 class="text-3xl md:text-5xl font-black tracking-[-0.02em] text-[color:var(--ink)] mb-4">
              Enjoying the studio?
            </h2>
            <p class="text-lg text-[color:var(--ink-soft)] leading-relaxed max-w-xl mx-auto">
              New frameworks ship every week — pick your platform, or dive
              into the projects where they get applied.
            </p>
          </div>

          <!-- Platform Buttons -->
          <div class="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
            <a
              v-for="platform in platforms"
              :key="platform.name"
              :href="platform.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2.5 px-5 py-3 rounded-full
                     bg-[color:var(--card-bg)] border border-[color:var(--card-border)]
                     text-[13px] font-bold text-[color:var(--ink)]
                     hover:border-[color:var(--accent-1)] hover:-translate-y-0.5 transition-all"
            >
              <Icon :name="platform.icon" class="w-4 h-4" :class="platform.iconClass" />
              {{ platform.name }}
              <Icon name="lucide:arrow-up-right" class="w-3 h-3 text-[color:var(--ink-mute)]" />
            </a>
          </div>

          <!-- Divider -->
          <div class="flex items-center gap-4 mb-12" data-aos="fade-up">
            <span class="flex-grow h-px bg-[color:var(--card-border)]"></span>
            <span class="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
              Or
            </span>
            <span class="flex-grow h-px bg-[color:var(--card-border)]"></span>
          </div>

          <!-- Soft Service CTA -->
          <div data-aos="fade-up">
            <h3 class="text-xl md:text-2xl font-extrabold text-[color:var(--ink)] mb-3">
              Building something in Fintech or SaaS?
            </h3>
            <p class="text-base text-[color:var(--ink-soft)] mb-8 max-w-xl mx-auto leading-relaxed">
              The same frameworks that ship in these episodes ship inside my
              client work. If you want them applied to your product —
              <strong class="text-[color:var(--ink)]">here's how.</strong>
            </p>

            <div class="flex flex-col sm:flex-row justify-center items-center gap-3">
              <AppButton
                to="/projects"
                variant="primary"
                size="lg"
                rounded="full"
                icon-right="ArrowRight"
              >
                See the Case Studies
              </AppButton>
              <AppButton
                to="/contact"
                variant="glass"
                size="lg"
                rounded="full"
              >
                Or say hello
              </AppButton>
            </div>

            <p class="text-xs font-medium text-[color:var(--ink-soft)] opacity-70 mt-6">
              Reply within 24 hours. Usually sooner.
            </p>
          </div>

        </div>
      </section>

    </template>

    <!-- ═══════════════ FLOATING PLAYER ═══════════════ -->
    <FloatingPlayer
      v-if="nowPlaying"
      :item="nowPlaying"
      @close="nowPlaying = null"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useSupabase } from '~/composables/utils/supabase'
import FeaturedMedia from '~/components/media/FeaturedMedia.vue'
import MediaRow from '~/components/media/MediaRow.vue'
import FloatingPlayer from '~/components/media/FloatingPlayer.vue'

// ═══════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════
interface MediaItem {
  id: number
  title: string
  slug: string
  description: string | null
  media_type: string
  is_featured: boolean
  youtube_id: string | null
  spotify_episode_id: string | null
  dailymotion_id: string | null
  video_url: string | null
  audio_url: string | null
  thumbnail_url: string | null
  cover_url: string | null
  duration_seconds: number | null
  series_slug: string | null
  episode_number: number | null
  article_slug: string | null
  published_at: string
  order_index: number
}

interface MediaSeries {
  id: number
  name: string
  slug: string
  description: string | null
  accent_color: string
  emoji: string
  order_index: number
}

interface SeriesWithCount extends MediaSeries {
  count: number
}

// ═══════════════════════════════════════════════════════
// IMAGES
// ═══════════════════════════════════════════════════════
const imgLightDesktop = "/images/episodes-hero-lg-light.png"
const imgDarkDesktop = "/images/episodes-hero-lg-dark.png"
const imgLightMobile = "/images/episodes-hero-mobile-light.png"
const imgDarkMobile = "/images/episodes-hero-mobile-dark.png"

// ═══════════════════════════════════════════════════════
// SEO
// ═══════════════════════════════════════════════════════
usePageMeta({
  title: 'Media — Cadence Studio | Mamdouh Ghaneemy',
  description: 'Watch, listen, or read every episode. Deep-dive frameworks on SaaS UX, Fintech onboarding, and design strategy.',
  keywords: [
    'saas ux podcast',
    'fintech design podcast',
    'design studio',
    'product design media',
    'ux frameworks',
    'measurable ux',
    'design systems',
  ],
  ogType: 'website',
  ogImage: 'https://mamdouhghaneemy.com/images/blog-hero-bg.png',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Media', url: '/media' },
  ],
})

// ═══════════════════════════════════════════════════════
// HERO BUTTONS
// ═══════════════════════════════════════════════════════
const heroButtons = [
  { label: 'Browse Episodes', to: '#episodes', variant: 'primary', iconRight: 'ArrowDown' },
]

// ═══════════════════════════════════════════════════════
// 🚀 TRACKING
// ═══════════════════════════════════════════════════════
const { trackEvent } = useTracking()

const trackMediaOpen = (item: MediaItem, index: number) => {
  trackEvent('media_open', {
    media_slug: item.slug,
    media_type: item.media_type,
    entry_point: 'media_page',
    media_index: String(index + 1).padStart(2, '0')
  })
}

// ═══════════════════════════════════════════════════════
// FETCH DATA FROM SUPABASE
// ═══════════════════════════════════════════════════════
const supabase = useSupabase()

// ─── Fetch media items ───
const { data: items, pending, error } = await useAsyncData<MediaItem[]>('media-items', async () => {
  const { data, error } = await supabase
    .from('media_items')
    .select(`
      id, title, slug, description,
      media_type, is_featured,
      youtube_id, spotify_episode_id, dailymotion_id,
      video_url, audio_url, thumbnail_url, cover_url,
      duration_seconds,
      series_slug, episode_number,
      article_slug,
      published_at, order_index
    `)
    .eq('is_published', true)
    .order('order_index', { ascending: true })
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching media items:', error)
    throw error
  }
  return data
})

// ─── Fetch series ───
const { data: seriesList } = await useAsyncData<MediaSeries[]>('media-series', async () => {
  const { data, error } = await supabase
    .from('media_series')
    .select('id, name, slug, description, accent_color, emoji, order_index')
    .eq('is_published', true)
    .order('order_index', { ascending: true })

  if (error) {
    console.error('Error fetching media series:', error)
    throw error
  }
  return data
})

// ═══════════════════════════════════════════════════════
// COMPUTED — Featured & Archive
// ═══════════════════════════════════════════════════════
const featuredItem = computed<MediaItem | null>(() => {
  if (items.value && items.value.length > 0) return items.value[0]
  return null
})

const archiveItems = computed<MediaItem[]>(() => {
  if (items.value && items.value.length > 1) return items.value.slice(1)
  return []
})

// ═══════════════════════════════════════════════════════
// FILTERING & PAGINATION
// ═══════════════════════════════════════════════════════
const activeSeries = ref<string>('all')
const visibleCount = ref<number>(5)
const nowPlaying = ref<MediaItem | null>(null)
const isSheetOpen = ref<boolean>(false)

const filteredItems = computed<MediaItem[]>(() => {
  if (activeSeries.value === 'all') return archiveItems.value
  return archiveItems.value.filter(item => item.series_slug === activeSeries.value)
})

const paginatedItems = computed<MediaItem[]>(() => {
  return filteredItems.value.slice(0, visibleCount.value)
})

const hasMoreItems = computed<boolean>(() => {
  return visibleCount.value < filteredItems.value.length
})

// Reset pagination when filter changes
watch(activeSeries, () => {
  visibleCount.value = 5
})

// ═══════════════════════════════════════════════════════
// DYNAMIC SERIES (with counts)
// ═══════════════════════════════════════════════════════
const availableSeries = computed<SeriesWithCount[]>(() => {
  if (!archiveItems.value?.length || !seriesList.value?.length) return []

  const map = new Map<string, SeriesWithCount>()

  archiveItems.value.forEach((item: MediaItem) => {
    if (!item.series_slug) return

    if (!map.has(item.series_slug)) {
      const series = seriesList.value?.find(s => s.slug === item.series_slug)
      if (series) {
        map.set(item.series_slug, { ...series, count: 0 })
      }
    }

    const entry = map.get(item.series_slug)
    if (entry) entry.count++
  })

  return Array.from(map.values())
})

// ═══════════════════════════════════════════════════════
// METHODS
// ═══════════════════════════════════════════════════════
const getSeries = (slug: string | null): MediaSeries | null => {
  if (!slug || !seriesList.value) return null
  return seriesList.value.find(s => s.slug === slug) || null
}

// ✅ كل ضغطة تفتح الـ Floating Player — مفيش تنقل خارجي
const handleOpen = (item: MediaItem) => {
  nowPlaying.value = item
}

const handleFilterChange = (slug: string) => {
  activeSeries.value = slug

  trackEvent('media_filter_engaged', {
    selected_series: slug,
    current_page: '/media'
  })
}

const handleLoadMore = () => {
  const previousCount = visibleCount.value
  visibleCount.value += 5

  trackEvent('media_load_more_clicks', {
    current_visible_count: String(visibleCount.value),
    previous_visible_count: String(previousCount),
    current_page: '/media'
  })
}

// ═══════════════════════════════════════════════════════
// 📱 MOBILE DRAWER
// ═══════════════════════════════════════════════════════
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
// PLATFORMS
// ═══════════════════════════════════════════════════════
const platforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/YOUR_SHOW_ID',
    icon: 'simple-icons:spotify',
    iconClass: 'text-emerald-500',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@yourhandle',
    icon: 'simple-icons:youtube',
    iconClass: 'text-red-500',
  },
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/podcast/YOUR_ID',
    icon: 'simple-icons:applepodcasts',
    iconClass: 'text-purple-500',
  },
  {
    name: 'RSS',
    url: 'https://anchor.fm/s/1180c77e0/podcast/rss',
    icon: 'lucide:rss',
    iconClass: 'text-orange-500',
  },
]

// ═══════════════════════════════════════════════════════
// LIFECYCLE
// ═══════════════════════════════════════════════════════
onMounted(() => {
  window.addEventListener('resize', handleResize)

  // Deep-link ?play=slug
  const route = useRoute()
  const slug = route.query.play
  if (slug && items.value) {
    const item = items.value.find((i: MediaItem) => i.slug === slug)
    if (item) nowPlaying.value = item
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
:deep(body.drawer-open) {
  overflow: hidden;
}
html {
  scroll-behavior: smooth;
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