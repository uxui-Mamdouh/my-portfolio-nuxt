<!-- components/CookieBanner.vue -->
<template>
  <Transition name="slide-up">
    <div v-if="showBanner" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[9999] bg-[#0F0F0E] text-white p-6 rounded-2xl shadow-2xl border border-white/10">
      <h3 class="font-bold text-lg mb-2">We value your privacy</h3>
      <p class="text-sm text-gray-300 mb-5 leading-relaxed">
        We use cookies to analyze traffic and optimize your experience. By clicking "Accept All", you consent to our use of cookies. 
        <NuxtLink to="/privacy" class="text-violet-400 hover:underline">Read Policy</NuxtLink>
      </p>
      <div class="flex gap-3">
        <button @click="handleConsent('denied')" class="flex-1 py-2.5 px-4 rounded-xl border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors cursor-pointer">
          Reject All
        </button>
        <button @click="handleConsent('granted')" class="flex-1 py-2.5 px-4 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors cursor-pointer">
          Accept All
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie_consent')
  if (!consent) {
    // لو مفيش موافقة متسجلة، أظهر البانر بعد ثانية (عشان ميبوظش الـ LCP)
    setTimeout(() => { showBanner.value = true }, 1000)
  } else {
    // لو عنده موافقة قديمة، طبقها فوراً
    applyConsent(consent)
  }
})

const handleConsent = (status) => {
  localStorage.setItem('cookie_consent', status)
  applyConsent(status)
  showBanner.value = false
  
  // إطلاق حدث مخصص عشان كل الـ 17 Plugin بتوعك يشتغلوا
  window.dispatchEvent(new CustomEvent('cookie_consent_update', { detail: status }))
}

const applyConsent = (status) => {
  if (typeof window === 'undefined') return
  const gtag = window.gtag || function(){ (window.dataLayer = window.dataLayer || []).push(arguments) }
  
  gtag('consent', 'update', {
    'ad_storage': status,
    'ad_user_data': status,
    'ad_personalization': status,
    'analytics_storage': status
  })
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(150%); opacity: 0; }
</style>