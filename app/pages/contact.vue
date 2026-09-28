<template>
  <div class="page-wrapper">
   <!-- === BACKDROP === -->
<MobileBackdrop :is-open="isSheetOpen" @close="closeSheet" />
  <!-- === HERO SECTION COMPONENT === -->
<HeroSection
  badge-text="Open for Work"
  :show-badge-dot="true"
  :title-lines="[
    `Ready to <span class='text-[color:var(--accent-text)]'>bring</span> your`,
    `product vision <span class='text-[color:var(--accent-text)]'>into reality?</span>`
  ]"
  desc1="Let's talk about your project — no strings attached."
  desc2="I reply within 24 hours. Usually sooner."
  :is-desc2-bold="false"
  :buttons="heroButtons"
  :bg-light-desktop="imgLightDesktop"
  :bg-dark-desktop="imgDarkDesktop"
  :bg-light-mobile="imgLightMobile"
  :bg-dark-mobile="imgDarkMobile"
>
  <template #nav>
    <NavBar 
      :is-sheet-open="isSheetOpen" 
      @toggle-drawer="toggleSheet" 
      @close-drawer="closeSheet" 
    />
  </template>
</HeroSection>
    <!-- === PAGE CONTENT === -->
      
    <!-- Contact Form Section -->
    <section id="contact-form" class="relative z-[4] grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pb-16 md:pb-24 mt-12 px-4 md:px-[120px]">
      
      <!-- Form -->
      <div class="card rounded-[24px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)] p-6 md:p-10 shadow-[0_4px_24px_rgba(20,20,40,0.05)]">
        <h2 class="text-[22px] md:text-2xl font-bold text-[color:var(--ink)] mb-2">Start the audit</h2>
        <p class="text-[15px] text-[color:var(--ink-soft)] mb-8">Tell me about the project. I'll reply within 24 hours with next steps — or a referral if I'm not the right fit.</p>

        <form id="contact-form" @submit.prevent="submitForm" novalidate>
          <input type="hidden" name="subject" value="New audit request from mamdouhghaneemy.com" />
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">Full name <span class="text-red-500">*</span></label>
              <input v-model="formFields.name" name="Full Name" type="text" placeholder="Sarah Chen" required class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-soft)] placeholder:opacity-60 outline-none transition-colors focus:border-[color:var(--accent-text)]" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">Work email <span class="text-red-500">*</span></label>
              <input v-model="formFields.email" name="Email" type="email" placeholder="sarah@company.com" required class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-soft)] placeholder:opacity-60 outline-none transition-colors focus:border-[color:var(--accent-text)]" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">Company / product <span class="text-red-500">*</span></label>
              <input v-model="formFields.company" name="Company" type="text" placeholder="Acme Fintech" required class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-soft)] placeholder:opacity-60 outline-none transition-colors focus:border-[color:var(--accent-text)]" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">Your role <span class="text-red-500">*</span></label>
              <select v-model="formFields.role" name="Role" required class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent-text)] appearance-none">
                <option value="" disabled selected>Select…</option>
                <option value="Founder / CEO">Founder / CEO</option>
                <option value="VP Growth / Marketing">VP Growth / Marketing</option>
                <option value="Head of Product">Head of Product</option>
                <option value="Ops / Finance / Procurement">Ops / Finance / Procurement</option>
                <option value="Recruiter / Hiring Manager">Recruiter / Hiring Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">What do you need? <span class="text-red-500">*</span></label>
            <select v-model="formFields.topic" name="Topic" required class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent-text)] appearance-none">
              <option value="" disabled selected>Select…</option>
              <option value="The Sprint (2–6 weeks)">The Sprint — full site or product launch in 2–6 weeks</option>
              <option value="The System (Design system + build)">The System — design system + scalable build</option>
              <option value="The Audit (CRO + UX review)">The Audit — find out what's leaking and why</option>
              <option value="The Partner (Retainer)">The Partner — fractional design lead on retainer</option>
              <option value="Not sure yet">Not sure yet — help me figure it out</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">Budget range</label>
              <select v-model="formFields.budget" name="Budget Range" class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent-text)] appearance-none">
                <option value="" disabled selected>Select…</option>
                <option value="Not sure yet">Not sure yet</option>
                <option value="Under $10k">Under $10k</option>
                <option value="$10k – $25k">$10k – $25k</option>
                <option value="$25k – $50k">$25k – $50k</option>
                <option value="$50k+">$50k+</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">Timeline</label>
              <select v-model="formFields.timeline" name="Timeline" class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent-text)] appearance-none">
                <option value="" disabled selected>Select…</option>
                <option value="ASAP">ASAP</option>
                <option value="Next 2–4 weeks">Next 2–4 weeks</option>
                <option value="Next 1–2 months">Next 1–2 months</option>
                <option value="Flexible / exploring">Flexible / exploring</option>
              </select>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-sm font-semibold text-[color:var(--ink)] mb-2">What are you building? <span class="text-red-500">*</span></label>
            <textarea v-model="formFields.message" name="Message" rows="5" placeholder="One paragraph is enough. What's the product, what's leaking (or launching), and what does success look like in 90 days?" required class="w-full rounded-xl bg-[color:var(--input-bg)] border border-transparent px-4 py-[13px] text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-soft)] placeholder:opacity-60 outline-none transition-colors focus:border-[color:var(--accent-text)] resize-none"></textarea>
          </div>

          <AppButton 
            native-type="submit" 
            :variant="formStatus === 'success' ? 'primary' : 'solid'" 
            size="md" 
            rounded="xl" 
            block 
            :loading="isSubmitting"
            icon-left="Send"
            :class="formStatus === 'error' ? '!bg-red-500 hover:!bg-red-600' : ''"
          >
            {{ buttonText }}
          </AppButton>
          
          <p class="flex items-center justify-center gap-2 mt-5 text-sm transition-colors" :class="formStatus === 'success' ? 'text-green-500' : formStatus === 'error' ? 'text-red-500' : 'text-[color:var(--ink-soft)]'">
            <span v-if="formStatus !== 'error'" class="w-2 h-2 rounded-full" :class="formStatus === 'success' ? 'bg-green-500' : 'bg-[#33cc95] shadow-[0_0_0_4px_rgba(51,204,149,0.18)]'"></span>
            <span v-if="formStatus === 'success'">Sent. I'll reply within 24 hours — usually sooner.</span>
            <span v-else-if="formStatus === 'error'">{{ errorMessage }}</span>
            <span v-else>Reply within 24 hours — usually sooner</span>
          </p>
        </form>
      </div>

      <!-- Let's Connect Card -->
      <div class="card rounded-[24px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)] p-6 md:p-10 shadow-[0_4px_24px_rgba(20,20,40,0.05)]">
        <h2 class="text-[22px] md:text-2xl font-bold text-[color:var(--ink)] mb-8">Or reach out directly</h2>
        <div class="divide-y divide-[color:var(--card-border)]">
          <a href="mailto:hello@mamdouh-ghaneemy.com" class="flex items-center gap-4 py-5 group" @click="trackEmailClick('contact_card')">
            <AppButton variant="primary" size="icon" rounded="xl" icon-only icon-name="Mail" class="shrink-0 shadow-[0_4px_12px_rgba(109,94,240,0.35)] pointer-events-none p-2" />
            <span>
              <span class="block text-[13px] text-[color:var(--ink-soft)]">Email</span>
              <span class="block text-[15px] md:text-base font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent-text)] transition-colors">hello@mamdouh-ghaneemy.com</span>
            </span>
          </a>

          <a href="https://linkedin.com/in/mamdouh-ghaneemy" target="_blank" rel="noopener" class="flex items-center gap-4 py-5 group" @click="trackLinkedinClick('contact_card')">
            <AppButton variant="primary" size="icon" rounded="xl" icon-only icon-name="Linkedin" class="shrink-0 shadow-[0_4px_12px_rgba(109,94,240,0.35)] pointer-events-none p-2" />
            <span>
              <span class="block text-[13px] text-[color:var(--ink-soft)]">LinkedIn</span>
              <span class="block text-[15px] md:text-base font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent-text)] transition-colors">linkedin.com/in/mamdouh-ghaneemy</span>
            </span>
          </a>

          <a href="https://behance.net/ghaneemy" target="_blank" rel="noopener" class="flex items-center gap-4 py-5 group" @click="trackBehanceClick('contact_card')">
            <AppButton variant="primary" size="icon" rounded="xl" icon-only class="shrink-0 shadow-[0_4px_12px_rgba(109,94,240,0.35)] pointer-events-none p-2">
               <template #icon>
                 <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.73 6.28c-.6-.61-1.5-.97-2.63-.97-1.12 0-2.01.36-2.6.97-.56.6-.88 1.45-.88 2.44 0 1 .31 1.84.9 2.43.6.6 1.48.95 2.6.95 1.15 0 2.05-.4 2.6-1.1.32-.4.5-.86.56-1.29h-2.63c-.1.35-.32.6-.66.74-.22.1-.5.16-.8.16-.49 0-.85-.13-1.1-.4-.24-.26-.36-.6-.38-1.01h4.72c.05-.53 0-1.26-.1-1.95zM14.1 11.7c.9-.94 1.34-2.15 1.34-3.62 0-1.43-.46-2.6-1.37-3.47C13.16 3.75 11.9 3.3 10.3 3.3H3v17.4h7.44c1.65 0 2.98-.5 3.97-1.5.97-.97 1.46-2.27 1.46-3.86 0-1.3-.35-2.38-1.05-3.2-.44-.5-1.03-.87-1.72-1.07v-.03c.66-.25 1.19-.68 1-1.34zM7.26 6.63h2.4c.74 0 1.28.17 1.62.5.34.34.5.82.5 1.45 0 .63-.17 1.13-.52 1.47-.36.35-.9.53-1.62.53H7.26V6.63zm4.66 10.02c-.4.38-.97.57-1.7.57H7.26v-3.8h2.96c.73 0 1.3.2 1.7.6.4.4.6.95.6 1.64 0 .66-.2 1.2-.6 1.6v-.61z"></path></svg>
               </template>
            </AppButton>
            <span>
              <span class="block text-[13px] text-[color:var(--ink-soft)]">Behance</span>
              <span class="block text-[15px] md:text-base font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent-text)] transition-colors">behance.net/ghaneemy</span>
            </span>
          </a>
        </div>

        <div class="lets-connect-img w-full mt-8">
          <NuxtImg
                    src="/images/Lets-connect-img.png"
                    alt="Order box — empty state, no conditions yet"
                    class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="sm:100vw md:33vw lg:340px"
                    format="webp"
                    quality="85"
                  />
        </div>

        <!-- ✅ شهادة جديدة — زاوية Partnership بدل النتيجة (لا تكرر Katie) -->
        <blockquote class="mt-8 rounded-2xl border border-[color:var(--card-border)] border-l-4 border-l-[color:var(--accent-text)] bg-[color:var(--input-bg)] p-5 md:p-6">
          <p class="text-[15px] leading-[1.7] text-[color:var(--ink-soft)] mb-4">"I've worked with agencies and freelancers. Mamdouh is the first one who pushed back on our brief — twice. Both times he was right. That's the difference between a vendor and a partner."</p>
          <footer class="text-sm font-semibold text-[color:var(--ink)]">— Tyler Charton, CEO & Founder, Qompyl</footer>
        </blockquote>

        <!-- ✅ Availability info block بدل زر CTA المكرر -->
        <div class="mt-6 rounded-2xl bg-[color:var(--input-bg)] border border-[color:var(--card-border)] p-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-[#33cc95] shadow-[0_0_0_4px_rgba(51,204,149,0.18)]"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-[color:var(--ink-soft)]">Availability</span>
          </div>
          <p class="text-sm text-[color:var(--ink)] font-medium mb-1">Next opening: <strong>October 2026</strong></p>
          <p class="text-xs text-[color:var(--ink-soft)] leading-relaxed">Booking 2–3 sprints per quarter. Early conversations welcome — even if your project is still on the whiteboard.</p>
        </div>

        <p class="flex items-center gap-2 mt-5 text-xs text-[color:var(--ink-soft)]">
          <Icon name="lucide:clock" class="w-3.5 h-3.5" />
          Based in Cairo (GMT+2). Working globally — async-friendly.
        </p>
      </div>
    </section>

    <!-- ============ QUICK ANSWERS ============ -->
    <section class="relative z-[4] pb-16 md:pb-24 px-4 md:px-[120px]">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-[28px] font-bold text-[color:var(--ink)] mb-3">Questions founders actually ask</h2>
        <p class="text-[15px] md:text-base text-[color:var(--ink-soft)]">Straight answers — no sales pitch.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1060px] mx-auto">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item card rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--card-bg)] overflow-hidden"
        >
          <button @click="toggleFaq(index)" type="button" class="faq-toggle w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer focus:outline-none">
            <span class="text-[15px] md:text-base font-semibold text-[color:var(--ink)]">{{ faq.question }}</span>
            <svg class="w-[18px] h-[18px] shrink-0 text-[color:var(--ink-soft)] transition-transform duration-[180ms]" :class="faq.isOpen ? 'rotate-180' : 'rotate-0'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div v-show="faq.isOpen" class="px-5 md:px-6 pb-5 md:pb-6">
            <p class="text-[15px] leading-[1.7] text-[color:var(--ink-soft)]">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ BIG LINKS ============ -->
    <section class="relative z-[4] max-w-[1060px] mx-auto w-full pb-16 md:pb-24 px-4 md:px-[120px]">
      <div class="text-center divide-y divide-[color:var(--card-border)]">
        <!-- ✅ إصلاح: كان ahmedmohamed.design — تم تصحيحه -->
        <a href="mailto:hello@mamdouh-ghaneemy.com" class="big-link group flex items-center justify-center gap-4 py-7 md:py-8 font-serif" @click="trackEmailClick('big_link')" >
          <span class="text-[22px] md:text-[40px] text-[color:var(--ink)] transition-colors duration-[180ms] group-hover:text-[color:var(--accent-text)]">hello@mamdouh-ghaneemy.com</span>
          <svg class="w-5 h-5 md:w-7 md:h-7 text-[color:var(--ink)] transition-transform duration-[180ms] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[color:var(--accent-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
        <a href="https://behance.net/ghaneemy" target="_blank" rel="noopener" class="big-link group flex items-center justify-center gap-4 py-7 md:py-8 font-serif" @click="trackBehanceClick('big_link')">
          <span class="text-[22px] md:text-[40px] text-[color:var(--ink)] transition-colors duration-[180ms] group-hover:text-[color:var(--accent-text)]">behance.net/ghaneemy</span>
          <svg class="w-5 h-5 md:w-7 md:h-7 text-[color:var(--ink)] transition-transform duration-[180ms] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[color:var(--accent-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative z-[4] text-center pb-20 md:pb-28 px-4 md:px-[120px]">
      <h2 class="font-serif text-[26px] md:text-[44px] leading-[1.25] text-[color:var(--ink)] max-w-[760px] mx-auto mb-9">
        Still scrolling? That's a signal.<br class="hidden md:block" />
        <span class="font-bold">Let's talk.</span>
      </h2>
      <AppButton to="#contact-form" variant="primary" size="md" rounded="xl" icon-right="ArrowRight"  @click="trackBookCall('contact_closing')" >
        Book a Free Audit Call
      </AppButton>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTracking } from '~/composables/useTracking'

