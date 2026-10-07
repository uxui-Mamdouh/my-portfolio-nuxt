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
                    <Icon name="lucide:clock" class="w-3 h-3" /> GA4 Data API walkthrough
                  </div>
                </div>
              </div>
              <button @click="closeVideoModal" class="w-9 h-9 rounded-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-center justify-center hover:bg-[color:var(--card-bg)] transition-colors cursor-pointer shrink-0" aria-label="Close video">
                <Icon name="lucide:x" class="w-4 h-4 text-[color:var(--ink)]" />
              </button>
            </div>
            <div class="aspect-video bg-black relative">
              <iframe v-if="showVideoModal" :src="youtubeEmbedUrl" title="GA4 Data API for Designers — Pull Funnels" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full h-full absolute inset-0"></iframe>
            </div>
            <div class="p-4 md:p-5 flex items-center justify-between gap-3 flex-wrap border-t border-[color:var(--card-border)]">
              <p class="text-[12px] text-[color:var(--ink-soft)] m-0">Nuxt server route · 5 mistakes that cost days</p>
              <a :href="YOUTUBE_WATCH_URL" target="_blank" rel="noopener noreferrer" class="text-[12px] font-bold text-[color:var(--accent-1)] hover:underline inline-flex items-center gap-1.5">
                Watch on YouTube <Icon name="lucide:external-link" class="w-3 h-3" />
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
    <article class="bg-[color:var(--page-bg-1)] min-h-screen text-[color:var(--ink)] font-sans relative selection:bg-[color:var(--accent-1)] selection:text-white" :class="{ 'focus-mode': focusMode }" id="main-article">

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
                <span class="text-[color:var(--ink-soft)]">Tracking for Designers</span>
                <span class="w-1 h-1 rounded-full bg-gray-400"></span>
                <span class="text-[color:var(--accent-1)]">9 Min Read</span>
                <span class="w-1 h-1 rounded-full bg-gray-400"></span>
                <span class="text-[color:var(--ink-soft)]">Oct 2026</span>
              </div>
              <h1 class="text-[clamp(2.6rem,5.6vw,4.6rem)] font-black tracking-[-0.035em] leading-[1.02] mb-8 text-[color:var(--ink)]">
                GA4 Data API for Designers: Pull Funnel Data Into Your Own
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2">Dashboard.</span>
              </h1>
              <p class="text-[1.22rem] font-medium text-[color:var(--ink-soft)] leading-[1.55] max-w-[620px] pl-6 border-l-2 border-[color:var(--ink-soft)]/40 mb-10">
                Stop exporting CSVs. Here's the exact Nuxt server route I use to pull GA4 funnel data into my own dashboard — with the 5 mistakes that cost me days.
              </p>
              <div class="flex items-center gap-4 border-t border-[color:var(--card-border)] pt-7 w-max">
                <div class="w-[52px] h-[52px] rounded-full border border-[color:var(--card-border)] p-[3px] bg-[color:var(--card-bg)] shrink-0">
                  <div class="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] flex items-center justify-center">
                    <NuxtImg src="/images/mamdouh-ghaneemy-pic.png" alt="Mamdouh Ghaneemy" class="w-full h-full object-cover" width="96" height="96" format="webp" quality="85" />
                  </div>
                </div>
                <div>
                  <div class="font-extrabold text-[14px] text-[color:var(--ink)]">Mamdouh Ghaneemy</div>
                  <div class="text-[10.5px] uppercase tracking-[0.12em] font-bold text-[color:var(--ink-soft)] mt-1">Strategic Product Designer</div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 relative" data-aos="fade-up" data-aos-delay="150">
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[40px] p-10 md:p-12 min-h-[420px] flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.25)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden group">
                <div class="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(109,94,240,0.1),transparent_70%)] pointer-events-none z-0"></div>
                <div class="relative z-10">
                  <span class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[color:var(--ink-soft)] block mb-5">The Payoff</span>
                  <div class="text-[clamp(4.5rem,9vw,7rem)] font-black tracking-[-0.05em] leading-[0.9] mb-3 bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)]">
                    ~90%
                  </div>
                  <div class="text-[1.35rem] font-extrabold text-[color:var(--ink)] leading-[1.2]">
                    Drop-off detected in a single line.
                  </div>
                </div>
                <div class="mt-10 pt-7 border-t border-[color:var(--card-border)] relative z-10">
                  <p class="text-[0.92rem] text-[color:var(--ink-soft)] leading-[1.65]">
                    One client dashboard — name withheld, figures rounded — exposed a collapse between <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold">form_start</code> and <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold">generate_lead</code> that used to be buried across three GA4 reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HERO IMAGE -->
      <figure class="max-w-[1440px] mx-auto px-6 md:px-[60px] mb-[110px]" data-aos="fade-up" data-aos-delay="200">
        <div class="w-full aspect-[2/1] rounded-[48px] border border-[color:var(--card-border)] overflow-hidden relative bg-[color:var(--card-bg)] group">
          <NuxtImg
            src="/images/blog/ga4-data-api-nuxt-funnel-notebook-hero.png"
            alt="Open cream notebook on a light oak desk with hand-drawn GA4 funnel sketch, the 'runReport' API endpoint, 'raw JSON' notes, and 'measure first' motto."
            title="GA4 Data API: The Measurable Designer's Notebook"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            width="2400" height="1200"
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) calc(100vw - 120px), 1320px"
            format="webp" quality="92" loading="eager" decoding="async" fetchpriority="high"
          />
          <div class="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[0.16em] py-2.5 px-4 rounded-full flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse"></span>
            Live dashboard · worst step auto-flagged
          </div>
        </div>
      </figure>

      <!-- EDITORIAL GRID -->
      <div class="max-w-[1440px] mx-auto px-6 md:px-[60px] pb-2">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-[80px] items-start">

          <article class="xl:col-span-8 max-w-[760px]">

            <!-- TL;DR -->
            <div class="text-[1.32rem] font-medium leading-[1.6] text-[color:var(--ink)] border-l-2 border-[color:var(--accent-1)] pl-6 mb-12" data-aos="fade-up">
              <strong>The 60-second version.</strong> GA4's UI answers the questions Google predicted. It will never answer yours. The fix: one Nuxt server route (~60 lines) that calls the Data API, shapes a funnel, and caches it for an hour.
            </div>

            <!-- Confidentiality Note -->
            <div class="mb-12 py-5 px-6 border border-dashed border-[color:var(--card-border)] rounded-2xl bg-[color:var(--card-bg)]/50" data-aos="fade-up">
              <p class="m-0 text-[0.98rem] leading-[1.65] text-[color:var(--ink-soft)]">
                <strong class="text-[color:var(--ink)]">A note on numbers.</strong>
                Client names are withheld and figures are rounded throughout. The method is the deliverable — everything here runs on <em>your</em> property, <em>your</em> events, <em>your</em> data.
              </p>
            </div>

            <!-- WHY BOTHER -->
            <h2 id="why-bother" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)] scroll-mt-32" data-aos="fade-up">Why should a designer bother with the GA4 Data API at all?</h2>

            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              Because the distance between "I designed it" and "I can prove it worked" is exactly one API call. GA4's interface is built for analysts answering Google's predicted questions; your funnel, your events, and your definitions live nowhere in it. When I started pulling reports into my own dashboard, design reviews stopped being opinion fights and started being arithmetic.
            </p>
            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              That shift is the entire reason I now ship analytics with every project. A designer who can query their own tracking is a designer who never has to say "trust me."
            </p>

            <!-- PREREQUISITES -->
            <h2 id="prerequisites" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)] scroll-mt-32" data-aos="fade-up">What do you need before writing a single line of code?</h2>
            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              Four things, all free: a GA4 property with your custom events firing, a Google Cloud project with the Analytics Data API enabled, a service account added as a <strong class="font-bold text-[color:var(--ink)]">Viewer</strong> on the GA4 property, and your property ID (<code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold">properties/123456789</code>). That's the whole setup.
            </p>

            <!-- Callout Box -->
            <div class="relative my-11 py-[30px] pr-[34px] pl-[38px] bg-[color:var(--accent-1)]/5 border border-[color:var(--accent-1)]/20 rounded-3xl overflow-hidden" data-aos="fade-up">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--accent-1)] to-[color:var(--accent-2)]"></div>
              <div class="flex items-center gap-2.5 font-extrabold text-[1rem] text-[color:var(--accent-text)] mb-2.5">
                <Icon name="lucide:alert-circle" class="w-5 h-5" />
                The missing step
              </div>
              <p class="text-[1rem] text-[color:var(--ink-soft)] m-0">
                The service account must be added inside GA4 (Admin → Property Access Management), not just in Google Cloud. Skip it and the API returns empty rows with zero errors — the most polite failure mode in software.
              </p>
            </div>

            <!-- HOW IT WORKS -->
            <h2 id="how-it-works" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)] scroll-mt-32" data-aos="fade-up">How does the GA4 Data API actually work?</h2>
            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              One endpoint does 90% of the work: <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold">runReport</code>. You POST a request describing dimensions (rows), metrics (numbers), and a date range; Google returns a table. Filters narrow rows the same way a segment would in the UI — but in JSON, versionable, and repeatable.
            </p>

            <!-- Code Snippet -->
            <div class="my-10 rounded-[24px] overflow-hidden bg-[#09090b] border border-[#27272a] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]" data-aos="fade-up">
              <div class="flex items-center justify-between py-3.5 px-6 bg-[#18181b] border-b border-[#27272a]">
                <span class="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#71717a]">JSON Payload</span>
                <div class="flex gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#3f3f46]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#3f3f46]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#3f3f46]"></span>
                </div>
              </div>
              <pre class="m-0 p-8 overflow-x-auto font-mono text-[0.86rem] leading-[1.85] text-[#e4e4e7] whitespace-pre"><code><span class="text-[#c792ea]">POST</span> <span class="text-[#a5d6a7]">https://analyticsdata.googleapis.com/v1beta/properties/123456789:runReport</span>
{
  "dateRanges": [{ "startDate": "30daysAgo", "endDate": "today" }],
  "dimensions": [{ "name": "eventName" }],
  "metrics": [{ "name": "eventCount" }],
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "inListFilter": { "values": ["cta_click", "form_start", "generate_lead"] }
      }
    }
  }
}</code></pre>
            </div>

            <p class="text-[1.32rem] leading-[1.6] font-medium text-[color:var(--ink)] border-l-2 border-[color:var(--accent-1)] pl-6 my-10" data-aos="fade-up">
              Read that payload once and the mental model locks in: <strong>dimensions are columns you group by, metrics are columns you sum, filters are the WHERE clause.</strong> Everything else is vocabulary.
            </p>

            <!-- Event Naming Callout -->
            <div id="naming" class="relative my-11 py-[30px] pr-[34px] pl-[38px] bg-[#33cc95]/5 border border-[#33cc95]/25 rounded-3xl overflow-hidden" data-aos="fade-up">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#33cc95]"></div>
              <div class="flex items-center gap-2.5 font-extrabold text-[1rem] text-[#1a9d77] dark:text-[#33cc95] mb-4">
                <Icon name="lucide:tags" class="w-5 h-5" />
                Name your events like future-you will query them
              </div>
              <ul class="m-0 p-0 list-none flex flex-col gap-3 text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]">
                <li class="flex gap-3">
                  <span class="text-[#33cc95] font-bold shrink-0">→</span>
                  <span><strong class="text-[color:var(--ink)]">Borrow GA4's own vocabulary:</strong> <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">form_start</code> and <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">generate_lead</code> are Google-recommended names — the route in this article works on any property that adopted them.</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-[#33cc95] font-bold shrink-0">→</span>
                  <span><strong class="text-[color:var(--ink)]">One funnel, one naming family:</strong> never mix <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">Click_CTA</code> with <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">cta_click</code>. The API is case-sensitive; your memory is not.</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-[#33cc95] font-bold shrink-0">→</span>
                  <span><strong class="text-[color:var(--ink)]">Register custom events as conversions</strong> in the GA4 UI, or they vanish from the reports you query later.</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-[#33cc95] font-bold shrink-0">→</span>
                  <span><strong class="text-[color:var(--ink)]">Keep a naming doc next to the GTM container.</strong> Six months from now, that doc is the difference between a query and an archaeology dig.</span>
                </li>
              </ul>
            </div>

            <!-- MISTAKES -->
            <h2 id="mistakes" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)] scroll-mt-32" data-aos="fade-up">Which mistakes cost me the most time?</h2>
            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              Five, and every one of them fails silently or misleadingly. Learn them in order and this project costs you an afternoon instead of a week:
            </p>

            <ul class="list-none my-10 flex flex-col gap-4 p-0">
              <li class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-all duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]" data-aos="fade-up">
                <span class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]">01</span>
                <div>
                  <strong class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]">Service account not added to the GA4 property.</strong>
                  <span class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]">Empty rows, no error, no explanation. Add it in GA4 Admin, not just Google Cloud.</span>
                </div>
              </li>
              <li class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-all duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]" data-aos="fade-up">
                <span class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]">02</span>
                <div>
                  <strong class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]">Event name case mismatch.</strong>
                  <span class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]"><code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">cta_click</code> ≠ <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">Cta_Click</code>. The API is case-sensitive; your past self who typed fast was not careful.</span>
                </div>
              </li>
              <li class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-all duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]" data-aos="fade-up">
                <span class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]">03</span>
                <div>
                  <strong class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]">No caching.</strong>
                  <span class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]">Every visitor triggered a fresh API call. <strong class="text-[color:var(--ink)]">This isn't just a performance issue; it's a financial and stability risk.</strong> Quota burned, latency doubled, demo died. Using Nuxt's <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">defineCachedEventHandler</code> fixed all three <strong class="text-[color:var(--accent-1)]">and protected the client's API limits</strong>.</span>
                </div>
              </li>
              <li class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-all duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]" data-aos="fade-up">
                <span class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]">04</span>
                <div>
                  <strong class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]">Timezone blindness.</strong>
                  <span class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]">"30daysAgo → today" follows the <em>property's</em> timezone, not yours. A designer in Cairo reading an Ohio-based property will see "yesterday" where they expect "today."</span>
                </div>
              </li>
              <li class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-all duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]" data-aos="fade-up">
                <span class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]">05</span>
                <div>
                  <strong class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]">Trusting the first number.</strong>
                  <span class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]">Before believing any funnel, cross-check it against a second source. In one project the "~90% form drop" was partly a broken <code class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold">form_start</code> tag — the measurement was leaking, not just the UX.</span>
                </div>
              </li>
            </ul>

            <!-- Pullquote -->
            <div class="my-14 p-10 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-[color:var(--accent-1)] rounded-r-3xl rounded-l shadow-[0_24px_50px_-30px_rgba(109,94,240,0.25)]" data-aos="fade-up">
              <p class="m-0 text-[1.35rem] font-semibold leading-[1.5] text-[color:var(--ink)] tracking-[-0.01em]">
                That fifth mistake became a permanent rule: <strong class="bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] font-extrabold">fix the measurement before you fix the design.</strong>
              </p>
            </div>

            <!-- REVEAL -->
            <h2 id="reveal" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)] scroll-mt-32" data-aos="fade-up">What did the dashboard reveal that GA4's UI didn't?</h2>
            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              One line instead of three reports. In GA4's interface, the funnel lived across Events, Explorations, and a custom segment someone had to rebuild every week. In the dashboard it's a single row:
            </p>

            <!-- Stat Row -->
            <div class="my-12 py-10 px-8 md:px-12 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-6 shadow-[0_20px_50px_-32px_rgba(109,94,240,0.28)] justify-center md:justify-start" data-aos="fade-up">
              <div class="flex items-center gap-2">
                <span class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-[color:var(--ink)] leading-none">~300</span>
                <span class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">sessions</span>
              </div>
              <span class="text-2xl font-light text-gray-400 dark:text-gray-600 mx-1 md:mx-2 translate-y-[2px]">→</span>
              <div class="flex items-center gap-2">
                <span class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-[color:var(--ink)] leading-none">~130</span>
                <span class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">cta_click</span>
              </div>
              <span class="text-2xl font-light text-gray-400 dark:text-gray-600 mx-1 md:mx-2 translate-y-[2px]">→</span>
              <div class="flex items-center gap-2">
                <span class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-[color:var(--ink)] leading-none">~45</span>
                <span class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">form_start</span>
              </div>
              <span class="text-2xl font-light text-gray-400 dark:text-gray-600 mx-1 md:mx-2 translate-y-[2px]">→</span>
              <div class="flex items-center gap-2">
                <span class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-red-500 leading-none">~5</span>
                <span class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]">generate_lead</span>
              </div>
            </div>

            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              with the worst step flagged in red automatically. That one row changed a product decision: roughly nine in ten people who started the form never submitted it. It sent the team to session recordings, where the real friction was found — and fixed within days. I publish client-specific versions of stories like this only with written permission; until then, <strong class="text-[color:var(--ink)]">the anonymity is the professionalism.</strong>
            </p>

            <p class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7" data-aos="fade-up">
              When you're raising funds or launching a beta, <strong class="text-[color:var(--ink)]">investors and early users don't care about your UI gradients; they care about your conversion rates.</strong> This dashboard gave us the exact metric we needed to prove we understood our users.
            </p>

            <!-- ═══════════ 🎬 MEDIA SECTION — VIDEO ONLY (no podcast) ═══════════ -->
            <div class="my-12 no-print" data-aos="fade-up">
              <button type="button" @click="openVideoModal" class="group w-full p-6 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] flex items-center gap-4 text-left hover:border-[color:var(--accent-1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(109,94,240,0.25)] transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white flex items-center justify-center shrink-0">
                  <Icon name="lucide:play" class="w-6 h-6" />
                </div>
                <div class="flex-1">
                  <div class="text-[14px] font-black text-[color:var(--ink)] m-0 mb-1">Watch the Explainer</div>
                  <div class="text-[12px] text-[color:var(--ink-soft)] m-0">Nuxt server route walkthrough · 5 mistakes that cost days</div>
                </div>
                <Icon name="lucide:arrow-right" class="w-5 h-5 text-[color:var(--ink-soft)] group-hover:text-[color:var(--accent-1)] group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            </div>

            <!-- FAQ -->
            <h2 id="faq" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[80px] mb-6 pb-[18px]" data-aos="fade-up">FAQ</h2>
            <div class="flex flex-col border-b border-[color:var(--card-border)]" data-aos="fade-up">
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

            <div class="mt-20">
              <PlaybookCTA
                title="Working on a launch that needs to prove itself?"
                description="Same method, same receipts, your numbers. First call: 30 minutes, free, honest."
                button-text="Book a Free Audit Call"
                :deliverables="[
                  { code: 'build/', text: 'Nuxt 3 & Tailwind Architecture' },
                  { code: 'routes/', text: 'Server-side API tracking' },
                  { code: 'schema.sql', text: 'Supabase Data Structuring' },
                ]"
              />
            </div>
          </article>

          <!-- SIDEBAR -->
          <aside class="hidden xl:flex flex-col gap-7 xl:col-span-4 sticky top-[100px] no-print">
            <!-- MiniPlayer هيختفي تلقائياً لأن مفيش podcast لـ GA4 -->
            <MiniPlayer v-if="articleMedia" :item="articleMedia" @play="openAudioModal" />

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-5">On this page</span>
              <ul class="flex flex-col gap-3 m-0 p-0 list-none">
                <li><a href="#why-bother" class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">Why bother as a designer</a></li>
                <li><a href="#prerequisites" class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">Prerequisites</a></li>
                <li><a href="#how-it-works" class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">How the API works</a></li>
                <li><a href="#naming" class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[#33cc95] transition-all block">Event naming rules</a></li>
                <li><a href="#mistakes" class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">The 5 mistakes</a></li>
                <li><a href="#reveal" class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">What the dashboard revealed</a></li>
                <li><a href="#faq" class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">FAQ</a></li>
              </ul>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-5">Share Playbook</span>
              <div class="flex gap-3">
                <button @click="sharePlaybook('twitter')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1" aria-label="Share on X (Twitter)">
                  <Icon name="simple-icons:x" class="w-4.5 h-4.5" />
                </button>
                <button @click="sharePlaybook('linkedin')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1" aria-label="Share on LinkedIn">
                  <Icon name="lucide:linkedin" class="w-4.5 h-4.5" />
                </button>
                <button @click="sharePlaybook('copy')" class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1" :class="copied ? 'bg-[#33cc95] text-white border-transparent' : 'text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent'" aria-label="Copy Link">
                  <Icon v-if="copied" name="lucide:check" class="w-5 h-5" />
                  <Icon v-else name="lucide:link" class="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br from-[color:var(--accent-1)]/10 to-[color:var(--accent-2)]/10 text-[color:var(--accent-text)] flex items-center justify-center mb-5">
                <Icon name="lucide:layers" class="w-5 h-5" />
              </div>
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent-text)] mb-2">Series</span>
              <h4 class="text-[1.18rem] font-extrabold text-[color:var(--ink)] leading-[1.25] tracking-[-0.015em] mb-3">Tracking for Designers</h4>
              <p class="text-[0.92rem] text-[color:var(--ink-soft)] leading-[1.65] mb-5">Bridging the gap between design decisions and measurable business outcomes.</p>
              <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-[0.88rem] font-extrabold text-[color:var(--ink)] hover:text-[color:var(--accent-text)] hover:gap-3 transition-all duration-200">
                View all notes <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </NuxtLink>
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
// 1. PAGE META
// ═════════════════════════════════════════════════════════
definePageMeta({
  layout: 'playbook',
  backLabel: 'Playbooks',
  backTo: '/blog',
})

