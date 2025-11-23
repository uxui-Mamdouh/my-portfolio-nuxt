<template>
  <article
    :class="[
      'group bg-neutral-100 rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 ease-in hover:scale-[1.04] hover:-translate-y-2 hover:shadow-lg',
      colsClass,
    ]"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <span
          class="text-indigo-600 text-xl font-semibold transition-all duration-300 ease-in group-hover:text-indigo-800 group-hover:translate-x-1"
          style="transition-delay: 70ms"
        >
          {{ number }}
        </span>
        <h3
          class="text-neutral-700 text-2xl font-bold transition-all duration-300 ease-in group-hover:translate-x-1 group-hover:text-indigo-700"
          style="transition-delay: 120ms"
        >
          {{ title }}
        </h3>
      </div>
      <p
        class="text-neutral-600 text-lg transition-all duration-300 ease-in group-hover:translate-x-2 group-hover:opacity-95"
        style="transition-delay: 170ms"
      >
        {{ description }}
      </p>
    </div>

    <!-- Images Section -->
    <div
      class="image transition-all duration-300 ease-in group-hover:scale-110 group-hover:rotate-3"
      style="transition-delay: 220ms"
    >
      <!-- الحالة 1: المستخدم مرر صورة واحدة -->

      <nuxt-img
        v-if="img && !imgDesk && !imgMobile"
        :src="img"
        :alt="imgAlt"
        class="w-full h-auto rounded-2xl object-cover"
        format="webp"
        quality="80"
      />
      <!-- الحالة 2: المستخدم مرر صور للديسكتوب والموبايل -->
      <template v-else-if="imgDesk && imgMobile">
        <nuxt-img
          :src="imgDesk"
          :alt="imgAlt"
          class="responsive desk hidden md:inline-block w-full h-auto rounded-2xl object-cover"
          format="webp"
          quality="80"
        />

        <nuxt-img
          class="responsive mobile inline-block md:hidden w-full h-auto rounded-2xl object-cover"
          :src="imgMobile"
          :alt="imgAlt"
          format="webp"
          quality="80"
        />
      </template>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  number: string | number;
  title: string;
  description: string;
  /** الصورة الافتراضية */
  img?: string;
  /** صور منفصلة للديسكتوب والموبايل */
  imgDesk?: string;
  imgMobile?: string;
  /** النص البديل */
  imgAlt?: string;
  /** كلاس الأعمدة */
  colsClass?: string;
}>();
</script>
