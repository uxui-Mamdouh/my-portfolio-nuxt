<template>
  <div class="relative" style="isolation: isolate;">

    <!-- ═══════════════ READING PROGRESS BAR ═══════════════ -->
    <Teleport v-if="mounted" to="body">
      <div class="fixed top-0 left-0 right-0 h-1 bg-transparent pointer-events-none no-print" style="z-index: 9997 !important;">
        <div class="h-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] transition-all duration-100" :style="{ width: readingProgress + '%' }"></div>
      </div>
    </Teleport>

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
            <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="1.8" />
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
                    <Icon name="lucide:copy" class="w-3 h-3" /> Copy
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
                    <Icon name="lucide:clock" class="w-3 h-3" /> Video walkthrough
                  </div>
                </div>
              </div>
              <button @click="closeVideoModal" class="w-9 h-9 rounded-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-center justify-center hover:bg-[color:var(--card-bg)] transition-colors cursor-pointer shrink-0" aria-label="Close video">
                <Icon name="lucide:x" class="w-4 h-4 text-[color:var(--ink)]" />
              </button>
            </div>
            <div class="aspect-video bg-black relative">
              <iframe v-if="showVideoModal" :src="youtubeEmbedUrl" title="Stop Throwing PNGs — The 4-State Handoff" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full h-full absolute inset-0"></iframe>
            </div>
            <div class="p-4 md:p-5 flex items-center justify-between gap-3 flex-wrap border-t border-[color:var(--card-border)]">
              <p class="text-[12px] text-[color:var(--ink-soft)] m-0">4-State Deliverable framework · Nuxt 3 code included</p>
              <a :href="YOUTUBE_WATCH_URL" target="_blank" rel="noopener noreferrer" class="text-[12px] font-bold text-[color:var(--accent-1)] hover:underline inline-flex items-center gap-1.5">
                Watch on YouTube <Icon name="lucide:external-link" class="w-3 h-3" />
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
                    <Icon name="lucide:mic" class="w-3 h-3" /> Podcast · Spotify
                  </div>
                </div>
              </div>
              <button @click="closeAudioModal" class="w-9 h-9 rounded-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-center justify-center hover:bg-[color:var(--card-bg)] transition-colors cursor-pointer shrink-0" aria-label="Close audio">
                <Icon name="lucide:x" class="w-4 h-4 text-[color:var(--ink)]" />
              </button>
            </div>
            <div class="p-4 md:p-6">
              <iframe v-if="showAudioModal" :src="spotifyEmbedUrl" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="rounded-xl w-full" style="border-radius: 12px; border: none;"></iframe>
            </div>
            <div class="p-4 md:p-5 flex items-center justify-between gap-3 flex-wrap border-t border-[color:var(--card-border)]">
              <p class="text-[12px] text-[color:var(--ink-soft)] m-0">Podcast · Available on all platforms</p>
              <a :href="SPOTIFY_EPISODE_URL" target="_blank" rel="noopener noreferrer" class="text-[12px] font-bold text-[color:var(--accent-1)] hover:underline inline-flex items-center gap-1.5">
                Open in Spotify <Icon name="lucide:external-link" class="w-3 h-3" />
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
    <article class="bg-[color:var(--page-bg-1)] min-h-screen text-[color:var(--ink)] font-sans selection:bg-[color:var(--accent-1)] selection:text-white pb-32" :class="{ 'focus-mode': focusMode }" id="main-article">

      <!-- HERO -->
      <section class="relative pt-12 md:pt-24 pb-20" :class="{ 'pt-32': focusMode }">
        <div class="absolute inset-0 w-full h-[120%] overflow-hidden pointer-events-none z-0 no-print">
          <div class="absolute top-[-100px] right-[-100px] md:right-[10%] w-[500px] md:w-[780px] h-[500px] md:h-[780px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] blur-3xl"></div>
          <div class="absolute bottom-[20%] left-[-150px] w-[400px] md:w-[620px] h-[400px] md:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(109,94,240,0.1)_0%,transparent_70%)] blur-3xl"></div>
        </div>

        <div class="max-w-[1440px] mx-auto px-6 md:px-[60px] relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div class="lg:col-span-7" data-aos="fade-up">
              <div class="flex items-center flex-wrap gap-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] mb-8">
                <span class="text-[color:var(--ink-soft)] bg-[color:var(--card-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full">Systems</span>
                <span class="text-[color:var(--accent-1)]">14 Min Read</span>
                <span class="w-1 h-1 rounded-full bg-[color:var(--card-border)]"></span>
                <span class="text-[color:var(--ink-soft)]">Nov 4, 2026</span>
              </div>

              <h1 class="text-[clamp(2.4rem,5.4vw,4.4rem)] font-black tracking-[-0.035em] leading-[1.02] mb-8 text-[color:var(--ink)]">
                Stop Throwing PNGs Over the Wall:
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2">The Zero-Friction Nuxt 3 Handoff.</span>
              </h1>

              <p class="text-[1.22rem] font-medium text-[color:var(--ink-soft)] leading-[1.55] max-w-[620px] pl-6 border-l-2 border-[color:var(--ink-soft)]/40 mb-10">
                A developer cannot build a product from a happy-path PNG. Here's the 4-State Deliverable framework I use to ship designs that need zero rebuilds — with actual Nuxt 3 code examples.
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
                <div class="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none z-0"></div>
                <div class="relative z-10">
                  <span class="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-5">Component Redesigns After Handoff</span>
                  <div class="flex items-baseline gap-4 mb-3">
                    <span class="text-[clamp(4rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-[#33cc95]">0</span>
                  </div>
                </div>
                <div class="mt-8 pt-7 border-t border-[color:var(--card-border)] relative z-10">
                  <span class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-2">The Reality</span>
                  <p class="text-[0.9rem] text-[color:var(--ink-soft)] leading-relaxed m-0">Qompyl App: 60+ states documented before development. Zero rebuilds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HERO IMAGE -->
      <figure class="max-w-[1440px] mx-auto px-6 md:px-[60px] mb-[110px]" data-aos="fade-up" data-aos-delay="200">
        <div class="w-full aspect-[2/1] rounded-[48px] border border-[color:var(--card-border)] overflow-hidden relative bg-[color:var(--card-bg)] group">
          <NuxtImg src="/images/blog/stop-throwing-pngs-hero.png" alt="Split screen showing Figma design on left with 4 states and Nuxt 3 code on right" title="Zero-Friction Design Handoff" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" width="2400" height="1200" sizes="(max-width: 768px) 100vw, (max-width: 1440px) calc(100vw - 120px), 1320px" format="webp" quality="92" loading="eager" decoding="async" fetchpriority="high" />
          <div class="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[0.16em] py-2.5 px-4 rounded-full flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
            States Before Pixels · Dev-Ready
          </div>
        </div>
      </figure>

      <!-- EDITORIAL GRID -->
      <div class="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-[80px] items-start">

          <article class="xl:col-span-8 max-w-[740px] text-[17px] leading-[1.75] text-[color:var(--ink-soft)]">

            <!-- MEDIA SECTION — Watch + Listen -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-12 no-print" data-aos="fade-up">
              <button type="button" @click="openVideoModal" class="group p-6 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] flex items-center gap-4 text-left hover:border-[color:var(--accent-1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(109,94,240,0.25)] transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white flex items-center justify-center shrink-0">
                  <Icon name="lucide:play" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-black text-[color:var(--ink)] m-0 mb-1">Watch the Explainer</div>
                  <div class="text-[12px] text-[color:var(--ink-soft)] m-0">Video walkthrough</div>
                </div>
              </button>

              <button type="button" @click="openAudioModal" class="group p-6 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] flex items-center gap-4 text-left hover:border-[color:var(--accent-1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(109,94,240,0.25)] transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white flex items-center justify-center shrink-0">
                  <Icon name="lucide:mic" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-black text-[color:var(--ink)] m-0 mb-1">Listen to the Audio</div>
                  <div class="text-[12px] text-[color:var(--ink-soft)] m-0">Podcast · Spotify</div>
                </div>
              </button>
            </div>

            <!-- Opening -->
            <p class="text-[20px] text-[color:var(--ink)] font-medium mb-7" data-aos="fade-up">I used to throw Figma files over the wall and hope developers could read my mind.</p>
            <p class="mb-7" data-aos="fade-up">Then I watched a senior developer spend three hours rebuilding a "simple" button component because I only designed the happy path. He had to guess the loading state, the error state, the disabled state, and what happens when the text is too long.</p>

            <div class="border-l-[3px] border-amber-400 bg-amber-400/10 dark:bg-amber-400/5 px-6 py-5 rounded-r-xl mb-7" data-aos="fade-up">
              <p class="m-0 text-[#b49852] dark:text-[#d8d0b8] text-[16px] leading-relaxed">
                <strong class="text-[#b49852] dark:text-[#f0e4c8]">That button took 3 hours to rebuild. My fault. Not his.</strong> I gave him a PNG of a perfect world. He lives in the real one.
              </p>
            </div>

            <p class="mb-7" data-aos="fade-up">The handoff isn't about pretty mockups. It's about <strong class="text-[color:var(--ink)] font-bold">removing ambiguity</strong>. Every state, every edge case, every interaction — documented before a single line of code is written.</p>

            <p class="text-[21px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10" data-aos="fade-up">
              A developer cannot build a product from a happy-path PNG. Design every state or watch it get rebuilt.
            </p>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> The 4-State Deliverable framework requires every component to be designed in four states before handoff: Empty, Loading, Success, and Error.
              </p>
            </div>

            <!-- SECTION 1 -->
            <h2 id="problem" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">Why do traditional handoffs fail?</h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> Traditional handoffs fail because designers deliver <strong>screenshots of perfection</strong> while developers need <strong>specifications of reality</strong>.
              </p>
            </div>

            <p class="mb-7" data-aos="fade-up">The problem isn't the designer or the developer. It's the <strong>artifact</strong>. A static PNG answers "what" but not "how," "when," or "what if."</p>

            <h3 class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">01</span> The Happy Path Trap
            </h3>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">The issue:</strong> Designers show the ideal scenario: data loads instantly, users never make mistakes, and the API always returns 200 OK.</p>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">The reality:</strong> Users have slow connections, enter invalid data, and APIs fail. When these scenarios aren't designed, developers invent them — and their inventions rarely match the design system.</p>
            <p class="mb-7" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">Example:</strong> I once designed a dashboard with beautiful charts. What I didn't design: the empty state, the loading state, or the error state.</p>

            <h3 class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">02</span> The Spec Gap
            </h3>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">The issue:</strong> "Make it look like the design" is not a specification. What's the exact padding? The exact hex code?</p>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">The reality:</strong> Without tokens and documented values, every developer makes their own interpretation. Suddenly you have 14 shades of blue and 8 different border-radius values.</p>

            <!-- SECTION 2 -->
            <h2 id="framework" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">What is the 4-State Deliverable?</h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> Every component must be delivered in four states: <strong>Empty</strong>, <strong>Loading</strong>, <strong>Success</strong>, and <strong>Error</strong>.
              </p>
            </div>

            <p class="mb-7" data-aos="fade-up">This isn't just about designing four screens. It's about designing for <strong>time</strong> and <strong>uncertainty</strong>.</p>

            <h3 class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[#f59e0b] bg-[#f59e0b]/10 border border-[#f59e0b]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">01</span> Empty State
            </h3>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">When it appears:</strong> First-time user, no data yet, cleared filters, zero results.</p>
            <p class="mb-7" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">Example:</strong> An empty portfolio shows: "No strategies yet" with a "Create Your First Strategy" button.</p>

            <h3 class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">02</span> Loading State
            </h3>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">When it appears:</strong> Fetching data, processing transaction, uploading file.</p>
            <p class="mb-7" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">Example:</strong> A dashboard shows skeleton cards matching the final layout's dimensions.</p>

            <h3 class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">03</span> Success State
            </h3>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">When it appears:</strong> Data loaded, action completed, form submitted successfully.</p>

            <h3 class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">04</span> Error State
            </h3>
            <p class="mb-4" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">When it appears:</strong> API failure, validation error, network timeout, server error.</p>
            <p class="mb-7" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">Example:</strong> "Connection failed. Check your internet and try again." with a "Retry" button — not just "Error 500."</p>

            <!-- STATE MACHINE -->
            <div class="my-12 p-8 bg-gradient-to-br from-[color:var(--card-bg)] to-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px]" data-aos="fade-up">
              <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-6 flex items-center gap-2">
                <Icon name="lucide:git-branch" class="w-4 h-4" /> The State Machine
              </div>
              <div class="flex flex-col items-center gap-6">
                <div class="w-full max-w-[280px] p-4 rounded-xl border-2 border-[#f59e0b] bg-[#f59e0b]/5 text-center">
                  <div class="text-[#f59e0b] font-bold text-sm mb-1">EMPTY</div>
                  <div class="text-xs text-[color:var(--ink-soft)]">No data · First visit</div>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-px h-6 bg-[color:var(--card-border)]"></div>
                  <div class="text-[10px] font-mono text-[color:var(--ink-soft)] bg-[color:var(--card-bg)] px-2 py-0.5 rounded border border-[color:var(--card-border)]">user triggers load</div>
                  <div class="w-px h-6 bg-[color:var(--card-border)]"></div>
                </div>
                <div class="w-full max-w-[280px] p-4 rounded-xl border-2 border-[#3b82f6] bg-[#3b82f6]/5 text-center">
                  <div class="text-[#3b82f6] font-bold text-sm mb-1">LOADING</div>
                  <div class="text-xs text-[color:var(--ink-soft)]">Fetching · Skeleton UI</div>
                </div>
                <div class="flex items-center gap-8">
                  <div class="flex flex-col items-center">
                    <div class="w-px h-6 bg-[color:var(--card-border)]"></div>
                    <div class="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded border border-[#10b981]/30">success</div>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="w-px h-6 bg-[color:var(--card-border)]"></div>
                    <div class="text-[10px] font-mono text-[#ef4444] bg-[#ef4444]/10 px-2 py-0.5 rounded border border-[#ef4444]/30">failure</div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 w-full max-w-[560px]">
                  <div class="p-4 rounded-xl border-2 border-[#10b981] bg-[#10b981]/5 text-center">
                    <div class="text-[#10b981] font-bold text-sm mb-1">SUCCESS</div>
                    <div class="text-xs text-[color:var(--ink-soft)]">Data present</div>
                  </div>
                  <div class="p-4 rounded-xl border-2 border-[#ef4444] bg-[#ef4444]/5 text-center">
                    <div class="text-[#ef4444] font-bold text-sm mb-1">ERROR</div>
                    <div class="text-xs text-[color:var(--ink-soft)]">Failed · Recovery path</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- SECTION 3: CODE -->
            <h2 id="code" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">How to implement this in Nuxt 3</h2>
            <p class="mb-7" data-aos="fade-up">Here's the actual code structure I hand off with designs. This isn't pseudocode — this is what developers copy-paste into their projects.</p>

            <div class="my-8 bg-[#0b0b0f] border border-[#26262f] rounded-[16px] overflow-hidden" data-aos="fade-up">
              <div class="flex items-center justify-between px-4 py-3 bg-[#15151c] border-b border-[#26262f]">
                <span class="text-[11px] font-mono text-[color:var(--ink-soft)]">OrderBox.vue</span>
                <span class="text-[10px] text-[color:var(--ink-soft)]">Vue 3 + TypeScript</span>
              </div>
              <pre class="p-4 overflow-x-auto text-[13px] leading-relaxed"><code class="language-vue text-[#e4e4e7]">&lt;script setup lang="ts"&gt;
const props = defineProps&lt;{
  state: 'empty' | 'loading' | 'success' | 'error'
  tokenBalance?: number
  cost?: number
}&gt;()

const emit = defineEmits&lt;{
  (e: 'run'): void
  (e: 'get-tokens'): void
}&gt;()
&lt;/script&gt;</code></pre>
            </div>

            <!-- SECTION 4: QOMPYL -->
            <h2 id="qompyl" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">Real example: The Qompyl Order Box</h2>
            <p class="mb-7" data-aos="fade-up">Here's how I applied this to a real component in the Qompyl trading app.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10" data-aos="fade-up">
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5">
                <div class="text-[10px] font-bold uppercase tracking-widest text-[#10b981] mb-3">Success State</div>
                <p class="text-sm text-[color:var(--ink-soft)]">Sufficient tokens, clear cost breakdown, enabled CTA.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5">
                <div class="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-3">Insufficient State</div>
                <p class="text-sm text-[color:var(--ink-soft)]">Token shortfall shown before click, "Get Tokens" CTA.</p>
              </div>
            </div>

            <p class="mb-7" data-aos="fade-up"><strong class="text-[color:var(--ink)] font-bold">The result:</strong> Zero component redesigns after handoff.</p>

            <!-- SECTION 5: CHECKLIST -->
            <h2 id="checklist" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">Handoff checklist</h2>
            <p class="mb-7" data-aos="fade-up">Before you send that Figma link to development, run through this checklist.</p>

            <div class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 my-10" data-aos="fade-up">
              <h3 class="text-lg font-bold text-[color:var(--ink)] mb-6">✓ Every component has:</h3>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
                  <span>All 4 states designed (Empty/Loading/Success/Error)</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
                  <span>Token-based design system documented</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
                  <span>Interaction specs (hover, active, focus)</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
                  <span>Responsive breakpoints defined</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
                  <span>Accessibility notes (ARIA labels, keyboard nav)</span>
                </li>
                <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
                  <span>Code snippets for complex components</span>
                </li>
              </ul>
            </div>

            <!-- FAQ -->
            <h2 id="faq" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[80px] mb-6 pb-[18px]" data-aos="fade-up">FAQ</h2>
            <div class="flex flex-col border-b border-[color:var(--card-border)] mb-20" data-aos="fade-up">
              <div v-for="(item, index) in faqItems" :key="index" class="border-t border-[color:var(--card-border)]">
                <button @click="toggleFaq(index)" class="w-full py-6 flex items-center justify-between text-left group transition-colors" :aria-expanded="activeFaq === index">
                  <span class="text-[1.1rem] md:text-[1.2rem] font-bold text-[color:var(--ink)] group-hover:text-[color:var(--accent-1)] transition-colors">{{ item.question }}</span>
                  <span class="w-8 h-8 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink-soft)] transition-all duration-300 shrink-0 ml-4" :class="activeFaq === index ? 'rotate-45 bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white border-transparent' : 'group-hover:border-[color:var(--accent-1)] group-hover:text-[color:var(--accent-1)]'">
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

            <NewsletterForm />

            <div class="mt-24 pt-10 border-t border-[color:var(--card-border)]">
              <PlaybookCTA
                title="Send me your Figma file — I'll audit it for free"
                description="I'll record a 5-minute Loom showing exactly which states are missing and how to fix them."
                button-text="Get Your Free Handoff Audit"
                :deliverables="[
                  { code: 'figma/', text: 'Share your Figma file' },
                  { code: 'loom/', text: '5-min video with state gaps' },
                  { code: 'code/', text: 'Nuxt 3 component examples' },
                ]"
                :target-metric="0"
              />
            </div>
          </article>

          <!-- SIDEBAR -->
          <aside class="hidden xl:flex flex-col gap-7 xl:col-span-4 sticky top-[100px] no-print">
            <MiniPlayer v-if="articleMedia" :item="articleMedia" @play="openAudioModal" />

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-6">On this page</span>
              <ul class="flex flex-col gap-4 m-0 p-0 list-none">
                <li><a href="#problem" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">The Problem</a></li>
                <li><a href="#framework" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">4-State Framework</a></li>
                <li><a href="#code" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">Nuxt 3 Code</a></li>
                <li><a href="#qompyl" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">Qompyl Example</a></li>
                <li><a href="#checklist" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">Checklist</a></li>
                <li><a href="#faq" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">FAQ</a></li>
              </ul>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-6">Share Playbook</span>
              <div class="flex gap-4">
                <button @click="sharePlaybook('twitter')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Share on X">
                  <Icon name="simple-icons:x" class="w-4.5 h-4.5" />
                </button>
                <button @click="sharePlaybook('linkedin')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Share on LinkedIn">
                  <Icon name="lucide:linkedin" class="w-4.5 h-4.5" />
                </button>
                <button @click="sharePlaybook('copy')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm" :class="copied ? 'bg-[#33cc95] text-white border-transparent shadow-md' : 'text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent'" aria-label="Copy Link">
                  <Icon v-if="copied" name="lucide:check" class="w-5 h-5" />
                  <Icon v-else name="lucide:link" class="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MiniPlayer from '~/components/media/MiniPlayer.vue'