const imgLightDesktop = '/images/contact-hero.png'
const imgDarkDesktop = '/images/contact-hero-bg-dark.png'
const imgLightMobile = '/images/contact-hero-bg-mobile.png'
const imgDarkMobile = '/images/contact-hero-bg-dark-mobile.png'

// ✅ FAQ مطابقة للـ Schema (كانا مختلفين سابقاً)
const faqs = ref([
  { 
    question: "What's the investment for a 4-week sprint?", 
    answer: "Sprints typically range from $15k to $40k depending on scope — design only, or design + build. You'll get a fixed quote after the free audit call, not a range with asterisks.", 
    isOpen: true 
  },
  { 
    question: "Can you sign an NDA before we talk?", 
    answer: "Yes — mutual NDA on request. Standard practice for fintech and any project with proprietary logic. Send yours or use mine.", 
    isOpen: false 
  },
  { 
    question: "Do you work with our procurement or legal team?", 
    answer: "Yes. MSA + SOW provided. I've worked with enterprise procurement before and know the drill — including vendor onboarding portals and security questionnaires.", 
    isOpen: false 
  },
  { 
    question: "What if we don't have final copy ready?", 
    answer: "We start with wireframes. Copy lands in week 2 — the real bottleneck is usually internal sign-off, so I've built the process around async reviews. You won't be blocked on me.", 
    isOpen: false 
  },
  { 
    question: "How do you handle revisions?", 
    answer: "Two rounds per phase, built into the timeline. Structural changes after final delivery cost extra — but with alignment up front, this rarely happens. My last three projects ended with copy-level tweaks only.", 
    isOpen: false 
  },
  { 
    question: "Do you work with pre-launch or stealth startups?", 
    answer: "Yes — that's most of my work. Site can be live-but-unindexed until you're ready, and I've handled IP-sensitive visuals in fintech before. Qompyl case study is a good example.", 
    isOpen: false 
  }
])

