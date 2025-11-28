<template>
  <div>
    <AppHeader />
    <div class="hero flex justify-center items-center">
      <div
        id="work"
        class="w-full max-w-5xl mx-auto py-24 px-6 flex flex-col items-center text-center gap-6"
        aria-labelledby="work-heading"
      >
        <!-- العنوان الفرعي -->
        <div class="flex items-center justify-center gap-2 text-neutral-200">
          <MyIcon
            name="solar:folder-bold"
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
            >Selected Work</span
          >
        </div>

        <!-- العنوان الرئيسي -->
        <h2
          id="work-heading"
          class="text-3xl md:text-4xl font-semibold text-neutral-100 leading-tight max-w-5xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          Case studies focused on solving complex product challenges — from SaaS
          to fintech and e-commerce.
        </h2>

        <!-- فقرة وصفية (اختيارية لتحسين السيو) -->
        <p
          class="text-lg text-neutral-400 max-w-4xl leading-relaxed mt-2"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          Each project reflects a balance between user needs, technical
          feasibility, and business impact — showcasing my approach to
          end-to-end product design.
        </p>
      </div>
    </div>
    <div class="custom-marquee flex justify-center items-center">
      <InfiniteBoxes />
    </div>
    <div class="works py-16">
      <div class="container flex flex-col gap-10">
        <div class="flex flex-col gap-8">
          <div v-gsap.whenVisible.from="{ opacity: 0, x: -120 }">
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
          <div v-gsap.whenVisible.from="{ opacity: 0, x: -120 }">
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
          <div v-gsap.whenVisible.from="{ opacity: 0, x: -120 }">
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
    <AppFooter />
  </div>
</template>
<script setup>
useHead({
  title: "My Projects – Product Design Case Studies | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "Case studies in B2B SaaS, Fintech, and healthcare UX. See how I solve complex product challenges with strategic design.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  meta: [
    {
      property: "og:title",
      content: "My Projects – Product Design Case Studies",
    },
    {
      property: "og:description",
      content:
        "Real-world solutions for SaaS dashboards, doctor booking apps, and fintech platforms. Impact-focused, research-backed.",
    },
    { property: "og:image", content: "https://mamdouh.com/og-projects.jpg" },
    { property: "og:url", content: "https://mamdouh.com/projects" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
import imgPortfolio from "/images/Product-Deesigner-case-study.png";
import imgDoctor from "/images/Doctor-Booking-App-Case-Study.png";
import imgAEO from "/images/aeo-saas-cover.png";

definePageMeta({
  layout: "default",
});
</script>

<style scoped>
.hero {
  height: 90vh;
  background-image: url("~/assets/images/Projects-hero-bg.png");
  background-color: #000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
