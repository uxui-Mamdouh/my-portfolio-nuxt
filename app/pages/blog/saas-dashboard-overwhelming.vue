<template>
  <div class="relative" style="isolation: isolate;">

   
    <!-- ═══════════════ FLOATING ACTIONS ═══════════════ -->
    <Teleport v-if="mounted" to="body">
      <div class="fixed right-6 top-32 flex flex-col items-center gap-3 pointer-events-auto no-print" style="z-index: 9998 !important;">
        <button
          @click="toggleFocusMode"
          class="focus-toggle group relative w-12 h-12 rounded-full bg-[color:var(--card-bg)] border border-[color:var(--card-border)] flex items-center justify-center hover:scale-105 transition-all shadow-lg cursor-pointer"
          :class="focusMode ? 'ring-2 ring-[color:var(--accent-1)] ring-offset-2 ring-offset-[color:var(--page-bg-1)]' : ''"
          :title="focusMode ? 'Exit focus mode (⌘K)' : 'Enter focus mode (⌘K)'"
          aria-label="Toggle focus mode"
        >
          <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: radial-gradient(circle, rgba(109,94,240,0.15) 0%, transparent 70%);"></span>
          <svg viewBox="0 0 24 24" fill="none" class="relative w-5 h-5 text-[color:var(--ink)] transition-all duration-300" :class="focusMode ? 'rotate-180' : ''">
            <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" :class="focusMode ? 'opacity-40' : 'opacity-100'" style="transition: opacity 0.3s ease;" />
            <circle cx="12" cy="12" :r="focusMode ? 3 : 2" :fill="focusMode ? 'currentColor' : 'none'" stroke="currentColor" :stroke-width="focusMode ? 0 : 1.8" style="transition: all 0.3s ease;" />
            <circle v-if="focusMode" cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3" class="focus-pulse" />
          </svg>
        </button>

        <Transition name="toolbar-slide">
          <div v-show="!focusMode" class="flex flex-col items-center gap-1 px-1.5 py-2 rounded-full bg-[color:var(--card-bg)]/95 backdrop-blur-md border border-[color:var(--card-border)] shadow-lg">
            <button @click="copyAsMarkdown" class="toolbar-btn-icon" :title="copiedMd ? 'Copied!' : 'Copy full article as Markdown'">
              <Icon :name="copiedMd ? 'lucide:check' : 'lucide:clipboard-copy'" class="w-4 h-4" />
            </button>
            <button @click="showCitation = true" class="toolbar-btn-icon" title="Cite this article">
              <Icon name="lucide:quote" class="w-4 h-4" />
            </button>
            <button @click="toggleSpeech" class="toolbar-btn-icon" :class="{ 'active': speechPlaying }" :title="speechPlaying ? 'Stop listening' : 'Listen to article (⌘L)'">
              <Icon :name="speechPlaying ? 'lucide:pause' : 'lucide:headphones'" class="w-4 h-4" />
            </button>
            <button @click="printArticle" class="toolbar-btn-icon" title="Print / Save as PDF">
              <Icon name="lucide:printer" class="w-4 h-4" />
            </button>
            <div class="w-5 h-px bg-[color:var(--card-border)] my-1"></div>
            <button @click="copyShortLink" class="toolbar-btn-icon" :title="copiedLink ? 'Copied!' : 'Copy link'">
              <Icon :name="copiedLink ? 'lucide:check' : 'lucide:link'" class="w-4 h-4" />
            </button>
          </div>
        </Transition>
      </div>
    </Teleport>

    <!-- ═══════════════ CITATION MODAL ═══════════════ -->
    <Teleport v-if="mounted" to="body">
      <Transition name="fade">
        <div v-if="showCitation" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 no-print" style="z-index: 999999 !important;" @click.self="showCitation = false">
          <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div class="flex items-start justify-between mb-6 gap-4">
              <div class="min-w-0">
                <h3 class="text-xl font-extrabold text-[color:var(--ink)] m-0">Cite this article</h3>
                <p class="text-sm text-[color:var(--ink-soft)] mt-1 m-0">Pick a citation format:</p>
              </div>
              <button @click="showCitation = false" class="w-9 h-9 rounded-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-center justify-center hover:bg-[color:var(--card-bg)] transition-colors cursor-pointer shrink-0" aria-label="Close modal">
                <Icon name="lucide:x" class="w-4 h-4 text-[color:var(--ink)]" />
              </button>
            </div>
            <div class="flex flex-col gap-4 min-w-0">
              <div v-for="format in citationFormats" :key="format.id" class="border border-[color:var(--card-border)] rounded-2xl p-4 bg-[color:var(--input-bg)]/40 overflow-hidden min-w-0">
                <div class="flex items-center justify-between mb-3 gap-3 flex-wrap">
                  <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">{{ format.label }}</span>
                  <button @click="copyCitation(format.value)" class="text-xs font-bold text-[color:var(--accent-1)] hover:underline cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[color:var(--accent-1)]/10 transition-colors shrink-0">
                    <Icon name="lucide:copy" class="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <p class="font-mono text-[12.5px] text-[color:var(--ink)] leading-relaxed m-0" style="white-space: pre-wrap; word-break: break-word; overflow-wrap: anywhere;">{{ format.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ═══════════════ VIDEO MODAL — YouTube ═══════════════ -->
    <Teleport v-if="mounted" to="body">
      <Transition name="fade">
        <div v-if="showVideoModal" class="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 no-print" style="z-index: 999998 !important;" @click.self="closeVideoModal">
          <div class="w-full max-w-5xl bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl overflow-hidden shadow-2xl">
            <div class="flex items-center justify-between p-4 md:p-5 border-b border-[color:var(--card-border)]">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white flex items-center justify-center shrink-0">
                  <Icon name="lucide:play" class="w-5 h-5" fill="currentColor" />
                </div>
                <div class="min-w-0">
                  <div class="font-extrabold text-[15px] text-[color:var(--ink)] truncate">Watch the Explainer</div>
                  <div class="text-[11px] text-[color:var(--ink-soft)] flex items-center gap-1.5">
                    <Icon name="lucide:clock" class="w-3 h-3" />
                    4-min video walkthrough
                  </div>
                </div>
              </div>
              <button @click="closeVideoModal" class="w-9 h-9 rounded-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-center justify-center hover:bg-[color:var(--card-bg)] transition-colors cursor-pointer shrink-0" aria-label="Close video">
                <Icon name="lucide:x" class="w-4 h-4 text-[color:var(--ink)]" />
              </button>
            </div>

            <div class="aspect-video bg-black relative">
              <iframe
                v-if="showVideoModal"
                :src="youtubeEmbedUrl"
                title="Why Your SaaS Dashboard is Overwhelming — Decision Surface Framework"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="w-full h-full absolute inset-0"
              ></iframe>
            </div>

            <div class="p-4 md:p-5 flex items-center justify-between gap-3 flex-wrap border-t border-[color:var(--card-border)]">
              <p class="text-[12px] text-[color:var(--ink-soft)] m-0">4-min explainer · Free dashboard audit included</p>
              <a :href="YOUTUBE_WATCH_URL" target="_blank" rel="noopener noreferrer" class="text-[12px] font-bold text-[color:var(--accent-1)] hover:underline inline-flex items-center gap-1.5">
                Watch on YouTube
                <Icon name="lucide:external-link" class="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ═══════════════ AUDIO MODAL — Spotify ═══════════════ -->
    <Teleport v-if="mounted" to="body">
      <Transition name="fade">
        <div v-if="showAudioModal" class="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 no-print" style="z-index: 999998 !important;" @click.self="closeAudioModal">
          <div class="w-full max-w-2xl bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl overflow-hidden shadow-2xl">
            <div class="flex items-center justify-between p-4 md:p-5 border-b border-[color:var(--card-border)]">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white flex items-center justify-center shrink-0">
                  <Icon name="lucide:headphones" class="w-5 h-5" />
                </div>
                <div class="min-w-0">
                  <div class="font-extrabold text-[15px] text-[color:var(--ink)] truncate">Listen to the Audio</div>
                  <div class="text-[11px] text-[color:var(--ink-soft)] flex items-center gap-1.5">
                    <Icon name="lucide:mic" class="w-3 h-3" />
                    8-min podcast · Spotify
                  </div>
                </div>
              </div>
              <button @click="closeAudioModal" class="w-9 h-9 rounded-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-center justify-center hover:bg-[color:var(--card-bg)] transition-colors cursor-pointer shrink-0" aria-label="Close audio">
                <Icon name="lucide:x" class="w-4 h-4 text-[color:var(--ink)]" />
              </button>
            </div>

            <div class="p-4 md:p-6">
              <iframe
                v-if="showAudioModal"
                :src="spotifyEmbedUrl"
                width="100%"
                height="352"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                class="rounded-xl w-full"
                style="border-radius: 12px; border: none;"
              ></iframe>
            </div>

            <div class="p-4 md:p-5 flex items-center justify-between gap-3 flex-wrap border-t border-[color:var(--card-border)]">
              <p class="text-[12px] text-[color:var(--ink-soft)] m-0">8-min podcast · Available on all platforms</p>
              <a :href="SPOTIFY_EPISODE_URL" target="_blank" rel="noopener noreferrer" class="text-[12px] font-bold text-[color:var(--accent-1)] hover:underline inline-flex items-center gap-1.5">
                Open in Spotify
                <Icon name="lucide:external-link" class="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ═══════════════ TOASTS ═══════════════ -->
    <Teleport v-if="mounted" to="body">
      <TransitionGroup name="toast" tag="div" class="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col gap-2 pointer-events-none no-print" style="z-index: 9999999 !important;">
        <div v-for="toast in toasts" :key="toast.id" class="px-5 py-3 rounded-full bg-[color:var(--ink)] text-white text-[13px] font-bold shadow-2xl flex items-center gap-2">{{ toast.message }}</div>
      </TransitionGroup>
    </Teleport>

    <!-- ═══════════════ ARTICLE ═══════════════ -->
    <article class="bg-[color:var(--page-bg-1)] min-h-screen text-[color:var(--ink)] font-sans selection:bg-[color:var(--accent-1)] selection:text-white" :class="{ 'focus-mode': focusMode }" id="main-article">

      <!-- HERO -->
      <section class="relative pt-12 md:pt-24 pb-20" :class="{ 'pt-32': focusMode }">
        <div class="absolute inset-0 w-full h-[120%] overflow-hidden pointer-events-none z-0 no-print">
          <div class="absolute top-[-100px] right-[-100px] md:right-[10%] w-[500px] md:w-[780px] h-[500px] md:h-[780px] rounded-full bg-[radial-gradient(circle,rgba(109,94,240,0.12)_0%,transparent_70%)] blur-3xl"></div>
          <div class="absolute bottom-[20%] left-[-150px] w-[400px] md:w-[620px] h-[400px] md:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(138,92,246,0.1)_0%,transparent_70%)] blur-3xl"></div>
        </div>

        <div class="max-w-[1440px] mx-auto px-6 md:px-[60px] relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div class="lg:col-span-7" data-aos="fade-up">
              <div class="flex items-center flex-wrap gap-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] mb-8">
                <span class="text-[color:var(--ink-soft)] bg-[color:var(--card-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full">SaaS UX</span>
                <span class="text-[color:var(--accent-1)]">{{ readingStats.minutes }} Min Read</span>
                <span class="w-1 h-1 rounded-full bg-[color:var(--card-border)]"></span>
                <span class="text-[color:var(--ink-soft)]">{{ readingStats.words.toLocaleString() }} words</span>
                <span class="w-1 h-1 rounded-full bg-[color:var(--card-border)]"></span>
                <span class="text-[color:var(--ink-soft)]">Level: Intermediate</span>
              </div>

              <h1 class="text-[clamp(2.4rem,5.4vw,4.4rem)] font-black tracking-[-0.035em] leading-[1.02] mb-8 text-[color:var(--ink)]">
                Why Your SaaS Dashboard is Overwhelming:
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2">The "Decision Surface" Framework.</span>
              </h1>

              <p class="text-[1.22rem] font-medium text-[color:var(--ink-soft)] leading-[1.55] max-w-[620px] pl-6 border-l-2 border-[color:var(--ink-soft)]/40 mb-10">
                If your users ask "where do I start?" — you don't have a UX problem. You have a hierarchy problem. And it's causing Day-1 churn.
              </p>

              <div class="flex items-center gap-4 border-t border-[color:var(--card-border)] pt-7 w-max">
                <div class="w-[52px] h-[52px] rounded-full border border-[color:var(--card-border)] p-[3px] bg-[color:var(--card-bg)] shrink-0">
                  <div class="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] flex items-center justify-center">
                    <NuxtImg src="/images/mamdouh-ghaneemy-pic.png" alt="Mamdouh Ghaneemy" class="w-full h-full object-cover" width="96" height="96" format="webp" quality="85" />
                  </div>
                </div>
                <div>
                  <div class="font-extrabold text-[14px] text-[color:var(--ink)]">Mamdouh Ghaneemy</div>
                  <div class="text-[10.5px] uppercase tracking-[0.12em] font-bold text-[color:var(--ink-soft)] mt-1">Fintech Product Designer</div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 relative" data-aos="fade-up" data-aos-delay="150">
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[40px] p-10 md:p-12 min-h-[420px] flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.25)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden group">
                <div class="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(248,113,113,0.15),transparent_70%)] pointer-events-none z-0"></div>
                <div class="relative z-10">
                  <span class="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-5">Day-1 Churn Driver</span>
                  <div class="flex items-baseline gap-4 mb-3">
                    <span class="text-[clamp(4rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-red-500">70%</span>
                  </div>
                </div>
                <div class="mt-8 pt-7 border-t border-[color:var(--card-border)] relative z-10">
                  <span class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-2">The Reality</span>
                  <p class="text-[0.9rem] text-[color:var(--ink-soft)] leading-relaxed m-0">Users ignore <strong class="text-[color:var(--ink)]">70% of widgets</strong> on the average overloaded dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <!-- ===================== HERO IMAGE ===================== -->
    <figure class="max-w-[1440px] mx-auto px-6 md:px-[60px] mb-[110px]" data-aos="fade-up" data-aos-delay="200">
      <div class="w-full aspect-[2/1] rounded-[48px] border border-[color:var(--card-border)] overflow-hidden relative bg-[color:var(--card-bg)] group">
        <NuxtImg 
          src="/images/blog/saas-dashboard-overwhelming.png"
          alt="Split screen showing Figma design on left with 4 states and Nuxt 3 code on right showing corresponding Vue components" 
          title="Zero-Friction Design Handoff: From Figma States to Nuxt 3 Components" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
          width="2400" height="1200" 
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) calc(100vw - 120px), 1320px" 
          format="webp" quality="92" loading="eager" decoding="async" fetchpriority="high" 
        />
        
        <div class="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[0.16em] py-2.5 px-4 rounded-full flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
          States Before Pixels · Dev-Ready
        </div>
      </div>
    </figure>
      <!-- MAIN GRID -->
      <div class="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-[80px] items-start">

          <!-- ✅ ID أضيف لاستهداف محتوى المقال من الـ Composable -->
          <article id="article-body" class="xl:col-span-8 max-w-[740px] text-[17px] leading-[1.75] text-[color:var(--ink-soft)]">

            <!-- VISUAL SUMMARY -->
            <section ref="sketchSection" class="mb-16 p-6 md:p-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] no-print" data-aos="fade-up">
              <div class="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <h3 class="text-xl font-extrabold text-[color:var(--ink)] flex items-center gap-3">
                  <Icon name="lucide:layout-grid" class="w-6 h-6 text-[color:var(--accent-1)]" />
                  Visual Summary
                </h3>
                <div class="flex gap-2 flex-wrap" data-no-export="true">
                  <button @click="downloadSketch" :disabled="downloadingSketch" class="px-4 py-2 rounded-full bg-white border border-[color:var(--card-border)] text-[color:var(--ink)] text-[12px] font-bold hover:-translate-y-0.5 hover:border-[color:var(--accent-1)] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-wait">
                    <Icon :name="downloadingSketch ? 'lucide:loader-2' : 'lucide:download'" class="w-3.5 h-3.5" :class="{ 'animate-spin': downloadingSketch }" />
                    {{ downloadingSketch ? 'Rendering…' : 'Download PNG' }}
                  </button>
                  <button @click="shareSketch" class="px-4 py-2 rounded-full bg-[color:var(--accent-1)] text-white text-[12px] font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(109,94,240,0.4)] transition-all flex items-center gap-2 cursor-pointer">
                    <Icon name="lucide:share-2" class="w-3.5 h-3.5" />
                    Share
                  </button>
                </div>
              </div>

              <p class="text-[14px] text-[color:var(--ink-soft)] mb-6">A one-page visual recap of the entire framework. Click any card to jump to that section.</p>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button v-for="(card, idx) in sketchCards" :key="idx" @click="scrollToSection(card.target)" class="sketch-card group relative p-5 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-2xl text-left hover:border-[color:var(--accent-1)] hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(109,94,240,0.3)] transition-all cursor-pointer">
                  <span class="absolute top-3 right-3 w-7 h-7 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center text-[11px] font-black">{{ idx + 1 }}</span>
                  <div class="text-[11px] font-extrabold uppercase tracking-wider text-[color:var(--ink)] mb-3 pr-8">{{ card.title }}</div>
                  <div class="w-full h-16 mb-3 flex items-center justify-center" v-html="card.svg"></div>
                  <div class="text-[11px] text-[color:var(--ink-soft)] leading-relaxed">{{ card.desc }}</div>
                </button>
              </div>
            </section>

            <!-- INTRO -->
            <p class="text-[20px] text-[color:var(--ink)] font-medium mb-7" data-aos="fade-up">In the high-stakes environment of B2B SaaS, the dashboard is the product.</p>
            <p class="mb-7" data-aos="fade-up">It is the first interface a user interacts with after onboarding, and the primary environment where they determine if your software actually delivers on its promised value. Yet, most dashboards fail this critical test. They are designed as data dumps rather than decision engines, resulting in cognitive overload, decision paralysis, and ultimately, user abandonment.</p>

            <div class="border-l-[3px] border-amber-400 bg-amber-400/10 px-6 py-5 rounded-r-xl mb-7" data-aos="fade-up">
              <p class="m-0 text-[#b49852] text-[16px] leading-relaxed"><strong>Clarity must precede complexity.</strong> This article deconstructs the anatomy of dashboard fatigue and provides a measurable, actionable framework to transform your interface from a chaotic report into a high-converting decision surface.</p>
            </div>

            <!-- SECTION 1 -->
            <h2 id="culprits" data-section="culprits" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">The 3 Culprits Behind Dashboard Fatigue</h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]"><strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> SaaS dashboards overwhelm users because they prioritize data dumping over decision-making. When every metric has equal visual weight, users experience severe cognitive overload. This leads directly to decision paralysis and increased Day-1 churn.</p>
            </div>

            <p class="mb-7" data-aos="fade-up">Through extensive behavioral analysis using tools like <strong class="text-[color:var(--ink)]">Amplitude</strong> and <strong class="text-[color:var(--ink)]">Pendo</strong>, three recurring patterns consistently emerge:</p>

            <div class="flex flex-col gap-4 my-8">
              <div v-for="(culprit, i) in culprits" :key="i" class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6" data-aos="fade-up">
                <div class="flex items-baseline gap-3 mb-2">
                  <span class="font-mono text-[13px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md">{{ culprit.num }}</span>
                  <h3 class="text-[1.1rem] font-bold text-[color:var(--ink)] m-0">{{ culprit.title }}</h3>
                </div>
                <p class="text-[15px] leading-relaxed m-0" v-html="culprit.desc"></p>
              </div>
            </div>

            <!-- SECTION 2 -->
            <h2 id="framework" data-section="framework" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">The Decision Surface Framework (5 Layers)</h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]"><strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> A dashboard is not a report; it is a decision surface. The 5-layer framework organizes data by urgency and actionability.</p>
            </div>

            <!-- DECISION FLOW -->
            <div class="my-10 p-6 md:p-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] no-print" data-aos="fade-up">
              <div class="text-center mb-6">
                <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-2">The Decision Flow</div>
                <h3 class="text-lg font-extrabold text-[color:var(--ink)] m-0">From Overwhelmed to Decision Surface</h3>
              </div>

              <div class="df-stage">
                <div class="df-tabs" role="tablist" aria-label="Choose a path">
                  <button v-for="tab in dfTabs" :key="tab.key" type="button" role="tab" :aria-selected="dfMode === tab.key" class="df-tab" :class="{ 'df-tab--active': dfMode === tab.key }" @click="dfMode = tab.key">
                    <i v-if="tab.color" class="df-tab-dot" :style="{ background: tab.color }"></i>
                    {{ tab.label }}
                  </button>
                </div>

                <div class="overflow-x-auto">
                  <svg ref="dfSvg" class="df-svg" viewBox="10 20 680 770" role="img" aria-label="Flow diagram">
                    <defs>
                      <linearGradient id="df-gP" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b7dff" /><stop offset="1" stop-color="#5440f0" /></linearGradient>
                      <linearGradient id="df-gD" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7b8d" /><stop offset="1" stop-color="#e63b57" /></linearGradient>
                      <linearGradient id="df-gW" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffc56b" /><stop offset="1" stop-color="#f08a1c" /></linearGradient>
                      <linearGradient id="df-gO" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4be8b5" /><stop offset="1" stop-color="#12a67a" /></linearGradient>
                      <filter id="df-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="9" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                      <marker id="df-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 9 5 1 9z" fill="#8d82ff" /></marker>
                    </defs>

                    <path v-for="e in dfEdges" :key="e.id" :id="'df-' + e.id" :d="e.d" class="df-edge" :class="{ 'df-edge--on': dfEdgeOn(e.id), 'df-dim': dfEdgeDim(e.id) }" :style="dfEdgeOn(e.id) ? { stroke: DF_ROUTES[dfMode].color } : null" marker-end="url(#df-arr)" />

                    <g v-for="l in dfLabels" :key="l.id" class="df-lbl" :class="{ 'df-dim': dfLabelDim(l.id) }">
                      <rect :x="l.x - 23" :y="l.y - 12" width="46" height="24" rx="12" />
                      <text :x="l.x" :y="l.y + 1">{{ l.text }}</text>
                    </g>

                    <g class="df-node" :class="{ 'df-dim': dfNodeDim('start') }" filter="url(#df-glow)"><rect x="296" y="40" width="168" height="50" rx="25" fill="url(#df-gP)" /><text x="380" y="65">User Logs In</text></g>
                    <g class="df-node" :class="{ 'df-dim': dfNodeDim('d1') }" filter="url(#df-glow)"><polygon points="380,138 500,210 380,282 260,210" fill="url(#df-gP)" stroke="url(#df-gP)" stroke-width="10" stroke-linejoin="round" /><text x="380" y="210">Clear North Star?</text></g>
                    <g class="df-node" :class="{ 'df-dim': dfNodeDim('d2') }" filter="url(#df-glow)"><polygon points="220,358 340,430 220,502 100,430" fill="url(#df-gP)" stroke="url(#df-gP)" stroke-width="10" stroke-linejoin="round" /><text x="220" y="430">Progressive Disclosure?</text></g>
                    <g class="df-node" :class="{ 'df-dim': dfNodeDim('ov') }"><rect x="510" y="428" width="160" height="46" rx="14" fill="url(#df-gD)" /><text x="590" y="451">Overwhelmed</text></g>
                    <g class="df-node" :class="{ 'df-dim': dfNodeDim('cog') }"><rect x="30" y="578" width="160" height="46" rx="14" fill="url(#df-gW)" /><text x="110" y="601">Cognitive Load</text></g>
                    <g class="df-node" :class="{ 'df-dim': dfNodeDim('ds') }" filter="url(#df-glow)"><rect x="260" y="578" width="160" height="46" rx="14" fill="url(#df-gO)" /><text x="340" y="601">Decision Surface</text></g>
                    <g class="df-node df-node--term" :class="{ 'df-dim': dfNodeDim('sup') }"><rect x="30" y="718" width="160" height="46" rx="14" fill="#17172f" stroke="#f08a1c" stroke-width="1.5" /><text x="110" y="741">Support Tickets</text></g>
                    <g class="df-node df-node--term" :class="{ 'df-dim': dfNodeDim('ret') }"><rect x="260" y="718" width="160" height="46" rx="14" fill="#17172f" stroke="#12a67a" stroke-width="1.5" /><text x="340" y="741">Retention</text></g>
                    <g class="df-node df-node--term" :class="{ 'df-dim': dfNodeDim('churn') }"><rect x="510" y="718" width="160" height="46" rx="14" fill="#17172f" stroke="#e63b57" stroke-width="1.5" /><text x="590" y="741">Churn</text></g>

                    <circle id="df-dot-happy" class="df-dot" r="6" fill="#2dd4a0" style="color:#2dd4a0;display:none" />
                    <circle id="df-dot-friction" class="df-dot" r="6" fill="#ffb347" style="color:#ffb347;display:none" />
                    <circle id="df-dot-churn" class="df-dot" r="6" fill="#ff5d73" style="color:#ff5d73;display:none" />
                  </svg>
                </div>

                <div class="df-legend">
                  <span><b style="background:#7c6cff"></b>Step / decision</span>
                  <span><b style="background:#ff5d73"></b>Risk</span>
                  <span><b style="background:#ffb347"></b>Friction</span>
                  <span><b style="background:#2dd4a0"></b>Success</span>
                </div>
              </div>
            </div>

            <!-- PLAYGROUND -->
            <div class="my-16 p-6 md:p-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] no-print" data-aos="fade-up">
              <div class="mb-6">
                <h3 class="text-xl font-extrabold text-[color:var(--ink)] m-0">Explore the 5 Layers</h3>
                <p class="text-[13px] text-[color:var(--ink-soft)] mt-1 m-0">Click any layer to see it in action</p>
              </div>

              <div class="flex flex-col gap-2 mb-5">
                <button v-for="layer in playgroundLayers" :key="layer.id" type="button" @click="activeLayer = layer.id" :class="['group p-4 rounded-xl text-left transition-all border flex items-center gap-3 cursor-pointer w-full', activeLayer === layer.id ? 'bg-gradient-to-r from-[color:var(--accent-1)]/8 to-[color:var(--accent-2)]/5 border-[color:var(--accent-1)] shadow-[0_4px_16px_-4px_rgba(109,94,240,0.2)]' : 'bg-[color:var(--input-bg)] border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] hover:bg-[color:var(--accent-1)]/5 hover:-translate-y-0.5']" :aria-pressed="activeLayer === layer.id">
                  <span :class="['w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-black shrink-0 transition-all', activeLayer === layer.id ? 'bg-[color:var(--accent-1)] text-white' : 'bg-[color:var(--card-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] group-hover:bg-[color:var(--accent-1)] group-hover:text-white group-hover:border-[color:var(--accent-1)]']">{{ layer.id }}</span>
                  <span class="text-[14px] font-bold text-[color:var(--ink)] flex-1">{{ layer.title }}</span>
                  <Icon name="lucide:chevron-right" class="w-4 h-4 shrink-0 transition-all" :class="activeLayer === layer.id ? 'text-[color:var(--accent-1)] translate-x-0.5' : 'text-[color:var(--card-border)] group-hover:text-[color:var(--accent-1)] group-hover:translate-x-0.5'" />
                </button>
              </div>

              <div class="p-6 bg-gradient-to-br from-[color:var(--accent-1)]/5 to-[color:var(--accent-2)]/2 rounded-[18px] min-h-[200px] flex flex-col items-center justify-center text-center transition-all">
                <div v-html="activeLayerPreview"></div>
              </div>
            </div>

            <!-- INTERACTIVE TOOL -->
            <div id="decision-tool" class="my-16 p-8 bg-gradient-to-br from-[color:var(--accent-1)]/5 to-[color:var(--accent-2)]/5 border-2 border-[color:var(--accent-1)]/30 rounded-[24px] scroll-mt-32 no-print" data-aos="fade-up">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-[color:var(--accent-1)] text-white flex items-center justify-center">
                  <Icon name="lucide:target" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="text-xl font-extrabold text-[color:var(--ink)] m-0 leading-tight">Test Your Own Dashboard</h3>
                  <p class="text-[13px] text-[color:var(--ink-soft)] m-0 mt-0.5">Answer 5 questions. Get an instant verdict.</p>
                </div>
              </div>

              <div class="flex flex-col gap-5">
                <div v-for="(question, idx) in toolQuestions" :key="idx" class="flex flex-col gap-2">
                  <label class="text-[14px] font-bold text-[color:var(--ink)]">{{ idx + 1 }}. {{ question.text }}</label>
                  <div class="flex flex-wrap gap-2">
                    <button v-for="option in question.options" :key="option.value" type="button" @click="toolAnswers[question.key] = option.value" class="px-4 py-2 rounded-full text-[13px] font-bold border transition-all cursor-pointer" :class="toolAnswers[question.key] === option.value ? 'bg-[color:var(--accent-1)] text-white border-[color:var(--accent-1)]' : 'bg-white border-[color:var(--card-border)] text-[color:var(--ink-soft)] hover:border-[color:var(--accent-1)]'">{{ option.label }}</button>
                  </div>
                </div>

                <button type="button" @click="evaluateTool" :disabled="!toolComplete" class="mt-4 self-start px-8 py-3 rounded-full bg-[color:var(--ink)] text-white font-bold text-[14px] hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">Get My Verdict</button>

                <Transition name="fade">
                  <div v-if="toolVerdict" class="mt-4 p-6 rounded-2xl border-2" :class="{ 'bg-red-500/10 border-red-500/30': toolVerdict.level === 'critical', 'bg-amber-500/10 border-amber-500/30': toolVerdict.level === 'warning', 'bg-emerald-500/10 border-emerald-500/30': toolVerdict.level === 'healthy' }">
                    <div class="flex items-center gap-3 mb-2">
                      <Icon :name="toolVerdict.level === 'critical' ? 'lucide:alert-triangle' : toolVerdict.level === 'warning' ? 'lucide:alert-circle' : 'lucide:check-circle'" class="w-6 h-6 shrink-0" :class="{ 'text-red-500': toolVerdict.level === 'critical', 'text-amber-500': toolVerdict.level === 'warning', 'text-emerald-500': toolVerdict.level === 'healthy' }" />
                      <span class="text-lg font-extrabold text-[color:var(--ink)]">{{ toolVerdict.title }}</span>
                    </div>
                    <p class="text-[15px] leading-relaxed m-0 text-[color:var(--ink-soft)]">{{ toolVerdict.message }}</p>
                  </div>
                </Transition>
              </div>
            </div>

            <!-- SECTION 3 -->
            <h2 id="one-metric" data-section="one-metric" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">The ONE Metric Rule</h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]"><strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> The ONE Metric Rule dictates that a dashboard should highlight a single, primary North Star metric above the fold. Supporting data should only appear to contextualize this primary metric.</p>
            </div>

            <p class="mb-7" data-aos="fade-up">Companies like <strong class="text-[color:var(--ink)]">Linear</strong> and <strong class="text-[color:var(--ink)]">Notion</strong> excel at this. When you open Linear, you see your immediate, actionable tasks — not a spreadsheet of every project ever created.</p>

            <p class="text-[21px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10" data-aos="fade-up">If you highlight three things, the user focuses on zero.</p>

            <!-- SECTION 4 -->
            <h2 id="progressive" data-section="progressive" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">Progressive Disclosure in Action</h2>

            <p class="mb-7" data-aos="fade-up">Instead of displaying a 20-column data table on the main dashboard, show a summarized 3-column card view. Provide a clear, high-contrast "View Full Table" button.</p>

            <!-- BEFORE/AFTER SLIDER -->
            <div class="my-12 rounded-[24px] overflow-hidden border border-[color:var(--card-border)] bg-[color:var(--card-bg)] no-print" data-aos="fade-up">
              <div class="p-6 border-b border-[color:var(--card-border)] flex items-center justify-between flex-wrap gap-3">
                <h3 class="text-[1.1rem] font-extrabold text-[color:var(--ink)] m-0">Progressive Disclosure: Before vs After</h3>
                <span class="font-mono text-[11px] text-[color:var(--ink-soft)] uppercase tracking-widest">Drag the slider ⇔</span>
              </div>

              <div ref="baContainer" class="relative w-full h-[400px] overflow-hidden select-none cursor-ew-resize" @mousedown="startDrag" @touchstart="startDrag">
                <div class="absolute inset-0 p-10 flex items-center justify-center" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02));">
                  <div class="max-w-[300px] w-full">
                    <div class="bg-white border border-[color:var(--card-border)] rounded-xl p-7 text-center">
                      <div class="text-[10px] font-mono uppercase tracking-widest text-[color:var(--ink-soft)] mb-2">North Star</div>
                      <div class="text-[32px] font-black text-[color:var(--ink)]">7,404</div>
                    </div>
                  </div>
                </div>

                <div class="absolute inset-0 p-10 flex items-center justify-center" :style="{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.02))', clipPath: `inset(0 ${100 - baPosition}% 0 0)` }">
                  <div class="grid grid-cols-3 gap-3 w-full max-w-[500px]">
                    <div v-for="i in 6" :key="'before-' + i" class="bg-white border border-[color:var(--card-border)] rounded-xl p-4 text-center">
                      <div class="text-[10px] font-mono uppercase tracking-widest text-[color:var(--ink-soft)] mb-1">Metric {{ i }}</div>
                      <div class="text-[20px] font-black text-[color:var(--ink)]">{{ (i * 1234).toLocaleString() }}</div>
                    </div>
                  </div>
                </div>

                <div class="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white border border-[color:var(--card-border)] text-[11px] font-extrabold uppercase tracking-widest text-red-500 z-20">Before</div>
                <div class="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white border border-[color:var(--card-border)] text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 z-20">After</div>

                <div class="absolute top-0 bottom-0 w-0.5 bg-[color:var(--accent-1)] z-20 pointer-events-none" :style="{ left: baPosition + '%' }">
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-[color:var(--accent-1)] shadow-lg flex items-center justify-center text-[color:var(--accent-1)] font-black text-[18px]">⇔</div>
                </div>
              </div>
            </div>

            <ul class="flex flex-col gap-3 my-8 pl-0 list-none">
              <li v-for="(item, i) in progressiveItems" :key="i" class="flex gap-3 items-start" data-aos="fade-up">
                <Icon name="lucide:chevron-right" class="w-5 h-5 text-[color:var(--accent-1)] shrink-0 mt-1" />
                <span v-html="item"></span>
              </li>
            </ul>

            <!-- SECTION 5 -->
            <h2 id="proof" data-section="proof" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">The Proof: Qompyl App Case Study</h2>

            <p class="mb-7" data-aos="fade-up">Applying this framework to Qompyl's trading app resulted in <strong class="text-[color:var(--ink)]">60+ documented states</strong> with <strong class="text-[color:var(--ink)]">zero component redesigns</strong> post-handoff.</p>

            <!-- ROI CALCULATOR -->
            <div class="my-12 p-6 md:p-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] no-print" data-aos="fade-up">
              <div class="text-center mb-8">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] text-[10px] font-black uppercase tracking-widest mb-3">
                  <Icon name="lucide:calculator" class="w-3 h-3" />
                  Interactive
                </div>
                <h3 class="text-[1.4rem] font-black text-[color:var(--ink)] m-0 mb-2">Calculate Your Dashboard Churn Cost</h3>
                <p class="text-[14px] text-[color:var(--ink-soft)] m-0">See the real cost of a cluttered dashboard</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="flex flex-col gap-2">
                  <label class="text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Monthly Users</label>
                  <input v-model.number="roi.users" type="number" min="0" class="px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl font-bold text-[15px] text-[color:var(--ink)] outline-none focus:border-[color:var(--accent-1)] transition-colors" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Day-1 Churn Rate (%)</label>
                  <input v-model.number="roi.churn" type="number" min="0" max="100" class="px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl font-bold text-[15px] text-[color:var(--ink)] outline-none focus:border-[color:var(--accent-1)] transition-colors" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Avg LTV ($)</label>
                  <input v-model.number="roi.ltv" type="number" min="0" class="px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl font-bold text-[15px] text-[color:var(--ink)] outline-none focus:border-[color:var(--accent-1)] transition-colors" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-[18px] bg-gradient-to-br from-[color:var(--accent-1)]/8 to-[color:var(--accent-2)]/5 border border-[color:var(--accent-1)]/20 mb-8">
                <div class="text-center">
                  <div class="text-[11px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-2">Monthly Cost</div>
                  <div class="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-red-500 tracking-tight">{{ formatCurrency(roiMonthly) }}</div>
                </div>
                <div class="text-center">
                  <div class="text-[11px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-2">Annual Cost</div>
                  <div class="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-red-500 tracking-tight">{{ formatCurrency(roiAnnual) }}</div>
                </div>
              </div>

              <div class="text-center">
                <NuxtLink to="/contact" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white font-extrabold text-[15px] shadow-[0_8px_24px_-6px_rgba(109,94,240,0.5)] hover:shadow-[0_12px_32px_-6px_rgba(109,94,240,0.6)] hover:-translate-y-0.5 transition-all">
                  <Icon name="lucide:target" class="w-5 h-5" />
                  Get a Free Dashboard Audit
                  <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NuxtLink>
                <p class="text-[12px] text-[color:var(--ink-soft)] mt-3 m-0">Takes 5 minutes · No pitch · No strings</p>
              </div>
            </div>

            <div class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 my-10" data-aos="fade-up">
              <div class="text-[10px] font-bold text-[color:var(--ink-soft)] uppercase tracking-widest mb-4">What this meant for the team</div>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none">
                <li v-for="(item, i) in teamResults" :key="i" class="flex items-start gap-3 text-sm">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
                  <span v-html="item"></span>
                </li>
              </ul>
            </div>

            <p class="mb-7" data-aos="fade-up">
              → Read the full
              <NuxtLink to="/projects/qompyl-app-case-study" class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors">Qompyl App Case Study</NuxtLink>
              to see the designs in action.
            </p>

            <!-- SECTION 6 -->
            <h2 id="impact" data-section="impact" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">The Business Impact of Dashboard Clarity</h2>

            <div class="overflow-x-auto my-10 rounded-[14px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)]" data-aos="fade-up">
              <table class="w-full text-[13.5px] text-left">
                <thead class="bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)]">
                  <tr>
                    <th class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]">Impact Area</th>
                    <th class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--accent-text)]">Result</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[color:var(--card-border)]">
                  <tr v-for="(row, i) in impactTable" :key="i">
                    <td class="px-5 py-4 font-bold text-[color:var(--ink)]">{{ row.area }}</td>
                    <td class="px-5 py-4">{{ row.result }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- MEDIA SECTION -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-12 no-print" data-aos="fade-up">
              <button type="button" @click="openVideoModal" class="group p-6 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] flex items-center gap-4 text-left hover:border-[color:var(--accent-1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(109,94,240,0.25)] transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white flex items-center justify-center shrink-0">
                  <Icon name="lucide:play" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-black text-[color:var(--ink)] m-0 mb-1">Watch the Explainer</div>
                  <div class="text-[12px] text-[color:var(--ink-soft)] m-0">4-min video walkthrough</div>
                </div>
              </button>

              <button type="button" @click="openAudioModal" class="group p-6 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] flex items-center gap-4 text-left hover:border-[color:var(--accent-1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(109,94,240,0.25)] transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white flex items-center justify-center shrink-0">
                  <Icon name="lucide:mic" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-black text-[color:var(--ink)] m-0 mb-1">Listen to the Audio</div>
                  <div class="text-[12px] text-[color:var(--ink-soft)] m-0">8-min podcast · Spotify</div>
                </div>
              </button>
            </div>

            <!-- SECTION 7 -->
            <h2 id="baseline" data-section="baseline" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">Baseline Metrics to Verify</h2>

            <p class="mb-7" data-aos="fade-up">Do not guess; measure. Before initiating a dashboard redesign, establish your baseline using tools like <strong class="text-[color:var(--ink)]">Amplitude</strong> or <strong class="text-[color:var(--ink)]">Pendo</strong>.</p>

            <ul class="flex flex-col gap-3 my-8 pl-0 list-none">
              <li v-for="(item, i) in baselineMetrics" :key="i" class="flex gap-3 items-start" data-aos="fade-up">
                <Icon :name="item.icon" class="w-5 h-5 text-[color:var(--accent-1)] shrink-0 mt-1" />
                <span v-html="item.text"></span>
              </li>
            </ul>

            <!-- FEEDBACK -->
            <div class="my-16 p-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] text-center no-print" data-aos="fade-up">
              <template v-if="!feedbackSubmitted">
                <h3 class="text-lg font-extrabold text-[color:var(--ink)] mb-4">Was this article useful?</h3>
                <div class="flex items-center justify-center gap-4 mb-4">
                  <button type="button" @click="submitFeedback(true)" class="group flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-600 font-bold hover:bg-emerald-500/20 hover:-translate-y-0.5 transition-all cursor-pointer">
                    <Icon name="lucide:thumbs-up" class="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Yes
                  </button>
                  <button type="button" @click="submitFeedback(false)" class="group flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 border-2 border-red-500/30 text-red-500 font-bold hover:bg-red-500/20 hover:-translate-y-0.5 transition-all cursor-pointer">
                    <Icon name="lucide:thumbs-down" class="w-5 h-5 group-hover:scale-110 transition-transform" />
                    No
                  </button>
                </div>
                <p class="text-[12px] text-[color:var(--ink-soft)] italic">One click. No email required. Just helps me write better.</p>
              </template>
              <template v-else>
                <Icon :name="feedbackValue ? 'lucide:heart' : 'lucide:lightbulb'" class="w-8 h-8 mx-auto mb-3" :class="feedbackValue ? 'text-[color:var(--accent-1)]' : 'text-amber-500'" />
                <p class="font-bold text-[color:var(--ink)] m-0">Thanks for the feedback.</p>
                <p class="text-[13px] text-[color:var(--ink-soft)] mt-1 m-0">{{ feedbackValue ? "Glad it helped." : "I'll work on it." }}</p>
              </template>
            </div>

            <!-- FAQ -->
            <h2 id="faq" data-section="faq" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[80px] mb-6 pb-[18px] scroll-mt-32" data-aos="fade-up">FAQ</h2>

            <div class="flex flex-col border-b border-[color:var(--card-border)] mb-20" data-aos="fade-up">
              <div v-for="(item, index) in faqItems" :key="index" class="border-t border-[color:var(--card-border)]">
                <button type="button" @click="toggleFaq(index)" class="print-keep w-full py-6 flex items-center justify-between text-left group transition-colors cursor-pointer" :aria-expanded="activeFaq === index">
                  <span class="text-[1.1rem] md:text-[1.2rem] font-bold text-[color:var(--ink)] group-hover:text-[color:var(--accent-1)] transition-colors">{{ item.question }}</span>
                  <span class="no-print w-8 h-8 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink-soft)] transition-all duration-300 shrink-0 ml-4" :class="activeFaq === index ? 'rotate-45 bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white border-transparent' : 'group-hover:border-[color:var(--accent-1)] group-hover:text-[color:var(--accent-1)]'">
                    <Icon name="lucide:plus" class="w-4 h-4" />
                  </span>
                </button>
                <div class="grid transition-all duration-300 ease-in-out" :class="activeFaq === index ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'">
                  <div class="overflow-hidden">
                    <p class="text-[1.05rem] leading-[1.7] text-[color:var(--ink-soft)] pr-8 md:pr-12 m-0">{{ item.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- NEWSLETTER -->
            <div class="no-print" data-aos="fade-up">
              <NewsletterForm />
            </div>

            <!-- CTA -->
            <div class="mt-24 pt-10 border-t border-[color:var(--card-border)] no-print">
              <PlaybookCTA
                title="Send me a screenshot of your dashboard"
                description="I'll record a free, 5-minute Loom video identifying 3 hierarchy fixes you can implement immediately."
                button-text="Send Screenshot"
                :deliverables="[
                  { code: 'screenshot/', text: 'Share your primary dashboard' },
                  { code: 'loom/', text: '5-min Loom with 3 fixes' },
                  { code: 'no/', text: 'No pitch, no strings' },
                ]"
                :target-metric="70"
              />
            </div>

          </article>

          <!-- SIDEBAR -->
          <aside class="hidden xl:flex flex-col gap-7 xl:col-span-4 sticky top-[100px] no-print">
            <!-- ═══ MINI PLAYER (if media exists for this article) ═══ -->
          <MiniPlayer
            v-if="articleMedia"
            :item="articleMedia"
            @play="openAudioModal"
          />
            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-[color:var(--accent-1)] rounded-3xl p-6" data-aos="fade-up">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:zap" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  <span class="text-[10px] font-extrabold uppercase tracking-widest text-[color:var(--accent-1)]">TL;DR</span>
                </div>
                <button type="button" @click="takeawaysCollapsed = !takeawaysCollapsed" class="text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] cursor-pointer" :aria-label="takeawaysCollapsed ? 'Expand' : 'Collapse'">
                  <Icon :name="takeawaysCollapsed ? 'lucide:chevron-down' : 'lucide:chevron-up'" class="w-4 h-4" />
                </button>
              </div>

              <Transition name="fade">
                <ul v-show="!takeawaysCollapsed" class="flex flex-col gap-3 text-[13px] leading-relaxed m-0 p-0 list-none">
                  <li class="flex gap-2"><span class="text-[color:var(--accent-1)] shrink-0 font-bold">01</span><span>A dashboard is not a report — it is a <strong class="text-[color:var(--ink)]">Decision Surface</strong>.</span></li>
                  <li class="flex gap-2"><span class="text-[color:var(--accent-1)] shrink-0 font-bold">02</span><span><strong class="text-[color:var(--ink)]">ONE Metric Rule:</strong> one North Star metric above the fold.</span></li>
                  <li class="flex gap-2"><span class="text-[color:var(--accent-1)] shrink-0 font-bold">03</span><span><strong class="text-[color:var(--ink)]">5 Layers:</strong> North Star → Health → Alerts → Drill-Down → History.</span></li>
                </ul>
              </Transition>

              <a href="#decision-tool" class="mt-4 inline-flex items-center gap-1 text-[12px] font-bold text-[color:var(--accent-1)] hover:underline">Test your dashboard <Icon name="lucide:arrow-down" class="w-3 h-3" /></a>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8" data-aos="fade-up">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-5">On this page</span>
              <ul class="flex flex-col gap-3 m-0 p-0 list-none">
                <li v-for="section in sections" :key="section.id">
                  <button type="button" @click="scrollToSection(section.id)" class="w-full text-left text-[0.92rem] font-semibold pl-3.5 border-l-2 transition-all flex items-center gap-2 cursor-pointer" :class="activeSection === section.id ? 'text-[color:var(--ink)] border-[color:var(--accent-1)]' : 'text-[color:var(--ink-soft)] border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)]'">
                    <Icon :name="visitedSections.includes(section.id) ? 'lucide:check-circle-2' : 'lucide:circle'" class="w-3.5 h-3.5 shrink-0" :class="visitedSections.includes(section.id) ? 'text-emerald-500' : 'text-[color:var(--card-border)]'" />
                    {{ section.label }}
                  </button>
                </li>
              </ul>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8" data-aos="fade-up">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-5">Share</span>
              <div class="flex gap-3">
                <button type="button" @click="shareArticle('twitter')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all cursor-pointer" aria-label="Share on X">
                  <Icon name="simple-icons:x" class="w-4 h-4" />
                </button>
                <button type="button" @click="shareArticle('linkedin')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all cursor-pointer" aria-label="Share on LinkedIn">
                  <Icon name="lucide:linkedin" class="w-4 h-4" />
                </button>
                <button type="button" @click="shareArticle('copy')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center transition-all cursor-pointer" :class="copied ? 'bg-emerald-500 text-white border-transparent' : 'text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent'" aria-label="Copy link">
                  <Icon :name="copied ? 'lucide:check' : 'lucide:link'" class="w-4 h-4" />
                </button>
              </div>
              <button type="button" @click="copyShortLink" class="mt-5 w-full text-left text-[12px] font-mono text-[color:var(--accent-1)] hover:underline truncate cursor-pointer" :title="copiedLink ? 'Copied!' : 'Click to copy'">
                {{ copiedLink ? '✓ Copied!' : (shortLink || 'Copy link') }}
              </button>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6" data-aos="fade-up">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-4">Shortcuts</span>
              <ul class="flex flex-col gap-2 m-0 p-0 list-none text-[12px]">
                <li class="flex items-center justify-between text-[color:var(--ink-soft)]"><span>Focus Mode</span><kbd class="px-2 py-0.5 rounded bg-[color:var(--input-bg)] border border-[color:var(--card-border)] font-mono text-[11px]">⌘K</kbd></li>
                <li class="flex items-center justify-between text-[color:var(--ink-soft)]"><span>Listen</span><kbd class="px-2 py-0.5 rounded bg-[color:var(--input-bg)] border border-[color:var(--card-border)] font-mono text-[11px]">⌘L</kbd></li>
                <li class="flex items-center justify-between text-[color:var(--ink-soft)]"><span>Close Modal</span><kbd class="px-2 py-0.5 rounded bg-[color:var(--input-bg)] border border-[color:var(--card-border)] font-mono text-[11px]">Esc</kbd></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import MiniPlayer from '~/components/media/MiniPlayer.vue'
import { useArticleActions } from '~/composables/useArticleActions'

const mounted = ref(false)

definePageMeta({ layout: 'playbook', backLabel: 'Playbooks', backTo: '/blog' })

// ═════════════════════════════════════════════════════════
// FAQ ITEMS — لازم تتعرف قبل usePageMeta ✅
// ═════════════════════════════════════════════════════════
const activeFaq = ref(0)
const toggleFaq = (index) => { activeFaq.value = activeFaq.value === index ? null : index }

const faqItems = [
  { question: 'Why do SaaS dashboards overwhelm users?', answer: 'SaaS dashboards overwhelm users primarily due to a lack of information hierarchy and the "stakeholder compromise" effect, where every feature request is added to the main screen without prioritization. When a dashboard attempts to serve every possible user persona simultaneously, it serves none of them effectively.' },
  { question: 'What is the ONE Metric Rule?', answer: 'The ONE Metric Rule states that the primary view of any dashboard should highlight exactly one North Star metric above the fold. This metric must directly align with the user\'s primary goal for that specific session.' },
  { question: 'How many metrics should a dashboard show?', answer: 'A highly effective dashboard typically surfaces 3 to 5 high-level metrics above the fold, with only one acting as the primary North Star. Use progressive disclosure for the rest.' },
  { question: 'How can product teams identify "zombie features"?', answer: 'Analyze behavioral data through Pendo or Amplitude. Look for UI elements with high visibility but near-zero interaction rates over 30-60 days. Cross-reference with support tickets. Hide behind "More" menu; if no complaints arise in 2 weeks, deprecate.' },
  { question: 'How do you defend your ONE metric to a CEO?', answer: 'Speak business outcomes, not aesthetics. Frame around focus and conversion. Propose a short A/B test comparing cluttered vs. streamlined — let the improvement in Time-to-Value and retention speak.' },
]

// ═════════════════════════════════════════════════════════
// SEO — بعد faqItems ✅ ومعه faqItems للـ FAQ Schema
// ═════════════════════════════════════════════════════════
usePageMeta({
  title: 'Why Your SaaS Dashboard is Overwhelming — The Decision Surface Framework',
  description: 'Most SaaS dashboards fail because they are data dumps, not decision engines. The Decision Surface Framework to reduce Day-1 churn.',
  keywords: ['saas dashboard ux', 'dashboard design principles', 'progressive disclosure', 'decision surface framework', 'day-1 churn', 'one metric rule'],
  ogType: 'article',
  ogImage: 'https://mamdouh-ghaneemy.com/images/blog/saas-dashboard-cover.png',
  article: { publishedTime: '2026-09-28T00:00:00Z', section: 'SaaS UX', tags: ['SaaS', 'Dashboard', 'UX', 'Churn'] },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Playbooks', url: '/blog' },
    { name: 'SaaS Dashboard', url: '/blog/saas-dashboard-overwhelming' },
  ],
  faqItems,  // ✅ مضاف — يفعّل FAQ Schema (JSON-LD)
})

// ═════════════════════════════════════════════════════════
// MEDIA from Supabase
// ✅ FIX (P2): استخدام transform بدل mutation مباشر
// ═════════════════════════════════════════════════════════
const { fetchByArticle } = useMedia()

const { data: articleMedia } = await useAsyncData(
  'article-media',
  () => fetchByArticle('saas-dashboard-overwhelming'),
  {
    transform: (items) =>
      items?.find(m => m.media_type === 'podcast') || null,
  }
)

const focusMode = ref(false)
const copied = ref(false)
const toasts = ref([])
let toastIdCounter = 0
const showToast = (message, duration = 2500) => {
  if (typeof window === 'undefined') return
  const id = ++toastIdCounter
  toasts.value.push({ id, message })
  setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, duration)
}

