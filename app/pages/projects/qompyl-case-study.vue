<template>
  <div
    class="page-wrapper bg-[color:var(--page-bg-1)] text-[color:var(--ink)] relative"
  >
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

            <!-- ✅ UPDATED: Hero supporting copy -->
            <p
              class="text-lg md:text-xl text-[color:var(--ink-soft)] max-w-3xl leading-relaxed"
            >
              How I redesigned Qompyl's digital presence ahead of investor
              outreach and market launch — balancing trader clarity, company
              credibility and protection of proprietary product concepts on an
              aggressive timeline.
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
                  >Investor-ready launch</span
                >
              </div>
              <div class="flex flex-col gap-2">
                <span
                  class="text-[color:var(--ink-soft)] text-xs uppercase font-bold tracking-wider"
                >
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
                <!-- ✅ UPDATED -->
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  Qompyl was preparing for investor outreach and a broader
                  market introduction, but its existing website no longer
                  reflected the sophistication of the product or the company
                  behind it. The team needed a significantly stronger digital
                  presence — and needed it in approximately four weeks.
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
                <!-- ✅ UPDATED -->
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  Trader-first, investor-reassuring. The site used layered
                  content, simplified product storytelling, selective product
                  visuals and a credibility-first hierarchy to serve prospective
                  users, investors and partners without overexposing proprietary
                  concepts.
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
                <!-- ✅ UPDATED -->
                <p class="text-[color:var(--ink-soft)] text-sm leading-relaxed">
                  A five-page Webflow site launched on schedule, giving Qompyl a
                  polished public presence aligned with investor outreach,
                  social launch and early-access acquisition. Investor feedback
                  specifically commented on the site's polish during due
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

          <!-- First-impression challenge (was: one metric that mattered) -->
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
              The first-impression challenge
            </h3>
            <!-- ✅ UPDATED: Reframe from "45-second metric" to "first-impression questions" -->
            <p
              class="text-base text-[color:var(--ink-soft)] leading-relaxed mb-4"
            >
              Qompyl needed to answer several questions almost immediately: What
              does the company do? Who is behind it? Does the product feel
              credible and differentiated? And is there enough here to warrant a
              deeper conversation?
            </p>
            <p class="font-bold text-[color:var(--accent-text)]">
              Everything else — the visual system, copy hierarchy, product
              storytelling and interaction design — supported those
              first-impression goals.
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
                  <!-- ✅ UPDATED: Remove age -->
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    Self-directed · Retail & pro-am
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
                  <!-- ✅ UPDATED -->
                  <ul class="text-xs text-[color:var(--ink-soft)] space-y-2">
                    <li>• Juggling multiple disconnected tools</li>
                    <li>
                      • Limited access to sophisticated strategy-building and
                      testing workflows
                    </li>
                    <li>
                      • Difficulty translating trading ideas into repeatable
                      rules
                    </li>
                  </ul>
                </div>
                <div
                  class="bg-[color:var(--input-bg)] rounded-[16px] p-4 border border-[color:var(--card-border)]"
                >
                  <div class="text-xs font-bold text-[#33cc95] mb-2">Gains</div>
                  <!-- ✅ UPDATED -->
                  <ul class="text-xs text-[color:var(--ink-soft)] space-y-2">
                    <li>• A more unified trading workflow</li>
                    <li>• Backtesting and strategy-building capabilities</li>
                    <li>• Greater structure and consistency in execution</li>
                  </ul>
                </div>
              </div>
              <div
                class="text-center text-sm font-medium text-[color:var(--ink-soft)] italic"
              >
                "Clarity over noise. Confidence over chance."
              </div>
            </div>

            <!-- ✅ UPDATED: Secondary audience reframed from "Sarah — the investor" -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                class="absolute -top-3 left-8 bg-[color:var(--input-bg)] text-[color:var(--ink-soft)] border border-[color:var(--card-border)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              >
                Secondary audience
              </div>
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center font-bold text-lg"
                >
                  PI
                </div>
                <div>
                  <div class="font-bold text-lg text-[color:var(--ink)]">
                    The prospective investor
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    Investor · Advisor · Partner
                  </div>
                </div>
              </div>
              <p
                class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-4"
              >
                Investors and advisors approaching Qompyl needed to quickly
                understand the company, product proposition, team and market
                ambition without having to navigate highly technical product
                detail.
              </p>
              <div class="pt-4 border-t border-[color:var(--card-border)]">
                <div
                  class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-2"
                >
                  Needs
                </div>
                <ul class="text-xs text-[color:var(--ink-soft)] space-y-1.5">
                  <li>• Clear company positioning</li>
                  <li>• Credible leadership and team presentation</li>
                  <li>• Understandable product differentiation</li>
                  <li>• Evidence of product maturity</li>
                  <li>• A clear path to deeper engagement</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Two audiences callout — ✅ UPDATED -->
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
                >Two audiences, one experience:</strong
              >
              the trader needed clarity and relevance; the investor needed
              confidence in the company behind the product — see
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
  class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 flex flex-col h-full"
  data-aos="fade-up"
