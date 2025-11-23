<template>
  <div>
    <!-- Header الخاص بالديسكتوب -->
    <AppHeader />

    <slot />
    <div class="contact-footer">
      <div class="container">
        <div class="pt-12 pb-8 flex flex-col items-center gap-6">
          <div class="container">
            <div class="flex flex-col items-center gap-6">
              <hr class="w-full border-neutral-700" />
              <p class="text-neutral-700 text-sm text-center">
                © 2025 | Design that works — for users, for business, in any
                domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-leave-active {
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  /* transform: scale(0.96) translateY(8px); */
  filter: blur(4px);
}
.page-leave-to {
  opacity: 0;
  /* transform: scale(1.02) translateY(-6px); */
  filter: blur(3px);
}

/* (اختياري) تثبيت الشاشة لمنع التمرير أثناء الانتقال */
.page-leave-active {
  position: fixed;
  inset: 0;
  z-index: 50;
}
</style>
