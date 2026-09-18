<template>
  <div
    class="page-wrapper bg-[color:var(--page-bg-1)] text-[color:var(--ink)] relative"
  >
    <!-- === LAYOUT CONTAINER (For Sticky Sidebar) === -->
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
            Qompyl
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
            <p>Lead Product Designer</p>
            <p class="font-bold text-[color:var(--ink)] mt-1">Apr – May 2026</p>
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

          <div
            class="space-y-8 animate-[rise_.7s_cubic-bezier(.19,1,.22,1)_both] relative z-10"
          >
            <div
              class="inline-flex items-center gap-2 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase text-[color:var(--ink)]"
            >
              <span
                class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse shadow-[0_0_0_4px_rgba(51,204,149,0.18)]"
              ></span>
              Case Study · Website
            </div>

            <h1
              class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] text-[color:var(--ink)] leading-[1.05]"
            >
              Investor-Ready in <br class="hidden md:block" />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]"
                >4 weeks.</span
              >
              Not 4 months.
            </h1>

            <p
              class="text-lg md:text-xl text-[color:var(--ink-soft)] max-w-3xl leading-relaxed"
            >
              How I designed a website that could survive investor due diligence
              — balancing trader clarity, institutional trust, and IP protection
              — without slowing down the fundraising window.
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
                  >Lead Product Designer</span
                >
              </div>
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                  >Stack</span
                >
                <span class="font-bold text-[color:var(--ink)]"
                  >Figma · Webflow · GA4</span
                >
              </div>
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                  >Timeline</span
                >
                <span class="font-bold text-[color:var(--ink)]"
                  >4 weeks · 0 missed</span
                >
              </div>
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                  >Impact</span
                >
                <span class="font-bold text-[color:var(--accent-1)]"
                  >Investor-approved launch</span
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
              TL;DR — The 10-Second Version
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
                  The challenge
                </div>
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  A Pre-Series A fintech needed an investor-ready website in 4
                  weeks. The old site read like a hobby project — and
                  multi-million dollar term sheets don't survive that first
                  impression.
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
                  The strategy
                </div>
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  Trader-first, investor-reassuring. Layered content, abstract
                  IP-safe visuals, and a credibility-first hierarchy built to
                  survive 45 seconds of due diligence.
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
                  The result
                </div>
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  Shipped in 4 weeks. Tracked from day one (GTM + GA4 +
                  Clarity). Lead investor called out the polish during due
                  diligence.
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
              <div
                class="text-4xl font-black text-[color:var(--accent-1)] mb-2"
              >
                5
              </div>
              <div
                class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
              >
                Pages shipped
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] p-6 rounded-[24px] text-center hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                class="text-4xl font-black text-[color:var(--accent-1)] mb-2"
              >
                4
              </div>
              <div
                class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
              >
                Weeks, end-to-end
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] p-6 rounded-[24px] text-center hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                class="text-4xl font-black text-[color:var(--accent-1)] mb-2"
              >
                12+
              </div>
              <div
                class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
              >
                Stakeholders aligned
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] p-6 rounded-[24px] text-center hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="text-4xl font-black text-[#33cc95] mb-2">0</div>
              <div
                class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
              >
                Structural revisions after launch
              </div>
            </div>
          </div>

          <!-- Strategic Goal -->
          <div
            class="bg-[color:var(--input-bg)] rounded-[32px] p-8 md:p-10 border-l-4 border-l-[color:var(--accent-1)] mb-16"
            data-aos="fade-up"
          >
            <h3
              class="text-xl font-bold text-[color:var(--ink)] mb-4 flex items-center gap-3"
            >
              <Icon
                name="lucide:target"
                class="text-[color:var(--accent-text)] w-6 h-6"
              />
              The one metric that mattered
            </h3>
            <p
              class="text-base text-[color:var(--ink-soft)] leading-relaxed mb-4"
            >
              The site had to make a skeptical VC analyst move from
              <strong class="text-[color:var(--ink)]">"who is this?"</strong> to
              <strong class="text-[color:var(--ink)]"
                >"let's schedule a call"</strong
              >
              in under 45 seconds. Everything else — the animations, the copy,
              the layout — was subordinate to that one number.
            </p>
            <p class="font-bold text-[color:var(--accent-text)]">
              Build trust at speed — not just a website.
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
                  ET
                </div>
                <div>
                  <div class="font-bold text-lg text-[color:var(--ink)]">
                    The early trader
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    Self-directed · 25–40 · Retail & pro-am
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div
                  class="bg-[color:var(--input-bg)] rounded-[16px] p-4 border border-[color:var(--card-border)]"
                >
                  <div
                    class="text-xs font-bold text-[color:var(--accent-1)] mb-2"
                  >
                    Pain points
                  </div>
                  <ul class="text-xs text-[color:var(--ink-soft)] space-y-2">
                    <li>• Juggling 5+ disconnected tools</li>
                    <li>• No institutional-grade analytics</li>
                    <li>• Emotional trading losses</li>
                  </ul>
                </div>
                <div
                  class="bg-[color:var(--input-bg)] rounded-[16px] p-4 border border-[color:var(--card-border)]"
                >
                  <div class="text-xs font-bold text-[#33cc95] mb-2">Gains</div>
                  <ul class="text-xs text-[color:var(--ink-soft)] space-y-2">
                    <li>• Unified trading workspace</li>
                    <li>• Backtest with 10+ years of data</li>
                    <li>• Zero-emotion execution</li>
                  </ul>
                </div>
              </div>
              <div
                class="text-center text-sm font-medium text-[color:var(--ink-soft)] italic"
              >
                "Clarity over noise. Confidence over chance."
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
                  SI
                </div>
                <div>
                  <div class="font-bold text-lg text-[color:var(--ink)]">
                    Sarah — the investor
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    VC analyst · 36 · New York
                  </div>
                </div>
              </div>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6"
              >
                Sarah evaluates 10+ early-stage fintechs monthly. She spends 45
                seconds on a website before deciding whether it's worth a deeper
                look. She needs credibility, team strength, and product-market
                fit — all at a glance. Miss once, and she never comes back.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="bg-[color:var(--input-bg)] text-[color:var(--ink)] text-xs px-3 py-1.5 rounded-full font-semibold border border-[color:var(--card-border)]"
                  >Investor</span
                >
                <span
                  class="bg-[color:var(--input-bg)] text-[color:var(--ink)] text-xs px-3 py-1.5 rounded-full font-semibold border border-[color:var(--card-border)]"
                  >Decision maker</span
                >
              </div>
            </div>
          </div>

          <!-- Two audiences callout -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[16px] p-5 text-sm text-[color:var(--ink-soft)] flex gap-3"
            data-aos="fade-up"
          >
            <Icon
              name="lucide:users"
              class="w-5 h-5 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
            />
            <span
              ><strong class="text-[color:var(--ink)]"
                >Two audiences, one page:</strong
              >
              the trader needs proof, the investor needs polish. This hierarchy
              tension shaped the entire content strategy — see
              <a
                href="#challenge"
                @click.prevent="scrollToSection('challenge')"
                class="text-[color:var(--accent-text)] font-semibold underline"
                >The Challenge</a
              >.</span
            >
          </div>
        </section>

        <!-- ================= 4. THE CLIENT ================= -->
        <section
          id="client"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
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
                  <Icon
                    name="lucide:building-2"
                    class="w-6 h-6 text-[color:var(--ink)]"
                  />
                </div>
                <div>
                  <div class="font-extrabold text-xl text-[color:var(--ink)]">
                    Qompyl
                  </div>
                  <div
                    class="text-sm font-semibold text-[color:var(--ink-soft)]"
                  >
                    Fintech · Automated trading
                  </div>
                </div>
              </div>
              <div class="space-y-4 text-sm">
                <div class="flex justify-between items-center">
                  <span class="text-[color:var(--ink-soft)]">Stage</span
                  ><span
                    class="font-bold text-[color:var(--ink)] bg-[color:var(--input-bg)] px-3 py-1 rounded-full border border-[color:var(--card-border)]"
                    >Pre-Series A</span
                  >
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[color:var(--ink-soft)]">Team</span
                  ><span class="font-bold text-[color:var(--ink)]"
                    >4 founders + 12 members</span
                  >
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[color:var(--ink-soft)]">Location</span
                  ><span class="font-bold text-[color:var(--ink)]"
                    >Ohio, USA</span
                  >
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] rounded-[32px] p-8 text-white shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="flex items-center gap-3 mb-8">
                <div
                  class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <Icon name="lucide:target" class="w-5 h-5 text-white" />
                </div>
                <div class="font-bold text-lg">Why this mattered</div>
              </div>
              <ul class="space-y-4 text-sm font-medium text-white/90">
                <li class="flex items-start gap-3">
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 mt-0.5 shrink-0"
                  />
                  The old site couldn't survive a live fundraising round.
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 mt-0.5 shrink-0"
                  />
                  Investors needed to see an institution — not a hobby project.
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 mt-0.5 shrink-0"
                  />
                  The fundraising window was tight. Speed was not optional.
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
              <div
                class="text-[color:var(--accent-1)] font-bold mb-2 uppercase tracking-widest text-sm"
              >
                01
              </div>
              <h2
                class="text-3xl md:text-4xl font-extrabold text-[color:var(--ink)] mb-6"
              >
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
                  "We need a website that reflects the seriousness of a
                  financial institution — without giving away a single line of
                  the algorithm."
                </p>
                <div class="mt-8 pl-4 flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center font-bold text-sm"
                  >
                    TC
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] block"
                      >Tyler Charton</span
                    >
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
                  <Icon name="lucide:alert-triangle" class="w-5 h-5" /> Core
                  pain points
                </h3>
                <ul class="space-y-4">
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5"
                      >01</span
                    >
                    <span
                      ><strong class="text-[color:var(--ink)]"
                        >No credibility signal</strong
                      >
                      — the old site read like a hobby project. Multi-million
                      dollar term sheets don't survive that.</span
                    >
                  </li>
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5"
                      >02</span
                    >
                    <span
                      ><strong class="text-[color:var(--ink)]"
                        >Two audiences, one page</strong
                      >
                      — traders want proof, investors want polish. A diluted
                      message loses both.</span
                    >
                  </li>
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5"
                      >03</span
                    >
                    <span
                      ><strong class="text-[color:var(--ink)]"
                        >IP exposure risk</strong
                      >
                      — early drafts leaned on technical diagrams that hinted at
                      proprietary logic. One leak, and the moat was gone.</span
                    >
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
                  Most fintech pre-launch sites default to either dense
                  technical whitepapers or generic SaaS templates.
                  <strong class="text-[color:var(--ink)]"
                    >Neither builds trust fast enough for a live fundraising
                    round.</strong
                  >
                </p>
                <p class="text-[color:var(--ink-soft)] opacity-70 text-sm">
                  That was the opening — a website that reads like an
                  institution on day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 6. PROCESS + 4-WEEK CLOCK ================= -->
        <section
          id="process"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            The 4-week sprint
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Five stages, 20 working days, zero missed checkpoints.
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
                Alignment & de-risking
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Strategic brief, personas, IP guardrails. 5 days.
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
                Architecture & flow
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Low-fi and mid-fi wireframes across all 5 pages. 5 days.
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
                Trust-building UI
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Full visual design with a complete system. 5 days.
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
                Scalable Webflow build
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Pixel-perfect build with CMS and responsive QA. 7 days.
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
                Analytics & launch
              </h3>
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                GTM, GA4, Clarity, custom events. 3 days.
              </p>
            </div>
          </div>

          <!-- 4-Week Clock -->
          <div
            class="mt-12 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10"
            data-aos="fade-up"
          >
            <div
              class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-8"
            >
              How the 20 days broke down
            </div>
            <div class="grid md:grid-cols-4 gap-6">
              <div
                class="relative pl-6 border-l-2 border-[color:var(--accent-1)]"
              >
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[color:var(--accent-1)] text-white text-[10px] font-bold flex items-center justify-center"
                >
                  1
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Week 1</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Research, stakeholder interviews, personas, IP guardrails,
                  low-fi wireframes.
                </p>
              </div>
              <div
                class="relative pl-6 border-l-2 border-[color:var(--card-border)]"
              >
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[color:var(--card-border)] text-[color:var(--ink-soft)] text-[10px] font-bold flex items-center justify-center"
                >
                  2
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Week 2</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Mid-fi → high-fi design + full design system (tokens, type,
                  components).
                </p>
              </div>
              <div
                class="relative pl-6 border-l-2 border-[color:var(--card-border)]"
              >
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[color:var(--card-border)] text-[color:var(--ink-soft)] text-[10px] font-bold flex items-center justify-center"
                >
                  3
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Week 3</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Webflow build — CMS collections, animations, responsive QA.
                </p>
              </div>
              <div class="relative pl-6 border-l-2 border-[#33cc95]">
                <div
                  class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#33cc95] text-white text-[10px] font-bold flex items-center justify-center"
                >
                  4
                </div>
                <div class="font-bold text-[color:var(--ink)] mb-1">Week 4</div>
                <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                  Analytics (GTM/GA4/Clarity), UAT, revisions, launch.
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
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            Three insights that shaped the direction
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Each one from stakeholder interviews — each one became an action.
          </p>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
            >
              <Icon
                name="lucide:quote"
                class="text-[color:var(--accent-1)] mb-4 w-6 h-6"
              />
              <p
                class="italic text-base text-[color:var(--ink)] mb-6 flex-grow leading-relaxed"
              >
                "We need a number we can screenshot — not a 50-page report."
              </p>
              <div class="pt-4 border-t border-[color:var(--card-border)]">
                <p
                  class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1"
                >
                  Insight
                </p>
                <p
                  class="text-sm text-[color:var(--ink-soft)] font-medium mb-3"
                >
                  Users judge credibility in seconds. Clarity outranks detail,
                  always.
                </p>
                <p
                  class="text-xs font-semibold text-[#33cc95] flex items-center gap-1.5"
                >
                  <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" /> Action:
                  proof metrics above the fold on every page.
                </p>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <Icon
                name="lucide:quote"
                class="text-[color:var(--accent-1)] mb-4 w-6 h-6"
              />
              <p
                class="italic text-base text-[color:var(--ink)] mb-6 flex-grow leading-relaxed"
              >
                "If we can't measure our impact, we can't sell it to investors
                or traders."
              </p>
              <div class="pt-4 border-t border-[color:var(--card-border)]">
                <p
                  class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1"
                >
                  Insight
                </p>
                <p
                  class="text-sm text-[color:var(--ink-soft)] font-medium mb-3"
                >
                  Proof has to sit above the fold — not buried in a features
                  list.
                </p>
                <p
                  class="text-xs font-semibold text-[#33cc95] flex items-center gap-1.5"
                >
                  <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" /> Action:
                  full tracking stack (GTM + GA4 + Clarity) shipped before
                  launch.
                </p>
              </div>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Icon
                name="lucide:quote"
                class="text-[color:var(--accent-1)] mb-4 w-6 h-6"
              />
              <p
                class="italic text-base text-[color:var(--ink)] mb-6 flex-grow leading-relaxed"
              >
                "AEO is the next frontier in fintech — but there's no standard
                yet."
              </p>
              <div class="pt-4 border-t border-[color:var(--card-border)]">
                <p
                  class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1"
                >
                  Insight
                </p>
                <p
                  class="text-sm text-[color:var(--ink-soft)] font-medium mb-3"
                >
                  A rare chance to define the category language instead of
                  borrowing a competitor's.
                </p>
                <p
                  class="text-xs font-semibold text-[#33cc95] flex items-center gap-1.5"
                >
                  <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" /> Action:
                  SEO/AEO optimization + Search Console + category-defining
                  copy.
                </p>
              </div>
            </div>
          </div>
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
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Trader-first, investor-reassuring — built on a re-framed audience
            hierarchy.
          </p>

          <div
            class="grid lg:grid-cols-2 gap-12 items-start"
            data-aos="fade-up"
          >
            <!-- Dashboard Widget Preview — 45-Second Trust Build -->
