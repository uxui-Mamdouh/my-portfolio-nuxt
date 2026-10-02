<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)]">
    <!-- === BACKDROP === -->
    <MobileBackdrop :is-open="isSheetOpen" @close="closeSheet" />
    <!-- ================= 1. HERO SECTION ================= -->
    <HeroSection
      badge-text="Open for Work"
      :show-badge-dot="true"
      :title-lines="[
        'Real projects.',
        `<span class='text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]'>Real results.</span>`,
      ]"
      desc1="Fintech & SaaS case studies with documented outcomes — translating complex products into investor-ready experiences and measurable growth."
      desc2="4-week investor launch · 10-week beta · 40% bounce drop · 0 dev rebuilds"
      :is-desc2-bold="true"
      :buttons="heroButtons"
      :bg-light-desktop="imgLightDesktop"
      :bg-dark-desktop="imgDarkDesktop"
      :bg-light-mobile="imgLightMobile"
      :bg-dark-mobile="imgDarkMobile"
    >
      <template #nav>
        <NavBar
          :is-sheet-open="isSheetOpen"
          @toggle-drawer="toggleSheet"
          @close-drawer="closeSheet"
        />
      </template>
    </HeroSection>
    <!-- ================= 2. MARQUEE (INFINITE SCROLL) ================= -->
    <InfiniteBoxes />
    <!-- ================= 3. VALUE PROPOSITION ================= -->
    <section
      class="just-push-pixels py-32 px-4 md:px-[120px] bg-neutral-900 dark:bg-[color:var(--page-bg-2)] text-white border-y border-white/10"
    >
      <div class="container mx-auto text-center max-w-5xl" data-aos="fade-up">
        <Icon
          name="lucide:sparkles"
          class="w-10 h-10 text-[color:var(--accent-1)] mx-auto mb-8 opacity-80"
        />
        <h2
          class="text-4xl md:text-6xl font-extrabold text-white tracking-[-0.02em] leading-tight mb-10"
        >
          Most designers hand off Figma.<br />
          <span class="text-white/60 font-light text-3xl md:text-5xl mt-4 block"
            >I ship the product — and the analytics to prove it worked.</span
          >
        </h2>
        <div
          class="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-bold uppercase tracking-widest text-white/80"
        >
          <div class="flex items-center gap-2">
            <Icon
              name="lucide:pen-tool"
              class="w-5 h-5 text-[color:var(--accent-1)]"
            />
            Strategy
          </div>
          <div class="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
          <div class="flex items-center gap-2">
            <Icon
              name="lucide:layout-template"
              class="w-5 h-5 text-[color:var(--accent-1)]"
            />
            Design
          </div>
          <div class="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
          <div class="flex items-center gap-2">
            <Icon
              name="lucide:code-2"
              class="w-5 h-5 text-[color:var(--accent-1)]"
            />
            Build
          </div>
          <div class="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
          <div class="flex items-center gap-2">
            <Icon
              name="lucide:bar-chart-3"
              class="w-5 h-5 text-[color:var(--accent-1)]"
            />
            Measure
          </div>
        </div>
      </div>
    </section>
    <!-- ================= 4. SELECTED WORK ================= -->
    <section
      class="w-full bg-[color:var(--page-bg-1)] relative overflow-hidden pt-32 pb-32 border-b border-[color:var(--card-border)]"
    >
      <div
        class="container mx-auto px-4 md:px-[120px] pb-16 relative"
        data-aos="fade-up"
      >
        <div class="flex flex-col gap-4 text-center md:text-left">
          <span
            class="text-[color:var(--accent-text)] font-semibold tracking-wider uppercase text-sm"
            >Selected Work</span
          >
          <h2
            class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight"
          >
            Case studies <br class="hidden md:block" />
            with the numbers attached.
          </h2>
        </div>
      </div>
      <div class="flex flex-col w-full gap-24">
        <div
          v-if="pending"
          class="text-center py-20 text-[color:var(--ink-soft)] flex flex-col items-center gap-4"
        >
          <Icon
            name="lucide:loader-2"
            class="w-8 h-8 animate-spin text-[color:var(--accent-1)]"
          />
          <p>Loading case studies…</p>
        </div>
        <div v-else-if="error" class="text-center py-20 text-red-500">
          <p>Couldn't load case studies. Refresh the page?</p>
        </div>
        <div
          v-else-if="!featuredProjects || featuredProjects.length === 0"
          class="text-center py-20 text-[color:var(--ink-soft)]"
        >
          <p>No featured case studies right now. Check back soon.</p>
        </div>
        <template v-else>
          <PremiumCaseStudyCard
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            :number="String(index + 1).padStart(2, '0')"
            :title="project.title"
            :description="project.description"
            :metric-value="project.metric_value"
            :metric-label="project.metric_label"
            :image="project.thumbnail_url"
            :link="project.component_path"
            :reverse="index % 2 !== 0"
            :cta="project.cta_label"
          />
        </template>
      </div>
      <div class="w-full flex justify-center mt-20" data-aos="fade-up">
        <AppButton
          to="/projects"
          variant="glass"
          size="lg"
          rounded="xl"
          icon-right="ArrowRight"
        >
          See the Full Archive
        </AppButton>
      </div>
    </section>
    <!-- ================= 5. HOW WE CAN WORK TOGETHER ================= -->
    <section
      class="py-24 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] border-b border-[color:var(--card-border)]"
    >
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div
            class="w-full lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-32 h-fit"
            data-aos="fade-right"
          >
            <span
              class="text-[color:var(--accent-text)] font-semibold tracking-wider uppercase text-sm"
              >Partnership Models</span
            >
            <h2
              class="text-3xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight"
            >
              Four doors in.<br />Same method out.
            </h2>
            <p
              class="text-[color:var(--ink-soft)] text-[16px] leading-relaxed mt-4 mb-6"
            >
              Whether you need a rapid launch, a scalable system, or a
              fractional design lead — I plug into your roadmap, not the other
              way around.
            </p>
            <div>
              <AppButton
                to="/about"
                variant="secondary"
                size="md"
                rounded="xl"
                icon-right="ArrowRight"
                motion="ghost"
                >Read My Philosophy</AppButton
              >
            </div>
          </div>
          <div class="w-full lg:w-2/3 flex flex-col gap-6">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 hover:border-[color:var(--accent-1)] transition-colors flex flex-col sm:flex-row gap-6 sm:items-center"
              data-aos="fade-up"
            >
              <div
                class="w-14 h-14 shrink-0 rounded-2xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center"
              >
                <Icon name="lucide:zap" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">
                  The Sprint
                </h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed text-sm">
                  End-to-end website or product launch in 2–6 weeks. Strategy,
                  design, front-end build, and tracked launch.
                </p>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 hover:border-[color:var(--accent-1)] transition-colors flex flex-col sm:flex-row gap-6 sm:items-center"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div
                class="w-14 h-14 shrink-0 rounded-2xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center"
              >
                <Icon name="lucide:layers" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">
                  The System
                </h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed text-sm">
                  A complete design system + scalable front-end build (Webflow /
                  WP / Nuxt), handed off cleanly with docs and a Loom
                  walkthrough.
                </p>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 hover:border-[color:var(--accent-1)] transition-colors flex flex-col sm:flex-row gap-6 sm:items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                class="w-14 h-14 shrink-0 rounded-2xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center"
              >
                <Icon name="lucide:search" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">
                  The Audit
                </h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed text-sm">
                  Analytics, CRO, and UX review. What's leaking, why, and a
                  prioritized fix list — not a 50-page report.
                </p>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 hover:border-[color:var(--accent-1)] transition-colors flex flex-col sm:flex-row gap-6 sm:items-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                class="w-14 h-14 shrink-0 rounded-2xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center"
              >
                <Icon name="lucide:users" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-[color:var(--ink)] mb-2">
                  The Partner
                </h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed text-sm">
                  Fractional design lead on retainer. I sit inside your roadmap
                  — from kickoff through post-launch review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ================= 6. SOCIAL PROOF ================= -->
    <!-- ================= 6. SOCIAL PROOF ================= -->
