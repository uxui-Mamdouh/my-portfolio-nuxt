<template>
  <div>
    <AppHeader />
    <div class="hero">
      <!-- Navbar Container -->

      <div
        class="container h-full mx-auto flex justify-end items-end md:items-center"
      >
        <div class="pb-44 md:pb-0">
          <div class="grid grid-cols-1 md:grid-cols-3 justify-end">
            <div class="col-span-1"></div>
            <div
              class="col-span-2 inline-flex flex-col justify-start items-start gap-10"
            >
              <div
                class="self-stretch flex flex-col justify-start items-start gap-8"
              >
                <div class="inline-flex justify-start items-center gap-2.5">
                  <Icon
                    name="solar:box-minimalistic-bold"
                    class="text-2xl text-indigo-300"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="50"
                    data-aos-duration="500"
                  />
                  <span
                    class="text-center justify-start text-indigo-300 text-base font-normal"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    data-aos-duration="500"
                  >
                    Hello , I’m Mamdouh
                  </span>
                </div>
                <h1
                  class="self-stretch justify-start text-neutral-300 text-2xl md:text-4xl font-bold"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="150"
                  data-aos-duration="500"
                >
                  Product Designer who turns complex digital products into
                  intuitive experiences.
                </h1>
                <p
                  class="self-stretch justify-start text-neutral-300 text-md md:text-xl font-medium"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  I solve real user and business problems through research,
                  strategy, and intentional design — for teams that need impact,
                  not just pixels.
                </p>
              </div>
              <div
                class="w-full flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-8 px-12 sm:px-0"
              >
                <AnimatedButtonSec
                  class="w-full sm:w-fit"
                  icon-name="solar:lightbulb-bolt-bold-duotone"
                  text-main="See How I Think"
                  text-sec="Right Now"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="250"
                  data-aos-duration="500"
                  to="/about"
                  @click="trackClick('See How I Think')"
                />
                <AnimatedButton
                  class="w-full sm:w-fit"
                  to="/contact"
                  icon-name="fa6-solid:handshake"
                  text-main="Hire Me for Your Team"
                  text-sec="Right Now"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  @click="trackClick('Hire Me for Your Team')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-marquee flex justify-center items-center">
      <InfiniteBoxes />
    </div>
    <div class="works py-16">
      <div class="container flex flex-col gap-10">
        <SectionHead
          title="Solving Complexity Across Domains"
          sub-title="Selected Work"
          data-aos="fade-up"
        />
        <div class="flex flex-col gap-8">
          <div>
            <CaseCard
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              sub-title="Case Study"
              title="AEO SaaS"
              description="Most marketers optimize for Google, but have zero visibility inside AI  answers like ChatGPT. They guess blindly, waste hours checking manually, and can’t prove ROI to clients — while competitors get cited and they  don’t even know."
              :img="imgAEO"
              href="/projects/aeo-saas"
              :tags="[
                { icon: 'solar:user-bold', label: 'User-Centered Design' },
                { icon: 'solar:folder-open-bold', label: 'Research' },
                { icon: 'solar:signpost-2-bold', label: 'User Flow' },
              ]"
            />
          </div>
          <div>
            <CaseCard
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              sub-title="Case Study"
              title="Strategic Portfolio"
              description="Designing a High-Impact Portfolio Website for a Product Designer targeting B2B SaaS, Fintech, and startups."
              :img="imgPortfolio"
              href="/projects/strategic-portfolio"
              :tags="[
                { icon: 'solar:user-bold', label: 'User-Centered Design' },
                { icon: 'solar:layers-bold', label: 'Portfolio as a Product' },
                { icon: 'solar:target-bold', label: 'Strategic Positioning' },
              ]"
            />
          </div>
          <div>
            <CaseCard
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              sub-title="Case Study"
              title="Doctor Booking App"
              description="Most clinics run by queue order, not fixed appointments. Patients wait for hours, trust ratings feel fake, and families struggle booking for multiple members."
              :img="imgDoctor"
              href="/projects/doctor-booking-app"
              :tags="[
                { icon: 'solar:user-bold', label: 'User-Centered Design' },
                { icon: 'solar:folder-open-bold', label: 'Research' },
                { icon: 'solar:signpost-2-bold', label: 'User Flow' },
              ]"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="pgolisphy">
      <section class="py-24">
        <div class="container">
          <div class="flex flex-col gap-8 md:gap-16 mx-auto">
            <!-- Header -->
            <div
              class="flex flex-col md:flex-row gap-6 md:gap-0 justify-center items-center md:justify-between md:items-start"
            >
              <div
                class="w-72 pt-12 flex flex-col gap-4"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
              >
                <p class="text-indigo-600 text-sm font-normal leading-tight">
                  My Design Process
                </p>
                <h2 class="text-neutral-800 text-3xl font-bold leading-10">
                  Consistent, No Matter the Domain
                </h2>
              </div>
              <div class="flex flex-col md:flex-row gap-8 md:gap-16">
                <CardStep
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-easing="ease-in-out"
                  icon="material-symbols:problem"
                  number="01"
                  title="Start with the problem — not the screen."
                  description="“I don’t open Figma first — I ask: What are we really solving? Understanding the core problem ensures every pixel has a purpose.”"
                />
                <!-- Step 2 -->
                <CardStep
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="50"
                  icon="solar:user-id-bold"
                  number="02"
                  title="Research user behavior and business context."
                  description="“I talk to users, review feedback, and align with stakeholders. Great design sits at the intersection of user needs and business goals.”"
                />
              </div>
            </div>

            <!-- Steps Row 2 -->
            <div
              class="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-8 md:gap-16"
            >
              <!-- Step 3 -->
              <CardStep
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                icon="solar:pip-2-bold"
                number="03"
                title="Simplify complexity with intentional design."
                description="“Complexity is inevitable — confusion isn’t. I use clear structure, progressive disclosure, and smart UI patterns to make the complex feel simple.”"
              />
              <!-- Step 4 -->
              <CardStep
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-delay="150"
                icon="solar:monitor-smartphone-bold"
                number="04"
                title="Deliver solutions that drive impact."
                description="“It’s not done when it looks good — it’s done when it works. I ship designs that reduce friction, boost adoption, and move the needle.”"
              />
            </div>

            <!-- Button -->
            <div class="flex justify-center">
              <AnimatedButtonSec
                icon-name="solar:arrow-right-outline"
                text-main="See My Design Philosophy"
                text-sec="Right Now"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                to="/about"
                @click="trackClick('See My Design Philosophy')"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="main-cta">
      <Maincta
        class="home-main-cta"
        cta-title="Looking for a designer who anticipates hiring needs? I'm your
            partner."
        cta-button-text="Hire Me for Your Team"
        cta-icon-name="clarity:email-solid"
        ctaButtonLink="/contact"
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
      />
    </div>
    <AppFooter />
  </div>
</template>
<script setup>
useHead({
  title: "Product Designer for SaaS & Fintech | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "Strategic product designer who turns complex digital products into intuitive experiences.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Product Designer for SaaS & Fintech | Mamdouh Ghaneemy",
    },
    {
      property: "og:description",
      content: "I solve real user and business problems...",
    },
    { property: "og:image", content: "https://mamdouh.com/og-home.jpg" },
    { property: "og:url", content: "https://mamdouh.com" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

import imgPortfolio from "/images/Product-Deesigner-case-study.png";
import imgDoctor from "/images/Doctor-Booking-App-Case-Study.png";
import imgAEO from "/images/aeo-saas-cover.png";
definePageMeta({
  layout: "default",
});
//  GTM
import { useGtm } from "@gtm-support/vue-gtm";
import { useRoute } from "#imports";

const gtm = useGtm();
const route = useRoute();

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
<style>
.hero {
  height: 100vh;
  background-image: url("~/assets/images/Home-hero-bg.png");
  background-color: #000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
@media (max-width: 767px) {
  .hero {
    height: 130vh;
    background-image: url("~/assets/images/home-hero-mobile-bg.png");
  }
}
.home-main-cta .title {
  max-width: 60%;
}
</style>
