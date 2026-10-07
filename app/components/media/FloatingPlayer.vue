<template>
  <Teleport to="body">
    <Transition name="fp-slide">
      <div
        class="fixed bottom-6 right-6 z-[9999] w-full max-w-[420px] bg-[color:var(--ink)] text-white rounded-3xl shadow-2xl overflow-hidden border border-white/10"
      >
        <!-- ═══ Header ═══ -->
        <div class="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] flex items-center justify-center shrink-0">
              <Icon :name="headerIcon" class="w-5 h-5" :fill="isVideo ? 'currentColor' : 'none'" />
            </div>
            <div class="min-w-0">
              <div class="text-[10px] font-bold uppercase tracking-widest text-white/50">
                {{ isVideo ? 'Now Watching' : 'Now Playing' }}
              </div>
              <div class="text-[13px] font-bold truncate">{{ item.title }}</div>
            </div>
          </div>
          <button
            @click="$emit('close')"
            class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Close player"
          >
            <Icon name="lucide:x" class="w-4 h-4" />
          </button>
        </div>

        <!-- ═══ VIDEO — YouTube Player ═══ -->
        <div v-if="isVideo" class="aspect-video bg-black">
          <iframe
            v-if="item.youtube_id"
            :src="youtubeEmbedUrl"
            class="w-full h-full"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
          <div v-else class="w-full h-full flex items-center justify-center text-white/40 text-[12px]">
            No video source available
          </div>
        </div>

        <!-- ═══ PODCAST — Spotify Player ═══ -->
        <div v-else-if="isPodcast" class="p-4 bg-[color:var(--ink-2)]">
          <iframe
            v-if="item.spotify_episode_id"
            :src="spotifyEmbedUrl"
            width="100%"
            height="152"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style="border-radius: 12px; border: none;"
          ></iframe>
          <div v-else class="w-full h-[152px] flex items-center justify-center text-white/40 text-[12px]">
            No audio source available
          </div>
        </div>

        <!-- ═══ SHORTS / INTERVIEW — Fallback ═══ -->
        <div v-else class="aspect-video bg-black">
          <iframe
            v-if="item.youtube_id"
            :src="youtubeEmbedUrl"
            class="w-full h-full"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        </div>

        <!-- ═══ Footer ═══ -->
        <div class="px-5 py-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
          <span class="uppercase tracking-widest font-bold">
            {{ typeLabel }} · {{ formatDuration(item.duration_seconds) }}
          </span>
          <div class="flex items-center gap-3">
            <a
              v-if="isVideo && item.youtube_id"
              :href="`https://www.youtube.com/watch?v=${item.youtube_id}`"
              target="_blank"
              rel="noopener"
              class="font-bold text-[color:var(--accent-1)] hover:text-white transition-colors flex items-center gap-1"
            >
              YouTube
              <Icon name="lucide:external-link" class="w-3 h-3" />
            </a>
            <a
              v-if="isPodcast && item.spotify_episode_id"
              :href="`https://open.spotify.com/episode/${item.spotify_episode_id}`"
              target="_blank"
              rel="noopener"
              class="font-bold text-[color:var(--accent-1)] hover:text-white transition-colors flex items-center gap-1"
            >
              Spotify
              <Icon name="lucide:external-link" class="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface MediaItem {
  title: string
  slug: string
  media_type: string
  duration_seconds?: number
  youtube_id?: string
  spotify_episode_id?: string
}

const props = defineProps<{
  item: MediaItem
}>()

const emit = defineEmits<{
  close: []
}>()

// ✅ الاعتماد على media_type مش على وجود الـ IDs
const isVideo = computed(() => props.item.media_type === 'video')
const isPodcast = computed(() => props.item.media_type === 'podcast')

const headerIcon = computed(() => {
  if (isVideo.value) return 'lucide:play'
  if (isPodcast.value) return 'lucide:headphones'
  return 'lucide:play'
})

const youtubeEmbedUrl = computed(() =>
  `https://www.youtube-nocookie.com/embed/${props.item.youtube_id}?` +
  `rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&autoplay=1`
)

const spotifyEmbedUrl = computed(() =>
  `https://open.spotify.com/embed/episode/${props.item.spotify_episode_id}?utm_source=generator&theme=0`
)

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

const formatDuration = (s?: number): string => {
  if (!s) return '—'
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}

const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>

<style scoped>
.fp-slide-enter-active, .fp-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fp-slide-enter-from, .fp-slide-leave-to {
  transform: translateY(120%);
  opacity: 0;
}
</style>