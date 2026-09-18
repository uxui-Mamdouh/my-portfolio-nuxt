<template>
  <div class="marquee-container border-y border-[color:var(--card-border)] bg-[color:var(--page-bg-1)] overflow-hidden">
    <div class="marquee py-5 md:py-8">
      <div class="marquee-track">
        
        <!-- المجموعة الأولى -->
        <!-- استخدمنا gap-8 و md:gap-16 لضمان مسافات متساوية 100% بين كل عنصر والآخر (نص أو نجمة) -->
        <div class="content flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
          <template v-for="(item, i) in items" :key="'set1-' + i">
            <!-- النص مع تأثير التنفس -->
            <span class="breathing-text text-[color:var(--ink)] opacity-90 text-lg md:text-2xl font-bold uppercase">
              {{ item.label }}
            </span>
            <!-- النجمة الفاصلة -->
            <span class="text-[color:var(--accent-1)] opacity-70 text-xl md:text-2xl flex-shrink-0">✦</span>
          </template>
        </div>

        <!-- المجموعة الثانية (لضمان الـ Loop المستمر) -->
        <div class="content flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
          <template v-for="(item, i) in items" :key="'set2-' + i">
            <span class="breathing-text text-[color:var(--ink)] opacity-90 text-lg md:text-2xl font-bold uppercase">
              {{ item.label }}
            </span>
            <span class="text-[color:var(--accent-1)] opacity-70 text-xl md:text-2xl flex-shrink-0">✦</span>
          </template>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { label: "Investor-Ready Interfaces" },
  { label: "Institutional-Grade Design" },
  { label: "Zero-Friction Onboarding" },
  { label: "Shipped in 4 Weeks" },
  { label: "Design That Converts" },
  { label: "Complex SaaS Simplified" }
];
</script>

<style scoped>
.marquee-container {
  width: 100%;
  position: relative;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.marquee {
  width: 100%;
  display: flex;
}

.marquee-track {
  display: inline-flex;
  width: max-content;
  animation: scroll 35s linear infinite;
  will-change: transform; /* ✅ GPU acceleration */
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.breathing-text {
  letter-spacing: -0.02em;
  white-space: nowrap;
  /* ✅ استبدلنا letter-spacing بـ transform (GPU) */
  animation: breathe 6s ease-in-out infinite alternate;
  will-change: transform;
  display: inline-block;
}

.breathing-text:nth-child(even) {
  animation-delay: -3s;
}
.breathing-text:nth-child(3n) {
  animation-delay: -1.5s;
}

/* ✅ transform بدل letter-spacing */
@keyframes breathe {
  0% {
    transform: scaleX(0.97);
    opacity: 0.85;
  }
  100% {
    transform: scaleX(1.02);
    opacity: 1;
  }
}

/* ✅ احترام المستخدم */
@media (prefers-reduced-motion: reduce) {
  .marquee-track,
  .breathing-text {
    animation: none !important;
  }
}

/* ✅ إيقاف الأنيميشن على الأجهزة الضعيفة */
@media (pointer: coarse) {
  .breathing-text {
    animation-duration: 10s; /* ← أبطأ = أقل استنزافاً */
  }
}
</style>