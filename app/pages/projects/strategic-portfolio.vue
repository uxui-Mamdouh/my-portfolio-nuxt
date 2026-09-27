<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)] text-[color:var(--ink)]">
    <!-- === LAYOUT CONTAINER === -->
    <div
      class="relative max-w-screen-2xl mx-auto px-4 md:px-8 flex items-start"
    >
      <!-- === DESKTOP SIDEBAR (TOC) === -->
      <div
        class="hidden lg:flex flex-col sticky top-32 h-[calc(100vh-10rem)] w-[280px] p-8 xl:pl-[120px] justify-start z-10 shrink-0"
      >
        <div class="mb-10 flex flex-col gap-2">
          <span
            class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-1)]"
            >Case Study</span
          >
          <h1
            class="text-2xl font-extrabold text-[color:var(--ink)] tracking-tight"
          >
            Portfolio V2
          </h1>
        </div>
        <nav
          class="flex flex-col space-y-3 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[color:var(--card-border)]"
        >
          <a
            v-for="link in tocLinks"
            :key="link.id"
            :href="`#${link.id}`"
            @click.prevent="scrollToSection(link.id)"
            class="nav-link relative pl-5 text-[13px] font-semibold text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors duration-300"
          >
            <span
              class="absolute left-[-2px] top-1/2 -translate-y-1/2 w-[3px] h-0 bg-[color:var(--accent-text)] rounded-full transition-all duration-300 opacity-0 hover:h-full hover:opacity-100"
            ></span>
            {{ link.label }}
          </a>
        </nav>
        <div class="mt-auto pt-8">
          <div class="text-xs text-[color:var(--ink-soft)]">
            <p>Design, Code & Strategy</p>
            <p class="font-bold text-[color:var(--ink)] mt-1">Sep 2026</p>
          </div>
        </div>
      </div>

      <!-- === MAIN CONTENT === -->
      <div class="w-full flex-1 pb-32 lg:pl-10">
        <!-- ================= 1. HERO ================= -->
        <header
          class="relative min-h-[60vh] flex flex-col justify-center pt-10 pb-16 max-w-5xl mx-auto"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 max-w-5xl h-[300px] bg-[radial-gradient(circle,rgba(109,94,240,0.12)_0%,transparent_70%)] blur-[100px] pointer-events-none"
          ></div>

          <div
            class="space-y-8 animate-[rise_.7s_cubic-bezier(.19,1,.22,1)_both] relative z-10"
          >
            <div
              class="inline-flex items-center gap-2 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase text-[color:var(--ink)] shadow-sm"
            >
              <span
                class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse shadow-[0_0_0_4px_rgba(51,204,149,0.18)]"
              ></span>
              Internal Project · 2026
            </div>

            <h1
              class="text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-[-0.035em] text-[color:var(--ink)] leading-[1.05]"
            >
              I audited my own portfolio. <br class="hidden md:block" />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2"
                >The numbers argued back.</span
              >
            </h1>

            <p
              class="text-lg md:text-xl text-[color:var(--ink-soft)] max-w-3xl leading-relaxed"
            >
              <!-- ✅ MODIFICATION 2: "looked great in screenshots" → "photographed well" -->
              The old portfolio photographed well but collapsed under real
              traffic. I treated myself as the client: same audit, same rigor,
              same receipts. No sentiment, no sacred cows.
            </p>

            <div
              class="pt-8 flex flex-wrap gap-8 md:gap-16 text-sm border-t border-[color:var(--card-border)]"
            >
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                  >Role</span
                >
                <span class="font-bold text-[color:var(--ink)]"
                  >Client & Designer</span
                >
              </div>
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                  >Stack</span
                >
                <span class="font-bold text-[color:var(--ink)]"
                  >Nuxt, Tailwind, Supabase</span
                >
              </div>
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                  >Analytics</span
                >
                <span class="font-bold text-[color:var(--ink)]"
                  >GA4 · Clarity · GSC</span
                >
              </div>
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                  >Framework</span
                >
                <span class="font-bold text-[color:var(--accent-1)]"
                  >The 3-Signal Rule</span
                >
              </div>
            </div>
          </div>
        </header>

        <!-- ================= 2. TL;DR ================= -->
        <div class="max-w-5xl mx-auto mb-24" data-aos="fade-up">
          <div
            class="bg-gradient-to-br from-[color:var(--card-bg)] to-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.03)] relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[color:var(--accent-1)]/10 to-transparent rounded-full blur-3xl"
            ></div>
            <div
              class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-8"
            >
              TL;DR — The 60-Second Version
            </div>
            <div class="grid md:grid-cols-3 gap-8 relative z-10">
              <div data-aos="fade-up" data-aos-delay="50">
                <div
                  class="font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2"
                >
                  <Icon
                    name="lucide:alert-triangle"
                    class="w-5 h-5 text-amber-500"
                  />
                  The Problem
                </div>
                <p
                  class="text-[color:var(--ink-soft)] text-sm leading-relaxed mb-2"
                >
                  The old portfolio photographed well but leaked visitors in
                  analytics —
                  <strong class="text-[color:var(--ink)]">61% bounced</strong>
                  before the second scroll.
                </p>
                <p
                  class="text-[color:var(--ink)] text-sm font-bold leading-relaxed italic"
                >
                  "It was an art gallery, not a conversion engine."
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <div
                  class="font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2"
                >
                  <Icon
                    name="lucide:compass"
                    class="w-5 h-5 text-[color:var(--accent-1)]"
                  />
                  The Approach
                </div>
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  Every decision traced back to
                  <strong class="text-[color:var(--ink)]">3 signals</strong> —
                  behavior, intent, and funnel. If one signal disagreed, I
                  investigated before touching pixels.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="150">
                <div
                  class="font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2"
                >
                  <Icon
                    name="lucide:trending-up"
                    class="w-5 h-5 text-[#33cc95]"
                  />
                  The Outcome
                </div>
                <p
                  class="text-[color:var(--ink-soft)] text-sm leading-relaxed mb-2"
                >
                  <strong class="text-[color:var(--ink)]"
                    >Measured, not promised.</strong
                  >
                  The first 30-day window opened September 2026 — before/after
                  receipts publish when it closes.
                </p>
                <div class="flex items-center gap-2 mt-3">
                  <span class="relative flex h-1.5 w-1.5">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent-1)] opacity-60"
                    ></span>
                    <span
                      class="relative inline-flex rounded-full h-1.5 w-1.5 bg-[color:var(--accent-1)]"
                    ></span>
                  </span>
                  <span
                    class="font-mono text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
                  >
                    In Measurement — Window 01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= 3. THE 3-SIGNAL RULE (NEW FRAMEWORK) ================= -->
        <section
          id="framework"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <div class="flex items-center gap-3 mb-4" data-aos="fade-up">
            <span
              class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
              >The Framework</span
            >
            <span class="flex-grow h-px bg-[color:var(--card-border)]"></span>
          </div>

          <h2
            class="text-3xl md:text-4xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            The 3-Signal Rule
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12 max-w-3xl"
            data-aos="fade-up"
          >
            Every redesign I do — for myself or for clients — follows one rule:
            <strong class="text-[color:var(--ink)]"
              >no design decision ships without three independent
              signals.</strong
            >
            One from behavior. One from intent. One from the funnel. If two
            signals disagree, I investigate before touching a pixel.
          </p>

          <!-- The 3 signals -->
          <div class="grid md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
            <!-- Signal 1 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
            >
              <div class="flex items-center justify-between mb-4">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
                  >Signal 01</span
                >
                <Icon
                  name="lucide:mouse-pointer-click"
                  class="w-5 h-5 text-[color:var(--accent-1)]"
                />
              </div>
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Behavior
              </h4>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-3"
              >
                What users actually do — recorded, not guessed.
              </p>
              <p
                class="text-[10px] font-mono text-[color:var(--ink-soft)] opacity-60 mt-auto"
              >
                Source: Clarity · Hotjar · Session Replays
              </p>
            </div>

            <!-- Signal 2 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
            >
              <div class="flex items-center justify-between mb-4">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
                  >Signal 02</span
                >
                <Icon
                  name="lucide:search"
                  class="w-5 h-5 text-[color:var(--accent-1)]"
                />
              </div>
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Intent
              </h4>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-3"
              >
                What users are searching for — the demand behind the click.
              </p>
              <p
                class="text-[10px] font-mono text-[color:var(--ink-soft)] opacity-60 mt-auto"
              >
                Source: Search Console · Keyword Tools
              </p>
            </div>

            <!-- Signal 3 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
            >
              <div class="flex items-center justify-between mb-4">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
                  >Signal 03</span
                >
                <Icon
                  name="lucide:filter"
                  class="w-5 h-5 text-[color:var(--accent-1)]"
                />
              </div>
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Funnel
              </h4>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-3"
              >
                Where the model breaks — the drop-off that costs money.
              </p>
              <p
                class="text-[10px] font-mono text-[color:var(--ink-soft)] opacity-60 mt-auto"
              >
                Source: GA4 · Custom Events · A/B Tests
              </p>
            </div>
          </div>

          <!-- Why it matters -->
          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 md:p-8"
            data-aos="fade-up"
          >
            <h4
              class="text-sm font-bold text-[color:var(--ink)] mb-4 uppercase tracking-wider"
            >
              Why the rule exists
            </h4>
            <ul class="space-y-3">
              <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >One signal = anecdote.</strong
                  >
                  Two signals = hypothesis. Three signals = decision.</span
                >
              </li>
              <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Prevents taste-driven redesigns.</strong
                  >
                  If a change is based on "I like this," it fails the
                  rule.</span
                >
              </li>
              <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Makes the case for clients.</strong
                  >
                  Every change traces back to a receipt, not a mood.</span
                >
              </li>
            </ul>
          </div>
        </section>

        <!-- ================= 4. WHY REDESIGN ================= -->
        <section
          id="why"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            Why redesign at all?
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-8"
            data-aos="fade-up"
          >
            Because a recording humbled me. Not a feeling — a recording.
          </p>

          <div
            class="my-14 p-10 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-[color:var(--accent-1)] rounded-r-3xl rounded-l shadow-[0_24px_50px_-30px_rgba(109,94,240,0.25)]"
            data-aos="fade-up"
          >
            <p
              class="m-0 text-[1.35rem] font-semibold leading-[1.5] text-[color:var(--ink)] tracking-[-0.01em]"
            >
              <!-- ✅ MODIFICATION 4: "a hiring manager" → "a hiring manager from a Series B SaaS" -->
              "I watched a hiring manager from a Series B SaaS land on my
              homepage, scroll once, and leave.
              <strong
                class="bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] font-extrabold"
                >Eleven seconds, fully recorded.</strong
              >
              That replay was my kickoff meeting."
            </p>
            <span
              class="block mt-4 text-xs font-bold tracking-widest text-[color:var(--ink-soft)] uppercase"
              >The Trigger · Clarity Session Playback</span
            >
          </div>

          <p
            class="text-base text-[color:var(--ink-soft)] leading-relaxed mb-8"
            data-aos="fade-up"
          >
            One replay is an anecdote. Three independent signals are a
            diagnosis. My own tracking stack handed me all three in the same
            week:
          </p>

          <div class="grid md:grid-cols-3 gap-6" data-aos="fade-up">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
            >
              <span
                class="inline-block px-3 py-1 bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full w-fit mb-4 border border-[color:var(--accent-1)]/20"
                >Signal 1 · Funnel</span
              >
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Intent died at the door
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)]">
                The biggest drop sat between the homepage and the case studies —
                visitors with intent never reached the proof.
              </p>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
            >
              <span
                class="inline-block px-3 py-1 bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full w-fit mb-4 border border-[color:var(--accent-1)]/20"
                >Signal 2 · Search</span
              >
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Demand I wasn't answering
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)]">
                High impressions, low clicks on my strongest queries in Search
                Console. The titles promised less than the work actually
                delivered.
              </p>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
            >
              <span
                class="inline-block px-3 py-1 bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full w-fit mb-4 border border-[color:var(--accent-1)]/20"
                >Signal 3 · Behavior</span
              >
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Dead clicks, repeated
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)]">
                Recordings showed the same nav element absorbing dead clicks for
                weeks. It looked interactive. It wasn't.
              </p>
            </div>
          </div>
        </section>

        <!-- ================= 5. THE HONEST AUDIT ================= -->
        <section
          id="audit"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            The Honest Audit (Before)
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Baseline — 90 days pre-redesign. Source: my own GA4 + Clarity +
            Search Console.
          </p>

          <div
            class="bg-[#0b0b0f] border border-[#26262f] rounded-[32px] p-8 md:p-12 relative overflow-hidden"
            data-aos="fade-up"
          >
            <div
              class="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(109,94,240,0.25),transparent_70%)] pointer-events-none"
            ></div>

            <div
              class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10"
            >
              <div class="bg-[#15151c] border border-[#26262f] rounded-2xl p-5">
                <div class="font-mono text-3xl font-bold text-[#e5484d] mb-1">
                  61%
                </div>
                <div
                  class="text-[11px] font-bold uppercase tracking-widest text-[#9a9aa8]"
                >
                  Bounce Rate
                </div>
                <div class="text-xs text-[#6e6e7c] mt-2">
                  Most exits happened above the fold — the hero was the leak.
                </div>
              </div>
              <div class="bg-[#15151c] border border-[#26262f] rounded-2xl p-5">
                <div class="font-mono text-3xl font-bold text-[#f5a524] mb-1">
                  0:47
                </div>
                <div
                  class="text-[11px] font-bold uppercase tracking-widest text-[#9a9aa8]"
                >
                  Avg. Time on Home
                </div>
                <div class="text-xs text-[#6e6e7c] mt-2">
                  Less than a minute to convince someone I'm worth a case study.
                </div>
              </div>
              <div class="bg-[#15151c] border border-[#26262f] rounded-2xl p-5">
                <div class="font-mono text-3xl font-bold text-[#f5a524] mb-1">
                  44%
                </div>
                <div
                  class="text-[11px] font-bold uppercase tracking-widest text-[#9a9aa8]"
                >
                  Case-Study Scroll
                </div>
                <div class="text-xs text-[#6e6e7c] mt-2">
                  The story was being read — the problem was the door.
                </div>
              </div>
              <div class="bg-[#15151c] border border-[#26262f] rounded-2xl p-5">
                <div class="font-mono text-3xl font-bold text-[#e5484d] mb-1">
                  3
                </div>
                <div
                  class="text-[11px] font-bold uppercase tracking-widest text-[#9a9aa8]"
                >
                  Conversations / 30d
                </div>
                <div class="text-xs text-[#6e6e7c] mt-2">
                  Contact conversions from all traffic combined.
                </div>
              </div>
              <div class="bg-[#15151c] border border-[#26262f] rounded-2xl p-5">
                <div class="font-mono text-3xl font-bold text-[#e5484d] mb-1">
                  2
                </div>
                <div
                  class="text-[11px] font-bold uppercase tracking-widest text-[#9a9aa8]"
                >
                  Rage-Click Spots
                </div>
                <div class="text-xs text-[#6e6e7c] mt-2">
                  Two elements pretending to be interactive.
                </div>
              </div>
              <div class="bg-[#15151c] border border-[#26262f] rounded-2xl p-5">
                <div class="font-mono text-3xl font-bold text-[#1fa971] mb-1">
                  58%
                </div>
                <div
                  class="text-[11px] font-bold uppercase tracking-widest text-[#9a9aa8]"
                >
                  Mobile Share
                </div>
                <div class="text-xs text-[#6e6e7c] mt-2">
                  Majority of traffic — with near-zero mobile conversion.
                </div>
              </div>
            </div>

            <div
              class="mt-8 bg-[#15151c] border border-dashed border-[#26262f] rounded-2xl p-5 flex flex-col md:flex-row items-start gap-4 relative z-10"
            >
              <span
                class="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#e5484d] bg-[#e5484d]/10 border border-[#e5484d]/40 rounded-full px-2.5 py-1 shrink-0"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-[#e5484d] animate-pulse"
                ></span>
                REC 0:39
              </span>
              <p class="text-sm text-[#c9c9d4] italic m-0">
                "Recruiter scrolls past three project cards, hovers the nav,
                dead-clicks twice, leaves. No case study opened. No contact."
              </p>
            </div>
          </div>
        </section>

        <!-- ================= 6. THE VISUAL EVIDENCE — Evolution Split ================= -->
        <section
          id="evidence"
          class="py-24 max-w-6xl mx-auto border-t border-[color:var(--card-border)] relative overflow-hidden"
        >
          <!-- Ambient glow -->
          <div
            class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(109,94,240,0.08),transparent_70%)] blur-3xl pointer-events-none"
            aria-hidden="true"
          ></div>

          <!-- ═══ Header ═══ -->
          <div class="relative z-10 mb-16" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-3">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
              >
                The Evidence
              </span>
              <span
                class="flex-grow h-px bg-[color:var(--card-border)] max-w-[120px]"
              ></span>
              <span
                class="font-mono text-xs text-[color:var(--ink-soft)] opacity-60"
              >
                2024 → 2026
              </span>
            </div>
            <h2
              class="text-3xl md:text-4xl font-extrabold text-[color:var(--ink)] mb-3 max-w-2xl"
            >
              From gallery to playbook — a before/after that isn't afraid to be
              compared.
            </h2>
            <p
              class="text-base text-[color:var(--ink-soft)] max-w-2xl leading-relaxed"
            >
              Same domain. Same owner. Same designer. Different question asked
              before the first pixel was placed.
            </p>
          </div>

          <!-- ═══ The Comparison — Editorial Split ═══ -->
          <div class="relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12">
            <!-- ─────── SIDE 1: V1 (Before) ─────── -->
            <div class="flex flex-col gap-5 group" data-aos="fade-up">
              <!-- Year + Status header -->
              <div
                class="flex items-center justify-between border-b border-[color:var(--card-border)] pb-4"
              >
                <div class="flex items-baseline gap-3">
                  <span
                    class="text-4xl md:text-5xl font-black tracking-tight text-[color:var(--ink)]/30 group-hover:text-[color:var(--ink)]/50 transition-colors"
                  >
                    2024
                  </span>
                  <div class="flex flex-col">
                    <span
                      class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5484d]"
                    >
                      Version 01
                    </span>
                    <span
                      class="text-xs font-semibold text-[color:var(--ink-soft)]"
                    >
                      The "Gallery"
                    </span>
                  </div>
                </div>
                <div class="flex flex-col items-end">
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] opacity-70"
                  >
                    Bounce
                  </span>
                  <span class="font-mono text-lg font-bold text-[#e5484d]">
                    61%
                  </span>
                </div>
              </div>

              <!-- Browser Frame -->
              <div
                class="relative rounded-2xl overflow-hidden border border-[color:var(--card-border)] bg-[color:var(--input-bg)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
              >
                <!-- Browser chrome -->
                <div
                  class="flex items-center gap-2 px-4 py-3 bg-[color:var(--card-bg)]/80 backdrop-blur-sm border-b border-[color:var(--card-border)]"
                >
                  <div class="flex gap-1.5">
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-[#e5484d]/60"
                    ></span>
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-[#f5a524]/60"
                    ></span>
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-[#33cc95]/60"
                    ></span>
                  </div>
                  <div class="flex-1 flex justify-center">
                    <div
                      class="px-3 py-1 rounded-md bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[10px] font-mono text-[color:var(--ink-soft)] flex items-center gap-1.5"
                    >
                      <Icon name="lucide:lock" class="w-2.5 h-2.5 opacity-50" />
                      mamdouhghaneemy.com/2024
                    </div>
                  </div>
                </div>
                <div
                  class="shot-scroll aspect-[16/10] relative overflow-hidden"
                >
                  <!-- V1 (Before) -->
                  <NuxtImg
                    src="/images/mamdouh/strategic-portfolio-before-redesign-mamdouh-ghaneemy-2024.png"
                    alt="Old portfolio homepage — dark animated hero with generic design and code title"
                    class="w-full h-auto"
                    format="webp"
                    quality="90"
                  />

                  <!-- Hover hint -->
                  <div
                    class="shot-scroll__hint pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center"
                  >
                    <span
                      class="px-3 py-1.5 rounded-full bg-[color:var(--card-bg)]/95 backdrop-blur-sm border border-[color:var(--card-border)] shadow-lg text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink)] flex items-center gap-1.5"
                    >
                      <Icon name="lucide:mouse-pointer-2" class="w-3 h-3" />
                      Hover to scroll
                    </span>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div class="flex flex-col gap-2">
                <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                  Heavy animation. A hero that said nothing. Three case studies
                  nobody reached.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-2.5 py-1 rounded-full"
                  >
                    No metric
                  </span>
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-2.5 py-1 rounded-full"
                  >
                    Vague positioning
                  </span>
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-2.5 py-1 rounded-full"
                  >
                    No receipts
                  </span>
                </div>
              </div>
            </div>

            <!-- ─────── SIDE 2: V2 (After) ─────── -->
            <div
              class="flex flex-col gap-5 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <!-- Year + Status header -->
              <div
                class="flex items-center justify-between border-b-2 border-[color:var(--accent-1)]/40 pb-4"
              >
                <div class="flex items-baseline gap-3">
                  <span
                    class="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)]"
                  >
                    2026
                  </span>
                  <div class="flex flex-col">
                    <span
                      class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#33cc95]"
                    >
                      Version 02
                    </span>
                    <span class="text-xs font-semibold text-[color:var(--ink)]">
                      The "Playbook"
                    </span>
                  </div>
                </div>
                <div class="flex flex-col items-end gap-1">
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] opacity-70"
                  >
                    Bounce
                  </span>
                  <div class="flex items-center gap-1.5">
                    <span class="relative flex h-1.5 w-1.5">
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent-1)] opacity-60"
                      ></span>
                      <span
                        class="relative inline-flex rounded-full h-1.5 w-1.5 bg-[color:var(--accent-1)]"
                      ></span>
                    </span>
                    <span
                      class="font-mono text-sm font-bold text-[color:var(--accent-text)] tracking-tight"
                    >
                      In Measurement
                    </span>
                  </div>
                </div>
              </div>

              <!-- Browser Frame — Enhanced -->
              <div
                class="relative rounded-2xl overflow-hidden border-2 border-[color:var(--accent-1)]/60 bg-[color:var(--input-bg)] shadow-[0_30px_60px_-20px_rgba(109,94,240,0.35)]"
              >
                <!-- Ambient glow behind -->
                <div
                  class="absolute -inset-1 bg-gradient-to-br from-[color:var(--accent-1)]/20 to-[color:var(--accent-2)]/20 blur-xl opacity-60"
                  aria-hidden="true"
                ></div>

                <!-- Browser chrome -->
                <div
                  class="relative flex items-center gap-2 px-4 py-3 bg-[color:var(--card-bg)]/80 backdrop-blur-sm border-b border-[color:var(--accent-1)]/20"
                >
                  <div class="flex gap-1.5">
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-[#e5484d]/60"
                    ></span>
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-[#f5a524]/60"
                    ></span>
                    <span
                      class="w-2.5 h-2.5 rounded-full bg-[#33cc95]/60"
                    ></span>
                  </div>
                  <div class="flex-1 flex justify-center">
                    <div
                      class="px-3 py-1 rounded-md bg-[color:var(--input-bg)] border border-[color:var(--accent-1)]/30 text-[10px] font-mono text-[color:var(--accent-text)] flex items-center gap-1.5"
                    >
                      <Icon name="lucide:lock" class="w-2.5 h-2.5" />
                      mamdouhghaneemy.com
                    </div>
                  </div>
                </div>

                <!-- Screenshot -->
                <div
                  class="shot-scroll relative aspect-[16/10] overflow-hidden"
                >
                  <NuxtImg
                    src="/images/mamdouh/portfolio-after-redesign-mamdouh-ghaneemy-2026.png"
                    alt="New portfolio homepage — metric-led hero with proof above the fold"
                    class="w-full h-auto"
                    format="webp"
                    quality="90"
                  />

                  <!-- Live metric badge overlay -->
                  <div
                    class="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[color:var(--card-bg)]/95 backdrop-blur-sm border border-[#33cc95]/40 shadow-lg flex items-center gap-2"
                  >
                    <span class="relative flex h-1.5 w-1.5">
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33cc95] opacity-75"
                      ></span>
                      <span
                        class="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#33cc95]"
                      ></span>
                    </span>
                    <span
                      class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink)]"
                    >
                      Live
                    </span>
                  </div>

                  <!-- Hover hint -->
                  <div
                    class="shot-scroll__hint pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center"
                  >
                    <span
                      class="px-3 py-1.5 rounded-full bg-[color:var(--card-bg)]/95 backdrop-blur-sm border border-[color:var(--accent-1)]/30 shadow-lg text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink)] flex items-center gap-1.5"
                    >
                      <Icon name="lucide:mouse-pointer-2" class="w-3 h-3" />
                      Hover to scroll
                    </span>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div class="flex flex-col gap-2">
                <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                  Metric-led hero. Proof above the fold. Case studies with
                  numbers attached.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2.5 py-1 rounded-full"
                  >
                    Metric-led
                  </span>
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2.5 py-1 rounded-full"
                  >
                    Proof above fold
                  </span>
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2.5 py-1 rounded-full"
                  >
                    Receipts
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══ Divider — The Transformation ═══ -->
          <div
            class="relative z-10 mt-12 flex items-center justify-center"
            data-aos="fade-up"
          >
            <div
              class="flex items-center gap-4 px-6 py-3 rounded-full bg-[color:var(--card-bg)] border border-[color:var(--card-border)]"
            >
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)]"
              >
                2 years
              </span>
              <Icon
                name="lucide:arrow-right"
                class="w-4 h-4 text-[color:var(--accent-1)]"
              />
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink)]"
              >
                -22 bounce pts
              </span>
              <Icon
                name="lucide:arrow-right"
                class="w-4 h-4 text-[color:var(--accent-1)]"
              />
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-[#33cc95]"
              >
                Same owner
              </span>
            </div>
          </div>
        </section>

        <!-- ================= 7. TRADE-OFFS ================= -->
        <section
          id="tradeoffs"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <div
            class="flex flex-col md:flex-row md:items-end justify-between mb-8"
            data-aos="fade-up"
          >
            <div>
              <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-2">
                What stayed, what went
              </h2>
              <p class="text-lg text-[color:var(--ink-soft)]">
                Every element had to defend itself with evidence — including the
                ones I loved.
              </p>
            </div>

            <!-- Filter Buttons -->
            <div class="flex gap-2 mt-4 md:mt-0 flex-wrap">
              <button
                @click="activeFilter = 'all'"
                :aria-pressed="activeFilter === 'all'"
                :class="
                  activeFilter === 'all'
                    ? 'bg-[color:var(--ink)] text-white border-[color:var(--ink)]'
                    : 'bg-[color:var(--card-bg)] text-[color:var(--ink-soft)] border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] hover:text-[color:var(--accent-1)]'
                "
                class="text-xs font-bold px-4 py-2 rounded-full border transition-colors"
              >
                All
              </button>
              <button
                @click="activeFilter = 'stayed'"
                :aria-pressed="activeFilter === 'stayed'"
                :class="
                  activeFilter === 'stayed'
                    ? 'bg-[#33cc95]/20 text-[#33cc95] border-[#33cc95]/50'
                    : 'bg-[color:var(--card-bg)] text-[color:var(--ink-soft)] border-[color:var(--card-border)] hover:border-[#33cc95] hover:text-[#33cc95]'
                "
                class="text-xs font-bold px-4 py-2 rounded-full border transition-colors"
              >
                Stayed
              </button>
              <button
                @click="activeFilter = 'went'"
                :aria-pressed="activeFilter === 'went'"
                :class="
                  activeFilter === 'went'
                    ? 'bg-red-500/20 text-red-500 border-red-500/50'
                    : 'bg-[color:var(--card-bg)] text-[color:var(--ink-soft)] border-[color:var(--card-border)] hover:border-red-500 hover:text-red-500'
                "
                class="text-xs font-bold px-4 py-2 rounded-full border transition-colors"
              >
                Went
              </button>
              <button
                @click="activeFilter = 'added'"
                :aria-pressed="activeFilter === 'added'"
                :class="
                  activeFilter === 'added'
                    ? 'bg-[color:var(--accent-1)]/20 text-[color:var(--accent-1)] border-[color:var(--accent-1)]/50'
                    : 'bg-[color:var(--card-bg)] text-[color:var(--ink-soft)] border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] hover:text-[color:var(--accent-1)]'
                "
                class="text-xs font-bold px-4 py-2 rounded-full border transition-colors"
              >
                Added
              </button>
            </div>
          </div>

          <div
            class="w-full bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] overflow-hidden shadow-sm"
            data-aos="fade-up"
          >
            <!-- ═══ DESKTOP: Table View ═══ -->
            <div
              class="hidden md:block w-full bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] overflow-hidden shadow-sm"
            >
              <div class="overflow-x-auto">
                <table
                  class="w-full text-left text-sm text-[color:var(--ink-soft)]"
                  aria-label="Design Trade-offs Table"
                >
                  <thead
                    class="bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)]"
                  >
                    <tr>
                      <th
                        class="px-6 py-4 font-bold text-[10px] uppercase tracking-widest text-[color:var(--ink-soft)]"
                      >
                        Element
                      </th>
                      <th
                        class="px-6 py-4 font-bold text-[10px] uppercase tracking-widest text-[color:var(--ink-soft)]"
                      >
                        Decision
                      </th>
                      <th
                        class="px-6 py-4 font-bold text-[10px] uppercase tracking-widest text-[color:var(--ink-soft)]"
                      >
                        The Evidence Behind It
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[color:var(--card-border)]">
                    <tr
                      v-show="activeFilter === 'all' || activeFilter === 'went'"
                      class="hover:bg-[color:var(--input-bg)]/50 transition-colors"
                    >
                      <td
                        class="px-6 py-5 font-bold text-[color:var(--ink)] whitespace-nowrap"
                      >
                        Animated dark hero
                      </td>
                      <td class="px-6 py-5">
                        <span
                          class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/30 rounded-full"
                        >
                          Went
                        </span>
                      </td>
                      <td class="px-6 py-5">
                        <em
                          class="text-[color:var(--ink)] font-semibold not-italic"
                          >"Beauty that delays proof is a tax."</em
                        >
                        <strong class="text-[color:var(--ink)]"
                          >61% bounced</strong
                        >
                        before the animation finished.
                      </td>
                    </tr>
                    <tr
                      v-show="
                        activeFilter === 'all' || activeFilter === 'stayed'
                      "
                      class="hover:bg-[color:var(--input-bg)]/50 transition-colors"
                    >
                      <td
                        class="px-6 py-5 font-bold text-[color:var(--ink)] whitespace-nowrap"
                      >
                        Long-form case studies
                      </td>
                      <td class="px-6 py-5">
                        <span
                          class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full"
                        >
                          Stayed
                        </span>
                      </td>
                      <td class="px-6 py-5">
                        <em
                          class="text-[color:var(--ink)] font-semibold not-italic"
                          >"Fix the door, keep the room."</em
                        >
                        <strong class="text-[color:var(--ink)]"
                          >44% scroll depth</strong
                        >
                        proved readers stayed when they arrived.
                      </td>
                    </tr>
                    <tr
                      v-show="
                        activeFilter === 'all' || activeFilter === 'stayed'
                      "
                      class="hover:bg-[color:var(--input-bg)]/50 transition-colors"
                    >
                      <td
                        class="px-6 py-5 font-bold text-[color:var(--ink)] whitespace-nowrap"
                      >
                        Purple accent system
                      </td>
                      <td class="px-6 py-5">
                        <span
                          class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full"
                        >
                          Stayed
                        </span>
                      </td>
                      <td class="px-6 py-5">
                        Strong brand recall in informal tests — refined for WCAG
                        2.2 AA contrast instead of replaced.
                      </td>
                    </tr>
                    <tr
                      v-show="
                        activeFilter === 'all' || activeFilter === 'stayed'
                      "
                      class="hover:bg-[color:var(--input-bg)]/50 transition-colors"
                    >
                      <td
                        class="px-6 py-5 font-bold text-[color:var(--ink)] whitespace-nowrap"
                      >
                        Sticky TOC
                      </td>
                      <td class="px-6 py-5">
                        <span
                          class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full"
                        >
                          Stayed
                        </span>
                      </td>
                      <td class="px-6 py-5">
                        Recordings showed readers losing their place mid-scroll.
                        Anchors turned wandering into navigating.
                      </td>
                    </tr>
                    <tr
                      v-show="activeFilter === 'all' || activeFilter === 'went'"
                      class="hover:bg-[color:var(--input-bg)]/50 transition-colors"
                    >
                      <td
                        class="px-6 py-5 font-bold text-[color:var(--ink)] whitespace-nowrap"
                      >
                        Generic "Services" page
                      </td>
                      <td class="px-6 py-5">
                        <span
                          class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/30 rounded-full"
                        >
                          Went
                        </span>
                      </td>
                      <td class="px-6 py-5">
                        Zero assisted conversions in 90 days. It explained
                        nothing the case studies didn't prove better.
                      </td>
                    </tr>
                    <tr
                      v-show="
                        activeFilter === 'all' || activeFilter === 'added'
                      "
                      class="hover:bg-[color:var(--input-bg)]/50 transition-colors"
                    >
                      <td
                        class="px-6 py-5 font-bold text-[color:var(--ink)] whitespace-nowrap"
                      >
                        Insights / Blog series
                      </td>
                      <td class="px-6 py-5">
                        <span
                          class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 rounded-full"
                        >
                          Added
                        </span>
                      </td>
                      <td class="px-6 py-5">
                        Search Console showed real query demand I had no page
                        answering. Content became strategy, not decoration.
                      </td>
                    </tr>
                    <tr
                      v-show="
                        activeFilter === 'all' || activeFilter === 'added'
                      "
                      class="hover:bg-[color:var(--input-bg)]/50 transition-colors"
                    >
                      <td
                        class="px-6 py-5 font-bold text-[color:var(--ink)] whitespace-nowrap"
                      >
                        Proof-first hero copy
                      </td>
                      <td class="px-6 py-5">
                        <span
                          class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 rounded-full"
                        >
                          Added
                        </span>
                      </td>
                      <td class="px-6 py-5">
                        The first screen now states the outcome and the method —
                        the two things every recording showed visitors hunting
                        for.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- ═══ MOBILE: Card View ═══ -->
            <div class="md:hidden flex flex-col gap-3">
              <!-- Card 1 — Animated dark hero -->
              <div
                v-show="activeFilter === 'all' || activeFilter === 'went'"
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <h4
                    class="font-bold text-[color:var(--ink)] text-base leading-snug"
                  >
                    Animated dark hero
                  </h4>
                  <span
                    class="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/30 rounded-full"
                  >
                    Went
                  </span>
                </div>
                <div class="pt-4 border-t border-[color:var(--card-border)]">
                  <p
                    class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                  >
                    <em class="text-[color:var(--ink)] font-semibold not-italic"
                      >"Beauty that delays proof is a tax."</em
                    >
                    <strong class="text-[color:var(--ink)]">61% bounced</strong>
                    before the animation finished.
                  </p>
                </div>
              </div>

              <!-- Card 2 — Long-form case studies -->
              <div
                v-show="activeFilter === 'all' || activeFilter === 'stayed'"
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <h4
                    class="font-bold text-[color:var(--ink)] text-base leading-snug"
                  >
                    Long-form case studies
                  </h4>
                  <span
                    class="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full"
                  >
                    Stayed
                  </span>
                </div>
                <div class="pt-4 border-t border-[color:var(--card-border)]">
                  <p
                    class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                  >
                    <em class="text-[color:var(--ink)] font-semibold not-italic"
                      >"Fix the door, keep the room."</em
                    >
                    <strong class="text-[color:var(--ink)]"
                      >44% scroll depth</strong
                    >
                    proved readers stayed when they arrived.
                  </p>
                </div>
              </div>

              <!-- Card 3 — Purple accent system -->
              <div
                v-show="activeFilter === 'all' || activeFilter === 'stayed'"
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <h4
                    class="font-bold text-[color:var(--ink)] text-base leading-snug"
                  >
                    Purple accent system
                  </h4>
                  <span
                    class="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full"
                  >
                    Stayed
                  </span>
                </div>
                <div class="pt-4 border-t border-[color:var(--card-border)]">
                  <p
                    class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                  >
                    Strong brand recall in informal tests — refined for WCAG 2.2
                    AA contrast instead of replaced.
                  </p>
                </div>
              </div>

              <!-- Card 4 — Sticky TOC -->
              <div
                v-show="activeFilter === 'all' || activeFilter === 'stayed'"
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <h4
                    class="font-bold text-[color:var(--ink)] text-base leading-snug"
                  >
                    Sticky TOC
                  </h4>
                  <span
                    class="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full"
                  >
                    Stayed
                  </span>
                </div>
                <div class="pt-4 border-t border-[color:var(--card-border)]">
                  <p
                    class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                  >
                    Recordings showed readers losing their place mid-scroll.
                    Anchors turned wandering into navigating.
                  </p>
                </div>
              </div>

              <!-- Card 5 — Generic "Services" page -->
              <div
                v-show="activeFilter === 'all' || activeFilter === 'went'"
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <h4
                    class="font-bold text-[color:var(--ink)] text-base leading-snug"
                  >
                    Generic "Services" page
                  </h4>
                  <span
                    class="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/30 rounded-full"
                  >
                    Went
                  </span>
                </div>
                <div class="pt-4 border-t border-[color:var(--card-border)]">
                  <p
                    class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                  >
                    Zero assisted conversions in 90 days. It explained nothing
                    the case studies didn't prove better.
                  </p>
                </div>
              </div>

              <!-- Card 6 — Insights / Blog series -->
              <div
                v-show="activeFilter === 'all' || activeFilter === 'added'"
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <h4
                    class="font-bold text-[color:var(--ink)] text-base leading-snug"
                  >
                    Insights / Blog series
                  </h4>
                  <span
                    class="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 rounded-full"
                  >
                    Added
                  </span>
                </div>
                <div class="pt-4 border-t border-[color:var(--card-border)]">
                  <p
                    class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                  >
                    Search Console showed real query demand I had no page
                    answering. Content became strategy, not decoration.
                  </p>
                </div>
              </div>

              <!-- Card 7 — Proof-first hero copy -->
              <div
                v-show="activeFilter === 'all' || activeFilter === 'added'"
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <h4
                    class="font-bold text-[color:var(--ink)] text-base leading-snug"
                  >
                    Proof-first hero copy
                  </h4>
                  <span
                    class="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 rounded-full"
                  >
                    Added
                  </span>
                </div>
                <div class="pt-4 border-t border-[color:var(--card-border)]">
                  <p
                    class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                  >
                    The first screen now states the outcome and the method — the
                    two things every recording showed visitors hunting for.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- ✅ MODIFICATION 6: Internal CTA after Trade-offs -->
          <div class="mt-8 flex justify-center" data-aos="fade-up">
            <AppButton
              to="/projects/qompyl-case-study"
              variant="secondary"
              size="md"
              rounded="full"
              icon-right="ArrowRight"
            >
              See these decisions applied to a client — Qompyl Case Study
            </AppButton>
          </div>
        </section>

        <!-- ================= 8. RESULTS ================= -->
        <section
          id="results"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            The first 30 days (After)
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Same property, same events, same 30-day window before and after.
            That's the only fair comparison.
          </p>

          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.1)]"
            data-aos="fade-up"
          >
            <div
              class="flex justify-between items-center flex-wrap gap-4 mb-10 pb-6 border-b border-[color:var(--card-border)]"
            >
              <h3 class="text-xl font-bold text-[color:var(--ink)]">
                Before vs After
              </h3>
              <div
                class="flex gap-4 text-xs font-bold text-[color:var(--ink-soft)] uppercase tracking-wider"
              >
                <span class="flex items-center gap-2"
                  ><span
                    class="w-2.5 h-2.5 rounded-sm bg-gray-300 dark:bg-gray-700"
                  ></span>
                  Before</span
                >
                <span class="flex items-center gap-2"
                  ><span
                    class="w-2.5 h-2.5 rounded-sm bg-[color:var(--accent-1)]"
                  ></span>
                  After</span
                >
              </div>
            </div>

            <div class="space-y-10">
              <!-- Metric 1 -->
              <div>
                <div class="flex justify-between items-baseline mb-3">
                  <span class="text-sm font-bold text-[color:var(--ink)]"
                    >Bounce rate</span
                  >
                  <span
                    class="font-mono text-xs font-bold text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full px-3 py-1"
                    >−22 pts</span
                  >
                </div>
                <div
                  class="grid grid-cols-[60px_1fr_40px] items-center gap-3 mb-2"
                >
                  <span
                    class="font-mono text-[10px] font-bold text-[color:var(--ink-soft)] uppercase"
                    >Before</span
                  >
                  <div
                    class="h-2.5 bg-[color:var(--input-bg)] rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gray-300 dark:bg-gray-700 rounded-full"
                      style="width: 61%"
                    ></div>
                  </div>
                  <span
                    class="font-mono text-xs font-bold text-right text-[color:var(--ink)]"
                    >61%</span
                  >
                </div>
                <div class="grid grid-cols-[60px_1fr_40px] items-center gap-3">
                  <span
                    class="font-mono text-[10px] font-bold text-[color:var(--ink-soft)] uppercase"
                    >After</span
                  >
                  <div
                    class="h-2.5 bg-[color:var(--input-bg)] rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] rounded-full"
                      style="width: 39%"
                    ></div>
                  </div>
                  <span
                    class="font-mono text-xs font-bold text-right text-[color:var(--ink)]"
                    >39%</span
                  >
                </div>
              </div>

              <!-- Metric 2 -->
              <div>
                <div class="flex justify-between items-baseline mb-3">
                  <span class="text-sm font-bold text-[color:var(--ink)]"
                    >Case-study scroll depth</span
                  >
                  <span
                    class="font-mono text-xs font-bold text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full px-3 py-1"
                    >+31 pts</span
                  >
                </div>
                <div
                  class="grid grid-cols-[60px_1fr_40px] items-center gap-3 mb-2"
                >
                  <span
                    class="font-mono text-[10px] font-bold text-[color:var(--ink-soft)] uppercase"
                    >Before</span
                  >
                  <div
                    class="h-2.5 bg-[color:var(--input-bg)] rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gray-300 dark:bg-gray-700 rounded-full"
                      style="width: 44%"
                    ></div>
                  </div>
                  <span
                    class="font-mono text-xs font-bold text-right text-[color:var(--ink)]"
                    >44%</span
                  >
                </div>
                <div class="grid grid-cols-[60px_1fr_40px] items-center gap-3">
                  <span
                    class="font-mono text-[10px] font-bold text-[color:var(--ink-soft)] uppercase"
                    >After</span
                  >
                  <div
                    class="h-2.5 bg-[color:var(--input-bg)] rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] rounded-full"
                      style="width: 75%"
                    ></div>
                  </div>
                  <span
                    class="font-mono text-xs font-bold text-right text-[color:var(--ink)]"
                    >75%</span
                  >
                </div>
              </div>

              <!-- Metric 3 -->
              <div>
                <div class="flex justify-between items-baseline mb-3">
                  <span class="text-sm font-bold text-[color:var(--ink)]"
                    >Top-query CTR (Search Console)</span
                  >
                  <span
                    class="font-mono text-xs font-bold text-[#33cc95] bg-[#33cc95]/10 border border-[#33cc95]/30 rounded-full px-3 py-1"
                    >+2.8 pts</span
                  >
                </div>
                <div
                  class="grid grid-cols-[60px_1fr_40px] items-center gap-3 mb-2"
                >
                  <span
                    class="font-mono text-[10px] font-bold text-[color:var(--ink-soft)] uppercase"
                    >Before</span
                  >
                  <div
                    class="h-2.5 bg-[color:var(--input-bg)] rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gray-300 dark:bg-gray-700 rounded-full"
                      style="width: 18%"
                    ></div>
                  </div>
                  <span
                    class="font-mono text-xs font-bold text-right text-[color:var(--ink)]"
                    >1.8%</span
                  >
                </div>
                <div class="grid grid-cols-[60px_1fr_40px] items-center gap-3">
                  <span
                    class="font-mono text-[10px] font-bold text-[color:var(--ink-soft)] uppercase"
                    >After</span
                  >
                  <div
                    class="h-2.5 bg-[color:var(--input-bg)] rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] rounded-full"
                      style="width: 46%"
                    ></div>
                  </div>
                  <span
                    class="font-mono text-xs font-bold text-right text-[color:var(--ink)]"
                    >4.6%</span
                  >
                </div>
              </div>
            </div>

            <!-- ✅ MODIFICATION 3: Enhanced footnote with statistical honesty -->
            <div
              class="mt-10 pt-6 border-t border-dashed border-[color:var(--card-border)]"
            >
              <p class="text-[13px] text-[color:var(--ink-soft)] mb-3">
                Conversations moved from
                <strong class="text-[color:var(--ink)]">3 → 7</strong> per 30
                days. The direction is correct, but the sample is
                <strong class="text-[color:var(--ink)]"
                  >too small to call it a trend</strong
                >. I'm re-measuring at 90 days before publishing a ratio.
              </p>
              <p class="text-[11px] text-[color:var(--ink-soft)] opacity-70">
                * Bounce = unengaged sessions (GA4) · Read depth = Clarity
                scroll maps · CTR = GSC top query.
              </p>
            </div>
          </div>
        </section>

        <!-- ================= 9. UNCOMFORTABLE TRUTHS ================= -->
        <section
          id="truths"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            The Uncomfortable Truths
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            A case study without confessions is an advertisement. Here are mine:
          </p>

          <div class="flex flex-col gap-6" data-aos="fade-up">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-amber-500 rounded-r-[20px] p-8 md:p-10"
            >
              <h4
                class="text-lg font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2"
              >
                <span
                  class="text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded"
                  >01</span
                >
                The auditor needed auditing.
              </h4>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed m-0"
              >
                I shipped v1 of this redesign with a broken anchor link. My own
                Clarity caught it in 48 hours. My rule saved me from my own
                mistake.
              </p>
            </div>

            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-amber-500 rounded-r-[20px] p-8 md:p-10"
            >
              <h4
                class="text-lg font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2"
              >
                <span
                  class="text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded"
                  >02</span
                >
                Mobile is still my weakest surface.
              </h4>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed m-0"
              >
                Conversion on mobile improved but remains significantly below
                desktop. The fix is designed, queued, but not shipped yet.
                Honesty over highlight reel.
              </p>
            </div>

            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-amber-500 rounded-r-[20px] p-8 md:p-10"
            >
              <h4
                class="text-lg font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2"
              >
                <span
                  class="text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded"
                  >03</span
                >
                Some of this may be seasonality.
              </h4>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed m-0"
              >
                Thirty days can flatter you.
                <strong class="text-[color:var(--ink)]"
                  >I'll re-measure at 90 days</strong
                >
                and publish the delta either way — up or down. That's the deal I
                make with my own numbers.
              </p>
            </div>
          </div>
        </section>

        <!-- ================= 11. CLOSING CTA ================= -->
        <section
          class="py-24 px-6 text-center border-t border-[color:var(--card-border)]"
        >
          <!-- Badge — Next case study -->
          <div
            class="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)] bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-5 py-2.5"
            data-aos="fade-up"
          >
            <Icon
              name="lucide:sparkles"
              class="w-4 h-4 text-[color:var(--accent-1)]"
            />
            Next case study: Qompyl Website — designing for investor due
            diligence.
          </div>

          <!-- Heading -->
          <h2
            class="text-4xl md:text-5xl font-black tracking-[-0.02em] text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            Your website could be proving more.
          </h2>

          <!-- Description -->
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-3"
            data-aos="fade-up"
          >
            Same audit, same rigor, same receipts I just described — applied to
            you.
          </p>

          <!-- Signature Phrase -->
          <p
            class="text-sm font-bold uppercase tracking-widest text-[color:var(--accent-text)] mb-12"
            data-aos="fade-up"
          >
            One owner, whole loop — audit to handoff.
          </p>

          <!-- Buttons -->
          <div
            class="flex flex-col sm:flex-row justify-center items-center gap-4"
            data-aos="fade-up"
          >
            <AppButton
              to="/contact"
              variant="primary"
              size="lg"
              rounded="full"
              icon-right="ArrowRight"
            >
              Book a Free Audit Call
            </AppButton>
            <AppButton
              to="/projects/qompyl-case-study"
              variant="glass"
              size="lg"
              rounded="full"
            >
              See the Qompyl Case Study
            </AppButton>
          </div>

          <!-- Microcopy -->
          <p
            class="text-xs font-medium text-[color:var(--ink-soft)] opacity-70 mt-6"
          >
            Reply within 24 hours. Usually sooner.
          </p>
        </section>
      </div>
      <!-- End Main Content -->
    </div>
    <!-- V1 (Before) -->

    <!-- End Layout Container -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
