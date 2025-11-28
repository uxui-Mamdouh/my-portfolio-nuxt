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
            Doctor Booking
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
              Jan - Mar 2025
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
              Doctor Booking App
            </h1>
            <p
              class="text-xl md:text-2xl lg:text-3xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed font-light"
            >
              A patient experience that works with Egypt’s real clinic flow —
              not against it.
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
                <span class="font-medium">Figma, FigJam, GTM</span>
              </div>
              <div>
                <span
                  class="block text-neutral-400 dark:text-neutral-400 text-xs uppercase tracking-wider mb-1"
                  >Impact</span
                >
                <span class="font-medium">Solves Queue Chaos</span>
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
              Jan – Mar 2025 • Product Designer
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
              Redesign doctor booking for Egypt’s reality — where clinics run on
              dynamic queues, not fixed slots.
            </p>
            <p class="font-semibold text-neutral-900 dark:text-neutral-100">
              Don’t fight the system. Design with it.
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
                  "I booked online at 4 PM... but the doctor saw me at 8:30. No
                  one told me why."
                </p>
                <div class="mt-4 pl-4 flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-neutral-700 dark:bg-neutral-700 flex items-center justify-center font-bold"
                  >
                    A
                  </div>
                  <div class="text-sm text-neutral-400 dark:text-neutral-300">
                    <span class="font-bold text-white dark:text-white block"
                      >Ahmed</span
                    >
                    Patient, Cairo
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
                      ><strong>Fixed slots don't reflect reality</strong> — most
                      clinics operate on live queues.</span
                    >
                  </li>
                  <li class="flex gap-3 text-neutral-300 dark:text-neutral-300">
                    <span class="text-neutral-500 dark:text-neutral-400 mt-1"
                      >02.</span
                    >
                    <span
                      ><strong>No wait time visibility</strong> — patients wait
                      hours without updates.</span
                    >
                  </li>
                  <li class="flex gap-3 text-neutral-300 dark:text-neutral-300">
                    <span class="text-neutral-500 dark:text-neutral-400 mt-1"
                      >03.</span
                    >
                    <span
                      ><strong>Lack of trust</strong> — no transparency in delay
                      reasons (emergency, backlog).</span
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
                  Most booking apps assume a Western model of fixed
                  appointments. But in Egypt,
                  <span
                    class="text-white dark:text-white font-semibold border-b border-purple-500"
                    >clinics are fluid, human systems — and design should adapt
                    to them, not force change</span
                  >.
                </p>
                <p class="text-neutral-400 dark:text-neutral-400 text-sm">
                  This is a white space — and an opportunity to redefine digital
                  healthcare access.
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
                User interviews, clinic visits, competitive audit
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
                Personas (Ahmed), UVP, queue-based journey map
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
                Wireflows, CTA strategy, dynamic ETA logic
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
                Interactive flows, mobile-first design
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
                Usability testing with target users
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
                Handoff to engineering team
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
                "I don’t care about the slot — I care about when I’ll actually
                be seen."
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
                  Patients want accurate ETAs, not fake precision.
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
                "If they don’t tell me why I’m waiting, I assume it’s
                disrespect."
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
                  Transparency builds trust faster than speed.
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
                "I check the app every 10 minutes. It stresses me out."
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
                  Real-time updates reduce anxiety and improve satisfaction.
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
              Designed around the real Egyptian clinic experience.
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div
              class="mockup h-full relative order-2 lg:order-1 w-[400px] mx-auto"
            >
              <div
                class="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-[2rem] opacity-50 blur-xl"
              ></div>
              <div
                class="relative h-full bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl dark:shadow-none border border-neutral-200 dark:border-neutral-700 overflow-hidden"
              >
                <!-- Mobile Status Bar -->
                <div
                  class="bg-neutral-800 h-8 flex items-center justify-between px-4"
                >
                  <span class="text-white text-xs">9:41</span>
                  <div class="flex gap-1">
                    <span class="w-1 h-1 bg-white rounded-full"></span>
                    <span class="w-1 h-1 bg-white rounded-full"></span>
                    <span class="w-1 h-1 bg-white rounded-full"></span>
                  </div>
                  <div class="w-6 h-3 bg-white rounded-sm"></div>
                </div>

                <!-- Content -->
                <div class="p-6 space-y-6 flex flex-col justify-between">
                  <div>
                    <p
                      class="text-sm font-medium text-neutral-400 dark:text-neutral-300 uppercase tracking-wider mb-2"
                    >
                      Dynamic Queue View
                    </p>
                    <h3
                      class="text-3xl font-black text-neutral-900 dark:text-neutral-100"
                    >
                      You're #12<br />
                      <span
                        class="text-lg font-normal text-neutral-500 dark:text-neutral-400"
                      >
                        ≈ 7:30 PM
                      </span>
                    </h3>
                  </div>

                  <!-- Placeholder list items -->
                  <div class="space-y-3">
                    <div
                      class="h-14 w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                    <div
                      class="h-14 w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                    <div
                      class="h-14 w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                    <div
                      class="h-14 w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                    <div
                      class="h-14 w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                    <div
                      class="h-14 w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl flex items-center px-4 justify-between"
                    >
                      <div
                        class="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"
                      ></div>
                      <div
                        class="w-8 h-8 bg-neutral-200 dark:bg-neutral-600 rounded-full"
                      ></div>
                    </div>
                  </div>

                  <!-- Primary Button -->
                  <button
                    class="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold mt-4"
                  >
                    View Details
                  </button>
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
                      Queue-Based System
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      No fake "slots" — shows real position in line.
                    </p>
                  </div>
                </div>
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                  >
                    <i data-lucide="clock" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      Live ETA Updates
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      Adjusts based on current pace, emergencies, backlog.
                    </p>
                  </div>
                </div>
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  >
                    <i data-lucide="bell" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      Push Notifications
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      "You're next!" alerts reduce anxiety and phone checking.
                    </p>
                  </div>
                </div>
                <div
                  class="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                  >
                    <i data-lucide="info" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <h4
                      class="font-bold text-neutral-900 dark:text-neutral-100 text-lg"
                    >
                      Reason for Delay
                    </h4>
                    <p class="text-neutral-500 dark:text-neutral-400 mt-1">
                      "Emergency case in progress" → builds empathy, not
                      frustration.
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
                    Works with Egypt's reality, not against it.
                  </li>
                  <li class="flex gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-4 h-4 text-indigo-400"
                    ></i>
                    Reduces patient stress through transparency.
                  </li>
                  <li class="flex gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-4 h-4 text-indigo-400"
                    ></i>
                    Builds trust between patients and clinics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- ========================= -->
        <!-- Doctor Booking App – The Full Experience -->
        <!-- Designed to answer real user & business needs in Egypt’s healthcare context -->
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
              Doctor Booking App – The Full Experience
            </h2>
            <p
              class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed"
            >
              Designed for real Egyptian clinic flows — not Western assumptions.
              Every section answers a core user question: “When’s my turn?” “Can
              I book for my kids?” “Do I trust this doctor?”
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
                    Unified Booking Interface
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    First screen, zero confusion
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Instead of forcing fixed time slots (that clinics ignore), the
                app shows real-time queue estimation:
                <span class="font-medium">“You’re #12 ≈ 7:30 PM”</span> —
                setting honest expectations from the start.
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <div
                  class="w-full flex items-center justify-center text-neutral-400 dark:text-neutral-300 text-sm"
                >
                  <nuxt-img
                    src="/images/Unified Booking Interface.png"
                    alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                    format="webp"
                    quality="80"
                  />
                </div>
              </div>
              <div
                class="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Solves Egypt’s #1 clinic pain point: uncertainty
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
                  <i data-lucide="users" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Family-Centric Profiles
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Book for kids, parents & yourself
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Unlike competitors, users can create and switch between family
                members in seconds — solving Mona’s biggest frustration:
                managing multiple appointments.
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Family-Centric Profiles.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Localized for Egyptian family dynamics
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
                  <i data-lucide="shield-check" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Verified Doctor Trust System
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Real reviews, insurance coverage & verification badges
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                Rebuilds trust by showing verified credentials, accepted
                insurance, and real patient reviews — not just ratings.
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Verified-Doctor-Trust-System.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Builds trust without relying on Western-style reviews
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
                  <i data-lucide="wallet" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-neutral-900 dark:text-neutral-100"
                  >
                    Localized Payment Flow
                  </h3>
                  <p class="text-neutral-500 dark:text-neutral-400 text-sm">
                    Fawry • Vodafone Cash • Cash on arrival
                  </p>
                </div>
              </div>
              <p
                class="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6"
              >
                No credit card required. Supports Egypt’s most-used payment
                methods — removing a critical booking barrier for 80% of users.
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl overflow-hidden mb-6"
              >
                <nuxt-img
                  src="/images/Localized Payment Flow.png"
                  alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
                  format="webp"
                  quality="80"
                />
              </div>
              <div
                class="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Designed for Egypt’s financial reality
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
                    +60%
                  </h3>
                  <p
                    class="text-neutral-500 dark:text-neutral-400 mt-2 font-medium"
                  >
                    Increase in patient satisfaction scores.
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
                    45%↓
                  </h3>
                  <p
                    class="text-neutral-500 dark:text-neutral-400 mt-2 font-medium"
                  >
                    Reduction in patient complaints about wait times.
                  </p>
                </div>
              </div>
              <div
                class="col-span-1 sm:col-span-2 bg-neutral-900 dark:bg-neutral-900 p-8 rounded-2xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div>
                  <h4 class="text-2xl font-bold">Real-World Validation</h4>
                  <p class="text-neutral-400 dark:text-neutral-400 mt-1">
                    Designed after analyzing 50+ patient reviews and real clinic
                    workflows in Cairo.
                  </p>
                </div>
                <div class="text-4xl font-bold text-indigo-400">
                  100%
                  <span
                    class="text-xl text-neutral-500 dark:text-neutral-400 font-normal"
                    >local context</span
                  >
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
                  <i data-lucide="eye" class="text-indigo-500 w-5 h-5"></i>
                  Real-Time Queue Clarity
                </div>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                  No more guessing. Patients see exactly where they stand.
                </p>
              </div>
              <div class="space-y-6 w-full mt-4">
                <div
                  class="bg-white dark:bg-neutral-700 rounded-xl p-4 border border-neutral-200 dark:border-neutral-600"
                >
                  <p
                    class="font-serif italic text-lg text-neutral-700 dark:text-neutral-300"
                  >
                    "I don’t care about the slot — I care about when I’ll
                    actually be seen."
                  </p>
                  <p
                    class="text-xs text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-wider font-semibold"
                  >
                    — Mona, mother of two, Cairo
                  </p>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-5 h-5 text-indigo-500 mt-0.5"
                    ></i>
                    <span class="text-neutral-600 dark:text-neutral-300">
                      Live position: <strong>You're #12</strong>
                    </span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-5 h-5 text-indigo-500 mt-0.5"
                    ></i>
                    <span class="text-neutral-600 dark:text-neutral-300">
                      Dynamic ETA: <strong>≈ 7:30 PM</strong> (adjusts in real
                      time)
                    </span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i
                      data-lucide="check-circle-2"
                      class="w-5 h-5 text-indigo-500 mt-0.5"
                    ></i>
                    <span class="text-neutral-600 dark:text-neutral-300">
                      Push alert when near turn: <strong>"You're next!"</strong>
                    </span>
                  </li>
                </ul>
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
                  "Design isn't about making things look good. It's about making
                  reality less painful."
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
                    ✓ Respect local context — don't impose foreign models.
                  </li>
                  <li class="flex gap-2">
                    ✓ Transparency > Speed — people tolerate delays if they
                    understand them.
                  </li>
                  <li class="flex gap-2">
                    ✓ The best UX feels like common sense.
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
                    Partner with clinics for pilot testing.
                  </li>
                  <li
                    class="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm dark:shadow-none"
                  >
                    <span
                      class="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-xs text-neutral-300"
                      >2</span
                    >
                    Integrate SMS fallback for low-connectivity areas.
                  </li>
                  <li
                    class="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm dark:shadow-none"
                  >
                    <span
                      class="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-xs text-neutral-300"
                      >3</span
                    >
                    Add Arabic voice updates for elderly patients.
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
              This isn’t just another booking app.
            </h3>
            <p class="text-xl text-neutral-500 dark:text-neutral-400">
              It’s dignity for patients waiting in line.
            </p>
          </div>
        </section>
        <CaseFooterNav
          :prev="{
            title: 'Strategic Portfolio',
            link: '/projects/strategic-portfolio',
            image: imgPortfolio,
          }"
          :next="{
            title: 'AEO SaaS',
            link: '/projects/aeo-saas',
            image: imgAEO,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import imgPortfolio from "/images/Product-Deesigner-case-study.png";
import imgAEO from "/images/aeo-saas-cover.png";
useHead({
  title: "Case Study: Egyptian Doctor Booking App | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "Redesigned doctor booking for Egypt’s queue-based clinics. Fast, family-friendly, and trustworthy — built for real user needs.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  meta: [
    {
      property: "og:title",
      content: "Case Study: Egyptian Doctor Booking App",
    },
    {
      property: "og:description",
      content:
        "A queue-aware, family-first booking experience for Egyptian patients. Solving trust, speed, and local context.",
    },
    {
      property: "og:image",
      content: "https://mamdouh.com/og-case-study-doctor.jpg",
    },
    {
      property: "og:url",
      content: "https://mamdouh.com/projects/doctor-booking-app",
    },
    { name: "twitter:card", content: "summary_large_image" },
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
.mockup {
  width: 400px;
}
</style>