// ═════════════════════════════════════════════════════════
// 1. PAGE META — Nuxt
// ═════════════════════════════════════════════════════════
definePageMeta({
  layout: 'playbook',
  backLabel: 'Playbooks',
  backTo: '/blog',
})

const mounted = ref(false)

// ═════════════════════════════════════════════════════════
// 2. MEDIA IDs (constants)
// ═════════════════════════════════════════════════════════
const YOUTUBE_VIDEO_ID = 'ixTHqhf8b0c'
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`
const SPOTIFY_EPISODE_ID = '1wUG5xkc5DTlLGu2c0tbiT'
const SPOTIFY_EPISODE_URL = `https://open.spotify.com/episode/${SPOTIFY_EPISODE_ID}`

// ═════════════════════════════════════════════════════════
// 3. ⚠️ FAQ ITEMS — MUST BE DECLARED FIRST (before usePageMeta)
// ═════════════════════════════════════════════════════════
const activeFaq = ref(0)
const toggleFaq = (index) => { activeFaq.value = activeFaq.value === index ? null : index }

const faqItems = ref([
  { question: 'How long does it take to design 4 states per component?', answer: 'Initially, it takes 2-3x longer than designing just the happy path. But you save 10x that time in development rebuilds. After a few projects, designing all four states becomes muscle memory and only takes 30-40% longer than the happy path alone.' },
  { question: 'Do I need to provide actual code?', answer: 'No, but it helps immensely. For technical audiences (CTOs, senior devs), providing Nuxt 3/Vue 3 code snippets shows you understand their constraints.' },
  { question: 'What if a component has more than 4 states?', answer: 'Start with the core four (Empty/Loading/Success/Error), then add variant states as needed. Document all of them.' },
  { question: 'How do I convince my team to adopt this?', answer: 'Show them the math: 3 hours spent designing states upfront vs. 20 hours spent on rebuilds later. Then do one component as a pilot and measure the time saved.' },
])

