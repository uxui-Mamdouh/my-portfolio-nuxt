<template>
  <div>
    <AppHeader />
    <div class="hero flex justify-center items-center">
      <div
        id="about"
        class="w-full max-w-5xl mx-auto py-24 px-6 flex flex-col items-center text-center gap-8"
        aria-labelledby="about-heading"
      >
        <!-- عنوان فرعي -->
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-2 text-neutral-200"
        >
          <MyIcon
            name="solar:hand-shake-bold"
            textClass="text-neutral-200"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="500"
          />
          <span
            class="text-md md:text-xl font-medium tracking-wide"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="500"
            >Let’s Build Strategic Products Together</span
          >
        </div>

        <!-- النص الرئيسي -->
        <h2
          id="about-heading"
          class="text-xl md:text-2xl md:text-4xl font-semibold text-neutral-100 leading-tight max-w-5xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          I’m available to join advanced teams in B2B SaaS, Fintech, and
          startups that value strategic design.
        </h2>

        <!-- فقرة وصفية إضافية (اختيارية) -->
        <p
          class="text-lg text-neutral-400 leading-relaxed max-w-2xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          With a background in UX research and interface design, I focus on
          crafting digital experiences that balance user needs with strategic
          business goals.
        </p>
      </div>
    </div>
    <section
      class="contact-info max-w-4xl mx-auto py-12 md:py-20 flex flex-col gap-8 items-center"
    >
      <div class="w-full flex flex-col gap-6">
        <!-- Contact item -->
        <a
          @click="trackClick('hello@mamdouh-ghaneemy.com')"
          href="mailto:hello@mamdouh-ghaneemy.com"
          class="group flex justify-between items-center border-b border-neutral-300 px-4 md:px-0 pb-4 text-sm md:text-2xl font-semibold text-neutral-800 hover:text-indigo-600 transition-colors"
        >
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            >hello@mamdouh-ghaneemy.com</span
          >
          <MyIcon
            name="solar:arrow-right-up-outline"
            textClass="text-neutral-800 group-hover:text-indigo-600 transition-colors"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          />
        </a>

        <!-- Behance -->
        <a
          @click="trackClick('behance.net/ghaneemy')"
          href="https://behance.net/ghaneemy"
          target="_blank"
          class="group flex justify-between items-center border-b border-neutral-300 px-4 md:px-0 pb-4 text-sm md:text-2xl font-semibold text-neutral-800 hover:text-indigo-600 transition-colors"
        >
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            >behance.net/ghaneemy</span
          >
          <MyIcon
            name="solar:arrow-right-up-outline"
            textClass="text-neutral-800 group-hover:text-indigo-600 transition-colors"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          />
        </a>

        <!-- LinkedIn -->
        <a
          @click="trackClick('linkedin.com/in/mamdouh-ghaneemy')"
          href="https://linkedin.com/in/mamdouh-ghaneemy"
          target="_blank"
          class="group flex justify-between items-center border-b border-neutral-300 px-4 md:px-0 pb-4 text-sm md:text-2xl font-semibold text-neutral-800 hover:text-indigo-600 transition-colors"
        >
          <span
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            >linkedin.com/in/mamdouh-ghaneemy</span
          >
          <MyIcon
            name="solar:arrow-right-up-outline"
            textClass="text-neutral-800 group-hover:text-indigo-600 transition-colors"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          />
        </a>
      </div>
    </section>
    <div class="final-cta py-12 md:py-30">
      <div class="container small">
        <div class="flex flex-col gap-8 justify-center items-center">
          <h2
            class="text-lg md:text-xl text-center text-indigo-600"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          >
            Looking for a designer who anticipates hiring needs? I'm your
            partner.
          </h2>
          <div
            class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-11"
          >
            <AnimatedButtonSec
              icon-name="mdi:file-download"
              text-main="Download CV (PDF)"
              text-sec="Right Now"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="100"
              to="https://drive.google.com/file/d/1CLVBROxR-jIbHXpHlni5V7Ar_sHNv4QV/view?usp=drive_link"
              target="_blank"
              @click="trackClick('Download CV (PDF)')"
            />
            <AnimatedButton
              to="mailto:hello@mamdouh-ghaneemy.com"
              target="_blank"
              icon-name="clarity:email-solid"
              text-main="Send Me a Message"
              text-sec="Right Now"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              @click="trackClick('hello@mamdouh-ghaneemy.com')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="contact-footer">
      <div class="container">
        <div class="pt-12 pb-8 flex flex-col items-center gap-6">
          <div class="container">
            <div class="flex flex-col items-center gap-6">
              <hr class="w-full border-neutral-700" />
              <p class="text-neutral-700 text-sm text-center">
                © 2025 | Design that works — for users, for business, in any
                domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Contact Me – Hire a Product Designer | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "Looking for a strategic product designer for your SaaS or fintech product? Get in touch for collaborations in Egypt and globally.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  meta: [
    { property: "og:title", content: "Contact Me – Hire a Product Designer" },
    {
      property: "og:description",
      content:
        "Let’s solve complex product challenges together. Available for freelance, contract, or full-time roles.",
    },
    { property: "og:image", content: "https://mamdouh.com/og-contact.jpg" },
    { property: "og:url", content: "https://mamdouh.com/contact" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
const trackClick = (label) => {
  gtm?.trackEvent({
    event: "button_click",
    category: "interaction",
    action: "click",
    label, // البراميتر اللي هتبعتُه وقت الاستدعاء
    value: route.path, // الصفحة الحالية
  });
};
</script>
<style scoped>
.hero {
  height: 100vh;
  background-image: url("/images/Contact-hero-bg.png");
  background-color: #000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