usePageMeta({
  title: 'Contact — Book a Free Audit Call | Mamdouh Ghaneemy',
  description: 'Book a 30-minute call. Honest, actionable insights — whether we work together or not. MSA-ready, NDA-friendly, reply within 24 hours.',
  keywords: [
    'hire fintech designer',
    'book product designer call',
    'freelance UX consultant',
    'SaaS design consultation',
    'fintech design audit',
  ],
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ],
  // ✅ FAQ Schema يطابق المعروض الآن
  faqItems: faqs.value.map(f => ({ question: f.question, answer: f.answer })),
})

const { trackEvent } = useTracking()

// --- Drawer Logic ---
const isSheetOpen = ref(false)

const toggleSheet = () => {
  isSheetOpen.value = !isSheetOpen.value
  if (process.client) {
    if (isSheetOpen.value) {
      document.body.classList.add('drawer-open')
    } else {
      document.body.classList.remove('drawer-open')
    }
  }
}

const closeSheet = () => {
  if (isSheetOpen.value) toggleSheet()
}

const handleResize = () => {
  if (process.client && window.innerWidth > 768 && isSheetOpen.value) {
    closeSheet()
  }
}

// --- Hero Buttons — CTA موحّد ---
const heroButtons = [
  {
    label: 'Book a Free Audit Call',
    to: '#contact-form',
    variant: 'primary',
    size: 'md',
    rounded: 'full',
    iconRight: 'ArrowRight'
  }
]

