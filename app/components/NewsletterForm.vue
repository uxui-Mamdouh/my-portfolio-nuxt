<template>
  <section class="w-full max-w-4xl mx-auto my-16 md:my-24" data-aos="fade-up">
    <!-- 
      استخدام Design Tokens لهوية متسقة مع الدارك/لايت مود 
      مع الاحتفاظ بالإحساس "المقاس" (Measured) والفخم
    -->
    <div class="bg-[color:var(--card-bg)] border border-[color:var(--card-border)] rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden transition-[transform,box-shadow,background-color] duration-300 hover:shadow-[0_20px_50px_-20px_rgba(109,94,240,0.15)] group">
      
      <!-- Glow Effect خلف الفورم يعتمد على لون الـ Accent الخاص بك -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-[radial-gradient(circle,rgba(109,94,240,0.08)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
      
      <div class="relative z-10">
        <!-- Title & Description -->
        <h2 class="text-2xl md:text-[clamp(1.7rem,2.6vw,2.15rem)] font-extrabold text-[color:var(--ink)] tracking-[-0.02em] mb-3">
          Monthly receipts. No fluff.
        </h2>
        <p class="text-[15px] md:text-base text-[color:var(--ink-soft)] mb-8 max-w-lg mx-auto leading-relaxed">
          One email per month. What I shipped, what I measured, what I'd do differently.
        </p>

        <!-- حالة الفورم الطبيعية -->
        <form v-if="!isSuccess" @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
          
          <div class="relative flex-grow">
            <!-- Icon داخل الـ Input -->
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon name="lucide:mail" class="w-5 h-5 text-[color:var(--ink-soft)] opacity-50" />
            </div>
            
            <input 
              v-model="email" 
              type="email" 
              placeholder="you@company.com" 
              required
              :disabled="isLoading"
              class="w-full bg-[color:var(--input-bg)] border border-[color:var(--card-border)] rounded-xl pl-11 pr-5 py-[14px] text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-soft)] placeholder:opacity-60 outline-none transition-[transform,box-shadow,background-color] duration-300 focus:border-[color:var(--accent-1)] focus:ring-4 focus:ring-[color:var(--accent-1)]/10 disabled:opacity-50"
              :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/10': errorMessage }"
            />
          </div>

          <!-- زر الإرسال -->
          <button 
            type="submit" 
            :disabled="isLoading"
            class="bg-gradient-to-br from-[color:var(--accent-1)] to-[color:var(--accent-2)] hover:from-[color:var(--accent-2)] hover:to-[color:var(--accent-1)] text-white font-bold text-[15px] px-8 py-[14px] rounded-xl transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(109,94,240,0.3)] disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center shrink-0"
          >
            <span v-if="!isLoading">Subscribe</span>
            <Icon v-else name="lucide:loader-2" class="w-5 h-5 animate-spin" />
          </button>
        </form>

        <!-- حالة النجاح -->
        <div v-else class="flex flex-col items-center justify-center gap-3 py-2 animate-[fadeUp_0.5s_ease]">
          <div class="w-12 h-12 rounded-full bg-[#33cc95]/10 border border-[#33cc95]/30 flex items-center justify-center text-[#33cc95] mb-2 shadow-[0_0_15px_rgba(51,204,149,0.2)]">
            <Icon name="lucide:check" class="w-6 h-6" />
          </div>
          <p class="text-[color:var(--ink)] font-extrabold text-[18px] tracking-tight m-0">You're in.</p>
          <p class="text-[color:var(--ink-soft)] text-[15px] m-0">The first receipt lands next month.</p>
        </div>

        <!-- رسالة الخطأ -->
        <p v-if="errorMessage && !isSuccess" class="text-red-500 text-sm font-medium mt-3 animate-pulse">
          {{ errorMessage }}
        </p>

        <!-- ملاحظة سفلية -->
        <p v-if="!isSuccess" class="text-[12.5px] font-medium text-[color:var(--ink-soft)] opacity-70 mt-5 flex items-center justify-center gap-2">
          <Icon name="lucide:shield-check" class="w-3.5 h-3.5" />
          One email per month. Unsubscribe in one click.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
// استدعاء اتصال Supabase الخاص بك بنفس الطريقة التي تستخدمها في index.vue
import { useSupabase } from '~/composables/utils/supabase'

const email = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')
const route = useRoute()

// تهيئة عميل Supabase من ה- Composable الخاص بك
const supabase = useSupabase()

const subscribe = async () => {
  if (!email.value) return
  
  isLoading.value = true
  errorMessage.value = ''

  try {
    // إرسال البيانات فعلياً إلى جدول subscribers في Supabase
    const { error } = await supabase
      .from('subscribers')
      .insert([
        { 
          email: email.value, 
          source: route.path, // يسجل مسار المقال
          status: 'active'
        }
      ])

    if (error) {
      // التعامل مع خطأ تكرار الإيميل
      if (error.code === '23505') {
        throw new Error('This email is already on the list.')
      }
      throw error // لرمي أي خطأ آخر
    }
    
    // GTM Event Tracking
    if (process.client && window.dataLayer) {
      window.dataLayer.push({
        event: 'newsletter_signup',
        signup_source: route.path
      })
    }

    // إظهار حالة النجاح وتفريغ الحقل
    isSuccess.value = true
    email.value = ''
    
  } catch (error) {
    errorMessage.value = error.message || 'Something went wrong. Please try again.'
    console.error('Newsletter Subscription Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes fadeUp { 
  from { opacity: 0; transform: translateY(10px); } 
  to { opacity: 1; transform: translateY(0); } 
}
</style>