<template>
  <article
    class="bg-[color:var(--page-bg-1)] min-h-screen text-[color:var(--ink)] font-sans relative selection:bg-[color:var(--accent-1)] selection:text-white pb-32"
  >
    <!-- ===================== HERO ===================== -->
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
                >Fintech</span
              >
              <span class="text-[color:var(--accent-1)]">12 Min Read</span>
              <span
                class="w-1 h-1 rounded-full bg-[color:var(--card-border)]"
              ></span>
              <span class="text-[color:var(--ink-soft)]">Sep 26, 2026</span>
            </div>
            <h1
              class="text-[clamp(2.4rem,5.4vw,4.4rem)] font-black tracking-[-0.035em] leading-[1.02] mb-8 text-[color:var(--ink)]"
            >
              Designing for Fear:
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] italic pr-2"
                >How to Build Trust in Fintech Onboarding Flows.</span
              >
            </h1>
            <p
              class="text-[1.22rem] font-medium text-[color:var(--ink-soft)] leading-[1.55] max-w-[620px] pl-6 border-l-2 border-[color:var(--ink-soft)]/40 mb-10"
            >
              Nobody opens a banking app with excitement. They open it with a
              low, quiet dread: "What if I lose money? What if I click the wrong
              thing? What if this is a scam?" Here's the framework I use to
              design for fear instead of ignoring it.
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
                  Fintech Product Designer
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Payoff Card -->
          <div
            class="lg:col-span-5 relative"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[40px] p-10 md:p-12 min-h-[420px] flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.25)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden group"
            >
              <div
                class="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(248,113,113,0.15),transparent_70%)] pointer-events-none z-0"
              ></div>

              <div class="relative z-10">
                <span
                  class="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-5"
                  >KYC Drop-off (Industry Avg)</span
                >
                <div class="flex items-baseline gap-4 mb-3">
                  <span
                    class="text-[clamp(4rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-red-500"
                  >
                    70%
                  </span>
                </div>
              </div>

              <div
                class="mt-8 pt-7 border-t border-[color:var(--card-border)] relative z-10"
              >
                <span
                  class="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--ink-soft)] block mb-2"
                  >The Reality</span
                >
                <p
                  class="text-[0.9rem] text-[color:var(--ink-soft)] leading-relaxed m-0"
                >
                  Users don't drop off because the flow is confusing. They
                  drop off because it feels
                  <strong class="text-[color:var(--ink)]">scary</strong>.
                </p>
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
      src="/images/blog/fintech-onboarding-trust-design-hero.png"
      alt="Tablet on warm linen showing a fintech KYC verification screen with a violet 'Verify Identity' button, shield icon, and 33% progress bar — surrounded by trust symbols: a brass key, a wax-sealed envelope, and dried lavender."
      title="Designing for Fear: Trust-First KYC Onboarding"
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
      <span class="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse"></span>
      Built on Trust · Layer by Layer
    </div>
  </div>
  <figcaption class="sr-only">
    Fintech onboarding trust design: the KYC verification moment where 70% of users drop off. Design signals — shield, key, and wax seal — address the 5 core fears of financial products.
  </figcaption>