const mounted = ref(false)

// ═════════════════════════════════════════════════════════
// 2. MEDIA IDs — VIDEO ONLY (no Spotify for GA4)
// ═════════════════════════════════════════════════════════
const YOUTUBE_VIDEO_ID = 'N-3SGmEKIsE'
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`
// ⚠️ GA4 مفيش بودكاست — لا Spotify ID ولا Episode URL

// ═════════════════════════════════════════════════════════
// 3. FAQ ITEMS — BEFORE usePageMeta ✅
// ═════════════════════════════════════════════════════════
const activeFaq = ref(0)
const toggleFaq = (index) => { activeFaq.value = activeFaq.value === index ? null : index }

const faqItems = ref([
  {
    question: "Is the GA4 Data API free?",
    answer: "Yes. It ships with every GA4 property, including free ones. You're bounded by quotas (roughly 10k core requests/day per property), which an hourly-cached dashboard will never approach.",
  },
  {
    question: "Do I need a developer to pull GA4 data?",
    answer: "No. The server route in this article is about 60 lines and needs no frontend skills beyond pasting it into server/api/. If you can edit a Nuxt project, you can own your analytics.",
  },
  {
    question: "Can I use an API key instead of a service account?",
    answer: "For runReport, yes — but a service account scales better, keeps keys out of client code, and is mandatory the moment you touch the Admin API. Start right, not fast.",
  },
  {
    question: "How often should my dashboard refresh?",
    answer: "Hourly is plenty. Design and funnel decisions operate on days and weeks; minute-level freshness only feeds anxiety, not judgment.",
  },
  {
    question: "Does the Data API return raw user-level hits?",
    answer: "No — it returns aggregated reports. For hit-level analysis you want the BigQuery export. Different tool, different article.",
  },
  {
    question: "Can I publish my client's metrics in articles or my portfolio?",
    answer: "Only with written permission. Until then, withhold the name, round the figures, and label them as rounded. The method travels; the numbers belong to the client.",
  },
  {
    question: "What if my site has no custom events yet?",
    answer: "Start with GA4's recommended events (form_start, generate_lead) via GTM — they're free to adopt and instantly queryable through the Data API. Add cta_click when you need the middle of the funnel.",
  },
])

// ═════════════════════════════════════════════════════════
// 4. SEO
// ═════════════════════════════════════════════════════════
usePageMeta({
  title: "GA4 Data API for Designers — Pull Funnels Into Your Own Dashboard | Mamdouh Ghaneemy",
  description: "Stop exporting CSVs. The exact Nuxt server route I use to pull GA4 funnel data into my own dashboard — with the 5 mistakes that cost me days.",
  keywords: [
    "GA4 Data API", "google analytics 4 api", "nuxt server routes",
    "supabase analytics", "conversion funnel dashboard", "analytics for designers", "GA4 event naming conventions",
  ],
  ogType: "article",
  ogImage: "https://mamdouhghaneemy.com/images/blog/ga4-data-api-nuxt-funnel-notebook-hero.png",
  article: {
    publishedTime: "2026-10-12T00:00:00Z",
    section: "Tracking for Designers",
    tags: ["GA4", "Nuxt", "Analytics", "Data API"],
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Playbooks", url: "/blog" },
    { name: "GA4 Data API", url: "/blog/ga4-data-api-for-designers" },
  ],
  faqItems: faqItems.value,
})

// ═════════════════════════════════════════════════════════
// 5. MEDIA from Supabase — هي rجع null لأن مفيش podcast
// ═════════════════════════════════════════════════════════
const { fetchByArticle } = useMedia()
const { data: articleMedia } = await useAsyncData('article-media-ga4', () =>
  fetchByArticle('ga4-data-api-for-designers')
)
// فلترة للـ podcast فقط → سترجع null لأن مفيش بودكاست
articleMedia.value = articleMedia.value?.find(m => m.media_type === 'podcast') || null

// ═════════════════════════════════════════════════════════
// 6. STATE
// ═════════════════════════════════════════════════════════
const readingProgress = ref(0)
const focusMode = ref(false)
const showCitation = ref(false)
const showVideoModal = ref(false)
const speechPlaying = ref(false)
const copiedMd = ref(false)
const copiedLink = ref(false)
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
// 8. PROGRESS + FOCUS
// ═════════════════════════════════════════════════════════
const updateProgress = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  readingProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

const toggleFocusMode = () => {
  focusMode.value = !focusMode.value
  showToast(focusMode.value ? 'Focus mode ON' : 'Focus mode OFF')
}

// ═════════════════════════════════════════════════════════
// 9. VIDEO MODAL — VIDEO ONLY
// ═════════════════════════════════════════════════════════
const youtubeEmbedUrl = computed(() =>
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&fs=1&color=white`
)
const openVideoModal = () => { showVideoModal.value = true }
const closeVideoModal = () => { showVideoModal.value = false }

