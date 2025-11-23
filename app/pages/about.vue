<template>
  <div>
    <AppHeader />
    <div class="hero flex justify-center items-center">
      <div
        class="container h-full mx-auto flex justify-end items-end md:items-center"
      >
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="col-span-1"></div>
          <div class="col-span-2">
            <div
              id="about"
              class="w-full max-w-4xl mx-auto py-24 px-6 flex flex-col text-start gap-8"
              aria-labelledby="about-heading"
            >
              <!-- عنوان فرعي -->
              <div class="flex items-center gap-2 text-neutral-200">
                <MyIcon
                  name="solar:hand-shake-bold"
                  textClass="text-neutral-200"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="50"
                  data-aos-duration="500"
                />
                <span
                  class="text-base font-medium tracking-wide"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  >About Me</span
                >
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
                I’m a product designer who believes that great design solves
                real business problems — not just pleases the eye.
              </h1>

              <!-- فقرة وصفية إضافية (اختيارية) -->
              <p
                class="text-md md:text-lg text-neutral-400 leading-relaxed max-w-2xl"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay="250"
                data-aos-duration="500"
              >
                With a background in UX research and interface design, I focus
                on crafting digital experiences that balance user needs with
                strategic business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="about w-full max-w-5xl mx-auto py-20 px-6 flex flex-col items-center text-center"
      aria-labelledby="focus-heading"
    >
      <p
        class="text-2xl md:text-xl text-neutral-700 leading-relaxed max-w-3xl font-normal"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        I focus on turning complexity into clarity — whether it’s a
        <strong class="font-semibold text-neutral-900">B2B dashboard</strong>, a
        <strong class="font-semibold text-neutral-900">fintech app</strong>, or
        an
        <strong class="font-semibold text-neutral-900">e-commerce flow</strong>.
        My goal is to design products that work beautifully for
        <em>users</em> and drive measurable results for <em>business</em>.
      </p>
    </section>

    <section class="process w-full py-20 flex flex-col items-center">
      <div class="container">
        <h2
          class="text-3xl font-bold text-neutral-800 mb-14 text-center"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
        >
          My Process
        </h2>

        <div
          class="flex flex-col md:flex-row justify-center items-center gap-8 w-full"
        >
          <StepCard
            number="01"
            icon="solar:user-id-bold"
            title="Research"
            description="Understand user needs & business goals through interviews and analysis."
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />

          <div
            class="hidden md:block w-[1px] h-[250px] bg-neutral-300"
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
          ></div>

          <StepCard
            number="02"
            icon="streamline:strategy-tasks-solid"
            title="Strategy"
            description="Define the core problem, success metrics, and design principles."
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="600"
          />

          <div
            class="hidden md:block w-[1px] h-[250px] bg-neutral-300"
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
          ></div>

          <StepCard
            number="03"
            icon="ic:round-web-stories"
            title="Design"
            description="Build intuitive, scalable solutions with clear information architecture."
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="600"
          />

          <div
            class="hidden md:block w-[1px] h-[250px] bg-neutral-300"
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
          ></div>

          <StepCard
            number="04"
            icon="game-icons:stork-delivery"
            title="Handoff"
            description="Collaborate with developers using Figma, documentation, and feedback loops."
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="150"
            data-aos-duration="600"
          />
        </div>
      </div>
    </section>
    <section
      class="skills-tools w-full py-20 flex flex-col justify-center items-center gap-10"
    >
      <div class="w-full max-w-3xl flex flex-col items-center gap-14">
        <!-- العنوان -->
        <h2
          class="text-3xl font-bold text-neutral-800 text-center"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
        >
          Skills & Tools
        </h2>

        <!-- المهارات -->
        <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <!-- Skill item -->
          <div
            class="group flex items-center gap-2 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-50 transition-all hover:bg-indigo-100"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >
            <MyIcon
              name="solar:user-id-bold"
              textClass="text-indigo-600 group-hover:text-indigo-700 transition-colors"
            />
            <span class="text-sm font-medium">User Research</span>
          </div>

          <div
            class="group flex items-center gap-2 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-50 transition-all hover:bg-indigo-100"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
            data-aos-delay="50"
          >
            <MyIcon
              name="tabler:sitemap-filled"
              textClass="text-indigo-600 group-hover:text-indigo-700 transition-colors"
            />
            <span class="text-sm font-medium">Information Architecture</span>
          </div>

          <div
            class="group flex items-center gap-2 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-50 transition-all hover:bg-indigo-100"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <MyIcon
              name="material-symbols-light:interactive-space"
              textClass="text-indigo-600 group-hover:text-indigo-700 transition-colors"
            />
            <span class="text-sm font-medium">Interaction Design</span>
          </div>

          <div
            class="group flex items-center gap-2 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-50 transition-all hover:bg-indigo-100"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
            data-aos-delay="150"
          >
            <MyIcon
              name="solar:smartphone-rotate-orientation-bold"
              textClass="text-indigo-600 group-hover:text-indigo-700 transition-colors"
            />
            <span class="text-sm font-medium">Prototyping</span>
          </div>

          <div
            class="group flex items-center gap-2 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-50 transition-all hover:bg-indigo-100"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <MyIcon
              name="mingcute:ai-fill"
              textClass="text-indigo-600 group-hover:text-indigo-700 transition-colors"
            />
            <span class="text-sm font-medium">AI Tools (Uizard, ChatGPT)</span>
          </div>

          <div
            class="group flex items-center gap-2 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-50 transition-all hover:bg-indigo-100"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
            data-aos-delay="250"
          >
            <MyIcon
              name="solar:figma-bold"
              textClass="text-indigo-600 group-hover:text-indigo-700 transition-colors"
            />
            <span class="text-sm font-medium">Figma</span>
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
  height: 110vh;
  background-image: url("~/assets/images/About-hero-bg.png");
  background-color: #000;
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
}
@media (max-width: 767px) {
  .hero {
    height: 100vh;
    background-image: url("~/assets/images/about-hero-mobile-bg.png");
  }
}
</style>
