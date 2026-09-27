<template>
  <article
    class="bg-[color:var(--page-bg-1)] min-h-screen text-[color:var(--ink)] font-sans relative selection:bg-[color:var(--accent-1)] selection:text-white pb-32"
  >
    <!-- ===================== HERO (THE AWWWARDS LAYOUT) ===================== -->
    <section class="relative pt-12 md:pt-24 pb-20">
      <div
        class="absolute inset-0 w-full h-[120%] overflow-hidden pointer-events-none z-0"
      >
        <div
          class="absolute top-[-100px] right-[-100px] md:right-[10%] w-[500px] md:w-[780px] h-[500px] md:h-[780px] rounded-full bg-[radial-gradient(circle,rgba(109,94,240,0.12)_0%,transparent_70%)] blur-3xl"
        ></div>
        <div
          class="absolute bottom-[20%] left-[-150px] w-[400px] md:w-[620px] h-[400px] md:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(138,92,246,0.1)_0%,transparent_70%)] blur-3xl"
        ></div>
      </div>
      <div class="max-w-[1440px] mx-auto px-6 md:px-[60px] relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <!-- Left: Title & Meta -->
          <div class="lg:col-span-7" data-aos="fade-up">
            <div
              class="flex items-center flex-wrap gap-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] mb-8"
            >
              <span
                class="text-[color:var(--ink-soft)] bg-[color:var(--card-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full"
                >Mindset</span
              >
              <span class="text-[color:var(--accent-1)]">8 Min Read</span>
              <span
                class="w-1 h-1 rounded-full bg-[color:var(--card-border)]"
              ></span>
              <span class="text-[color:var(--ink-soft)]">Sep 14, 2026</span>
            </div>
            <h1
              class="text-[clamp(2.6rem,5.6vw,4.6rem)] font-black tracking-[-0.035em] leading-[1.02] mb-8 text-[color:var(--ink)]"
            >
              The "Make it Pop" Era is Dead: Why Founders Only Pay for
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2"
                >Measurable UX.</span
              >
            </h1>
            <p
              class="text-[1.22rem] font-medium text-[color:var(--ink-soft)] leading-[1.55] max-w-[620px] pl-6 border-l-2 border-[color:var(--ink-soft)]/40 mb-10"
            >
              In 2026, nobody funds a startup because their dashboard has a nice
              glassmorphism effect. They fund startups that retain users. Here
              is why measurable UX is the only design that matters.
            </p>
            <div
              class="flex items-center gap-4 border-t border-[color:var(--card-border)] pt-7 w-max"
            >
              <div
                class="w-[52px] h-[52px] rounded-full border border-[color:var(--card-border)] p-[3px] bg-[color:var(--card-bg)] shrink-0"
              >
                <div
                  class="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] flex items-center justify-center"
                >
                  <NuxtImg
                    src="/images/mamdouh-ghaneemy-pic.png"
                    alt="Mamdouh Ghaneemy"
                    class="w-full h-full object-cover"
                    width="96"
                    height="96"
                    format="webp"
                    quality="85"
                  />
                </div>
              </div>
              <div>
                <div class="font-extrabold text-[14px] text-[color:var(--ink)]">
                  Mamdouh Ghaneemy
                </div>
                <div
                  class="text-[10.5px] uppercase tracking-[0.12em] font-bold text-[color:var(--ink-soft)] mt-1"
                >
                  Strategic Product Designer
                </div>
              </div>
            </div>
          </div>

          <!-- Right: The "Payoff" Card (Adapted from HTML) -->
          <div
            class="lg:col-span-5 relative"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[40px] p-10 md:p-12 min-h-[420px] flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.25)] hover:-translate-y-1.5 transition-[transform,box-shadow,background-color] duration-300duration-500 relative overflow-hidden group"
            >
              <!-- Red/Danger glow for the negative metric -->
              <div
                class="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(248,113,113,0.15),transparent_70%)] pointer-events-none z-0"
              ></div>

              <div class="relative z-10">
                <span
                  class="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-5"
                  >Bounce after killing my animated hero</span
                >
                <div class="flex items-baseline gap-4 mb-3">
                  <span
                    class="text-[clamp(3.5rem,7vw,5rem)] font-black tracking-[-0.05em] leading-[0.9] text-red-500 line-through decoration-4 opacity-60"
                  >
                    61%
                  </span>
                  <span
                    class="text-[clamp(4.5rem,9vw,7rem)] font-black tracking-[-0.05em] leading-[0.9] text-[color:var(--accent-1)]"
                  >
                    39%
                  </span>
                </div>
              </div>

              <div
                class="mt-8 pt-7 border-t border-[color:var(--card-border)] relative z-10 flex gap-6"
              >
                <div class="flex-1">
                  <span
                    class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-2"
                    >Before</span
                  >
                  <p
                    class="text-[0.85rem] text-[color:var(--ink-soft)] leading-snug m-0"
                  >
                    Animated hero, zero proof above the fold.
                  </p>
                </div>
                <div class="w-px bg-[color:var(--card-border)]"></div>
                <div class="flex-1">
                  <span
                    class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-2"
                    >After</span
                  >
                  <p
                    class="text-[0.85rem] text-[color:var(--ink-soft)] leading-snug m-0"
                  >
                    Proof-first headline, static hero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <!-- ===================== HERO IMAGE ===================== -->
    <!-- ===================== HERO IMAGE ===================== -->