</figure>

    <!-- ===================== EDITORIAL GRID ===================== -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-[60px]">
      <div
        class="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-[80px] items-start"
      >
        <!-- ============ LEFT: ARTICLE ============ -->
        <article
          class="xl:col-span-8 max-w-[740px] text-[17px] leading-[1.75] text-[color:var(--ink-soft)]"
        >
          <!-- Opening -->
          <p
            class="text-[20px] text-[color:var(--ink)] font-medium mb-7"
            data-aos="fade-up"
          >
            The first time I audited a fintech onboarding flow, I watched 30
            session recordings back-to-back.
          </p>

          <p class="mb-7" data-aos="fade-up">
            The pattern was brutal: users didn't drop off because the flow was
            confusing. They dropped off because the flow was
            <em>scary</em>. One user typed her card number four times — not
            because the field was broken, but because she wasn't sure the site
            was real.
          </p>

          <div
            class="border-l-[3px] border-amber-400 bg-amber-400/10 dark:bg-amber-400/5 px-6 py-5 rounded-r-xl mb-7"
            data-aos="fade-up"
          >
            <p
              class="m-0 text-[#b49852] dark:text-[#d8d0b8] text-[16px] leading-relaxed"
            >
              I remember her name was in the recording — but I won't share it.
              What I will share is what she did next: after the fourth attempt,
              she opened a new tab, Googled the company name, found a
              TechCrunch article from two years ago, closed the app, and never
              came back.
              <strong class="text-[#b49852] dark:text-[#f0e4c8]"
                >She didn't drop off because the form was broken. She dropped
                off because she couldn't verify we were real.</strong
              >
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            Fintech onboarding is fundamentally different from typical SaaS.
            It's not about delighting users with features; it's about navigating
            a minefield of emotional and financial anxieties. Studies from the
            <NuxtLink
              to="https://www.nngroup.com/articles/fintech-ux-challenges/"
              target="_blank"
              rel="noopener"
              class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors"
              >Nielsen Norman Group</NuxtLink
            >
            and
            <NuxtLink
              to="https://baymard.com/blog/fintech-ux"
              target="_blank"
              rel="noopener"
              class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors"
              >Baymard Institute</NuxtLink
            >
            consistently show drop-off rates exceeding 70% in critical stages
            like KYC (Know Your Customer) — not due to complexity, but
            perceived risk.
          </p>

          <p class="mb-7" data-aos="fade-up">
            We need to shift our design focus from "ease of use" to
            <strong class="text-[color:var(--ink)] font-bold"
              >"ease of trust."</strong
            >
          </p>

          <!-- Thesis -->
          <p
            class="text-[21px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10"
            data-aos="fade-up"
          >
            Beauty that delays proof is a tax. Fear that delays trust is a
            death sentence.
          </p>

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
              Fintech onboarding fails when designers optimize for "ease of use"
              but ignore "fear of loss." Users need three signals before they
              trust: proof of legitimacy, clarity of consequence, and
              reversibility of action. Design all three into every screen — not
              as onboarding, but as reassurance.
            </p>
          </div>

          <!-- ✅ NEW SECTION: What bad onboarding costs -->
          <h2
            id="cost"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            What does bad fintech onboarding actually cost?
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
              For a fintech with 100,000 sign-ups and a 70% KYC drop-off, the
              leaked opportunity cost typically runs from **$500K to $2M in
              first-year LTV** — depending on average revenue per user. Fixing
              the flow usually costs 5-10% of that.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            Founders don't ask "how do I design trust?" They ask
            <strong class="text-[color:var(--ink)]"
              >"what is this costing me, and what do I get back?"</strong
            >
            That's the right question. Here's the honest math.
          </p>

          <div
            class="overflow-x-auto my-10 rounded-[14px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)]"
            data-aos="fade-up"
          >
            <table class="w-full text-[13.5px] text-left">
              <thead
                class="bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)]"
              >
                <tr>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Scenario
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Current state
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--accent-text)]"
                  >
                    Annual impact
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[color:var(--card-border)]">
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Pre-launch fintech
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    70% KYC drop-off, 10K sign-ups/year
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink)]">
                    $50K–$200K LTV lost
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Growth-stage fintech
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    70% KYC drop-off, 100K sign-ups/year
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink)]">
                    $500K–$2M LTV lost
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Scaled fintech
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    70% KYC drop-off, 1M sign-ups/year
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink)]">
                    $5M–$20M LTV lost
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="mb-7" data-aos="fade-up">
            These numbers are why I don't sell "beautiful onboarding." I sell
            <strong class="text-[color:var(--ink)]"
              >friction removed at the point that matters</strong
            >
            — and I measure it against what's currently leaking.
          </p>

          <!-- ============ SECTION 1: THE 5 FEARS ============ -->
          <h2
            id="five-fears"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            What are the 5 fears every fintech user has?
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
              Fintech onboarding combines three unique pressures — regulatory
              compliance (KYC/AML), emotional stakes (money = survival), and
              trust asymmetry (user knows less than the product). Design must
              address all three simultaneously, not sequentially.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            These are the five core fears that drive abandonment in fintech
            onboarding. Each one needs a specific design response — not a
            generic "improve UX" fix.
          </p>

          <!-- Fear 1 -->
          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >01</span
            >
            Loss of Money
          </h3>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The fear:</strong
            >
            "What if I send it to the wrong place? What if I'm charged
            incorrectly?" This is the most primal fear in finance. Users are
            acutely aware that a single mistake can have tangible, immediate
            financial consequences.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The design response:</strong
            >
            Transparency and confirmation are key. Always show the destination
            before confirmation of any transfer. Implement a 3-second "review"
            screen for critical transactions, allowing a last-second check.
            Ensure a "cancel" button or clear exit path is always visible.
          </p>
          <p class="mb-7" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold">Example:</strong>
            Revolut's "review transfer" screen explicitly lists the recipient,
            amount, and fees before requiring final confirmation — often with a
            subtle delay to encourage review, not discourage it.
          </p>

          <!-- Fear 2 -->
          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >02</span
            >
            Loss of Control
          </h3>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The fear:</strong
            >
            "What if I can't undo this? What if I make a permanent mistake?"
            Users need to feel empowered, not trapped. Irreversible actions,
            even when technically correct, create immense anxiety.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The design response:</strong
            >
            Prioritize reversibility as a first-class UX feature. Implement
            "undo" windows (like Gmail's 5-second undo) for actions where
            possible. For truly permanent actions, use clear, unambiguous "this
            is permanent" warnings that require explicit acknowledgement — not
            just a click.
          </p>
          <p class="mb-7" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold">Example:</strong>
            Monzo's "scheduled transfers" pattern allows users to view, edit, or
            cancel future payments — giving them full control over their money's
            movement.
          </p>

          <!-- Fear 3 -->
          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >03</span
            >
            Loss of Dignity
          </h3>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The fear:</strong
            >
            "What if I look stupid? What if I don't understand the jargon?"
            Financial services are riddled with complex terminology. Users fear
            being judged — which leads to silent abandonment rather than asking
            for help.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The design response:</strong
            >
            Banish jargon. Use plain language that anyone can understand,
            regardless of financial literacy. Provide inline explanations for
            any potentially confusing terms without being patronizing. Design
            error messages that guide toward a solution ("Card number should be
            16 digits on the front" instead of "Invalid card number").
          </p>
          <p class="mb-7" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold">Example:</strong>
            Stripe's clear input labels like "Card number: 16 digits on the
            front of your card" elegantly guide users without making them feel
            uneducated.
          </p>

          <!-- Fear 4 -->
          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >04</span
            >
            Loss of Privacy
          </h3>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The fear:</strong
            >
            "What if they sell my data? What if my personal information is
            exposed?" In an era of data breaches, users are highly sensitive
            about sharing personal and financial information. This fear causes
            immediate drop-off during KYC or account-linking stages.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The design response:</strong
            >
            Explain <em>why</em> each piece of data is needed
            <em>before</em> requesting it. Clearly communicate what happens with
            the data and how it's protected. Frame regulatory requirements like
            GDPR not as an inconvenience, but as a UX feature that protects the
            user.
          </p>
          <p class="mb-7" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold">Example:</strong>
            Wise (formerly TransferWise) explains their data usage and security
            practices upfront — building confidence from the first interaction.
          </p>

          <!-- Fear 5 -->
          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >05</span
            >
            Loss of Belonging
          </h3>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The fear:</strong
            >
            "What if I'm not their target customer? What if this isn't for me?"
            Users want to feel recognized. If the language, imagery, or features
            don't resonate, they'll assume the product isn't a good fit and
            disengage.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >The design response:</strong
            >
            Use inclusive language and diverse imagery. Make multi-language
            support visible upfront. Showcase diverse user testimonials that
            highlight how the product serves different needs — ensuring users
            see themselves reflected in the product's narrative.
          </p>
          <p class="mb-7" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold">Example:</strong>
            N26 uses segment-aware onboarding and inclusive branding to make a
            wide range of users feel welcome and understood.
          </p>

          <!-- Comparison Table -->
          <div
            class="overflow-x-auto my-10 rounded-[14px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)]"
            data-aos="fade-up"
          >
            <table class="w-full text-[13.5px] text-left">
              <thead
                class="bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)]"
              >
                <tr>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Fear
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Traditional UX
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--accent-text)]"
                  >
                    Trust-First Design
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[color:var(--card-border)]">
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Money
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Green checkmarks, "Success!" messages
                  </td>
                  <td class="px-5 py-4">
                    Pre-transaction review, visible cancel, clear fee breakdown
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Control
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    "Are you sure?" pop-ups, confirmation emails
                  </td>
                  <td class="px-5 py-4">
                    Undo windows, clear action explanations, editable schedules
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Dignity
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Jargon-filled tooltips, generic error messages
                  </td>
                  <td class="px-5 py-4">
                    Plain language, inline guidance, contextual error messages
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Privacy
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Link to privacy policy in footer
                  </td>
                  <td class="px-5 py-4">
                    "Why we need this," "What we do with it" explanations
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Belonging
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Stock photos, generic "welcome"
                  </td>
                  <td class="px-5 py-4">
                    Inclusive imagery, diverse testimonials, segment-aware flows
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- ============ SECTION 2: TRUST STACK ============ -->
          <h2
            id="trust-stack"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            What is the Trust Stack (and why does order matter)?
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
              Trust must be built from the foundation up, layer by layer —
              Safety → Legitimacy → Clarity → Confidence → Delight. Most
              fintechs design from the top down, starting with flashy features.
              This is a critical mistake.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            The Trust Stack is a hierarchical model for designing trust in
            fintech. Here's the visual:
          </p>

          <!-- Trust Stack Visual -->
          <div
            class="my-10 p-6 md:p-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px]"
            data-aos="fade-up"
          >
            <div class="flex flex-col gap-2">
              <div
                class="p-4 rounded-xl border-l-4 bg-[color:var(--input-bg)]"
                style="border-color: #a78bfa"
              >
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <span
                      class="font-mono text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                      >Layer 5</span
                    >
                    <span class="font-bold text-[color:var(--ink)]"
                      >Delight</span
                    >
                  </div>
                  <span class="text-[11px] text-[color:var(--ink-soft)] italic"
                    >← The End Goal</span
                  >
                </div>
                <p class="text-[13px] text-[color:var(--ink-soft)] mt-1 m-0">
                  Micro-interactions, rewards, celebrations
                </p>
              </div>
              <div
                class="p-4 rounded-xl border-l-4 bg-[color:var(--input-bg)]"
                style="border-color: #60a5fa"
              >
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <span
                      class="font-mono text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                      >Layer 4</span
                    >
                    <span class="font-bold text-[color:var(--ink)]"
                      >Confidence</span
                    >
                  </div>
                </div>
                <p class="text-[13px] text-[color:var(--ink-soft)] mt-1 m-0">
                  Reversibility, undos, previews
                </p>
              </div>
              <div
                class="p-4 rounded-xl border-l-4 bg-[color:var(--input-bg)]"
                style="border-color: #34d399"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="font-mono text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                    >Layer 3</span
                  >
                  <span class="font-bold text-[color:var(--ink)]">Clarity</span>
                </div>
                <p class="text-[13px] text-[color:var(--ink-soft)] mt-1 m-0">
                  Plain language, inline help
                </p>
              </div>
              <div
                class="p-4 rounded-xl border-l-4 bg-[color:var(--input-bg)]"
                style="border-color: #fbbf24"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="font-mono text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                    >Layer 2</span
                  >
                  <span class="font-bold text-[color:var(--ink)]"
                    >Legitimacy</span
                  >
                </div>
                <p class="text-[13px] text-[color:var(--ink-soft)] mt-1 m-0">
                  Logos, badges, guarantees
                </p>
              </div>
              <div
                class="p-4 rounded-xl border-l-4 bg-[color:var(--input-bg)]"
                style="border-color: #f87171"
              >
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <span
                      class="font-mono text-[11px] font-bold uppercase tracking-wider text-[color:var(--ink-soft)]"
                      >Layer 1</span
                    >
                    <span class="font-bold text-[color:var(--ink)]"
                      >Safety</span
                    >
                  </div>
                  <span class="text-[11px] text-[color:var(--ink-soft)] italic"
                    >← The Foundation</span
                  >
                </div>
                <p class="text-[13px] text-[color:var(--ink-soft)] mt-1 m-0">
                  Encryption signals, secure UX patterns
                </p>
              </div>
            </div>
          </div>

          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >Layer 1 — Safety.</strong
            >
            The absolute foundation. Users must immediately perceive that the
            connection is secure. This means visible SSL certificates, security
            badges, and consistent secure UX patterns. Without this, no other
            layer matters.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >Layer 2 — Legitimacy.</strong
            >
            Is this a real company or a phishing scam? This layer is built
            through official branding, regulatory badges (e.g., FCA, FDIC),
            credible endorsements, and consistent, professional design.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >Layer 3 — Clarity.</strong
            >
            Users need to understand what's happening at every step. Plain
            language, inline help, transparent consequences. Addresses the
            "Loss of Dignity" fear.
          </p>
          <p class="mb-4" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >Layer 4 — Confidence.</strong
            >
            Users feel confident when they know they have control. Undo options,
            transaction previews, clear paths for modification. Directly
            addresses "Loss of Control."
          </p>
          <p class="mb-7" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold"
              >Layer 5 — Delight.</strong
            >
            Only once the first four layers are firmly in place should you
            introduce micro-interactions, animations, gamification, or rewards.
            Delight without foundation feels superficial and can even exacerbate
            anxiety.
          </p>

          <p
            class="text-[21px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10"
            data-aos="fade-up"
          >
            Delight without trust is decoration. Trust without clarity is
            theater.
          </p>

          <!-- ============ SECTION 3: COMPLIANCE ============ -->
          <h2
            id="compliance"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            Why does compliance kill onboarding (and how to fix it)?
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
              KYC/AML is non-negotiable — but it doesn't have to be a wall.
              Reframe compliance as a guided journey using three principles:
              progressive disclosure, real-time validation, and context before
              request.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            When presented with 10-15 fields requesting sensitive personal
            documents, users get scared and drop off. This is where the
            infamous 70%+ abandonment rate happens. The problem isn't
            compliance — it's how compliance is designed.
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >01</span
            >
            Progressive Disclosure
          </h3>
          <p class="mb-7" data-aos="fade-up">
            Never present all 15 KYC fields at once. Break the process into
            smaller steps. Present 2-3 fields, allow completion, then move on.
            This reduces cognitive load and provides a sense of progress.
            <em>Example:</em> Revolut handles KYC as 4-5 short steps, each with
            a clear purpose and progress indicator.
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >02</span
            >
            Real-Time Validation
          </h3>
          <p class="mb-7" data-aos="fade-up">
            Waiting for validation after submitting a form is a major source of
            anxiety. Users are left wondering if they've made a mistake. Provide
            instant feedback like "That's a valid IBAN ✓" — this reassures
            immediately and keeps momentum.
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2 flex items-baseline gap-2.5"
            data-aos="fade-up"
          >
            <span
              class="font-mono text-[13px] text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md flex-shrink-0 relative -top-[2px]"
              >03</span
            >
            Context Before Request
          </h3>
          <p class="mb-7" data-aos="fade-up">
            Users share sensitive information more willingly when they
            understand <em>why</em>. Before asking for a Social Security Number
            or an ID photo, add a brief explanation: "We need this to verify
            your identity. We never store the full document." Transparency
            builds trust — directly addressing the "Loss of Privacy" fear.
          </p>

          <!-- ============ SECTION 4: QOMPYL CASE STUDY ============ -->
          <h2
            id="qompyl"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            How I applied this to a real fintech app
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
              Qompyl — an early-stage mobile trading platform — needed a
              mobile experience designed from scratch for clarity, confidence
              and beta readiness. We documented 60+ states before development
              and shipped in 10 weeks with zero component redesigns requested
              after handoff.
            </p>
          </div>

          <p class="mb-7" data-aos="fade-up">
            I recently applied this framework to Qompyl, an early-stage mobile
            trading platform. The product was sophisticated — strategy building,
            token-based usage and compliance workflows — and designing that
            depth into a clear, confidence-building mobile experience was the
            specific design challenge.
          </p>

          <!-- ✅ NEW: Process Progression (not Before/After) -->
          <p class="mb-7" data-aos="fade-up">
            The work started from zero — no legacy screens to redesign, no
            existing flow to refactor. The challenge was designing a coherent
            system from scratch. That meant three fidelity passes:
          </p>

          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10"
            data-aos="fade-up"
          >
            <!-- Step 1 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-3"
            >
              <div class="flex items-center gap-2">
                <span
                  class="font-mono text-[10px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md"
                  >01</span
                >
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)]"
                  >Structure</span
                >
              </div>
              <p class="text-sm font-bold text-[color:var(--ink)] m-0">
                Low-fidelity wireframes
              </p>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed m-0">
                Grayscale layouts focused on hierarchy and core flows. No visual
                design yet — just decisions.
              </p>
            </div>
            <!-- Step 2 -->
            <div
              class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[20px] p-5 flex flex-col gap-3"
            >
              <div class="flex items-center gap-2">
                <span
                  class="font-mono text-[10px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md"
                  >02</span
                >
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)]"
                  >Refinement</span
                >
              </div>
              <p class="text-sm font-bold text-[color:var(--ink)] m-0">
                Mid-fidelity system
              </p>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed m-0">
                Real copy, clearer hierarchy, first interaction states — the
                bridge between structure and visual design.
              </p>
            </div>
            <!-- Step 3 -->
            <div
              class="bg-[color:var(--card-bg)] border-2 border-[color:var(--accent-1)]/40 rounded-[20px] p-5 flex flex-col gap-3"
            >
              <div class="flex items-center gap-2">
                <span
                  class="font-mono text-[10px] font-bold text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 border border-[color:var(--accent-1)]/30 px-2 py-0.5 rounded-md"
                  >03</span
                >
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-text)]"
                  >Final</span
                >
              </div>
              <p class="text-sm font-bold text-[color:var(--ink)] m-0">
                High-fidelity + states
              </p>
              <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed m-0">
                Every screen with empty, ready, insufficient, and error states
                documented before development.
              </p>
            </div>
          </div>

          <p class="mb-7" data-aos="fade-up">
            The reason this matters: nothing ambiguous reached engineering.
            Every state was documented, every component was reusable, and the
            beta team could extend the system without waiting for me.
          </p>

          <p class="mb-7" data-aos="fade-up">
            Here's how we addressed the 5 Fears in Qompyl's design:
          </p>

          <div
            class="overflow-x-auto my-10 rounded-[14px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)]"
            data-aos="fade-up"
          >
            <table class="w-full text-[13.5px] text-left">
              <thead
                class="bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)]"
              >
                <tr>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Fear
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Where It Appeared
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--accent-text)]"
                  >
                    How We Designed For It
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[color:var(--card-border)]">
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Money
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Order placement, trade execution
                  </td>
                  <td class="px-5 py-4">
                    "Insufficient tokens" state shown <em>before</em> the click,
                    clear cost breakdown
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Control
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Strategy deployment, live execution
                  </td>
                  <td class="px-5 py-4">
                    "Run-strategy guard" with explicit confirmation + reusable
                    success-state screens
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Dignity
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Token economy, trading terms
                  </td>
                  <td class="px-5 py-4">
                    Inline, context-sensitive education. No assumed knowledge.
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Privacy
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Account linking, external connections
                  </td>
                  <td class="px-5 py-4">
                    Explicit "we don't store credentials" + visual
                    secure-connection indicators
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Loss of Belonging
                  </td>
                  <td class="px-5 py-4 text-[color:var(--ink-soft)]">
                    Portfolio creation
                  </td>
                  <td class="px-5 py-4">
                    Templates for "first-time traders" and "experienced
                    investors"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- ✅ NEW: Business Impact -->
          <p class="mb-7" data-aos="fade-up">
            <strong class="text-[color:var(--ink)] font-bold">The result:</strong>
            We documented over 60 distinct states for the core trading
            experience <em>before</em> development began. This state-first
            approach meant nothing ambiguous reached development — and no
            component redesigns were requested after handoff.
          </p>

          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-6 my-10"
            data-aos="fade-up"
          >
            <div
              class="text-[10px] font-bold text-[color:var(--ink-soft)] uppercase tracking-widest mb-4"
            >
              What this meant for the team
            </div>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Zero rebuilds.</strong
                  >
                  The design system held through beta without a single
                  component rework.</span
                >
              </li>
              <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Faster iteration.</strong
                  >
                  The team extended the system themselves after handoff.</span
                >
              </li>
              <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Fewer decisions during development.</strong
                  >
                  Everything was pre-solved in the design phase.</span
                >
              </li>
              <li class="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]">
                <Icon
                  name="lucide:check"
                  class="w-4 h-4 text-[color:var(--accent-1)] flex-shrink-0 mt-0.5"
                />
                <span
                  ><strong class="text-[color:var(--ink)]"
                    >Beta-ready on schedule.</strong
                  >
                  The design system shipped with the product, not after it.</span
                >
              </li>
            </ul>
          </div>

          <!-- Testimonial -->
          <div
            class="bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-[24px] p-8 my-10 relative overflow-hidden"
            data-aos="fade-up"
          >
            <Icon
              name="lucide:quote"
              class="absolute -top-4 -left-4 w-24 h-24 text-[color:var(--card-border)] opacity-50 rotate-180"
            />
            <blockquote
              class="text-[17px] font-medium text-[color:var(--ink)] leading-relaxed mb-6 relative z-10 italic"
            >
              "Mamdouh's designs are shockingly good. Not only did he deliver
              on our requests in a timely manner, but his eye for design went
              above and beyond our highest expectations for the app and
              website. I would hire him again in a heartbeat."
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

          <p class="mb-7" data-aos="fade-up">
            → Read the full
            <NuxtLink
              to="/projects/qompyl-app-case-study"
              class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors"
              >Qompyl App Case Study</NuxtLink
            >
            to see the designs in action.
          </p>

          <!-- ============ SECTION 5: MEASUREMENT ============ -->
          <h2
            id="measure"
            class="text-[clamp(1.55rem,3.2vw,2.05rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.25] mt-20 mb-4"
            data-aos="fade-up"
          >
            How do you measure if trust design worked?
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
              Use my 3-Signal Rule. Behavior (Clarity recordings) + Intent (GSC
              queries) + Funnel (GA4 events) — when all three point in the same
              direction, you have a decision. One signal is an anecdote. Two is
              a hypothesis. Three is a decision.
            </p>
          </div>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2"
            data-aos="fade-up"
          >
            Signal 1 — Behavior
          </h3>
          <p class="mb-7" data-aos="fade-up">
            From Microsoft Clarity: rage clicks ↓, dead clicks ↓, quick backs
            ↓, session quality ↑. Trustworthy design reduces friction caused by
            anxiety.
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2"
            data-aos="fade-up"
          >
            Signal 2 — Intent
          </h3>
          <p class="mb-7" data-aos="fade-up">
            From GSC + GA4: search queries about "how to" ↑ (indicates unmet
            clarity needs), support ticket volume ↓, time-to-first-transaction
            ↓.
          </p>

          <h3
            class="text-[1.2rem] font-bold text-[color:var(--ink)] mt-10 mb-2"
            data-aos="fade-up"
          >
            Signal 3 — Funnel
          </h3>
          <p class="mb-7" data-aos="fade-up">
            From GA4: KYC completion rate ↑, form abandonment ↓, repeat sessions
            ↑.
          </p>

          <h4
            class="text-[1rem] font-bold text-[color:var(--ink)] mt-8 mb-3"
            data-aos="fade-up"
          >
            Baseline Ranges (Starting Points)
          </h4>

          <div
            class="overflow-x-auto my-6 rounded-[14px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)]"
            data-aos="fade-up"
          >
            <table class="w-full text-[13.5px] text-left">
              <thead
                class="bg-[color:var(--input-bg)] border-b border-[color:var(--card-border)]"
              >
                <tr>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[color:var(--ink-soft)]"
                  >
                    Metric
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-[#33cc95]"
                  >
                    Healthy
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-amber-500"
                  >
                    Warning
                  </th>
                  <th
                    class="px-5 py-4 font-bold text-[11px] uppercase tracking-wider text-red-500"
                  >
                    Critical
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[color:var(--card-border)]">
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Rage clicks / 100 sessions
                  </td>
                  <td class="px-5 py-4">&lt; 2</td>
                  <td class="px-5 py-4">2–5</td>
                  <td class="px-5 py-4">&gt; 5</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Dead clicks / 100 sessions
                  </td>
                  <td class="px-5 py-4">&lt; 3</td>
                  <td class="px-5 py-4">3–8</td>
                  <td class="px-5 py-4">&gt; 8</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Quick backs (%)
                  </td>
                  <td class="px-5 py-4">&lt; 10%</td>
                  <td class="px-5 py-4">10–20%</td>
                  <td class="px-5 py-4">&gt; 20%</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    KYC completion rate
                  </td>
                  <td class="px-5 py-4">&gt; 65%</td>
                  <td class="px-5 py-4">45–65%</td>
                  <td class="px-5 py-4">&lt; 45%</td>
                </tr>
                <tr>
                  <td class="px-5 py-4 font-bold text-[color:var(--ink)]">
                    Time-to-first-transaction
                  </td>
                  <td class="px-5 py-4">&lt; 5 min</td>
                  <td class="px-5 py-4">5–15 min</td>
                  <td class="px-5 py-4">&gt; 15 min</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            class="text-[15px] italic text-[color:var(--ink-soft)] opacity-80 mb-7"
            data-aos="fade-up"
          >
            * These ranges are starting points — not universal truths. The real
            baseline is <em>your</em> product's baseline. See the
            <NuxtLink
              to="/blog/ga4-data-api-for-designers"
              class="text-[color:var(--accent-1)] border-b border-[color:var(--accent-1)]/30 hover:border-[color:var(--accent-1)] transition-colors"
              >3-Signal Rule framework</NuxtLink
            >
            for how to build your own.
          </p>

          <p
            class="text-[21px] font-bold text-[color:var(--ink)] text-center py-7 px-8 bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] my-10"
            data-aos="fade-up"
          >
            One signal = anecdote. Two signals = hypothesis. Three signals =
            decision.
          </p>

          <!-- ===================== FAQ ===================== -->
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
                  class="w-8 h-8 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink-soft)] transition-all duration-300 shrink-0 ml-4"
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
                class="grid transition-all duration-300 ease-in-out"
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

          <!-- ===================== WHAT TO DO NEXT ===================== -->
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
              If your fintech onboarding flow is leaking users, it's likely
              leaking trust. Take action now:
            </p>

            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7"
              data-aos="fade-up"
            >
              <NuxtLink
                to="/projects/qompyl-app-case-study"
                class="block bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 text-inherit transition-all duration-250 relative overflow-hidden group hover:-translate-y-1 hover:border-[color:var(--accent-1)]/35 hover:bg-[color:var(--input-bg)]"
              >
                <span
                  class="absolute top-[22px] right-[24px] text-[color:var(--ink-soft)] transition-all duration-250 text-[18px] group-hover:translate-x-1 group-hover:text-[color:var(--accent-1)]"
                  >→</span
                >
                <div
                  class="font-mono text-[10.5px] tracking-[1.5px] uppercase text-[color:var(--accent-1)] mb-2.5"
                >
                  Case Study
                </div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-2"
                >
                  Qompyl: 60+ States Before Beta
                </h4>
                <p class="text-[14px] text-[color:var(--ink-soft)] m-0 leading-[1.6]">
                  See the framework applied to a real fintech app.
                </p>
              </NuxtLink>

              <NuxtLink
                to="/blog/ga4-data-api-for-designers"
                class="block bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 text-inherit transition-all duration-250 relative overflow-hidden group hover:-translate-y-1 hover:border-[color:var(--accent-1)]/35 hover:bg-[color:var(--input-bg)]"
              >
                <span
                  class="absolute top-[22px] right-[24px] text-[color:var(--ink-soft)] transition-all duration-250 text-[18px] group-hover:translate-x-1 group-hover:text-[color:var(--accent-1)]"
                  >→</span
                >
                <div
                  class="font-mono text-[10.5px] tracking-[1.5px] uppercase text-[color:var(--accent-1)] mb-2.5"
                >
                  Technical Guide
                </div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-2"
                >
                  The 3-Signal Rule
                </h4>
                <p class="text-[14px] text-[color:var(--ink-soft)] m-0 leading-[1.6]">
                  How to measure trust-building with GA4 + Clarity.
                </p>
              </NuxtLink>

              <NuxtLink
                to="/contact"
                class="block bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[14px] p-6 text-inherit transition-all duration-250 relative overflow-hidden group hover:-translate-y-1 hover:border-[color:var(--accent-1)]/35 hover:bg-[color:var(--input-bg)]"
              >
                <span
                  class="absolute top-[22px] right-[24px] text-[color:var(--ink-soft)] transition-all duration-250 text-[18px] group-hover:translate-x-1 group-hover:text-[color:var(--accent-1)]"
                  >→</span
                >
                <div
                  class="font-mono text-[10.5px] tracking-[1.5px] uppercase text-[color:var(--accent-1)] mb-2.5"
                >
                  Free Audit
                </div>
                <h4
                  class="text-[16.5px] font-bold text-[color:var(--ink)] mb-2"
                >
                  Is your onboarding leaking?
                </h4>
                <p class="text-[14px] text-[color:var(--ink-soft)] m-0 leading-[1.6]">
                  Send a 90-second Loom — get a 5-min reply.
                </p>
              </NuxtLink>
            </div>
          </div>

          <!-- Newsletter -->
          <NewsletterForm />

          <!-- ✅ NEW CTA with Loom offer -->
          <div class="mt-24 pt-10 border-t border-[color:var(--card-border)]">
            <PlaybookCTA
              title="Send me a 90-second Loom of your onboarding flow"
              description="I'll record you a 5-minute reply with the exact 3 fears killing your conversion — free, no strings. Whether we work together or not, you'll leave with something actionable."
              button-text="Get Your Free Friction Map"
              :deliverables="[
                { code: 'loom/', text: '90-second Loom of your flow' },
                { code: 'reply/', text: '5-min video with 3 priorities' },
                { code: 'followup/', text: 'Written summary — no obligation' },
              ]"
              :target-metric="70"
            />
          </div>
        </article>

        <!-- ============ SIDEBAR ============ -->
        <aside
          class="hidden xl:flex flex-col gap-7 xl:col-span-4 sticky top-[100px]"
        >
          <!-- TOC -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-all duration-300"
          >
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-6"
              >On this page</span
            >
            <ul class="flex flex-col gap-4">
              <li>
                <a
                  href="#cost"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block"
                  >The Real Cost</a
                >
              </li>
              <li>
                <a
                  href="#five-fears"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block"
                  >The 5 Fears</a
                >
              </li>
              <li>
                <a
                  href="#trust-stack"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block"
                  >The Trust Stack</a
                >
              </li>
              <li>
                <a
                  href="#compliance"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block"
                  >Compliance as Journey</a
                >
              </li>
              <li>
                <a
                  href="#qompyl"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block"
                  >Qompyl Case Study</a
                >
              </li>
              <li>
                <a
                  href="#measure"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block"
                  >Measuring Success</a
                >
              </li>
              <li>
                <a
                  href="#faq"
                  class="text-[0.95rem] font-semibold text-[color:var(--ink-soft)] pl-4 border-l-2 border-[color:var(--card-border)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent-1)] transition-all block"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>

          <!-- Share -->
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-all duration-300"
          >
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-6"
              >Share Playbook</span
            >
            <div class="flex gap-4">
              <button
                @click="sharePlaybook('twitter')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Share on X"
              >
                <Icon name="simple-icons:x" class="w-4.5 h-4.5" />
              </button>
              <button
                @click="sharePlaybook('linkedin')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center text-[color:var(--ink)] hover:bg-gradient-to-br hover:from-[color:var(--accent-1)] hover:to-[color:var(--accent-2)] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Share on LinkedIn"
              >
                <Icon name="lucide:linkedin" class="w-4.5 h-4.5" />
              </button>
              <button
                @click="sharePlaybook('copy')"
                class="w-12 h-12 rounded-full border border-[color:var(--card-border)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
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
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(109,94,240,0.15)] transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[color:var(--accent-1)]/10 to-[color:var(--accent-2)]/10 text-[color:var(--accent-1)] flex items-center justify-center mb-6"
            >
              <Icon name="lucide:shield" class="w-6 h-6" />
            </div>
            <span
              class="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent-text)] mb-2"
              >Series</span
            >
            <h4
              class="text-[1.2rem] font-extrabold text-[color:var(--ink)] leading-[1.25] tracking-[-0.015em] mb-3"
            >
              Fintech UX
            </h4>
            <p
              class="text-[0.95rem] text-[color:var(--ink-soft)] leading-[1.65] mb-6"
            >
              Deep dives on designing for the highest-stakes vertical in
              product.
            </p>
            <NuxtLink
              to="/blog"
              class="inline-flex items-center gap-2 text-[0.9rem] font-extrabold text-[color:var(--ink)] hover:text-[color:var(--accent-text)] hover:gap-3 transition-all duration-200"
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

