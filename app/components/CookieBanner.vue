<template>
  <Transition name="slide-up">
    <div v-if="showBanner" class="fixed ...">
      <h3 class="font-bold text-lg mb-2">We value your privacy</h3>
      <p class="text-sm text-gray-300 mb-5 leading-relaxed">
        We use cookies to analyze traffic and optimize your experience. 
        Analytics cookies are anonymized. <NuxtLink to="/privacy" class="text-violet-400 hover:underline">Read Policy</NuxtLink>
      </p>
      <div class="flex flex-col gap-2">
        <div class="flex gap-3">
          <button @click="handleConsent('denied')" class="flex-1 py-2.5 px-4 rounded-xl border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors cursor-pointer">
            Reject Marketing
          </button>
          <button @click="handleConsent('granted')" class="flex-1 py-2.5 px-4 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors cursor-pointer">
            Accept All
          </button>
        </div>
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
    setTimeout(() => { showBanner.value = true }, 1000)
  } else {
    applyConsent(consent)
  }
})

const handleConsent = (status) => {
  localStorage.setItem('cookie_consent', status)
  applyConsent(status)
  showBanner.value = false
  window.dispatchEvent(new CustomEvent('cookie_consent_update', { detail: status }))
}

const applyConsent = (status) => {
  if (typeof window === 'undefined') return
  const gtag = window.gtag || function(){ (window.dataLayer = window.dataLayer || []).push(arguments) }
  
  // ✅ السماح بالتحليلات (Analytics) دائماً
  const analyticsGranted = 'granted' 
  // ✅ الإعلانات تعتمد على الموافقة
  const adsGranted = status === 'granted' ? 'granted' : 'denied'

  gtag('consent', 'update', {
    'ad_storage': adsGranted,
    'ad_user_data': adsGranted,
    'ad_personalization': adsGranted,
    'analytics_storage': analyticsGranted // ← التغيير الأساسي
  })
}
</script>