<figure
  class="max-w-[1440px] mx-auto px-6 md:px-[60px] mb-[110px]"
  data-aos="fade-up"
  data-aos-delay="200"
>
  <div
    class="w-full aspect-[2/1] rounded-[48px] border border-[color:var(--card-border)] overflow-hidden relative bg-[color:var(--card-bg)] group"
  >
    <NuxtImg
      src="/images/blog/measurable-ux-metrics-posters-hero.png"
      alt="Three framed posters showing measurable UX metrics: 61% bounce rate, 39% after redesign, and a Measurable UX label — evidence that proof-first design beats animation."
      title="Measurable UX: From 61% to 39% Bounce Rate"
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

    <!-- Badge -->
    <div
      class="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[0.16em] py-2.5 px-4 rounded-full flex items-center gap-2.5"
    >
      <span class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse"></span>
      Measured · Tracked · Proven
    </div>
  </div>
  <figcaption class="sr-only">
    Measurable UX case study: bounce rate dropped from 61% to 39% after switching to a proof-first, static hero design — tracked with GA4 and Microsoft Clarity.
  </figcaption>
</figure>

    <!-- ===================== THE EDITORIAL GRID ===================== -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-[60px]">
      <div
        class="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-[80px] items-start"
      >
        <!-- ============ LEFT: THE ARTICLE (Styled like the HTML) ============ -->
        <article
          class="xl:col-span-8 max-w-[740px] text-[17px] leading-[1.75] text-[color:var(--ink-soft)]"
        >
          <p
            class="text-[20px] text-[color:var(--ink)] font-medium mb-7"
            data-aos="fade-up"
          >
            In 2026, nobody funds a SaaS startup because their dashboard has a
            nice glassmorphism effect. They fund startups that retain users.
          </p>

          <!-- Lede Hook -->
          <div
            class="border-l-[3px] border-amber-400 bg-amber-400/10 dark:bg-amber-400/5 px-6 py-5 rounded-r-xl mb-7"
            data-aos="fade-up"
          >
            <p
              class="m-0 text-[#b49852] dark:text-[#d8d0b8] text-[16px] leading-relaxed"
            >
              Last month I watched a recording of a hiring manager land on a
              homepage — mine, actually. Eleven seconds: one scroll, two dead
              clicks on a nav element that looked interactive, then gone. The
              hero was beautiful. It was also the leak. That replay is why this
              article exists.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            For years, the design industry sold founders a lie:
            <em>Make it beautiful, and they will buy.</em> We chased Dribbble
            likes, complex animations, and award-winning transitions. We called
            it "craft." But when the economic realities shifted and customer
            acquisition costs (CAC) skyrocketed, the hard truth emerged:
          </p>

          <!-- Thesis -->
          <p
            class="text-[21px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10"
            data-aos="fade-up"
          >
            Beauty that delays proof is a tax.
          </p>

          <p class="mb-7" data-aos="fade-up">
            If your stunning, animated hero section causes a 61% bounce rate
            before the user even sees your core value proposition, your design
            isn't a masterpiece. It's a liability.
          </p>

          <!-- ============ SECTION 1 ============ -->
          <h2
            id="the-tax"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            The Tax of "Beautiful" Design
          </h2>

          <!-- AEO Short Answer -->
          <div
            class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6"
            data-aos="fade-up"
          >
            <div
              class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5"
            >
              ✓
            </div>
            <p class="m-0 text-[15px] leading-[1.65]">
              <strong class="text-[color:var(--ink)] font-bold"
                >Short answer:</strong
              >
              Beautiful design costs you conversion when it delays proof of
              value. Heavy animations add seconds to Time-to-Value, vague copy
              forces users to hunt for actions, and decorative UI competes with
              the signal instead of carrying it. The cost is measurable —
              usually in bounce rate and session duration.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            I've seen it repeatedly in audits. A founder hires an agency to
            build a "world-class" B2B SaaS platform. The agency delivers 40
            Figma screens that look like a sci-fi movie interface. But when it
            ships? Users can't figure out how to export a CSV. The heavy
            animations delay the "Time-to-Value" by crucial seconds. The vague,
            clever copywriting leaves users hunting for basic actions.
            <span
              class="text-[13.5px] text-[color:var(--ink-soft)] opacity-70 italic"
              >(A composite — not any client of mine.)</span
            >
          </p>

          <p class="mb-7" data-aos="fade-up">
            Designers obsessed with aesthetics often build art galleries. But
            founders don't need art galleries; they need
            <strong class="text-[color:var(--ink)] font-bold"
              >conversion engines</strong
            >.
          </p>

          <p class="mb-7" data-aos="fade-up">
            The proof came from my own site. My old animated hero was gorgeous —
            and leaked
            <strong class="text-[color:var(--ink)] font-bold">61%</strong> of
            visitors before the second scroll. When I killed the animation,
            replaced it with a proof-first headline, and shipped a tracked v1,
            the bounce dropped to
            <strong class="text-[color:var(--ink)] font-bold">39%</strong> in
            the first 30 days. That single decision paid for the entire
            redesign.
          </p>

          <!-- Compare Bars Component (Replicated from HTML) -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-8 my-10"
            data-aos="fade-up"
          >
            <div
              class="flex justify-between items-baseline mb-6 flex-wrap gap-2"
            >
              <span
                class="font-mono text-[11px] tracking-[1.5px] uppercase text-[color:var(--ink-soft)]"
                >Homepage Bounce Rate · Self-Redesign</span
              >
              <span
                class="font-mono text-[11px] text-[color:var(--accent-1)] flex items-center gap-1.5"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-1)] shadow-[0_0_0_3px_rgba(52,211,153,0.2)] animate-pulse"
                ></span>
                TRACKED · GA4 + CLARITY
              </span>
            </div>

            <!-- Before Row -->
            <div class="mb-6">
              <div class="flex justify-between items-baseline mb-2">
                <div
                  class="text-[14px] font-semibold text-[color:var(--ink-soft)]"
                >
                  v0 — Animated hero, clever copy
                  <span class="block text-[12px] font-normal opacity-70 mt-0.5"
                    >No proof above the fold</span
                  >
                </div>
                <div class="font-mono text-[22px] font-bold text-red-500">
                  61%
                </div>
              </div>
              <div
                class="h-[34px] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[8px] relative overflow-hidden"
              >
                <div
                  class="h-full rounded-[7px] bg-gradient-to-r from-red-500/20 to-red-500/80 w-[61%]"
                ></div>
              </div>
            </div>

            <!-- After Row -->
            <div class="mb-6">
              <div class="flex justify-between items-baseline mb-2">
                <div
                  class="text-[14px] font-semibold text-[color:var(--ink-soft)]"
                >
                  v1 — Proof-first headline, static hero
                  <span class="block text-[12px] font-normal opacity-70 mt-0.5"
                    >Tracked for 30 days</span
                  >
                </div>
                <div
                  class="font-mono text-[22px] font-bold text-[color:var(--accent-1)]"
                >
                  39%
                </div>
              </div>
              <div
                class="h-[34px] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[8px] relative overflow-hidden"
              >
                <div
                  class="h-full rounded-[7px] bg-gradient-to-r from-[color:var(--accent-1)]/20 to-[color:var(--accent-1)]/80 w-[39%]"
                ></div>
              </div>
            </div>

            <!-- Delta -->
            <div
              class="mt-5 pt-5 border-t border-dashed border-[color:var(--card-border)] flex justify-between items-center font-mono text-[12.5px]"
            >
              <span
                >Δ
                <strong
                  class="text-[color:var(--accent-1)] text-[15px] font-bold"
                  >−22 points</strong
                >
                bounce</span
              >
              <NuxtLink
                to="/projects/strategic-portfolio"
                class="text-[color:var(--accent-1)] hover:underline"
                >/projects/strategic-portfolio</NuxtLink
              >
            </div>
          </div>

          <!-- ============ SECTION 2 ============ -->
          <h2
            id="metrics"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            The 3 Metrics Every SaaS Founder Actually Cares About
          </h2>

          <!-- AEO Short Answer -->
          <div
            class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6"
            data-aos="fade-up"
          >
            <div
              class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5"
            >
              ✓
            </div>
            <p class="m-0 text-[15px] leading-[1.65]">
              <strong class="text-[color:var(--ink)] font-bold"
                >Short answer:</strong
              >
              The three metrics founders actually fund against are Time-to-Value
              (how fast a user feels the core benefit), Funnel Drop-off Rate
              (where they abandon), and Support Ticket Volume (how often the UI
              needs explaining). Everything else is diagnostic.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            If you are a designer pitching a CTO or a founder, stop talking
            about Auto-Layout and start talking about these three:
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >01</span
            >
            Time-to-Value (TTV)
          </h3>
          <p class="mb-7" data-aos="fade-up">
            How many seconds (or clicks) does it take for a new user to
            experience the core benefit of your product? Good UX eliminates
            micro-friction in onboarding. Every unnecessary field in a signup
            form is a leak in your funnel.
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >02</span
            >
            Funnel Drop-off Rate
          </h3>
          <p class="mb-7" data-aos="fade-up">
            Where exactly are users abandoning the flow? Is it the pricing page?
            The KYC step in your FinTech app? Measurable UX doesn't guess; it
            looks at the drop-off data and redesigns that specific bottleneck.
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >03</span
            >
            Support Ticket Volume
          </h3>
          <p class="mb-7" data-aos="fade-up">
            "How do I do X?" is the most expensive question a startup can
            answer. If your customer success team spends a meaningful slice of
            their time explaining how to navigate the dashboard, your UI is
            paying for it monthly. Good design drastically reduces support
            overhead.
          </p>

          <p class="mb-7" data-aos="fade-up">
            If you're not sure how to pull these numbers without exporting CSVs,
            <NuxtLink
              to="/blog/ga4-data-api-for-designers"
              class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] hover:text-[#6fe8bb] transition-colors"
              >the GA4 Data API for Designers</NuxtLink
            >
            shows the exact server route I use to fetch funnel data in 60 lines
            of code.
          </p>

          <!-- ============ SECTION 3 ============ -->
          <h2
            id="framework"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            The "Measured Designer" Framework
          </h2>

          <div
            class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6"
            data-aos="fade-up"
          >
            <div
              class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5"
            >
              ✓
            </div>
            <p class="m-0 text-[15px] leading-[1.65]">
              <strong class="text-[color:var(--ink)] font-bold"
                >Short answer:</strong
              >
              Measurable UX replaces opinions with receipts. The framework is
              three steps: start with session recordings, document a baseline
              before touching anything, and deliver state-driven designs — not
              happy-path mockups.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            So how do we fix this? We stop guessing and start measuring. Here is
            the framework I use when auditing and redesigning SaaS platforms:
          </p>

          <!-- Framework List -->
          <ol class="list-none m-0 p-0 my-10" style="counter-reset: step">
            <li
              class="flex gap-5 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 mb-4 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:border-[color:var(--accent-1)]/30 hover:-translate-y-1 hover:bg-[color:var(--input-bg)]"
              data-aos="fade-up"
            >
              <div
                class="font-mono text-[13px] font-bold text-[color:var(--accent-1)] w-10 h-10 rounded-[11px] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 flex items-center justify-center shrink-0"
                style="counter-increment: step; content: counter(step)"
              >
                1
              </div>
              <div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-1.5"
                >
                  Recordings First, Opinions Last
                </h4>
                <p class="text-[15px] text-[color:var(--ink-soft)] m-0">
                  I never start a redesign in Figma. I start in Microsoft
                  Clarity or Hotjar. Watching a user <em>"rage-click"</em> on a
                  dead element is worth 100 expert opinions. The eleven-second
                  replay that started this article is a perfect example.
                </p>
              </div>
            </li>
            <li
              class="flex gap-5 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 mb-4 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:border-[color:var(--accent-1)]/30 hover:-translate-y-1 hover:bg-[color:var(--input-bg)]"
              data-aos="fade-up"
            >
              <div
                class="font-mono text-[13px] font-bold text-[color:var(--accent-1)] w-10 h-10 rounded-[11px] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 flex items-center justify-center shrink-0"
              >
                2
              </div>
              <div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-1.5"
                >
                  Define the Baseline
                </h4>
                <p class="text-[15px] text-[color:var(--ink-soft)] m-0">
                  You cannot prove a redesign was successful if you don't know
                  the starting numbers. Document the current bounce rate, CTR,
                  and conversion rate <em>before</em> you open Figma. Without a
                  baseline, the "after" is just an opinion.
                </p>
              </div>
            </li>
            <li
              class="flex gap-5 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 mb-4 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:border-[color:var(--accent-1)]/30 hover:-translate-y-1 hover:bg-[color:var(--input-bg)]"
              data-aos="fade-up"
            >
              <div
                class="font-mono text-[13px] font-bold text-[color:var(--accent-1)] w-10 h-10 rounded-[11px] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 flex items-center justify-center shrink-0"
              >
                3
              </div>
              <div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-1.5"
                >
                  State-Driven Deliverables
                </h4>
                <p class="text-[15px] text-[color:var(--ink-soft)] m-0">
                  A developer cannot build a product from a "happy path" PNG.
                  Measurable design means delivering the
                  <em
                    >Empty states, Loading states, Error states, and Edge
                    cases</em
                  >
                  — the four states that actually define the user's real
                  experience.
                </p>
              </div>
            </li>
          </ol>

          <!-- ============ SECTION 4 ============ -->
          <h2
            id="aesthetics"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            Does Aesthetics Still Matter?
          </h2>

          <div
            class="flex gap-4 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-[3px] border-l-[color:var(--accent-1)] rounded-[9px] p-5 my-6"
            data-aos="fade-up"
          >
            <div
              class="w-7 h-7 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center shrink-0 font-bold font-mono text-[13px] mt-0.5"
            >
              ✓
            </div>
            <p class="m-0 text-[15px] leading-[1.65]">
              <strong class="text-[color:var(--ink)] font-bold"
                >Short answer:</strong
              >
              Aesthetics still matter — but its job has changed. In 2026,
              aesthetics builds trust, not delight. A clean, consistent UI
              signals competence and safety. Motion with a receipt is craft;
              motion without one is decoration.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            Absolutely. But its role has changed.
          </p>
          <p class="mb-7" data-aos="fade-up">
            In B2B SaaS and FinTech, aesthetics serve one primary function:
            <strong class="text-[color:var(--ink)] font-bold">Trust</strong>. A
            clean, professional, and consistent UI signals competence. It tells
            the user,
            <em
              >"We are a serious institution; your data (and money) is safe with
              us."</em
            >
          </p>
          <p class="mb-7" data-aos="fade-up">
            Aesthetics without structure is just icing on an empty plate.
            Structure without aesthetics is edible, but hard to swallow. The
            sweet spot is a data-driven structure wrapped in a brand-consistent,
            trust-building aesthetic.
          </p>

          <p
            class="text-[21px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10"
            data-aos="fade-up"
          >
            Stop buying pixels. Start buying conversion rates.
          </p>

          <!-- ===================== FAQ ACCORDION ===================== -->
          <h2
            id="faq"
            class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[80px] mb-6 pb-[18px]"
            data-aos="fade-up"
          >
            FAQ
          </h2>

          <div
            class="flex flex-col border-b border-[color:var(--card-border)] mb-20"
            data-aos="fade-up"
          >
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="border-t border-[color:var(--card-border)]"
            >
              <button
                @click="toggleFaq(index)"
                class="w-full py-6 flex items-center justify-between text-left group transition-colors"
                :aria-expanded="activeFaq === index"
              >
                <span
                  class="text-[1.1rem] md:text-[1.2rem] font-bold text-[color:var(--ink)] group-hover:text-[color:var(--accent-1)] transition-colors"
                >
                  {{ item.question }}
                </span>
                <span
                  class="w-8 h-8 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink-soft)] transition-[transform,box-shadow,background-color] duration-300duration-300 shrink-0 ml-4"
                  :class="
                    activeFaq === index
                      ? 'rotate-45 bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] text-white border-transparent'
                      : 'group-hover:border-[color:var(--accent-1)] group-hover:text-[color:var(--accent-1)]'
                  "
                >
                  <Icon name="lucide:plus" class="w-4 h-4" />
                </span>
              </button>
              <div
                class="grid transition-[transform,box-shadow,background-color] duration-300duration-300 ease-in-out"
                :class="
                  activeFaq === index
                    ? 'grid-rows-[1fr] opacity-100 mb-6'
                    : 'grid-rows-[0fr] opacity-0'
                "
              >
                <div class="overflow-hidden">
                  <p
                    class="text-[1.05rem] leading-[1.7] text-[color:var(--ink-soft)] pr-8 md:pr-12 m-0"
                  >
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- ===================== END FAQ ===================== -->
          <!-- ===================== WHAT TO DO NEXT (Internal Links) ===================== -->
          <!-- ===================== WHAT TO DO NEXT (Internal Links) ===================== -->
          <div class="mt-20" id="next">
            <h2
              class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] mb-4"
              data-aos="fade-up"
            >
              What to do next
            </h2>
            <p
              class="text-[17px] text-[color:var(--ink-soft)] mb-7"
              data-aos="fade-up"
            >
              If your current site is leaking the deals it was built to win, the
              same audit I applied to myself can be applied to yours — with your
              own numbers, your own recordings, your own receipts.
            </p>

            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7"
              data-aos="fade-up"
            >
              <!-- 🚀 تم استبدال دراسة الحالة بـ Qompyl 🚀 -->
              <NuxtLink
                to="/projects/qompyl-case-study"
                class="block bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 text-inherit transition-[transform,box-shadow,background-color] duration-300duration-250 relative overflow-hidden group hover:-translate-y-1 hover:border-[color:var(--accent-1)]/35 hover:bg-[color:var(--input-bg)]"
              >
                <span
                  class="absolute top-[22px] right-[24px] text-[color:var(--ink-soft)] transition-[transform,box-shadow,background-color] duration-300duration-250 text-[18px] group-hover:translate-x-1 group-hover:text-[color:var(--accent-1)]"
                  >→</span
                >
                <div
                  class="font-mono text-[10.5px] tracking-[1.5px] uppercase text-[color:var(--accent-1)] mb-2.5"
                >
                  Case Study
                </div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-2 tracking-[-0.01em]"
                >
                  Qompyl: From Figma to FinTech Beta
                </h4>
                <p
                  class="text-[14px] text-[color:var(--ink-soft)] m-0 leading-[1.6]"
                >
                  See how I stripped out the fluff and designed a
                  high-conversion institutional trading platform in 4 weeks.
                </p>
              </NuxtLink>

              <!-- Technical Guide (GA4 Data API) يبقى كما هو لأنه مكمل قوي للمقال -->
              <NuxtLink
                to="/blog/ga4-data-api-for-designers"
                class="block bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 text-inherit transition-[transform,box-shadow,background-color] duration-300duration-250 relative overflow-hidden group hover:-translate-y-1 hover:border-[color:var(--accent-1)]/35 hover:bg-[color:var(--input-bg)]"
              >
                <span
                  class="absolute top-[22px] right-[24px] text-[color:var(--ink-soft)] transition-[transform,box-shadow,background-color] duration-300duration-250 text-[18px] group-hover:translate-x-1 group-hover:text-[color:var(--accent-1)]"
                  >→</span
                >
                <div
                  class="font-mono text-[10.5px] tracking-[1.5px] uppercase text-[color:var(--accent-1)] mb-2.5"
                >
                  Technical Guide
                </div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-2 tracking-[-0.01em]"
                >
                  The GA4 Data API for Designers
                </h4>
                <p
                  class="text-[14px] text-[color:var(--ink-soft)] m-0 leading-[1.6]"
                >
                  The exact 60-line server route that pulls funnel numbers
                  without touching a CSV export.
                </p>
              </NuxtLink>
            </div>
          </div>
          <NewsletterForm />
          <!-- The CTA Component (Bottom of article) -->
          <div class="mt-24 pt-10 border-t border-[color:var(--card-border)]">
            <PlaybookCTA
              title="Is your website leaking the deals it was built to win?"
              description="Same audit, same rigor, same receipts I just described. First call: 30 minutes, free, honest — you'll leave with at least one actionable insight."
              button-text="Book a Free Audit Call"
              :deliverables="[
                { code: 'audit/', text: 'UX & Analytics deep-dive' },
                { code: 'design/', text: 'High-conversion UI system' },
                { code: 'handoff/', text: 'Dev-ready specs for any stack' },
              ]"
              :target-metric="61"
            />
          </div>
        </article>

        <!-- ============ RIGHT: THE STICKY SIDEBAR (Kept from Vue Layout) ============ -->
        <aside
          class="hidden xl:flex flex-col gap-7 xl:col-span-4 sticky top-[100px]"
        >
          <!-- Table of Contents -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-[transform,box-shadow,background-color] duration-300duration-300"
          >
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-6"
              >On this page</span
            >
            <ul class="flex flex-col gap-4">
              <li>
                <a
                  href="#the-tax"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >The Design Tax</a
                >
              </li>
              <li>
                <a
                  href="#metrics"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >The 3 SaaS Metrics</a
                >
              </li>
              <li>
                <a
                  href="#framework"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >The Framework</a
                >
              </li>
              <li>
                <a
                  href="#aesthetics"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >Does Aesthetics Matter?</a
                >
              </li>
              <li>
                <a
                  href="#faq"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>

          <!-- Share Links -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-[transform,box-shadow,background-color] duration-300duration-300"
          >
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-6"
              >Share Playbook</span
            >
            <div class="flex gap-4">
              <button
                @click="sharePlaybook('twitter')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-[transform,box-shadow,background-color] duration-300duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Share on X"
              >
                <Icon name="simple-icons:x" class="w-4.5 h-4.5" />
              </button>
              <button
                @click="sharePlaybook('linkedin')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-[transform,box-shadow,background-color] duration-300duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Share on LinkedIn"
              >
                <Icon name="lucide:linkedin" class="w-4.5 h-4.5" />
              </button>
              <button
                @click="sharePlaybook('copy')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center transition-[transform,box-shadow,background-color] duration-300duration-300 hover:-translate-y-1 shadow-sm"
                :class="
                  copied
                    ? 'bg-[#33cc95] text-white border-transparent shadow-md'
                    : 'text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent'
                "
                aria-label="Copy Link"
              >
                <Icon v-if="copied" name="lucide:check" class="w-5 h-5" />
                <Icon v-else name="lucide:link" class="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          <!-- Series Card -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-[transform,box-shadow,background-color] duration-300duration-300"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)]/10 to-[color:var(--accent-2)]/10 text-[color:var(--accent-1)] flex items-center justify-center mb-6"
            >
              <Icon name="lucide:brain" class="w-6 h-6" />
            </div>
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent-text)] mb-2"
              >Series</span
            >
            <h4
              class="text-[1.2rem] font-extrabold text-[color:var(--ink)] leading-[1.25] tracking-[-0.015em] mb-3"
            >
              The Mindset
            </h4>
            <p
              class="text-[0.95rem] text-[color:var(--ink-soft)] leading-[1.65] mb-6"
            >
              Shifting from pixel-pusher to strategic partner in the SaaS
              ecosystem.
            </p>
            <NuxtLink
              to="/blog"
              class="inline-flex items-center gap-2 text-[0.9rem] font-extrabold text-[color:var(--ink)] hover:text-[color:var(--accent-text)] hover:gap-3 transition-[transform,box-shadow,background-color] duration-300duration-200"
            >
              View all notes
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "playbook",
  backLabel: "Playbooks",
  backTo: "/blog",
});