// ⚠️ مفيش openAudioModal لأن مفيش podcast
// الـ MiniPlayer مش هيظهر لأن articleMedia = null
const openAudioModal = () => { showToast('No podcast for this article') }

// ═════════════════════════════════════════════════════════
// 10. CITATION
// ═════════════════════════════════════════════════════════
const citationFormats = [
  { id: 'apa', label: 'APA 7th', value: 'Ghaneemy, M. (2026). GA4 Data API for Designers: Pull Funnel Data Into Your Own Dashboard. Retrieved from https://mamdouh-ghaneemy.com/blog/ga4-data-api-for-designers' },
  { id: 'chicago', label: 'Chicago', value: 'Ghaneemy, Mamdouh. "GA4 Data API for Designers." Last modified October 12, 2026. https://mamdouh-ghaneemy.com/blog/ga4-data-api-for-designers.' },
  { id: 'bibtex', label: 'BibTeX', value: `@article{ghaneemy2026ga4,\n  title={GA4 Data API for Designers},\n  author={Ghaneemy, Mamdouh},\n  year={2026},\n  url={https://mamdouh-ghaneemy.com/blog/ga4-data-api-for-designers}\n}` },
]

const copyCitation = async (text) => {
  if (typeof window === 'undefined') return
  try {
    await navigator.clipboard.writeText(text)
    showToast('Citation copied!')
  } catch (e) { showToast('Copy failed') }
}