definePageMeta({
  layout: "playbook",
  backLabel: "Projects",
  backTo: "/projects",
});

usePageMeta({
  title:
    "Redesigning My Own Portfolio — The 3-Signal Rule in Practice | Mamdouh Ghaneemy",
  description:
    "I audited my own portfolio with the same metrics I ask clients to trust — The 3-Signal Rule in action. Behavior, intent, funnel. Recordings first, opinions last.",
  keywords: [
    "portfolio redesign case study",
    "design audit framework",
    "the 3-signal rule",
    "measurable ux",
    "clarity analytics",
    "design that converts",
    "GA4 case study",
  ],
  ogType: "article",
  ogImage: "https://mamdouhghaneemy.com/images/strategic-portfolio-cover.png",
  article: {
    publishedTime: "2026-09-01T00:00:00Z",
    modifiedTime: "2026-09-18T00:00:00Z",
    section: "Case Study",
    tags: ["Portfolio", "Redesign", "Analytics", "The 3-Signal Rule"],
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Strategic Portfolio", url: "/projects/strategic-portfolio" },
  ],
  faqItems: [
    {
      question: "What is The 3-Signal Rule?",
      answer:
        "The 3-Signal Rule is the framework I use on every project: no design decision ships without three independent signals — one from behavior (session recordings), one from intent (search queries), and one from the funnel (analytics drop-offs). One signal is an anecdote. Two is a hypothesis. Three is a decision.",
    },
    {
      question: "Why did you redesign your own portfolio?",
      answer:
        "Session recordings showed visitors bouncing at 61% before the second scroll. The old design photographed well but leaked intent — a recording humbled me into treating myself as a client and applying The 3-Signal Rule to my own work.",
    },
    {
      question: "How did you measure success?",
      answer:
        "Bounce rate dropped 22 points (61% → 39%), case-study scroll depth increased 31 points, and top-query CTR in Search Console rose from 1.8% to 4.6% — all tracked with GA4 + Clarity + GSC over the same 30-day window. Conversations went from 3 → 7, but the sample is too small to call a trend — re-measuring at 90 days.",
    },
    {
      question: "What did you remove from the old portfolio?",
      answer:
        "The animated dark hero, the generic Services page, and any decorative element that could not justify itself with evidence. Every remaining element had to defend its presence against The 3-Signal Rule.",
    },
  ],
});

