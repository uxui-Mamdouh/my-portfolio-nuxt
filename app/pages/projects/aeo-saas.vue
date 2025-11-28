<template>
  <div class="scroll-smooth">
    <div
      class="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors"
    >
      <CaseNavBar />

      <!-- Desktop Sidebar -->
      <div
        class="hidden lg:flex flex-col fixed left-0 top-16 h-screen w-64 p-8 xl:pl-12 justify-center border-r border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm z-10"
      >
        <div class="mb-12">
          <h1 class="text-xl font-bold text-neutral-800 dark:text-neutral-100">
            AEO SaaS
          </h1>
          <p
            class="text-xs text-neutral-400 dark:text-neutral-400 mt-1 uppercase tracking-widest font-semibold"
          >
            Case Study
          </p>
        </div>
        <nav class="flex flex-col space-y-1" id="sidebar-nav">
          <a
            href="#overview"
            class="nav-link text-left py-2 px-3 border-l-2 border-transparent text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:pl-4 transition-all duration-300"
            >Overview</a
          >
          <a
            href="#problem"
            class="nav-link text-left py-2 px-3 border-l-2 border-transparent text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:pl-4 transition-all duration-300"
            >The Problem</a
          >
          <a
            href="#process"
            class="nav-link text-left py-2 px-3 border-l-2 border-transparent text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:pl-4 transition-all duration-300"
            >Process</a
          >
          <a
            href="#insights"
            class="nav-link text-left py-2 px-3 border-l-2 border-transparent text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:pl-4 transition-all duration-300"
            >Insights</a
          >
          <a
            href="#solution"
            class="nav-link text-left py-2 px-3 border-l-2 border-transparent text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:pl-4 transition-all duration-300"
            >Solution</a
          >
          <a
            href="#impact"
            class="nav-link text-left py-2 px-3 border-l-2 border-transparent text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:pl-4 transition-all duration-300"
            >Impact</a
          >
          <a
            href="#reflection"
            class="nav-link text-left py-2 px-3 border-l-2 border-transparent text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 hover:pl-4 transition-all duration-300"
            >Reflection</a
          >
        </nav>
        <div
          class="mt-auto pt-8 border-t border-neutral-100 dark:border-neutral-800"
        >
          <div class="text-xs text-neutral-400 dark:text-neutral-400">
            <p>Lead Product Designer</p>
            <p class="font-medium text-neutral-600 dark:text-neutral-300 mt-1">
              Oct - Dec 2025
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div
        class="lg:pl-64 transition-all duration-300 bg-white dark:bg-neutral-900"
      >
        <!-- Hero -->
        <header
          class="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 lg:pt-0 max-w-7xl mx-auto"
        >
          <div class="max-w-4xl space-y-8 animate-fade-in-up">
            <div
              class="inline-flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
            >
              <span
                class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"
              ></span>
              <span>Case Study 2025</span>
            </div>

            <h1
              class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-neutral-900 dark:text-neutral-100 leading-[1.1]"
            >
              AEO SaaS
            </h1>

            <p
              class="text-xl md:text-2xl lg:text-3xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed font-light"
            >
              The First Platform to Measure Visibility Inside AI Answer Engines.
            </p>

            <div
              class="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm text-neutral-600 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-800 mt-8 w-full"
            >
              <div>
                <span
                  class="block text-neutral-400 dark:text-neutral-400 text-xs uppercase tracking-wider mb-1"
                  >Role</span
                >
                <span class="font-medium">Product Designer (Lead)</span>
              </div>
              <div>
                <span
                  class="block text-neutral-400 dark:text-neutral-400 text-xs uppercase tracking-wider mb-1"
                  >Tools</span
                >
                <span class="font-medium">Figma, FigJam, GA4</span>
              </div>
              <div>
                <span
                  class="block text-neutral-400 dark:text-neutral-400 text-xs uppercase tracking-wider mb-1"
                  >Impact</span
                >
                <span class="font-medium">New Market Category</span>
              </div>
            </div>
          </div>

          <div
            class="absolute bottom-10 left-6 md:left-24 animate-bounce text-neutral-400 dark:text-neutral-500"
          >
            <i data-lucide="arrow-down" class="w-6 h-6"></i>
          </div>
        </header>

        <!-- Overview -->
        <section
          id="overview"
          class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <div class="mb-12 md:mb-16">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
            >
              Project Overview
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              Oct – Dec 2025 • Product Designer (Lead)
            </p>
          </div>
          <div
            class="bg-white dark:bg-neutral-800 rounded-2xl p-8 border-l-4 border-indigo-500 shadow-sm dark:shadow-none"
          >
            <h3
              class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2"
            >
              <i data-lucide="target" class="text-indigo-500 w-6 h-6"></i>
              Strategic Goal
            </h3>
            <p
              class="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4"
            >
              Build the first SaaS platform dedicated to Answer Engine
              Optimization (AEO) — enabling marketers and agencies to measure,
              improve, and benchmark their brand’s visibility inside AI answer
              engines like ChatGPT, Claude, Gemini, and Perplexity.
            </p>
            <p class="font-semibold text-neutral-900 dark:text-neutral-100">
              Create a new market category, not just compete in an existing one.
            </p>
          </div>
        </section>

        <!-- Problem -->
        <section
          id="problem"
          class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-neutral-900 dark:bg-neutral-900 text-white dark:text-white rounded-3xl my-12 md:mx-auto max-w-[calc(100%-2rem)]"
        >
          <div class="md:px-4 py-4">
            <div class="mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-6">The Problem</h2>
              <div class="relative">
                <i
                  data-lucide="quote"
                  class="absolute -top-4 -left-6 text-neutral-700 dark:text-neutral-600 w-12 h-12 rotate-180 opacity-50"
                ></i>
                <p
                  class="text-2xl md:text-3xl font-light leading-snug text-neutral-200 dark:text-neutral-200 pl-4 italic"
                >
                  "I literally copy-paste my client’s URL into ChatGPT every
                  Monday… just to see if we’re mentioned."
                </p>
                <div class="mt-4 pl-4 flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-neutral-700 dark:bg-neutral-700 flex items-center justify-center font-bold"
                  >
                    M
                  </div>
                  <div class="text-sm text-neutral-400 dark:text-neutral-300">
                    <span class="font-bold text-white dark:text-white block"
                      >Maya</span
                    >
                    SEO Agency Owner
                  </div>
                </div>
              </div>
            </div>

            <div
              class="grid md:grid-cols-2 gap-12 mt-16 border-t border-neutral-800 dark:border-neutral-700 pt-12"
            >
              <div>
                <h3
                  class="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-2"
                >
                  <i data-lucide="alert-triangle" class="w-5 h-5"></i> Core Pain
                  Points
                </h3>
                <ul class="space-y-4">
                  <li class="flex gap-3 text-neutral-300 dark:text-neutral-300">
                    <span class="text-neutral-500 dark:text-neutral-400 mt-1"
                      >01.</span
                    >
                    <span
                      ><strong>Zero visibility</strong> inside AI answers — no
                      tools exist to measure this.</span
                    >
                  </li>
                  <li class="flex gap-3 text-neutral-300 dark:text-neutral-300">
                    <span class="text-neutral-500 dark:text-neutral-400 mt-1"
                      >02.</span
                    >
                    <span
                      ><strong>Manual workflows</strong> waste 2+ hours/week per
                      client.</span
                    >
                  </li>
                  <li class="flex gap-3 text-neutral-300 dark:text-neutral-300">
                    <span class="text-neutral-500 dark:text-neutral-400 mt-1"
                      >03.</span
                    >
                    <span
                      ><strong>Competitor blindness</strong>: Agencies can’t
                      tell if rivals are being cited.</span
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2"
                >
                  <i data-lucide="search" class="w-5 h-5"></i> Market Gap
                </h3>
                <p
                  class="text-neutral-300 dark:text-neutral-300 leading-relaxed mb-6"
                >
                  While tools like Ahrefs and SEMrush dominate SERP analytics,
                  <span
                    class="text-white dark:text-white font-semibold border-b border-purple-500"
                    >none offer AI-answer visibility tracking.</span
                  >
                </p>
                <p class="text-neutral-400 dark:text-neutral-400 text-sm">
                  This is a white space — and an opportunity to define the
                  category.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Process -->
        <section
          id="process"
          class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-neutral-50/50 dark:bg-neutral-900/10 transition-colors"
        >
          <div class="mb-12 md:mb-16">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
            >
              My Process
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              A full product design lifecycle from discovery to delivery.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Discovery -->
            <div
              class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-md transition-all group"
            >
              <div
                class="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
              >
                <i data-lucide="search" class="w-5 h-5"></i>
              </div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Discover
              </h3>
              <p
                class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                Stakeholder Kick-off, Competitive Scan, 12 User Interviews
              </p>
            </div>

            <!-- Define -->
            <div
              class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-md transition-all group"
            >
              <div
                class="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
              >
                <i data-lucide="pen-tool" class="w-5 h-5"></i>
              </div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Define
              </h3>
              <p
                class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                Persona (Maya), JTBD, As-Is Journey Map, Service Blueprint
              </p>
            </div>

            <!-- Ideate -->
            <div
              class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-md transition-all group"
            >
              <div
                class="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
              >
                <i data-lucide="lightbulb" class="w-5 h-5"></i>
              </div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Ideate
              </h3>
              <p
                class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                HMW Questions, Crazy-8s, Storyboards, Impact vs Effort
              </p>
            </div>

            <!-- Prototype -->
            <div
              class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-md transition-all group"
            >
              <div
                class="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
              >
                <i data-lucide="monitor" class="w-5 h-5"></i>
              </div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Prototype
              </h3>
              <p
                class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                Low-Fi, Mid-Fi (Content), High-Fi (Micro-copy)
              </p>
            </div>

            <!-- Test -->
            <div
              class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-md transition-all group"
            >
              <div
                class="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
              >
                <i data-lucide="user-check" class="w-5 h-5"></i>
              </div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Test
              </h3>
              <p
                class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                Usability Testing, Iteration Cycles
              </p>
            </div>

            <!-- Deliver -->
            <div
              class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-md transition-all group"
            >
              <div
                class="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
              >
                <i data-lucide="package" class="w-5 h-5"></i>
              </div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Deliver
              </h3>
              <p
                class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                Design System, Motion Guidelines, Dev Hand-off
              </p>
            </div>

            <!-- Measure -->
            <div
              class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-md transition-all group md:col-span-2 lg:col-span-2"
            >
              <div
                class="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
              >
                <i data-lucide="bar-chart-2" class="w-5 h-5"></i>
              </div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2"
              >
                Measure
              </h3>
              <p
                class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                Event Tracking (GA4 + GTM), Success Metrics
              </p>
            </div>
          </div>
        </section>

        <!-- Insights -->
        <section
          id="insights"
          class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <div class="mb-12 md:mb-16">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
            >
              Key Insights
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              From 12 user interviews, three powerful insights emerged.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Insight 1 -->
            <div
              class="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700 flex flex-col"
            >
              <i
                data-lucide="message-square"
                class="text-neutral-300 dark:text-neutral-500 mb-4 w-6 h-6"
              ></i>
              <p
                class="font-serif italic text-lg text-neutral-700 dark:text-neutral-300 mb-6 flex-grow"
              >
                "I don’t need a report — I need a number I can screenshot."
              </p>
              <div
                class="pt-4 border-t border-neutral-200 dark:border-neutral-700"
              >
                <p
                  class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-1"
                >
                  Insight
                </p>
                <p
                  class="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
                >
                  Users want a single, shareable metric (AEO Score) to prove
                  value.
                </p>
              </div>
            </div>
            <!-- Insight 2 -->
            <div
              class="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700 flex flex-col"
            >
              <i
                data-lucide="message-square"
                class="text-neutral-300 dark:text-neutral-500 mb-4 w-6 h-6"
              ></i>
              <p
                class="font-serif italic text-lg text-neutral-700 dark:text-neutral-300 mb-6 flex-grow"
              >
                "If I can’t measure it, I can’t sell it."
              </p>
              <div
                class="pt-4 border-t border-neutral-200 dark:border-neutral-700"
              >
                <p
                  class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-1"
                >
                  Insight
                </p>
                <p
                  class="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
                >
                  The lack of AI visibility data blocks upsells and client
                  trust.
                </p>
              </div>
            </div>
            <!-- Insight 3 -->
            <div
              class="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700 flex flex-col"
            >
              <i
                data-lucide="message-square"
                class="text-neutral-300 dark:text-neutral-500 mb-4 w-6 h-6"
              ></i>
              <p
                class="font-serif italic text-lg text-neutral-700 dark:text-neutral-300 mb-6 flex-grow"
              >
                "AEO is the next frontier — but there’s no standard."
              </p>
              <div
                class="pt-4 border-t border-neutral-200 dark:border-neutral-700"
              >
                <p
                  class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-1"
                >
                  Insight
                </p>
                <p
                  class="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
                >
                  We have a rare chance to define the category, not just enter
                  it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Solution -->
        <section
          id="solution"
          class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <div class="mb-12 md:mb-16">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
            >
              The Solution
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              Designed around Maya's Job-To-Be-Done: Clarity over complexity.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Abstract UI Mockup -->
            <div class="relative order-2 lg:order-1">
              <div
                class="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-[2rem] opacity-50 blur-xl"
              ></div>
              <div
                class="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl dark:shadow-none border border-neutral-200 dark:border-neutral-700 overflow-hidden"
              >
                <!-- Mock Header -->
                <div
                  class="h-12 border-b border-neutral-100 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 flex items-center px-4 gap-2"
                >
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                <!-- Mock Body -->
                <div class="p-8 space-y-8">
                  <!-- Big Score -->
                  <div class="flex justify-between items-end">
                    <div>
                      <p
                        class="text-sm font-medium text-neutral-400 dark:text-neutral-300 uppercase tracking-wider mb-2"
                      >
                        AEO Visibility Score
                      </p>
                      <h3
                        class="text-6xl font-black text-neutral-900 dark:text-neutral-100"
                      >
                        78<span
                          class="text-2xl text-neutral-400 dark:text-neutral-300 font-medium"
                          >/100</span
                        >
                      </h3>
                    </div>
                    <div
                      class="px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-bold rounded-lg flex items-center gap-2"
                    >
                      <i data-lucide="check-circle-2" class="w-4 h-4"></i> Top
                      10%
                    </div>
                  </div>

                  <!-- Graph Placeholder (HTML/CSS Implementation) -->
                  <div class="h-32 flex items-end gap-2">
                    <div
                      class="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-t-lg relative overflow-hidden group"
                    >
                      <div
                        class="absolute bottom-0 w-full bg-neutral-300 dark:bg-neutral-600 transition-all duration-1000 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500"
                        style="height: 40%"
                      ></div>
                    </div>
                    <div
                      class="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-t-lg relative overflow-hidden group"
                    >
                      <div
                        class="absolute bottom-0 w-full bg-neutral-300 dark:bg-neutral-600 transition-all duration-1000 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500"
                        style="height: 65%"
                      ></div>
                    </div>
                    <div
                      class="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-t-lg relative overflow-hidden group"
                    >
                      <div
                        class="absolute bottom-0 w-full bg-neutral-300 dark:bg-neutral-600 transition-all duration-1000 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500"
                        style="height: 50%"
                      ></div>
                    </div>
                    <div
                      class="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-t-lg relative overflow-hidden group"
                    >
                      <div
                        class="absolute bottom-0 w-full bg-neutral-300 dark:bg-neutral-600 transition-all duration-1000 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500"
                        style="height: 80%"
                      ></div>
                    </div>
                    <div
                      class="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-t-lg relative overflow-hidden group"
                    >
                      <div
                        class="absolute bottom-0 w-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-1000"
                        style="height: 78%"
                      ></div>
                    </div>
                  </div>

                  <!-- List Items -->
                  <div class="space-y-3">
                    <div
                      class="h-12 w-full bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                    <div
                      class="h-12 w-full bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                    <div
                      class="h-12 w-full bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <div class="space-y-8 order-1 lg:order-2">
              <div class="grid grid-cols-1 gap-4">
                <!-- Feature 1 -->
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                  >
                    <i data-lucide="zap" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      AEO Score (0–100)
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      A clear, proprietary metric for AI visibility. No more
                      ambiguity.
                    </p>
                  </div>
                </div>
                <!-- Feature 2 -->
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                  >
                    <i data-lucide="layers" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      Competitor Gap Analysis
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      See exactly when rivals get cited and you don't.
                    </p>
                  </div>
                </div>
                <!-- Feature 3 -->
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  >
                    <i data-lucide="file-text" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      Branded PDF Export
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      Generate client-ready reports in one click.
                    </p>
                  </div>
                </div>
                <!-- Feature 4 -->
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                  >
                    <i data-lucide="bell" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      Real-Time Alerts
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      Get notified the moment a competitor appears in ChatGPT.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-neutral-900 dark:bg-neutral-900 text-white p-6 rounded-xl mt-8"
              >
                <h4 class="font-bold mb-2">Why this design?</h4>
                <ul class="space-y-2 text-neutral-300">
                  <li class="flex gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-4 h-4 text-indigo-400"
                    ></i>
                    One big number, not 10 confusing graphs.
                  </li>
                  <li class="flex gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-4 h-4 text-indigo-400"
                    ></i>
                    Actionable output: Every screen ends with a "next step".
                  </li>
                  <li class="flex gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-4 h-4 text-indigo-400"
                    ></i>
                    Client-ready: Built to be screenshotted.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- ========================= -->
        <!-- Dashboard Sub-Views – Dark Mode Enhanced -->
        <!-- (If you keep both sections, remove duplicates; kept both in case you need the original + enhanced) -->
        <!-- ========================= -->

        <section
          id="dashboard-subviews"
          class="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white dark:bg-neutral-900 transition-colors"
        >
          <!-- Header -->
          <div class="mb-14">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
            >
              Dashboard Sub-Views – The Full Experience
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed"
            >
              To give Maya a complete and intuitive workflow, the dashboard
              includes 4 core sub-views—each designed to eliminate friction,
              reduce manual work, and give her full visibility across all SEO
              operations.
            </p>
          </div>

          <!-- Grid -->
          <div class="grid md:grid-cols-2 gap-10 lg:gap-14">
            <!-- Sites -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center"
                >
                  <i data-lucide="globe" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Sites View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Your sites at a glance
                  </p>
                </div>
              </div>

              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Before, Maya had to track 17 sites manually across tabs and
                spreadsheets. Now she manages everything in one unified pane,
                with instant overview and structured hierarchy.
              </p>

              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Sites-view.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>

              <!-- <div
                class="bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl p-6 mb-6"
              >
                <p class="text-neutral-400 dark:text-neutral-300 text-sm">
                  No sites yet – add your first one.
                </p>
              </div>

              <button
                class="px-5 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
              >
                Add site
              </button> -->
            </div>

            <!-- Reports -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 flex items-center justify-center"
                >
                  <i data-lucide="file-text" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Reports View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Your reports at a glance
                  </p>
                </div>
              </div>

              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Maya used to export 5 different SEO reports weekly. With the new
                system, she generates one branded PDF in seconds—ready to share
                with stakeholders.
              </p>

              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/report-view.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>

              <!-- <div
                class="bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl p-6 mb-6"
              >
                <p class="text-neutral-400 dark:text-neutral-300 text-sm">
                  No reports yet – export your first one.
                </p>
              </div>

              <button
                class="px-5 py-3 bg-purple-600 text-white dark:bg-purple-500 dark:text-neutral-900 rounded-xl text-sm font-medium hover:bg-purple-500 dark:hover:bg-purple-400 transition-all"
              >
                Export report
              </button> -->
            </div>

            <!-- Alerts -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 flex items-center justify-center"
                >
                  <i data-lucide="bell" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Alerts View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Your alerts at a glance
                  </p>
                </div>
              </div>

              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Maya no longer needs to manually check competitors. Real-time
                citations and alerts ensure she reacts instantly to market
                shifts.
              </p>

              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Alert-view.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>

              <div
                class="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 px-3 py-1 rounded-full text-xs font-medium mb-6"
              >
                <span
                  class="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full"
                ></span>
                3 new alerts
              </div>

              <div
                class="bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl p-6"
              >
                <p class="text-neutral-400 dark:text-neutral-300 text-sm">
                  All quiet – we'll notify you when competitors get cited.
                </p>
              </div>
            </div>

            <!-- Help -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 flex items-center justify-center"
                >
                  <i data-lucide="help-circle" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Help View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Help at a glance
                  </p>
                </div>
              </div>

              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Instead of searching for answers across docs and chat threads,
                Maya gets unified, contextual help directly inside her workflow.
              </p>

              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Help&Support-view.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>

              <div class="space-y-4">
                <div
                  class="h-12 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl flex items-center px-4"
                >
                  <div
                    class="w-4 h-4 bg-neutral-300 dark:bg-neutral-500 rounded"
                  ></div>
                  <div
                    class="ml-3 w-32 h-2 rounded bg-neutral-200 dark:bg-neutral-500"
                  ></div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div
                    class="h-10 bg-neutral-50 dark:bg-neutral-700 border dark:border-neutral-600 rounded-xl"
                  ></div>
                  <div
                    class="h-10 bg-neutral-50 dark:bg-neutral-700 border dark:border-neutral-600 rounded-xl"
                  ></div>
                </div>

                <div
                  class="h-12 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl flex items-center px-4"
                >
                  <div class="w-4 h-4 bg-green-400 rounded-full"></div>
                  <span
                    class="ml-3 text-neutral-500 dark:text-neutral-300 text-sm"
                    >Live chat support</span
                  >
                </div>

                <div
                  class="h-10 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl flex items-center px-4"
                >
                  <div class="w-3 h-3 bg-indigo-500 rounded"></div>
                  <span
                    class="ml-3 text-neutral-500 dark:text-neutral-300 text-sm"
                    >Send feedback</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Impact -->
        <section
          id="impact"
          class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <div class="mb-12 md:mb-16">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
            >
              Impact & Results
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              Quantifiable results from the MVP launch.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Metrics Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                class="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm dark:shadow-none border border-neutral-100 dark:border-neutral-700 flex flex-col justify-between"
              >
                <div
                  class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300 flex items-center justify-center mb-4"
                >
                  <i data-lucide="trending-up" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3
                    class="text-5xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight"
                  >
                    83%
                  </h3>
                  <p
                    class="text-neutral-500 dark:text-neutral-400 mt-2 font-medium"
                  >
                    of users said "This solves my core problem."
                  </p>
                </div>
              </div>

              <div
                class="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm dark:shadow-none border border-neutral-100 dark:border-neutral-700 flex flex-col justify-between"
              >
                <div
                  class="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-4"
                >
                  <i data-lucide="users" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3
                    class="text-5xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight"
                  >
                    70%
                  </h3>
                  <p
                    class="text-neutral-500 dark:text-neutral-400 mt-2 font-medium"
                  >
                    Exported a report within 14 days (North Star Metric).
                  </p>
                </div>
              </div>

              <div
                class="col-span-1 sm:col-span-2 bg-neutral-900 dark:bg-neutral-900 p-8 rounded-2xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div>
                  <h4 class="text-2xl font-bold">MVP Pricing Strategy</h4>
                  <p class="text-neutral-400 dark:text-neutral-400 mt-1">
                    20% below competitors like Writesonic GEO.
                  </p>
                </div>
                <div class="text-4xl font-bold text-indigo-400">
                  $79<span
                    class="text-xl text-neutral-500 dark:text-neutral-400 font-normal"
                    >/mo</span
                  >
                </div>
              </div>
            </div>

            <!-- Chart (HTML/CSS Implementation) -->
            <div
              class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-700 flex flex-col justify-center"
            >
              <div class="mb-6">
                <div
                  class="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-lg mb-1"
                >
                  <i data-lucide="clock" class="text-indigo-500 w-5 h-5"></i>
                  Report Creation Time (Minutes)
                </div>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                  Drastic reduction in workflow time per client.
                </p>
              </div>

              <div class="space-y-6 w-full mt-4">
                <!-- Bar 1: Manual -->
                <div class="w-full">
                  <div
                    class="flex justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-1 font-medium"
                  >
                    <span>Manual Process</span>
                    <span class="font-bold">45 min</span>
                  </div>
                  <div class="bg-neutral-200 dark:bg-neutral-700">
                    <div
                      class="h-10 bg-indigo-500 dark:bg-indigo-400 rounded-sm w-full flex items-center px-3 animate-[grow_1s_ease-out]"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>

                <!-- Bar 2: AEO SaaS -->
                <div class="w-full">
                  <div
                    class="flex justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-1 font-medium"
                  >
                    <span>AEO SaaS</span>
                    <span class="font-bold text-indigo-600 dark:text-indigo-400"
                      >5 min</span
                    >
                  </div>
                  <div class="bg-neutral-200 dark:bg-neutral-700">
                    <div
                      class="h-10 bg-indigo-500 dark:bg-indigo-400 rounded-sm flex items-center px-3 animate-[grow_1s_ease-out]"
                      style="width: 11%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Reflection -->
        <section
          id="reflection"
          class="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24"
        >
          <div
            class="bg-neutral-100 dark:bg-neutral-800 rounded-3xl p-8 md:p-16"
          >
            <h2
              class="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100"
            >
              Reflection
            </h2>
            <div class="grid lg:grid-cols-2 gap-12">
              <div>
                <p
                  class="text-xl text-neutral-700 dark:text-neutral-300 font-light mb-8"
                >
                  "In emerging markets, design isn’t just about interfaces —
                  it’s about defining the rules of the game."
                </p>
                <h4
                  class="font-bold text-neutral-900 dark:text-neutral-100 mb-4"
                >
                  What I Learned
                </h4>
                <ul
                  class="space-y-3 text-neutral-600 dark:text-neutral-400 mb-8"
                >
                  <li class="flex gap-2">
                    ✓ The real product isn’t the dashboard — it’s proof of value
                    for the client.
                  </li>
                  <li class="flex gap-2">
                    ✓ Simplicity wins: One metric &gt; ten ambiguous charts.
                  </li>
                  <li class="flex gap-2">
                    ✓ Category creation &gt; feature competition.
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  class="font-bold text-neutral-900 dark:text-neutral-100 mb-4"
                >
                  Next Steps
                </h4>
                <ul class="space-y-4">
                  <li
                    class="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm dark:shadow-none"
                  >
                    <span
                      class="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-xs text-neutral-300"
                      >1</span
                    >
                    Launch MVP to 300 active users.
                  </li>
                  <li
                    class="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm dark:shadow-none"
                  >
                    <span
                      class="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-xs text-neutral-300"
                      >2</span
                    >
                    Validate “AEO Score” as an industry benchmark.
                  </li>
                  <li
                    class="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm dark:shadow-none"
                  >
                    <span
                      class="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-xs text-neutral-300"
                      >3</span
                    >
                    Integrate with Google Search Console.
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-700"
            >
              <h4
                class="font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-sm uppercase tracking-wide"
              >
                Accessibility & Design System
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs text-neutral-500 dark:text-neutral-300"
                  >WCAG 2.2 AA compliant</span
                >
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs text-neutral-500 dark:text-neutral-300"
                  >Design Tokens</span
                >
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs text-neutral-500 dark:text-neutral-300"
                  >Re-usable Components</span
                >
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs text-neutral-500 dark:text-neutral-300"
                  >ARIA labels</span
                >
                <span
                  class="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs text-neutral-500 dark:text-neutral-300"
                  >Keyboard nav</span
                >
              </div>
            </div>
          </div>

          <div class="mt-24 text-center">
            <h3
              class="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
            >
              This isn’t just another SEO tool.
            </h3>
            <p class="text-xl text-neutral-500 dark:text-neutral-400">
              It’s the first lens into the black box of AI answers.
            </p>
          </div>
        </section>

        <CaseFooterNav
          :prev="{
            title: 'Doctor Booking App ',
            link: '/projects/doctor-booking-app',
            image: imgDoctor,
          }"
          :next="{
            title: 'Strategic Portfolio',
            link: '/projects/strategic-portfolio',
            image: imgPortfolio,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import imgPortfolio from "/images/Product-Deesigner-case-study.png";
