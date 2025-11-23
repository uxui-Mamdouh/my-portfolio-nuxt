<template>
  <footer class="bg-neutral-50">
    <div class="mx-auto flex flex-col gap-12">
      <div class="bg-neutral-800 pt-20">
        <div class="container">
          <div
            class="grid grid-cols-1 md:grid-cols-5 items-start gap-16 md:gap-30"
          >
            <div class="col-span-2 flex flex-col gap-4 max-w-md">
              <p class="text-indigo-200 text-sm font-normal">
                Hire Me for Your Team
              </p>
              <h2
                class="text-neutral-50 text-2xl sm:text-3xl font-bold leading-10"
              >
                Let's Connect
              </h2>
            </div>
            <nav
              class="col-span-3 flex flex-col gap-6"
              aria-label="Contact Links"
            >
              <a
                href="mailto:hello@mamdouh-ghaneemy.com"
                class="group flex justify-between items-center border-b border-neutral-500 pb-4 text-lg sm:text-xl font-semibold text-neutral-200 hover:text-indigo-300 hover:border-neutral-800 transition-all duration-300 ease-in"
                aria-label="Email Mamdouh Ghaneemy"
              >
                <span
                  class="transition-all duration-300 ease-in group-hover:tracking-wider"
                  >hello@mamdouh-ghaneemy.com</span
                >
                <svg
                  class="w-6 h-6 text-neutral-200 group-hover:text-indigo-200 group-hover:scale-130 group-hover:rotate-8 transition-all duration-300 ease-in"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 7h10v10M17 7l-10 10"
                  />
                </svg>
              </a>
              <a
                href="https://behance.net/ghaneemy"
                target="_blank"
                class="group flex justify-between items-center border-b border-neutral-500 pb-4 text-lg sm:text-xl font-semibold text-neutral-200 hover:text-indigo-300 hover:border-neutral-800 transition-all duration-300 ease-in"
                aria-label="Visit Mamdouh Ghaneemy's Behance profile"
              >
                <span
                  class="transition-all duration-300 ease-in group-hover:tracking-wider"
                  >behance.net/ghaneemy</span
                >
                <svg
                  class="w-6 h-6 text-neutral-200 group-hover:text-indigo-200 group-hover:scale-130 group-hover:rotate-8 transition-all duration-300 ease-in"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 7h10v10M17 7l-10 10"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mamdouh-ghaneemy"
                target="_blank"
                class="group flex justify-between items-center border-b border-neutral-500 pb-4 text-lg sm:text-xl font-semibold text-neutral-200 hover:text-indigo-300 hover:border-neutral-800 transition-all duration-300 ease-in"
                aria-label="Visit Mamdouh Ghaneemy's LinkedIn profile"
              >
                <span
                  class="transition-all duration-300 ease-in group-hover:tracking-wider"
                  >linkedin.com/in/mamdouh-ghaneemy</span
                >
                <svg
                  class="w-6 h-6 text-neutral-200 group-hover:text-indigo-200 group-hover:scale-130 group-hover:rotate-8 transition-all duration-300 ease-in"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 7h10v10M17 7l-10 10"
                  />
                </svg>
              </a>
            </nav>
          </div>
          <div class="pt-12 pb-8 flex flex-col items-center gap-6">
            <div class="container">
              <div class="flex flex-col items-center gap-6">
                <hr class="w-full hidden md:block border-neutral-700" />
                <p class="text-neutral-300 text-sm text-center">
                  © {{ currentYear }} Mamoudh | Strategic design solutions for
                  users and business in in any domain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const currentYear = computed(() => new Date().getFullYear());
</script>