<div
  class="bg-gradient-to-br from-[color:var(--page-bg-1)] to-[color:var(--input-bg)] rounded-[32px] border border-[color:var(--card-border)] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative overflow-hidden group"
>
  <!-- Ambient glow -->
  <div class="absolute -right-10 -top-10 w-40 h-40 bg-[color:var(--accent-1)]/20 blur-3xl rounded-full group-hover:bg-[color:var(--accent-1)]/30 transition-all duration-700"></div>

  <div class="text-[10px] font-bold text-[color:var(--ink-soft)] uppercase tracking-[0.2em] mb-6">
    Investor Trust — 45-Second Scan
  </div>

  <div class="bg-[color:var(--card-bg)] rounded-[24px] p-6 border border-[color:var(--card-border)] shadow-sm">

    <!-- Header -->
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--card-border)]">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse"></span>
        <span class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-wider">Session Recording</span>
      </div>
      <span class="text-[10px] font-mono text-[color:var(--ink-soft)]">0:45 elapsed</span>
    </div>

    <!-- Timeline -->
    <div class="relative pl-1">
      <div class="absolute left-[13px] top-3 bottom-3 w-px bg-gradient-to-b from-[color:var(--accent-1)]/60 via-[color:var(--accent-1)]/30 to-[#33cc95]/60"></div>

      <div class="flex flex-col gap-4">
        <div v-for="step in trustSteps" :key="step.time" class="flex gap-4 items-start relative">
          <div class="w-7 h-7 rounded-full bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)] flex items-center justify-center shrink-0 relative z-10">
            <span class="text-[9px] font-black text-[color:var(--accent-1)] font-mono">{{ step.time }}</span>
          </div>
          <div class="pt-0.5">
            <div class="text-sm font-bold text-[color:var(--ink)] leading-tight">{{ step.label }}</div>
            <div class="text-[11px] text-[color:var(--ink-soft)] leading-snug mt-0.5">{{ step.detail }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Outcome -->
    <div class="mt-5 pt-4 border-t border-dashed border-[color:var(--card-border)]">
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-bold text-[color:var(--ink-soft)] uppercase tracking-widest">Outcome</span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold text-[#33cc95]">
          <Icon name="lucide:check-circle-2" class="w-3.5 h-3.5" />
          Sarah booked a demo
        </span>
      </div>
    </div>

    <!-- Footer note -->
    <p class="mt-4 text-[10px] text-[color:var(--ink-soft)] italic leading-relaxed">
      Composite timeline based on post-launch Clarity recordings — not a single session.
    </p>
  </div>
</div>

            <div>
              <div class="flex flex-col gap-8 mb-8">
                <div class="flex gap-4">
                  <div
                    class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:lock" class="w-5 h-5" />
                  </div>
                  <div>
                    <h4
                      class="text-base font-bold text-[color:var(--ink)] mb-1"
                    >
                      IP protection
                    </h4>
                    <p
                      class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                    >
                      Abstract visuals — network nodes, data flow — replace code
                      snippets and algorithm diagrams. Only inputs and outputs
                      are shown, never the internal logic.
                    </p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div
                    class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:map-pin" class="w-5 h-5" />
                  </div>
                  <div>
                    <h4
                      class="text-base font-bold text-[color:var(--ink)] mb-1"
                    >
                      v1 vs. Vision separation
                    </h4>
                    <p
                      class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                    >
                      Vibrant colour and interactive CTAs mark available
                      features; desaturated tones and "Coming Soon" badges mark
                      the roadmap. Anticipation without overpromising.
                    </p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div
                    class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="lucide:users" class="w-5 h-5" />
                  </div>
                  <div>
                    <h4
                      class="text-base font-bold text-[color:var(--ink)] mb-1"
                    >
                      Trader-first language
                    </h4>
                    <p
                      class="text-sm text-[color:var(--ink-soft)] leading-relaxed"
                    >
                      Complex product logic translated into simple, empowering
                      copy that speaks to the trader's job-to-be-done first.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6"
              >
                <h5 class="text-sm font-bold text-[color:var(--ink)] mb-4">
                  Why this strategy?
                </h5>
                <ul class="space-y-3">
                  <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                    <Icon
                      name="lucide:check"
                      class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                    />
                    Investors and traders read the same page differently. The
                    hierarchy had to work for both.
                  </li>
                  <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                    <Icon
                      name="lucide:check"
                      class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                    />
                    Every screen protects IP by design — not by afterthought.
                  </li>
                  <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
                    <Icon
                      name="lucide:check"
                      class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                    />
                    Roadmap items build anticipation without overpromising.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 9. BUILT TO SCALE ================= -->
        <section
          id="scale"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            Built to scale
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-8"
            data-aos="fade-up"
          >
            Not pages — a system the team can run, extend, and hand off to any
            developer without me in the room.
          </p>

          <div
            class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-aos="fade-up"
          >
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
                Brand consistency enforced across every page — no more "which
                purple is the right purple."
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
                A Lego-kit. Marketing ships new landing pages 3x faster —
                without booking a designer.
              </p>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-5 hover:shadow-md transition-shadow"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:shield-check" class="w-5 h-5" />
              </div>
              <h4 class="font-bold text-[color:var(--ink)] mb-1 text-sm">
                WCAG 2.2 AA
              </h4>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Contrast, ARIA labels, and keyboard navigation baked in from day
                one — not retrofitted.
              </p>
            </div>
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-5 hover:shadow-md transition-shadow"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center mb-4"
              >
                <Icon name="lucide:database" class="w-5 h-5" />
              </div>
              <h4 class="font-bold text-[color:var(--ink)] mb-1 text-sm">
                CMS
              </h4>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Team, blog, testimonials — self-serve. No dev bottleneck for a
                copy change.
              </p>
            </div>
          </div>
        </section>

        <!-- ================= 10. DESIGN GALLERY ================= -->
        <section
          id="gallery"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            From wireframe to launch-ready
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Low-fi structure to pixel-perfect system — across all five pages.
          </p>

          <!-- Low-Fi -->
          <div class="mb-14" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-[color:var(--ink)]">
                Low-fidelity wireframes
              </h3>
              <span
                class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
                >Structure</span
              >
            </div>
            <p class="text-sm text-[color:var(--ink-soft)] mb-6">
              Grayscale layouts focused on hierarchy and core functionality — no
              visual design yet.
            </p>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2 flex flex-col items-center justify-center gap-3"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Homepage-(Low-Fi).png"
                  alt="Qompyl homepage — low-fidelity wireframe"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2 flex flex-col items-center justify-center gap-3"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Product Page-(Low-Fi).jpg"
                  alt="Qompyl homepage — low-fidelity wireframe"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2 flex flex-col items-center justify-center gap-3"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Early Access-(Low-Fi).jpg"
                  alt="Qompyl homepage — low-fidelity wireframe"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
          </div>

          <!-- Mid-Fi -->
          <div class="mb-14" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-[color:var(--ink)]">
                Mid-fidelity wireframes
              </h3>
              <span
                class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
                >Refinement</span
              >
            </div>
            <p class="text-sm text-[color:var(--ink-soft)] mb-6">
              Real copy and clearer hierarchy — the bridge between structure and
              visual design.
            </p>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2 flex flex-col items-center justify-center gap-3"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Homepage-(Mid-Fi).png"
                  alt="Qompyl homepage — mid-fidelity wireframe"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2 flex flex-col items-center justify-center gap-3"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Product-Page-(Mid-Fi).jpg"
                  alt="Qompyl homepage — mid-fidelity wireframe"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-[color:var(--card-bg)] p-2 flex flex-col items-center justify-center gap-3"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Early-Access-(Mid-Fi).jpg"
                  alt="Qompyl homepage — mid-fidelity wireframe"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
          </div>

        <!-- Design System — Editorial Showcase -->
<div class="mb-16 space-y-8" data-aos="fade-up">

  <!-- ═══ A. COLOR SYSTEM ═══ -->
  <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8">
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--card-border)]">
      <div>
        <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1">01 · Foundation</div>
        <h4 class="text-lg font-bold text-[color:var(--ink)]">Color System</h4>
      </div>
      <span class="text-[10px] font-mono text-[color:var(--ink-soft)]">7 families · 8 variants each</span>
    </div>

    <!-- Semantic tokens first -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      <div class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]">
        <div class="h-8 rounded-md mb-2" style="background: #00D9CF;"></div>
        <div class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Teal Normal</div>
        <div class="text-[10px] font-mono text-[color:var(--ink)]">#00D9CF</div>
      </div>
      <div class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]">
        <div class="h-8 rounded-md mb-2" style="background: #0690F9;"></div>
        <div class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Blue Normal</div>
        <div class="text-[10px] font-mono text-[color:var(--ink)]">#0690F9</div>
      </div>
      <div class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]">
        <div class="h-8 rounded-md mb-2" style="background: #21C45E;"></div>
        <div class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Green Success</div>
        <div class="text-[10px] font-mono text-[color:var(--ink)]">#21C45E</div>
      </div>
      <div class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]">
        <div class="h-8 rounded-md mb-2" style="background: #FFCC00;"></div>
        <div class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Yellow Warn</div>
        <div class="text-[10px] font-mono text-[color:var(--ink)]">#FFCC00</div>
      </div>
    </div>

    <!-- Full scale of Teal (representative) -->
    <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-3">Teal scale — 8 variants</div>
    <div class="grid grid-cols-8 gap-1.5">
      <div class="aspect-square rounded-md" style="background:#E6FBFA" title="Light #E6FBFA"></div>
      <div class="aspect-square rounded-md" style="background:#D9F9F8" title="Light:hover #D9F9F8"></div>
      <div class="aspect-square rounded-md" style="background:#B0F3F0" title="Light:active #B0F3F0"></div>
      <div class="aspect-square rounded-md ring-2 ring-[color:var(--accent-1)] ring-offset-2 ring-offset-[color:var(--card-bg)]" style="background:#00D9CF" title="Normal #00D9CF"></div>
      <div class="aspect-square rounded-md" style="background:#00C3BA" title="Normal:hover #00C3BA"></div>
      <div class="aspect-square rounded-md" style="background:#00AEA6" title="Normal:active #00AEA6"></div>
      <div class="aspect-square rounded-md" style="background:#00A39B" title="Dark #00A39B"></div>
      <div class="aspect-square rounded-md" style="background:#004C48" title="Darker #004C48"></div>
    </div>
  </div>

  <!-- ═══ B. TYPOGRAPHY ═══ -->
  <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8">
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--card-border)]">
      <div>
        <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1">02 · Foundation</div>
        <h4 class="text-lg font-bold text-[color:var(--ink)]">Typography</h4>
      </div>
      <div class="text-right">
        <div class="text-[10px] font-mono text-[color:var(--ink-soft)]">Manrope · Inter</div>
        <div class="text-[10px] font-mono text-[color:var(--ink-soft)]">7 sizes · 9 weights</div>
      </div>
    </div>

    <div class="space-y-4">
      <div class="flex items-baseline gap-6 pb-3 border-b border-dashed border-[color:var(--card-border)]">
        <span class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24">Title-1 · 72/88</span>
        <span class="text-5xl font-extrabold tracking-tight text-[color:var(--ink)]" style="font-family: 'Manrope', sans-serif;">Institutional</span>
      </div>
      <div class="flex items-baseline gap-6 pb-3 border-b border-dashed border-[color:var(--card-border)]">
        <span class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24">H2 · 48/58</span>
        <span class="text-3xl font-extrabold tracking-tight text-[color:var(--ink)]" style="font-family: 'Manrope', sans-serif;">Trust at speed</span>
      </div>
      <div class="flex items-baseline gap-6 pb-3 border-b border-dashed border-[color:var(--card-border)]">
        <span class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24">Body-1 · 18/28</span>
        <span class="text-lg text-[color:var(--ink-soft)]">Backtest engine with 10+ years of historical market data.</span>
      </div>
      <div class="flex items-baseline gap-6">
        <span class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24">Label-2 · 14/20</span>
        <span class="text-sm font-semibold tracking-wide text-[color:var(--accent-text)] uppercase">Institutional grade</span>
      </div>
    </div>
  </div>

  <!-- ═══ C. SPACING & RADIUS ═══ -->
  <div class="grid md:grid-cols-2 gap-6">
    <!-- Spacing -->
    <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8">
      <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1">03 · Foundation</div>
      <h4 class="text-lg font-bold text-[color:var(--ink)] mb-6">Spacing scale</h4>
      <div class="space-y-2">
        <div v-for="s in [4, 8, 12, 16, 24, 32, 48]" :key="s" class="flex items-center gap-3">
          <span class="text-[10px] font-mono text-[color:var(--ink-soft)] w-8 text-right">{{ s }}</span>
          <div class="h-2 rounded-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]" :style="{ width: `${s * 3}px` }"></div>
        </div>
      </div>
    </div>

    <!-- Radius -->
    <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8">
      <div class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1">04 · Foundation</div>
      <h4 class="text-lg font-bold text-[color:var(--ink)] mb-6">Radius scale</h4>
      <div class="grid grid-cols-4 gap-3">
        <div v-for="r in [{n:'sm',v:4},{n:'md',v:8},{n:'lg',v:12},{n:'xl',v:16},{n:'2xl',v:20},{n:'3xl',v:24},{n:'4xl',v:32},{n:'full',v:999}]" :key="r.n" class="aspect-square bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-end justify-center pb-1" :style="{ borderRadius: `${r.v}px` }">
          <span class="text-[9px] font-mono text-[color:var(--ink-soft)]">{{ r.n }}</span>
        </div>
      </div>
    </div>
  </div>

