<template>
  <section
    id="problem"
    class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-neutral-900 text-white rounded-3xl my-12 md:mx-auto max-w-[calc(100%-2rem)]"
  >
    <div class="md:px-4 py-4">
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ title }}</h2>
        <div class="relative">
          <i
            data-lucide="quote"
            class="absolute -top-4 -left-6 text-neutral-700 w-12 h-12 rotate-180 opacity-50"
          ></i>
          <p
            class="text-2xl md:text-3xl font-light leading-snug text-neutral-200 pl-4 italic"
          >
            "{{ quote }}"
          </p>
          <div class="mt-4 pl-4 flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold"
            >
              {{ quoteInitial }}
            </div>
            <div class="text-sm text-neutral-400">
              <span class="font-bold text-white block">{{ quoteAuthor }}</span>
              {{ quoteRole }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="grid md:grid-cols-2 gap-12 mt-16 border-t border-neutral-800 pt-12"
      >
        <div>
          <h3
            class="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-2"
          >
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
            {{ painPointsTitle }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(point, index) in painPoints"
              :key="index"
              class="flex gap-3 text-neutral-300"
            >
              <span class="text-neutral-500 mt-1"
                >{{ (index + 1).toString().padStart(2, "0") }}.</span
              >
              <span v-html="point"></span>
            </li>
          </ul>
        </div>
        <div>
          <h3
            class="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2"
          >
            <i data-lucide="search" class="w-5 h-5"></i>
            {{ marketGapTitle }}
          </h3>
          <p class="text-neutral-300 leading-relaxed mb-6">
            {{ marketGapDescription }}
            <span class="text-white font-semibold border-b border-purple-500">{{
              marketGapHighlight
            }}</span>
          </p>
          <p class="text-neutral-400 text-sm">
            {{ marketOpportunity }}
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
    default: "The Problem",
  },
  quote: {
    type: String,
    default:
      "I literally copy-paste my client's URL into ChatGPT every Monday… just to see if we're mentioned.",
  },
  quoteAuthor: {
    type: String,
    default: "Maya",
  },
  quoteRole: {
    type: String,
    default: "SEO Agency Owner",
  },
  painPointsTitle: {
    type: String,
    default: "Core Pain Points",
  },
  painPoints: {
    type: Array,
    default: () => [
      "<strong>Zero visibility</strong> inside AI answers — no tools exist to measure this.",
      "<strong>Manual workflows</strong> waste 2+ hours/week per client.",
      "<strong>Competitor blindness</strong>: Agencies can't tell if rivals are being cited.",
    ],
  },
  marketGapTitle: {
    type: String,
    default: "Market Gap",
  },
  marketGapDescription: {
    type: String,
    default: "While tools like Ahrefs and SEMrush dominate SERP analytics,",
  },
  marketGapHighlight: {
    type: String,
    default: "none offer AI-answer visibility tracking.",
  },
  marketOpportunity: {
    type: String,
    default:
      "This is a white space — and an opportunity to define the category.",
  },
});

// حساب الحرف الأول من اسم المؤلف
const quoteInitial = computed(() => {
  return props.quoteAuthor.charAt(0).toUpperCase();
});
</script>
