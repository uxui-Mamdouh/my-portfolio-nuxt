<template>
  <section
    id="overview"
    class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
  >
    <!-- العنوان والوصف -->
    <div class="mb-12 md:mb-16">
      <h2
        class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4"
      >
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed"
      >
        {{ subtitle }}
      </p>
    </div>

    <!-- محتوى الاستراتيجية -->
    <div
      class="bg-white rounded-2xl p-8 border-l-4 border-indigo-500 shadow-sm"
    >
      <!-- عنوان الاستراتيجية -->
      <h3
        class="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2"
      >
        <i data-lucide="target" class="text-indigo-500 w-6 h-6"></i>
        {{ strategicGoalTitle }}
      </h3>

      <!-- وصف الاستراتيجية -->
      <p class="text-lg text-neutral-700 leading-relaxed mb-4">
        {{ strategicGoalDescription }}
      </p>

      <!-- الهدف الرئيسي -->
      <p v-if="mainObjective" class="font-semibold text-neutral-900">
        {{ mainObjective }}
      </p>
    </div>
  </section>
</template>

<script setup>
// تعريف البروبس
const props = defineProps({
  title: {
    type: String,
    default: "Project Overview",
  },
  subtitle: {
    type: String,
    default: "Oct – Dec 2025 • Product Designer (Lead)",
  },
  strategicGoalTitle: {
    type: String,
    default: "Strategic Goal",
  },
  strategicGoalDescription: {
    type: String,
    default:
      "Build the first SaaS platform dedicated to Answer Engine Optimization (AEO) — enabling marketers and agencies to measure, improve, and benchmark their brand's visibility inside AI answer engines like ChatGPT, Claude, Gemini, and Perplexity.",
  },
  mainObjective: {
    type: String,
    default:
      "Create a new market category, not just compete in an existing one.",
  },
});
</script>