<section class="py-32 px-4 md:px-[120px] bg-neutral-950 border-y border-white/5 relative overflow-hidden">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[color:var(--accent-1)]/10 blur-[150px] rounded-full pointer-events-none"></div>
  <div class="container mx-auto relative z-10">
    
    <!-- Section Header -->
    <div class="text-center mb-24" data-aos="fade-up">
      <span class="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block flex items-center justify-center gap-3">
        <span class="w-8 h-px bg-white/50"></span>
        Word on the street
        <span class="w-8 h-px bg-white/50"></span>
      </span>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.02em]">
        Don't take my word. Take theirs.
      </h2>
    </div>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- CLUSTER 1: The Enterprise Approval (THE QOMPYL TEAM) -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <div class="mb-24" data-aos="fade-up">
      <div class="flex items-center gap-4 mb-8">
        <h3 class="text-xl font-bold text-white">The Enterprise Approval</h3>
        <div class="h-px bg-white/10 flex-grow"></div>
        <span class="text-xs font-medium text-[color:var(--accent-1)] uppercase tracking-widest">The Qompyl Team</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense items-stretch">

        <!-- ═══ KATIE — Expandable Letter (md:col-span-2) ═══ -->
        <div class="md:col-span-2 bg-gradient-to-br from-[color:var(--accent-1)]/10 to-white/5 border border-indigo-500/50 rounded-[32px] p-8 md:p-10 shadow-[0_0_40px_rgba(var(--accent-1-rgb),0.1)] backdrop-blur-md relative overflow-hidden group flex flex-col">
          <div class="absolute -bottom-10 -right-6 text-[250px] font-serif leading-[0px] text-[color:var(--accent-1)]/10 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-4">"</div>
          
          <div class="mb-8 relative z-10">
            <div class="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest">
              <span class="text-[color:var(--accent-1)]">Partnership</span>
              <span class="text-white">4 weeks · Zero revisions</span>
            </div>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-[color:var(--accent-1)] w-full rounded-full shadow-[0_0_10px_var(--accent-1)]"></div>
            </div>
          </div>

          <!-- Opening Hook (always visible) -->
          <p class="text-[17px] font-medium text-white leading-relaxed mb-6 relative z-10">
            "Working with Mamdouh has been an exceptionally positive experience. From the beginning, he brought a level of expertise that did much more than help us execute a website redesign —
            <strong class="text-[color:var(--accent-1)] font-bold">he helped guide us through the process, identify what we were missing, and think more clearly about how to tell Qompyl's story in the strongest possible way.</strong>"
          </p>

          <!-- Expandable Body -->
          <div class="relative z-10">
            <div class="overflow-hidden transition-all duration-500 ease-in-out"
                 :class="isKatieExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'">
              
              <p class="text-[15px] font-normal text-white/90 leading-relaxed mb-6">
                He committed himself to understanding our business, our product, our team and the way we work. That investment made a tremendous difference. His recommendations were thoughtful and informed, his responses were timely, complete and consistently polished, and
                <strong class="text-white font-semibold">he approached the project as a true partner rather than simply waiting for direction.</strong>
              </p>

              <p class="text-[15px] font-normal text-white/90 leading-relaxed mb-6">
                When we encountered a challenge, Mamdouh didn't just point out the problem. He came back with multiple potential solutions, talked us through the tradeoffs and helped us work toward the best outcome.
                <strong class="text-white font-semibold">He never shied away from the heavy lifting, difficult questions or extra effort required to get something right.</strong>
              </p>

              <p class="text-[15px] font-normal text-white/90 leading-relaxed mb-6">
                Just as importantly, he was an absolute pleasure to work with — collaborative, professional, patient and genuinely committed to the success of the project. His support also extended well beyond the original scope of work; he continued to make himself available, offer guidance and help us solve problems as they arose.
              </p>

              <p class="text-[15px] font-normal text-white/90 leading-relaxed mb-8">
                Mamdouh brought tremendous value to the projects we worked on together, and
                <strong class="text-[color:var(--accent-1)] font-bold">I would work with him again and again.</strong>
                I recommend him not only for the quality of his design and technical work, but for the expertise, judgment, professionalism and partnership he brings to the entire process.
              </p>
            </div>

            <button @click="isKatieExpanded = !isKatieExpanded"
                    class="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-1)] hover:text-white transition-colors relative z-10 group/btn">
              <span>{{ isKatieExpanded ? 'Read less' : 'Read full letter' }}</span>
              <Icon :name="isKatieExpanded ? 'lucide:chevron-up' : 'lucide:chevron-down'"
                    class="w-4 h-4 transition-transform duration-300"
                    :class="isKatieExpanded ? 'rotate-180' : ''" />
            </button>
          </div>

          <!-- Signature -->
          <div class="flex items-center gap-4 border-t border-[color:var(--accent-1)]/20 pt-6 mt-8 relative z-10">
            <div
      class="w-12 h-12 rounded-full bg-gradient-to-tr from-[color:var(--accent-1)] to-[color:var(--accent-2)] p-[2px] shrink-0"
    >
      <div
        class="w-full h-full rounded-full bg-neutral-900 overflow-hidden flex items-center justify-center"
      >
        <NuxtImg
          src="/images/testimonials/katie-milburn.jpeg"
          alt="Katie Milburn, MBA — VP of Strategy at Qompyl"
          title="Katie Milburn — Qompyl"
          class="w-full h-full object-cover"
          width="96"
          height="96"
          sizes="48px"
          format="webp"
          quality="85"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
            <div>
              <div class="font-bold text-white text-sm">Katie Milburn, MBA</div>
              <div class="text-xs text-[color:var(--accent-1)]">VP of Strategy, Qompyl</div>
            </div>
          </div>
        </div>

        <!-- ═══ TYLER ═══ -->
        <div class="md:col-span-1 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-sm hover:border-white/20 transition-colors relative overflow-hidden group flex flex-col">
          <div class="absolute -bottom-8 -right-4 text-[180px] font-serif leading-[0px] text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-2">"</div>
          <div class="mb-8 relative z-10">
            <div class="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest">
              <span class="text-white/60">Vision → Product</span>
              <span class="text-white">Above & beyond</span>
            </div>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-white/60 w-full rounded-full"></div>
            </div>
          </div>
          <p class="text-[15px] text-white/80 leading-relaxed mb-8 relative z-10 flex-grow">
            "Mamdouh's designs are <strong class="text-white font-semibold">shockingly good.</strong> Not only did he deliver on our requests in a timely manner, but his eye for design went above and beyond our highest expectations for the app and website. I would hire him again in a heartbeat."
          </p>
          <div class="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                <div class="w-12 h-12 rounded-full bg-white/10 overflow-hidden flex items-center justify-center shrink-0">
      <NuxtImg
        src="/images/testimonials/tyler-charton.jpg"
        alt="Tyler Charton — CEO & Founder at Qompyl"
        title="Tyler Charton — Qompyl"
        class="w-full h-full object-cover"
        width="96"
        height="96"
        sizes="48px"
        format="webp"
        quality="85"
        loading="lazy"
        decoding="async"
      />
    </div>
            <div>
              <div class="font-bold text-white text-sm">Tyler Charton</div>
              <div class="text-xs text-white/50">CEO & Founder, Qompyl</div>
            </div>
          </div>
        </div>

        <!-- ═══ REBECCA ═══ -->
        <div class="md:col-span-1 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-sm hover:border-white/20 transition-colors relative overflow-hidden group flex flex-col">
          <div class="absolute -bottom-8 -right-4 text-[180px] font-serif leading-[0px] text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-2">"</div>
          <div class="mb-8 relative z-10">
            <div class="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest">
              <span class="text-white/60">Brand Unity</span>
              <span class="text-white">Web × Product</span>
            </div>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-white/60 w-full rounded-full"></div>
            </div>
          </div>
          <p class="text-[15px] text-white/80 leading-relaxed mb-8 relative z-10 flex-grow">
            "Mamdouh's ambitions for Qompyl resulted in an <strong class="text-white font-semibold">exquisite theatre of design</strong> where the user is enticed to play and explore with a glowing color palette against a jet-black background. His prowess in knowing how to cross the divide between the website and the product provided absolute unity for our brand and set us apart from the start."
          </p>
          <div class="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
              <div class="w-12 h-12 rounded-full bg-white/10 overflow-hidden flex items-center justify-center shrink-0">
    <NuxtImg
      src="/images/testimonials/Rebecca-Menes.jpg"
      alt="Rebecca — Designer at Qompyl Team"
      title="Rebecca — Qompyl Team"
      class="w-full h-full object-cover"
      width="96"
      height="96"
      sizes="48px"
      format="webp"
      quality="85"
      loading="lazy"
      decoding="async"
    />
  </div>
            <div>
              <div class="font-bold text-white text-sm">Rebecca</div>
              <div class="text-xs text-white/50">Qompyl Team</div>
            </div>
          </div>
        </div>
        <!-- ═══ CLARK VANSCODER ═══ -->