// ✅ EXPANDED FAQ — 8 questions, mixed Founder + Designer
// Optimized for SEO (keywords) + AEO (direct answers) + GEO (entities, context)
const faqItems = ref([
  {
    question: "How much does fintech onboarding design cost?",
    answer:
      "Fintech onboarding design typically ranges from $15K–$40K for a focused sprint (4-6 weeks, strategy through build) or $5K–$10K for an audit that identifies friction points. The cost is best framed against the leak: at 100K sign-ups and 70% KYC drop-off, a typical fintech loses $500K+ annually in LTV. The design investment is usually 5-10% of that leak.",
  },
  {
    question: "How long does fintech onboarding redesign take?",
    answer:
      "A focused sprint runs 4-6 weeks from kickoff to dev-ready specs — including research, wireframes, high-fidelity design, state documentation, and build if you're using a no-code platform. Larger platforms with multiple flows (KYC, account linking, first transaction) extend to 10-12 weeks. Full redesigns with legacy system migration take longer.",
  },
  {
    question: "What is the ROI of fixing fintech onboarding?",
    answer:
      "The measurable ROI comes from three numbers: KYC completion rate, time-to-first-transaction, and support ticket volume. A 20-point improvement in KYC completion at 100K annual sign-ups adds ~20,000 activated users. At $50 average LTV, that's $1M in added value — against a design investment of $15K–$40K.",
  },
  {
    question: "Is fintech onboarding different from SaaS onboarding?",
    answer:
      "Yes — fundamentally. SaaS focuses on feature adoption and quick wins, while fintech must first establish safety, legitimacy and regulatory compliance due to high emotional and financial stakes. Neglecting these trust layers leads to massive drop-off even for a technically 'user-friendly' product.",
  },
  {
    question: "How do I measure trust in fintech onboarding?",
    answer:
      "Trust is measured indirectly through three signals: Behavior (Clarity — rage clicks, quick backs), Intent (Search Console + GA4 — search queries, support volume), and Funnel (GA4 — KYC completion, form abandonment, time-to-first-transaction). When all three point the same direction, you have a decision.",
  },
  {
    question: "What's the biggest mistake fintech founders make with onboarding?",
    answer:
      "Prioritizing 'delight' or 'user-friendliness' before establishing foundational trust and safety. Designing micro-interactions when users are worried about losing money is like decorating a house with a crumbling foundation. Build in order: security → legitimacy → clarity → confidence → delight.",
  },
  {
    question: "Do I need to sacrifice UX for compliance?",
    answer:
      "No. Compliance can and should be integrated into a seamless experience. Progressive disclosure, real-time validation, and context before request transform compliance from a barrier into a guided, reassuring part of onboarding — directly addressing the Loss of Privacy fear.",
  },
  {
    question: "Can this framework work for B2B fintech too?",
    answer:
      "Yes. The 5 Fears Framework and Trust Stack Model apply to B2B fintech. The specific fears shift (regulatory penalties, loss of business reputation, procurement risk), but the psychological drivers — fear of loss, loss of control, need for legitimacy — remain identical. Stripe, Wise Business, and Mercury all demonstrate this.",
  },
]);

// ===================== SEO / HEAD + FAQPage Schema =====================
usePageMeta({
  title:
    "Designing for Fear: How to Build Trust in Fintech Onboarding Flows",
  description:
    "Most fintech onboarding loses 70% of users before the first transaction. Here's the 5-Fear Framework — with cost/ROI math — I use to design trust into every screen.",
  keywords: [
    "fintech onboarding design",
    "fintech onboarding cost",
    "reduce KYC drop-off",
    "fintech onboarding ROI",
    "trust design fintech",
    "KYC UX best practices",
    "fintech user trust",
    "banking app onboarding",
    "compliance UX design",
    "fintech onboarding redesign",
  ],
  ogType: "article",
  ogImage: "https://mamdouhghaneemy.com/images/blog/fintech-onboarding-trust-design-hero.png",
  article: {
    publishedTime: "2026-09-26T00:00:00Z",
    section: "Fintech",
    tags: ["Fintech", "Onboarding", "Trust Design", "KYC", "Compliance UX"],
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Playbooks", url: "/blog" },
    {
      name: "Designing for Fear",
      url: "/blog/designing-for-fear",
    },
  ],
  faqItems: faqItems.value,
});

// ===================== SHARE =====================
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