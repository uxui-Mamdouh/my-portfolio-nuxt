<script setup lang="ts">
// ✅ نُعرّف props مرة واحدة فقط داخل withDefaults
const props = withDefaults(
  defineProps<{
    ctaTitle?: string;
    ctaText?: string;
    ctaButtonText?: string;
    ctaButtonLink?: string;
    ctaIconName?: string;
  }>(),
  {
    ctaTitle: "Want to see how I apply this thinking in real projects?",
    ctaText: "Hire Me for Your Team",
    ctaButtonText: "Hire Me for Your Team",
    ctaButtonLink: "/contact",
    ctaIconName: "solar:lightbulb-bolt-bold-duotone",
  }
);
</script>

<template>
  <div class="bg-neutral-50 py-16">
    <!-- Call to Action -->
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div
          class="title flex flex-col gap-4 text-center md:text-left max-w-md"
        >
          <h2
            class="text-neutral-800 text-2xl sm:text-3xl font-bold leading-10"
          >
            {{ props.ctaTitle }}
          </h2>
        </div>

        <!-- <ButtonHoverEffect
          :to="props.ctaButtonLink"
          variant="primary"
          effect="blur"
          :icon-name="props.ctaIconName"
          icon-component="Icon"
          :text="props.ctaButtonText"
          border-color="indigo-50"
          text-color="indigo-50"
          icon-color="indigo-50"
          class="text-base sm:text-lg px-4 py-2"
        /> -->
        <AnimatedButton
          :to="props.ctaButtonLink"
          :icon-name="props.ctaIconName"
          :text-main="props.ctaButtonText"
          text-sec="Right Now"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
          data-aos-duration="500"
        />
      </div>
    </div>
  </div>
</template>
<style>
.title {
  max-width: 60%;
}
@media (max-width: 767px) {
  .title {
    max-width: 100% !important;
  }
}
</style>