// ===================== FAQ LOGIC =====================
const activeFaq = ref(0);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const faqItems = [
  {
    question: "Why do visually beautiful SaaS redesigns often fail?",
    answer:
      "Beautiful SaaS redesigns fail when they prioritize aesthetics over functionality. Heavy animations delay the Time-to-Value (TTV), and vague copywriting leaves users confused. If a design causes friction in the onboarding flow, it increases churn regardless of how good it looks. The fix is measurable: track bounce rate and scroll depth before and after, not just screenshot approval.",
  },
  {
    question: "What are the most important UX metrics for SaaS founders?",
    answer:
      "The three most critical UX metrics for SaaS are: <strong class='text-[color:var(--ink)]'>1) Time-to-Value</strong> (how fast a user experiences the core benefit), <strong class='text-[color:var(--ink)]'>2) Funnel Drop-off Rate</strong> (where users abandon the flow), and <strong class='text-[color:var(--ink)]'>3) Support Ticket Volume</strong> (how often users need help navigating the UI). Everything else is diagnostic.",
  },
  {
    question: "What is Measurable UX?",
    answer:
      "Measurable UX is a design approach that relies on data rather than opinions. It involves setting baseline conversion metrics, using session recording tools like Microsoft Clarity, and delivering state-driven designs that solve specific business bottlenecks. The rule is simple: recordings first, opinions last.",
  },
  {
    question: "Does aesthetics still matter in measurable UX?",
    answer:
      "Yes — but its job has changed. In B2B and FinTech, aesthetics builds <strong class='text-[color:var(--ink)]'>trust</strong> rather than delight. A clean, consistent UI signals competence and safety. Motion with a measurable receipt is craft; motion without one is decoration. The balance is a data-driven structure wrapped in a brand-consistent, trust-building aesthetic.",
  },
];