const tocLinks = [
  { id: "framework", label: "The Framework" },
  { id: "why", label: "Why Redesign?" },
  { id: "audit", label: "The Audit" },
  { id: "tradeoffs", label: "Trade-offs" },
  { id: "results", label: "Results" },
  { id: "truths", label: "Uncomfortable Truths" },
];

const activeFilter = ref("all");

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const isSheetOpen = ref(false);
const toggleSheet = () => {
  isSheetOpen.value = !isSheetOpen.value;
};
const closeSheet = () => {
  if (isSheetOpen.value) toggleSheet();
};

const handleResize = () => {
  if (process.client && window.innerWidth > 1024 && isSheetOpen.value)
    closeSheet();
};

onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));
</script>

<style scoped>
:deep(body.drawer-open) {
  overflow: hidden;
}
html {
  scroll-behavior: smooth;
}
/* ── Screenshot hover-scroll ── */
.shot-scroll {
  container-type: size; /* عشان نعرف ارتفاع الإطار بـ cqh */
}

.shot-scroll :deep(img) {
  display: block;
  width: 100%;
  height: auto;
  min-height: 100%;
  object-fit: cover;
  object-position: top;
  transform: translate3d(0, 0, 0);
  /* الرجوع لفوق: أسرع من النزول */
  transition: transform 1.1s cubic-bezier(0.22, 0.61, 0.36, 1);
  will-change: transform;
}

.shot-scroll__hint {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

@media (hover: hover) and (pointer: fine) {
  .shot-scroll:hover :deep(img) {
    /* ينزل لحد آخر الصورة بالظبط (الارتفاع الكلي - ارتفاع الإطار) */
    transform: translate3d(0, min(0px, calc(100cqh - 100%)), 0);
    transition-duration: 7s; /* غيّرها لو عايزها أسرع/أبطأ */
    transition-timing-function: cubic-bezier(0.45, 0.05, 0.35, 1);
  }

  .shot-scroll:hover .shot-scroll__hint {
    opacity: 0;
    transform: translateY(6px);
  }
}

/* على الموبايل مفيش هوفر، فنخفي التلميح */
@media (hover: none) {
  .shot-scroll__hint {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .shot-scroll:hover :deep(img) {
    transform: none;
  }
}
</style>
