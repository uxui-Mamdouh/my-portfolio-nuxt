<template>
  <article
    class="bg-[color:var(--page-bg-1)] min-h-screen text-[color:var(--ink)] font-sans relative selection:bg-[color:var(--accent-1)] selection:text-white"
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
              <span class="text-[color:var(--ink-soft)]"
                >Tracking for Designers</span
              >
              <span class="w-1 h-1 rounded-full bg-gray-400"></span>
              <span class="text-[color:var(--accent-1)]">9 Min Read</span>
              <span class="w-1 h-1 rounded-full bg-gray-400"></span>
              <span class="text-[color:var(--ink-soft)]">Oct 2026</span>
            </div>
            <h1
              class="text-[clamp(2.6rem,5.6vw,4.6rem)] font-black tracking-[-0.035em] leading-[1.02] mb-8 text-[color:var(--ink)]"
            >
              GA4 Data API for Designers: Pull Funnel Data Into Your Own
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2"
                >Dashboard.</span
              >
            </h1>
            <p
              class="text-[1.22rem] font-medium text-[color:var(--ink-soft)] leading-[1.55] max-w-[620px] pl-6 border-l-2 border-[color:var(--ink-soft)]/40 mb-10"
            >
              Stop exporting CSVs. Here's the exact Nuxt server route I use to
              pull GA4 funnel data into my own dashboard — with the 5 mistakes
              that cost me days.
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
          <!-- Right: Floating Payoff Card (ANONYMIZED) -->
          <div
            class="lg:col-span-5 relative"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[40px] p-10 md:p-12 min-h-[420px] flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.25)] hover:-translate-y-1.5 transition-[transform,box-shadow,background-color] duration-300 relative overflow-hidden group"
            >
              <div
                class="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(109,94,240,0.1),transparent_70%)] pointer-events-none z-0"
              ></div>
              <div class="relative z-10">
                <span
                  class="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[color:var(--ink-soft)] block mb-5"
                  >The Payoff</span
                >
                <div
                  class="text-[clamp(4.5rem,9vw,7rem)] font-black tracking-[-0.05em] leading-[0.9] mb-3 bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)]"
                >
                  ~90%
                </div>
                <div
                  class="text-[1.35rem] font-extrabold text-[color:var(--ink)] leading-[1.2]"
                >
                  Drop-off detected in a single line.
                </div>
              </div>
              <div
                class="mt-10 pt-7 border-t border-[color:var(--card-border)] relative z-10"
              >
                <p
                  class="text-[0.92rem] text-[color:var(--ink-soft)] leading-[1.65]"
                >
                  One client dashboard — name withheld, figures rounded —
                  exposed a collapse between
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold"
                    >form_start</code
                  >
                  and
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold"
                    >generate_lead</code
                  >
                  that used to be buried across three GA4 reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      src="/images/blog/ga4-data-api-nuxt-funnel-notebook-hero.png"
      alt="Open cream notebook on a light oak desk with hand-drawn GA4 funnel sketch, the 'runReport' API endpoint, 'raw JSON' notes, and 'measure first' motto — the visual blueprint for pulling GA4 data into a Nuxt dashboard."
      title="GA4 Data API: The Measurable Designer's Notebook"
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
      Live dashboard · worst step auto-flagged
    </div>
  </div>
  <figcaption class="sr-only">
    The GA4 Data API blueprint: a Nuxt server route using runReport to pull conversion funnel data, with sessions → leads mapped as a decreasing funnel diagram.
  </figcaption>
