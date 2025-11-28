<template>
  <div>
    <AppHeader />
    <div class="hero flex justify-center items-center">
      <div
        class="container h-full mx-auto flex justify-end items-end md:items-center"
      >
        <div class="w-full flex justify-center items-center gap-4">
          <div>
            <div
              id="about"
              class="w-full py-24 px-6 flex text-start gap-8"
              aria-labelledby="about-heading"
            >
              <!-- عنوان فرعي -->
              <div class="flex items-center gap-2 text-neutral-200">
                <MyIcon
                  name="mynaui:hash"
                  textClass="text-neutral-200"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="50"
                  data-aos-duration="500"
                />
              </div>

              <!-- النص الرئيسي -->
              <h1
                id="about-heading"
                class="text-2xl md:text-4xl font-semibold text-neutral-100 leading-tight max-w-5xl"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                My Decisions
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="process w-full py-20 flex flex-col items-center">
      <div class="container">
        <div class="max-w-4xl w-full mx-auto">
          <div
            class="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden"
          >
            <!-- Header with gradient -->
            <div
              class="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-bold text-white mb-1">
                    Decision #1: Why I Won't Redesign Yet
                  </h2>
                  <p class="text-indigo-100 text-sm font-medium">
                    November 19, 2025
                  </p>
                </div>
                <div
                  class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span class="text-white text-sm font-semibold">Active</span>
                </div>
              </div>
            </div>

            <div class="p-8">
              <!-- Data Section -->
              <div
                class="card-section mb-6 bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-neutral-800 uppercase tracking-wider"
                  >
                    Data
                  </h3>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <span class="font-semibold text-indigo-600">170 visitors</span
                  >,
                  <span class="font-semibold text-indigo-600"
                    >30% drop-off</span
                  >
                  at 20-30% scroll (homepage only).
                </p>
              </div>

              <!-- Analysis Section -->
              <div
                class="card-section mb-6 bg-neutral-50 rounded-xl p-6 border-l-4 border-neutral-800"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-neutral-800 uppercase tracking-wider"
                  >
                    Analysis
                  </h3>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  Homepage ≠ Case study pages.
                  <span class="font-medium text-neutral-800"
                    >Case studies scroll fine.</span
                  >
                </p>
              </div>

              <!-- Hypothesis Section -->
              <div
                class="card-section mb-6 bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-neutral-800 uppercase tracking-wider"
                  >
                    Hypothesis
                  </h3>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  Site is new (<span class="font-semibold text-indigo-600"
                    >&lt;1 month</span
                  >), users need time to evaluate
                  <span class="font-semibold text-indigo-600"
                    >2 case studies only</span
                  >.
                </p>
              </div>

              <!-- Decision Section -->
              <div
                class="card-section mb-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-6 shadow-lg"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-white uppercase tracking-wider"
                  >
                    Decision
                  </h3>
                </div>
                <p class="text-white leading-relaxed">
                  <span class="font-semibold">No changes now.</span> Will
                  accumulate data for
                  <span class="font-semibold">30 more days</span>, then decide.
                </p>
              </div>

              <!-- Links Section -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://analytics.google.com/analytics/web/#/a371793885p509193276/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..selmet%3D%5B%22screenPageViews%22%5D%26_r.explorerCard..seldim%3D%5B%22unifiedScreenClass%22%5D&collectionId=12327227489&r=12327132216"
                  class="link-hover flex-1 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl px-6 py-4 font-semibold text-center hover:bg-indigo-50 shadow-sm"
                >
                  <span class="flex items-center justify-center gap-2">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Link to GA4 Dashboard
                  </span>
                </a>
                <a
                  href="https://clarity.microsoft.com/shared/heatmap/d5b2c646-bb4b-4708-9df9-baadce64ce77?heatmapType=10&heatmapDeviceType=2&elementToShow=&areaMap=1"
                  class="link-hover flex-1 bg-indigo-600 text-white rounded-xl px-6 py-4 font-semibold text-center hover:bg-indigo-700 shadow-sm"
                >
                  <span class="flex items-center justify-center gap-2">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Link to Clarity
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process w-full py-20 flex flex-col items-center">
      <div class="container">
        <div class="max-w-4xl w-full mx-auto">
          <div
            class="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden"
          >
            <!-- Header -->
            <div
              class="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-bold text-white mb-1">
                    Daily Insight Report
                  </h2>
                  <p class="text-indigo-100 text-sm font-medium">
                    Date: January 28, 2026
                  </p>
                </div>
                <div
                  class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span class="text-white text-sm font-semibold">Active</span>
                </div>
              </div>
            </div>

            <div class="p-8">
              <!-- Observation -->
              <div
                class="card-section mb-6 bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-neutral-800 uppercase tracking-wider"
                  >
                    Observation (Clarity)
                  </h3>
                </div>
                <ul class="text-neutral-700 leading-relaxed space-y-2">
                  <li>• Case-study page scroll depth: <b>60%</b> (good)</li>
                  <li>• <b>40% drop-off</b> after first section</li>
                  <li>
                    • Users stay longer on <b>data sections</b> and skip
                    <b>visual-heavy sections</b>
                  </li>
                  <li>• Navigation jumps indicate <b>lack of clear flow</b></li>
                </ul>
              </div>

              <!-- Hypothesis -->
              <div
                class="card-section mb-6 bg-neutral-50 rounded-xl p-6 border-l-4 border-neutral-800"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-neutral-800 uppercase tracking-wider"
                  >
                    Hypothesis
                  </h3>
                </div>
                <ul class="text-neutral-700 leading-relaxed space-y-2">
                  <li>• Visual overload increases cognitive load</li>
                  <li>• Missing navigation = users feel lost</li>
                  <li>• No strategy summary = lower trust</li>
                </ul>
              </div>

              <!-- Action -->
              <div
                class="card-section mb-6 bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-neutral-800 uppercase tracking-wider"
                  >
                    Action
                  </h3>
                </div>
                <ul class="text-neutral-700 leading-relaxed space-y-2">
                  <li>• Removed 60% of visuals</li>
                  <li>• Added a <b>data-first summary</b> at the top</li>
                  <li>• Added a <b>sticky Table of Contents</b></li>
                  <li>• Reduced page height by 40%</li>
                </ul>
              </div>

              <!-- Result -->
              <div
                class="card-section mb-6 bg-neutral-50 rounded-xl p-6 border-l-4 border-neutral-800"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-neutral-800 uppercase tracking-wider"
                  >
                    Result (7 Days)
                  </h3>
                </div>
                <ul class="text-neutral-700 leading-relaxed space-y-2">
                  <li>• Scroll depth: <b>60% → 75%</b></li>
                  <li>• Time on page: +32 seconds</li>
                  <li>• Conversions: 0 (normal — trust cycle is slow)</li>
                </ul>
              </div>

              <!-- Lesson -->
              <div
                class="card-section mb-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-6 shadow-lg"
              >
                <div class="flex items-center gap-2 mb-3">
                  <div
                    class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-sm font-bold text-white uppercase tracking-wider"
                  >
                    Lesson
                  </h3>
                </div>
                <ul class="text-white leading-relaxed space-y-2">
                  <li>• Data > Decoration</li>
                  <li>• Navigation > No Navigation</li>
                  <li>• Trust builds gradually, not instantly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Maincta
      cta-title="Want to collaborate on your next big idea?"
      cta-button-text="Let's Talk"
      cta-icon-name="clarity:email-solid"
      ctaButtonLink="/contact"
      data-aos="fade-in"
      data-aos-easing="ease-in-out"
      data-aos-duration="600"
    />
    <AppFooter />
  </div>
</template>
<script setup>
useHead({
  title: "About Me – Strategic Product Designer | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "I’m a product designer focused on solving complex problems in B2B SaaS and Fintech. I think like a product partner, not just a UI decorator.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  meta: [
    { property: "og:title", content: "About Me – Strategic Product Designer" },
    {
      property: "og:description",
      content:
        "I turn complexity into clarity using research, strategy, and intentional design. Let’s solve real product challenges together.",
    },
    { property: "og:image", content: "https://mamdouh.com/og-about.jpg" },
    { property: "og:url", content: "https://mamdouh.com/about" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
definePageMeta({
  layout: "default",
});
</script>
<style scoped>
.hero {
  height: 60vh;
  background-image: url("~/assets/images/decision-bg.png");
  background-color: #000;
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
}
.card-section {
  transition: all 0.3s ease;
}

.card-section:hover {
  transform: translateX(4px);
}

.link-hover {
  transition: all 0.2s ease;
}

.link-hover:hover {
  transform: translateY(-2px);
}
</style>