// ═════════════════════════════════════════════════════════
// 4. SEO — now faqItems is defined above ✅
// ═════════════════════════════════════════════════════════
usePageMeta({
  title: 'Stop Throwing PNGs Over the Wall: The Zero-Friction Nuxt 3 Handoff',
  description: 'A developer cannot build a product from a happy-path PNG. Here is the 4-State Deliverable framework I use to ship designs that need zero rebuilds — with actual Nuxt 3 code examples.',
  keywords: ['design handoff', 'Nuxt 3 design system', 'dev-ready specs', 'Figma to Vue', 'component states', 'design tokens', 'zero rebuild handoff'],
  ogType: 'article',
  ogImage: 'https://mamdouh-ghaneemy.com/images/blog/Stop Throwing PNGs.png',
  article: { publishedTime: '2026-11-04T00:00:00Z', section: 'Systems', tags: ['Design Handoff', 'Nuxt 3', 'Vue 3', 'Design Systems'] },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Playbooks', url: '/blog' },
    { name: 'Stop Throwing PNGs', url: '/blog/stop-throwing-pngs' },
  ],
  faqItems: faqItems.value,
})

// ═════════════════════════════════════════════════════════
// 5. MEDIA fetch from Supabase
// ═════════════════════════════════════════════════════════
const { fetchByArticle } = useMedia()
const { data: articleMedia } = await useAsyncData('article-media-stop-throwing-pngs', () =>
  fetchByArticle('stop-throwing-pngs')
)
articleMedia.value = articleMedia.value?.find(m => m.media_type === 'podcast') || null

