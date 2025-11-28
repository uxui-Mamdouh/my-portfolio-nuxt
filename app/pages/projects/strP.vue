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
            Strategic Portfolio
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
      <main
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
              Strategic Portfolio
            </h1>
            <p
              class="text-xl md:text-2xl lg:text-3xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed font-light"
            >
              A portfolio that answers hiring managers' questions in under 10
              seconds.
            </p>
            <div
              class="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm text-neutral-600 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-800 mt-8 w-full"
            >
              <div>
                <span
                  class="block text-neutral-400 dark:text-neutral-400 text-xs uppercase tracking-wider mb-1"
                  >Role</span
                >
                <span class="font-medium">Product Designer</span>
              </div>
              <div>
                <span
                  class="block text-neutral-400 dark:text-neutral-400 text-xs uppercase tracking-wider mb-1"
                  >Tools</span
                >
                <span class="font-medium">Figma, Nuxt.js, GTM</span>
              </div>
              <div>
                <span
                  class="block text-neutral-400 dark:text-neutral-400 text-xs uppercase tracking-wider mb-1"
                  >Impact</span
                >
                <span class="font-medium">Proves Thinking > UI</span>
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
              Oct – Dec 2025 • Product Designer
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
              Transform the portfolio from a passive gallery into an active
              hiring tool that proves strategic thinking before the first click.
            </p>
            <p class="font-semibold text-neutral-900 dark:text-neutral-100">
              Design for Olena, Alex, and Mariia — not for other designers.
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
                  "I open portfolios hoping to see how they think — but I just
                  see pretty screens."
                </p>
                <div class="mt-4 pl-4 flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-neutral-700 dark:bg-neutral-700 flex items-center justify-center font-bold"
                  >
                    O
                  </div>
                  <div class="text-sm text-neutral-400 dark:text-neutral-300">
                    <span class="font-bold text-white dark:text-white block"
                      >Olena</span
                    >
                    Design Manager, SaaS Startup
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grid md:grid-cols-2 gap-12 mt-16 border-t border-neutral-800 dark:border-neutral-700 pt-12"
            >
              <div>
                <h3
                  class="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"
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
                      ><strong>No proof of thinking</strong> — most portfolios
                      start with Figma, not research.</span
                    >
                  </li>
                  <li class="flex gap-3 text-neutral-300 dark:text-neutral-300">
                    <span class="text-neutral-500 dark:text-neutral-400 mt-1"
                      >02.</span
                    >
                    <span
                      ><strong>Generic case studies</strong> — don’t answer “Can
                      you solve *my* problem?”</span
                    >
                  </li>
                  <li class="flex gap-3 text-neutral-300 dark:text-neutral-300">
                    <span class="text-neutral-500 dark:text-neutral-400 mt-1"
                      >03.</span
                    >
                    <span
                      ><strong>Missing technical proof</strong> — no Dev Handoff
                      or tracking.</span
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
                  While designers focus on aesthetics, hiring managers need
                  <span
                    class="text-white dark:text-white font-semibold border-b border-purple-500"
                    >proof of strategic thinking and execution readiness</span
                  >.
                </p>
                <p class="text-neutral-400 dark:text-neutral-400 text-sm">
                  This is a white space — and an opportunity to redefine the
                  portfolio.
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
              From problem discovery to measurable impact.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                User interviews, competitive audit, pain point mapping
              </p>
            </div>
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
                Personas (Olena, Alex), UVP, content-first structure
              </p>
            </div>
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
                Wireflows, CTA strategy, navigation logic
              </p>
            </div>
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
                Interactive flows, dev-ready handoff
              </p>
            </div>
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
                Clarity testing with target personas
              </p>
            </div>
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
                Nuxt.js + Tailwind implementation
              </p>
            </div>
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
                GTM + GA4 event tracking, conversion monitoring
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
              From user interviews and behavioral data.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
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
                "I need to know if you can solve problems — not just make things
                look good."
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
                  Hiring managers want proof of independent thinking, not just
                  UI polish.
                </p>
              </div>
            </div>
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
                "If I can't find what I need in 10 seconds, I move on."
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
                  Attention is scarce — clarity must be instant.
                </p>
              </div>
            </div>
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
                "Show me your process, not just the final screen."
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
                  Transparency builds trust faster than perfection.
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
              Designed around hiring manager needs.
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1">
              <div
                class="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-[2rem] opacity-50 blur-xl"
              ></div>
              <div
                class="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl dark:shadow-none border border-neutral-200 dark:border-neutral-700 overflow-hidden"
              >
                <div
                  class="h-12 border-b border-neutral-100 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 flex items-center px-4 gap-2"
                >
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="p-8 space-y-8">
                  <div class="flex justify-between items-end">
                    <div>
                      <p
                        class="text-sm font-medium text-neutral-400 dark:text-neutral-300 uppercase tracking-wider mb-2"
                      >
                        UVP Section
                      </p>
                      <h3
                        class="text-3xl font-black text-neutral-900 dark:text-neutral-100"
                      >
                        Turns complex digital products into intuitive
                        experiences.
                      </h3>
                    </div>
                  </div>
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
            <div class="space-y-8 order-1 lg:order-2">
              <div class="grid grid-cols-1 gap-4">
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
                      Content-First Structure
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      All copy written before any frame was created.
                    </p>
                  </div>
                </div>
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
                      Persona-Driven Navigation
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      Paths for Olena, Alex, and Mariia built into the IA.
                    </p>
                  </div>
                </div>
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
                      Dev-Ready Handoff
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      Nuxt.js + Tailwind CSS components ready for
                      implementation.
                    </p>
                  </div>
                </div>
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                  >
                    <i data-lucide="bar-chart-2" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      Behavioral Tracking
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      GTM + GA4 events track engagement and conversion.
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
                    Answers Olena’s question in under 10 seconds.
                  </li>
                  <li class="flex gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-4 h-4 text-indigo-400"
                    ></i>
                    Proves technical fluency through real code.
                  </li>
                  <li class="flex gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-4 h-4 text-indigo-400"
                    ></i>
                    Tracks its own performance like a product.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- ========================= -->
        <!-- Portfolio Sections – The Full Experience -->
        <!-- Designed to answer the hiring manager's key questions at every step -->
        <!-- ========================= -->

        <section
          id="portfolio-sections"
          class="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white dark:bg-neutral-900 transition-colors"
        >
          <!-- Header -->
          <div class="mb-14">
            <h2
              class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
            >
              Portfolio Sections – The Full Experience
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed"
            >
              To give Olena, Alex, and Mariia a seamless journey from curiosity
              to decision, the portfolio is structured into 4 core sections —
              each designed to eliminate friction, prove strategic thinking, and
              deliver clarity in under 10 seconds.
            </p>
          </div>

          <!-- Grid -->
          <div class="grid md:grid-cols-2 gap-10 lg:gap-14">
            <!-- Home / Hero -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center"
                >
                  <i data-lucide="home" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Home View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    First impression, zero friction
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Before, portfolios buried the UVP behind animations. Now, it’s
                clear in the first 3 seconds: "Turns complex digital products
                into intuitive experiences."
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Home View.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Answers "What do you solve?" instantly
              </div>
            </div>

            <!-- Projects -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 flex items-center justify-center"
                >
                  <i data-lucide="folder" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Projects View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Your work at a glance
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Instead of generic thumbnails, each project starts with the
                problem statement and audience (Olena, Alex). This proves
                strategic thinking before the first click.
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Projects View.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Content-first design approach
              </div>
            </div>

            <!-- About Me -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 flex items-center justify-center"
                >
                  <i data-lucide="user" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    About Me View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Your story at a glance
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Most "About" pages are long bios. This one is a product pitch:
                Problem → Solution → Proof → CTA. No fluff, just clarity.
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/About Me View.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Built like a sales page, not a CV
              </div>
            </div>

            <!-- Contact -->
            <div
              class="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-all"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 flex items-center justify-center"
                >
                  <i data-lucide="mail" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Contact View
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Your call-to-action at a glance
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Instead of just an email, the contact section includes a simple
                form, social links, and a promise of fast response — reducing
                hesitation.
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Contact View.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Encourages action, not just viewing
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
              From real user behavior and feedback.
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-12">
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
                    +40%
                  </h3>
                  <p
                    class="text-neutral-500 dark:text-neutral-400 mt-2 font-medium"
                  >
                    Increase in time-on-site vs previous portfolio.
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
                    24%↑
                  </h3>
                  <p
                    class="text-neutral-500 dark:text-neutral-400 mt-2 font-medium"
                  >
                    Contact form submissions within first month.
                  </p>
                </div>
              </div>
              <div
                class="col-span-1 sm:col-span-2 bg-neutral-900 dark:bg-neutral-900 p-8 rounded-2xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div>
                  <h4 class="text-2xl font-bold">Tech-Ready Handoff</h4>
                  <p class="text-neutral-400 dark:text-neutral-400 mt-1">
                    Figma → Nuxt.js + Tailwind CSS — Dev-ready.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-700 flex flex-col justify-center"
            >
              <div class="mb-6">
                <div
                  class="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-lg mb-1"
                >
                  <i data-lucide="clock" class="text-indigo-500 w-5 h-5"></i>
                  Time to First Insight (Seconds)
                </div>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                  How fast users understand your value.
                </p>
              </div>
              <div class="space-y-6 w-full mt-4">
                <div class="w-full">
                  <div
                    class="flex justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-1 font-medium"
                  >
                    <span>Traditional Portfolios</span>
                    <span class="font-bold">22 sec avg</span>
                  </div>
                  <div class="bg-neutral-200 dark:bg-neutral-700">
                    <div
                      class="h-10 bg-red-500 dark:bg-red-400 rounded-sm w-full flex items-center px-3"
                      style="width: 100%"
                    ></div>
                  </div>
                </div>
                <div class="w-full">
                  <div
                    class="flex justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-1 font-medium"
                  >
                    <span>Strategic Portfolio</span>
                    <span class="font-bold text-indigo-600 dark:text-indigo-400"
                      >6 sec</span
                    >
                  </div>
                  <div class="bg-neutral-200 dark:bg-neutral-700">
                    <div
                      class="h-10 bg-indigo-500 dark:bg-indigo-400 rounded-sm flex items-center px-3"
                      style="width: 27%"
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
                  "Your portfolio isn't a gallery — it's your first product."
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
                    ✓ Design for the decision-maker, not the audience.
                  </li>
                  <li class="flex gap-2">
                    ✓ Technical proof builds more trust than visual polish.
                  </li>
                  <li class="flex gap-2">
                    ✓ If it doesn't track itself, it's not a product.
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
                    Add AI-powered project suggestions based on visitor role.
                  </li>
                  <li
                    class="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm dark:shadow-none"
                  >
                    <span
                      class="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-xs text-neutral-300"
                      >2</span
                    >
                    Integrate live conversion rate dashboard.
                  </li>
                  <li
                    class="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm dark:shadow-none"
                  >
                    <span
                      class="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-xs text-neutral-300"
                      >3</span
                    >
                    Publish "How I Think" guide as downloadable PDF.
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
              This isn’t just another portfolio.
            </h3>
            <p class="text-xl text-neutral-500 dark:text-neutral-400">
              It’s a hiring funnel disguised as a website.
            </p>
          </div>
        </section>

        <CaseFooterNav
          :prev="{
            title: 'E-Commerce Redesign',
            link: '/projects/ecommerce',
            image: '/img/projects/ecommerce.jpg',
          }"
          :next="{
            title: 'AI Dashboard UX',
            link: '/projects/ai-dashboard',
            image: '/img/projects/ai.jpg',
          }"
        />
      </main>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

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
