<template>
  <button
    type="button"
    class="media-row group relative block w-full text-left border-b border-[color:var(--card-border)] 
           transition-colors duration-300 ease-out
           hover:bg-[color:var(--input-bg)]/30 cursor-pointer"
    @click="$emit('open', item)"
  >
    <!-- Left Accent Border — ينزلق من الأعلى للأسفل (بدون padding shift) -->
    <span
      class="absolute left-0 top-0 bottom-0 w-[2px]
             bg-gradient-to-b from-[color:var(--accent-1)] to-[color:var(--accent-2)]
             scale-y-0 origin-top
             transition-transform duration-500 ease-out
             group-hover:scale-y-100"
      aria-hidden="true"
    ></span>

    <!-- ═══════════════════════════════════════════════
         DESKTOP ROW
         ═══════════════════════════════════════════════ -->
    <div class="hidden md:flex items-center justify-between gap-8 py-7 pl-2 pr-4">
      
      <!-- ═══ LEFT: Number + Title + Meta ═══ -->
      <div class="flex-1 min-w-0">
        
        <!-- Number + Type Badge -->
        <div class="flex items-center gap-3 mb-2">
          <span class="font-mono text-[10px] font-bold tracking-[0.2em] text-[color:var(--accent-text)] opacity-70">
            {{ number }}
          </span>

          <span
            v-if="item.episode_number"
            class="px-2 py-0.5 bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)]
                   text-[9px] font-bold uppercase tracking-widest rounded
                   border border-[color:var(--accent-1)]/20"
          >
            EP {{ String(item.episode_number).padStart(2, '0') }}
          </span>

          <span
            class="px-2 py-0.5 bg-[color:var(--input-bg)] text-[color:var(--ink-soft)]
                   text-[9px] font-bold uppercase tracking-widest rounded
                   border border-[color:var(--card-border)]"
          >
            {{ typeLabel }}
          </span>
        </div>

        <!-- Title — أصغر + سطر واحد فقط -->
        <h3
          class="text-[18px] lg:text-[20px] font-bold text-[color:var(--ink)]
                 tracking-[-0.01em] leading-tight
                 group-hover:text-[color:var(--accent-text)]
                 transition-colors duration-300
                 line-clamp-1"
        >
          {{ item.title }}
        </h3>

        <!-- Description — سطر واحد فقط -->
        <p
          v-if="item.description"
          class="mt-1.5 text-[13px] text-[color:var(--ink-soft)] leading-snug line-clamp-1 max-w-2xl"
        >
          {{ item.description }}
        </p>

        <!-- Format Badges -->
        <div class="flex items-center gap-2 mt-3 flex-wrap">
          <span
            v-if="item.article_slug"
            class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full 
                   bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] 
                   text-[10px] font-bold border border-[color:var(--accent-1)]/20"
          >
            <Icon name="lucide:book-open" class="w-3 h-3" />
            Read
          </span>
          <span
            v-if="item.youtube_id"
            class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full 
                   bg-red-500/10 text-red-500 
                   text-[10px] font-bold border border-red-500/20"
          >
            <Icon name="lucide:play-circle" class="w-3 h-3" />
            Watch
          </span>
          <span
            v-if="item.spotify_episode_id"
            class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full 
                   bg-emerald-500/10 text-emerald-600 
                   text-[10px] font-bold border border-emerald-500/20"
          >
            <Icon name="lucide:headphones" class="w-3 h-3" />
            Listen
          </span>
        </div>
      </div>

      <!-- ═══ RIGHT: Duration + Play Button ═══ -->
      <div class="flex items-center gap-5 shrink-0">
        <span
          v-if="item.duration_seconds"
          class="font-mono text-[11px] tracking-[0.1em] text-[color:var(--ink-soft)]
                 group-hover:text-[color:var(--accent-text)]
                 transition-colors duration-300"
        >
          {{ formatDuration(item.duration_seconds) }}
        </span>

        <!-- Play Icon -->
        <div
          class="w-9 h-9 rounded-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)]
                 flex items-center justify-center
                 group-hover:bg-[color:var(--accent-1)] group-hover:border-[color:var(--accent-1)] group-hover:scale-110
                 transition-all duration-300"
        >
          <Icon
            :name="playIcon"
            class="w-3.5 h-3.5 text-[color:var(--ink-soft)] group-hover:text-white transition-colors"
            :fill="item.media_type === 'video' ? 'currentColor' : 'none'"
          />
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MOBILE ROW
         ═══════════════════════════════════════════════ -->
    <div class="md:hidden flex flex-col gap-2 py-5 px-3">
      <div class="flex items-center gap-3">
        <span class="font-mono text-[10px] font-bold tracking-[0.2em] text-[color:var(--accent-text)] opacity-70">
          {{ number }}
        </span>
        <span
          class="px-2 py-0.5 bg-[color:var(--input-bg)] text-[color:var(--ink-soft)]
                 text-[9px] font-bold uppercase tracking-widest rounded
                 border border-[color:var(--card-border)]"
        >
          {{ typeLabel }}
        </span>
      </div>

      <h3 class="text-[15px] font-bold text-[color:var(--ink)] group-hover:text-[color:var(--accent-text)] transition-colors leading-snug line-clamp-2">
        {{ item.title }}
      </h3>

      <div class="flex items-center justify-between text-xs mt-1">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span
            v-if="item.article_slug"
            class="inline-flex items-center px-2 py-0.5 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] text-[9px] font-bold"
          >
            Read
          </span>
          <span
            v-if="item.youtube_id"
            class="inline-flex items-center px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 text-[9px] font-bold"
          >
            Watch
          </span>
          <span
            v-if="item.spotify_episode_id"
            class="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[9px] font-bold"
          >
            Listen
          </span>
        </div>
        <span v-if="item.duration_seconds" class="font-mono text-[10px] tracking-wider text-[color:var(--ink-soft)] shrink-0">
          {{ formatDuration(item.duration_seconds) }}
        </span>
      </div>
    </div>
  </button>
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
}

const props = defineProps<{
  item: MediaItem
  number: string
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

const playIcon = computed(() => {
  if (props.item.media_type === 'podcast') return 'lucide:headphones'
  if (props.item.media_type === 'video') return 'lucide:play'
  return 'lucide:play'
})

const formatDuration = (s: number): string => {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}
</script>

<style scoped>
.media-row {
  outline: none;
}
.media-row:focus-visible {
  outline: 2px solid var(--accent-1);
  outline-offset: -2px;
}
</style>