// ═════════════════════════════════════════════════════════
// 6. STATE
// ═════════════════════════════════════════════════════════
const readingProgress = ref(0)
const focusMode = ref(false)
const showCitation = ref(false)
const showVideoModal = ref(false)
const showAudioModal = ref(false)
const speechPlaying = ref(false)
const copiedMd = ref(false)
const copiedLink = ref(false)
const copiedUrl = ref(false)
const copied = ref(false)
const shortLink = ref('')
const toasts = ref([])
let toastIdCounter = 0

// ═════════════════════════════════════════════════════════
// 7. TOASTS
// ═════════════════════════════════════════════════════════
const showToast = (message, duration = 2500) => {
  if (typeof window === 'undefined') return
  const id = ++toastIdCounter
  toasts.value.push({ id, message })
  setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, duration)
}

// ═════════════════════════════════════════════════════════
// 8. READING PROGRESS
// ═════════════════════════════════════════════════════════
const updateProgress = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  readingProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

// ═════════════════════════════════════════════════════════
// 9. FOCUS MODE
// ═════════════════════════════════════════════════════════
const toggleFocusMode = () => {
  focusMode.value = !focusMode.value
  showToast(focusMode.value ? 'Focus mode ON' : 'Focus mode OFF')
}

// ═════════════════════════════════════════════════════════
// 10. VIDEO / AUDIO MODALS
// ═════════════════════════════════════════════════════════
const youtubeEmbedUrl = computed(() =>
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&fs=1&color=white`
)
const spotifyEmbedUrl = computed(() =>
  `https://open.spotify.com/embed/episode/${SPOTIFY_EPISODE_ID}?utm_source=generator&theme=0`
)
const openVideoModal = () => { showVideoModal.value = true }
const closeVideoModal = () => { showVideoModal.value = false }
const openAudioModal = () => { showAudioModal.value = true }
const closeAudioModal = () => { showAudioModal.value = false }