</div>

          <!-- High-Fidelity -->
          <div class="mb-14" data-aos="fade-up">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-[color:var(--ink)]">
                High-fidelity UI
              </h3>
              <span
                class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--ink-soft)] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
                >Final design</span
              >
            </div>
            <p class="text-sm text-[color:var(--ink-soft)] mb-6">
              Pixel-perfect visual design across all 5 pages — premium fintech
              aesthetic, fully responsive.
            </p>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-gradient-to-br from-[color:var(--card-bg)] to-[color:var(--input-bg)] p-2 flex flex-col items-center justify-center gap-3 relative"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Homepage-(High-Fi).png"
                  alt="Qompyl homepage — high-fidelity UI"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-gradient-to-br from-[color:var(--card-bg)] to-[color:var(--input-bg)] p-2 flex flex-col items-center justify-center gap-3 relative"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Product-Page-(heigh-Fi).jpg"
                  alt="Qompyl homepage — high-fidelity UI"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="aspect-[4/3] rounded-[24px] border border-[color:var(--card-border)] overflow-hidden bg-gradient-to-br from-[color:var(--card-bg)] to-[color:var(--input-bg)] p-2 flex flex-col items-center justify-center gap-3 relative"
              >
                <NuxtImg
                  src="/images/qompyl-website/Qompyl-Early-Access-(heigh-Fi).jpg"
                  alt="Qompyl homepage — high-fidelity UI"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 11. METRICS + CAUGHT ON CAMERA ================= -->
        <section
          id="metrics"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            Post-launch receipts
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Launch wasn't the finish line. It was the starting gun. Here's what
            the tracking stack reported in the first 30 days — with the
            comparison numbers alongside.
          </p>

         <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-aos="fade-up">
  
  <!-- ═══ Metric 1 — Scroll Depth (REAL) ═══ -->
  <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center">
    <div class="text-4xl font-black text-[color:var(--ink)] mb-1 tabular-nums">
      52%
    </div>
    <div class="text-xs font-bold text-[color:var(--ink-soft)] leading-snug">
      Avg. scroll depth
      <span class="block text-[#33cc95] mt-0.5">— industry benchmark: 40–50%</span>
    </div>
  </div>

  <!-- ═══ Metric 2 — Rage Clicks (REAL + STRONG) ═══ -->
  <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center">
    <div class="text-4xl font-black text-[color:var(--ink)] mb-1">
      0%
    </div>
    <div class="text-xs font-bold text-[color:var(--ink-soft)]">
      Rage clicks
      <span class="text-[color:var(--ink)]">— across 634 sessions</span>
    </div>
  </div>

  <!-- ═══ Metric 3 — Dead Clicks (REAL, honest) ═══ -->
  <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center">
    <div class="text-4xl font-black text-[color:var(--ink)] mb-1">
      0.16%
    </div>
    <div class="text-xs font-bold text-[color:var(--ink-soft)]">
      Dead clicks
      <span class="text-[color:var(--ink)]">— 1 session out of 634</span>
    </div>
  </div>

  <!-- ═══ Metric 4 — Engagement (REAL) ═══ -->
  <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center">
    <div class="text-4xl font-black text-[color:var(--ink)] mb-1">
      1.6 <span class="text-2xl">min</span>
    </div>
    <div class="text-xs font-bold text-[color:var(--ink-soft)]">
      Avg. active time spent
      <span class="text-[color:var(--ink)]">(per session)</span>
    </div>
  </div>
