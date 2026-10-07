<template>
  <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-b border-[color:var(--card-border)]">
    <div class="container mx-auto">

      <!-- ═══════════════ HEADER ═══════════════ -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
        <div class="max-w-2xl">
          <span class="text-[color:var(--accent-1)] font-semibold tracking-wider uppercase text-sm flex items-center gap-3 mb-4">
            <span class="w-8 h-px bg-[color:var(--accent-1)]"></span>
            Content Studio
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight">
            One idea.
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic">
              Three formats.
            </span>
          </h2>
          <p class="text-[color:var(--ink-soft)] text-[16px] leading-relaxed mt-4">
            Read it. Watch it. Listen to it. Every framework now ships in the format that fits your moment.
          </p>
        </div>

        <AppButton
          to="/media"
          variant="secondary"
          size="md"
          rounded="xl"
          icon-right="ArrowRight"
          motion="ghost"
        >
          Explore all episodes
        </AppButton>
      </div>

      <!-- ═══════════════ EDITORIAL LIST ═══════════════ -->
      <div class="w-full border-t border-[color:var(--card-border)] relative">

        <!-- Loading -->
        <div v-if="pending" class="py-20 text-center flex flex-col items-center gap-4 text-[color:var(--ink-soft)]">
          <Icon name="lucide:loader-2" class="w-8 h-8 animate-spin text-[color:var(--accent-1)]" />
          <p>Loading episodes…</p>
        </div>

        <!-- Empty -->
        <div v-else-if="!groupedItems || groupedItems.length === 0" class="py-20 text-center text-[color:var(--ink-soft)]">
          <Icon name="lucide:radio" class="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p>No episodes yet. Check back soon.</p>
        </div>

        <!-- Grouped Items — 4 unique articles -->
        <template v-else>
          <MediaRow
            v-for="(item, idx) in groupedItems"
            :key="item.article_slug"
            :item="item"
            :number="String(idx + 1).padStart(2, '0')"
            @open="handleOpen"
          />
        </template>
      </div>

      <!-- ═══════════════ STATS ═══════════════ -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[color:var(--card-border)]">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-black text-[color:var(--ink)] tracking-tight">{{ stats.episodes }}</div>
          <div class="text-[11px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mt-2">Episodes</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-black text-[color:var(--ink)] tracking-tight">{{ stats.series }}</div>
          <div class="text-[11px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mt-2">Series</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-black text-[color:var(--ink)] tracking-tight">{{ stats.duration }}</div>
          <div class="text-[11px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mt-2">Duration</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-black text-[color:var(--ink)] tracking-tight">{{ stats.platforms }}</div>
          <div class="text-[11px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mt-2">Platforms</div>
        </div>
      </div>
    </div>

    <!-- ═══════════════ FLOATING PLAYER ═══════════════ -->
    <FloatingPlayer
      v-if="nowPlaying"
      :item="nowPlaying"
      @close="nowPlaying = null"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MediaRow from '~/components/media/MediaRow.vue'
import FloatingPlayer from '~/components/media/FloatingPlayer.vue'

// ═════════════════════════════════════════════════════════
// 1. TYPES
// ═════════════════════════════════════════════════════════
interface GroupedItem {
  article_slug: string
  title: string
  description: string
  cover_url?: string | null
  thumbnail_url?: string | null
  series_slug?: string | null
  episode_number?: number
  season_number?: number
  available_formats: {
    read: boolean
    watch: boolean
    listen: boolean
  }
  podcast_item?: any
  video_item?: any
  youtube_id?: string | null
  spotify_episode_id?: string | null
  duration_seconds?: number
  is_featured?: boolean
  tags?: string[]
}

// ═════════════════════════════════════════════════════════
// 2. DATA FETCH
// ═════════════════════════════════════════════════════════
const { fetchItems, fetchSeries } = useMedia()

const { data: items, pending } = await useAsyncData('home-media-items', () =>
  fetchItems()
)

const { data: seriesList } = await useAsyncData('home-media-series', () =>
  fetchSeries()
)

