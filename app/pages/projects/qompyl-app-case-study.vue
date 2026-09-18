<template>
  <div class="page-wrapper bg-[color:var(--page-bg-1)] text-[color:var(--ink)]">
    <!-- === LAYOUT CONTAINER === -->
    <div class="relative max-w-screen-2xl mx-auto px-4 md:px-8 flex items-start">
      <!-- === DESKTOP SIDEBAR (TOC) === -->
      <div
        class="hidden lg:flex flex-col sticky top-32 h-[calc(100vh-10rem)] w-[280px] p-8 xl:pl-[120px] justify-start z-10 shrink-0"
      >
        <div class="mb-10 flex flex-col gap-2">
          <span class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-1)]">
            Case Study · Part II
          </span>
          <h1 class="text-2xl font-extrabold text-[color:var(--ink)] tracking-tight">
            Qompyl App
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
            <p>Product Designer — Mobile</p>
            <p class="font-bold text-[color:var(--ink)] mt-1">Jun – Aug 2026</p>
          </div>
        </div>
      </div>

      <!-- === MAIN CONTENT === -->
      <div class="w-full flex-1 pb-32 lg:pl-10">
        <!-- ================= 1. HERO ================= -->
        <header
          class="relative min-h-[60vh] flex flex-col justify-center pt-10 pb-16 max-w-5xl mx-auto overflow-hidden"
        >
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 max-w-5xl h-[300px] bg-gradient-to-b from-[color:var(--accent-1)]/10 to-transparent blur-[100px] pointer-events-none"
          ></div>

          <div class="space-y-8 animate-[rise_.7s_cubic-bezier(.19,1,.22,1)_both] relative z-10">
            <div class="flex flex-wrap gap-4 items-center">
              <NuxtLink
                to="/projects/qompyl-case-study"
                class="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--ink-soft)] hover:text-[color:var(--accent-text)] transition-colors group"
              >
                <Icon
                  name="lucide:arrow-left"
                  class="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
                />
                Read Part I — the Investor-Ready Website
              </NuxtLink>

              <div
                class="inline-flex items-center gap-2 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase text-[color:var(--ink)]"
              >
                <span
                  class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse shadow-[0_0_0_4px_rgba(51,204,149,0.18)]"
                ></span>
                Case Study · Part II — Product
              </div>
                <!-- ✅ NEW: Early Access Pill -->
  <a
    href="https://qompyl.com/early-access"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase text-[color:var(--accent-text)] hover:bg-[color:var(--accent-1)]/20 hover:border-[color:var(--accent-1)]/50 transition-all group"
  >
    <span
      class="w-2 h-2 rounded-full bg-[color:var(--accent-1)] animate-pulse shadow-[0_0_0_4px_rgba(109,94,240,0.18)]"
    ></span>
    In beta · Request access
    <Icon
      name="lucide:arrow-up-right"
      class="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
    />
  </a>
            </div>

            <h1
              class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] text-[color:var(--ink)] leading-[1.05]"
            >
              Trader Beta in
              <br class="hidden md:block" />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]"
              >10 weeks.</span>
              One design system. Zero dev rebuilds.
            </h1>

            <p
              class="text-lg md:text-xl text-[color:var(--ink-soft)] max-w-3xl leading-relaxed"
            >
              Turned async founder feedback into a state-driven mobile system
              — every comment closed with a testable screen, every component
              documented before handoff. Receipts over promises, from kickoff
              to beta.
            </p>

            <div
              class="pt-8 flex flex-wrap gap-8 md:gap-16 text-sm border-t border-[color:var(--card-border)]"
            >
              <div class="flex flex-col gap-2">
                <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
                  Role
                </span>
                <span class="font-bold text-[color:var(--ink)]">
                  Product Designer — Mobile
                </span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
                  Stack
                </span>
                <span class="font-bold text-[color:var(--ink)]">
                  Figma · HTML Prototypes · Lucide Icons
                </span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
                  Timeline
                </span>
                <span class="font-bold text-[color:var(--ink)]">
                  10 weeks · 0 missed
                </span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
                  Impact
                </span>
                <span class="font-bold text-[color:var(--accent-1)]">
                  Beta-ready design system
                </span>
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
            <div class="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-8">
              TL;DR — The 10-Second Version
            </div>
            <div class="grid md:grid-cols-3 gap-8 relative z-10">
              <div data-aos="fade-up" data-aos-delay="50">
                <div class="font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2">
                  <Icon name="lucide:alert-triangle" class="w-5 h-5 text-amber-500" />
                  The challenge
                </div>
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  A feature-dense trading engine — strategy builder, token
                  economy, compliance gates — had to feel effortless on a phone,
                  with founders iterating async across time zones.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <div class="font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2">
                  <Icon name="lucide:compass" class="w-5 h-5 text-[color:var(--accent-1)]" />
                  The strategy
                </div>
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  Prototype-driven co-design. Every Figma comment answered with
                  a testable screen. State-first system. Monetization and
                  compliance treated as first-class UX — not legal afterthoughts.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="150">
                <div class="font-bold text-[color:var(--ink)] mb-3 flex items-center gap-2">
                  <Icon name="lucide:trending-up" class="w-5 h-5 text-[#33cc95]" />
                  The result
                </div>
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  Beta shipped in mid-August.
                  <strong class="text-[color:var(--ink)]">30+ screens and 60+ states</strong>
                  handed off — one source, ready to extend.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= 3. OVERVIEW ================= -->
        <section
          id="overview"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-12"
            data-aos="fade-up"
          >
            The brief, the baseline
          </h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] p-6 rounded-[24px] text-center hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div class="text-4xl font-black text-[color:var(--accent-1)] mb-2">30+</div>
              <div class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Screens & states shipped
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] p-6 rounded-[24px] text-center hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="text-4xl font-black text-[color:var(--accent-1)] mb-2">3</div>
              <div class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Founder themes, fully mapped
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] p-6 rounded-[24px] text-center hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div class="text-4xl font-black text-[color:var(--accent-1)] mb-2">5</div>
              <div class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Core journeys mapped
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] p-6 rounded-[24px] text-center hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="text-4xl font-black text-[#33cc95] mb-2">0</div>
              <div class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">
                Missed deadlines
              </div>
            </div>
          </div>

          <!-- Strategic Goal -->
          <div
            class="bg-[color:var(--input-bg)] rounded-[32px] p-8 md:p-10 border-l-4 border-l-[color:var(--accent-1)] mb-16"
            data-aos="fade-up"
          >
            <h3 class="text-xl font-bold text-[color:var(--ink)] mb-4 flex items-center gap-3">
              <Icon name="lucide:target" class="text-[color:var(--accent-text)] w-6 h-6" />
              The one metric that mattered
            </h3>
            <p class="text-base text-[color:var(--ink-soft)] leading-relaxed mb-4">
              Turn a feature-dense trading engine into a mobile experience
              traders trust — in time for beta. Not perfect.
              <strong class="text-[color:var(--ink)]">Beta-ready.</strong>
            </p>
            <p class="font-bold text-[color:var(--accent-text)]">
              States before pixels — because trust compounds when feedback is fast.
            </p>
          </div>

          <!-- Personas -->
          <div class="grid md:grid-cols-2 gap-8 mb-6" data-aos="fade-up">
            <div
              class="bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)] rounded-[32px] p-8 relative"
            >
              <div
                class="absolute -top-3 left-8 bg-[color:var(--accent-1)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              >
                Primary persona
              </div>
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-full bg-[color:var(--ink)] text-[color:var(--page-bg-1)] flex items-center justify-center font-bold text-lg"
                >
                  OT
                </div>
                <div>
                  <div class="font-bold text-lg text-[color:var(--ink)]">
                    The on-the-go trader
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    Self-directed · 25–40 · Monitors strategies from a phone
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div
                  class="bg-[color:var(--input-bg)] rounded-[16px] p-4 border border-[color:var(--card-border)]"
                >
                  <div class="text-xs font-bold text-[color:var(--accent-1)] mb-2">
                    Pain points
                  </div>
                  <ul class="text-xs text-[color:var(--ink-soft)] space-y-2">
                    <li>• Complex builders on small screens</li>
                    <li>• Hidden token costs until failure</li>
                    <li>• Fear of misconfiguring a live strategy</li>
                  </ul>
                </div>
                <div
                  class="bg-[color:var(--input-bg)] rounded-[16px] p-4 border border-[color:var(--card-border)]"
                >
                  <div class="text-xs font-bold text-[#33cc95] mb-2">Gains</div>
                  <ul class="text-xs text-[color:var(--ink-soft)] space-y-2">
                    <li>• Visible costs & states</li>
                    <li>• Thumb-friendly flows</li>
                    <li>• Confidence checks before running</li>
                  </ul>
                </div>
              </div>
              <div class="text-center text-sm font-medium text-[color:var(--ink-soft)] italic">
                "If I can't trust the screen, I won't trust the trade."
              </div>
            </div>

            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                class="absolute -top-3 left-8 bg-[color:var(--input-bg)] text-[color:var(--ink-soft)] border border-[color:var(--card-border)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              >
                Secondary persona
              </div>
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center font-bold text-lg"
                >
                  GL
                </div>
                <div>
                  <div class="font-bold text-lg text-[color:var(--ink)]">
                    The going-live trader
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    Paper → Live · Compliance-sensitive
                  </div>
                </div>
              </div>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6">
                Moving real money for the first time. Needs risk disclosure,
                2FA, and broker connection to feel like a guided checklist — not
                a legal maze. One confusing step, and they abandon the jump to
                live.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="bg-[color:var(--input-bg)] text-[color:var(--ink)] text-xs px-3 py-1.5 rounded-full font-semibold border border-[color:var(--card-border)]"
                >
                  Live execution
                </span>
                <span
                  class="bg-[color:var(--input-bg)] text-[color:var(--ink)] text-xs px-3 py-1.5 rounded-full font-semibold border border-[color:var(--card-border)]"
                >
                  Compliance-sensitive
                </span>
              </div>
            </div>
          </div>

          <!-- Two audiences callout -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[16px] p-5 text-sm text-[color:var(--ink-soft)] flex gap-3"
            data-aos="fade-up"
          >
            <Icon name="lucide:users" class="w-5 h-5 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5" />
            <span>
              <strong class="text-[color:var(--ink)]">Two journeys, one app:</strong>
              the on-the-go trader needs clarity, the going-live trader needs
              reassurance. This tension shaped every state — see
              <a
                href="#challenge"
                @click.prevent="scrollToSection('challenge')"
                class="text-[color:var(--accent-text)] font-semibold underline"
              >The Challenge</a>.
            </span>
          </div>
        </section>

        <!-- ================= 4. THE CLIENT ================= -->
        <section
          id="client"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            The client
          </h2>
          <div class="grid md:grid-cols-2 gap-8 mt-8">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8"
              data-aos="fade-up"
            >
              <div
                class="flex items-center gap-4 mb-8 pb-8 border-b border-[color:var(--card-border)]"
              >
                <div
                  class="w-12 h-12 rounded-xl bg-[color:var(--input-bg)] flex items-center justify-center"
                >
                  <Icon name="lucide:smartphone" class="w-6 h-6 text-[color:var(--ink)]" />
                </div>
                <div>
                  <div class="font-extrabold text-xl text-[color:var(--ink)]">
                    Qompyl App
                  </div>
                  <div class="text-sm font-semibold text-[color:var(--ink-soft)]">
                    Fintech · Automated trading · Mobile
                  </div>
                </div>
              </div>
              <div class="space-y-4 text-sm">
                <div class="flex justify-between items-center">
                  <span class="text-[color:var(--ink-soft)]">Stage</span>
                  <span
                    class="font-bold text-[color:var(--ink)] bg-[color:var(--input-bg)] px-3 py-1 rounded-full border border-[color:var(--card-border)]"
                  >
                    Pre-Series A · Beta push
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[color:var(--ink-soft)]">Team</span>
                  <span class="font-bold text-[color:var(--ink)]">4 founders + 12 members</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[color:var(--ink-soft)]">Location</span>
                  <span class="font-bold text-[color:var(--ink)]">Ohio, USA</span>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] rounded-[32px] p-8 text-white shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="flex items-center gap-3 mb-8">
                <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="lucide:target" class="w-5 h-5 text-white" />
                </div>
                <div class="font-bold text-lg">The cost of getting the app wrong</div>
              </div>
              <ul class="space-y-4 text-sm font-medium text-white/90">
                <li class="flex items-start gap-3">
                  <Icon name="lucide:arrow-right" class="w-4 h-4 mt-0.5 shrink-0" />
                  The website earned investor attention. The app has to keep
                  trader trust.
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:arrow-right" class="w-4 h-4 mt-0.5 shrink-0" />
                  Beta testers start mid-August — every screen must be dev-ready.
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:arrow-right" class="w-4 h-4 mt-0.5 shrink-0" />
                  Monetization and compliance live inside the UX, not outside it —
                  MSA + SOW prepared for procurement review.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- ================= 5. THE CHALLENGE ================= -->
        <section
          id="challenge"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[40px] p-8 md:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
            data-aos="zoom-in"
          >
            <div class="mb-12">
              <div class="text-[color:var(--accent-1)] font-bold mb-2 uppercase tracking-widest text-sm">
                01
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-[color:var(--ink)] mb-6">
                The challenge
              </h2>
              <div class="relative">
                <Icon
                  name="lucide:quote"
                  class="absolute -top-4 -left-6 text-[color:var(--card-border)] w-12 h-12 rotate-180 opacity-50"
                />
                <p
                  class="text-2xl md:text-3xl font-light leading-snug text-[color:var(--ink)] pl-4 italic relative z-10"
                >
                  "These may be hard to see and tap on mobile. I'd like to see a
                  version of this that is split into two screens."
                </p>
                <div class="mt-8 pl-4 flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center font-bold text-sm"
                  >
                    TC
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] block">
                      Tyler Charton
                    </span>
                    CEO & Founder, Qompyl
                  </div>
                </div>
              </div>
            </div>

            <div
              class="grid md:grid-cols-2 gap-12 mt-16 border-t border-[color:var(--card-border)] pt-12"
            >
              <div>
                <h3
                  class="text-xl font-bold text-[color:var(--accent-1)] mb-6 flex items-center gap-2"
                >
                  <Icon name="lucide:alert-triangle" class="w-5 h-5" /> Core pain points
                </h3>
                <ul class="space-y-4">
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5">01</span>
                    <span>
                      <strong class="text-[color:var(--ink)]">Complexity vs. small screen</strong>
                      — nested strategy conditions and multi-step flows squeezed
                      into six inches.
                    </span>
                  </li>
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5">02</span>
                    <span>
                      <strong class="text-[color:var(--ink)]">Monetization friction</strong>
                      — token costs were invisible until the moment of failure.
                    </span>
                  </li>
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5">03</span>
                    <span>
                      <strong class="text-[color:var(--ink)]">Compliance heaviness</strong>
                      — legal documents required for live execution, on mobile.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-[color:var(--accent-2)] mb-6 flex items-center gap-2"
                >
                  <Icon name="lucide:search" class="w-5 h-5" /> The market gap
                </h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed mb-6">
                  Most trading apps default to one of two failure modes:
                  oversimplified retail, or dense pro terminals.
                  <strong class="text-[color:var(--ink)]">
                    Neither survives first contact with a thumb.
                  </strong>
                </p>
                <p class="text-[color:var(--ink-soft)] opacity-70 text-sm">
                  That was the opening — state-driven clarity on a small screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 6. PROCESS + 10-WEEK CLOCK ================= -->
        <section
          id="process"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            The 10-week sprint
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-12" data-aos="fade-up">
            Five stages, 50 working days, zero missed checkpoints.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div
              class="p-6 bg-[color:var(--card-bg)] rounded-[24px] border border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] transition-colors group"
              data-aos="fade-up"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] flex items-center justify-center text-[color:var(--ink)] mb-4 group-hover:text-[color:var(--accent-1)]"
              >
                <Icon name="lucide:search" class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Feedback mining
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Every founder note logged, sorted into 3 themes. Founder
                interviews transcribed. 1 week.
              </p>
            </div>
            <div
              class="p-6 bg-[color:var(--card-bg)] rounded-[24px] border border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] transition-colors group"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] flex items-center justify-center text-[color:var(--ink)] mb-4 group-hover:text-[color:var(--accent-1)]"
              >
                <Icon name="lucide:layout-template" class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Flows & wireframes
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Low-fi and mid-fi for Settings, Strategy Builder, and Legal
                journeys. 2 weeks.
              </p>
            </div>
            <div
              class="p-6 bg-[color:var(--card-bg)] rounded-[24px] border border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] transition-colors group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] flex items-center justify-center text-[color:var(--ink)] mb-4 group-hover:text-[color:var(--accent-1)]"
              >
                <Icon name="lucide:palette" class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-[color:var(--ink)] mb-2">
                High-fi + states
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Dark-theme system; every component ships with
                empty/ready/insufficient states. 3 weeks.
              </p>
            </div>
            <div
              class="p-6 bg-[color:var(--card-bg)] rounded-[24px] border border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] transition-colors group"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] flex items-center justify-center text-[color:var(--ink)] mb-4 group-hover:text-[color:var(--accent-1)]"
              >
                <Icon name="lucide:settings" class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Prototype validation
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Interactive HTML prototypes as the shared language. Comment →
                redesign → confirm loops. 2 weeks.
              </p>
            </div>
            <div
              class="p-6 bg-[color:var(--card-bg)] rounded-[24px] border border-[color:var(--card-border)] hover:border-[color:var(--accent-1)] transition-colors group lg:col-span-1 md:col-span-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] flex items-center justify-center text-[color:var(--ink)] mb-4 group-hover:text-[color:var(--accent-1)]"
              >
                <Icon name="lucide:bar-chart" class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Handoff & beta prep
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Dev-ready specs, Portfolio screens, beta QA support. Ongoing.
              </p>
            </div>
          </div>

          <!-- 10-Week Clock -->
          <div
            class="mt-12 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10"
            data-aos="fade-up"
          >
            <div
              class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-8"
            >
              How the 50 days broke down
            </div>
            <div class="grid md:grid-cols-4 gap-6">
              <div class="relative pl-6 border-l-2 border-[color:var(--accent-1)]">
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[color:var(--accent-1)] text-white text-[10px] font-bold flex items-center justify-center"
                >
                  1
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Weeks 1–2</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Feedback mining, founder interviews, flows, wireframes.
                </p>
              </div>
              <div class="relative pl-6 border-l-2 border-[color:var(--card-border)]">
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[color:var(--card-border)] text-[color:var(--ink-soft)] text-[10px] font-bold flex items-center justify-center"
                >
                  2
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Weeks 3–5</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  High-fidelity system — Settings suite, Legal trio, state
                  documentation.
                </p>
              </div>
              <div class="relative pl-6 border-l-2 border-[color:var(--card-border)]">
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[color:var(--card-border)] text-[color:var(--ink-soft)] text-[10px] font-bold flex items-center justify-center"
                >
                  3
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Weeks 6–8</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Prototype loops — notifications, modals, editable conditions,
                  token states.
                </p>
              </div>
              <div class="relative pl-6 border-l-2 border-[#33cc95]">
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#33cc95] text-white text-[10px] font-bold flex items-center justify-center"
                >
                  4
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Weeks 9–10</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Strategy Builder states + Portfolio screens kickoff for beta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 7. INSIGHTS ================= -->
        <section
          id="insights"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <!-- ═══ Badge — Process integrity signal ═══ -->
          <div class="flex justify-start mb-6" data-aos="fade-up">
            <span
              class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[color:var(--accent-text)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/20 rounded-full px-4 py-2"
            >
              <Icon name="lucide:check-circle-2" class="w-3.5 h-3.5" />
              Logged · Answered · Closed
            </span>
          </div>

          <!-- ═══ Heading ═══ -->
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            Three founder pushes that shaped the risk system
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12 max-w-3xl"
            data-aos="fade-up"
          >
            The client kept returning to the same theme — risk wasn't a setting
            to toggle, it was a conversation to design. Three of these pushes
            became the framework that shaped every trader-facing screen.
          </p>

          <!-- ═══ Cards ═══ -->
          <div class="grid md:grid-cols-3 gap-6">
            <!-- ═══ Card 1 — Risk is a language ═══ -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)]">
                  Pillar 01
                </span>
                <Icon name="lucide:quote" class="text-[color:var(--accent-1)] w-6 h-6" />
              </div>
              <h4 class="text-sm font-bold text-[color:var(--ink)] mb-3">
                Risk as language
              </h4>
              <p class="italic text-base text-[color:var(--ink)] mb-6 flex-grow leading-relaxed">
                "The circle gauge should change colors based on risk setting.
                0%–3% = blue, >3%–5% = amber, >5%–10% = red. If a user sets
                risk over 5%, show a warning."
              </p>
              <div class="pt-4 border-t border-[color:var(--card-border)]">
                <p class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1">
                  Insight
                </p>
                <p class="text-sm text-[color:var(--ink-soft)] font-medium mb-3">
                  Risk needs a visual vocabulary the trader reads at a glance —
                  before committing, not after.
                </p>
                <p class="text-xs font-semibold text-[#33cc95] flex items-center gap-1.5">
                  <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
                  Action: color-coded risk gauge + inline warning at >5%, plus
                  a custom numeric input — no modal.
                </p>
              </div>
            </div>

            <!-- ═══ Card 2 — Cost before failure ═══ -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)]">
                  Pillar 02
                </span>
                <Icon name="lucide:quote" class="text-[color:var(--accent-1)] w-6 h-6" />
              </div>
              <h4 class="text-sm font-bold text-[color:var(--ink)] mb-3">
                Cost before failure
              </h4>
              <p class="italic text-base text-[color:var(--ink)] mb-6 flex-grow leading-relaxed">
                "Show the user's existing tokens. If they don't have enough, a
                'Get Tokens' button that directs them to the store. Add both:
                ≈ 12 backtests OR ≈ 4 weeks of running a standard strategy."
              </p>
              <div class="pt-4 border-t border-[color:var(--card-border)]">
                <p class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1">
                  Insight
                </p>
                <p class="text-sm text-[color:var(--ink-soft)] font-medium mb-3">
                  Monetization friction lives at the decision point — not after
                  the user clicks Run and hits a wall.
                </p>
                <p class="text-xs font-semibold text-[#33cc95] flex items-center gap-1.5">
                  <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
                  Action: token balance + shortfall warning + Get Tokens CTA
                  inside the order box, with cost shown in both units.
                </p>
              </div>
            </div>

            <!-- ═══ Card 3 — Prevent, don't correct ═══ -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)]">
                  Pillar 03
                </span>
                <Icon name="lucide:quote" class="text-[color:var(--accent-1)] w-6 h-6" />
              </div>
              <h4 class="text-sm font-bold text-[color:var(--ink)] mb-3">
                Prevent, don't correct
              </h4>
              <p class="italic text-base text-[color:var(--ink)] mb-6 flex-grow leading-relaxed">
                "Can I see what a small warning indicator for incomplete tabs
                would look like? Like a caution symbol? We'll use these Success
                Screens at different areas — Setup Complete, Backtest Started,
                Strategy Deployed."
              </p>
              <div class="pt-4 border-t border-[color:var(--card-border)]">
                <p class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1">
                  Insight
                </p>
                <p class="text-sm text-[color:var(--ink-soft)] font-medium mb-3">
                  Multi-step builders need progress awareness — errors caught
                  after "Run" cost real money.
                </p>
                <p class="text-xs font-semibold text-[#33cc95] flex items-center gap-1.5">
                  <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
                  Action: tab completion indicators + run-strategy guard +
                  reusable success-state screens for every milestone.
                </p>
              </div>
            </div>
          </div>

          <!-- ═══ Note — Process integrity footer ═══ -->
          <p
            class="text-xs text-[color:var(--ink-soft)] opacity-70 mt-10 text-center max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
          >
            A representative sample from the founder's Figma notes. Every
            comment showed product-level care — each one logged, answered, and
            closed. These three just make the pattern visible.
          </p>
        </section>

        <!-- ================= 8. STRATEGY ================= -->
        <section
          id="strategy"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            The strategy
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12 max-w-3xl"
            data-aos="fade-up"
          >
            State-driven, thumb-first, compliance-aware — designed around how
            founders actually review work. Every component ships with three
            states documented before development starts.
          </p>

          <!-- ═══ TOP: The 3 Order Box States ═══ -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
            <!-- State 01 — Ready -->
            <div class="flex flex-col gap-3">
              <div
                class="relative bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-4 overflow-hidden hover:border-[#33cc95] transition-colors group"
              >
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#33cc95]"
                  >
                    <span class="w-2 h-2 rounded-full bg-[#33cc95]"></span>
                    01 — Ready
                  </span>
                  <span class="font-mono text-[10px] text-[color:var(--ink-soft)] opacity-60">
                    state/ready
                  </span>
                </div>
                <div class="rounded-[16px] overflow-hidden bg-[color:var(--input-bg)]">
                  <NuxtImg
                    src="/images/qompyl-app/Ready-Sufficient-Tokens(Green).png"
                    alt="Order box — ready state with sufficient balance"
                    class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="sm:100vw md:33vw lg:340px"
                    format="webp"
                    quality="85"
                  />
                </div>
              </div>
              <p class="text-xs text-[color:var(--ink-soft)] text-center leading-relaxed">
                All conditions valid, balance sufficient. Run is unlocked.
              </p>
            </div>

            <!-- State 02 — Empty -->
            <div class="flex flex-col gap-3">
              <div
                class="relative bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-4 overflow-hidden hover:border-[color:var(--accent-1)] transition-colors group"
              >
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
                  >
                    <span class="w-2 h-2 rounded-full bg-[color:var(--accent-1)]"></span>
                    02 — Empty
                  </span>
                  <span class="font-mono text-[10px] text-[color:var(--ink-soft)] opacity-60">
                    state/empty
                  </span>
                </div>
                <div class="rounded-[16px] overflow-hidden bg-[color:var(--input-bg)]">
                  <NuxtImg
                    src="/images/qompyl-app/Empty-Incomplete-(Pink).png"
                    alt="Order box — empty state, no conditions yet"
                    class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="sm:100vw md:33vw lg:340px"
                    format="webp"
                    quality="85"
                  />
                </div>
              </div>
              <p class="text-xs text-[color:var(--ink-soft)] text-center leading-relaxed">
                No conditions, no symbols. The screen teaches instead of blocking.
              </p>
            </div>

            <!-- State 03 — Insufficient -->
            <div class="flex flex-col gap-3">
              <div
                class="relative bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-4 overflow-hidden hover:border-amber-500 transition-colors group"
              >
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-500"
                  >
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    03 — Insufficient
                  </span>
                  <span class="font-mono text-[10px] text-[color:var(--ink-soft)] opacity-60">
                    state/insufficient
                  </span>
                </div>
                <div class="rounded-[16px] overflow-hidden bg-[color:var(--input-bg)]">
                  <NuxtImg
                    src="/images/qompyl-app/Ready-Insufficient-Tokens-(Amber).png"
                    alt="Order box — insufficient state with token shortfall warning"
                    class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="sm:100vw md:33vw lg:340px"
                    format="webp"
                    quality="85"
                  />
                </div>
              </div>
              <p class="text-xs text-[color:var(--ink-soft)] text-center leading-relaxed">
                Token shortfall is surfaced before Run — not after failure.
              </p>
            </div>
          </div>

          <!-- ═══ MIDDLE: 3 Design Principles ═══ -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
            <!-- Principle 01 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 hover:border-[color:var(--accent-1)] transition-colors"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:layers" class="w-5 h-5" />
              </div>
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                State-driven design
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                The order box ships in three states — empty, ready,
                insufficient. Nothing ambiguous reaches development.
              </p>
            </div>

            <!-- Principle 02 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 hover:border-[color:var(--accent-1)] transition-colors"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:smartphone" class="w-5 h-5" />
              </div>
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Thumb ergonomics
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Bottom sheets and segmented controls reduce tap targets. Every
                toggle has a readable label — no icon-only switches.
              </p>
            </div>

            <!-- Principle 03 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 hover:border-[color:var(--accent-1)] transition-colors"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:shield-check" class="w-5 h-5" />
              </div>
              <h4 class="text-base font-bold text-[color:var(--ink)] mb-2">
                Compliance as a journey
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Risk disclosure becomes a guided acceptance flow — checkbox,
                disabled CTA until read, download always available.
              </p>
            </div>
          </div>

          <!-- ═══ BOTTOM: Why three states ═══ -->
          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8"
            data-aos="fade-up"
          >
            <h5 class="text-sm font-bold text-[color:var(--ink)] mb-5 uppercase tracking-wider">
              Why three states, not one
            </h5>
            <ul class="grid md:grid-cols-3 gap-4 md:gap-6">
              <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                Founders review testable prototypes — not static frames.
              </li>
              <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                Monetization sits at the decision point, never as a dark pattern.
              </li>
              <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                Every legal gate is friction-aware by design.
              </li>
            </ul>
          </div>
        </section>

        <!-- ================= 9. BUILT TO SCALE ================= -->
        <section
          id="scale"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            Built to scale
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-8" data-aos="fade-up">
            Not screens — a system the team can extend through beta and beyond,
            without me in the room.
          </p>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-5 hover:shadow-md transition-shadow"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:layers" class="w-5 h-5" />
              </div>
              <h4 class="font-bold text-[color:var(--ink)] mb-1 text-sm">
                Design tokens
              </h4>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Web → App colour, type, spacing. One brand across every surface.
              </p>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-5 hover:shadow-md transition-shadow"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:boxes" class="w-5 h-5" />
              </div>
              <h4 class="font-bold text-[color:var(--ink)] mb-1 text-sm">
                Components
              </h4>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Modals, bottom sheets, PUSH/EMAIL chips — versioned, never
                rebuilt twice.
              </p>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-5 hover:shadow-md transition-shadow"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:file-code" class="w-5 h-5" />
              </div>
              <h4 class="font-bold text-[color:var(--ink)] mb-1 text-sm">
                Testable prototypes
              </h4>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Interactive references developers can open — not guess from
                static frames.
              </p>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-5 hover:shadow-md transition-shadow"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:check-square" class="w-5 h-5" />
              </div>
              <h4 class="font-bold text-[color:var(--ink)] mb-1 text-sm">
                Tracker
              </h4>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Every Figma comment logged, answered, and closed. 100%
                accountability.
              </p>
            </div>
          </div>
        </section>

        <!-- ================= 10. THE SYSTEM UNDER THE SCREENS ================= -->
        <section
          id="system"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            The tokens that outlived the screens
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-12 max-w-3xl" data-aos="fade-up">
            Not a Figma file. A three-layer token architecture that scales
            across Web and App. The reason no developer had to rebuild a single
            component at handoff.
          </p>

          <div class="grid md:grid-cols-3 gap-6" data-aos="fade-up">
            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 hover:border-[color:var(--accent-1)] transition-colors">
              <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-3">
                Layer 01 · Foundation
              </div>
              <h4 class="text-lg font-bold text-[color:var(--ink)] mb-4">
                Token architecture
              </h4>
              <ul class="space-y-2 text-sm text-[color:var(--ink-soft)]">
                <li>• 7 color families × 8 levels</li>
                <li>• Multi-mode (Light + Dark)</li>
                <li>• Alias-based (primitive → semantic → component)</li>
              </ul>
            </div>

            <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 hover:border-[color:var(--accent-1)] transition-colors">
              <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-3">
                Layer 02 · Typography
              </div>
              <h4 class="text-lg font-bold text-[color:var(--ink)] mb-4">
                Manrope · Inter
              </h4>
              <ul class="space-y-2 text-sm text-[color:var(--ink-soft)]">
                <li>• 12 font sizes (Title → Caption)</li>
                <li>• 9 weights available</li>
                <li>• Optimized for mobile readability</li>
              </ul>
            </div>

            <div class="bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)] rounded-[24px] p-6">
              <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-3">
                Layer 03 · Components
              </div>
              <h4 class="text-lg font-bold text-[color:var(--ink)] mb-4">
                One system, 54 variants
              </h4>
              <ul class="space-y-2 text-sm text-[color:var(--ink-soft)]">
                <li>• 6 button styles × 3 sizes × 3 states</li>
                <li>• Every state documented (empty/ready/insufficient)</li>
                <li>• Dev-ready: zero rework on handoff</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- ================= 11. DESIGN GALLERY ================= -->
        <section
          id="gallery"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            From flow sketch to beta-ready
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-12" data-aos="fade-up">
            A state-driven, dev-ready mobile system — built async, shipped on
            time.
          </p>

          <!-- ─── A. Edge States — The Filmstrip ─── -->
          <div class="mb-14" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-[color:var(--ink)]">
                Beyond the happy path
              </h3>
              <span
                class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
              >
                Edge States
              </span>
            </div>
            <p class="text-sm text-[color:var(--ink-soft)] mb-12 max-w-2xl">
              Every failure, empty, and offline state — designed with the same care as
              the primary flow. Most portfolios skip these. The user doesn't.
            </p>

            <div class="relative hidden md:block">
              <div
                class="absolute top-[4px] left-0 right-0 h-px pointer-events-none"
                style="background: linear-gradient(to right, transparent, var(--card-border) 5%, var(--card-border) 85%, transparent);"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-end justify-start gap-10 lg:gap-14 pt-6">
                <!-- Frame 01 — Empty State -->
                <div class="flex flex-col group flex-1 max-w-[220px]">
                  <div class="flex items-center gap-3 mb-4">
                    <span
                      class="relative w-[9px] h-[9px] rounded-full bg-[color:var(--accent-1)] ring-[6px] ring-[color:var(--page-bg-1)] shrink-0"
                    >
                      <span class="absolute inset-0 rounded-full bg-[color:var(--accent-1)] animate-ping opacity-40"></span>
                    </span>
                    <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                      01 / Empty
                    </span>
                  </div>

                  <div class="flex flex-col gap-1.5 mb-6">
                    <span class="text-sm font-bold text-[color:var(--ink)] leading-tight">
                      No dead ends
                    </span>
                    <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                      New trader lands on an empty portfolio. The screen teaches instead of blocking.
                    </p>
                  </div>

                  <div class="relative flex-1 flex items-end justify-center">
                    <div
                      class="relative transition-all duration-700 ease-out group-hover:-translate-y-2"
                      style="filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.18)); transform: rotate(-1deg);"
                    >
                      <NuxtImg
                        src="/images/qompyl-app/state-empty-portfolio.png"
                        alt="Empty portfolio — no trading data yet"
                        class="h-[400px] lg:h-[440px] w-auto object-contain"
                        format="webp"
                        quality="90"
                      />
                    </div>
                  </div>
                </div>

                <!-- Frame 02 — Error State -->
                <div class="flex flex-col group flex-1 max-w-[220px]">
                  <div class="flex items-center gap-3 mb-4">
                    <span
                      class="relative w-[9px] h-[9px] rounded-full bg-rose-500 ring-[6px] ring-[color:var(--page-bg-1)] shrink-0"
                    >
                      <span class="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-40"></span>
                    </span>
                    <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-rose-500">
                      02 / Error
                    </span>
                  </div>

                  <div class="flex flex-col gap-1.5 mb-6">
                    <span class="text-sm font-bold text-[color:var(--ink)] leading-tight">
                      Context, not panic
                    </span>
                    <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                      A 500 error with <strong class="text-[color:var(--ink)]">error code, reference, and timestamp</strong>.
                    </p>
                  </div>

                  <div class="relative flex-1 flex items-end justify-center">
                    <div
                      class="relative transition-all duration-700 ease-out group-hover:-translate-y-2"
                      style="filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.18));"
                    >
                      <NuxtImg
                        src="/images/qompyl-app/state-error-diagnostic.png"
                        alt="Error state — something went wrong with diagnostic data"
                        class="h-[400px] lg:h-[440px] w-auto object-contain"
                        format="webp"
                        quality="90"
                      />
                    </div>
                  </div>
                </div>

                <!-- Frame 03 — Offline State -->
                <div class="flex flex-col group flex-1 max-w-[220px]">
                  <div class="flex items-center gap-3 mb-4">
                    <span
                      class="relative w-[9px] h-[9px] rounded-full bg-amber-500 ring-[6px] ring-[color:var(--page-bg-1)] shrink-0"
                    >
                      <span class="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-40"></span>
                    </span>
                    <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-amber-500">
                      03 / System
                    </span>
                  </div>

                  <div class="flex flex-col gap-1.5 mb-6">
                    <span class="text-sm font-bold text-[color:var(--ink)] leading-tight">
                      Know what to fix
                    </span>
                    <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                      Offline shows <strong class="text-[color:var(--ink)]">Wi-Fi, cellular, and last sync</strong>.
                    </p>
                  </div>

                  <div class="relative flex-1 flex items-end justify-center">
                    <div
                      class="relative transition-all duration-700 ease-out group-hover:-translate-y-2"
                      style="filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.18)); transform: rotate(1deg);"
                    >
                      <NuxtImg
                        src="/images/qompyl-app/state-offline-status.png"
                        alt="Offline state — Wi-Fi and cellular diagnostics"
                        class="h-[400px] lg:h-[440px] w-auto object-contain"
                        format="webp"
                        quality="90"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="mt-6 h-px"
                style="background: linear-gradient(to right, transparent, var(--card-border) 5%, var(--card-border) 55%, transparent);"
                aria-hidden="true"
              ></div>
            </div>

            <!-- Mobile -->
            <div class="md:hidden flex flex-col gap-10">
              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-[color:var(--accent-1)]"></span>
                  <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                    01 / Empty
                  </span>
                </div>
                <span class="text-sm font-bold text-[color:var(--ink)]">No dead ends</span>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  New trader lands on an empty portfolio. The screen teaches instead of blocking.
                </p>
                <div class="flex justify-center mt-3">
                  <NuxtImg
                    src="/images/qompyl-app/state-empty-portfolio.png"
                    alt="Empty portfolio — no trading data yet"
                    class="max-h-[440px] w-auto object-contain drop-shadow-xl"
                    format="webp"
                    quality="90"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-rose-500">
                    02 / Error
                  </span>
                </div>
                <span class="text-sm font-bold text-[color:var(--ink)]">Context, not panic</span>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  A 500 error with <strong class="text-[color:var(--ink)]">error code, reference, and timestamp</strong>.
                </p>
                <div class="flex justify-center mt-3">
                  <NuxtImg
                    src="/images/qompyl-app/state-error-diagnostic.png"
                    alt="Error state — something went wrong with diagnostic data"
                    class="max-h-[440px] w-auto object-contain drop-shadow-xl"
                    format="webp"
                    quality="90"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-amber-500">
                    03 / System
                  </span>
                </div>
                <span class="text-sm font-bold text-[color:var(--ink)]">Know what to fix</span>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Offline shows <strong class="text-[color:var(--ink)]">Wi-Fi, cellular, and last sync</strong>.
                </p>
                <div class="flex justify-center mt-3">
                  <NuxtImg
                    src="/images/qompyl-app/state-offline-status.png"
                    alt="Offline state — Wi-Fi and cellular diagnostics"
                    class="max-h-[440px] w-auto object-contain drop-shadow-xl"
                    format="webp"
                    quality="90"
                  />
                </div>
              </div>
            </div>

            <p
              class="text-xs text-[color:var(--ink-soft)] opacity-70 mt-10 max-w-2xl mx-auto leading-relaxed text-center"
            >
              Three of 60+ states documented before development — empty, ready,
              insufficient, error, offline, loading, disabled, expired. Every one designed,
              every one shipped.
            </p>
          </div>

          <!-- ─── B. Design System ─── -->
          <div class="mb-14" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-[color:var(--ink)]">
                Design system
              </h3>
              <span
                class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
              >
                Foundation
              </span>
            </div>
            <p class="text-sm text-[color:var(--ink-soft)] mb-6">
              The visual language unifying the project — colour, type,
              components, accessibility.
            </p>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                class="aspect-[16/9] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2"
              >
                <NuxtImg
                  src="/images/qompyl-app/system-button-matrix.png"
                  alt="Button matrix — 6 styles × 3 sizes × 3 states"
                  class="w-full h-full object-cover rounded-2xl"
                  sizes="sm:100vw md:50vw lg:600px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[16/9] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2"
              >
                <NuxtImg
                  src="/images/qompyl-app/system-tokens.png"
                  alt="Color tokens — multi-mode architecture"
                  class="w-full h-full object-cover rounded-2xl"
                  sizes="sm:100vw md:50vw lg:600px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[16/9] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2"
              >
                <NuxtImg
                  src="/images/qompyl-app/system-components.png"
                  alt="Component library — modals, chips, toggles"
                  class="w-full h-full object-cover rounded-2xl"
                  sizes="sm:100vw md:50vw lg:600px"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
          </div>

          <!-- ─── C. High-Fidelity UI — Filmstrip ─── -->
          <div class="mb-14" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-[color:var(--ink)]">
                High-fidelity UI
              </h3>
              <span
                class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
              >
                Final design
              </span>
            </div>
            <p class="text-sm text-[color:var(--ink-soft)] mb-12 max-w-2xl">
              30+ screens shipped to development — premium dark fintech aesthetic, fully responsive.
            </p>

            <div class="relative hidden md:block">
              <div
                class="absolute top-[4px] left-0 right-0 h-px pointer-events-none"
                style="background: linear-gradient(to right, transparent, var(--card-border) 5%, var(--card-border) 85%, transparent);"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-end justify-start gap-10 lg:gap-14 pt-6">
                <!-- Frame 01 — Home Dashboard -->
                <div class="flex flex-col group flex-1 max-w-[220px]">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="relative w-[9px] h-[9px] rounded-full bg-[color:var(--accent-1)] ring-[6px] ring-[color:var(--page-bg-1)] shrink-0">
                      <span class="absolute inset-0 rounded-full bg-[color:var(--accent-1)] animate-ping opacity-40"></span>
                    </span>
                    <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                      01 / Home
                    </span>
                  </div>

                  <div class="flex flex-col gap-1.5 mb-6">
                    <span class="text-sm font-bold text-[color:var(--ink)] leading-tight">
                      Balance at a glance
                    </span>
                    <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                      Chart, P&L, and live strategies in one view.
                    </p>
                  </div>

                  <div class="relative flex-1 flex items-end justify-center">
                    <div
                      class="relative transition-all duration-700 ease-out group-hover:-translate-y-2"
                      style="filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.18)); transform: rotate(-1deg);"
                    >
                      <NuxtImg
                        src="/images/qompyl-app/hifi-home-dashboard.png"
                        alt="Home dashboard — balance, chart, active strategies"
                        class="h-[440px] w-auto object-contain"
                        format="webp"
                        quality="90"
                      />
                    </div>
                  </div>
                </div>

                <!-- Frame 02 — Strategy Builder -->
                <div class="flex flex-col group flex-1 max-w-[220px]">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="relative w-[9px] h-[9px] rounded-full bg-[color:var(--accent-1)] ring-[6px] ring-[color:var(--page-bg-1)] shrink-0">
                      <span class="absolute inset-0 rounded-full bg-[color:var(--accent-1)] animate-ping opacity-40"></span>
                    </span>
                    <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                      02 / Builder
                    </span>
                  </div>

                  <div class="flex flex-col gap-1.5 mb-6">
                    <span class="text-sm font-bold text-[color:var(--ink)] leading-tight">
                      No-code visual logic
                    </span>
                    <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                      Complex trading rules — built with drag, not code.
                    </p>
                  </div>

                  <div class="relative flex-1 flex items-end justify-center">
                    <div
                      class="relative transition-all duration-700 ease-out group-hover:-translate-y-2"
                      style="filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.18));"
                    >
                      <NuxtImg
                        src="/images/qompyl-app/hifi-strategy-builder-phone.png"
                        alt="Strategy builder — node-based visual flow"
                        class="h-[440px] w-auto object-contain"
                        format="webp"
                        quality="90"
                      />
                    </div>
                  </div>
                </div>

                <!-- Frame 03 — Backtest Results -->
                <div class="flex flex-col group flex-1 max-w-[220px]">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="relative w-[9px] h-[9px] rounded-full bg-[color:var(--accent-1)] ring-[6px] ring-[color:var(--page-bg-1)] shrink-0">
                      <span class="absolute inset-0 rounded-full bg-[color:var(--accent-1)] animate-ping opacity-40"></span>
                    </span>
                    <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                      03 / Analytics
                    </span>
                  </div>

                  <div class="flex flex-col gap-1.5 mb-6">
                    <span class="text-sm font-bold text-[color:var(--ink)] leading-tight">
                      Receipts, not promises
                    </span>
                    <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                      Expectancy, drawdown, and trending insights.
                    </p>
                  </div>

                  <div class="relative flex-1 flex items-end justify-center">
                    <div
                      class="relative transition-all duration-700 ease-out group-hover:-translate-y-2"
                      style="filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.18)); transform: rotate(1deg);"
                    >
                      <NuxtImg
                        src="/images/qompyl-app/hifi-backtest-phone.png"
                        alt="Backtest results — analytics with reliability score"
                        class="h-[440px] w-auto object-contain"
                        format="webp"
                        quality="90"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="mt-6 h-px"
                style="background: linear-gradient(to right, transparent, var(--card-border) 5%, var(--card-border) 55%, transparent);"
                aria-hidden="true"
              ></div>
            </div>

            <!-- Mobile -->
            <div class="md:hidden flex flex-col gap-10">
              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-[color:var(--accent-1)]"></span>
                  <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                    01 / Home
                  </span>
                </div>
                <span class="text-sm font-bold text-[color:var(--ink)]">Balance at a glance</span>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Chart, P&L, and live strategies in one view.
                </p>
                <div class="flex justify-center mt-3">
                  <NuxtImg
                    src="/images/qompyl-app/hifi-home-dashboard.png"
                    alt="Home dashboard"
                    class="max-h-[440px] w-auto object-contain drop-shadow-xl"
                    format="webp"
                    quality="90"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-[color:var(--accent-1)]"></span>
                  <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                    02 / Builder
                  </span>
                </div>
                <span class="text-sm font-bold text-[color:var(--ink)]">No-code visual logic</span>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Complex trading rules — built with drag, not code.
                </p>
                <div class="flex justify-center mt-3">
                  <NuxtImg
                    src="/images/qompyl-app/hifi-strategy-builder-phone.png"
                    alt="Strategy builder"
                    class="max-h-[440px] w-auto object-contain drop-shadow-xl"
                    format="webp"
                    quality="90"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-[color:var(--accent-1)]"></span>
                  <span class="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-[color:var(--accent-text)]">
                    03 / Analytics
                  </span>
                </div>
                <span class="text-sm font-bold text-[color:var(--ink)]">Receipts, not promises</span>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Expectancy, drawdown, and trending insights.
                </p>
                <div class="flex justify-center mt-3">
                  <NuxtImg
                    src="/images/qompyl-app/hifi-backtest-phone.png"
                    alt="Backtest results"
                    class="max-h-[440px] w-auto object-contain drop-shadow-xl"
                    format="webp"
                    quality="90"
                  />
                </div>
              </div>
            </div>

            <p class="text-xs text-[color:var(--ink-soft)] opacity-60 mt-10 max-w-2xl mx-auto leading-relaxed text-center">
              Three of 30+ screens — from the trader's dashboard to the decision-making layer.
            </p>
          </div>
        </section>

        <!-- ================= 12. BETA METRICS ================= -->
        <section
          id="metrics"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            Beta-readiness receipts
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-12 max-w-3xl" data-aos="fade-up">
            States before pixels — 60+ documented across the system, zero
            component redesigns after handoff. The system held.
          </p>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-aos="fade-up">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center"
            >
              <div class="text-4xl font-black text-[color:var(--ink)] mb-1 tabular-nums">Every</div>
              <div class="text-xs font-bold text-[color:var(--ink-soft)]">
                Figma comment logged, answered, closed
                <span class="text-[#33cc95] block mt-0.5">— zero left open</span>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center"
            >
              <div class="text-4xl font-black text-[color:var(--ink)] mb-1">54</div>
              <div class="text-xs font-bold text-[color:var(--ink-soft)]">
                Component variants delivered
                <span class="text-[#33cc95] block mt-0.5">— one source, ready to extend</span>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center"
            >
              <div class="text-4xl font-black text-[color:var(--ink)] mb-1">60+</div>
              <div class="text-xs font-bold text-[color:var(--ink-soft)]">
                States documented across the system
                <span class="text-[color:var(--ink)] block mt-0.5">
                  (empty/ready/insufficient)
                </span>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)] rounded-[24px] p-6 text-center relative"
            >
              <div
                class="absolute -top-2.5 left-6 bg-[color:var(--accent-1)] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
              >
                Outcome
              </div>
              <div class="text-4xl font-black text-[color:var(--ink)] mb-1 tabular-nums">
                0
              </div>
              <div class="text-xs font-bold text-[color:var(--ink-soft)]">
                Component redesigns requested
                <span class="text-[#33cc95] block mt-0.5">— the token system held</span>
              </div>
            </div>
          </div>

          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10"
            data-aos="fade-up"
          >
            <div
              class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-4 flex items-center gap-2"
            >
              <Icon name="lucide:video" class="w-4 h-4 text-[color:var(--accent-1)]" />
              Caught in prototype testing
            </div>
            <p
              class="text-lg md:text-xl font-medium leading-relaxed text-[color:var(--ink)] mb-6 max-w-3xl"
            >
              The founder flagged in review that the editable parts of a
              strategy sentence read as labels — not controls. Blue chips looked static.
            </p>
            <div class="flex flex-wrap gap-3 text-sm">
              <span
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-4 py-2 text-[color:var(--ink-soft)] flex items-center gap-2"
              >
                <Icon name="lucide:search" class="w-4 h-4" />
                Flagged in founder review
              </span>
              <span
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-4 py-2 text-[color:var(--ink-soft)] flex items-center gap-2"
              >
                <Icon name="lucide:wrench" class="w-4 h-4" />
                Underline affordance added within 24h
              </span>
              <span
                class="bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/20 rounded-full px-4 py-2 text-[color:var(--accent-text)] font-semibold flex items-center gap-2"
              >
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
                Design decisions now start with testable prototypes.
              </span>
            </div>
          </div>
        </section>

        <!-- ================= 13. RESULTS ================= -->
        <section
          id="results"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            Impact & results
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-12" data-aos="fade-up">
            What actually shipped — three outcomes the founder cares about,
            not three process metrics.
          </p>
          <div class="grid md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6"
            >
              <div
                class="w-10 h-10 rounded-full bg-[color:var(--input-bg)] text-[#33cc95] flex items-center justify-center font-bold mb-4"
              >
                <Icon name="lucide:check" class="w-5 h-5" />
              </div>
              <div class="text-4xl font-black tracking-tight text-[color:var(--ink)] mb-2">
                30+
              </div>
              <div class="text-sm text-[color:var(--ink-soft)]">
                Screens documented and shipped to production — from 1 base
                design system.
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6"
            >
              <div
                class="w-10 h-10 rounded-full bg-[color:var(--input-bg)] text-[#33cc95] flex items-center justify-center font-bold mb-4"
              >
                <Icon name="lucide:zap" class="w-5 h-5" />
              </div>
              <div class="text-4xl font-black tracking-tight text-[color:var(--ink)] mb-2">
                0
              </div>
              <div class="text-sm text-[color:var(--ink-soft)]">
                Component redesigns requested — the token architecture held
                end-to-end.
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6"
            >
              <div
                class="w-10 h-10 rounded-full bg-[color:var(--input-bg)] text-[#33cc95] flex items-center justify-center font-bold mb-4"
              >
                <Icon name="lucide:refresh-cw" class="w-5 h-5" />
              </div>
              <div class="text-4xl font-black tracking-tight text-[color:var(--ink)] mb-2">
                5
              </div>
              <div class="text-sm text-[color:var(--ink-soft)]">
                Core journeys fully spec'd for beta — Settings, Builder, Legal,
                Orders, Portfolio.
              </div>
            </div>
          </div>

          <!-- Testimonial -->
          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[32px] p-10 relative overflow-hidden"
            data-aos="fade-up"
          >
            <Icon
              name="lucide:quote"
              class="absolute -top-4 -left-4 w-24 h-24 text-[color:var(--card-border)] opacity-50 rotate-180"
            />
            <blockquote
              class="text-lg font-medium text-[color:var(--ink)] leading-relaxed mb-8 max-w-3xl relative z-10 italic"
            >
              "Your work has been excellent across the board. The state-by-state
              thinking on the order box — showing the token shortfall before it
              hits — saved us a support headache at beta. Looking forward to
              what's next."
            </blockquote>
            <div class="flex items-center gap-4 relative z-10">
              <div
                class="w-12 h-12 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center font-bold text-sm"
              >
                TC
              </div>
              <div>
                <div class="font-bold text-[color:var(--ink)] text-sm">
                  Tyler Charton
                </div>
                <div class="text-xs text-[color:var(--ink-soft)]">
                  CEO & Founder, Qompyl
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 14. UNCOMFORTABLE TRUTHS ================= -->
        <section
          id="truths"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-4" data-aos="fade-up">
            What I'd do differently next time
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-12 max-w-2xl" data-aos="fade-up">
            A case study without confessions is an advertisement. Three things
            I'd change if I started this project tomorrow.
          </p>

          <div class="flex flex-col gap-6" data-aos="fade-up">
            <!-- Truth 1 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-amber-500 rounded-r-[20px] p-8 md:p-10"
            >
              <h4 class="text-lg font-bold text-[color:var(--ink)] mb-3 flex items-center gap-3">
                <span class="text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                  01
                </span>
                I over-designed the empty states first.
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed m-0">
                Spent 3 days perfecting "No strategies yet" screens before
                confirming the actual data flow. When founders changed the
                trigger logic, half the states had to be rebuilt. Next time:
                state map validated before any pixels drawn.
              </p>
            </div>

            <!-- Truth 2 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-amber-500 rounded-r-[20px] p-8 md:p-10"
            >
              <h4 class="text-lg font-bold text-[color:var(--ink)] mb-3 flex items-center gap-3">
                <span class="text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                  02
                </span>
                The token aliases came late.
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed m-0">
                Started with hardcoded colors. Migrated to aliases in week 6 —
                took 2 days to refactor 30+ screens. Should have started with
                tokens from day one.
              </p>
            </div>

            <!-- Truth 3 — Real confession -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-amber-500 rounded-r-[20px] p-8 md:p-10"
            >
              <h4 class="text-lg font-bold text-[color:var(--ink)] mb-3 flex items-center gap-3">
                <span class="text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                  03
                </span>
                I let the tablet question burn 4 hours in week 3.
              </h4>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed m-0">
                Founders asked about iPad previews mid-sprint. We debated,
                sketched, killed the idea — four hours that should have been a
                five-minute decision at kickoff. Next time: scope boundaries
                locked before week 1 ends.
              </p>
            </div>
          </div>
        </section>

        <!-- ================= 15. REFLECTION ================= -->
        <section
          id="reflection"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)] mb-20"
        >
          <h2 class="text-3xl font-extrabold text-[color:var(--ink)] mb-12" data-aos="fade-up">
            Reflection
          </h2>

          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-10 md:p-14"
            data-aos="fade-up"
          >
            <div class="grid md:grid-cols-2 gap-12">
              <div>
                <blockquote
                  class="text-xl italic font-medium text-[color:var(--ink)] leading-relaxed mb-8"
                >
                  "States before pixels — clarity compounds when feedback is
                  fast."
                </blockquote>
                <h5 class="text-sm font-bold text-[color:var(--ink)] mb-4">
                  What I learned
                </h5>
                <ul class="space-y-3 text-sm text-[color:var(--ink-soft)]">
                  <li class="flex gap-2">
                    <Icon
                      name="lucide:check"
                      class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                    />
                    Co-design with founders beats big-bang handoffs. Small loops
                    build faster trust.
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      name="lucide:check"
                      class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                    />
                    Compliance is a feature — not a wall. Design it as a guided
                    journey.
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      name="lucide:check"
                      class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                    />
                    A testable prototype ends debates that a static mockup
                    can't.
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-sm font-bold text-[color:var(--ink)] mb-4">
                  Next steps
                </h5>
                <div class="flex flex-col gap-3">
                  <div
                    class="flex items-center gap-4 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--ink)]"
                  >
                    <span
                      class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] text-xs font-bold flex items-center justify-center flex-shrink-0"
                    >
                      1
                    </span>
                    Finish the Portfolio screens — the last chunk before beta.
                  </div>
                  <div
                    class="flex items-center gap-4 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--ink)]"
                  >
                    <span
                      class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] text-xs font-bold flex items-center justify-center flex-shrink-0"
                    >
                      2
                    </span>
                    Support beta QA and dev handoff through mid-August.
                  </div>
                  <div
                    class="flex items-center gap-4 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--ink)]"
                  >
                    <span
                      class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] text-xs font-bold flex items-center justify-center flex-shrink-0"
                    >
                      3
                    </span>
                    Measure the post-beta funnel: run strategy → token shortfall.
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-12 pt-10 border-t border-[color:var(--card-border)]">
              <div
                class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)] mb-6"
              >
                Deliverables
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  30+ screens
                </div>
                <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  60+ documented states
                </div>
                <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  HTML prototypes
                </div>
                <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Legal & compliance flows
                </div>
                <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Design system extension
                </div>
                <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
                  <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
                  Handoff docs + Loom
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 16. CLOSING CTA ================= -->
        <section class="py-24 px-6 text-center border-t border-[color:var(--card-border)]">
          <div
            class="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)] bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-5 py-2.5"
            data-aos="fade-up"
          >
            <Icon name="lucide:sparkles" class="w-4 h-4 text-[color:var(--accent-1)]" />
            Next case study: Post-Beta — measuring the token economy funnel.
          </div>
          <h2
            class="text-4xl md:text-5xl font-black tracking-[-0.02em] text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            This isn't another trading app.
          </h2>
          <p class="text-lg text-[color:var(--ink-soft)] mb-3" data-aos="fade-up">
            It's proof that complexity can feel simple — one state at a time.
          </p>
          <p class="text-sm font-bold uppercase tracking-widest text-[color:var(--accent-text)] mb-12" data-aos="fade-up">
            One owner, whole loop — from whiteboard to beta.
          </p>
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
              Read Part I — the Website
            </AppButton>
          </div>
          <p class="text-xs font-medium text-[color:var(--ink-soft)] opacity-70 mt-6">
            Reply within 24 hours. Usually sooner.
          </p>
        </section class="py-24 px-6">
      
      </div>
      <!-- End Main Content -->
    </div>
    <!-- End Layout Container -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