</div>

         <div class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10" data-aos="fade-up">
  <div class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-4 flex items-center gap-2">
    <Icon name="lucide:video" class="w-4 h-4 text-[color:var(--accent-1)]" />
    Caught on Camera — Microsoft Clarity
  </div>
  
  <p class="text-lg md:text-xl font-medium leading-relaxed text-[color:var(--ink)] mb-6 max-w-3xl">
    Recordings didn't show where the site failed. They showed <strong class="text-[color:var(--ink)]">where trust had already been earned</strong>. Visitors clicked into team bios. Opened job listings. Searched for security details. They wanted to go deeper — and the design let them. The placeholders they found, the errors they hit, the links that stopped them: those weren't design problems. Those were <em class="text-[color:var(--accent-text)]">content that hadn't caught up with the design yet</em>.
  </p>
  
  <p class="text-lg md:text-xl font-medium leading-relaxed text-[color:var(--ink)] mb-8 max-w-3xl">
    The site built the trust. The team just had to fill the room.
  </p>
  
  <div class="flex flex-wrap gap-3 text-sm">
    <span class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-4 py-2 text-[color:var(--ink-soft)] flex items-center gap-2">
      <Icon name="lucide:mouse-pointer-click" class="w-4 h-4" /> Visitors went deeper, not away
    </span>
    <span class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-4 py-2 text-[color:var(--ink-soft)] flex items-center gap-2">
      <Icon name="lucide:layers" class="w-4 h-4" /> Content layer — not design layer
    </span>
    <span class="bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/20 rounded-full px-4 py-2 text-[color:var(--accent-text)] font-semibold flex items-center gap-2">
      <Icon name="lucide:arrow-right" class="w-4 h-4" /> The best problem a designer can have.
    </span>
  </div>