<div class="md:col-span-2 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-sm hover:border-white/20 transition-colors relative overflow-hidden group flex flex-col">
  <!-- Decorative Quote Mark -->
  <div class="absolute -bottom-8 -right-4 text-[180px] font-serif leading-[0px] text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-2">"</div>

  <!-- Header Labels + Progress Bar -->
  <div class="mb-8 relative z-10">
    <div class="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest">
      <span class="text-white/60">Design Partnership</span>
      <span class="text-white">Web × Design</span>
    </div>
    <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
      <div class="h-full bg-white/60 w-full rounded-full"></div>
    </div>
  </div>

  <!-- Testimonial Body -->
  <p class="text-[15px] text-white/80 leading-relaxed mb-8 relative z-10 flex-grow">
    "Working with Mamdouh has been a real pleasure. From our design work to our website at Qompyl, he consistently <strong class="text-white font-semibold">exceeds my expectations</strong> with the quality and professionalism of what he delivers. He is always courteous and responsive, and I would happily recommend him to anyone looking for a <strong class="text-white font-semibold">talented, dependable design partner</strong>."
  </p>

  <!-- Author Footer -->
  <div class="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
  <div class="w-12 h-12 rounded-full bg-white/10 overflow-hidden flex items-center justify-center shrink-0">
    <NuxtImg
      src="/images/testimonials/clark-vanscoder.jpg"
      alt="Clark VanScoder — CTO/COO at Qompyl"
      title="Clark VanScoder — Qompyl"
      class="w-full h-full object-cover"
      width="96"
      height="96"
      sizes="48px"
      format="webp"
      quality="85"
      loading="lazy"
      decoding="async"
    />
  </div>    <div>
      <div class="font-bold text-white text-sm">Clark VanScoder</div>
      <div class="text-xs text-white/50">CTO/COO · Qompyl</div>
    </div>
  </div>
