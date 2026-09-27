<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)]">
    <!-- === BACKDROP === -->
<MobileBackdrop :is-open="isSheetOpen" @close="closeSheet" />

<!-- ================= 1. HERO ================= -->
<HeroSection
  badge-text="ABOUT — MAMDOUH GHANEEMY"
  :show-badge-dot="true"
  :title-lines="[
    'Design that ships.',
    `<span class='text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]'>Data that proves it.</span>`
  ]"
  desc1="I'm Mamdouh Ghaneemy — a product designer who takes products from whiteboard to Webflow to measurable growth… and stays for the metrics."
  desc2=""
  :is-desc2-bold="false"
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

    <!-- Fact Strip -->
    <div class="w-full bg-[color:var(--input-bg)] border-y border-[color:var(--card-border)] py-4 relative z-10 overflow-hidden">
      <div class="container mx-auto px-4 md:px-[120px] flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs md:text-sm font-semibold text-[color:var(--ink-soft)] tracking-wider">
        <div class="flex items-center gap-2"><Icon name="lucide:globe" class="text-[color:var(--accent-1)] w-4 h-4" /> Based in Egypt, building globally</div>
        <div class="hidden md:block w-1 h-1 rounded-full bg-[color:var(--card-border)]"></div>
        <div class="flex items-center gap-2"><Icon name="lucide:layers" class="text-[color:var(--accent-1)] w-4 h-4" /> Strategy → Design → Build → Measure</div>
        <div class="hidden lg:block w-1 h-1 rounded-full bg-[color:var(--card-border)]"></div>
        <div class="flex items-center gap-2"><Icon name="lucide:shield-check" class="text-[color:var(--accent-1)] w-4 h-4" /> WCAG 2.2 AA by default</div>
      </div>
    </div>

    <!-- ================= 2. THE THREE HATS ================= -->
    <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-b border-[color:var(--card-border)]">
      <div class="container mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)] mb-4 block">TL;DR — Who You're Working With</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em]">Three hats. One owner.</h2>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          <!-- The Strategist -->
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:border-[color:var(--accent-1)] transition-colors group" data-aos="fade-up">
            <div class="w-12 h-12 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="lucide:brain-circuit" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-[color:var(--ink)] mb-3">The Strategist</h3>
            <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6">Personas, insights, and message hierarchy — so your page says the right thing to the right reader.</p>
            <div class="pt-6 border-t border-[color:var(--card-border)]">
              <div class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-2 flex items-center gap-2"><Icon name="lucide:arrow-right" class="w-4 h-4" /> The outcome</div>
              <p class="text-sm font-medium text-[color:var(--ink)]">Your page earns credibility in the first 45 seconds — because that's all you get.</p>
            </div>
          </div>

          <!-- The Builder -->
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:border-[color:var(--accent-1)] transition-colors group" data-aos="fade-up" data-aos-delay="50">
            <div class="w-12 h-12 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="lucide:code-2" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-[color:var(--ink)] mb-3">The Builder</h3>
            <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6">
              Pixel-perfect front-end builds in Webflow, WordPress, or Nuxt — with CMS architecture and WCAG 2.2 AA baked in.
            </p>
            <div class="pt-6 border-t border-[color:var(--card-border)]">
              <div class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-2 flex items-center gap-2"><Icon name="lucide:arrow-right" class="w-4 h-4" /> The outcome</div>
              <p class="text-sm font-medium text-[color:var(--ink)]">Your team ships new pages themselves — no developer on-call.</p>
            </div>
          </div>

          <!-- The Measurer -->
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:border-[color:var(--accent-1)] transition-colors group" data-aos="fade-up" data-aos-delay="100">
            <div class="w-12 h-12 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="lucide:bar-chart-4" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-[color:var(--ink)] mb-3">The Measurer</h3>
            <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6">GTM + GA4 + Microsoft Clarity wired before launch, reviewed after it.</p>
            <div class="pt-6 border-t border-[color:var(--card-border)]">
              <div class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-2 flex items-center gap-2"><Icon name="lucide:arrow-right" class="w-4 h-4" /> The outcome</div>
              <p class="text-sm font-medium text-[color:var(--ink)]">Design decisions start with recordings and real numbers — not opinions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 3. THE SHORT VERSION ================= -->
    <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)] overflow-hidden">
      <div class="container mx-auto">
        
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-12">
          
          <!-- Left: Title -->
          <div class="lg:col-span-5" data-aos="fade-up">
            <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)] mb-4 block">The Short Version</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight">
              I got tired of beautiful websites nobody could prove worked.
            </h2>
          </div>

          <!-- Right: Editorial Text -->
          <div class="lg:col-span-6 lg:col-start-7 space-y-6 text-[color:var(--ink-soft)] text-lg font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            <p>
              <strong class="text-[color:var(--ink)] font-bold">Most design stops at handoff.</strong> Beautiful frames, a tidy PDF — then silence. I wanted the other half: the part where you watch real people use what you made, catch them rage-clicking a dead link, and fix it before the week ends.
            </p>
            <p>
              So I learned to build. Then to measure. Then to write copy that carries the strategy instead of decorating it.
            </p>
            <p class="font-medium text-[color:var(--ink)] pt-4 border-t border-[color:var(--card-border)]">
              Today, I run projects end-to-end: strategy, design, build, analytics, iteration. One accountable voice. <span class="bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] px-2 py-0.5 rounded text-sm uppercase tracking-wider">Zero "that's not my department."</span>
            </p>
          </div>
        </div>

        <!-- Bento Highlight Boxes -->
        <div class="grid md:grid-cols-12 gap-6">
          
          <div class="md:col-span-5 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="150">
             <div class="w-10 h-10 rounded-full bg-[color:var(--input-bg)] flex items-center justify-center mb-6">
                <Icon name="lucide:layers" class="w-5 h-5 text-[color:var(--accent-1)]" />
              </div>
              <p class="text-lg font-bold text-[color:var(--ink)] mb-3">
                Fintech, SaaS, marketplaces, founder sites.
              </p>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                The industry changes; the method doesn't: <strong class="text-[color:var(--ink)]">understand fast, design clearly, build properly, measure honestly.</strong>
              </p>
          </div>

          <div class="md:col-span-7 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 md:p-10 relative overflow-hidden flex items-center" data-aos="fade-up" data-aos-delay="200">
            <Icon name="lucide:quote" class="absolute -top-4 -left-4 w-32 h-32 text-[color:var(--card-border)] opacity-20 rotate-180" />
            <blockquote class="text-xl md:text-2xl font-medium text-[color:var(--ink)] leading-snug relative z-10 italic">
              "Speed and trust aren't opposites — they compound when the strategy is right."
            </blockquote>
          </div>

        </div>

      </div>
    </section>

    <!-- ================= 4. WAYS TO WORK TOGETHER ================= -->
    <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)]">
      <div class="container mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)] mb-4 block">Ways to Work Together</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em]">Four doors in. Same method out.</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- The Sprint -->
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 flex flex-col hover:border-[color:var(--accent-1)] transition-colors" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="lucide:zap" class="w-6 h-6 text-[color:var(--accent-1)]" />
              <h3 class="text-xl font-bold text-[color:var(--ink)]">The Sprint</h3>
            </div>
            <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed mb-6 flex-grow">End-to-end website or product launch in 2–6 weeks. Strategy, design, front-end build, and tracked launch.</p>
            <div class="pt-4 border-t border-[color:var(--card-border)]">
              <p class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1">Best for</p>
              <p class="text-sm font-medium text-[color:var(--ink)]">Founders with a deadline</p>
            </div>
          </div>

          <!-- The System -->
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 flex flex-col hover:border-[color:var(--accent-1)] transition-colors" data-aos="fade-up" data-aos-delay="50">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="lucide:layers" class="w-6 h-6 text-[color:var(--accent-1)]" />
              <h3 class="text-xl font-bold text-[color:var(--ink)]">The System</h3>
            </div>
            <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed mb-6 flex-grow">
              A complete design system + scalable front-end build (Webflow / WP / Nuxt), handed off cleanly with docs and a Loom walkthrough.
            </p>
            <div class="pt-4 border-t border-[color:var(--card-border)]">
              <p class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1">Best for</p>
              <p class="text-sm font-medium text-[color:var(--ink)]">Teams scaling content</p>
            </div>
          </div>

          <!-- The Audit -->
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 flex flex-col hover:border-[color:var(--accent-1)] transition-colors" data-aos="fade-up" data-aos-delay="100">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="lucide:search" class="w-6 h-6 text-[color:var(--accent-1)]" />
              <h3 class="text-xl font-bold text-[color:var(--ink)]">The Audit</h3>
            </div>
            <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed mb-6 flex-grow">Analytics, CRO, and UX review. What's leaking, why, and a prioritized fix list — not a 50-page report.</p>
            <div class="pt-4 border-t border-[color:var(--card-border)]">
              <p class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1">Best for</p>
              <p class="text-sm font-medium text-[color:var(--ink)]">Products with traffic but no answers</p>
            </div>
          </div>

          <!-- The Partner -->
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 flex flex-col hover:border-[color:var(--accent-1)] transition-colors" data-aos="fade-up" data-aos-delay="150">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="lucide:users" class="w-6 h-6 text-[color:var(--accent-1)]" />
              <h3 class="text-xl font-bold text-[color:var(--ink)]">The Partner</h3>
            </div>
            <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed mb-6 flex-grow">Fractional design lead on retainer. I sit inside your roadmap — from kickoff through post-launch review.</p>
            <div class="pt-4 border-t border-[color:var(--card-border)]">
              <p class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1">Best for</p>
              <p class="text-sm font-medium text-[color:var(--ink)]">Companies between hires</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 5. HOW I WORK ================= -->
    <section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)]">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          <div class="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit" data-aos="fade-up">
            <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)] mb-4 block">How I Work</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight mb-6">
              Five rules <br/>
              I don't bend.
            </h2>
          </div>

          <div class="w-full lg:w-2/3 flex flex-col gap-8">
            
            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10 flex gap-6" data-aos="fade-up">
              <div class="text-4xl font-black text-[color:var(--input-bg)]" style="-webkit-text-stroke: 1px var(--accent-1);">01</div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">Clarity outranks detail.</h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed">If a number can't be screenshotted, it doesn't lead the page.</p>
              </div>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10 flex gap-6" data-aos="fade-up" data-aos-delay="50">
              <div class="text-4xl font-black text-[color:var(--input-bg)]" style="-webkit-text-stroke: 1px var(--accent-1);">02</div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">Your moat stays yours.</h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed">Show value, never the secret sauce. Inputs and outcomes on screen — proprietary logic off it, whatever the industry.</p>
              </div>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10 flex gap-6" data-aos="fade-up" data-aos-delay="100">
              <div class="text-4xl font-black text-[color:var(--input-bg)]" style="-webkit-text-stroke: 1px var(--accent-1);">03</div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">Design for two readers.</h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed"><strong class="text-[color:var(--ink)]">Customers want proof, decision-makers want polish.</strong> Layered content serves both without diluting either.</p>
              </div>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10 flex gap-6" data-aos="fade-up" data-aos-delay="150">
              <div class="text-4xl font-black text-[color:var(--input-bg)]" style="-webkit-text-stroke: 1px var(--accent-1);">04</div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">Ship in phases.</h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed">A live, tracked v1 beats a flawless v0 — on a timeline <strong class="text-[color:var(--ink)]">your business</strong> respects.</p>
              </div>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10 flex gap-6" data-aos="fade-up" data-aos-delay="200">
              <div class="text-4xl font-black text-[color:var(--input-bg)]" style="-webkit-text-stroke: 1px var(--accent-1);">05</div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">Hand off a system, not a file.</h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed">Tokens, CMS, docs, and a Loom walkthrough. If your team needs me to change a headline, I've failed the handoff.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ================= 6. STANDARDS ================= -->
    <section class="py-24 px-4 md:px-[120px] bg-neutral-900 dark:bg-[color:var(--page-bg-2)] text-white">
      <div class="container mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--page-bg-1)] opacity-60 mb-4 block">How I'm Measured</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em] mb-4">I don't ask for trust. I hand you the ruler.</h2>
          <p class="text-[color:var(--page-bg-1)] opacity-70 text-lg max-w-2xl mx-auto">Six standards I ship against on every engagement — judge any project I touch by these:</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div class="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm" data-aos="zoom-in">
            <div class="text-2xl font-black text-white mb-2">01</div>
            <h4 class="font-bold text-[color:var(--accent-1)] mb-3">On time, or early warning.</h4>
            <p class="text-white/70 text-sm leading-relaxed">Committed dates hold. Risks get flagged weeks ahead, never discovered after.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="50">
            <div class="text-2xl font-black text-white mb-2">02</div>
            <h4 class="font-bold text-[color:var(--accent-1)] mb-3">Zero structural surprises.</h4>
            <p class="text-white/70 text-sm leading-relaxed">Final delivery should trigger copy tweaks, not redesigns. Alignment up front buys that.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="100">
            <div class="text-2xl font-black text-white mb-2">03</div>
            <h4 class="font-bold text-[color:var(--accent-1)] mb-3">Tracked at launch, not after.</h4>
            <p class="text-white/70 text-sm leading-relaxed">Analytics live before the first visitor. An unmeasured launch is a guess with a URL.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="150">
            <div class="text-2xl font-black text-white mb-2">04</div>
            <h4 class="font-bold text-[color:var(--accent-1)] mb-3">Friction fixed in days.</h4>
            <p class="text-white/70 text-sm leading-relaxed">When recordings show a dead end, it becomes a ticket with a name on it — not a backlog myth.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-2xl font-black text-white mb-2">05</div>
            <h4 class="font-bold text-[color:var(--accent-1)] mb-3">One owner, whole loop.</h4>
            <p class="text-white/70 text-sm leading-relaxed">Strategy, design, build, measure: a single accountable voice from kickoff to post-launch review.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="250">
            <div class="text-2xl font-black text-white mb-2">06</div>
            <h4 class="font-bold text-[color:var(--accent-1)] mb-3">Systems that outlive me.</h4>
            <p class="text-white/70 text-sm leading-relaxed">Tokens, CMS, docs. My handoff should make me optional for everything except the next big thing.</p>
          </div>
        </div>

        <div class="text-center" data-aos="fade-up">
          <p class="text-white/70 mb-6 text-sm">Want the receipts behind each standard? They live in the case studies — numbers, dates, and names included.</p>
          <AppButton to="/projects" variant="glass" size="md" rounded="xl" icon-right="ArrowRight">
            See the Case Studies
          </AppButton>
        </div>
      </div>
    </section>