</figure>
    <!-- ===================== THE EDITORIAL GRID ===================== -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-[60px] pb-2">
      <div
        class="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-[80px] items-start"
      >
        <!-- ============ LEFT: THE ARTICLE ============ -->
        <article class="xl:col-span-8 max-w-[760px]">
          <div
            class="text-[1.32rem] font-medium leading-[1.6] text-[color:var(--ink)] border-l-2 border-[color:var(--accent-1)] pl-6 mb-12"
            data-aos="fade-up"
          >
            <strong>The 60-second version.</strong> GA4's UI answers the
            questions Google predicted. It will never answer yours. The fix: one
            Nuxt server route (~60 lines) that calls the Data API, shapes a
            funnel, and caches it for an hour.
          </div>
          <!-- 🆕 Confidentiality Note -->
          <div
            class="mb-12 py-5 px-6 border border-dashed border-[color:var(--card-border)] rounded-2xl bg-[color:var(--card-bg)]/50"
            data-aos="fade-up"
          >
            <p
              class="m-0 text-[0.98rem] leading-[1.65] text-[color:var(--ink-soft)]"
            >
              <strong class="text-[color:var(--ink)]"
                >A note on numbers.</strong
              >
              Client names are withheld and figures are rounded throughout. The
              method is the deliverable — everything here runs on
              <em>your</em> property, <em>your</em> events, <em>your</em> data.
            </p>
          </div>
          <h2
            id="why-bother"
            class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)]"
            data-aos="fade-up"
          >
            Why should a designer bother with the GA4 Data API at all?
          </h2>
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            Because the distance between "I designed it" and "I can prove it
            worked" is exactly one API call. GA4's interface is built for
            analysts answering Google's predicted questions; your funnel, your
            events, and your definitions live nowhere in it. When I started
            pulling reports into my own dashboard, design reviews stopped being
            opinion fights and started being arithmetic.
          </p>
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            That shift is the entire reason I now ship analytics with every
            project. A designer who can query their own tracking is a designer
            who never has to say "trust me."
          </p>
          <h2
            id="prerequisites"
            class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)]"
            data-aos="fade-up"
          >
            What do you need before writing a single line of code?
          </h2>
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            Four things, all free: a GA4 property with your custom events
            firing, a Google Cloud project with the Analytics Data API enabled,
            a service account added as a
            <strong class="font-bold text-[color:var(--ink)]">Viewer</strong> on
            the GA4 property, and your property ID (<code
              class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold"
              >properties/123456789</code
            >). That's the whole setup.
          </p>
          <!-- The Callout Box -->
          <div
            class="relative my-11 py-[30px] pr-[34px] pl-[38px] bg-[color:var(--accent-1)]/5 border border-[color:var(--accent-1)]/20 rounded-3xl overflow-hidden"
            data-aos="fade-up"
          >
            <div
              class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--accent-1)] to-[color:var(--accent-2)]"
            ></div>
            <div
              class="flex items-center gap-2.5 font-extrabold text-[1rem] text-[color:var(--accent-text)] mb-2.5"
            >
              <Icon name="lucide:alert-circle" class="w-5 h-5" />
              The missing step
            </div>
            <p class="text-[1rem] text-[color:var(--ink-soft)] m-0">
              The service account must be added inside GA4 (Admin → Property
              Access Management), not just in Google Cloud. Skip it and the API
              returns empty rows with zero errors — the most polite failure mode
              in software.
            </p>
          </div>
          <h2
            id="how-it-works"
            class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)]"
            data-aos="fade-up"
          >
            How does the GA4 Data API actually work?
          </h2>
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            One endpoint does 90% of the work:
            <code
              class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-2 py-0.5 rounded-lg text-[0.82em] font-bold"
              >runReport</code
            >. You POST a request describing dimensions (rows), metrics
            (numbers), and a date range; Google returns a table. Filters narrow
            rows the same way a segment would in the UI — but in JSON,
            versionable, and repeatable.
          </p>
          <!-- Code Snippet -->
          <div
            class="my-10 rounded-[24px] overflow-hidden bg-[#09090b] border border-[#27272a] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]"
            data-aos="fade-up"
          >
            <div
              class="flex items-center justify-between py-3.5 px-6 bg-[#18181b] border-b border-[#27272a]"
            >
              <span
                class="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#71717a]"
                >JSON Payload</span
              >
              <div class="flex gap-2">
                <span class="w-3 h-3 rounded-full bg-[#3f3f46]"></span>
                <span class="w-3 h-3 rounded-full bg-[#3f3f46]"></span>
                <span class="w-3 h-3 rounded-full bg-[#3f3f46]"></span>
              </div>
            </div>
            <pre
              class="m-0 p-8 overflow-x-auto font-mono text-[0.86rem] leading-[1.85] text-[#e4e4e7] whitespace-pre"
            ><code><span class="text-[#c792ea]">POST</span> <span class="text-[#a5d6a7]">https://analyticsdata.googleapis.com/v1beta/properties/123456789:runReport</span>
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
          <p
            class="text-[1.32rem] leading-[1.6] font-medium text-[color:var(--ink)] border-l-2 border-[color:var(--accent-1)] pl-6 my-10"
            data-aos="fade-up"
          >
            Read that payload once and the mental model locks in:
            <strong
              >dimensions are columns you group by, metrics are columns you sum,
              filters are the WHERE clause.</strong
            >
            Everything else is vocabulary.
          </p>
          <!-- 🆕 Event Naming Callout (Green Accent) -->
          <div
            id="naming"
            class="relative my-11 py-[30px] pr-[34px] pl-[38px] bg-[#33cc95]/5 border border-[#33cc95]/25 rounded-3xl overflow-hidden"
            data-aos="fade-up"
          >
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#33cc95]"></div>
            <div
              class="flex items-center gap-2.5 font-extrabold text-[1rem] text-[#1a9d77] dark:text-[#33cc95] mb-4"
            >
              <Icon name="lucide:tags" class="w-5 h-5" />
              Name your events like future-you will query them
            </div>
            <ul
              class="m-0 p-0 list-none flex flex-col gap-3 text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]"
            >
              <li class="flex gap-3">
                <span class="text-[#33cc95] font-bold shrink-0">→</span>
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Borrow GA4's own vocabulary:</strong
                  >
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >form_start</code
                  >
                  and
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >generate_lead</code
                  >
                  are Google-recommended names — the route in this article works
                  on any property that adopted them.</span
                >
              </li>
              <li class="flex gap-3">
                <span class="text-[#33cc95] font-bold shrink-0">→</span>
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >One funnel, one naming family:</strong
                  >
                  never mix
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >Click_CTA</code
                  >
                  with
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >cta_click</code
                  >. The API is case-sensitive; your memory is not.</span
                >
              </li>
              <li class="flex gap-3">
                <span class="text-[#33cc95] font-bold shrink-0">→</span>
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Register custom events as conversions</strong
                  >
                  in the GA4 UI, or they vanish from the reports you query
                  later.</span
                >
              </li>
              <li class="flex gap-3">
                <span class="text-[#33cc95] font-bold shrink-0">→</span>
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Keep a naming doc next to the GTM container.</strong
                  >
                  Six months from now, that doc is the difference between a
                  query and an archaeology dig.</span
                >
              </li>
            </ul>
          </div>
          <h2
            id="mistakes"
            class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)]"
            data-aos="fade-up"
          >
            Which mistakes cost me the most time?
          </h2>
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            Five, and every one of them fails silently or misleadingly. Learn
            them in order and this project costs you an afternoon instead of a
            week:
          </p>
          <!-- The Custom List (Mistakes — now all five) -->
          <ul class="list-none my-10 flex flex-col gap-4">
            <li
              class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]"
              data-aos="fade-up"
            >
              <span
                class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]"
                >01</span
              >
              <div>
                <strong
                  class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]"
                  >Service account not added to the GA4 property.</strong
                >
                <span
                  class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]"
                  >Empty rows, no error, no explanation. Add it in GA4 Admin,
                  not just Google Cloud.</span
                >
              </div>
            </li>
            <li
              class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]"
              data-aos="fade-up"
            >
              <span
                class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]"
                >02</span
              >
              <div>
                <strong
                  class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]"
                  >Event name case mismatch.</strong
                >
                <span
                  class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]"
                  ><code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >cta_click</code
                  >
                  ≠
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >Cta_Click</code
                  >. The API is case-sensitive; your past self who typed fast
                  was not careful.</span
                >
              </div>
            </li>
            <li
              class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]"
              data-aos="fade-up"
            >
              <span
                class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]"
                >03</span
              >
              <div>
                <strong
                  class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]"
                  >No caching.</strong
                >
                <!-- ✅ التعديل الأول: لـ Clark (Ops/Finance) -->
                <span
                  class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]"
                  >Every visitor triggered a fresh API call.
                  <strong class="text-[color:var(--ink)]"
                    >This isn't just a performance issue; it's a financial and
                    stability risk.</strong
                  >
                  Quota burned, latency doubled, demo died. Using Nuxt's
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >defineCachedEventHandler</code
                  >
                  fixed all three
                  <strong class="text-[color:var(--accent-1)]"
                    >and protected the client's API limits</strong
                  >.</span
                >
              </div>
            </li>
            <li
              class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]"
              data-aos="fade-up"
            >
              <span
                class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]"
                >04</span
              >
              <div>
                <strong
                  class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]"
                  >Timezone blindness.</strong
                >
                <span
                  class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]"
                  >"30daysAgo → today" follows the <em>property's</em> timezone,
                  not yours. A designer in Cairo reading an Ohio-based property
                  will see "yesterday" where they expect "today."</span
                >
              </div>
            </li>
            <li
              class="flex gap-5 items-start bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-6 md:p-7 transition-[transform,box-shadow,background-color] duration-300duration-300 hover:translate-x-1.5 hover:border-[color:var(--accent-1)]/40 hover:shadow-[0_14px_34px_-18px_rgba(109,94,240,0.28)]"
              data-aos="fade-up"
            >
              <span
                class="font-mono text-[1.05rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] pt-0.5 shrink-0 min-w-[28px]"
                >05</span
              >
              <div>
                <strong
                  class="block font-extrabold text-[color:var(--ink)] text-[1.05rem] mb-1.5 tracking-[-0.01em]"
                  >Trusting the first number.</strong
                >
                <span
                  class="text-[1rem] text-[color:var(--ink-soft)] leading-[1.65]"
                  >Before believing any funnel, cross-check it against a second
                  source. In one project the "~90% form drop" was partly a
                  broken
                  <code
                    class="font-mono bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--accent-text)] px-1.5 py-0.5 rounded text-[0.85em] font-bold"
                    >form_start</code
                  >
                  tag — the measurement was leaking, not just the UX.</span
                >
              </div>
            </li>
          </ul>
          <!-- The Heavy Pullquote -->
          <div
            class="my-14 p-10 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] border-l-4 border-l-[color:var(--accent-1)] rounded-r-3xl rounded-l shadow-[0_24px_50px_-30px_rgba(109,94,240,0.25)]"
            data-aos="fade-up"
          >
            <p
              class="m-0 text-[1.35rem] font-semibold leading-[1.5] text-[color:var(--ink)] tracking-[-0.01em]"
            >
              That fifth mistake became a permanent rule:
              <strong
                class="bg-clip-text text-transparent bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] font-extrabold"
                >fix the measurement before you fix the design.</strong
              >
            </p>
          </div>
          <h2
            id="reveal"
            class="text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.18] text-[color:var(--ink)] mt-[76px] mb-6 pb-[18px] border-b border-[color:var(--card-border)]"
            data-aos="fade-up"
          >
            What did the dashboard reveal that GA4's UI didn't?
          </h2>
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            One line instead of three reports. In GA4's interface, the funnel
            lived across Events, Explorations, and a custom segment someone had
            to rebuild every week. In the dashboard it's a single row:
          </p>
          <!-- The Stat Row (Rounded, anonymized figures) -->
          <div
            class="my-12 py-10 px-8 md:px-12 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-6 shadow-[0_20px_50px_-32px_rgba(109,94,240,0.28)] justify-center md:justify-start"
            data-aos="fade-up"
          >
            <div class="flex items-center gap-2">
              <span
                class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-[color:var(--ink)] leading-none"
                >~300</span
              >
              <span
                class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]"
                >sessions</span
              >
            </div>
            <span
              class="text-2xl font-light text-gray-400 dark:text-gray-600 mx-1 md:mx-2 translate-y-[2px]"
              >→</span
            >
            <div class="flex items-center gap-2">
              <span
                class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-[color:var(--ink)] leading-none"
                >~130</span
              >
              <span
                class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]"
                >cta_click</span
              >
            </div>
            <span
              class="text-2xl font-light text-gray-400 dark:text-gray-600 mx-1 md:mx-2 translate-y-[2px]"
              >→</span
            >
            <div class="flex items-center gap-2">
              <span
                class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-[color:var(--ink)] leading-none"
                >~45</span
              >
              <span
                class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]"
                >form_start</span
              >
            </div>
            <span
              class="text-2xl font-light text-gray-400 dark:text-gray-600 mx-1 md:mx-2 translate-y-[2px]"
              >→</span
            >
            <div class="flex items-center gap-2">
              <span
                class="text-[1.5rem] md:text-[2rem] font-black tracking-[-0.04em] text-red-500 leading-none"
                >~5</span
              >
              <span
                class="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-[color:var(--ink-soft)]"
                >generate_lead</span
              >
            </div>
          </div>
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            with the worst step flagged in red automatically. That one row
            changed a product decision: roughly nine in ten people who started
            the form never submitted it. It sent the team to session recordings,
            where the real friction was found — and fixed within days. I publish
            client-specific versions of stories like this only with written
            permission; until then,
            <strong class="text-[color:var(--ink)]"
              >the anonymity is the professionalism.</strong
            >
          </p>
          <!-- ✅ التعديل الثاني: لـ Tyler (Founder/CEO) -->
          <p
            class="text-[1.12rem] leading-[1.78] text-[color:var(--ink-soft)] mb-7"
            data-aos="fade-up"
          >
            When you're raising funds or launching a beta,
            <strong class="text-[color:var(--ink)]"
              >investors and early users don't care about your UI gradients;
              they care about your conversion rates.</strong
            >
            This dashboard gave us the exact metric we needed to prove we
            understood our users.
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
            class="flex flex-col border-b border-[color:var(--card-border)]"
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
          <NewsletterForm />
          <!-- The New Dynamic CTA Component -->
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
        <!-- ============ RIGHT: THE STICKY SIDEBAR ============ -->
        <aside
          class="hidden xl:flex flex-col gap-7 xl:col-span-4 sticky top-[100px]"
        >
          <!-- Table of Contents -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.3)] transition-[transform,box-shadow,background-color] duration-300duration-300"
          >
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-5"
              >On this page</span
            >
            <ul class="flex flex-col gap-3">
              <li>
                <a
                  href="#why-bother"
                  class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >Why bother as a designer</a
                >
              </li>
              <li>
                <a
                  href="#prerequisites"
                  class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >Prerequisites</a
                >
              </li>
              <li>
                <a
                  href="#how-it-works"
                  class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >How the API works</a
                >
              </li>
              <li>
                <a
                  href="#naming"
                  class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[#33cc95] transition-[transform,box-shadow,background-color] duration-300block"
                  >Event naming rules</a
                >
              </li>
              <li>
                <a
                  href="#mistakes"
                  class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >The 5 mistakes</a
                >
              </li>
              <li>
                <a
                  href="#reveal"
                  class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >What the dashboard revealed</a
                >
              </li>
              <li>
                <a
                  href="#faq"
                  class="text-[0.92rem] font-semibold text-[color:var(--ink-soft)] pl-3.5 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-[transform,box-shadow,background-color] duration-300block"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
          <!-- Share Links -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.3)] transition-[transform,box-shadow,background-color] duration-300duration-300"
          >
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-5"
              >Share Playbook</span
            >
            <div class="flex gap-3">
              <button
                @click="sharePlaybook('twitter')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-[transform,box-shadow,background-color] duration-300duration-300 hover:-translate-y-1"
                aria-label="Share on X (Twitter)"
              >
                <Icon name="simple-icons:x" class="w-4.5 h-4.5" />
              </button>
              <button
                @click="sharePlaybook('linkedin')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-[transform,box-shadow,background-color] duration-300duration-300 hover:-translate-y-1"
                aria-label="Share on LinkedIn"
              >
                <Icon name="lucide:linkedin" class="w-4.5 h-4.5" />
              </button>
              <button
                @click="sharePlaybook('copy')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center transition-[transform,box-shadow,background-color] duration-300duration-300 hover:-translate-y-1"
                :class="
                  copied
                    ? 'bg-[#33cc95] text-white border-transparent'
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
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.3)] transition-[transform,box-shadow,background-color] duration-300duration-300"
          >
            <div
              class="w-11 h-11 rounded-full bg-gradient-to-br from-[color:var(--accent-1)]/10 to-[color:var(--accent-2)]/10 text-[color:var(--accent-text)] flex items-center justify-center mb-5"
            >
              <Icon name="lucide:layers" class="w-5 h-5" />
            </div>
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent-text)] mb-2"
              >Series</span
            >
            <h4
              class="text-[1.18rem] font-extrabold text-[color:var(--ink)] leading-[1.25] tracking-[-0.015em] mb-3"
            >
              Tracking for Designers
            </h4>
            <p
              class="text-[0.92rem] text-[color:var(--ink-soft)] leading-[1.65] mb-5"
            >
              Bridging the gap between design decisions and measurable business
              outcomes.
            </p>
            <NuxtLink
              to="/blog"
              class="inline-flex items-center gap-2 text-[0.88rem] font-extrabold text-[color:var(--ink)] hover:text-[color:var(--accent-text)] hover:gap-3 transition-[transform,box-shadow,background-color] duration-300duration-200"
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
// ===================== FAQ LOGIC (7 questions now) =====================
const activeFaq = ref(0);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const faqItems = [
  {
    question: "Is the GA4 Data API free?",
    answer:
      "Yes. It ships with every GA4 property, including free ones. You're bounded by quotas (roughly 10k core requests/day per property), which an hourly-cached dashboard will never approach.",
  },
  {
    question: "Do I need a developer to pull GA4 data?",
    answer:
      "No. The server route in this article is about 60 lines and needs no frontend skills beyond pasting it into server/api/. If you can edit a Nuxt project, you can own your analytics.",
  },
  {
    question: "Can I use an API key instead of a service account?",
    answer:
      "For runReport, yes — but a service account scales better, keeps keys out of client code, and is mandatory the moment you touch the Admin API. Start right, not fast.",
  },
  {
    question: "How often should my dashboard refresh?",
    answer:
      "Hourly is plenty. Design and funnel decisions operate on days and weeks; minute-level freshness only feeds anxiety, not judgment.",
  },
  {
    question: "Does the Data API return raw user-level hits?",
    answer:
      "No — it returns aggregated reports. For hit-level analysis you want the BigQuery export. Different tool, different article.",
  },
  {
    question: "Can I publish my client's metrics in articles or my portfolio?",
    answer:
      "Only with written permission. Until then, withhold the name, round the figures, and label them as rounded. The method travels; the numbers belong to the client.",
  },
  {
    question: "What if my site has no custom events yet?",
    answer:
      "Start with GA4's recommended events (form_start, generate_lead) via GTM — they're free to adopt and instantly queryable through the Data API. Add cta_click when you need the middle of the funnel.",
  },
];

// ===================== SEO / HEAD + FAQPage Schema =====================
usePageMeta({
  title:
    "GA4 Data API for Designers — Pull Funnels Into Your Own Dashboard | Mamdouh Ghaneemy",
  description:
    "Stop exporting CSVs. The exact Nuxt server route I use to pull GA4 funnel data into my own dashboard — with the 5 mistakes that cost me days.",
  keywords: [
    "GA4 Data API",
    "google analytics 4 api",
    "nuxt server routes",
    "supabase analytics",
    "conversion funnel dashboard",
    "analytics for designers",
    "GA4 event naming conventions",
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
  faqItems: faqItems.value, // من الـ reactive في الصفحة
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

/* The specific fix for inline code contrast */
:deep(code) {
  @apply text-[color:var(--ink)] bg-[color:var(--input-bg)] border border-[color:var(--card-border)] px-1.5 py-0.5 rounded font-mono text-[0.85em] font-semibold;
}
:deep(pre code) {
  /* Reset for code blocks so they don't get the inline styling */
  @apply bg-transparent border-none p-0 text-inherit text-sm font-normal;
}
</style>