</div>

       

      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- CLUSTER 2: The Founders' Trust (STARTUPS & FOUNDERS) -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <div data-aos="fade-up">
      <div class="flex items-center gap-4 mb-8">
        <h3 class="text-xl font-bold text-white">The Founders' Trust</h3>
        <div class="h-px bg-white/10 flex-grow"></div>
        <span class="text-xs font-medium text-white/50 uppercase tracking-widest">Startups & Founders</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense items-stretch">

        <!-- ═══ THRESH ═══ -->
        <div class="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-sm hover:border-white/20 transition-colors relative overflow-hidden group flex flex-col">
          <div class="absolute -bottom-8 -right-4 text-[180px] font-serif leading-[0px] text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-2">"</div>
          <div class="mb-8 relative z-10">
            <div class="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest">
              <span class="text-white/60">Vision → Product</span>
              <span class="text-white">Ahead of schedule</span>
            </div>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-white/60 w-full rounded-full"></div>
            </div>
          </div>
          <p class="text-[15px] text-white/80 leading-relaxed mb-8 relative z-10 flex-grow">
            "An elite designer who makes complex ideas ship. If you need someone to turn a vision into a real product — this is the partner."
          </p>
          <div class="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
            <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">TH</div>
            <div>
              <div class="font-bold text-white text-sm">Thresh</div>
              <div class="text-xs text-white/50">Startup Founder</div>
            </div>
          </div>
        </div>

        <!-- ═══ HAYAT HADRAWI ═══ -->
        <div class="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-sm hover:border-white/20 transition-colors relative overflow-hidden group flex flex-col">
          <div class="absolute -bottom-8 -right-4 text-[180px] font-serif leading-[0px] text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-2">"</div>
          <div class="mb-8 relative z-10">
            <div class="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest">
              <span class="text-white/60">Feedback Loop</span>
              <span class="text-white">Same-day responses</span>
            </div>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-white/60 w-full rounded-full"></div>
            </div>
          </div>
          <p class="text-[15px] text-white/80 leading-relaxed mb-8 relative z-10 flex-grow">
            "Fast, open to feedback, and creative. Mamdouh delivered beyond what we expected — and on a tight timeline."
          </p>
          <div class="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
            <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">HH</div>
            <div>
              <div class="font-bold text-white text-sm">Hayat Hadrawi</div>
              <div class="text-xs text-white/50">Startup Founder</div>
            </div>
          </div>
        </div>

        <!-- ═══ MACQUARRIE ══ -->
        <div class="md:col-span-1 lg:col-span-1 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-sm hover:border-white/20 transition-colors relative overflow-hidden group flex flex-col">
          <div class="absolute -bottom-8 -right-4 text-[180px] font-serif leading-[0px] text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-2">"</div>
          <div class="mb-8 relative z-10">
            <div class="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-widest">
              <span class="text-white/60">Scope</span>
              <span class="text-white">Zero creep</span>
            </div>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-white/60 w-full rounded-full"></div>
            </div>
          </div>
          <p class="text-[15px] text-white/80 leading-relaxed mb-8 relative z-10 flex-grow">
            "Went above and beyond the brief — twice. I'd recommend Mamdouh to anyone who needs a designer that thinks like a founder."
          </p>
          <div class="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
              <div class="w-12 h-12 rounded-full bg-white/10 overflow-hidden flex items-center justify-center shrink-0">
    <NuxtImg
      src="/images/testimonials/Matthew-MacQuarrie.jpg"
      alt="Macquarrie — Startup Founder"
      title="Macquarrie — Startup Founder"
      class="w-full h-full object-cover"
      width="96"
      height="96"
      sizes="48px"
      format="webp"
      quality="85"
      loading="lazy"
      decoding="async"
    />
  </div>
            <div>
              <div class="font-bold text-white text-sm">Macquarrie</div>
              <div class="text-xs text-white/50">Startup Founder</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
    <!-- ================= 7. CLOSING CTA ================= -->
    <section
      class="py-32 px-4 md:px-[120px] bg-[color:var(--page-bg-1)] text-center border-t border-[color:var(--card-border)]"
    >
      <div class="container mx-auto max-w-3xl" data-aos="fade-up">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-tight mb-6"
        >
          If your site is leaking the deals it was built to win —
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]"
            >let's find out why.</span
          >
        </h2>
        <p
          class="text-lg text-[color:var(--ink-soft)] mb-10 max-w-xl mx-auto leading-relaxed"
        >
          First call: 30 minutes, free, honest. You'll leave with at least one
          actionable insight — whether we work together or not.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AppButton
            to="/contact"
            variant="primary"
            size="lg"
            rounded="xl"
            icon-right="ArrowRight"
          >
            Book a Free Audit Call
          </AppButton>
          <AppButton
            to="/projects/qompyl-case-study"
            variant="glass"
            size="lg"
            rounded="xl"
          >
            See the Qompyl Case Study
          </AppButton>
        </div>
        <p
          class="text-xs font-medium text-[color:var(--ink-soft)] opacity-70 mt-6"
        >
          Reply within 24 hours. Usually sooner.
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useSupabase } from "~/composables/utils/supabase";

