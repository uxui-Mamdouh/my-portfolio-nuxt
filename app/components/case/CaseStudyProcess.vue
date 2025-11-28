<template>
  <section
    id="process"
    class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-neutral-50/50"
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Process Cards -->
      <div
        v-for="(step, index) in processSteps"
        :key="index"
        class="p-6 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group"
        :class="step.spanClass"
      >
        <div
          class="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center text-neutral-900 mb-4 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"
        >
          <i :data-lucide="step.icon" class="w-5 h-5"></i>
        </div>
        <h3 class="text-lg font-bold text-neutral-900 mb-2">
          {{ step.title }}
        </h3>
        <p class="text-sm text-neutral-500 leading-relaxed">
          {{ step.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// تعريف البروبس
const props = defineProps({
  title: {
    type: String,
    default: "My Process",
  },
  subtitle: {
    type: String,
    default: "A full product design lifecycle from discovery to delivery.",
  },
  processSteps: {
    type: Array,
    default: () => [
      {
        icon: "search",
        title: "Discover",
        description:
          "Stakeholder Kick-off, Competitive Scan, 12 User Interviews",
        spanClass: "",
      },
      {
        icon: "pen-tool",
        title: "Define",
        description:
          "Persona (Maya), JTBD, As-Is Journey Map, Service Blueprint",
        spanClass: "",
      },
      {
        icon: "lightbulb",
        title: "Ideate",
        description: "HMW Questions, Crazy-8s, Storyboards, Impact vs Effort",
        spanClass: "",
      },
      {
        icon: "monitor",
        title: "Prototype",
        description: "Low-Fi, Mid-Fi (Content), High-Fi (Micro-copy)",
        spanClass: "",
      },
      {
        icon: "user-check",
        title: "Test",
        description: "Usability Testing, Iteration Cycles",
        spanClass: "",
      },
      {
        icon: "package",
        title: "Deliver",
        description: "Design System, Motion Guidelines, Dev Hand-off",
        spanClass: "",
      },
      {
        icon: "bar-chart-2",
        title: "Measure",
        description: "Event Tracking (GA4 + GTM), Success Metrics",
        spanClass: "md:col-span-2 lg:col-span-2",
      },
    ],
  },
});
</script>