</div>
        </section>

        <!-- ================= 12. RESULTS ================= -->
<section
  id="results"
  class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
>
  <h2
    class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
    data-aos="fade-up"
  >
    Impact & results
  </h2>
  <p
    class="text-lg text-[color:var(--ink-soft)] mb-12"
    data-aos="fade-up"
  >
    Four measurements. Four different truths — speed, quality, trust, and depth.
  </p>

  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" data-aos="fade-up">
    
    <!-- ═══ Card 1 — SPEED ═══ -->
    <div
      class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6"
    >
      <div
        class="w-10 h-10 rounded-full bg-[color:var(--input-bg)] text-[color:var(--accent-1)] flex items-center justify-center mb-4"
      >
        <Icon name="lucide:zap" class="w-5 h-5" />
      </div>
      <div
        class="text-4xl font-black tracking-tight text-[color:var(--ink)] mb-2 tabular-nums"
      >
        4 <span class="text-2xl font-bold">weeks</span>
      </div>
      <div class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
        <span class="text-[color:var(--ink)] font-semibold">Speed.</span> Kickoff to live site. Zero missed checkpoints.
      </div>
    </div>

    <!-- ═══ Card 2 — QUALITY ═══ -->
    <div
      class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6"
    >
      <div
        class="w-10 h-10 rounded-full bg-[color:var(--input-bg)] text-[color:var(--accent-1)] flex items-center justify-center mb-4"
      >
        <Icon name="lucide:check" class="w-5 h-5" />
      </div>
      <div
        class="text-4xl font-black tracking-tight text-[color:var(--ink)] mb-2 tabular-nums"
      >
        0
      </div>
      <div class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
        <span class="text-[color:var(--ink)] font-semibold">Quality.</span> Structural revisions after delivery. All 3 rounds were copy-level only.
      </div>
    </div>

    <!-- ═══ Card 3 — TRUST (الجديد) ═══ -->
    <div
      class="bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)] rounded-[24px] p-6 relative"
    >
      <div class="absolute -top-2.5 left-6 bg-[color:var(--accent-1)] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
        Signal
      </div>
      <div
        class="w-10 h-10 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] flex items-center justify-center mb-4"
      >
        <Icon name="lucide:repeat" class="w-5 h-5" />
      </div>
      <div
        class="text-4xl font-black tracking-tight text-[color:var(--ink)] mb-2 tabular-nums"
      >
        26.66<span class="text-2xl">%</span>
      </div>
      <div class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
        <span class="text-[color:var(--ink)] font-semibold">Trust.</span> Returning visitors in 30 days. Industry benchmark: ~15%.
      </div>
    </div>

    <!-- ═══ Card 4 — DEPTH (الجديد) ═══ -->
    <div
      class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6"
    >
      <div
        class="w-10 h-10 rounded-full bg-[color:var(--input-bg)] text-[color:var(--accent-1)] flex items-center justify-center mb-4"
      >
        <Icon name="lucide:layers" class="w-5 h-5" />
      </div>
      <div
        class="text-4xl font-black tracking-tight text-[color:var(--ink)] mb-2 tabular-nums"
      >
        2.10
      </div>
      <div class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
        <span class="text-[color:var(--ink)] font-semibold">Depth.</span> Pages per session — visitors stayed to read, not to skim.
      </div>
    </div>
  </div>

  <!-- ═══ Footnote — Sources & Honesty ═══ -->
  <div class="mb-12 pt-6 border-t border-dashed border-[color:var(--card-border)]" data-aos="fade-up">
    <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
      <strong class="text-[color:var(--ink)] font-semibold">Sources:</strong>
      All metrics verified via Microsoft Clarity (30-day window post-launch). 
      Returning visitors = 169 of 634 sessions · Pages per session = median, not mean · 
      Revision rounds = Figma file history. No metric in this section is estimated.
    </p>
  </div>

  <!-- ═══ Testimonial — Human Proof ═══ -->
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
      "Mamdouh turned our complex fintech product into an investor-ready
      website in just 4 weeks. Our lead investor specifically called out
      the site's polish during due diligence — that's the ROI."
    </blockquote>
    <div class="flex items-center gap-4 relative z-10">
      <div
        class="w-12 h-12 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center font-bold text-sm"
      >
        KM
      </div>
      <div>
        <div class="font-bold text-[color:var(--ink)] text-sm">
          Katie Milburn, MBA
        </div>
        <div class="text-xs text-[color:var(--ink-soft)]">
          VP, Growth & Business Strategy, Qompyl
        </div>
      </div>
    </div>
  </div>