>
  <!-- Header -->
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
      <div class="text-sm font-semibold text-[color:var(--ink-soft)]">
        Fintech · Trading technology
      </div>
    </div>
  </div>

  <!-- Metadata -->
  <div class="space-y-4 text-sm">
    <div class="flex justify-between items-center">
      <span class="text-[color:var(--ink-soft)]">Stage</span>
      <span
        class="font-bold text-[color:var(--ink)] bg-[color:var(--input-bg)] px-3 py-1 rounded-full border border-[color:var(--card-border)]"
        >Early-stage fintech</span
      >
    </div>
    <div class="flex justify-between items-center">
      <span class="text-[color:var(--ink-soft)]">Team</span>
      <span class="font-bold text-[color:var(--ink)]"
        >Founders + core team</span
      >
    </div>
    <div class="flex justify-between items-center">
      <span class="text-[color:var(--ink-soft)]">Location</span>
      <span class="font-bold text-[color:var(--ink)]">Ohio, USA</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-[color:var(--ink-soft)]">Timeline</span>
      <span class="font-bold text-[color:var(--ink)]"
        >4 weeks end-to-end</span
      >
    </div>
  </div>

  <!-- Live link (يلتصق بالأسفل) -->
  <div class="mt-auto pt-8">
    <a
      href="https://qompyl.com"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--accent-1)] hover:text-[color:var(--accent-2)] transition-colors group"
    >
      <span
        class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse shadow-[0_0_0_4px_rgba(51,204,149,0.18)]"
      ></span>
      Live at qompyl.com
      <Icon
        name="lucide:arrow-up-right"
        class="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
      />
    </a>
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
              <!-- ✅ UPDATED -->
              <ul class="space-y-4 text-sm font-medium text-white/90">
                <li class="flex items-start gap-3">
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 mt-0.5 shrink-0"
                  />
                  Qompyl's public presence needed to catch up with the
                  sophistication of the product and the ambitions of the
                  company.
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 mt-0.5 shrink-0"
                  />
                  Investor outreach raised the standard for credibility, clarity
                  and polish.
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 mt-0.5 shrink-0"
                  />
                  The website also needed to support Qompyl's broader market
                  introduction, social launch and early-access acquisition
                  efforts.
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 mt-0.5 shrink-0"
                  />
                  Because the product was still evolving, the team needed to
                  communicate its value without overexposing proprietary product
                  concepts.
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
                <!-- ✅ UPDATED: Swap Tyler quote for Katie quote -->
                <p
                  class="text-2xl md:text-3xl font-light leading-snug text-[color:var(--ink)] pl-4 italic relative z-10"
                >
                  "We needed the website to reflect the sophistication of what
                  we were building while making the product understandable to
                  prospective users and credible to investors — without
                  revealing more of the product than we were ready to share
                  publicly."
                </p>
                <div class="mt-8 pl-4 flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center font-bold text-sm"
                  >
                    KM
                  </div>
                  <div class="text-sm text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] block"
                      >Katie Milburn, MBA</span
                    >
                    Qompyl
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
                  <!-- ✅ UPDATED: All 3 pain points -->
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5"
                      >01</span
                    >
                    <span
                      ><strong class="text-[color:var(--ink)]"
                        >Credibility gap</strong
                      >
                      — the old site didn't reflect the sophistication of the
                      product or the company behind it.</span
                    >
                  </li>
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5"
                      >02</span
                    >
                    <span
                      ><strong class="text-[color:var(--ink)]"
                        >Multiple audiences</strong
                      >
                      — prospective traders, investors and partners arrived with
                      different questions. The content hierarchy needed to serve
                      all three without becoming diluted or overly
                      technical.</span
                    >
                  </li>
                  <li class="flex gap-3 text-[color:var(--ink-soft)]">
                    <span class="font-bold text-[color:var(--ink)] mt-0.5"
                      >03</span
                    >
                    <span
                      ><strong class="text-[color:var(--ink)]"
                        >Product/IP sensitivity</strong
                      >
                      — Qompyl needed to demonstrate how the product worked and
                      why it was differentiated while remaining selective about
                      what aspects of its underlying logic and architecture were
                      shown publicly.</span
                    >
                  </li>
                </ul>
              </div>
              <div>
                <!-- ✅ UPDATED: "The market gap" → "The opportunity" -->
                <h3
                  class="text-xl font-bold text-[color:var(--accent-2)] mb-6 flex items-center gap-2"
                >
                  <Icon name="lucide:search" class="w-5 h-5" /> The opportunity
                </h3>
                <p class="text-[color:var(--ink-soft)] leading-relaxed mb-6">
                  Qompyl needed to avoid two common extremes: a technically
                  dense presentation that overwhelmed prospective users, and a
                  generic SaaS presentation that failed to communicate the
                  sophistication of the product.
                </p>
                <p class="text-[color:var(--ink-soft)] opacity-70 text-sm">
                  The opportunity was to create a site that felt credible,
                  modern and understandable from the first interaction.
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
          <!-- ✅ UPDATED: Remove specific day totals -->
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            Five overlapping stages across approximately four weeks.
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
              <!-- ✅ UPDATED: Remove "5 days" -->
              <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
                Strategic brief, audience alignment and IP guardrails.
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
                Low- and mid-fidelity wireframes across all five pages.
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
                Visual design and component system.
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
                Responsive build, CMS and QA.
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
                GA4, Microsoft Clarity, testing and launch.
              </p>
            </div>
          </div>

          <!-- 4-Week Clock — ✅ UPDATED descriptions -->
          <div
            class="mt-12 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10"
            data-aos="fade-up"
          >
            <div
              class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-8"
            >
              How the four weeks broke down
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
                  Research, stakeholder alignment, audience priorities, IP
                  guardrails and low-fidelity wireframes.
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
                  Mid-fidelity to high-fidelity design and visual system
                  development.
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
                  Webflow build, responsive implementation and CMS setup.
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
                  Analytics, UAT, revisions and launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= 7. PRINCIPLES (was Insights) ================= -->
        <section
          id="insights"
          class="py-16 max-w-5xl mx-auto border-t border-[color:var(--card-border)]"
        >
          <!-- ✅ UPDATED: Heading and framing -->
          <h2
            class="text-3xl font-extrabold text-[color:var(--ink)] mb-4"
            data-aos="fade-up"
          >
            Three principles that shaped the direction
          </h2>
          <p
            class="text-lg text-[color:var(--ink-soft)] mb-12"
            data-aos="fade-up"
          >
            These principles guided every design decision from kickoff to
            launch.
          </p>
          <div class="grid md:grid-cols-3 gap-6 items-stretch">
  <!-- ═══ Principle 01 ═══ -->
  <div
    class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors h-full"
    data-aos="fade-up"
  >
    <div
      class="w-8 h-8 rounded-lg bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center mb-4 font-mono text-sm font-bold"
    >
      01
    </div>
    <h4 class="text-base font-bold text-[color:var(--ink)] mb-3">
      Credibility has to be immediate
    </h4>
    <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed flex-grow">
      Visitors should not have to dig through the site to understand what
      Qompyl is or whether the company is serious.
    </p>
    <!-- ✅ NEW: Design Response -->
    <div class="mt-4 pt-4 border-t border-[color:var(--card-border)]">
      <p
        class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1"
      >
        Design response
      </p>
      <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
        Hero positioning, team presence and product depth surfaced above
        the fold — credibility signals visible without a single scroll.
      </p>
    </div>
  </div>

  <!-- ═══ Principle 02 ═══ -->
  <div
    class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors h-full"
    data-aos="fade-up"
    data-aos-delay="50"
  >
    <div
      class="w-8 h-8 rounded-lg bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center mb-4 font-mono text-sm font-bold"
    >
      02
    </div>
    <h4 class="text-base font-bold text-[color:var(--ink)] mb-3">
      Complexity needs progressive disclosure
    </h4>
    <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed flex-grow">
      The product is sophisticated, but the first interaction should not
      require understanding the entire system.
    </p>
    <div class="mt-4 pt-4 border-t border-[color:var(--card-border)]">
      <p
        class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1"
      >
        Design response
      </p>
      <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
        Layered content, simplified product explanations and deeper
        information for visitors who wanted it.
      </p>
    </div>
  </div>

  <!-- ═══ Principle 03 ═══ -->
  <div
    class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 flex flex-col hover:border-[color:var(--accent-1)] transition-colors h-full"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div
      class="w-8 h-8 rounded-lg bg-[color:var(--accent-1)]/10 text-[color:var(--accent-1)] flex items-center justify-center mb-4 font-mono text-sm font-bold"
    >
      03
    </div>
    <h4 class="text-base font-bold text-[color:var(--ink)] mb-3">
      Measurement needed to start at launch
    </h4>
    <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed flex-grow">
      The redesign needed a feedback loop once real visitors began
      interacting with it.
    </p>
    <div class="mt-4 pt-4 border-t border-[color:var(--card-border)]">
      <p
        class="text-xs font-bold text-[color:var(--accent-text)] uppercase tracking-wide mb-1"
      >
        Design response
      </p>
      <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
        GA4 and Microsoft Clarity incorporated at launch.
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
            Trader-first, investor-reassuring — built around a deliberately
            layered audience hierarchy.
          </p>

         <div
  class="grid lg:grid-cols-2 gap-12 items-stretch"
  data-aos="fade-up"
