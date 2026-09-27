<template>
  <div class="page-wrapper">
   <!-- === BACKDROP === -->
<MobileBackdrop :is-open="isSheetOpen" @close="closeSheet" />
    <!-- === HERO === -->
    <div class="relative w-full min-h-[50vh] flex flex-col px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-b border-[color:var(--card-border)] overflow-hidden">
      
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[color:var(--accent-1)]/10 to-transparent blur-[100px] pointer-events-none"></div>

      <NavBar 
        :is-sheet-open="isSheetOpen" 
        @toggle-drawer="toggleSheet" 
        @close-drawer="closeSheet" 
      />

      <div class="flex-1 flex justify-center items-center relative z-10 pt-10 pb-20">
        <div class="text-center flex flex-col items-center gap-4 animate-[rise_.7s_cubic-bezier(.19,1,.22,1)_both] max-w-2xl">
          
          <div class="w-12 h-12 rounded-2xl bg-[color:var(--card-bg)] border border-[color:var(--card-border)] shadow-sm flex items-center justify-center text-[color:var(--ink-soft)] mb-2">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <path d="M2 15h10"></path>
              <path d="m9 18 3-3-3-3"></path>
            </svg>
          </div>

          <h1 class="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-0.02em] text-[color:var(--ink)]">
            Design Logs
          </h1>
          <p class="text-[color:var(--ink-soft)] text-lg max-w-lg leading-relaxed">
            Where decisions get receipts. Every design choice — the data behind it, the hypothesis, and what actually shipped.
          </p>
          <div class="flex flex-wrap justify-center items-center gap-3 mt-2 text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">
            <span class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#33cc95]"></span>
              Updated monthly
            </span>
            <span class="hidden md:block w-1 h-1 rounded-full bg-[color:var(--card-border)]"></span>
            <span>{{ logs.length }} logs published</span>
          </div>
        </div>
      </div>
    </div>

    <!-- === INTRO / WHO THIS IS FOR === -->
    <section class="w-full pt-16 pb-4 flex flex-col items-center px-4 md:px-[120px]">
      <div class="container max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-6 text-sm" data-aos="fade-up">
          <div class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
            <div class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wider mb-2">For founders</div>
            <p class="text-[color:var(--ink-soft)] leading-relaxed">
              See how I think before you hire me. Every log shows the reasoning — not just the final screens.
            </p>
          </div>
          <div class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
            <div class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wider mb-2">For designers</div>
            <p class="text-[color:var(--ink-soft)] leading-relaxed">
              Free playbook. Steal the method, skip the mistakes — the receipts are public on purpose.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- === PAGE CONTENT (The Logs) === -->
    <section class="w-full py-16 flex flex-col items-center px-4 md:px-[120px]">
      <div class="container max-w-4xl mx-auto flex flex-col gap-12">
        
        <!-- ================= LOG 1: The Redesign ================= -->
        <div class="bg-[color:var(--card-bg)] rounded-[24px] shadow-[0_4px_24px_rgba(20,20,40,0.04)] border border-[color:var(--card-border)] overflow-hidden transition-all duration-300 hover:shadow-lg" data-aos="fade-up">
          
          <div class="bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] px-6 md:px-8 py-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 class="text-xl md:text-2xl font-bold text-white mb-1">Log #1: Why I killed my old portfolio</h2>
                <p class="text-white/80 text-sm font-medium">September 11, 2026 · 4 min read</p>
              </div>
              <div class="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full shrink-0 w-fit">
                <span class="text-white text-xs font-bold uppercase tracking-wider">Shipped</span>
              </div>
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col gap-6">
            
            <!-- Data -->
            <div class="bg-[color:var(--input-bg)] rounded-2xl p-6 border-l-4 border-[color:var(--accent-1)]">
              <h3 class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-[0.1em] mb-2 flex items-center gap-2">
                <svg class="w-4 h-4 text-[color:var(--accent-1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                The data
              </h3>
              <p class="text-[color:var(--ink-soft)] leading-relaxed text-[15px]">
                My previous portfolio was functional — case studies, clear layout, decent conversion. But session recordings and scroll-depth data showed a pattern: visitors were reading it as <em>"another clean portfolio,"</em> not <strong class="text-[color:var(--ink)] font-semibold">"a strategic design partner."</strong> Bounce on the About page ran ~40% higher than Home.
              </p>
            </div>

            <!-- Analysis -->
            <div class="bg-[color:var(--input-bg)] rounded-2xl p-6 border-l-4 border-[color:var(--ink)]">
              <h3 class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-[0.1em] mb-2 flex items-center gap-2">
                <svg class="w-4 h-4 text-[color:var(--ink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                The analysis
              </h3>
              <p class="text-[color:var(--ink-soft)] leading-relaxed text-[15px]">
                Founders and VPs of Product don't buy "UI screens." They buy trust, maturity, and a premium feel. My old site communicated <em>"competent."</em> It didn't communicate <em>"investor-ready."</em> For a portfolio selling to fintech and B2B SaaS, <strong class="text-[color:var(--ink)] font-semibold">the container must match the value of the content inside it</strong>.
              </p>
            </div>

            <!-- Hypothesis -->
            <div class="bg-[color:var(--input-bg)] rounded-2xl p-6 border-l-4 border-[color:var(--accent-1)]">
              <h3 class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-[0.1em] mb-2 flex items-center gap-2">
                <svg class="w-4 h-4 text-[color:var(--accent-1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                The hypothesis
              </h3>
              <p class="text-[color:var(--ink-soft)] leading-relaxed text-[15px]">
                If I rebuilt the site with a premium aesthetic — depth, motion, glass — and shifted the copy from <em>"I'm a designer"</em> to <em>"Let's solve business problems,"</em> the perceived value of my work would rise. Higher-quality leads would follow.
              </p>
            </div>

            <!-- Decision -->
            <div class="bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] rounded-2xl p-6 shadow-md">
              <h3 class="text-xs font-bold text-white uppercase tracking-[0.1em] mb-2 flex items-center gap-2">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                The decision
              </h3>
              <p class="text-white/90 leading-relaxed text-[15px] mb-3">
                Complete rewrite of the portfolio on <strong class="text-white font-bold">Nuxt 3 + Tailwind</strong>.
              </p>
              <ul class="text-white/80 text-sm space-y-1 ml-4 list-disc">
                <li>Awwwards-inspired aesthetic — depth, motion, consistent tokens.</li>
                <li>Modular Vue architecture that cut my own dev time from 6 weeks to 3.</li>
                <li>Shifted from "Contact me" to a Book-a-Call experience with tracked form.</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- ================= LOG 2: Micro-Interactions ================= -->
        <div class="bg-[color:var(--card-bg)] rounded-[24px] shadow-[0_4px_24px_rgba(20,20,40,0.04)] border border-[color:var(--card-border)] overflow-hidden transition-all duration-300 hover:shadow-lg" data-aos="fade-up">
          
          <div class="bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] px-6 md:px-8 py-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 class="text-xl md:text-2xl font-bold text-white mb-1">Log #2: Engineering micro-interactions</h2>
                <p class="text-white/80 text-sm font-medium">September 4, 2026 · 3 min read</p>
              </div>
              <div class="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full shrink-0 w-fit">
                <span class="text-white text-xs font-bold uppercase tracking-wider">Active</span>
              </div>
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col gap-6">
            
            <!-- Observation -->
            <div class="bg-[color:var(--input-bg)] rounded-2xl p-6 border-l-4 border-[color:var(--accent-1)]">
              <h3 class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-[color:var(--accent-1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                The observation
              </h3>
              <p class="text-[color:var(--ink-soft)] leading-relaxed text-[15px]">
                Most portfolios treat buttons as flat rectangles. Users click them out of necessity — not confidence. In B2B SaaS, missing feedback (no hover state, no loading spinner, no success confirmation) reads as <em>"this product might be broken."</em> Friction kills form submissions.
              </p>
            </div>

            <!-- Action -->
            <div class="bg-[color:var(--input-bg)] rounded-2xl p-6 border-l-4 border-[color:var(--ink)]">
              <h3 class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-[color:var(--ink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Action taken
              </h3>
              <ul class="text-[color:var(--ink-soft)] leading-relaxed text-[15px] space-y-2">
                <li>• Built one <code class="bg-[color:var(--card-border)] px-1.5 py-0.5 rounded text-[13px]">AppButton.vue</code> component handling 5 states (default, hover, loading, disabled, success).</li>
                <li>• Wired the contact form with loading + success + error feedback — no backend framework, just Web3Forms and clean state.</li>
                <li>• Added group-hover micro-interactions (arrow slides on hover) across every primary CTA.</li>
              </ul>
            </div>

            <!-- Lesson -->
            <div class="bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] rounded-2xl p-6 shadow-md">
              <h3 class="text-xs font-bold text-white uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                The lesson
              </h3>
              <p class="text-white/90 leading-relaxed text-[15px] font-medium">
                Building a scalable design system forces you to think like a developer. When you design a button in Figma, you must also think about its <code class="bg-white/20 px-1.5 py-0.5 rounded text-[13px]">disabled</code>, <code class="bg-white/20 px-1.5 py-0.5 rounded text-[13px]">loading</code>, and <code class="bg-white/20 px-1.5 py-0.5 rounded text-[13px]">error</code> states in code. <strong class="text-white">Real UX lives in the implementation.</strong>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- === CTA SECTION === -->
    <section class="relative z-[4] text-center pb-20 md:pb-28 px-4 md:px-[120px]" data-aos="fade-up">
      <h2 class="font-serif text-[26px] md:text-[44px] leading-[1.25] text-[color:var(--ink)] max-w-[760px] mx-auto mb-6">
        Every decision above started with a receipt.<br class="hidden md:block" />
        <span class="font-bold">Want yours measured the same way?</span>
      </h2>
      <p class="text-base md:text-lg text-[color:var(--ink-soft)] mb-9 max-w-xl mx-auto">
        First call: 30 minutes, free, honest. You'll leave with one actionable insight — whether we work together or not.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <AppButton to="/contact" variant="primary" size="md" rounded="xl" icon-right="ArrowRight">
          Book a Free Audit Call
        </AppButton>
        <AppButton to="/projects" variant="glass" size="md" rounded="xl">
          See the Receipts in Case Studies
        </AppButton>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ✅ عدد الـ Logs — يمكن ربطها لاحقاً بـ Supabase إن أردت
const logs = ref([
  { id: 1, title: 'Why I killed my old portfolio', date: '2026-09-11' },
  { id: 2, title: 'Engineering micro-interactions', date: '2026-09-04' },
])

usePageMeta({
  title: 'Design Logs — Transparent Product Design Decisions | Mamdouh Ghaneemy',
  description: 'Where design decisions get receipts. Every design choice — the data behind it, the hypothesis, and what actually shipped. Written for founders and designers.',
  keywords: [
    'design decision log',
    'product design process',
    'design hypotheses',
    'design rationale',
    'design logs',
    'fintech design thinking',
  ],
  ogType: 'website',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Design Logs', url: '/decisions' },
  ],
})

// --- Drawer Logic ---
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
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
#__nuxt {
  width: 100% !important;
}
:deep(body.drawer-open) {
  overflow: hidden;
}
</style>