</section>

       <!-- ================= 13. REFLECTION ================= -->
<section
  id="reflection"
  class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)] mb-20"
>
  <h2
    class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
    data-aos="fade-up"
  >
    What I'd do differently next time
  </h2>
  <p
    class="text-lg text-[color:var(--ink-soft)] mb-12 max-w-2xl"
    data-aos="fade-up"
  >
    A case study without confessions is an advertisement. Three things I'd change if I started this project tomorrow.
  </p>

  <div
    class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-10 md:p-14"
    data-aos="fade-up"
  >
    <div class="grid md:grid-cols-2 gap-12">
      <!-- LEFT: The Confessions -->
      <div>
        <h5 class="text-sm font-bold text-[color:var(--ink)] mb-6 flex items-center gap-2">
          <Icon name="lucide:alert-circle" class="w-4 h-4 text-amber-500" />
          What I'd do differently
        </h5>
        <ul class="space-y-5 text-sm text-[color:var(--ink-soft)]">
          <li class="flex gap-3">
            <span class="font-mono text-xs font-bold text-amber-500/70 mt-0.5 shrink-0">01</span>
            <span>
              <strong class="text-[color:var(--ink)] block mb-1">Ship content before design.</strong>
              Clarity recordings caught visitors clicking into empty "Coming soon" placeholders. The design earned their curiosity — the copy wasn't ready to answer it. Next time: final copy locked before the first wireframe.
            </span>
          </li>
          <li class="flex gap-3">
            <span class="font-mono text-xs font-bold text-amber-500/70 mt-0.5 shrink-0">02</span>
            <span>
              <strong class="text-[color:var(--ink)] block mb-1">Test stability at mid-fi, not at launch.</strong>
              Post-launch recordings flagged recurring JS errors on the Team pages. The fix was 20 minutes. The discovery took 20 days. Next time: error monitoring wired into the first staging build.
            </span>
          </li>
          <li class="flex gap-3">
            <span class="font-mono text-xs font-bold text-amber-500/70 mt-0.5 shrink-0">03</span>
            <span>
              <strong class="text-[color:var(--ink)] block mb-1">Audit mobile conversion earlier.</strong>
              Most traffic arrived on a phone. Most signups came from desktop. That gap existed for weeks before it was flagged. Next time: mobile funnel instrumented from day one — not retrofitted at week four.
            </span>
          </li>
        </ul>
      </div>

      <!-- RIGHT: Next Steps -->
      <div>
        <h5 class="text-sm font-bold text-[color:var(--ink)] mb-6 flex items-center gap-2">
          <Icon name="lucide:arrow-right-circle" class="w-4 h-4 text-[color:var(--accent-1)]" />
          Next steps
        </h5>
        <div class="flex flex-col gap-3">
          <div
            class="flex items-center gap-4 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--ink)]"
          >
            <span
              class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] text-xs font-bold flex items-center justify-center flex-shrink-0"
              >1</span
            >
            Track post-launch investor engagement metrics.
          </div>
          <div
            class="flex items-center gap-4 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--ink)]"
          >
            <span
              class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] text-xs font-bold flex items-center justify-center flex-shrink-0"
              >2</span
            >
            Run a content audit ahead of the Series A refresh.
          </div>
          <div
            class="flex items-center gap-4 bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--ink)]"
          >
            <span
              class="w-6 h-6 rounded-full bg-[color:var(--accent-1)]/10 text-[color:var(--accent-text)] text-xs font-bold flex items-center justify-center flex-shrink-0"
              >3</span
            >
            Extend the design system to the trader dashboard.
          </div>
        </div>

        <!-- Closing quote — UNIQUE, not repeated -->
        <blockquote
          class="mt-8 pt-8 border-t border-[color:var(--card-border)] text-base italic font-medium text-[color:var(--ink)] leading-relaxed"
        >
          "A four-week deadline doesn't buy perfection. It buys <span class="text-[color:var(--accent-1)] not-italic">clarity about what to fix next</span>."
        </blockquote>
      </div>
    </div>

    <!-- Deliverables section — unchanged -->
    <div class="mt-12 pt-10 border-t border-[color:var(--card-border)]">
      <div
        class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)] mb-6"
      >
        Deliverables
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
          <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
          5 Core Pages
        </div>
        <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
          <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
          CMS Collections
        </div>
        <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
          <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
          Full Design System
        </div>
        <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
          <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
          Analytics Setup (GA4/GTM)
        </div>
        <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
          <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
          Responsive Mobile
        </div>
        <div class="flex items-center gap-2 text-sm text-[color:var(--ink)]">
          <Icon name="lucide:check" class="w-4 h-4 text-[color:var(--accent-1)]" />
          Client Hand-off
        </div>
      </div>
    </div>

    <!-- Accessibility section — unchanged -->
    <div class="mt-12 pt-10 border-t border-[color:var(--card-border)]">
      <div
        class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)] mb-4"
      >
        Accessibility & design system
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]">
          WCAG 2.2 AA compliant
        </span>
        <span class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]">
          Design tokens
        </span>
        <span class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]">
          Re-usable components
        </span>
        <span class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]">
          ARIA labels
        </span>
        <span class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]">
          Keyboard nav
        </span>
      </div>
    </div>
  </div>
