<template>
  <section
    id="insights"
    class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
  >
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
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Insight Cards -->
      <div
        v-for="(insight, index) in insights"
        :key="index"
        class="bg-neutral-50 p-6 rounded-xl border border-neutral-100 flex flex-col"
      >
        <i
          data-lucide="message-square"
          class="text-neutral-300 mb-4 w-6 h-6"
        ></i>
        <p class="font-serif italic text-lg text-neutral-700 mb-6 flex-grow">
          "{{ insight.quote }}"
        </p>
        <div class="pt-4 border-t border-neutral-200">
          <p
            class="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1"
          >
            {{ insightLabel }}
          </p>
          <p class="text-sm text-neutral-600 font-medium">
            {{ insight.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// تعريف البروبس
const props = defineProps({
  title: {
    type: String,
    default: "Key Insights",
  },
  subtitle: {
    type: String,
    default: "From 12 user interviews, three powerful insights emerged.",
  },
  insightLabel: {
    type: String,
    default: "Insight",
  },
  insights: {
    type: Array,
    default: () => [
      {
        quote: "I don't need a report — I need a number I can screenshot.",
        description:
          "Users want a single, shareable metric (AEO Score) to prove value.",
      },
      {
        quote: "If I can't measure it, I can't sell it.",
        description:
          "The lack of AI visibility data blocks upsells and client trust.",
      },
      {
        quote: "AEO is the next frontier — but there's no standard.",
        description:
          "We have a rare chance to define the category, not just enter it.",
      },
    ],
  },
});
</script>
