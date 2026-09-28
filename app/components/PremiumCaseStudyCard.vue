<template>
  <div class="w-full group" data-aos="fade-up">
    <!-- إزالة الـ Container من هنا لأننا سنضعه في الصفحة المجمعة لمرونة أكبر، أو نتركه.. الأفضل نتركه لتطابق التصميم السابق -->
    <div class="container mx-auto px-4 md:px-[120px]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Text Content -->
        <!-- إذا كان reverse صحيحاً، في الديسكتوب سيكون ترتيبه الثاني (order-2)، والموبايل دائماً النص أولاً (order-1) -->
        <div 
          class="lg:col-span-5 flex flex-col gap-8 order-1"
          :class="reverse ? 'lg:order-2 lg:pl-8' : 'lg:order-1'"
        >
          <!-- Number -->
          <div class="flex items-start gap-4 opacity-30 group-hover:opacity-100 group-hover:text-[color:var(--accent-text)] transition-[transform,box-shadow,background-color] duration-500">
            <span class="text-6xl font-black leading-none tracking-tighter">{{ number }}</span>
          </div>

          <!-- Title & Description -->
          <div class="flex flex-col gap-4">
            <h3 class="text-3xl lg:text-4xl font-extrabold text-[color:var(--ink)] tracking-tight">{{ title }}</h3>
            <p class="text-[color:var(--ink-soft)] leading-relaxed text-[16px]">
              {{ description }}
            </p>
          </div>
          
          <!-- Metric -->
          <div class="flex flex-col gap-1 w-fit border-l-2 border-[color:var(--accent-1)] pl-4">
            <span class="text-3xl font-black text-[color:var(--ink)]">{{ metricValue }}</span>
            <span class="text-[11px] uppercase font-bold tracking-[0.1em] text-[color:var(--ink-soft)]">{{ metricLabel }}</span>
          </div>

          <!-- Action Button -->
          <div class="mt-2">
            <AppButton :to="link" variant="secondary" size="md" rounded="full" icon-right="ArrowRight">
              {{cta}}
            </AppButton>
          </div>
        </div>

        <!-- Image Wrapper -->
        <!-- إذا كان reverse صحيحاً، سيكون ترتيبه الأول (order-1) في الديسكتوب، والثاني (order-2) في الموبايل -->
        <div 
          class="lg:col-span-7 order-2"
          :class="reverse ? 'lg:order-1 flex justify-start' : 'lg:order-2 flex justify-end'"
        >
          <NuxtLink :to="link" class="case-card w-full bg-[color:var(--card-bg)] p-4 md:p-6 rounded-[32px] border border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] shadow-sm hover:shadow-[0_20px_40px_rgba(109,94,240,0.1)] transition-[transform,box-shadow,background-color] duration-500 block">
            <div class="w-full aspect-[16/10] rounded-[24px] relative overflow-hidden bg-[color:var(--input-bg)]">
               <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" />
            </div>
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  metricValue: { type: String, required: true },
  metricLabel: { type: String, required: true },
  image: { type: String, required: true },
  cta: {type: String, required: true },
  link: { type: String, required: true },
  reverse: { type: Boolean, default: false } // هذه الخاصية ستعكس الاتجاه!
})
</script>