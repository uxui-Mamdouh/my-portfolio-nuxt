<template>
  <section
    id="solution"
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

    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Abstract UI Mockup -->
      <div class="relative order-2 lg:order-1">
        <div
          class="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-[2rem] opacity-50 blur-xl"
        ></div>
        <div
          class="relative bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden"
        >
          <!-- Mock Header -->
          <div
            class="h-12 border-b border-neutral-100 bg-neutral-50 flex items-center px-4 gap-2"
          >
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          <!-- Mock Body -->
          <div class="p-8 space-y-8">
            <!-- Big Score -->
            <div class="flex justify-between items-end">
              <div>
                <p
                  class="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2"
                >
                  {{ mockup.scoreLabel }}
                </p>
                <h3 class="text-6xl font-black text-neutral-900">
                  {{ mockup.score
                  }}<span class="text-2xl text-neutral-400 font-medium"
                    >/100</span
                  >
                </h3>
              </div>
              <div
                class="px-4 py-2 bg-green-50 text-green-700 text-sm font-bold rounded-lg flex items-center gap-2"
              >
                <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                {{ mockup.scoreBadge }}
              </div>
            </div>

            <!-- Graph Placeholder -->
            <div class="h-32 flex items-end gap-2">
              <div
                v-for="(bar, index) in mockup.graphBars"
                :key="index"
                class="flex-1 bg-neutral-100 rounded-t-lg relative overflow-hidden group"
              >
                <div
                  class="absolute bottom-0 w-full transition-all duration-1000"
                  :class="bar.color"
                  :style="{ height: bar.height }"
                ></div>
              </div>
            </div>

            <!-- List Items -->
            <div class="space-y-3">
              <div
                v-for="(item, index) in mockup.listItems"
                :key="index"
                class="h-12 w-full bg-neutral-50 rounded-lg flex items-center px-4 justify-between"
              >
                <div class="w-1/3 h-2 bg-neutral-200 rounded"></div>
                <div class="w-8 h-8 bg-neutral-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features List -->
      <div class="space-y-8 order-1 lg:order-2">
        <div class="grid grid-cols-1 gap-4">
          <!-- Feature Items -->
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              :class="feature.iconBgColor"
            >
              <i
                :data-lucide="feature.icon"
                class="w-6 h-6"
                :class="feature.iconColor"
              ></i>
            </div>
            <div>
              <h4 class="font-bold text-neutral-900 text-lg">
                {{ feature.title }}
              </h4>
              <p class="text-neutral-500 mt-1">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Design Rationale -->
        <div class="bg-neutral-900 text-white p-6 rounded-xl mt-8">
          <h4 class="font-bold mb-2">{{ designRationale.title }}</h4>
          <ul class="space-y-2 text-neutral-300 text-sm">
            <li
              v-for="point in designRationale.points"
              :key="point"
              class="flex gap-2"
            >
              <i
                data-lucide="check-circle-2"
                class="w-4 h-4 text-indigo-400"
              ></i>
              {{ point }}
            </li>
          </ul>
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
    default: "The Solution",
  },
  subtitle: {
    type: String,
    default: "Designed around Maya's Job-To-Be-Done: Clarity over complexity.",
  },
  mockup: {
    type: Object,
    default: () => ({
      scoreLabel: "AEO Visibility Score",
      score: "78",
      scoreBadge: "Top 10%",
      graphBars: [
        { height: "40%", color: "bg-neutral-300 group-hover:bg-neutral-400" },
        { height: "65%", color: "bg-neutral-300 group-hover:bg-neutral-400" },
        { height: "50%", color: "bg-neutral-300 group-hover:bg-neutral-400" },
        { height: "80%", color: "bg-neutral-300 group-hover:bg-neutral-400" },
        { height: "78%", color: "bg-indigo-600" },
      ],
      listItems: [1, 2, 3],
    }),
  },
  features: {
    type: Array,
    default: () => [
      {
        icon: "zap",
        title: "AEO Score (0–100)",
        description:
          "A clear, proprietary metric for AI visibility. No more ambiguity.",
        iconBgColor: "bg-amber-100",
        iconColor: "text-amber-700",
      },
      {
        icon: "layers",
        title: "Competitor Gap Analysis",
        description: "See exactly when rivals get cited and you don't.",
        iconBgColor: "bg-purple-100",
        iconColor: "text-purple-700",
      },
      {
        icon: "file-text",
        title: "Branded PDF Export",
        description: "Generate client-ready reports in one click.",
        iconBgColor: "bg-indigo-100",
        iconColor: "text-indigo-700",
      },
      {
        icon: "bell",
        title: "Real-Time Alerts",
        description: "Get notified the moment a competitor appears in ChatGPT.",
        iconBgColor: "bg-red-100",
        iconColor: "text-red-700",
      },
    ],
  },
  designRationale: {
    type: Object,
    default: () => ({
      title: "Why this design?",
      points: [
        "One big number, not 10 confusing graphs.",
        'Actionable output: Every screen ends with a "next step".',
        "Client-ready: Built to be screenshotted.",
      ],
    }),
  },
});
</script>
