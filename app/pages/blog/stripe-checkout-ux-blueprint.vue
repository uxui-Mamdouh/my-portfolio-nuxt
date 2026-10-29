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

    <!-- ═══════════════ TOASTS ═══════════════ -->
    <Teleport v-if="mounted" to="body">
      <TransitionGroup name="toast" tag="div" class="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col gap-2 pointer-events-none no-print" style="z-index: 9999999 !important;">
        <div v-for="toast in toasts" :key="toast.id" class="px-5 py-3 rounded-full bg-[color:var(--ink)] text-white text-[13px] font-bold shadow-2xl flex items-center gap-2">{{ toast.message }}</div>
      </TransitionGroup>
    </Teleport>

    <!-- ═══════════════ ARTICLE ═══════════════ -->
    <article class="bg-[color:var(--page-bg-1)] min-h-screen text-[color:var(--ink)] font-sans relative selection:bg-[color:var(--accent-1)] selection:text-white pb-32" :class="{ 'focus-mode': focusMode }" id="main-article">

      <!-- HERO -->
      <section class="relative pt-12 md:pt-24 pb-20" :class="{ 'pt-32': focusMode }">
        <div class="absolute inset-0 w-full h-[120%] overflow-hidden pointer-events-none z-0 no-print">
          <div class="absolute top-[-100px] right-[-100px] md:right-[10%] w-[500px] md:w-[780px] h-[500px] md:h-[780px] rounded-full bg-[radial-gradient(circle,rgba(51,204,149,0.12)_0%,transparent_70%)] blur-3xl"></div>
          <div class="absolute bottom-[20%] left-[-150px] w-[400px] md:w-[620px] h-[400px] md:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(109,94,240,0.1)_0%,transparent_70%)] blur-3xl"></div>
        </div>

        <div class="max-w-[1440px] mx-auto px-6 md:px-[60px] relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div class="lg:col-span-7" data-aos="fade-up">
              <div class="flex items-center flex-wrap gap-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] mb-8">
                <span class="text-[color:var(--ink-soft)] bg-[color:var(--card-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full">Fintech · S02</span>
                <span class="text-[color:var(--accent-1)]">14 Min Read</span>
                <span class="w-1 h-1 rounded-full bg-[color:var(--card-border)]"></span>
                <span class="text-[color:var(--ink-soft)]">Oct 2026</span>
              </div>

              <h1 class="text-[clamp(2.4rem,5.4vw,4.4rem)] font-black tracking-[-0.035em] leading-[1.02] mb-8 text-[color:var(--ink)]">
                Breaking Down Stripe's Checkout:
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2">The UX Blueprint for Series A.</span>
              </h1>

              <p class="text-[1.22rem] font-medium text-[color:var(--ink-soft)] leading-[1.55] max-w-[620px] pl-6 border-l-2 border-[color:var(--ink-soft)]/40 mb-10">
                In Pre-Series A, your checkout isn't just a form. It's the last line of defense against churn — and the first thing investors scrutinize in diligence.
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

            <!-- Payoff Card -->
            <div class="lg:col-span-5 relative" data-aos="fade-up" data-aos-delay="150">
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[40px] p-10 md:p-12 min-h-[420px] flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.25)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden group">
                <div class="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(199,57,46,0.15),transparent_70%)] pointer-events-none z-0"></div>
                <div class="relative z-10">
                  <span class="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-5">Effective CAC Impact</span>
                  <div class="flex items-baseline gap-4 mb-3">
                    <span class="text-[clamp(4rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-red-500">11%</span>
                  </div>
                  <p class="text-[1.05rem] font-bold text-[color:var(--ink)] leading-snug m-0">
                    higher CAC for every 10% checkout drop.
                  </p>
                </div>
                <div class="mt-8 pt-7 border-t border-[color:var(--card-border)] relative z-10">
                  <span class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-2">The Reality</span>
                  <p class="text-[0.9rem] text-[color:var(--ink-soft)] leading-relaxed m-0">
                    Investors read checkout metrics as <strong class="text-[color:var(--ink)]">proof that growth is repeatable</strong>. A leaky flow weakens both unit economics and valuation.
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
            src="/images/blog/stripe-checkout-ux-blueprint-hero.png"
            alt="Split screen showing Stripe-style checkout interface on the left and abstract five-decision framework flow diagram on the right, side by side against a deep emerald gradient."
            title="Stripe Checkout UX Blueprint for Series A"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            width="2400"
            height="1200"
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) calc(100vw - 120px), 1320px"
            format="webp"
            quality="92"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <div class="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[0.16em] py-2.5 px-4 rounded-full flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse"></span>
            Five decisions · Auditable this month
          </div>
        </div>
        <figcaption class="sr-only">
          The Stripe Checkout UX Blueprint: how five business-first decisions turn a leaky payment form into a Series A asset.
        </figcaption>
      </figure>

      <!-- EDITORIAL GRID -->
      <div class="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-[80px] items-start">

          <!-- ✅ ID أضيف لاستهداف محتوى المقال من الـ Composable -->
          <article id="article-body" class="xl:col-span-8 max-w-[740px] text-[17px] leading-[1.75] text-[color:var(--ink-soft)]">

            <!-- Opening -->
            <p class="text-[20px] text-[color:var(--ink)] font-medium mb-7" data-aos="fade-up">
              Last month, a founder I've been advising asked me the same question I hear from every Pre-Series A founder:
            </p>

            <p class="text-[22px] font-bold text-[color:var(--ink)] text-center py-6 my-8 leading-snug" data-aos="fade-up">
              "Should I spend the next month on product,<br />or on sales?"
            </p>

            <p class="mb-7" data-aos="fade-up">
              I told him: <strong class="text-[color:var(--ink)]">Neither. Fix your checkout.</strong>
            </p>

            <p class="mb-7" data-aos="fade-up">
              He was confused. His checkout was Stripe-hosted. Standard. Clean. Modern. Nothing looked broken.
            </p>

            <p class="mb-7" data-aos="fade-up">
              The problem: he had <strong class="text-[color:var(--ink)]">no step-level data</strong> on where users were dropping. And his investors were about to ask him exactly that in diligence. Overall conversion rate wasn't going to save him.
            </p>

            <p class="mb-7" data-aos="fade-up">
              I've seen the same pattern at <strong class="text-[color:var(--ink)]">Qompyl</strong> — the fintech app I've been designing, still in early access, still pre-checkout. We already instrument the waitlist funnel against these five decisions. The reason is simple: by the time checkout ships, the baselines are ready, and the question stops being "did it work?" and becomes "by how much?"
            </p>

            <div class="border-l-[3px] border-amber-400 bg-amber-400/10 dark:bg-amber-400/5 px-6 py-5 rounded-r-xl mb-7" data-aos="fade-up">
              <p class="m-0 text-[#b49852] dark:text-[#d8d0b8] text-[16px] leading-relaxed">
                <strong class="text-[#b49852] dark:text-[#f0e4c8]">Most founders treat checkout as a finishing task.</strong> Investors read it as proof that growth is repeatable. Two completely different lenses on the same form.
              </p>
            </div>

            <p class="mb-7" data-aos="fade-up">
              This article breaks down what I've learned from auditing fintech checkouts and waitlist funnels — including the instrumentation work I'm doing at Qompyl — and turns it into a <strong class="text-[color:var(--ink)]">five-decision framework</strong> you can audit this month.
            </p>

            <!-- Series A framing -->
            <p class="text-[18px] font-bold text-[color:var(--ink)] border-l-2 border-[color:var(--accent-1)] pl-5 my-10" data-aos="fade-up">
              Pre-Series A, your checkout isn't a form. It's the last line of defense against churn, and the first thing investors scrutinize in due diligence.
            </p>

            <!-- ═══════════════ SECTION 1: WHY SERIES A ═══════════════ -->
            <h2 id="why-series-a" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">
              Why Checkout Is a Series A Asset, Not a Form
            </h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> Checkout friction raises CAC because every abandoned session wastes the acquisition spend that produced it. If checkout conversion falls 10%, your effective cost per paying customer rises about 11%. Investors treat checkout metrics as proof that growth is repeatable, so a leaky flow weakens both unit economics and valuation.
              </p>
            </div>

            <p class="mb-7" data-aos="fade-up">
              <strong class="text-[color:var(--ink)]">How does this affect CAC?</strong> The arithmetic is unforgiving. Effective CAC equals blended acquisition cost divided by checkout conversion. If you pay $120 to bring a user to checkout and 50% complete it, you're really paying $240 per customer. Raise completion to 60% and the same traffic costs $200.
            </p>

            <p class="mb-7" data-aos="fade-up">
              That's a <strong class="text-[color:var(--ink)]">17% CAC reduction</strong> without touching your ad budget — which is why checkout work often beats channel work on payback period.
            </p>

            <!-- What Investors look for -->
            <div class="my-10 p-6 md:p-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px]" data-aos="fade-up">
              <div class="flex items-center gap-2 mb-5">
                <Icon name="lucide:search-check" class="w-5 h-5 text-[color:var(--accent-1)]" />
                <h3 class="text-[1.1rem] font-extrabold text-[color:var(--ink)] m-0">What investors look for in checkout</h3>
              </div>
              <ul class="flex flex-col gap-3 m-0 p-0 list-none">
                <li class="flex gap-3 items-start">
                  <span class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">01</span>
                  <span class="text-[15px] leading-[1.65]"><strong class="text-[color:var(--ink)]">Step-level funnel data</strong> — not just the overall conversion rate.</span>
                </li>
                <li class="flex gap-3 items-start">
                  <span class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">02</span>
                  <span class="text-[15px] leading-[1.65]"><strong class="text-[color:var(--ink)]">Payment authorization rate</strong> — separated from user-driven abandonment.</span>
                </li>
                <li class="flex gap-3 items-start">
                  <span class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">03</span>
                  <span class="text-[15px] leading-[1.65]"><strong class="text-[color:var(--ink)]">Evidence of iteration</strong> — what was tested, what moved, what didn't.</span>
                </li>
                <li class="flex gap-3 items-start">
                  <span class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">04</span>
                  <span class="text-[15px] leading-[1.65]"><strong class="text-[color:var(--ink)]">Risk posture</strong> — how fraud, verification, and compliance friction are balanced.</span>
                </li>
              </ul>
            </div>

            <p class="mb-7" data-aos="fade-up">
              A founder who answers these with numbers signals operational maturity. One who answers with "we use a standard provider" signals the opposite. For the emotional side of this, see my earlier piece on
              <NuxtLink to="/blog/designing-for-fear" class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors">designing for fear</NuxtLink>.
            </p>

            <!-- ═══════════════ SECTION 2: STRIPE GREAT ═══════════════ -->
            <h2 id="stripe-great" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">
              What Makes Stripe Checkout Great?
            </h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> Stripe checkout is great because it removes decisions and typing at the moment of highest anxiety. It formats input as you type, surfaces locally relevant payment methods, validates inline, and recognizes returning payers. Each pattern lowers effort or perceived risk, which is why the flow feels fast even when it isn't.
              </p>
            </div>

            <p class="mb-7" data-aos="fade-up">
              Stripe's quality is not visual polish. It's a consistent philosophy: <strong class="text-[color:var(--ink)]">the user's attention is the scarcest resource on the page</strong>. Publicly, you can observe the following:
            </p>

            <div class="flex flex-col gap-4 my-8" data-aos="fade-up">
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:wand-2" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Input that corrects itself
                </h4>
                <p class="text-[15px] leading-relaxed m-0">Card numbers are grouped as you type, the card brand is detected automatically, and the expiry field accepts loose formats.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:globe" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Payment methods matched to context
                </h4>
                <p class="text-[15px] leading-relaxed m-0">Methods shown vary by region and currency, so a user rarely scans options that don't apply to them.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:message-circle-warning" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Errors at the field
                </h4>
                <p class="text-[15px] leading-relaxed m-0">Plain language inline, rather than a summary banner after submission.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:user-check" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Returning-user recognition
                </h4>
                <p class="text-[15px] leading-relaxed m-0">Saved details and one-tap wallets remove the form entirely for repeat payers.</p>
              </div>
            </div>

            <!-- Screenshot 1 -->
            <figure class="my-10 rounded-[20px] overflow-hidden border border-[color:var(--card-border)]" data-aos="fade-up">
              <NuxtImg
                src="/images/blog/stripe-checkout-card-entry.png"
                alt="Stripe-hosted checkout interface showing card entry with auto-grouped digits, detected card brand, and inline validation copy."
                title="Stripe checkout — card entry state"
                class="w-full h-auto object-cover"
                width="1600"
                height="900"
                sizes="(max-width: 768px) 100vw, 740px"
                format="webp"
                quality="90"
              />
              <figcaption class="px-5 py-3 text-[12px] text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border-t border-[color:var(--card-border)] italic">
                Stripe checkout, card entry state. Three elements to notice: auto-grouped card number, detected card brand, inline error copy.
              </figcaption>
            </figure>

            <p class="text-[20px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10" data-aos="fade-up">
              The lesson isn't "copy Stripe." It's that every element earns its place by reducing either effort or fear.
            </p>

            <!-- ═══════════════ SECTION 3: 5 DECISIONS ═══════════════ -->
            <h2 id="decisions" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">
              The 5 Business-First Checkout Decisions
            </h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> The framework is — sequence for commitment, show the money early, remove typing before removing fields, convert fear into reassurance, and instrument every step. Each decision maps to a metric you can defend in due diligence: step completion, fee-surprise abandonment, time-to-pay, verification pass rate, and recovered revenue.
              </p>
            </div>

            <!-- Decision 1 -->
            <h3 id="decision-1" class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-12 mb-2 flex items-baseline gap-2.5 scroll-mt-32" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">01</span>
              Sequence for Commitment, Not Completeness
            </h3>
            <p class="mb-4" data-aos="fade-up">
              Ask for the lowest-effort, highest-intent input first. Email before address. Amount confirmation before identity. Each completed field raises the user's <strong class="text-[color:var(--ink)]">sunk investment</strong>, and sunk investment is what carries them through the harder steps later. Stripe's single-surface layout keeps the total ask visible, so the user never wonders how much is left.
            </p>
            <div class="flex gap-3 p-4 bg-[color:var(--accent-1)]/5 border border-[color:var(--accent-1)]/20 rounded-xl mb-7" data-aos="fade-up">
              <Icon name="lucide:target" class="w-5 h-5 text-[color:var(--accent-1)] shrink-0 mt-0.5" />
              <p class="m-0 text-[14px] leading-[1.6]"><strong class="text-[color:var(--ink)]">Metric to own:</strong> completion rate per step, with a target drop-off under 10% at any single step.</p>
            </div>

            <!-- Decision 2 -->
            <h3 id="decision-2" class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-12 mb-2 flex items-baseline gap-2.5 scroll-mt-32" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">02</span>
              Show the Money Before the Button
            </h3>
            <p class="mb-4" data-aos="fade-up">
              Surprise is the most expensive emotion in a payment flow. Wise built much of its brand on showing the fee, the exchange rate, and the recipient amount before you commit. That transparency is a <strong class="text-[color:var(--ink)]">conversion mechanism</strong>, not just ethics. If the total changes between the cart and the final screen, expect abandonment at exactly that point.
            </p>
            <div class="flex gap-3 p-4 bg-[color:var(--accent-1)]/5 border border-[color:var(--accent-1)]/20 rounded-xl mb-7" data-aos="fade-up">
              <Icon name="lucide:target" class="w-5 h-5 text-[color:var(--accent-1)] shrink-0 mt-0.5" />
              <p class="m-0 text-[14px] leading-[1.6]"><strong class="text-[color:var(--ink)]">Metric to own:</strong> abandonment immediately after total or fee display. If it spikes, your pricing communication is leaking revenue.</p>
            </div>

            <!-- Decision 3 -->
            <h3 id="decision-3" class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-12 mb-2 flex items-baseline gap-2.5 scroll-mt-32" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">03</span>
              Remove Typing Before You Remove Fields
            </h3>
            <p class="mb-4" data-aos="fade-up">
              Founders instinctively cut fields. Better teams <strong class="text-[color:var(--ink)]">cut keystrokes</strong>. Address autocomplete, wallet payments, saved cards, and correct mobile keyboards (numeric for card number, email for email) reduce effort without removing data you need for risk and compliance.
            </p>
            <p class="mb-4" data-aos="fade-up">
              Removing a required field can raise fraud losses or force manual review. Removing typing carries no such cost.
            </p>
            <div class="flex gap-3 p-4 bg-[color:var(--accent-1)]/5 border border-[color:var(--accent-1)]/20 rounded-xl mb-7" data-aos="fade-up">
              <Icon name="lucide:target" class="w-5 h-5 text-[color:var(--accent-1)] shrink-0 mt-0.5" />
              <p class="m-0 text-[14px] leading-[1.6]"><strong class="text-[color:var(--ink)]">Metric to own:</strong> median time-to-pay, segmented by device. Mobile should be within 1.5x of desktop.</p>
            </div>

            <!-- Decision 4 -->
            <h3 id="decision-4" class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-12 mb-2 flex items-baseline gap-2.5 scroll-mt-32" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">04</span>
              Convert Fear Into Reassurance at the Moment It Peaks
            </h3>
            <p class="mb-4" data-aos="fade-up">
              Fear peaks at three points: <strong class="text-[color:var(--ink)]">entering a card</strong>, <strong class="text-[color:var(--ink)]">confirming a large amount</strong>, and <strong class="text-[color:var(--ink)]">uploading identity documents</strong>. Place reassurance at those points, not in the footer.
            </p>
            <p class="mb-4" data-aos="fade-up">
              Examples: a plain-language reason beside a sensitive field, a visible confirmation of what happens after you press pay, and an authentication step (such as 3-D Secure) introduced with context rather than as a surprise redirect. Revolut's in-app verification applies the same idea, guiding document capture with live feedback instead of a blind upload.
            </p>
            <div class="flex gap-3 p-4 bg-[color:var(--accent-1)]/5 border border-[color:var(--accent-1)]/20 rounded-xl mb-7" data-aos="fade-up">
              <Icon name="lucide:target" class="w-5 h-5 text-[color:var(--accent-1)] shrink-0 mt-0.5" />
              <p class="m-0 text-[14px] leading-[1.6]"><strong class="text-[color:var(--ink)]">Metric to own:</strong> authentication and verification pass rate, tracked separately from abandonment.</p>
            </div>

            <!-- Decision 5 -->
            <h3 id="decision-5" class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-12 mb-2 flex items-baseline gap-2.5 scroll-mt-32" data-aos="fade-up">
              <span class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]">05</span>
              Instrument Every Step as a Board-Ready Metric
            </h3>
            <p class="mb-4" data-aos="fade-up">
              If you cannot see the leak, you cannot fix it, and you cannot prove you fixed it. Track every step, every error type, and every payment decline reason. <strong class="text-[color:var(--ink)]">Separate user abandonment from issuer declines</strong>, because the fixes are completely different.
            </p>
            <p class="mb-4" data-aos="fade-up">
              Add a recovery loop (retry prompts, alternative payment methods on decline) and measure what it brings back.
            </p>
            <div class="flex gap-3 p-4 bg-[color:var(--accent-1)]/5 border border-[color:var(--accent-1)]/20 rounded-xl mb-7" data-aos="fade-up">
              <Icon name="lucide:target" class="w-5 h-5 text-[color:var(--accent-1)] shrink-0 mt-0.5" />
              <p class="m-0 text-[14px] leading-[1.6]"><strong class="text-[color:var(--ink)]">Metric to own:</strong> recovered revenue from failed attempts as a percentage of total attempted volume.</p>
            </div>

            <!-- ═══════════════ SECTION 4: QOMPYL PRE-CHECKOUT ═══════════════ -->
            <h2 id="qompyl-evidence" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">
              Applying It: Qompyl's Pre-Checkout Stage
            </h2>

            <p class="mb-7" data-aos="fade-up">
              Qompyl is currently in early access — a mobile trading app collecting its first cohort of waitlist users before checkout ships. That means we don't have payment metrics yet. <strong class="text-[color:var(--ink)]">What we do have is a waitlist funnel</strong> — and it's the exact same instrumentation job.
            </p>

            <p class="mb-7" data-aos="fade-up">
              The five decisions map cleanly onto the pre-checkout stage. Here's how we're building the funnel today, so that when checkout goes live the baselines are already in place.
            </p>

            <div class="overflow-x-auto my-10 rounded-[14px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)]" data-aos="fade-up">
              <table class="w-full text-[13.5px] text-left">
                <thead class="bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)]">
                  <tr>
                    <th class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]">Decision</th>
                    <th class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]">Pre-Checkout Equivalent</th>
                    <th class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--accent-text)]">Instrumented Now</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[color:var(--card-border)]">
                  <tr>
                    <td class="px-5 py-4 font-bold text-[color:var(--ink)]">01 · Sequence for Commitment</td>
                    <td class="px-5 py-4">Email before phone. Market interest before capital range.</td>
                    <td class="px-5 py-4"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold">Step-level events</span></td>
                  </tr>
                  <tr>
                    <td class="px-5 py-4 font-bold text-[color:var(--ink)]">02 · Show the Money Early</td>
                    <td class="px-5 py-4">Fee structure and token pricing shown before the early access form.</td>
                    <td class="px-5 py-4"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold">Drop-off per step</span></td>
                  </tr>
                  <tr>
                    <td class="px-5 py-4 font-bold text-[color:var(--ink)]">03 · Remove Typing</td>
                    <td class="px-5 py-4">Social sign-in, OAuth wallets, one-tap onboarding.</td>
                    <td class="px-5 py-4"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold">Time-to-signup</span></td>
                  </tr>
                  <tr>
                    <td class="px-5 py-4 font-bold text-[color:var(--ink)]">04 · Convert Fear Into Reassurance</td>
                    <td class="px-5 py-4">"We don't store credentials" + secure-connection indicators.</td>
                    <td class="px-5 py-4"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[11px] font-bold">Hesitation events</span></td>
                  </tr>
                  <tr>
                    <td class="px-5 py-4 font-bold text-[color:var(--ink)]">05 · Instrument Every Step</td>
                    <td class="px-5 py-4">GA4 + Clarity + custom events on every waitlist interaction.</td>
                    <td class="px-5 py-4"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold">17 tracking plugins</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="mb-7" data-aos="fade-up">
              <em class="text-[15px] text-[color:var(--ink-soft)]">
                * Qompyl metrics are not published here by design — the app is pre-launch, and any numbers would be premature. The framework and instrumentation are the deliverable.
              </em>
            </p>

            <p class="mb-7" data-aos="fade-up">
              The reason to instrument <strong class="text-[color:var(--ink)]">before</strong> checkout ships is simple: it's the only way to know whether the checkout you build actually moves the needle, or just looks like it should. Baselines are cheap to set now, impossible to reconstruct later.
            </p>

            <!-- Screenshot 2 -->
            <figure class="my-10 rounded-[20px] overflow-hidden border border-[color:var(--card-border)]" data-aos="fade-up">
              <NuxtImg
                src="/images/blog/qompyl-checkout-before-after.png"
                alt="Qompyl early access flow showing the instrumented waitlist funnel with annotated tracking points."
                title="Qompyl early access — instrumented funnel"
                class="w-full h-auto object-cover"
                width="2400"
                height="1200"
                sizes="(max-width: 768px) 100vw, 740px"
                format="webp"
                quality="90"
              />
              <figcaption class="px-5 py-3 text-[12px] text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border-t border-[color:var(--card-border)] italic">
                Qompyl early access flow — waitlist funnel with each of the five decisions mapped to a tracked step. Checkout instrumentation follows the same playbook at launch.
              </figcaption>
            </figure>

            <p class="mb-7" data-aos="fade-up">
              For the full Qompyl app case study — including the 60+ states documented before development — see the
              <NuxtLink to="/projects/qompyl-app-case-study" class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors">Qompyl App Case Study</NuxtLink>.
            </p>

            <!-- ═══════════════ SECTION 5: KYC ═══════════════ -->
            <h2 id="kyc-dropoff" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">
              How Does Trust-Based UX Reduce KYC Drop-Off?
            </h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> Trust-based design reduces KYC drop-off by explaining why each document is needed, showing progress, giving real-time capture feedback, and letting users reach value before full verification. Users abandon when verification feels arbitrary or risky, not merely when it is long. Reducing uncertainty matters more than reducing steps.
              </p>
            </div>

            <p class="mb-7" data-aos="fade-up">
              KYC is checkout's harder cousin: more sensitive data, more regulation, more fear. Four patterns consistently reduce abandonment:
            </p>

            <div class="flex flex-col gap-4 my-8" data-aos="fade-up">
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:info" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Explain the "why" at the field
                </h4>
                <p class="text-[15px] leading-relaxed m-0">"We verify your ID because regulation requires us to confirm who holds this account" outperforms silence, because it converts suspicion into understanding.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:progress" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Show progress and time
                </h4>
                <p class="text-[15px] leading-relaxed m-0">"Step 2 of 3, about 90 seconds" turns an open-ended ordeal into a bounded task.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:camera" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Give live capture feedback
                </h4>
                <p class="text-[15px] leading-relaxed m-0">Detect blur, glare, and cropping before submission. A rejected document after a two-day wait is the single most expensive KYC failure, because the user rarely comes back.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-2xl p-6">
                <h4 class="text-[1rem] font-bold text-[color:var(--ink)] m-0 mb-2 flex items-center gap-2">
                  <Icon name="lucide:door-open" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Let value arrive first
                </h4>
                <p class="text-[15px] leading-relaxed m-0">Where regulation allows, tiered verification lets users explore or make a limited first transaction before full checks. Revolut and Wise both use staged flows in different forms.</p>
              </div>
            </div>

            <p class="mb-7" data-aos="fade-up">
              <strong class="text-[color:var(--ink)]">Metric to own:</strong> KYC completion rate, first-attempt pass rate, and time from sign-up to verified.
            </p>

            <p class="mb-7" data-aos="fade-up">
              For the deeper dive on the fear psychology behind KYC abandonment, see my earlier piece on
              <NuxtLink to="/blog/designing-for-fear" class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors">the 5-Fear Framework</NuxtLink>.
            </p>

            <!-- ═══════════════ SECTION 6: 4-WEEK PLAN ═══════════════ -->
            <h2 id="four-week-plan" class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4 scroll-mt-32" data-aos="fade-up">
              A Four-Week Plan Before Your Series A Data Room Opens
            </h2>

            <div class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6" data-aos="fade-up">
              <div class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5">✓</div>
              <p class="m-0 text-[15px] leading-[1.65]">
                <strong class="text-[color:var(--ink)] font-bold">Short answer:</strong> Apply the framework in four weeks — instrument the funnel, audit against the five decisions, ship the two highest-impact fixes, and package results into a one-page diligence exhibit. Prioritize by revenue at stake per step, not by design preference or implementation effort alone.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10" data-aos="fade-up">
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-6 flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-[11px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md">W01</span>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">Instrument</span>
                </div>
                <p class="text-[14.5px] font-bold text-[color:var(--ink)] m-0 leading-snug">Add step-level events, error types, and decline reasons.</p>
                <p class="text-[13px] text-[color:var(--ink-soft)] leading-relaxed m-0">Separate user abandonment from issuer declines. If you can't see it, you can't fix it.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-6 flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-[11px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md">W02</span>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">Audit</span>
                </div>
                <p class="text-[14.5px] font-bold text-[color:var(--ink)] m-0 leading-snug">Score your flow against the five decisions.</p>
                <p class="text-[13px] text-[color:var(--ink-soft)] leading-relaxed m-0">Record the current metric and the gap against your own best segment, not an industry benchmark.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-6 flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-[11px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md">W03</span>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)]">Ship</span>
                </div>
                <p class="text-[14.5px] font-bold text-[color:var(--ink)] m-0 leading-snug">Pick the two fixes with the highest revenue at stake.</p>
                <p class="text-[13px] text-[color:var(--ink-soft)] leading-relaxed m-0">Typically fee transparency (D2) and typing reduction on mobile (D3). Release behind an experiment flag.</p>
              </div>
              <div class="bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)]/40 rounded-[20px] p-6 flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-[11px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md">W04</span>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]">Package</span>
                </div>
                <p class="text-[14.5px] font-bold text-[color:var(--ink)] m-0 leading-snug">Build a one-page exhibit: baseline, change, result, next hypothesis.</p>
                <p class="text-[13px] text-[color:var(--ink-soft)] leading-relaxed m-0">This is the artifact that answers an investor's "what have you learned about conversion?" in under a minute.</p>
              </div>
            </div>

            <p class="text-[20px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10" data-aos="fade-up">
              If you want a second set of eyes on the audit, that's exactly what the UX review below is for.
            </p>

            <!-- ═══════════════ FAQ ═══════════════ -->
            <h2 id="faq" class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[80px] mb-6 pb-[18px] scroll-mt-32" data-aos="fade-up">
              FAQ
            </h2>

            <p class="text-[15px] text-[color:var(--ink-soft)] mb-6 max-w-[620px]" data-aos="fade-up">
              These answers cover the questions founders and designers raise most when preparing a checkout for Series A scrutiny.
            </p>

            <div class="flex flex-col border-b border-[color:var(--card-border)] mb-20" data-aos="fade-up">
              <div v-for="(item, index) in faqItems" :key="index" class="border-t border-[color:var(--card-border)]">
                <button @click="toggleFaq(index)" class="print-keep w-full py-6 flex items-center justify-between text-left group transition-colors" :aria-expanded="activeFaq === index">
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

            <!-- Media placeholder -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-12 no-print" data-aos="fade-up">
              <div class="p-6 bg-[color:var(--card-bg)] border border-dashed border-[color:var(--card-border)] rounded-[20px] flex items-center gap-4 opacity-60">
                <div class="w-14 h-14 rounded-2xl bg-[color:var(--card-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] flex items-center justify-center shrink-0">
                  <Icon name="lucide:play" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-black text-[color:var(--ink)] m-0 mb-1">Video · Coming Soon</div>
                  <div class="text-[12px] text-[color:var(--ink-soft)] m-0">Checkout audit walkthrough</div>
                </div>
              </div>
              <div class="p-6 bg-[color:var(--card-bg)] border border-dashed border-[color:var(--card-border)] rounded-[20px] flex items-center gap-4 opacity-60">
                <div class="w-14 h-14 rounded-2xl bg-[color:var(--card-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] flex items-center justify-center shrink-0">
                  <Icon name="lucide:mic" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-black text-[color:var(--ink)] m-0 mb-1">Podcast · Coming Soon</div>
                  <div class="text-[12px] text-[color:var(--ink-soft)] m-0">Spotify · In progress</div>
                </div>
              </div>
            </div>

            <NewsletterForm class="no-print" />

            <div class="mt-24 pt-10 border-t border-[color:var(--card-border)] no-print">
              <PlaybookCTA
                title="Send me your checkout flow — I'll audit it free"
                description="I'll record a 10-minute Loom showing where your checkout leaks the most revenue and which of the five decisions would move the needle first. Whether we work together or not, you'll leave with something actionable."
                button-text="Get Your Free Checkout Audit"
                :deliverables="[
                  { code: 'loom/', text: '10-min video with your funnel gaps' },
                  { code: 'metrics/', text: 'Step-level data breakdown' },
                  { code: 'priority/', text: 'Top 2 fixes with ROI estimates' },
                ]"
                :target-metric="11"
              />
            </div>
          </article>

          <!-- ═══════════ SIDEBAR ═══════════ -->
          <aside class="hidden xl:flex flex-col gap-7 xl:col-span-4 sticky top-[100px] no-print">
            <!-- MiniPlayer -->
            <MiniPlayer v-if="articleMedia" :item="articleMedia" @play="openAudioModal" />

            <!-- TOC -->
            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-all duration-300">
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-6">On this page</span>
              <ul class="flex flex-col gap-4 m-0 p-0 list-none">
                <li><a href="#why-series-a" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">Why It's a Series A Asset</a></li>
                <li><a href="#stripe-great" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">What Makes Stripe Great</a></li>
                <li><a href="#decisions" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">The 5 Decisions</a></li>
                <li><a href="#qompyl-evidence" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">Qompyl Pre-Checkout</a></li>
                <li><a href="#kyc-dropoff" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">KYC Drop-off</a></li>
                <li><a href="#four-week-plan" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">4-Week Plan</a></li>
                <li><a href="#faq" class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block">FAQ</a></li>
              </ul>
            </div>

            <!-- Share -->
            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-all duration-300">
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

            <!-- Series Card -->
            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-all duration-300">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)]/10 to-[color:var(--accent-2)]/10 text-[color:var(--accent-1)] flex items-center justify-center mb-6">
                <Icon name="lucide:shield" class="w-6 h-6" />
              </div>
              <span class="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent-text)] mb-2">Series · S02 E02</span>
              <h4 class="text-[1.2rem] font-extrabold text-[color:var(--ink)] leading-[1.25] tracking-[-0.015em] mb-3">Fintech Onboarding</h4>
              <p class="text-[0.95rem] text-[color:var(--ink-soft)] leading-[1.65] mb-6">Trust-first design for the highest-stakes vertical in product.</p>
              <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-[0.9rem] font-extrabold text-[color:var(--ink)] hover:text-[color:var(--accent-text)] hover:gap-3 transition-all duration-200">
                View all notes
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
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
import { useArticleActions } from '~/composables/useArticleActions'

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
// 2. MEDIA IDs (يتم إضافتها لاحقاً)
// ═════════════════════════════════════════════════════════
// const YOUTUBE_VIDEO_ID = 'xxx'  // TODO: add when video is published
// const SPOTIFY_EPISODE_ID = 'xxx' // TODO: add when podcast is published

// ═════════════════════════════════════════════════════════
// 3. FAQ ITEMS — BEFORE usePageMeta ✅
// ═════════════════════════════════════════════════════════
const activeFaq = ref(0)
const toggleFaq = (index) => { activeFaq.value = activeFaq.value === index ? null : index }

const faqItems = ref([
  {
    question: 'Which checkout metrics will investors actually ask about?',
    answer: 'Expect four: step-level completion, payment authorization rate, time-to-pay by device, and recovered revenue from failed attempts. Overall conversion alone is considered weak evidence, because it hides where the leak is and whether it is a design problem or an issuer-decline problem. Investors also ask how the numbers have trended over at least three to six months, and what experiments caused changes. If your data is thin, show a baseline and a dated experiment roadmap. Clarity about what you don\'t yet know reads better than a vague average.',
  },
  {
    question: 'Should we copy Stripe\'s checkout exactly?',
    answer: 'No. Stripe optimizes for a very broad merchant base, so its defaults are deliberately general. Your advantage as a fintech is context: you know your user\'s risk profile, typical transaction size, and geography. Borrow the principles — reduced typing, inline validation, locally relevant methods — and tune the details to your product. Also avoid reproducing Stripe\'s brand elements or trade dress. Your checkout should look like yours, and a copied interface can quietly erode the trust it is meant to build.',
  },
  {
    question: 'How do we reduce KYC drop-off without weakening compliance?',
    answer: 'Reduce uncertainty, not controls. Keep every required check, but explain why each is needed, show progress, and give real-time feedback on document quality so users fix problems before submitting. Where your licensing permits, use tiered verification so users reach a first valuable action sooner. Measure first-attempt pass rate separately from completion, since a low pass rate usually points to capture guidance problems rather than user reluctance. None of these changes alter what you verify, only how clearly you communicate it.',
  },
  {
    question: 'How do we prove a checkout improvement actually caused the lift?',
    answer: 'Run it as a controlled experiment: randomize at the user level, define the primary metric before launch, and run long enough to cover a full weekly cycle. Report the result as an absolute change with a confidence interval, not just a percentage. Segment by device and new versus returning users, because a mobile gain can mask a desktop loss. Record the hypothesis, the variant, and the outcome in a simple log. In diligence, a documented experiment history is worth more than one impressive number.',
  },
  {
    question: 'When is friction good in a fintech checkout?',
    answer: 'When it protects the user or the business more than it costs in conversion. Step-up authentication on unusual amounts, a confirmation screen on irreversible transfers, and verification before payouts all add friction deliberately. The rule is to apply friction proportionally to risk and explain it at the moment it appears. Uniform friction punishes good users; absent friction invites fraud losses that investors will price into your valuation. Measure both sides: conversion lost and fraud or error cost avoided.',
  },
])

// ═════════════════════════════════════════════════════════
// 4. SEO — faqItems defined above ✅
// ═════════════════════════════════════════════════════════
usePageMeta({
  title: 'Breaking Down Stripe\'s Checkout: The UX Blueprint for Series A',
  description: 'Most founders treat checkout as a finishing task. Investors read it as proof that growth is repeatable. Here\'s the five-decision framework I use to audit fintech checkouts before due diligence.',
  keywords: [
    'stripe checkout ux', 'checkout optimization fintech', 'series a due diligence',
    'fintech cac reduction', 'checkout conversion rate', 'payment ux', 'stripe design patterns',
    'kyc drop-off', 'checkout metrics investors', 'fintech ux audit',
  ],
  ogType: 'article',
  ogImage: 'https://mamdouh-ghaneemy.com/images/blog/stripe-checkout-ux-blueprint-hero.png',
  article: {
    publishedTime: '2026-10-13T00:00:00Z',
    section: 'Fintech',
    tags: ['Stripe', 'Checkout', 'Fintech', 'Series A', 'UX'],
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Playbooks', url: '/blog' },
    { name: 'Stripe Checkout UX', url: '/blog/stripe-checkout-ux-blueprint' },
  ],
  faqItems: faqItems.value,
})

// ═════════════════════════════════════════════════════════
// 5. MEDIA from Supabase
// ═════════════════════════════════════════════════════════
const { fetchByArticle } = useMedia()
const { data: articleMedia } = await useAsyncData('article-media-stripe-checkout', () =>
  fetchByArticle('stripe-checkout-ux-blueprint')
)
articleMedia.value = articleMedia.value?.find(m => m.media_type === 'podcast') || null

// ═════════════════════════════════════════════════════════
// 6. STATE
// ═════════════════════════════════════════════════════════
const focusMode = ref(false)
const showCitation = ref(false)
const copied = ref(false)
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
// 8. USE ARTICLE ACTIONS (Custom Composable)
// ═════════════════════════════════════════════════════════
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

// ═════════════════════════════════════════════════════════
// 9. FOCUS MODE
// ═════════════════════════════════════════════════════════
const toggleFocusMode = () => {
  focusMode.value = !focusMode.value
  showToast(focusMode.value ? 'Focus mode ON' : 'Focus mode OFF')
}

// ═════════════════════════════════════════════════════════
// 10. AUDIO PLACEHOLDER (no podcast yet)
// ═════════════════════════════════════════════════════════
const openAudioModal = () => {
  showToast('Podcast coming soon')
}

// ═════════════════════════════════════════════════════════
// 11. CITATION
// ═════════════════════════════════════════════════════════
const citationFormats = [
  { id: 'apa', label: 'APA 7th', value: 'Ghaneemy, M. (2026). Breaking Down Stripe\'s Checkout: The UX Blueprint for Series A. Retrieved from https://mamdouh-ghaneemy.com/blog/stripe-checkout-ux-blueprint' },
  { id: 'chicago', label: 'Chicago', value: 'Ghaneemy, Mamdouh. "Breaking Down Stripe\'s Checkout: The UX Blueprint for Series A." Last modified October 13, 2026. https://mamdouh-ghaneemy.com/blog/stripe-checkout-ux-blueprint.' },
  { id: 'bibtex', label: 'BibTeX', value: `@article{ghaneemy2026stripe,\n  title={Breaking Down Stripe's Checkout: The UX Blueprint for Series A},\n  author={Ghaneemy, Mamdouh},\n  year={2026},\n  url={https://mamdouh-ghaneemy.com/blog/stripe-checkout-ux-blueprint}\n}` },
]

const copyCitation = async (text) => {
  if (typeof window === 'undefined') return
  try {
    await navigator.clipboard.writeText(text)
    showToast('Citation copied!')
  } catch (e) { showToast('Copy failed') }
}

// ═════════════════════════════════════════════════════════
// 12. SHARE
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
// 13. KEYBOARD
// ═════════════════════════════════════════════════════════
const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); toggleFocusMode() }
  if ((e.metaKey || e.ctrlKey) && e.key === 'l') { e.preventDefault(); toggleSpeech() }
  if (e.key === 'Escape') {
    showCitation.value = false
  }
}

// ═════════════════════════════════════════════════════════
// 14. LIFECYCLE
// ═════════════════════════════════════════════════════════
onMounted(() => {
  if (typeof window === 'undefined') return
  mounted.value = true
  window.addEventListener('keydown', handleKeydown)
  setTimeout(() => { showToast('Tip: ⌘K for Focus Mode · ⌘L to Listen', 4000) }, 1500)
})

onUnmounted(() => {
  if (typeof window === 'undefined') return
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
    content: "Originally published at https://mamdouh-ghaneemy.com/blog/stripe-checkout-ux-blueprint";
    display: block; margin-top: 30px; padding-top: 15px;
    border-top: 1px solid #cccccc; font-size: 9pt; color: #777777; font-style: italic;
  }
  .grid.opacity-0 {
    opacity: 1 !important;
    display: block !important;
    margin-bottom: 1rem !important;
  }
}
</style>