import imgDoctor from "/images/Doctor-Booking-App-Case-Study.png";

useHead({
  title:
    "Case Study: AEO SaaS — Measuring AI Answer Visibility | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "AEO SaaS — The first platform to measure visibility inside AI answer engines like ChatGPT, Claude, Gemini, and Perplexity. A full product design case study by Mamdouh Ghaneemy. October–December 2025.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "AEO SaaS — Measuring AI Answer Visibility (Case Study)",
    },
    {
      property: "og:description",
      content:
        "Explore how AEO SaaS was designed to give marketers and agencies visibility inside AI answer engines — a full case study by product designer Mamdouh Ghaneemy.",
    },
    {
      property: "og:image",
      content:
        "https://mamdouh-ghaneemy.com/img/projects/aeo-saas/og-image.jpg", // ← تأكد أن الصورة موجودة في هذا المسار أو عدّل المسار حسب ملفاتك
    },
    {
      property: "og:url",
      content: "https://mamdouh-ghaneemy.com/projects/aeo-saas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});

onMounted(() => {
  // Dynamically load lucide if not present
  function loadLucide(cb) {
    if (typeof window !== "undefined" && window.lucide) {
      cb();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://unpkg.com/lucide@latest";
    s.async = true;
    s.onload = () => {
      if (window.lucide) window.lucide.createIcons();
      cb();
    };
    document.head.appendChild(s);
  }

  loadLucide(() => {
    try {
      if (window.lucide) window.lucide.createIcons();
    } catch (e) {
      // ignore
    }
  });

  // Mobile Menu Toggle (mirrors original behavior)
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  let isMenuOpen = false;

  if (btn) {
    btn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        menu.classList.remove("hidden");
        if (icon) icon.setAttribute("data-lucide", "x");
      } else {
        menu.classList.add("hidden");
        if (icon) icon.setAttribute("data-lucide", "menu");
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Close mobile menu on link click
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false;
      if (menu) menu.classList.add("hidden");
      if (icon) icon.setAttribute("data-lucide", "menu");
      if (window.lucide) window.lucide.createIcons();
    });
  });

  // Scroll Spy (Active Section Highlighting)
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          // Reset all links
          link.classList.remove(
            "border-neutral-900",
            "text-neutral-900",
            "font-semibold",
            "pl-4"
          );
          link.classList.add(
            "border-transparent",
            "text-neutral-500",
            "hover:text-neutral-800",
            "hover:pl-4"
          );

          // Highlight active link
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.remove(
              "border-transparent",
              "text-neutral-500",
              "hover:text-neutral-800",
              "hover:pl-4"
            );
            link.classList.add(
              "border-neutral-900",
              "text-neutral-900",
              "font-semibold",
              "pl-4"
            );
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});
</script>

<style scoped>
/* copy of original small style tweaks */
:root {
  --inter-font: "Inter", sans-serif;
}
html,
body {
  font-family: var(--inter-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar (original) */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  background: #d4d4d4;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a3a3a3;
}
</style>