// ═════════════════════════════════════════════════════════
// 11. CITATION
// ═════════════════════════════════════════════════════════
const citationFormats = [
  { id: 'apa', label: 'APA 7th', value: 'Ghaneemy, M. (2026). Stop Throwing PNGs Over the Wall: The Zero-Friction Nuxt 3 Handoff. Retrieved from https://mamdouh-ghaneemy.com/blog/stop-throwing-pngs' },
  { id: 'chicago', label: 'Chicago', value: 'Ghaneemy, Mamdouh. "Stop Throwing PNGs Over the Wall." Last modified November 4, 2026. https://mamdouh-ghaneemy.com/blog/stop-throwing-pngs.' },
  { id: 'bibtex', label: 'BibTeX', value: `@article{ghaneemy2026pngs,\n  title={Stop Throwing PNGs Over the Wall},\n  author={Ghaneemy, Mamdouh},\n  year={2026},\n  url={https://mamdouh-ghaneemy.com/blog/stop-throwing-pngs}\n}` },
]

const copyCitation = async (text) => {
  if (typeof window === 'undefined') return
  try {
    await navigator.clipboard.writeText(text)
    showToast('Citation copied!')
  } catch (e) { showToast('Copy failed') }
}

// ═════════════════════════════════════════════════════════
// 12. COPY AS MARKDOWN
// ═════════════════════════════════════════════════════════
const buildMarkdown = () => {
  const md = []
  md.push(`# Stop Throwing PNGs Over the Wall: The Zero-Friction Nuxt 3 Handoff`)
  md.push('')
  md.push(`> A developer cannot build a product from a happy-path PNG. Here's the 4-State Deliverable framework I use to ship designs that need zero rebuilds.`)
  md.push('')
  md.push(`**Author:** Mamdouh Ghaneemy — Fintech Product Designer  `)
  md.push(`**Reading time:** ~14 min`)
  md.push('')
  md.push('---')
  md.push('')
  md.push('## The Problem')
  md.push('')
  md.push('Traditional handoffs fail because designers deliver screenshots of perfection while developers need specifications of reality.')
  md.push('')
  md.push('## The 4-State Framework')
  md.push('')
  md.push('1. **Empty** — No data')
  md.push('2. **Loading** — Fetching')
  md.push('3. **Success** — Data present')
  md.push('4. **Error** — Failure with recovery path')
  md.push('')
  md.push('## FAQ')
  md.push('')
  faqItems.value.forEach(item => {
    md.push(`### ${item.question}`)
    md.push('')
    md.push(item.answer)
    md.push('')
  })
  md.push('---')
  md.push('')
  md.push('Originally published at https://mamdouh-ghaneemy.com/blog/stop-throwing-pngs')
  return md.join('\n')
}