// ===================== SEO / HEAD + FAQPage Schema =====================
usePageMeta({
  title:
    'The "Make it Pop" Era is Dead — Why Founders Only Pay for Measurable UX',
  description:
    "In 2026, nobody funds a startup because their dashboard has a nice glassmorphism effect. Here is why measurable UX is the only design that matters.",
  keywords: [
    "measurable UX",
    "SaaS design ROI",
    "fintech design metrics",
    "design that converts",
    "SaaS founders design",
    "GA4 for designers",
    "Time-to-Value UX",
  ],
  ogType: "article",
  ogImage: "https://mamdouhghaneemy.com/images/blog/measurable-ux-metrics-posters-hero.png",
  article: {
    publishedTime: "2026-09-14T00:00:00Z",
    section: "Mindset",
    tags: ["Measurable UX", "SaaS Strategy", "Design Metrics", "Founders"],
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Playbooks", url: "/blog" },
    { name: "Make it Pop is Dead", url: "/blog/make-it-pop-is-dead" },
  ],
  faqItems: faqItems.value, // من الـ reactive data في الصفحة
});

// ===================== SHARE PLAYBOOK =====================
const copied = ref(false);

const sharePlaybook = (platform) => {
  if (!process.client) return;

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  if (platform === "twitter") {
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      "_blank",
      "width=600,height=400",
    );
  } else if (platform === "linkedin") {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "width=600,height=600",
    );
  } else if (platform === "copy") {
    navigator.clipboard.writeText(window.location.href).then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    });
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