definePageMeta({
  layout: "playbook",
  backLabel: "Projects",
  backTo: "/projects",
});

usePageMeta({
  title: "Qompyl App — Trader Beta in 10 Weeks | Mobile Case Study",
  description:
    "How I designed a state-driven mobile trading app for a Pre-Series A fintech — 30+ screens, 60+ documented states, every founder comment logged, answered, and closed. Beta-ready in 10 weeks.",
  keywords: [
    "fintech mobile design",
    "trading app UX",
    "mobile product design case study",
    "Pre-Series A design",
    "design system mobile",
    "state-driven design",
    "compliance UX fintech",
    "Qompyl app case study",
  ],
  ogType: "article",
  ogImage: "https://mamdouhghaneemy.com/images/qompyl-app-cover.png",
  article: {
    publishedTime: "2026-06-15T00:00:00Z",
    modifiedTime: "2026-09-18T00:00:00Z",
    section: "Case Study",
    tags: [
      "Fintech",
      "Mobile Design",
      "Product Design",
      "Design Systems",
      "Compliance UX",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Qompyl App", url: "/projects/qompyl-app-case-study" },
  ],
  faqItems: [
    {
      question: "How long did the Qompyl app design take?",
      answer:
        "Ten weeks from kickoff to a beta-ready design system — including feedback mining, flows, high-fidelity UI, HTML prototypes, and handoff documentation.",
    },
    {
      question: "How were the founder comments handled?",
      answer:
        "Every Figma comment was logged, answered with a testable screen, and closed — zero left open at handoff. Average turnaround per round was 48 hours, async-friendly across time zones.",
    },
    {
      question: "How was compliance treated in the UX?",
      answer:
        "Compliance was designed as a guided journey — checkbox + disabled CTA until read, download always available. Risk disclosure became a step, not a wall.",
    },
    {
      question: "What design system was delivered?",
      answer:
        "A three-layer token architecture (primitive → semantic → component) with 7 color families × 8 levels, Manrope + Inter typography, and a 54-variant button matrix from one base component — one source, ready to extend.",
    },
  ],
});

const tocLinks = [
  { id: "overview", label: "Overview" },
  { id: "client", label: "The Client" },
  { id: "challenge", label: "The Challenge" },
  { id: "process", label: "Process" },
  { id: "insights", label: "Insights" },
  { id: "strategy", label: "Strategy" },
  { id: "scale", label: "Built to Scale" },
  { id: "system", label: "Design System" },
  { id: "gallery", label: "Gallery" },
  { id: "metrics", label: "Metrics" },
  { id: "results", label: "Results" },
  { id: "truths", label: "Reflection" },
  { id: "reflection", label: "Closing" },
];

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
</style>