<!-- ================= 7. BEYOND THE PIXELS — Philosophy C (Fully Aligned) ================= -->
<section class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-t border-[color:var(--card-border)]">
  <div class="container mx-auto max-w-5xl">
    
    <!-- ═══ Editorial Masthead ═══ -->
    <div class="flex items-center gap-6 mb-20" data-aos="fade-up">
  <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] whitespace-nowrap">
    Beyond the Pixels
  </span>
  <span class="flex-grow h-px bg-[color:var(--card-border)]"></span>
  <span class="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-1)]"></span>
</div>

    <!-- ═══ Headline — مطابق لـ about.vue Section 7 ═══ -->
    <h2 class="text-3xl md:text-4xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight mb-16 max-w-4xl" data-aos="fade-up">
      I don't hand off and disappear.<br />
      I hand off and <span class="italic text-[color:var(--accent-1)]">upgrade.</span>
    </h2>

    <!-- ═══ Editorial 12-col grid ═══ -->
    <div class="grid md:grid-cols-12 gap-12 md:gap-16 mb-16">
      
      <!-- Left: The story -->
      <div class="md:col-span-7 space-y-6" data-aos="fade-up">
        
        <!-- Body — مطابق لـ about.vue -->
        <p class="text-lg text-[color:var(--ink-soft)] leading-relaxed">
          After most launches, I keep going —
          <em class="text-[color:var(--ink)] not-italic font-medium">unbilled and unasked.</em>
        </p>
        
        <p class="text-lg text-[color:var(--ink-soft)] leading-relaxed">
          The internal dashboard a team needs to keep deciding. The CMS that lets marketing ship without me. The playbook that turns my decisions into their defaults.
        </p>
        
        <p class="text-lg text-[color:var(--ink-soft)] leading-relaxed">
          For one fintech client, that became a full analytics operating system — you'll find it in the case study. For every client, it's the same idea:
        </p>

        <!-- Filed under — tracking-wide مطابق لـ micro labels -->
        <div class="flex items-start gap-4 pt-6 border-t border-[color:var(--card-border)]">
          <span class="text-xs font-bold uppercase tracking-wide text-[color:var(--accent-text)] whitespace-nowrap pt-0.5">
            Filed under
          </span>
          <span class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
            Post-launch ownership · Analytics handoff · Systems that outlive the designer
          </span>
        </div>
      </div>

      <!-- Right: Pullquote — مطابق لـ about.vue Bento pullquote -->
      <aside class="md:col-span-5 md:pl-10 md:border-l md:border-[color:var(--card-border)] flex flex-col justify-center" data-aos="fade-up" data-aos-delay="100">
        <span class="block text-xs font-bold uppercase tracking-wide text-[color:var(--accent-text)] mb-6">
          The Principle
        </span>
        <blockquote class="text-xl md:text-2xl font-medium text-[color:var(--ink)] leading-snug italic">
          "My exit should leave you
          <span class="text-[color:var(--accent-1)] not-italic">stronger</span>,
          not dependent."
        </blockquote>
        <span class="block w-12 h-px bg-[color:var(--accent-1)] mt-8"></span>
      </aside>
    </div>

    <!-- ═══ Footer of the spread ═══ -->
    <div class="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6" data-aos="fade-up">
      <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">
        Vendors close tickets
      </span>
      <span class="hidden sm:block flex-grow h-px bg-[color:var(--card-border)]"></span>
      <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)] flex items-center gap-3">
        <Icon name="lucide:check-circle-2" class="w-4 h-4 text-[#33cc95]" />
        Partners close loops
      </span>
    </div>

  </div>
