<template>
  <header
    class="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 lg:pt-0 max-w-7xl mx-auto"
  >
    <div class="max-w-4xl space-y-8 animate-fade-in-up">
      <!-- Badge -->
      <div
        v-if="badge"
        class="inline-flex items-center space-x-2 bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
      >
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span>{{ badge }}</span>
      </div>

      <!-- Title -->
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1]"
      >
        {{ title }}
      </h1>

      <!-- Description -->
      <p
        v-if="description"
        class="text-xl md:text-2xl lg:text-3xl text-neutral-500 max-w-2xl leading-relaxed font-light"
      >
        {{ description }}
      </p>

      <!-- Meta Information -->
      <div
        v-if="hasMetaInfo"
        class="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm text-neutral-600 border-t border-neutral-200 mt-8 w-full"
      >
        <div v-if="role">
          <span
            class="block text-neutral-400 text-xs uppercase tracking-wider mb-1"
            >Role</span
          >
          <span class="font-medium">{{ role }}</span>
        </div>
        <div v-if="tools">
          <span
            class="block text-neutral-400 text-xs uppercase tracking-wider mb-1"
            >Tools</span
          >
          <span class="font-medium">{{ tools }}</span>
        </div>
        <div v-if="impact">
          <span
            class="block text-neutral-400 text-xs uppercase tracking-wider mb-1"
            >Impact</span
          >
          <span class="font-medium">{{ impact }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      v-if="showScrollIndicator"
      class="absolute bottom-10 left-6 md:left-24 animate-bounce text-neutral-400"
    >
      <i data-lucide="arrow-down" class="w-6 h-6"></i>
    </div>
  </header>
</template>

<script setup>
// Define props
const props = defineProps({
  badge: {
    type: String,
    default: "Case Study 2025",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "",
  },
  tools: {
    type: String,
    default: "",
  },
  impact: {
    type: String,
    default: "",
  },
  showScrollIndicator: {
    type: Boolean,
    default: true,
  },
});

// Computed property to check if meta info exists
const hasMetaInfo = computed(() => {
  return props.role || props.tools || props.impact;
});
</script>