// ═════════════════════════════════════════════════════════
// 3. GROUP BY ARTICLE_SLUG — 4 unique articles instead of 9 rows
// ═════════════════════════════════════════════════════════
const groupedItems = computed<GroupedItem[]>(() => {
  if (!items.value || items.value.length === 0) return []

  const map = new Map<string, GroupedItem>()

  items.value.forEach((item: any) => {
    const key = item.article_slug || item.slug
    if (!key) return

    if (!map.has(key)) {
      map.set(key, {
        article_slug: key,
        title: item.title,
        description: item.description || '',
        cover_url: item.cover_url,
        thumbnail_url: item.thumbnail_url,
        series_slug: item.series_slug,
        episode_number: item.episode_number,
        season_number: item.season_number,
        available_formats: { read: true, watch: false, listen: false },
        podcast_item: null,
        video_item: null,
        youtube_id: null,
        spotify_episode_id: null,
        duration_seconds: 0,
        is_featured: false,
        tags: item.tags || [],
      })
    }

    const group = map.get(key)!
    group.is_featured = group.is_featured || item.is_featured

    // ── Podcast branch ──
    if (item.media_type === 'podcast') {
      group.available_formats.listen = true
      group.podcast_item = item
      group.spotify_episode_id = item.spotify_episode_id
      group.duration_seconds = Math.max(
        group.duration_seconds || 0,
        item.duration_seconds || 0
      )
      // Podcast title هو الأنسب للعرض (أطول وأوصف)
      if (item.title && !group.title) group.title = item.title
      if (item.description && !group.description) group.description = item.description
    }

    // ── Video branch ──
    if (item.media_type === 'video') {
      group.available_formats.watch = true
      group.video_item = item
      // لو مفيش بودكاست، خد الـ youtube_id للـ group
      if (!group.spotify_episode_id) {
        group.youtube_id = item.youtube_id
      }
      if (item.duration_seconds && !group.duration_seconds) {
        group.duration_seconds = item.duration_seconds
      }
    }
  })

  // حوّل لـ array + رتب حسب season ثم episode
  return Array.from(map.values())
    .sort((a, b) => {
      if ((a.season_number || 0) !== (b.season_number || 0)) {
        return (a.season_number || 0) - (b.season_number || 0)
      }
      return (a.episode_number || 0) - (b.episode_number || 0)
    })
    .slice(0, 4) // أول 4 مقالات فريدة
})

// ═════════════════════════════════════════════════════════
// 4. STATS — أرقام حقيقية (مش مكررة)
// ═════════════════════════════════════════════════════════
const stats = computed(() => {
  const rawItems = items.value || []
  const totalEpisodes = rawItems.length // 9 items فعلية
  const totalSeries = seriesList.value?.length || 0

  // إجمالي المدة لكل الـ media (فيديو + بودكاست)
  const totalSec = rawItems.reduce(
    (sum: number, i: any) => sum + (i.duration_seconds || 0),
    0
  )
  const totalMinutes = Math.round(totalSec / 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  const duration =
    hours > 0 ? `${hours}h ${minutes}m` : `${totalMinutes}m`

  return {
    episodes: totalEpisodes,   // 9
    series: totalSeries,       // 4
    duration: duration || '—', // ~1h 10m
    platforms: 4,              // YouTube, Spotify, Site, RSS
  }
})

// ═════════════════════════════════════════════════════════
// 5. FLOATING PLAYER
// ═════════════════════════════════════════════════════════
const nowPlaying = ref<any>(null)

const handleOpen = (item: any) => {
  // لو الـ item عنده podcast + video، افتح البودكاست أولاً
  // لو عنده video فقط، افتح الفيديو
  const target = item.podcast_item || item.video_item || item

  // طبّع الـ shape للـ FloatingPlayer
  nowPlaying.value = {
    ...target,
    // تأكد إن الحقول اللي الـ FloatingPlayer محتاجها موجودة
    spotify_episode_id:
      target.spotify_episode_id ||
      item.spotify_episode_id ||
      item.podcast_item?.spotify_episode_id ||
      null,
    youtube_id:
      target.youtube_id ||
      item.youtube_id ||
      item.video_item?.youtube_id ||
      null,
    media_type: target.media_type || 'podcast',
    title: item.title || target.title,
  }
}
</script>