const  imgLightDesktop = "/images/home-hero-bg.png";
const  imgDarkDesktop = "/images/home-hero-dark.png";
const  imgLightMobile = "/images/home-hero-mobile.png";
const  imgDarkMobile = "/images/home-hero-dark-mobile.png";

usePageMeta({
  title:
    "Mamdouh Ghaneemy | Strategic Product Designer for Fintech & SaaS Founders",
  description:
    "Fintech & SaaS case studies with measurable outcomes. One owner — strategy, design, build, and analytics — from kickoff to post-launch review. Pre-Series A → Series B.",
  keywords: [
    "fintech product designer",
    "SaaS product designer",
    "investor-ready website",
    "Pre-Series A design partner",
    "design that ships",
    "measurable UX",
    "founder-first design",
    "design engineer fintech",
  ],
  ogType: "website",
  ogImage: "https://mamdouhghaneemy.com/images/Home-hero-bg.png",
  breadcrumbs: [{ name: "Home", url: "/" }],
});

// Hero Buttons — CTA موحّد
const heroButtons = [
  {
    label: "Book a Free Audit Call",
    to: "/contact",
    variant: "primary",
    iconRight: "ArrowRight",
  },
  {
    label: "See the Qompyl Case Study",
    to: "/projects/qompyl-case-study",
    variant: "secondary",
  },
];

// Katie's expandable testimonial state
const isKatieExpanded = ref(false);

// Mobile Drawer Logic
const isSheetOpen = ref(false);

const toggleSheet = () => {
  isSheetOpen.value = !isSheetOpen.value;
  if (process.client) {
    if (isSheetOpen.value) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
  }
};

const closeSheet = () => {
  if (isSheetOpen.value) toggleSheet();
};

const handleResize = () => {
  if (process.client && window.innerWidth > 768 && isSheetOpen.value) {
    closeSheet();
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

// Fetch Data from Supabase
const supabase = useSupabase();

const {
  data: featuredProjects,
  pending,
  error,
} = await useAsyncData("featured-projects", async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_featured", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }

  return data;
});
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
    height: 130vh;
  }
}
.just-push-pixels {
  position: relative;
  background-image: url("/images/just-push-pixels.png");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}
</style>