>
  <!-- ═══════════════════════════════════════════════════════
       LEFT: Designed for a fast credibility scan
       ═══════════════════════════════════════════════════════ -->
  <div
    class="bg-gradient-to-br from-[color:var(--page-bg-1)] to-[color:var(--input-bg)] rounded-[32px] border border-[color:var(--card-border)] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative overflow-hidden group h-full flex flex-col"
  >
    <div
      class="absolute -right-10 -top-10 w-40 h-40 bg-[color:var(--accent-1)]/20 blur-3xl rounded-full group-hover:bg-[color:var(--accent-1)]/30 transition-all duration-700"
    ></div>

    <!-- Header -->
    <div class="relative z-10 mb-6">
      <div
        class="text-[10px] font-bold text-[color:var(--ink-soft)] uppercase tracking-[0.2em] mb-3"
      >
        Designed for a fast credibility scan
      </div>
      <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
        The content hierarchy was intentionally designed so a time-constrained
        visitor could understand the company at a high level before choosing
        where to go deeper.
      </p>
    </div>

    <!-- Main Card -->
    <div
      class="bg-[color:var(--card-bg)] rounded-[24px] p-6 border border-[color:var(--card-border)] shadow-sm flex-1 flex flex-col"
    >
      <!-- Card Header -->
      <div
        class="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--card-border)]"
      >
        <div class="flex items-center gap-2">
          <span
            class="w-2 h-2 rounded-full bg-[#33cc95] animate-pulse"
          ></span>
          <span
            class="text-xs font-bold text-[color:var(--ink)] uppercase tracking-wider"
            >Intended visitor path</span
          >
        </div>
        <span class="text-[10px] font-mono text-[color:var(--ink-soft)]">
          5 checkpoints
        </span>
      </div>

      <!-- Timeline -->
      <div class="relative pl-1 flex-1">
        <div
          class="absolute left-[13px] top-3 bottom-3 w-px bg-gradient-to-b from-[color:var(--accent-1)]/60 via-[color:var(--accent-1)]/30 to-[#33cc95]/60"
        ></div>

        <div class="flex flex-col gap-5">
          <div
            v-for="step in trustSteps"
            :key="step.time"
            class="flex gap-4 items-start relative"
          >
            <div
              class="w-7 h-7 rounded-full bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)] flex items-center justify-center shrink-0 relative z-10"
            >
              <span
                class="text-[9px] font-black text-[color:var(--accent-1)] font-mono"
                >{{ step.time }}</span
              >
            </div>
            <div class="pt-0.5 flex-1">
              <div
                class="text-sm font-bold text-[color:var(--ink)] leading-tight"
              >
                {{ step.label }}
              </div>
              <div
                class="text-[11px] text-[color:var(--ink-soft)] leading-snug mt-0.5"
              >
                {{ step.detail }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ✅ NEW: At a glance block — يملأ الفراغ بمحتوى ذي قيمة -->
      <div class="mt-6 pt-6 border-t border-dashed border-[color:var(--card-border)]">
        <div
          class="text-[10px] font-bold text-[color:var(--ink-soft)] uppercase tracking-widest mb-3"
        >
          The scan, at a glance
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div class="text-center">
            <div class="text-xl font-black text-[color:var(--ink)] tabular-nums">
              &lt;45s
            </div>
            <div class="text-[10px] text-[color:var(--ink-soft)] font-medium leading-tight mt-0.5">
              Target scan
            </div>
          </div>
          <div class="text-center border-x border-[color:var(--card-border)]">
            <div class="text-xl font-black text-[color:var(--ink)] tabular-nums">
              5
            </div>
            <div class="text-[10px] text-[color:var(--ink-soft)] font-medium leading-tight mt-0.5">
              Layers
            </div>
          </div>
          <div class="text-center">
            <div class="text-xl font-black text-[color:var(--accent-1)] tabular-nums">
              3
            </div>
            <div class="text-[10px] text-[color:var(--ink-soft)] font-medium leading-tight mt-0.5">
              Audiences
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════
       RIGHT: Strategy items (unchanged)
       ═══════════════════════════════════════════════════════ -->
  <div class="flex flex-col">
    <div class="flex flex-col gap-8 mb-8">
      <div class="flex gap-4">
        <div
          class="w-10 h-10 rounded-xl bg-[color:var(--input-bg)] text-[color:var(--accent-text)] flex items-center justify-center flex-shrink-0"
        >
          <Icon name="lucide:lock" class="w-5 h-5" />
        </div>
        <div>
          <h4 class="text-base font-bold text-[color:var(--ink)] mb-1">
            IP protection
          </h4>
          <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
            Public-facing visuals focused on user-facing inputs, workflows and
            outcomes rather than detailed representations of proprietary
            product architecture.
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
          <h4 class="text-base font-bold text-[color:var(--ink)] mb-1">
            V1 vs. Vision separation
          </h4>
          <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
            Available capabilities and future roadmap items were visually
            differentiated so Qompyl could communicate product ambition
            without blurring what was live versus still in development.
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
          <h4 class="text-base font-bold text-[color:var(--ink)] mb-1">
            Trader-first language
          </h4>
          <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">
            Complex product concepts were translated into clear, accessible
            language focused on what the trader could do rather than how the
            underlying system was built.
          </p>
        </div>
      </div>
    </div>

    <div
      class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 mt-auto"
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
          Investors and traders read the same page differently. The hierarchy
          needed to work for both.
        </li>
        <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
          <Icon
            name="lucide:check"
            class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
          />
          The design had to communicate sophistication without unnecessary
          technical exposure.
        </li>
        <li class="flex gap-3 text-sm text-[color:var(--ink-soft)]">
          <Icon
            name="lucide:check"
            class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
          />
          Roadmap items needed to create anticipation without implying they
          were already available.
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
              <!-- ✅ UPDATED -->
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                A reusable visual system helped keep color, typography and
                spacing consistent across the site.
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
              <!-- ✅ UPDATED -->
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Reusable components made future page creation and content
                updates faster and more consistent.
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
              <!-- ✅ UPDATED: WCAG → Accessibility considerations -->
              <h4 class="font-bold text-[color:var(--ink)] mb-1 text-sm">
                Accessibility considerations
              </h4>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Contrast, semantic structure, accessible labeling and keyboard
                usability were considered throughout the build.
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
              <!-- ✅ UPDATED -->
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
                Team, blog and other repeatable content types were structured
                for easier self-service updates.
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
                  alt="Qompyl product page — low-fidelity wireframe"
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
                  alt="Qompyl early access page — low-fidelity wireframe"
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
                  alt="Qompyl product page — mid-fidelity wireframe"
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
                  alt="Qompyl early access — mid-fidelity wireframe"
                  class="w-full h-auto object-cover rounded-2xl"
                  sizes="sm:100vw md:100vw lg:1200px"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
          </div>

          <!-- Design System Showcase -->
          <div class="mb-16 space-y-8" data-aos="fade-up">
            <!-- A. COLOR SYSTEM -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8"
            >
              <div
                class="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--card-border)]"
              >
                <div>
                  <div
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1"
                  >
                    01 · Foundation
                  </div>
                  <h4 class="text-lg font-bold text-[color:var(--ink)]">
                    Color System
                  </h4>
                </div>
                <span class="text-[10px] font-mono text-[color:var(--ink-soft)]"
                  >7 families · 8 variants each</span
                >
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div
                  class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]"
                >
                  <div
                    class="h-8 rounded-md mb-2"
                    style="background: #00d9cf"
                  ></div>
                  <div
                    class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Teal Normal
                  </div>
                  <div class="text-[10px] font-mono text-[color:var(--ink)]">
                    #00D9CF
                  </div>
                </div>
                <div
                  class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]"
                >
                  <div
                    class="h-8 rounded-md mb-2"
                    style="background: #0690f9"
                  ></div>
                  <div
                    class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Blue Normal
                  </div>
                  <div class="text-[10px] font-mono text-[color:var(--ink)]">
                    #0690F9
                  </div>
                </div>
                <div
                  class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]"
                >
                  <div
                    class="h-8 rounded-md mb-2"
                    style="background: #21c45e"
                  ></div>
                  <div
                    class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Green Success
                  </div>
                  <div class="text-[10px] font-mono text-[color:var(--ink)]">
                    #21C45E
                  </div>
                </div>
                <div
                  class="p-3 rounded-xl border border-[color:var(--card-border)] bg-[color:var(--input-bg)]"
                >
                  <div
                    class="h-8 rounded-md mb-2"
                    style="background: #ffcc00"
                  ></div>
                  <div
                    class="text-[10px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Yellow Warn
                  </div>
                  <div class="text-[10px] font-mono text-[color:var(--ink)]">
                    #FFCC00
                  </div>
                </div>
              </div>

              <div
                class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-3"
              >
                Teal scale — 8 variants
              </div>
              <div class="grid grid-cols-8 gap-1.5">
                <div
                  class="aspect-square rounded-md"
                  style="background: #e6fbfa"
                  title="Light #E6FBFA"
                ></div>
                <div
                  class="aspect-square rounded-md"
                  style="background: #d9f9f8"
                  title="Light:hover #D9F9F8"
                ></div>
                <div
                  class="aspect-square rounded-md"
                  style="background: #b0f3f0"
                  title="Light:active #B0F3F0"
                ></div>
                <div
                  class="aspect-square rounded-md ring-2 ring-[color:var(--accent-1)] ring-offset-2 ring-offset-[color:var(--card-bg)]"
                  style="background: #00d9cf"
                  title="Normal #00D9CF"
                ></div>
                <div
                  class="aspect-square rounded-md"
                  style="background: #00c3ba"
                  title="Normal:hover #00C3BA"
                ></div>
                <div
                  class="aspect-square rounded-md"
                  style="background: #00aea6"
                  title="Normal:active #00AEA6"
                ></div>
                <div
                  class="aspect-square rounded-md"
                  style="background: #00a39b"
                  title="Dark #00A39B"
                ></div>
                <div
                  class="aspect-square rounded-md"
                  style="background: #004c48"
                  title="Darker #004C48"
                ></div>
              </div>
            </div>

            <!-- B. TYPOGRAPHY -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8"
            >
              <div
                class="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--card-border)]"
              >
                <div>
                  <div
                    class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1"
                  >
                    02 · Foundation
                  </div>
                  <h4 class="text-lg font-bold text-[color:var(--ink)]">
                    Typography
                  </h4>
                </div>
                <div class="text-right">
                  <div
                    class="text-[10px] font-mono text-[color:var(--ink-soft)]"
                  >
                    Manrope · Inter
                  </div>
                  <div
                    class="text-[10px] font-mono text-[color:var(--ink-soft)]"
                  >
                    7 sizes · 9 weights
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div
                  class="flex items-baseline gap-6 pb-3 border-b border-dashed border-[color:var(--card-border)]"
                >
                  <span
                    class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24"
                    >Title-1 · 72/88</span
                  >
                  <span
                    class="text-5xl font-extrabold tracking-tight text-[color:var(--ink)]"
                    style="font-family: 'Manrope', sans-serif"
                    >Institutional</span
                  >
                </div>
                <div
                  class="flex items-baseline gap-6 pb-3 border-b border-dashed border-[color:var(--card-border)]"
                >
                  <span
                    class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24"
                    >H2 · 48/58</span
                  >
                  <span
                    class="text-3xl font-extrabold tracking-tight text-[color:var(--ink)]"
                    style="font-family: 'Manrope', sans-serif"
                    >Trust at speed</span
                  >
                </div>
                <div
                  class="flex items-baseline gap-6 pb-3 border-b border-dashed border-[color:var(--card-border)]"
                >
                  <span
                    class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24"
                    >Body-1 · 18/28</span
                  >
                  <span class="text-lg text-[color:var(--ink-soft)]"
                    >Backtest engine with 10+ years of historical market
                    data.</span
                  >
                </div>
                <div class="flex items-baseline gap-6">
                  <span
                    class="text-[10px] font-mono text-[color:var(--ink-soft)] shrink-0 w-24"
                    >Label-2 · 14/20</span
                  >
                  <span
                    class="text-sm font-semibold tracking-wide text-[color:var(--accent-text)] uppercase"
                    >Institutional grade</span
                  >
                </div>
              </div>
            </div>

            <!-- C. SPACING & RADIUS -->
            <div class="grid md:grid-cols-2 gap-6">
              <div
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8"
              >
                <div
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1"
                >
                  03 · Foundation
                </div>
                <h4 class="text-lg font-bold text-[color:var(--ink)] mb-6">
                  Spacing scale
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="s in [4, 8, 12, 16, 24, 32, 48]"
                    :key="s"
                    class="flex items-center gap-3"
                  >
                    <span
                      class="text-[10px] font-mono text-[color:var(--ink-soft)] w-8 text-right"
                      >{{ s }}</span
                    >
                    <div
                      class="h-2 rounded-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)]"
                      :style="{ width: `${s * 3}px` }"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8"
              >
                <div
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] mb-1"
                >
                  04 · Foundation
                </div>
                <h4 class="text-lg font-bold text-[color:var(--ink)] mb-6">
                  Radius scale
                </h4>
                <div class="grid grid-cols-4 gap-3">
                  <div
                    v-for="r in [
                      { n: 'sm', v: 4 },
                      { n: 'md', v: 8 },
                      { n: 'lg', v: 12 },
                      { n: 'xl', v: 16 },
                      { n: '2xl', v: 20 },
                      { n: '3xl', v: 24 },
                      { n: '4xl', v: 32 },
                      { n: 'full', v: 999 },
                    ]"
                    :key="r.n"
                    class="aspect-square bg-[color:var(--input-bg)] border border-[color:var(--card-border)] flex items-end justify-center pb-1"
                    :style="{ borderRadius: `${r.v}px` }"
                  >
                    <span
                      class="text-[9px] font-mono text-[color:var(--ink-soft)]"
                      >{{ r.n }}</span
                    >
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
                  alt="Qompyl product page — high-fidelity UI"
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
                  alt="Qompyl early access — high-fidelity UI"
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
            the tracking stack reported in the first 30 days.
          </p>

          <!-- ✅ UPDATED: Removed industry benchmark comparisons -->
          <div
            class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            data-aos="fade-up"
          >
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center"
            >
              <div
                class="text-4xl font-black text-[color:var(--ink)] mb-1 tabular-nums"
              >
                52%
              </div>
              <div
                class="text-xs font-bold text-[color:var(--ink-soft)] leading-snug"
              >
                Avg. scroll depth
              </div>
            </div>

            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center"
            >
              <div class="text-4xl font-black text-[color:var(--ink)] mb-1">
                0%
              </div>
              <div class="text-xs font-bold text-[color:var(--ink-soft)]">
                Rage clicks
                <span class="text-[color:var(--ink)]"
                  >— across 634 sessions</span
                >
              </div>
            </div>

            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center"
            >
              <div class="text-4xl font-black text-[color:var(--ink)] mb-1">
                0.16%
              </div>
              <div class="text-xs font-bold text-[color:var(--ink-soft)]">
                Dead clicks
                <span class="text-[color:var(--ink)]"
                  >— 1 session out of 634</span
                >
              </div>
            </div>

            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 text-center"
            >
              <div class="text-4xl font-black text-[color:var(--ink)] mb-1">
                1.6 <span class="text-2xl">min</span>
              </div>
              <div class="text-xs font-bold text-[color:var(--ink-soft)]">
                Avg. active time spent
                <span class="text-[color:var(--ink)]">(per session)</span>
              </div>
            </div>
          </div>

          <!-- Caught on Camera -->
          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-10"
            data-aos="fade-up"
          >
            <div
              class="text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] mb-4 flex items-center gap-2"
            >
              <Icon
                name="lucide:video"
                class="w-4 h-4 text-[color:var(--accent-1)]"
              />
              Caught on Camera — Microsoft Clarity
            </div>

            <p
              class="text-lg md:text-xl font-medium leading-relaxed text-[color:var(--ink)] mb-6 max-w-3xl"
            >
              Recordings didn't show where the site failed. They showed
              <strong class="text-[color:var(--ink)]"
                >where trust had already been earned</strong
              >. Visitors clicked into team bios, explored job listings,
              searched for security details and went deeper into the company.
            </p>

            <p
              class="text-lg md:text-xl font-medium leading-relaxed text-[color:var(--ink)] mb-8 max-w-3xl"
            >
              The placeholders they found, the incomplete destinations and the
              links that stopped them weren't failures of the design system —
              they were content and implementation gaps that surfaced after
              launch. The site built the trust. The team just had to fill the
              room.
            </p>

            <div class="flex flex-wrap gap-3 text-sm">
              <span
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-4 py-2 text-[color:var(--ink-soft)] flex items-center gap-2"
              >
                <Icon name="lucide:mouse-pointer-click" class="w-4 h-4" />
                Visitors went deeper, not away
              </span>
              <span
                class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-full px-4 py-2 text-[color:var(--ink-soft)] flex items-center gap-2"
              >
                <Icon name="lucide:layers" class="w-4 h-4" />
                Content layer — not design layer
              </span>
              <span
                class="bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/20 rounded-full px-4 py-2 text-[color:var(--accent-text)] font-semibold flex items-center gap-2"
              >
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
                The best problem a designer can have.
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
            Four measurements. Four different truths — speed, quality, returning
            engagement, and depth.
          </p>

          <div
            class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            data-aos="fade-up"
          >
            <!-- Card 1 — SPEED -->
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
                <span class="text-[color:var(--ink)] font-semibold"
                  >Speed.</span
                >
                Kickoff to live site. Zero missed checkpoints.
              </div>
            </div>

            <!-- Card 2 — QUALITY -->
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
                <span class="text-[color:var(--ink)] font-semibold"
                  >Quality.</span
                >
                Structural revisions after delivery.
              </div>
            </div>

            <!-- ✅ Card 3 — RETURNING ENGAGEMENT (was "Trust") -->
            <div
              class="bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)] rounded-[24px] p-6 relative"
            >
              <div
                class="absolute -top-2.5 left-6 bg-[color:var(--accent-1)] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
              >
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
                <span class="text-[color:var(--ink)] font-semibold"
                  >Returning engagement.</span
                >
                Returning visitors represented 26.66% of sessions during the
                first 30 days.
              </div>
            </div>

            <!-- Card 4 — DEPTH -->
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
                <span class="text-[color:var(--ink)] font-semibold"
                  >Depth.</span
                >
                2.10 pages per session — visitors stayed to read, not to skim.
              </div>
            </div>
          </div>

          <!-- Footnote -->
          <div
            class="mb-12 pt-6 border-t border-dashed border-[color:var(--card-border)]"
            data-aos="fade-up"
          >
            <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">
              <strong class="text-[color:var(--ink)] font-semibold"
                >Sources:</strong
              >
              All metrics verified via Microsoft Clarity (30-day window
              post-launch). Returning visitors = 169 of 634 sessions · Pages per
              session = median, not mean · Revision rounds = Figma file history.
            </p>
          </div>

          <!-- ✅ NEW: Investor Feedback section -->
          <div
            class="mb-12 bg-gradient-to-br from-[color:var(--accent-1)]/10 to-[color:var(--accent-2)]/10 border border-[color:var(--accent-1)]/30 rounded-[32px] p-8 md:p-10"
            data-aos="fade-up"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-full bg-[color:var(--accent-1)] text-white flex items-center justify-center flex-shrink-0"
              >
                <Icon name="lucide:sparkles" class="w-5 h-5" />
              </div>
              <div>
                <div
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
                >
                  The signal we were looking for
                </div>
                <h3 class="text-lg font-bold text-[color:var(--ink)]">
                  Investor feedback
                </h3>
              </div>
            </div>
            <p
              class="text-lg md:text-xl font-medium leading-relaxed text-[color:var(--ink)] max-w-3xl"
            >
              Investor feedback specifically commented on the site's polish
              during due diligence — a meaningful indication that Qompyl's
              external presentation was aligning more closely with the
              seriousness of the company and product.
            </p>
          </div>

          <!-- ✅ UPDATED: Final testimonial — Katie's approved version -->
          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[32px] p-10 relative overflow-hidden"
            data-aos="fade-up"
          >
            <Icon
              name="lucide:quote"
              class="absolute -top-4 -left-4 w-24 h-24 text-[color:var(--card-border)] opacity-50 rotate-180"
            />
            <blockquote
              class="text-lg font-medium text-[color:var(--ink)] leading-relaxed mb-8 relative z-10 italic"
            >
              "Mamdouh brought much more than design expertise to our project.
              He took the time to understand our business, product and team,
              helped us identify what we were missing, and guided us through how
              to tell our story more effectively. When challenges arose, he
              consistently came back with thoughtful options and helped us work
              toward the best outcome. He was professional, responsive,
              collaborative and an absolute pleasure to work with — and I would
              work with him again and again."
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
                <div class="text-xs text-[color:var(--ink-soft)]">Qompyl</div>
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
            A case study without confessions is an advertisement. Three things
            I'd change if I started this project tomorrow.
          </p>

          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-10 md:p-14"
            data-aos="fade-up"
          >
            <div class="grid md:grid-cols-2 gap-12">
              <div>
                <h5
                  class="text-sm font-bold text-[color:var(--ink)] mb-6 flex items-center gap-2"
                >
                  <Icon
                    name="lucide:alert-circle"
                    class="w-4 h-4 text-amber-500"
                  />
                  What I'd do differently
                </h5>
                <ul class="space-y-5 text-sm text-[color:var(--ink-soft)]">
                  <li class="flex gap-3">
                    <span
                      class="font-mono text-xs font-bold text-amber-500/70 mt-0.5 shrink-0"
                      >01</span
                    >
                    <span>
                      <strong class="text-[color:var(--ink)] block mb-1"
                        >Ship content before design.</strong
                      >
                      Clarity recordings caught visitors clicking into empty
                      "Coming soon" placeholders. The design earned their
                      curiosity — the copy wasn't ready to answer it. Next time:
                      final copy locked before the first wireframe.
                    </span>
                  </li>
                  <li class="flex gap-3">
                    <span
                      class="font-mono text-xs font-bold text-amber-500/70 mt-0.5 shrink-0"
                      >02</span
                    >
                    <span>
                      <strong class="text-[color:var(--ink)] block mb-1"
                        >Test stability at mid-fi, not at launch.</strong
                      >
                      Post-launch recordings flagged recurring JS errors on the
                      Team pages. The fix was 20 minutes. The discovery took 20
                      days. Next time: error monitoring wired into the first
                      staging build.
                    </span>
                  </li>
                  <li class="flex gap-3">
                    <span
                      class="font-mono text-xs font-bold text-amber-500/70 mt-0.5 shrink-0"
                      >03</span
                    >
                    <span>
                      <strong class="text-[color:var(--ink)] block mb-1"
                        >Audit mobile conversion earlier.</strong
                      >
                      Most traffic arrived on a phone. Most signups came from
                      desktop. That gap existed for weeks before it was flagged.
                      Next time: mobile funnel instrumented from day one — not
                      retrofitted at week four.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h5
                  class="text-sm font-bold text-[color:var(--ink)] mb-6 flex items-center gap-2"
                >
                  <Icon
                    name="lucide:arrow-right-circle"
                    class="w-4 h-4 text-[color:var(--accent-1)]"
                  />
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

                <blockquote
                  class="mt-8 pt-8 border-t border-[color:var(--card-border)] text-base italic font-medium text-[color:var(--ink)] leading-relaxed"
                >
                  "A four-week deadline doesn't buy perfection. It buys
                  <span class="text-[color:var(--accent-1)] not-italic"
                    >clarity about what to fix next</span
                  >."
                </blockquote>
              </div>
            </div>

            <!-- Deliverables -->
            <div class="mt-12 pt-10 border-t border-[color:var(--card-border)]">
              <div
                class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)] mb-6"
              >
                Deliverables
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  class="flex items-center gap-2 text-sm text-[color:var(--ink)]"
                >
                  <Icon
                    name="lucide:check"
                    class="w-4 h-4 text-[color:var(--accent-1)]"
                  />
                  5 Core Pages
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-[color:var(--ink)]"
                >
                  <Icon
                    name="lucide:check"
                    class="w-4 h-4 text-[color:var(--accent-1)]"
                  />
                  CMS Collections
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-[color:var(--ink)]"
                >
                  <Icon
                    name="lucide:check"
                    class="w-4 h-4 text-[color:var(--accent-1)]"
                  />
                  Full Design System
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-[color:var(--ink)]"
                >
                  <Icon
                    name="lucide:check"
                    class="w-4 h-4 text-[color:var(--accent-1)]"
                  />
                  Analytics Setup (GA4/GTM)
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-[color:var(--ink)]"
                >
                  <Icon
                    name="lucide:check"
                    class="w-4 h-4 text-[color:var(--accent-1)]"
                  />
                  Responsive Mobile
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-[color:var(--ink)]"
                >
                  <Icon
                    name="lucide:check"
                    class="w-4 h-4 text-[color:var(--accent-1)]"
                  />
                  Client Hand-off
                </div>
              </div>
            </div>

            <!-- Accessibility -->
            <div class="mt-12 pt-10 border-t border-[color:var(--card-border)]">
              <div
                class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)] mb-4"
              >
                Accessibility & design system
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]"
                >
                  Contrast considerations
                </span>
                <span
                  class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]"
                >
                  Design tokens
                </span>
                <span
                  class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]"
                >
                  Re-usable components
                </span>
                <span
                  class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]"
                >
                  Semantic structure
                </span>
                <span
                  class="text-xs bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-3 py-1.5 rounded-full text-[color:var(--ink-soft)]"
                >
                  Keyboard navigation
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
    "How I redesigned Qompyl's digital presence ahead of investor outreach — balancing trader clarity, company credibility and protection of proprietary product concepts. Shipped in 4 weeks.",
  keywords: [
    "fintech web design",
    "investor-ready website case study",
    "early-stage fintech design",
    "trading platform UX",
    "Webflow fintech",
    "IP-safe product design",
    "4-week fintech launch",
  ],
  ogType: "article",
  ogImage: "https://mamdouhghaneemy.com/images/qompyl-website/qompyl-cover.png",
  article: {
    publishedTime: "2026-04-15T00:00:00Z",
    modifiedTime: "2026-09-26T00:00:00Z",
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
        "Approximately four weeks from kickoff to a live, investor-ready site — including research, wireframes, design system, Webflow build, and analytics setup.",
    },
    {
      question: "How was IP protected during the design?",
      answer:
        "Public-facing visuals focused on user-facing inputs, workflows and outcomes rather than detailed representations of proprietary product architecture.",
    },
    {
      question: "What tracking stack was used?",
      answer:
        "GA4 and Microsoft Clarity were incorporated at launch, with custom events for lead generation, scroll depth, and investor engagement.",
    },
  ],
});

const tocLinks = [
  { id: "overview", label: "Overview" },
  { id: "client", label: "The Client" },
  { id: "challenge", label: "The Challenge" },
  { id: "process", label: "Process" },
  { id: "insights", label: "Principles" },
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

// ✅ UPDATED: Reframe from "fictional 45-second scan" to "intended visitor path"
const trustSteps = [
  {
    time: "01",
    label: "Landing",
    detail: "What is Qompyl and who is it for?",
  },
  {
    time: "02",
    label: "Company",
    detail: "Who is behind it?",
  },
  {
    time: "03",
    label: "Product",
    detail: "What does it enable?",
  },
  {
    time: "04",
    label: "Differentiation",
    detail: "Why is it different from existing tools?",
  },
  {
    time: "05",
    label: "Next step",
    detail: "Early Access, contact or deeper exploration.",
  },
];

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