// ═════════════════════════════════════════════════════════
// 11. BUILD MARKDOWN
// ═════════════════════════════════════════════════════════
const buildMarkdown = () => {
  const md = []
  md.push(`# GA4 Data API for Designers: Pull Funnel Data Into Your Own Dashboard`)
  md.push('')
  md.push(`> Stop exporting CSVs. Here's the exact Nuxt server route I use to pull GA4 funnel data into my own dashboard — with the 5 mistakes that cost me days.`)
  md.push('')
  md.push(`**Author:** Mamdouh Ghaneemy — Strategic Product Designer  `)
  md.push(`**Reading time:** ~9 min`)
  md.push('')
  md.push('---')
  md.push('')
  md.push('## Prerequisites')
  md.push('')
  md.push('- GA4 property with custom events')
  md.push('- Google Cloud project with Analytics Data API enabled')
  md.push('- Service account as Viewer on GA4')
  md.push('- Property ID (properties/123456789)')
  md.push('')
  md.push('## The runReport endpoint')
  md.push('')
  md.push('```json')
  md.push('POST https://analyticsdata.googleapis.com/v1beta/properties/123456789:runReport')
  md.push('{')
  md.push('  "dateRanges": [{ "startDate": "30daysAgo", "endDate": "today" }],')
  md.push('  "dimensions": [{ "name": "eventName" }],')
  md.push('  "metrics": [{ "name": "eventCount" }]')
  md.push('}')
  md.push('```')
  md.push('')
  md.push('## The 5 Mistakes')
  md.push('')
  md.push('1. Service account not added to GA4 property')
  md.push('2. Event name case mismatch')
  md.push('3. No caching')
  md.push('4. Timezone blindness')
  md.push('5. Trusting the first number')
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
  md.push('Originally published at https://mamdouh-ghaneemy.com/blog/ga4-data-api-for-designers')
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
// 12. COPY LINK
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
// 13. SPEECH
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
// 14. PRINT
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
// 15. SHARE
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
// 16. KEYBOARD
// ═════════════════════════════════════════════════════════
const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); toggleFocusMode() }
  if ((e.metaKey || e.ctrlKey) && e.key === 'l') { e.preventDefault(); toggleSpeech() }
  if (e.key === 'Escape') {
    showCitation.value = false
    showVideoModal.value = false
  }
}

// ═════════════════════════════════════════════════════════
// 17. LIFECYCLE
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

/* Inline code contrast */
:deep(code) {
  @apply text-[color:var(--ink)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-1.5 py-0.5 rounded font-mono text-[0.85em] font-semibold;
}
:deep(pre code) {
  @apply bg-transparent border-none p-0 text-inherit text-sm font-normal;
}

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
    content: "Originally published at https://mamdouh-ghaneemy.com/blog/ga4-data-api-for-designers";
    display: block; margin-top: 30px; padding-top: 15px;
    border-top: 1px solid #cccccc; font-size: 9pt; color: #777777; font-style: italic;
  }
}
</style>