const copyAsMarkdown = async () => {
  if (typeof window === 'undefined') return
  try {
    await navigator.clipboard.writeText(buildMarkdown())
    copiedMd.value = true
    showToast('Full article copied as Markdown!')
    setTimeout(() => { copiedMd.value = false }, 2000)
  } catch (e) { showToast('Copy failed') }
}

// ═════════════════════════════════════════════════════════
// 13. COPY SHORT LINK
// ═════════════════════════════════════════════════════════
const copyShortLink = async () => {
  if (typeof window === 'undefined') return
  try {
    await navigator.clipboard.writeText(shortLink.value || window.location.href)
    copiedLink.value = true
    showToast('Link copied!')
    setTimeout(() => { copiedLink.value = false }, 2000)
  } catch (e) { showToast('Copy failed') }
}

// ═════════════════════════════════════════════════════════
// 14. SPEECH
// ═════════════════════════════════════════════════════════
const toggleSpeech = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    showToast('Browser doesn\'t support TTS')
    return
  }
  if (speechPlaying.value) {
    window.speechSynthesis.cancel()
    speechPlaying.value = false
    return
  }
  const plainText = buildMarkdown().replace(/[#*\-`>]/g, '').trim()
  const utterance = new SpeechSynthesisUtterance(plainText)
  utterance.rate = 1.0
  utterance.lang = 'en-US'
  utterance.onend = () => { speechPlaying.value = false }
  window.speechSynthesis.speak(utterance)
  speechPlaying.value = true
  showToast('Reading aloud...')
}

// ═════════════════════════════════════════════════════════
// 15. PRINT
// ═════════════════════════════════════════════════════════
const printArticle = () => {
  if (typeof window === 'undefined') return
  const wasFocusMode = focusMode.value
  if (wasFocusMode) focusMode.value = false
  showCitation.value = false
  document.querySelectorAll('[data-aos]').forEach(el => {
    el.classList.add('aos-animate')
    el.style.opacity = '1'
    el.style.transform = 'none'
    el.style.visibility = 'visible'
    el.style.transition = 'none'
  })
  setTimeout(() => {
    window.print()
    if (wasFocusMode) setTimeout(() => { focusMode.value = true }, 100)
  }, 200)
}

// ═════════════════════════════════════════════════════════
// 16. SHARE
// ═════════════════════════════════════════════════════════
const sharePlaybook = (platform) => {
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

// ═════════════════════════════════════════════════════════
// 17. KEYBOARD SHORTCUTS
// ═════════════════════════════════════════════════════════
const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); toggleFocusMode() }
  if ((e.metaKey || e.ctrlKey) && e.key === 'l') { e.preventDefault(); toggleSpeech() }
  if (e.key === 'Escape') {
    showCitation.value = false
    showVideoModal.value = false
    showAudioModal.value = false
  }
}

