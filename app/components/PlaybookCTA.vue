<template>
  <!-- 
    The Main Container 
    يستخدم الـ card-bg مع border و gradient خفيف جداً ليتماشى مع هويتك البصرية.
  -->
  <div class="w-full mx-auto relative mb-24" data-aos="fade-up">
    <!-- Pattern Overlay (Subtle Grid + Gradient) -->
    <div
      class="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
      style="
        background-image: linear-gradient(var(--ink) 1px, transparent 1px),
          linear-gradient(90deg, var(--ink) 1px, transparent 1px);
        background-size: 32px 32px;
        mask-image: radial-gradient(circle at center, black, transparent 80%);
      "
    ></div>
    <div
      class="absolute top-[40%] right-[40%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(109,94,240,0.1)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none"
    ></div>
    <div class="relative z-10 grid grid-cols-1 items-center">
      <!-- ================= LEFT: THE PITCH ================= -->
      <div>
        <!-- Pipeline Strip -->
        <div
          class="flex items-center flex-wrap gap-2.5 font-mono text-[11.5px] font-bold text-[color:var(--ink-soft)] mb-8"
          aria-hidden="true"
        >
          <span
            class="px-3 py-1.5 border border-[color:var(--accent-1)]/30 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] shadow-sm"
            >Design</span
          >
          <Icon name="lucide:chevron-right" class="w-3.5 h-3.5 opacity-50" />
          <span
            class="px-3 py-1.5 border border-[color:var(--accent-1)]/30 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] shadow-sm"
            >Build</span
          >
          <Icon name="lucide:chevron-right" class="w-3.5 h-3.5 opacity-50" />
          <span
            class="px-3 py-1.5 border border-[color:var(--accent-1)]/30 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] shadow-sm"
            >Instrument</span
          >
        </div>

        <h3
          class="text-3xl md:text-[clamp(32px,3.8vw,46px)] font-black tracking-[-0.02em] leading-[1.14] text-[color:var(--ink)] mb-5"
        >
          {{ title }}
        </h3>

        <p
          class="text-[1.05rem] leading-[1.65] text-[color:var(--ink-soft)] mb-8"
        >
          {{ description }}
        </p>

        <!-- Deliverables List -->
        <ul
          class="flex flex-col gap-3.5 mb-10 border-l-2 border-[color:var(--card-border)] pl-4 md:pl-5"
        >
          <li
            v-for="(item, index) in deliverables"
            :key="index"
            class="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4 text-[0.92rem] text-[color:var(--ink-soft)]"
          >
            <code
              class="font-mono text-[13.5px] font-bold text-[color:var(--ink)] min-w-[85px] shrink-0"
              >{{ item.code }}</code
            >
            <span>{{ item.text }}</span>
          </li>
        </ul>

        <!-- Action Buttons -->
        <div class="flex items-center gap-6 flex-wrap">
          <AppButton
            to="/contact"
            variant="primary"
            size="lg"
            rounded="full"
            class="shadow-lg shadow-[color:var(--accent-1)]/20"
          >
            {{ buttonText }}
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// --- Props Configuration ---
const props = defineProps({
  title: {
    type: String,
    default: "Let's make your next launch measurable.",
  },
  description: {
    type: String,
    default:
      "I design, build, and instrument websites end to end — so the numbers exist before anyone asks for them.",
  },
  buttonText: {
    type: String,
    default: "Let's talk measurement",
  },
  deliverables: {
    type: Array,
    default: () => [
      { code: "build/", text: "Vue, Nuxt, or Webflow — whichever fits" },
      { code: "routes/", text: "Server-side tracking, no client leaks" },
      { code: "plan.json", text: "A tracking plan your team can extend" },
    ],
  },
});

// --- Animation Logic ---
const counterEl = ref(null);
const chartLinePath = ref(null);
const chartFill = ref(null);
const showLogs = ref(false);

const logEvents = [
  { name: "page_view", value: "/pricing" },
  { name: "sign_up", value: "completed" },
  { name: "purchase", value: "$49.00" },
];

onMounted(() => {
  // Prevent animations if user prefers reduced motion
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (process.client && !reduced) {
    // 1. Counter Animation
    let start = null;
    const duration = 1400;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // Cubic ease-out
      if (counterEl.value) {
        counterEl.value.textContent = Math.round(
          eased * props.targetMetric,
        ).toLocaleString();
      }
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);

    // 2. SVG Line Draw Animation
    if (chartLinePath.value) {
      const len = chartLinePath.value.getTotalLength();
      chartLinePath.value.style.strokeDasharray = len;
      chartLinePath.value.style.strokeDashoffset = len;
      chartLinePath.value.getBoundingClientRect(); // Trigger reflow
      chartLinePath.value.style.transition = "stroke-dashoffset 1.3s ease";

      requestAnimationFrame(() => {
        chartLinePath.value.style.strokeDashoffset = "0";
      });

      // Show fill after line is drawn
      setTimeout(() => {
        if (chartFill.value) chartFill.value.classList.remove("opacity-0");
      }, 900);
    }

    // 3. Trigger Logs
    showLogs.value = true;
  } else if (process.client && reduced) {
    // Fallback for reduced motion
    if (counterEl.value)
      counterEl.value.textContent = props.targetMetric.toLocaleString();
    if (chartFill.value) chartFill.value.classList.remove("opacity-0");
    showLogs.value = true;
  }
});
</script>

<style scoped>
@keyframes rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