const {
  copiedMd,
  copiedLink,
  speechPlaying,
  shortLink,
  copyAsMarkdown,
  copyShortLink,
  toggleSpeech,
  printArticle
} = useArticleActions({
  showToast,
  focusMode
})

const toggleFocusMode = () => {
  focusMode.value = !focusMode.value
  showToast(focusMode.value ? 'Focus mode ON' : 'Focus mode OFF')
}

const readingStats = { minutes: 12, words: 4200 }
const takeawaysCollapsed = ref(false)

const culprits = [
  { num: '01', title: 'The "Kitchen Sink" Syndrome', desc: 'Stakeholders demand every possible metric be visible to justify their department. Result: analytics show users ignore <strong class="text-[color:var(--ink)]">70% of widgets</strong> on a typical overloaded dashboard.' },
  { num: '02', title: 'Equal Visual Weight', desc: 'Same typography, color, and spacing applied to primary KPIs and secondary metadata. If every element is loud, the user tunes out entirely.' },
  { num: '03', title: 'Missing Context', desc: '"42 Active Users" means nothing without context. Is 42 good? Bad? Up from last week? Static data without trends forces the user to do analytical heavy lifting.' },
]

const progressiveItems = [
  '<strong class="text-[color:var(--ink)]">Accordion menus</strong> for secondary settings.',
  '<strong class="text-[color:var(--ink)]">Hover states</strong> that reveal additional data points.',
  '<strong class="text-[color:var(--ink)]">Modal windows</strong> so the user never loses their place.',
]

