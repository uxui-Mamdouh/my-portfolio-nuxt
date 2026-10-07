<template>
  <article
    class="group bg-white border border-[color:var(--card-border)] rounded-3xl overflow-hidden hover:border-[color:var(--accent-1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.3)] transition-all duration-500 cursor-pointer flex flex-col"
    @click="$emit('play', item)"
  >
    <!-- Cover / Thumbnail -->
    <div class="aspect-video bg-[color:var(--ink)] relative overflow-hidden">
      <NuxtImg
        v-if="item.thumbnail_url"
        :src="item.thumbnail_url"
        :alt="item.title"
        class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        width="640"
        height="360"
        format="webp"
        quality="85"
        loading="lazy"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center"
        :style="{ background: seriesColor }"
      >
        <Icon
          :name="mediaIcon"
          class="w-12 h-12 text-white/40"
        />
      </div>

      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      <!-- Play Button -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Icon :name="mediaIcon" class="w-6 h-6 text-[color:var(--ink)] ml-0.5" fill="currentColor" />
        </div>
      </div>

      <!-- Duration Badge -->
      <div
        v-if="item.duration_seconds"
        class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-bold font-mono"
      >
        {{ formatDuration(item.duration_seconds) }}
      </div>

      <!-- Series Badge -->
      <div
        v-if="series"
        class="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
        :style="{ backgroundColor: series.accent_color }"
      >
        {{ series.emoji }} {{ series.name }}
      </div>
    </div>

    <!-- Body -->
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center gap-2 mb-3 text-[11px] font-bold uppercase tracking-widest text-[color:var(--ink-mute)]">
        <span v-if="item.episode_number">EP {{ String(item.episode_number).padStart(2, '0') }}</span>
        <span v-if="item.episode_number && item.media_type" class="w-1 h-1 rounded-full bg-[color:var(--card-border)]"></span>
        <span>{{ typeLabel }}</span>
      </div>

      <h3 class="text-[17px] font-extrabold text-[color:var(--ink)] leading-snug mb-3 line-clamp-2 group-hover:text-[color:var(--accent-1)] transition-colors">
        {{ item.title }}
      </h3>

      <p v-if="item.description" class="text-[14px] text-[color:var(--ink-soft)] leading-relaxed line-clamp-2 mb-4 flex-1">
        {{ item.description }}
      </p>

      <!-- Formats Available -->
      <div class="flex items-center gap-2 pt-4 border-t border-[color:var(--card-border)] mt-auto">
        <span
          v-if="item.youtube_id"
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold"
        >
          <Icon name="lucide:play-circle" class="w-3 h-3" />
          Watch
        </span>
        <span
          v-if="item.spotify_episode_id"
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold"
        >
          <Icon name="lucide:headphones" class="w-3 h-3" />
          Listen
        </span>
        <span
          v-if="item.article_slug"
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] text-[10px] font-bold ml-auto"
        >
          <Icon name="lucide:book-open" class="w-3 h-3" />
          Read
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  item: { type: Object, required: true },
  series: { type: Object, default: null },
})

defineEmits(['play'])

const mediaIcon = computed(() => {
  if (props.item.media_type === 'podcast') return 'lucide:headphones'
  if (props.item.media_type === 'video') return 'lucide:play'
  if (props.item.media_type === 'shorts') return 'lucide:zap'
  return 'lucide:play'
})

const typeLabel = computed(() => {
  const map = {
    podcast: 'Podcast',
    video: 'Video',
    shorts: 'Short',
    interview: 'Interview',
    trailer: 'Trailer',
  }
  return map[props.item.media_type] || props.item.media_type
})

const seriesColor = computed(() =>
  props.series?.accent_color
    ? `linear-gradient(135deg, ${props.series.accent_color}, ${props.series.accent_color}dd)`
    : 'linear-gradient(135deg, #6d5ef0, #8a5cf6)'
)

const formatDuration = (seconds) => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}
</script>