</section>
        <!-- ================= 14. CLOSING CTA ================= -->
        <section
          class="py-24 px-6 text-center border-t border-[color:var(--card-border)]"
        >
          <div
            class="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)] bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-5 py-2.5"
            data-aos="fade-up"
          >
            <Icon
              name="lucide:sparkles"
              class="w-4 h-4 text-[color:var(--accent-1)]"
            />
            Next case study: Qompyl Trader App — extending this system into the
            product.
          </div>
          <h2
            class="text-4xl md:text-5xl font-black tracking-[-0.02em] text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            This isn't another fintech website.
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            It's proof that clarity can outpace complexity — even on a four-week
            clock.
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
              to="/projects/qompyl-app-case-study"
              variant="glass"
              size="lg"
              rounded="full"
            >
              See Part II — the Trader App
            </AppButton>
          </div>
          <p
            class="text-xs font-medium text-[color:var(--ink-soft)] opacity-70 mt-6"
          >
            Reply within 24 hours. Usually sooner.
          </p>
          
        </section>
        <section class="py-24 px-6">
          <div
  class="pt-8 flex flex-wrap gap-8 md:gap-16 text-sm border-t border-[color:var(--card-border)]"
>
  <div class="flex flex-col gap-2">
    <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
      Role
    </span>
    <span class="font-bold text-[color:var(--ink)]">
      Lead Product Designer
    </span>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
      Stack
    </span>
    <span class="font-bold text-[color:var(--ink)]">
      Figma · Webflow · GA4
    </span>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
      Timeline
    </span>
    <span class="font-bold text-[color:var(--ink)]">
      4 weeks · 0 missed
    </span>
  </div>

  <!-- ✅ NEW: Live Site Link -->
  <div class="flex flex-col gap-2">
    <span class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider">
      Live
    </span>
    <a
      href="https://qompyl.com"
      target="_blank"
      rel="noopener noreferrer"
      class="font-bold text-[color:var(--accent-1)] hover:text-[color:var(--accent-2)] transition-colors inline-flex items-center gap-1.5 group"
    >
      qompyl.com
      <Icon
        name="lucide:arrow-up-right"
        class="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
      />
    </a>
  </div>
