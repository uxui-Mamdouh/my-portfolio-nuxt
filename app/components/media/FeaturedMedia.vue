<template>
  <section class="featured-media relative w-full border-t border-[color:var(--card-border)] py-20 md:py-28 z-10">
    <div class="container mx-auto px-4 md:px-[120px]">

      <button
        type="button"
        class="group relative block w-full text-left cursor-pointer bg-transparent border-0 p-0"
        @click="$emit('open', item)"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          <!-- ═══ LEFT: Big Watermark Number ═══ -->
          <div class="hidden lg:block lg:col-span-2 relative">
            <span
              class="absolute -top-8 -left-2 font-serif italic font-black text-[12rem] leading-none
                     text-[color:var(--ink)]/[0.06] select-none pointer-events-none
                     group-hover:text-[color:var(--accent-1)]/[0.12]
                     transition-colors duration-700"
            >
              01
            </span>
          </div>

          <!-- ═══ RIGHT: Content ═══ -->
          <div class="lg:col-span-10">

            <!-- Badges Row -->
            <div class="flex flex-wrap items-center gap-2.5 mb-6">
              <span
                v-if="series"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                       text-[10px] font-black uppercase tracking-widest text-white"
                :style="{ backgroundColor: series.accent_color }"
              >
                <Icon
                  :name="series.icon || 'lucide:layers'"
                  class="w-3 h-3"
                />
                {{ series.name }}
              </span>

              <span
                v-if="item.episode_number"
                class="px-3 py-1.5 rounded-full bg-[color:var(--input-bg)]
                       border border-[color:var(--card-border)]
                       text-[10px] font-black uppercase tracking-widest
                       text-[color:var(--ink-soft)]"
              >
                EP {{ String(item.episode_number).padStart(2, '0') }}
              </span>

              <span
                class="px-3 py-1.5 rounded-full bg-[color:var(--accent-1)]/10
                       border border-[color:var(--accent-1)]/20
                       text-[10px] font-black uppercase tracking-widest
                       text-[color:var(--accent-text)]"
              >
                {{ typeLabel }}
              </span>

              <span
                v-if="item.duration_seconds"
                class="px-3 py-1.5 rounded-full bg-[color:var(--input-bg)]
                       border border-[color:var(--card-border)]
                       text-[10px] font-black uppercase tracking-widest
                       text-[color:var(--ink-soft)] font-mono"
              >
                {{ formatDuration(item.duration_seconds) }}
              </span>
            </div>

            <!-- Title -->
            <h2
              class="text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold
                     text-[color:var(--ink)] tracking-[-0.03em] leading-[1.05]
                     mb-6 group-hover:text-[color:var(--accent-text)]
                     transition-colors duration-300 max-w-4xl"
            >
              {{ item.title }}
            </h2>

            <!-- Description -->
            <p
              v-if="item.description"
              class="text-[17px] leading-relaxed text-[color:var(--ink-soft)]
                     max-w-2xl mb-8"
            >
              {{ item.description }}
            </p>

            <!-- Format Badges + CTA -->
            <div class="flex flex-wrap items-center gap-4">
              <span
                v-if="item.article_slug"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)]
                       text-[12px] font-bold border border-[color:var(--accent-1)]/20"
              >
                <Icon name="lucide:book-open" class="w-3.5 h-3.5" />
                Read
              </span>
              <span
                v-if="item.youtube_id"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-red-500/10 text-red-500
                       text-[12px] font-bold border border-red-500/20"
              >
                <Icon name="lucide:play-circle" class="w-3.5 h-3.5" />
                Watch
              </span>
              <span
                v-if="item.spotify_episode_id"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-emerald-500/10 text-emerald-600
                       text-[12px] font-bold border border-emerald-500/20"
              >
                <Icon name="lucide:headphones" class="w-3.5 h-3.5" />
                Listen
              </span>

              <div class="flex-1"></div>

              <div
                class="inline-flex items-center gap-2 text-[13px] font-bold
                       text-[color:var(--accent-text)] opacity-0 -translate-x-2
                       group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-500"
              >
                Play now
                <Icon name="lucide:play" class="w-3.5 h-3.5" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
interface MediaItem {
  id: number
  title: string
  slug: string
  description?: string
  media_type: string
  episode_number?: number
  duration_seconds?: number
  youtube_id?: string
  spotify_episode_id?: string
  article_slug?: string
  series_slug?: string
}

interface Series {
  slug: string
  name: string
  icon: string
  accent_color: string
}

const props = defineProps<{
  item: MediaItem
  series?: Series | null
}>()

defineEmits<{
  open: [item: MediaItem]
}>()

const typeLabel = computed(() => {
  const map: Record<string, string> = {
    podcast: 'Podcast',
    video: 'Video',
    shorts: 'Short',
    interview: 'Interview',
    trailer: 'Trailer',
  }
  return map[props.item.media_type] || props.item.media_type
})

const formatDuration = (s: number): string => {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}
</script>