</section>
    <!-- ================= 9. FINAL CTA ================= -->
    <section class="py-32 px-4 text-center border-t border-[color:var(--card-border)]" data-aos="fade-up">
      <div class="mb-8 inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-full px-5 py-2">
        <Icon name="lucide:calendar" class="w-4 h-4 text-[color:var(--accent-text)]" /> Next Step
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] mb-6">
  Let's find out what your website<br class="hidden md:block"/>
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]">could be proving.</span>
</h2>
      <p class="text-lg text-[color:var(--ink-soft)] mb-10 max-w-xl mx-auto">
        If you're raising, launching, or rebuilding — and you want a designer who stays for the metrics — my calendar is open.
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <AppButton to="/contact" variant="primary" size="lg" rounded="xl" icon-right="ArrowRight">
          Book a Free Audit Call
        </AppButton>
        <AppButton to="/projects/qompyl-case-study" variant="glass" size="lg" rounded="xl">
          Read the Qompyl Case Study
        </AppButton>
      </div>
      <p class="text-xs font-medium text-[color:var(--ink-soft)] opacity-70">
        First call: 30 minutes, free, honest. You'll leave with at least one actionable insight — whether we work together or not.
      </p>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const imgLightDesktop = '/images/about-hero.png'
const imgDarkDesktop = '/images/about-hero-dark.png'
const imgLightMobile = '/images/about-hero-mobile.png'
const imgDarkMobile = '/images/about-hero-dark-mobile.png'

usePageMeta({
  title: 'About Mamdouh Ghaneemy — Strategic Product Designer for Fintech Founders',
  description: 'Lead product designer blending UX strategy, design systems, Nuxt builds, and real analytics. One accountable owner — from kickoff to post-launch review.',
  keywords: [
    'strategic product designer',
    'fintech product designer Egypt',
    'SaaS design partner',
    'T-shaped designer',
    'design and build designer',
    'UX strategist fintech',
  ],
  ogType: 'profile',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ],
})

const heroButtons = [
  { label: 'Book a Free Audit Call', to: '/contact', variant: 'primary', iconRight: 'ArrowRight' },
  { label: 'See the Qompyl Case Study', to: '/projects/qompyl-case-study', variant: 'secondary' }
]

// === Mobile Drawer ===
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

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
:deep(body.drawer-open) {
  overflow: hidden;
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
    height: 120vh;
  }
}
</style>