const teamResults = [
  '<strong class="text-[color:var(--ink)]">Zero rebuilds.</strong> The design system held through beta.',
  '<strong class="text-[color:var(--ink)]">Faster iteration.</strong> The team extended the system themselves.',
  '<strong class="text-[color:var(--ink)]">Fewer decisions.</strong> Everything pre-solved in design.',
  '<strong class="text-[color:var(--ink)]">Beta-ready.</strong> Shipped with the product, not after.',
]

const impactTable = [
  { area: 'Support Costs', result: 'Fewer navigation-related tickets' },
  { area: 'Time-to-Value', result: 'Accelerated "Aha!" moment' },
  { area: 'Day-1 Churn', result: 'Reduced early abandonment' },
]

const baselineMetrics = [
  { icon: 'lucide:activity', text: '<strong class="text-[color:var(--ink)]">Feature Adoption Rate:</strong> % of users who click the primary CTA within 5 minutes.' },
  { icon: 'lucide:timer', text: '<strong class="text-[color:var(--ink)]">Time to First Action:</strong> seconds between login and first meaningful click.' },
  { icon: 'lucide:message-circle', text: '<strong class="text-[color:var(--ink)]">Support Ticket Volume:</strong> categorize tickets related to navigation or confusion.' },
]

const sketchCards = [
  { title: 'The 3 Culprits', desc: 'Kitchen Sink, Equal Weight, No Context', target: 'culprits', svg: `<svg viewBox="0 0 120 60" class="w-full h-full"><rect x="8" y="20" width="28" height="28" rx="4" fill="#6d5ef0" opacity="0.3"/><rect x="42" y="20" width="28" height="28" rx="4" fill="#6d5ef0" opacity="0.55"/><rect x="76" y="20" width="28" height="28" rx="4" fill="#6d5ef0" opacity="0.8"/></svg>` },
  { title: '5 Layers', desc: 'North Star → Health → Alerts → Drill → Context', target: 'framework', svg: `<svg viewBox="0 0 120 60" class="w-full h-full"><rect x="20" y="6" width="80" height="8" rx="2" fill="#6d5ef0" opacity="0.85"/><rect x="25" y="18" width="70" height="8" rx="2" fill="#6d5ef0" opacity="0.65"/><rect x="30" y="30" width="60" height="8" rx="2" fill="#6d5ef0" opacity="0.45"/><rect x="35" y="42" width="50" height="8" rx="2" fill="#6d5ef0" opacity="0.25"/></svg>` },
  { title: 'ONE Metric Rule', desc: 'Highlight one thing, not three', target: 'one-metric', svg: `<svg viewBox="0 0 120 60" class="w-full h-full"><rect x="35" y="15" width="50" height="30" rx="6" fill="#10b981" opacity="0.25"/><text x="60" y="37" text-anchor="middle" font-size="18" font-weight="900" fill="#10b981">1</text></svg>` },
  { title: 'Proof', desc: 'Qompyl: 60+ states, 0 rebuilds', target: 'proof', svg: `<svg viewBox="0 0 120 60" class="w-full h-full"><text x="60" y="40" text-anchor="middle" font-size="26" font-weight="900" fill="#6d5ef0">60+</text></svg>` },
]

