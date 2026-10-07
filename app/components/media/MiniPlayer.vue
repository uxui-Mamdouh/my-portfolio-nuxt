<template>
  <div v-if="item" class="bg-neutral-800 from-[color:var(--ink)] to-[color:var(--ink-2)] text-white rounded-3xl p-6 relative overflow-hidden">
    <!-- Glow -->
    <div class="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full bg-[color:var(--accent-1)]/30 blur-3xl pointer-events-none"></div>

    <div class="relative z-10">
      <!-- Header -->
      <div class="flex items-center gap-3 mb-5">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] flex items-center justify-center shadow-lg shrink-0">
          <Icon name="lucide:headphones" class="w-5 h-5" />
        </div>
        <div class="min-w-0">
          <div class="text-[10px] font-bold uppercase tracking-widest text-white/50">
            Listen while you read
          </div>
          <div class="text-[13px] font-bold truncate">{{ item.title }}</div>
        </div>
      </div>

      <!-- Progress Bar (decorative) -->
      <div class="flex items-center gap-3 mb-5">
        <span class="text-[11px] font-mono text-white/60">0:00</span>
        <div class="flex-1 h-1 bg-white/15 rounded-full overflow-hidden">
          <div class="h-full w-0 bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]"></div>
        </div>
        <span class="text-[11px] font-mono text-white/60">{{ formatDuration(item.duration_seconds) }}</span>
      </div>

      <!-- Play Button -->
      <button
        @click="$emit('play')"
        class="w-full py-3 rounded-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white text-[13px] font-extrabold flex items-center justify-center gap-2 hover:shadow-[0_12px_32px_-6px_rgba(109,94,240,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
      >
        <Icon name="lucide:play" class="w-4 h-4" fill="currentColor" />
        Play Podcast
      </button>

      <!-- Watch Alternative -->
      <a
        v-if="item.youtube_id"
        href="#"
        @click.prevent="$emit('play')"
        class="mt-4 flex items-center gap-2.5 text-[12px] font-semibold text-white/70 hover:text-white transition-colors"
      >
        <Icon name="lucide:video" class="w-4 h-4 text-[color:var(--accent-1)]" />
        Prefer watching instead?
        <span class="ml-auto transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: { type: Object, required: true },
})

defineEmits(['play'])

const formatDuration = (s) => {
  if (!s) return '—'
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}
</script>