<template>
  <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-b border-[color:var(--card-border)]">
    <div class="container mx-auto">
      
      <!-- HEADER -->
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

      <!-- EDITORIAL LIST -->
      <div class="w-full border-t border-[color:var(--card-border)] relative">
        
        <div v-if="pending" class="py-20 text-center flex flex-col items-center gap-4 text-[color:var(--ink-soft)]">
          <Icon name="lucide:loader-2" class="w-8 h-8 animate-spin text-[color:var(--accent-1)]" />
          <p>Loading episodes…</p>
        </div>

        <div v-else-if="!items || items.length === 0" class="py-20 text-center text-[color:var(--ink-soft)]">
          <Icon name="lucide:radio" class="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p>No episodes yet. Check back soon.</p>
        </div>

        <template v-else>
          <MediaRow
            v-for="(item, idx) in items"
            :key="item.id"
            :item="item"
            :number="String(idx + 1).padStart(2, '0')"
            @open="handleOpen"
          />
        </template>
      </div>

      <!-- STATS -->
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
import MediaRow from '~/components/media/MediaRow.vue'
import FloatingPlayer from '~/components/media/FloatingPlayer.vue'

const { fetchItems, fetchSeries } = useMedia()

const { data: items, pending } = await useAsyncData('home-media-items', () =>
  fetchItems({ limit: 4 })
)

const { data: seriesList } = await useAsyncData('home-media-series', () => fetchSeries())

const nowPlaying = ref<any>(null)

const stats = computed(() => {
  const episodes = items.value?.length || 0
  const series = seriesList.value?.length || 0
  const totalSec = items.value?.reduce((sum: number, i: any) => sum + (i.duration_seconds || 0), 0) || 0
  const totalMinutes = Math.round(totalSec / 60)
  const duration = totalMinutes >= 60
    ? `${(totalMinutes / 60).toFixed(1)}h`
    : `${totalMinutes}m`

  return { episodes, series, duration: duration || '—', platforms: 4 }
})

const handleOpen = (item: any) => {
  nowPlaying.value = item
}
</script>