// ═════════════════════════════════════════════════════════
// 18. LIFECYCLE
// ═════════════════════════════════════════════════════════
onMounted(() => {
  if (typeof window === 'undefined') return
  mounted.value = true
  shortLink.value = window.location.href
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  updateProgress()
  setTimeout(() => { showToast('Tip: ⌘K for Focus Mode · ⌘L to Listen', 4000) }, 1500)
})

onUnmounted(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('keydown', handleKeydown)
  if (window.speechSynthesis) window.speechSynthesis.cancel()
})
</script>

<style scoped>
.toolbar-btn-icon { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 9999px; color: var(--ink-soft); background: transparent; transition: all 0.18s ease; cursor: pointer; border: none; }
.toolbar-btn-icon:hover { background: rgba(109, 94, 240, 0.08); color: var(--accent-1); transform: scale(1.05); }
.toolbar-btn-icon.active { background: var(--accent-1); color: white; }
.focus-toggle svg { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
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
html { scroll-behavior: smooth; }

@media print {
  @page { margin: 20mm 15mm; size: auto; }
  html, body { background: #ffffff !important; color: #000000 !important; }
  .no-print, [role="tooltip"], .toolbar-btn-icon, [class*="fixed"], aside, nav, header, button:not(.print-keep) { display: none !important; }
  [data-aos] { opacity: 1 !important; transform: none !important; visibility: visible !important; transition: none !important; }
  #main-article { background: #ffffff !important; min-height: auto !important; }
  article { max-width: 100% !important; width: 100% !important; padding: 0 !important; margin: 0 !important; font-size: 11pt !important; line-height: 1.5 !important; color: #000000 !important; }
  .grid { display: block !important; }
  h1, h2, h3, h4 { page-break-after: avoid; page-break-inside: avoid; color: #000000 !important; }
  p, li, blockquote { page-break-inside: avoid; color: #000000 !important; }
  img, svg { page-break-inside: avoid; max-width: 100% !important; height: auto !important; }
  * { box-shadow: none !important; text-shadow: none !important; transition: none !important; animation: none !important; }
  div, section, article { background: transparent !important; border-color: #cccccc !important; }
  article::after {
    content: "Originally published at https://mamdouh-ghaneemy.com/blog/stop-throwing-pngs";
    display: block; margin-top: 30px; padding-top: 15px;
    border-top: 1px solid #cccccc; font-size: 9pt; color: #777777; font-style: italic;
  }
}
</style>