const sketchSection = ref(null)
const downloadingSketch = ref(false)

const downloadSketch = async () => {
  if (typeof window === 'undefined' || !sketchSection.value) return
  downloadingSketch.value = true
  try {
    const { toPng } = await import('html-to-image')
    const dataUrl = await toPng(sketchSection.value, {
      cacheBust: true, pixelRatio: 2, backgroundColor: '#ffffff',
      filter: (node) => {
        if (!node || typeof node !== 'object') return true
        if (node?.dataset?.noExport === 'true') return false
        return true
      },
      skipFonts: true,
    })
    const link = document.createElement('a')
    link.download = `saas-dashboard-visual-summary-${Date.now()}.png`
    link.href = dataUrl
    link.click()
    showToast('Image downloaded!')
  } catch (err) {
    console.error('Download failed:', err)
    showToast('Download failed')
  } finally {
    downloadingSketch.value = false
  }
}

const shareSketch = async () => {
  if (typeof window === 'undefined') return
  const shareData = {
    title: 'Why Your SaaS Dashboard is Overwhelming — The Decision Surface Framework',
    text: 'A one-page visual recap of the entire Decision Surface framework.',
    url: `${window.location.href}#framework`,
  }
  try {
    if (navigator.share && navigator.canShare?.(shareData)) {
      await navigator.share(shareData)
      showToast('Shared successfully!')
      return
    }
    await navigator.clipboard.writeText(shareData.url)
    showToast('Link copied to clipboard!')
  } catch (err) {
    if (err?.name !== 'AbortError') {
      console.error('Share failed:', err)
      showToast('Share failed')
    }
  }
}

