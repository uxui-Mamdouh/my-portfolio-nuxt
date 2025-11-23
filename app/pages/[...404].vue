<script setup lang="ts">
const handleBack = () => {
  navigateTo("/");
};
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center bg-neutral-100 dark:bg-neutral-900 px-6"
  >
    <h1 class="text-8xl font-extrabold text-indigo-600 mb-4">404</h1>
    <p
      class="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2"
    >
      Oops! Page not found.
    </p>
    <p class="text-neutral-600 dark:text-neutral-400 mb-8">
      The page you’re looking for doesn’t exist or has been moved.
    </p>

    <AnimatedButton
      class="w-full sm:w-fit"
      to="/contact"
      icon-name="fa6-solid:handshake"
      text-main="Back to Home"
      text-sec="Back to Home"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
      data-aos-duration="500"
      @click="handleBack"
    />
  </section>
</template>
