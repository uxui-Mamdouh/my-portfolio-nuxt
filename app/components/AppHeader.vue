<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Decisions", path: "/decisions" },
  { name: "Contact", path: "/contact" },
];

const isActive = (path) => route.path === path;

// حالة الموبايل منيو
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

//  GTM
import { useGtm } from "@gtm-support/vue-gtm";

const gtm = useGtm();

const trackClick = (label) => {
  gtm?.trackEvent({
    event: "button_click",
    category: "interaction",
    action: "click",
    label, // البراميتر اللي هتبعتُه وقت الاستدعاء
    value: route.path, // الصفحة الحالية
  });
};
</script>

<template>
  <header
    class="w-full relative flex items-center justify-center bg-transparent z-50"
  >
    <div
      class="absolute top-8 left-1/2 -translate-x-1/2 w-full flex items-center justify-between px-4"
    >
      <div class="container relative flex items-center justify-between">
        <!-- Desktop Navbar -->
        <div class="w-full hidden xl:grid grid-cols-6">
          <!-- Logo -->
          <div
            class="col-span-1 lg:col-span-1 hidden xl:flex items-center gap-2.5"
          >
            <!--  -->
            <!-- Logo -->
            <NuxtLink
              to="/"
              class="font-extrabold text-neutral-200 text-lg tracking-tight"
            >
              M.
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <nav
            class="col-span-5 lg:col-span-5 hidden xl:flex p-4 items-center gap-24"
          >
            <div class="flex w-full justify-end items-center gap-9">
              <!-- Links -->
              <div class="flex items-center gap-9">
                <NuxtLink
                  v-for="link in navLinks"
                  :key="link.path"
                  :to="link.path"
                  :class="[
                    'h-10 px-5 flex items-center text-neutral-200 text-lg font-normal font-[Inter] leading-7 transition-colors duration-200',
                    isActive(link.path)
                      ? 'border-b border-neutral-200'
                      : 'border-b border-black hover:border-neutral-200',
                  ]"
                >
                  {{ link.name }}
                </NuxtLink>
              </div>

              <AnimatedButton
                to="/contact"
                icon-name="solar:arrow-right-outline"
                text-main="Hire Me"
                text-sec="Right Now"
                rounedBorder="rounded-full"
                @click="trackClick('Hire Me')"
              />
            </div>
          </nav>
        </div>

        <!-- ✅ Mobile Navbar -->
        <div class="mobile xl:hidden flex w-full justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="text-2xl text-neutral-200 font-semibold">
            M.
          </NuxtLink>

          <!-- Hamburger Button -->
          <button
            @click="toggleMobileMenu"
            class="z-50 w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 text-neutral-200"
            aria-label="Close Menu"
          >
            <Icon
              :name="
                mobileMenuOpen
                  ? 'solar:close-circle-outline'
                  : 'solar:hamburger-menu-outline'
              "
              class="w-6 h-6 transition-transform duration-300"
            />
          </button>

          <!-- Overlay -->
          <transition name="fade">
            <div
              v-if="mobileMenuOpen"
              class="fixed h-screen inset-0 bg-black/40 backdrop-blur-sm z-40"
              @click="closeMobileMenu"
            ></div>
          </transition>

          <!-- Slide Menu -->
          <transition name="slide">
            <div
              v-if="mobileMenuOpen"
              class="fixed h-screen top-0 right-0 w-4/5 bg-neutral-900 z-50 p-8 flex flex-col gap-8 shadow-lg"
            >
              <div class="flex justify-between items-center">
                <NuxtLink
                  to="/"
                  class="text-2xl text-neutral-200 font-semibold"
                  @click="closeMobileMenu"
                >
                  Mamdouh
                </NuxtLink>
                <button @click="closeMobileMenu" class="text-neutral-400">
                  <Icon name="solar:close-circle-outline" class="w-6 h-6" />
                </button>
              </div>

              <nav class="flex flex-col gap-6 mt-10">
                <NuxtLink
                  v-for="link in navLinks"
                  :key="link.path"
                  :to="link.path"
                  @click="closeMobileMenu"
                  :class="[
                    'text-lg font-normal font-[Inter] transition-colors duration-200',
                    isActive(link.path)
                      ? 'text-indigo-400'
                      : 'text-neutral-200 hover:text-indigo-400',
                  ]"
                >
                  {{ link.name }}
                </NuxtLink>
              </nav>

              <div class="mt-[160px]">
                <AnimatedButton
                  to="/contact"
                  icon-name="solar:arrow-right-outline"
                  text-main="Hire Me"
                  text-sec="Right Now"
                  rounedBorder="rounded-full"
                  class="inline-block"
                />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Animation for fade overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in animation for menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.25s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