</div>
        </section>
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
  title: "Qompyl — Investor-Ready Fintech Website in 4 Weeks | Case Study",
  description:
    "How I designed an institutional-grade trading platform website for a Pre-Series A fintech — investor trust, trader clarity, and IP protection. Shipped in 4 weeks with GA4 + Clarity tracking.",
  keywords: [
    "fintech web design",
    "investor-ready website case study",
    "Pre-Series A design",
    "trading platform UX",
    "Webflow fintech",
    "IP-safe product design",
    "4-week fintech launch",
  ],
  ogType: "article",
  ogImage: "https://mamdouhghaneemy.com/images/qompyl-website/qompyl-cover.png",
  article: {
    publishedTime: "2026-04-15T00:00:00Z",
    modifiedTime: "2026-05-30T00:00:00Z",
    section: "Case Study",
    tags: ["Fintech", "Webflow", "Product Design", "Investor Relations"],
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Qompyl", url: "/projects/qompyl-case-study" },
  ],
  faqItems: [
    {
      question: "How long did the Qompyl website take?",
      answer:
        "Four weeks from kickoff to a live, investor-ready site — including research, wireframes, design system, Webflow build, and analytics setup.",
    },
    {
      question: "How was IP protected during the design?",
      answer:
        "Abstract visuals (network nodes, data flow) replaced code snippets and algorithm diagrams. Only inputs and outputs are shown, never the internal logic.",
    },
    {
      question: "What tracking stack was used?",
      answer:
        "GTM + GA4 + Microsoft Clarity were shipped before launch, with custom events for lead generation, scroll depth, and investor engagement.",
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
  { id: "gallery", label: "Gallery" },
  { id: "metrics", label: "Metrics" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
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

const trustSteps = [
  { time: '0s',  label: 'Landing', detail: 'Institutional tone. She doesn\'t click away.' },
  { time: '8s',  label: 'Team credibility', detail: 'Verified founders with LinkedIn proof.' },
  { time: '18s', label: 'Product depth', detail: 'Backtest engine. 10+ years of data.' },
  { time: '32s', label: 'Traction signal', detail: 'Live numbers, not promises.' },
  { time: '45s', label: 'Decision', detail: 'Calendar opens. She books.' },
]
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
