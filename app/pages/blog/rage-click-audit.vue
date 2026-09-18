<template>
  <article
    class="container mx-auto px-4 md:px-[60px] lg:px-[120px] relative z-10"
  >
    <!-- زر العودة -->
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--ink-soft)] hover:text-[color:var(--accent-1)] transition-colors mb-12 group"
    >
      <Icon
        name="lucide:arrow-left"
        class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
      />
      Back to Playbooks
    </NuxtLink>

    <!-- 1. HEADER (بيانات ثابتة تكتبها بيدك لأنها صفحة Static) -->
    <header class="max-w-4xl mb-16" data-aos="fade-up">
      <div class="flex flex-wrap gap-3 mb-8">
        <span
          class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-1)] bg-[color:var(--accent-1)]/10 px-3 py-1.5 rounded border border-[color:var(--accent-1)]/20"
          >Case Study</span
        >
        <span
          class="text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink-soft)] bg-[color:var(--input-bg)] px-3 py-1.5 rounded border border-[color:var(--card-border)]"
          >8 Min Read</span
        >
      </div>
      <h1
        class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[color:var(--ink)] tracking-[-0.02em] leading-[1.1] mb-8"
      >
        The "Rage-Click" Audit: How fixing one hidden button saved a SaaS client
        $12k in monthly churn.
      </h1>
      <p
        class="text-xl md:text-2xl font-light text-[color:var(--ink-soft)] leading-relaxed max-w-3xl"
      >
        A deep dive into session recordings that revealed a critical flaw in a
        checkout flow, and the exact UI changes we made to stop the bleeding.
      </p>
    </header>

    <!-- 2. HERO IMAGE -->
    <div
      class="w-full aspect-[21/9] md:h-[500px] lg:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden mb-24 relative border border-[color:var(--card-border)] shadow-2xl"
      data-aos="zoom-in"
    >
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        alt="Dashboard"
        class="w-full h-full object-cover grayscale hover:grayscale-0 transition-[transform,box-shadow,background-color] duration-300duration-700"
      />
    </div>

    <!-- 3. THE ASYMMETRICAL GRID (Content + Sidebar) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
      <!-- Left Column: The Content (أكتب براحتك!) -->
      <div
        class="lg:col-span-8 space-y-12 text-lg text-[color:var(--ink-soft)] leading-relaxed"
      >
        <p>
          Most B2B founders obsess over top-of-funnel conversion. They redesign
          landing pages, tweak headlines, and A/B test pricing tables for
          months...
        </p>

        <h2
          class="text-3xl font-bold text-[color:var(--ink)] mt-16 mb-6 tracking-tight"
        >
          1. The Analytics Blindspot
        </h2>
        <p>
          When you are dealing with a complex B2B financial product, the user
          journey is rarely linear. Our client's core feature was an "Export
          Compliance Report" tool...
        </p>

        <blockquote
          class="border-l-4 border-l-[color:var(--accent-1)] bg-[color:var(--input-bg)] py-8 px-10 rounded-r-3xl font-medium text-2xl text-[color:var(--ink)] my-12 leading-snug"
        >
          "If the backend is responding in 200ms and the UI has zero console
          errors, the problem isn't the code. The problem is cognitive
          overload."
        </blockquote>

        <!-- هنا تكمن الحرية المطلقة: يمكنني وضع Component معقد خاص بي وسط المقال! -->
        <div
          class="p-8 bg-[color:var(--card-bg)] border border-[color:var(--accent-1)]/30 rounded-3xl my-16 shadow-[0_0_30px_rgba(var(--accent-1-rgb),0.1)]"
        >
          <h3 class="text-xl font-bold text-[color:var(--ink)] mb-4">
            Interactive Demo: The Contrast Failure
          </h3>
          <p class="mb-6 text-sm">
            See how difficult it was to spot the original button vs the
            redesigned primary action.
          </p>
          <div class="flex gap-4">
            <button
              class="px-6 py-2 border border-gray-200 text-gray-400 rounded-lg text-sm bg-transparent"
            >
              Original (Invisible)
            </button>
            <button
              class="px-6 py-2 bg-indigo-600 text-white shadow-lg rounded-lg text-sm hover:-translate-y-1 transition-transform"
            >
              Redesign (Clear)
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column: The Sticky Sidebar -->
      <aside class="lg:col-span-4 relative hidden lg:block">
        <div class="sticky top-32 space-y-12">
          <div
            class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 shadow-lg"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-[color:var(--accent-1)] to-[color:var(--accent-2)] p-[2px]"
              >
                <div
                  class="w-full h-full rounded-full bg-[color:var(--card-bg)] flex items-center justify-center font-black text-[color:var(--ink)] text-sm"
                >
                  MG
                </div>
              </div>
              <div>
                <div class="font-bold text-[color:var(--ink)] text-lg">
                  Mamdouh Ghaneemy
                </div>
                <div
                  class="text-sm text-[color:var(--accent-text)] font-semibold"
                >
                  Strategic Product Designer
                </div>
              </div>
            </div>
            <p
              class="text-sm text-[color:var(--ink-soft)] leading-relaxed mb-6"
            >
              I help FinTech and SaaS founders build high-conversion,
              investor-ready web experiences.
            </p>
            <AppButton
              to="/contact"
              variant="primary"
              size="md"
              class="w-full justify-center"
            >
              Discuss a Project
            </AppButton>
          </div>
        </div>
      </aside>
    </div>
  </article>
</template>

<script setup>
definePageMeta({
  layout: "playbook",
  backLabel: "Playbooks",
  backTo: "/blog",
});

usePageMeta({
  title:
    'The "Rage-Click" Audit — How One Hidden Button Saved $12k/mo | Mamdouh Ghaneemy',
  description:
    "A deep dive into session recordings that revealed a critical checkout flow flaw — and the exact UI changes that stopped $12k in monthly churn.",
  keywords: [
    "rage click audit",
    "session recording analysis",
    "saas churn reduction",
    "checkout ux optimization",
    "clarity analytics case study",
  ],
  ogType: "article",
  article: {
    publishedTime: "2026-10-12T00:00:00Z",
    section: "Case Study",
    tags: ["Session Recording", "Churn Reduction", "Checkout UX"],
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Playbooks", url: "/blog" },
    { name: "Rage-Click Audit", url: "/blog/rage-click-audit" },
  ],
});
</script>
