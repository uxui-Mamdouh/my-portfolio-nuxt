<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)] relative">
    
    <!-- === BACKDROP === -->
    <div 
      class="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-[50] transition-opacity duration-400 ease-out"
      :class="isSheetOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeSheet"
    ></div>

<!-- === HERO === -->
<HeroSection
  badge-text="Portfolio"
  :show-badge-dot="false"
  :title-lines="[
    `Design <span class='text-[color:var(--accent-text)]'>partner</span>`,
    `for <span class='text-[color:var(--accent-text)]'>founders</span>`,
    `who need <span class='text-[color:var(--accent-text)]'>clarity.</span>`
  ]"
  desc1="I turn complex fintech & SaaS products into investor-ready experiences — fast."
  desc2="12+ years of UX/UI expertise • $500k+ in funded projects • 4-week delivery"
  :is-desc2-bold="true"
  :buttons="heroButtons"
  :bg-light-desktop="imgLightDesktop"
  :bg-dark-desktop="imgDarkDesktop"
  :bg-light-mobile="imgLightMobile"
  :bg-dark-mobile="imgDarkMobile"
>
  <template #nav>
    <NavBar :is-sheet-open="isSheetOpen" @toggle-drawer="toggleSheet" @close-drawer="closeSheet" />
  </template>
</HeroSection>

    <!-- === INTERACTIVE INDEX (FLOATING IMAGE STYLE) === -->
    <section id="case-studies" class="relative w-full py-24 bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)] z-10" ref="archiveSection">
      
      <div class="container mx-auto px-4 md:px-[120px]">
  
  <!-- Header -->
  <div class="flex flex-col gap-4 mb-16" data-aos="fade-up">
    <span class="text-[color:var(--accent-text)] font-semibold tracking-wider uppercase text-sm">Case Studies</span>
    <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em]">
      Every project has a number attached.
    </h2>
    <p class="text-lg text-[color:var(--ink-soft)] max-w-2xl">
      Not a screenshot gallery. Every case study shows the brief, the method, and the metric that moved.
    </p>
  </div>

  <!-- ═══════════════════════════════════════════════════════
       THE EDITORIAL LIST — بدل الجدول الكلاسيكي
       ═══════════════════════════════════════════════════════ -->
  <div 
    class="w-full border-t border-[color:var(--card-border)] relative"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Loading State -->
    <div v-if="pending" class="py-20 text-center text-[color:var(--ink-soft)] flex flex-col items-center gap-4">
      <Icon name="lucide:loader-2" class="w-8 h-8 animate-spin text-[color:var(--accent-1)]" />
      <p>Loading case studies…</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="py-20 text-center text-red-500">
      <p>Couldn't load the archive. Refresh the page?</p>
    </div>

    <!-- Empty State -->
    <div v-else-if="!projects || projects.length === 0" class="py-20 text-center text-[color:var(--ink-soft)]">
      <p>No case studies to show right now. Check back soon.</p>
    </div>

    <!-- ═══════════════════════════════════════════════════════
         EDITORIAL ROWS — كل صف = غلاف مجلة مصغّر
         ═══════════════════════════════════════════════════════ -->
    <template v-else>
      <NuxtLink 
        v-for="(project, index) in projects" 
        :key="project.slug"
        :to="project.component_path"
        class="group relative block border-b border-[color:var(--card-border)] 
               transition-[padding,background-color] duration-500 ease-out
               hover:pl-6 hover:bg-[color:var(--input-bg)]/30
               z-20"
        @mouseenter="setActiveProject(project)"
      >
        <!-- ═══ Left Accent Border — ينزلق من الأعلى للأسفل ═══ -->
        <span
          class="absolute left-0 top-0 bottom-0 w-[2px]
                 bg-gradient-to-b from-[color:var(--accent-1)] to-[color:var(--accent-2)]
                 scale-y-0 origin-top
                 transition-transform duration-500 ease-out
                 group-hover:scale-y-100"
          aria-hidden="true"
        ></span>

        <!-- ═══════════════════════════════════════════════
             DESKTOP ROW — Editorial Two-Line Layout
             ═══════════════════════════════════════════════ -->
        <div class="hidden md:flex items-end justify-between gap-12 py-10">
          
          <!-- ═══ LEFT: Number + Title + Meta ═══ -->
          <div class="flex-1 min-w-0">
            
            <!-- Row number + Featured badge -->
            <div class="flex items-center gap-3 mb-3">
              <span class="font-mono text-[11px] font-bold tracking-[0.2em] text-[color:var(--accent-text)] opacity-70">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              
              <span 
                v-if="project.is_featured" 
                class="px-2 py-0.5 bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] 
                       text-[9px] font-bold uppercase tracking-widest rounded 
                       border border-[color:var(--accent-1)]/20"
              >
                Featured
              </span>
            </div>

            <!-- Title — سطر واحد الآن بفضل المساحة الواسعة -->
            <h3 
              class="text-[26px] lg:text-[34px] font-bold text-[color:var(--ink)] 
                     tracking-[-0.02em] leading-[1.15]
                     group-hover:text-[color:var(--accent-text)] 
                     transition-colors duration-300"
            >
              {{ project.title }}
            </h3>

            <!-- Meta line — Industry · Role -->
            <p class="flex items-center gap-2 mt-3 text-sm text-[color:var(--ink-soft)]">
              <span>{{ project.category }}</span>
              <span class="inline-block w-1 h-1 rounded-full bg-[color:var(--ink-soft)]/40" aria-hidden="true"></span>
              <span class="opacity-80">{{ project.role || 'Product Designer' }}</span>
            </p>
          </div>

          <!-- ═══ RIGHT: Year + Arrow ═══ -->
          <div class="flex items-center gap-6 shrink-0 pb-1">
            <span 
              class="font-mono text-xs tracking-[0.15em] text-[color:var(--ink-soft)] 
                     group-hover:text-[color:var(--accent-text)] 
                     transition-colors duration-300"
            >
              {{ getYear(project.created_at) }}
            </span>
            
            <Icon
              name="lucide:arrow-up-right"
              class="w-5 h-5 text-[color:var(--accent-1)] 
                     opacity-0 -translate-x-2 translate-y-2
                     group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                     transition-[opacity,transform] duration-500 ease-out"
            />
          </div>
        </div>

        <!-- ═══════════════════════════════════════════════
             MOBILE ROW
             ═══════════════════════════════════════════════ -->
        <div class="md:hidden flex flex-col gap-3 py-6 px-2">
          <!-- Number + Featured -->
          <div class="flex items-center gap-3">
            <span class="font-mono text-[10px] font-bold tracking-[0.2em] text-[color:var(--accent-text)] opacity-70">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span 
              v-if="project.is_featured" 
              class="px-2 py-0.5 bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] 
                     text-[9px] font-bold uppercase tracking-widest rounded 
                     border border-[color:var(--accent-1)]/20"
            >
              Featured
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-bold text-[color:var(--ink)] group-hover:text-[color:var(--accent-text)] transition-colors leading-snug">
            {{ project.title }}
          </h3>

          <!-- Meta -->
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-2 text-[color:var(--ink-soft)]">
              <span>{{ project.category }}</span>
              <span class="inline-block w-1 h-1 rounded-full bg-[color:var(--ink-soft)]/40"></span>
              <span class="opacity-80">{{ project.role || 'Product Designer' }}</span>
            </div>
            <span class="font-mono text-xs tracking-wider text-[color:var(--ink-soft)] shrink-0">
              {{ getYear(project.created_at) }}
            </span>
          </div>
        </div>
      </NuxtLink>
    </template>
  </div>
