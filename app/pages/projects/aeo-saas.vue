<template>
  <div class="main">
    <AppHeader />
    <header
      class="hero flex flex-col md:gap-40 justify-start md:justify-center items-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div
        class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
        aria-labelledby="about-heading"
      >
        <!-- Subtitle with Icon -->
        <div class="flex items-center gap-2 text-neutral-300">
          <MyIcon
            name="solar:folder-bold"
            textClass="text-neutral-300"
            aria-hidden="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="500"
          />
          <span
            class="text-neutral-300 text-base font-medium tracking-wide"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="500"
            >Case Study (Coming Soon)</span
          >
        </div>

        <!-- Main Heading -->
        <h1
          id="about-heading"
          class="text-3xl md:text-4xl font-semibold text-neutral-100 -tight max-w-3xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          AEO SaaS Tool
        </h1>

        <!-- Description -->
        <p
          class="text-lg sm:text-xl text-neutral-400 -relaxed max-w-2xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          Monitor & Optimize Your Brand's AI Answers
        </p>
        <dl
          class="flex flex-col gap-1"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <dt class="text-neutral-400 font-medium">
            A complete SaaS design project. 40+ screens. Research-driven. Not
            launched.
          </dt>
        </dl>
      </div>
    </header>

    <AppFooter />
  </div>
</template>
<script setup></script>
<style scoped>
.hero {
  height: 100vh;
  background-image: url("~/assets/images/decision-bg.png");
  background-color: #000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.flow-box {
  font-size: 10px;
}
@media (max-width: 767px) {
  .hero {
    background-image: url("~/assets/images/case-study-hero-mobile-bg.png");
  }
}
</style>