// --- Form State ---
const formFields = ref({
  name: '',
  email: '',
  company: '',
  role: '',
  topic: '',
  budget: '',
  timeline: '',
  message: ''
})

const isSubmitting = ref(false)
const buttonText = ref('Start the audit')
const formStatus = ref(null) 
const errorMessage = ref('Network hiccup. Try again — or email me directly: hello@mamdouh-ghaneemy.com')

// --- Web3Forms Submit ---
const submitForm = async (e) => {
  isSubmitting.value = true
  buttonText.value = 'Sending…'
  formStatus.value = null

  const formData = new FormData(e.target)
  formData.append("access_key", "a87b289e-62c6-4fce-af50-b254c959c4a3")

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (response.ok) {
      buttonText.value = 'Sent ✓'
      formStatus.value = 'success'
      
      trackEvent('generate_lead', {
  form_id: 'contact-form',
  value: 1,
  lead_budget: formFields.value.budget,
  lead_type: formFields.value.topic,
  lead_role: formFields.value.role
})
      
      formFields.value = {
        name: '', email: '', company: '', role: '', topic: '', budget: '', timeline: '', message: ''
      }
    } else {
      buttonText.value = 'Failed — try again'
      formStatus.value = 'error'
      errorMessage.value = "Something went wrong. Try again — or email me directly: hello@mamdouh-ghaneemy.com"
    }

  } catch (error) {
    buttonText.value = 'Network error'
    formStatus.value = 'error'
    errorMessage.value = "Network hiccup. Try again — or email me directly: hello@mamdouh-ghaneemy.com"
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      buttonText.value = 'Start the audit'
      formStatus.value = null
    }, 4000)
  }
}

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// ─── Buying Intent Helpers ───
const trackEmailClick = (location: string) => {
  trackEvent('email_click', {
    link_location: location,
    current_page: route.path
  })
}

const trackLinkedinClick = (location: string) => {
  trackEvent('linkedin_click', {
    link_location: location,
    current_page: route.path
  })
}

const trackBookCall = (location: string) => {
  trackEvent('book_call_click', {
    cta_location: location,
    current_page: route.path
  })
}

const trackBehanceClick = (location: string) => {
  trackEvent('behance_click', {
    link_location: location,
    current_page: route.path
  })
}
</script>

<style scoped>
:deep(body.drawer-open) {
  overflow: hidden;
}
.hero {
  height: 100vh;
  background-color: var(--page-bg-1);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
@media (max-width: 767px) {
  .hero {
    height: 105vh;
  }
}
</style>