</div>
    </section>

    <!-- === CLOSING CTA (جديد) === -->
    <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)] text-center" data-aos="fade-up">
      <div class="container mx-auto max-w-3xl">
        <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight mb-6">
          Want your project<br class="hidden md:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]">added to this list?</span>
        </h2>
        <p class="text-lg text-[color:var(--ink-soft)] mb-10 max-w-xl mx-auto leading-relaxed">
          First call: 30 minutes, free, honest. You'll leave with at least one actionable insight — whether we work together or not.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppButton to="/contact" variant="primary" size="lg" rounded="xl" icon-right="ArrowRight">
            Book a Free Audit Call
          </AppButton>
          <AppButton to="/projects/qompyl-case-study" variant="glass" size="lg" rounded="xl">
            Start with the Qompyl Case Study
          </AppButton>
        </div>
        <p class="text-xs font-medium text-[color:var(--ink-soft)] opacity-70 mt-6">
          Reply within 24 hours. Usually sooner.
        </p>
      </div>
    </section>

    <!-- === THE FLOATING CURSOR IMAGE === -->
    <Teleport to="body" v-if="mounted && projects && projects.length > 0">
      <div 
        class="pointer-events-none fixed z-[100] w-[350px] h-[250px] overflow-hidden rounded-[24px] shadow-2xl transition-opacity duration-300 ease-out hidden md:block"
        :class="isHoveringRow ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        :style="{
          left: `${currentX}px`,
          top: `${currentY}px`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`
        }"
      >
        <div 
          v-for="project in projects" 
          :key="'img-'+project.slug"
          class="absolute inset-0 w-full h-full transition-opacity duration-500"
          :class="activeProjectSlug === project.slug ? 'opacity-100 z-10' : 'opacity-0 z-0'"
        >
          <img 
            :src="project.thumbnail_url" 
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAsyncData } from '#imports'
import { useSupabase } from '~/composables/utils/supabase'

import imgLightDesktop from '~/assets/images/projects-hero.png'
import imgDarkDesktop from '~/assets/images/projects-hero-dark.png'
import imgLightMobile from '~/assets/images/projects-hero-mobile.png'
import imgDarkMobile from '~/assets/images/projects-hero-dark-mobile.png'

usePageMeta({
  title: 'Case Studies — Fintech & SaaS Projects | Mamdouh Ghaneemy',
  description: 'Fintech & SaaS case studies with measurable outcomes. From Pre-Series A launches to beta dashboards — every project shows the brief, the method, and the metric that moved.',
  keywords: [
    'fintech case study',
    'SaaS design portfolio',
    'product design case studies',
    'fintech UX portfolio',
    'Qompyl case study',
    'investor-ready website',
  ],
  ogType: 'website',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
  ],
})

const heroButtons = [
  { label: 'Book a Free Audit Call', to: '/contact', variant: 'primary', iconRight: 'ArrowRight' },
  { label: 'See the Case Studies', to: '#case-studies', variant: 'secondary' }
]

// ==========================================
// 🚀 FETCH DATA FROM SUPABASE
// ==========================================
const supabase = useSupabase()

const { data: projects, pending, error } =  useAsyncData('archive-projects', async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true })

  if (error) {
    console.error('Error fetching archive projects:', error)
    throw error
  }
  
  return data
})

const getYear = (dateString) => {
  if (!dateString) return '2026'
  return new Date(dateString).getFullYear()
}

// ==========================================
// FLOATING IMAGE LOGIC (Awwwards Style)
// ==========================================
const mounted = ref(false)
const isHoveringRow = ref(false)
const activeProjectSlug = ref(null)

const targetX = ref(0)
const targetY = ref(0)
const currentX = ref(0)
const currentY = ref(0)
const rotation = ref(0)

let animationFrameId = null
let lastX = 0

const handleMouseMove = (e) => {
  targetX.value = e.clientX
  targetY.value = e.clientY
  
  if (!isHoveringRow.value) {
    currentX.value = e.clientX
    currentY.value = e.clientY
    lastX = e.clientX
    isHoveringRow.value = true
  }
}

const handleMouseLeave = () => {
  isHoveringRow.value = false
  activeProjectSlug.value = null
}

const setActiveProject = (project) => {
  activeProjectSlug.value = project.slug
  isHoveringRow.value = true
}

const lerp = (start, end, factor) => {
  return start + (end - start) * factor
}

const animateImage = () => {
  if (isHoveringRow.value) {
    currentX.value = lerp(currentX.value, targetX.value, 0.1)
    currentY.value = lerp(currentY.value, targetY.value, 0.1)

    const speedX = targetX.value - lastX
    const targetRotation = speedX * 0.1 
    
    const clampedRotation = Math.max(-15, Math.min(15, targetRotation))
    rotation.value = lerp(rotation.value, clampedRotation, 0.1)

    lastX = targetX.value
  }

  animationFrameId = requestAnimationFrame(animateImage)
}

// ==========================================
// MOBILE DRAWER LOGIC
// ==========================================
const isSheetOpen = ref(false)

const toggleSheet = () => {
  isSheetOpen.value = !isSheetOpen.value
  if (process.client) {
    if (isSheetOpen.value) {
      document.body.classList.add('drawer-open')
    } else {
      document.body.classList.remove('drawer-open')
    }
  }
}

const closeSheet = () => {
  if (isSheetOpen.value) toggleSheet()
}

const handleResize = () => {
  if (process.client && window.innerWidth > 768 && isSheetOpen.value) {
    closeSheet()
  }
}

onMounted(() => {
  mounted.value = true
  window.addEventListener('resize', handleResize)
  animationFrameId = requestAnimationFrame(animateImage)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
:deep(body.drawer-open) {
  overflow: hidden;
}
html {
  scroll-behavior: smooth;
}
.hero {
  height: 100vh;
  background-color: var(--page-bg-1);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
@media (max-width: 767px) {
  .hero {
    height: 130vh;
  }
}
</style>