// ═════════════════════════════════════════════════════════
// VIDEO MODAL — YouTube
// ═════════════════════════════════════════════════════════
const YOUTUBE_VIDEO_ID = 'zHsW9TqYBU0'
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

const showVideoModal = ref(false)

const youtubeEmbedUrl = computed(() =>
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?` +
  `rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&fs=1&color=white`
)

const openVideoModal = () => { showVideoModal.value = true }
const closeVideoModal = () => { showVideoModal.value = false }

// ═════════════════════════════════════════════════════════
// AUDIO MODAL — Spotify
// ═════════════════════════════════════════════════════════
const SPOTIFY_EPISODE_ID = '7idl11wBSF5RlHphDsrrzH'
const SPOTIFY_EPISODE_URL = `https://open.spotify.com/episode/${SPOTIFY_EPISODE_ID}`

const showAudioModal = ref(false)

const spotifyEmbedUrl = computed(() =>
  `https://open.spotify.com/embed/episode/${SPOTIFY_EPISODE_ID}?` +
  `utm_source=generator&theme=0`
)

const openAudioModal = () => { showAudioModal.value = true }
const closeAudioModal = () => { showAudioModal.value = false }

// CITATION
const showCitation = ref(false)
const citationFormats = [
  { id: 'apa', label: 'APA 7th', value: 'Ghaneemy, M. (2026). Why Your SaaS Dashboard is Overwhelming: The "Decision Surface" Framework. Retrieved from https://mamdouh-ghaneemy.com/blog/saas-dashboard-overwhelming' },
  { id: 'chicago', label: 'Chicago', value: 'Ghaneemy, Mamdouh. "Why Your SaaS Dashboard is Overwhelming." Last modified September 28, 2026. https://mamdouh-ghaneemy.com/blog/saas-dashboard-overwhelming.' },
  { id: 'bibtex', label: 'BibTeX', value: `@article{ghaneemy2026dashboard,\n  title={Why Your SaaS Dashboard is Overwhelming},\n  author={Ghaneemy, Mamdouh},\n  year={2026},\n  url={https://mamdouh-ghaneemy.com/blog/saas-dashboard-overwhelming}\n}` },
]

const copyCitation = async (text) => {
  if (typeof window === 'undefined') return
  try {
    await navigator.clipboard.writeText(text)
    showToast('Citation copied!')
  } catch (e) { showToast('Copy failed') }
}

// DECISION FLOW
const dfMode = ref('all')
const dfSvg = ref(null)

const dfTabs = [
  { key: 'all', label: 'All paths', color: null },
  { key: 'happy', label: 'Retention', color: '#2dd4a0' },
  { key: 'friction', label: 'Support load', color: '#ffb347' },
  { key: 'churn', label: 'Churn', color: '#ff5d73' },
]

const dfEdges = [
  { id: 'e1', d: 'M380 90V138' },
  { id: 'e2', d: 'M262 210C215 250 220 300 220 358' },
  { id: 'e3', d: 'M498 210C590 215 590 300 590 428' },
  { id: 'e4', d: 'M160 465C125 520 110 540 110 576' },
  { id: 'e5', d: 'M280 465C300 520 340 540 340 576' },
  { id: 'e6', d: 'M110 624V716' },
  { id: 'e7', d: 'M340 624V716' },
  { id: 'e8', d: 'M590 474V716' },
]

const dfLabels = [
  { id: 'l1', x: 218, y: 300, text: 'YES' },
  { id: 'l2', x: 560, y: 274, text: 'NO' },
  { id: 'l3', x: 108, y: 522, text: 'NO' },
  { id: 'l4', x: 324, y: 522, text: 'YES' },
]

const DF_ROUTES = {
  happy: { color: '#2dd4a0', edges: ['e1', 'e2', 'e5', 'e7'], nodes: ['start', 'd1', 'd2', 'ds', 'ret'], labels: ['l1', 'l4'] },
  friction: { color: '#ffb347', edges: ['e1', 'e2', 'e4', 'e6'], nodes: ['start', 'd1', 'd2', 'cog', 'sup'], labels: ['l1', 'l3'] },
  churn: { color: '#ff5d73', edges: ['e1', 'e3', 'e8'], nodes: ['start', 'd1', 'ov', 'churn'], labels: ['l2'] },
}

const dfNodeDim = (id) => dfMode.value !== 'all' && !DF_ROUTES[dfMode.value].nodes.includes(id)
const dfEdgeOn = (id) => dfMode.value !== 'all' && DF_ROUTES[dfMode.value].edges.includes(id)
const dfEdgeDim = (id) => dfMode.value !== 'all' && !dfEdgeOn(id)
const dfLabelDim = (id) => dfMode.value !== 'all' && !DF_ROUTES[dfMode.value].labels.includes(id)

let dfRaf = null
const initDecisionFlow = () => {
  const svg = dfSvg.value
  if (!svg || typeof window === 'undefined') return
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const SPEED = 150
  const PAUSE = 90

  const routes = Object.keys(DF_ROUTES).map((key, i) => {
    const paths = DF_ROUTES[key].edges.map((id) => svg.querySelector('#df-' + id))
    const lens = paths.map((p) => p.getTotalLength())
    return { key, paths, lens, total: lens.reduce((a, b) => a + b, 0), offset: i * 220, dot: svg.querySelector('#df-dot-' + key) }
  })

  const frame = (ts) => {
    routes.forEach((r) => {
      const active = dfMode.value === 'all' || dfMode.value === r.key
      if (!active) { r.dot.style.display = 'none'; return }
      const d = ((ts / 1000) * SPEED + r.offset) % (r.total + PAUSE)
      if (d > r.total) { r.dot.style.display = 'none'; return }
      let acc = 0
      for (let i = 0; i < r.paths.length; i++) {
        if (d <= acc + r.lens[i]) {
          const pt = r.paths[i].getPointAtLength(d - acc)
          r.dot.setAttribute('cx', pt.x)
          r.dot.setAttribute('cy', pt.y)
          r.dot.style.display = ''
          break
        }
        acc += r.lens[i]
      }
    })
    dfRaf = requestAnimationFrame(frame)
  }
  dfRaf = requestAnimationFrame(frame)
}

const stopDecisionFlow = () => {
  if (dfRaf) cancelAnimationFrame(dfRaf)
  dfRaf = null
}

const playgroundLayers = [
  { id: 1, title: 'North Star Metric' },
  { id: 2, title: 'Secondary Health Indicators' },
  { id: 3, title: 'Actionable Alerts' },
  { id: 4, title: 'Drill-Down Capabilities' },
  { id: 5, title: 'Historical Context' },
]

const activeLayer = ref(1)

const iconChart = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`
const iconTable = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`
const iconFilter = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`

const activeLayerPreview = computed(() => {
  const previews = {
    1: `<div class="inline-block bg-white border border-[color:var(--card-border)] rounded-2xl px-7 py-5 mb-3"><div class="text-[11px] font-mono uppercase tracking-widest text-[color:var(--ink-soft)] mb-2">North Star Metric</div><div class="text-[32px] font-black text-[color:var(--ink)]">$125,430</div><div class="text-[14px] font-bold text-emerald-500 mt-1">↑ 12% vs last month</div></div><p class="text-[13px] text-[color:var(--ink-soft)] m-0 max-w-md">Single most important number. Largest size. Highest contrast.</p>`,
    2: `<div class="grid grid-cols-2 gap-3 max-w-[400px] w-full mb-3"><div class="bg-white border border-[color:var(--card-border)] rounded-xl p-4"><div class="text-[10px] font-mono uppercase tracking-widest text-[color:var(--ink-soft)] mb-1">Active Subs</div><div class="text-[22px] font-black text-[color:var(--ink)]">8,452</div><div class="text-[12px] font-bold text-emerald-500 mt-0.5">↑ 6%</div></div><div class="bg-white border border-[color:var(--card-border)] rounded-xl p-4"><div class="text-[10px] font-mono uppercase tracking-widest text-[color:var(--ink-soft)] mb-1">Churn Rate</div><div class="text-[22px] font-black text-[color:var(--ink)]">2.4%</div><div class="text-[12px] font-bold text-emerald-500 mt-0.5">↓ 0.8%</div></div></div><p class="text-[13px] text-[color:var(--ink-soft)] m-0 max-w-md">2-3 metrics contextualize the North Star.</p>`,
    3: `<div class="flex flex-col gap-2 w-full max-w-[400px] mb-3"><div class="p-3 bg-red-500/10 border-l-[3px] border-red-500 rounded-md text-left text-[13px]"><strong class="text-red-500">Failed payments</strong> — 3</div><div class="p-3 bg-amber-500/10 border-l-[3px] border-amber-500 rounded-md text-left text-[13px]"><strong class="text-amber-600">Trial ending soon</strong> — 5</div><div class="p-3 bg-red-500/10 border-l-[3px] border-red-500 rounded-md text-left text-[13px]"><strong class="text-red-500">High churn spike</strong> — 1</div></div><p class="text-[13px] text-[color:var(--ink-soft)] m-0 max-w-md">Amber/red — used sparingly for anomalies.</p>`,
    4: `<div class="w-full max-w-[400px] text-left mb-3"><div class="p-3.5 bg-white border border-[color:var(--card-border)] rounded-xl mb-3 text-[14px] font-bold flex items-center gap-2"><span class="text-[color:var(--accent-1)]">${iconChart}</span><span>View Details</span><span class="ml-auto text-[color:var(--ink-soft)]">→</span></div><div class="grid grid-cols-2 gap-2 text-[12px]"><div class="p-2.5 bg-[color:var(--input-bg)] rounded-lg flex items-center gap-2"><span class="text-[color:var(--ink-soft)]">${iconTable}</span><span>Table</span></div><div class="p-2.5 bg-[color:var(--input-bg)] rounded-lg flex items-center gap-2"><span class="text-[color:var(--ink-soft)]">${iconFilter}</span><span>Filters</span></div></div></div><p class="text-[13px] text-[color:var(--ink-soft)] m-0 max-w-md">Complex data — hidden by default.</p>`,
    5: `<div class="bg-white border border-[color:var(--card-border)] rounded-2xl p-5 w-full max-w-[400px] mb-3"><div class="text-[10px] font-mono uppercase tracking-widest text-[color:var(--ink-soft)] mb-2">Revenue Trend</div><svg viewBox="0 0 300 60" class="w-full h-16"><path d="M0,45 Q50,40 75,30 T150,25 T225,15 T300,10" stroke="#6d5ef0" stroke-width="2" fill="none"/><path d="M0,45 Q50,40 75,30 T150,25 T225,15 T300,10 L300,60 L0,60 Z" fill="#6d5ef0" opacity="0.1"/></svg><div class="text-[12px] font-bold text-emerald-500 mt-2">vs. last month ↑ 12%</div></div><p class="text-[13px] text-[color:var(--ink-soft)] m-0 max-w-md">Trends, sparklines, or vs. last month comparisons.</p>`,
  }
  return previews[activeLayer.value] || ''
})

const toolQuestions = [
  { key: 'northStar', text: 'Does your dashboard have ONE primary metric above the fold?', options: [{ value: 'yes', label: 'Yes — One clear metric' }, { value: 'no', label: 'No — Multiple competing' }, { value: 'unsure', label: 'Not sure' }] },
  { key: 'alerts', text: 'Are actionable alerts highlighted with color (amber/red)?', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }] },
  { key: 'drillDown', text: 'Is complex data hidden behind "View Details" buttons?', options: [{ value: 'yes', label: 'Yes — Progressive disclosure' }, { value: 'no', label: 'No — Everything is visible' }] },
  { key: 'context', text: 'Do your metrics show trends (vs. last week/month)?', options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No — Static numbers' }] },
  { key: 'tested', text: 'Have you tested dashboard hierarchy with real users?', options: [{ value: 'yes', label: 'Yes — With recordings' }, { value: 'no', label: 'No — Not yet' }] },
]

const toolAnswers = ref({ northStar: null, alerts: null, drillDown: null, context: null, tested: null })
const toolComplete = computed(() => Object.values(toolAnswers.value).every(v => v !== null))
const toolVerdict = ref(null)

const evaluateTool = () => {
  const a = toolAnswers.value
  let criticalCount = 0
  let warningCount = 0
  if (a.northStar === 'no') criticalCount++
  else if (a.northStar === 'unsure') warningCount++
  if (a.alerts === 'no') warningCount++
  if (a.drillDown === 'no') criticalCount++
  if (a.context === 'no') warningCount++
  if (a.tested === 'no') warningCount++

  if (criticalCount >= 2) {
    toolVerdict.value = { level: 'critical', title: 'Critical — Fix These First', message: 'Your dashboard has fundamental hierarchy issues. Users are drowning in data. Apply the ONE Metric Rule and Progressive Disclosure immediately.' }
  } else if (criticalCount === 1 || warningCount >= 2) {
    toolVerdict.value = { level: 'warning', title: 'Warning — Room to Improve', message: 'Your dashboard has good foundations but a few hierarchy gaps. Focus on progressive disclosure and adding context (trends) to key metrics.' }
  } else {
    toolVerdict.value = { level: 'healthy', title: 'Healthy — Well Structured', message: 'Your dashboard follows the Decision Surface Framework. Consider A/B testing the North Star metric placement to squeeze out more gains.' }
  }
  showToast('Verdict ready below')
}

const baContainer = ref(null)
const baPosition = ref(50)
let isDragging = false

const startDrag = (e) => { isDragging = true; updateBA(e) }

const updateBA = (e) => {
  if (!baContainer.value) return
  const rect = baContainer.value.getBoundingClientRect()
  const clientX = e.clientX || (e.touches && e.touches[0]?.clientX)
  if (clientX === undefined) return
  const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
  baPosition.value = (x / rect.width) * 100
}

const handleMouseMove = (e) => { if (isDragging) updateBA(e) }
const handleMouseUp = () => { isDragging = false }

const roi = ref({ users: 10000, churn: 35, ltv: 500 })
const roiMonthly = computed(() => (roi.value.users || 0) * ((roi.value.churn || 0) / 100) * (roi.value.ltv || 0))
const roiAnnual = computed(() => roiMonthly.value * 12)

const formatCurrency = (n) => {
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return '$' + Math.round(n / 1_000).toLocaleString() + 'K'
  return '$' + Math.round(n).toLocaleString()
}

const sections = [
  { id: 'culprits', label: '3 Culprits' },
  { id: 'framework', label: 'Decision Surface Framework' },
  { id: 'one-metric', label: 'The ONE Metric Rule' },
  { id: 'progressive', label: 'Progressive Disclosure' },
  { id: 'proof', label: 'Qompyl Case Study' },
  { id: 'impact', label: 'Business Impact' },
  { id: 'baseline', label: 'Baseline Metrics' },
  { id: 'faq', label: 'FAQ' },
]

const activeSection = ref('culprits')
const visitedSections = ref([])

const scrollToSection = (id) => {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const shareArticle = (platform) => {
  if (typeof window === 'undefined') return
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(document.title)

  if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=600,height=400')
  } else if (platform === 'linkedin') {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=600')
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(window.location.href).then(() => {
      copied.value = true
      showToast('Link copied!')
      setTimeout(() => { copied.value = false }, 2000)
    })
  }
}

const FEEDBACK_KEY = 'cadence-feedback-saas-dashboard-v1'
const feedbackSubmitted = ref(false)
const feedbackValue = ref(null)

const submitFeedback = (useful) => {
  feedbackValue.value = useful
  feedbackSubmitted.value = true
  if (typeof window !== 'undefined') {
    try { localStorage.setItem(FEEDBACK_KEY, useful ? 'yes' : 'no') } catch (e) {}
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'article_feedback', article_slug: 'saas-dashboard-overwhelming', useful, timestamp: new Date().toISOString() })
  }
  showToast(useful ? 'Glad it helped!' : 'Thanks for feedback')
}

const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); toggleFocusMode() }
  if ((e.metaKey || e.ctrlKey) && e.key === 'l') { e.preventDefault(); toggleSpeech() }
  if (e.key === 'Escape') {
    showCitation.value = false
    showVideoModal.value = false
    showAudioModal.value = false
  }
}

let observer = null

onMounted(async () => {
  if (typeof window === 'undefined') return
  mounted.value = true

  try {
    const saved = localStorage.getItem(FEEDBACK_KEY)
    if (saved === 'yes' || saved === 'no') {
      feedbackSubmitted.value = true
      feedbackValue.value = saved === 'yes'
    }
  } catch (e) {}

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('touchmove', handleMouseMove, { passive: true })
  window.addEventListener('touchend', handleMouseUp)
  window.addEventListener('keydown', handleKeydown)

  await nextTick()
  initDecisionFlow()

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            if (id) {
              activeSection.value = id
              if (!visitedSections.value.includes(id)) visitedSections.value.push(id)
            }
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    nextTick(() => {
      document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el))
    })
  }

  setTimeout(() => {
    showToast('Tip: ⌘K for Focus Mode · ⌘L to Listen', 4000)
  }, 1500)
})

onUnmounted(() => {
  if (typeof window === 'undefined') return
  showVideoModal.value = false
  showAudioModal.value = false
  stopDecisionFlow()
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
  window.removeEventListener('touchmove', handleMouseMove)
  window.removeEventListener('touchend', handleMouseUp)
  window.removeEventListener('keydown', handleKeydown)
  if (observer) observer.disconnect()
  if (window.speechSynthesis) window.speechSynthesis.cancel()
})
</script>

<style scoped>
.toolbar-btn-icon { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 9999px; color: var(--ink-soft); background: transparent; transition: all 0.18s ease; cursor: pointer; border: none; }
.toolbar-btn-icon:hover { background: rgba(109, 94, 240, 0.08); color: var(--accent-1); transform: scale(1.05); }
.toolbar-btn-icon.active { background: var(--accent-1); color: white; }

.focus-toggle svg { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.focus-pulse { animation: focus-pulse-anim 2s ease-in-out infinite; transform-origin: center; }
@keyframes focus-pulse-anim { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.15); } }

.focus-mode :deep(nav), .focus-mode :deep(aside), .focus-mode :deep(header) { opacity: 0.3; transition: opacity 0.3s ease; }
.focus-mode :deep(article) { max-width: 720px; margin: 0 auto; font-size: 1.05em; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.toolbar-slide-enter-active, .toolbar-slide-leave-active { transition: all 0.3s ease; }
.toolbar-slide-enter-from, .toolbar-slide-leave-to { opacity: 0; transform: translateX(20px); }

.toast-enter-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.toast-leave-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: absolute; }
.toast-enter-from { opacity: 0; transform: translateY(40px) scale(0.9); }
.toast-leave-to { opacity: 0; transform: translateY(-20px) scale(0.9); }
.toast-move { transition: transform 0.3s ease; }

.sketch-card { transition: all 0.25s ease; }

.df-stage { position: relative; border-radius: 22px; padding: 20px 16px 18px; border: 1px solid rgba(255, 255, 255, 0.08); background: radial-gradient(520px 320px at 12% -8%, rgba(124, 108, 255, 0.35), transparent 60%), radial-gradient(460px 320px at 100% 45%, rgba(255, 93, 115, 0.14), transparent 60%), radial-gradient(460px 320px at 0% 100%, rgba(45, 212, 160, 0.14), transparent 60%), #0e0e1f; box-shadow: 0 30px 70px -30px rgba(60, 40, 200, 0.55); color: #f2f2fb; }

.df-tabs { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; width: fit-content; max-width: 100%; margin: 0 auto 8px; padding: 5px; border-radius: 9999px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); }
.df-tab { display: inline-flex; align-items: center; gap: 8px; padding: 8px 15px; border: 0; border-radius: 9999px; background: none; color: #9a9cc0; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.25s ease; }
.df-tab:hover { color: #fff; }
.df-tab--active { color: #fff; background: linear-gradient(135deg, #7c6cff, #5440f0); box-shadow: 0 8px 22px -8px #7c6cff; }
.df-tab-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }

.df-svg { display: block; width: 100%; min-width: 480px; height: auto; overflow: visible; }

.df-edge { fill: none; stroke: #6f63ff; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 6 7; opacity: 0.55; transition: opacity 0.4s ease, stroke-width 0.4s ease, stroke 0.4s ease; animation: df-flow 1.2s linear infinite; }
.df-edge--on { opacity: 1; stroke-width: 3; }
@keyframes df-flow { to { stroke-dashoffset: -26; } }

.df-node { transition: opacity 0.4s ease, transform 0.3s ease; transform-box: fill-box; transform-origin: center; }
.df-node:hover { transform: scale(1.05); }
.df-node text { fill: #fff; font-size: 14px; font-weight: 600; text-anchor: middle; dominant-baseline: central; pointer-events: none; }
.df-node--term text { fill: #f2f2fb; }

.df-lbl { transition: opacity 0.4s ease; }
.df-lbl rect { fill: #1b1b3a; stroke: rgba(255, 255, 255, 0.12); }
.df-lbl text { fill: #a9abd0; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-anchor: middle; dominant-baseline: central; }

.df-dim { opacity: 0.18; }
.df-dot { filter: drop-shadow(0 0 8px currentColor); }

.df-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 18px; margin-top: 14px; color: #9a9cc0; font-size: 12px; font-weight: 500; }
.df-legend b { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 7px; vertical-align: -1px; }

@media (prefers-reduced-motion: reduce) {
  .df-edge { animation: none; }
}

@media print {
  @page { margin: 20mm 15mm; size: auto; }
  html, body { background: #ffffff !important; color: #000000 !important; }
  .no-print, [role="tooltip"], .toolbar-btn-icon, [class*="fixed"], aside, nav, header, button:not(.print-keep), .sketch-card > span, TransitionGroup { display: none !important; }
  [data-aos] { opacity: 1 !important; transform: none !important; visibility: visible !important; transition: none !important; }
  #main-article { background: #ffffff !important; min-height: auto !important; }
  article { max-width: 100% !important; width: 100% !important; padding: 0 !important; margin: 0 !important; font-size: 11pt !important; line-height: 1.5 !important; color: #000000 !important; }
  .focus-mode :deep(article) { max-width: 100% !important; font-size: inherit !important; }
  .grid { display: block !important; }
  h1, h2, h3, h4 { page-break-after: avoid; page-break-inside: avoid; color: #000000 !important; }
  p, li, blockquote { page-break-inside: avoid; color: #000000 !important; }
  img, svg { page-break-inside: avoid; max-width: 100% !important; height: auto !important; }
  * { box-shadow: none !important; text-shadow: none !important; transition: none !important; animation: none !important; }
  a[href^="http"]:not([href*="mamdouh-ghaneemy.com"])::after { content: " (" attr(href) ")"; font-size: 9pt; color: #555 !important; }
  div, section, article { background: transparent !important; border-color: #cccccc !important; }
  .border, [class*="border-"] { border-color: #cccccc !important; }
  [class*="bg-gradient"], [class*="bg-[color"] { background: transparent !important; }
  [class*="text-[color:var(--ink-soft)]"] { color: #444444 !important; }
  [class*="text-[color:var(--accent-1)]"] { color: #5b4bdb !important; }
  .absolute.inset-0.w-full.h-\[120\%\] { display: none !important; }
  article::after {
    content: "Originally published at https://mamdouh-ghaneemy.com/blog/saas-dashboard-overwhelming";
    display: block; margin-top: 30px; padding-top: 15px;
    border-top: 1px solid #cccccc; font-size: 9pt; color: #777777; font-style: italic;
  }
  .grid.opacity-0 {
    opacity: 1 !important;
    display: block !important;
    margin-bottom: 1rem !important;
  }
}
html { scroll-behavior: smooth; }
</style>