<template>
  <article
    class="group w-full max-w-[73rem] min-h-[41rem] relative bg-indigo-50 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-12 outline outline-1 outline-offset-[-0.5px] outline-neutral-700/10 transition-all duration-200 ease-in"
  >
    <!-- المحتوى -->
    <section class="relative z-10 flex flex-col justify-center gap-4 md:gap-8">
      <header
        class="flex flex-col gap-2 transition-all duration-200 ease-in group-hover:translate-x-1 group-hover:opacity-100"
        style="transition-delay: 80ms"
      >
        <p class="text-indigo-600 text-sm font-semibold">{{ subTitle }}</p>
        <h3 class="text-neutral-800 text-2xl md:text-4xl font-bold">
          {{ title }}
        </h3>
      </header>

      <p
        class="text-neutral-600 text-md md:text-xl leading-relaxed transition-all duration-200 ease-in group-hover:translate-x-2 group-hover:opacity-90"
        style="transition-delay: 160ms"
      >
        {{ description }}
      </p>

      <!-- التاجز -->
      <ul class="flex flex-wrap gap-3" style="transition-delay: 200ms">
        <li
          v-for="(t, i) in tags"
          :key="i"
          class="flex items-center gap-2 px-3 py-1.5 rounded-xl outline outline-1 outline-neutral-700/20"
        >
          <Icon
            :name="t.icon"
            class="w-4 h-4 transition-all duration-200 ease-in"
          />
          <span class="text-sm transition-all duration-200 ease-in">
            {{ t.label }}
          </span>
        </li>
      </ul>

      <AnimatedButton
        :to="href"
        icon-name="solar:eye-bold"
        text-main="View the Solution"
        text-sec="Right Now"
        @click="trackClick('View the Solution')"
      />
    </section>

    <nuxt-link :to="href" class="block">
      <figure
        class="relative z-10 w-full h-full flex items-center justify-center transition-all duration-200 ease-in group-hover:scale-105 group-hover:rotate-2"
        style="transition-delay: 120ms"
      >
        <nuxt-img
          :src="img"
          :alt="title"
          class="w-[21.5rem] object-cover shadow-[1.4rem_1.9rem_3.8rem_rgba(0,0,0,0.42)] rounded-2xl"
          format="webp"
          quality="80"
        />
      </figure>
    </nuxt-link>

    <!-- الخلفية الشبكية (mask) -->
    <div
      class="hidden md:block absolute z-0 grid-pattern group-hover:rotate-8 transition-all duration-200 ease-in"
    >
      <img src="/images/lines.png" alt="" />
      <nuxt-img
        src="/images/lines.png"
        :alt="title"
        class="w-[21.5rem] object-cover shadow-[1.4rem_1.9rem_3.8rem_rgba(0,0,0,0.42)] rounded-2xl"
        format="webp"
        quality="80"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
interface Tag {
  icon: string;
  label: string;
}
interface Props {
  title: string;
  subTitle?: string;
  description: string;
  tags: Tag[];
  img: string;
  href?: string;
}
withDefaults(defineProps<Props>(), { href: "#" });

//  GTM
import { useRoute } from "vue-router";

const route = useRoute();
import { useGtm } from "@gtm-support/vue-gtm";

const gtm = useGtm();
const trackClick = (label: string) => {
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
.grid-pattern {
  background-image: radial-gradient(circle, #333 0.5px, transparent 0.5px);
  background-size: 1.25rem 1.25rem;
  mask-image: linear-gradient(to bottom, white 60%, transparent);
}
</style>
