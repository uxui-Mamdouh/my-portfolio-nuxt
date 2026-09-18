<template>
  <section 
    class="final-cta-section"
    :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }"
  >
    <div class="cta-container variation-4">
      <div class="split-content">
        <!-- Emotional Side (Left) -->
        <div class="split-side emotional">
          <h2 class="side-title">{{ emotionalTitle }}</h2>
          <p class="side-text">{{ emotionalText }}</p>
          <AppButton 
            :to="ctaLink" 
            :variant="isDarkMode ? 'primary' : 'primary'" 
            size="lg" 
            rounded="full" 
            class="cta-button"
          >
            {{ ctaText }}
          </AppButton>
        </div>
        
        <!-- Divider -->
        <div class="split-divider">
          <div class="divider-line"></div>
        </div>
        
        <!-- Technical Side (Right) -->
        <div class="split-side technical">
          <h3 class="tech-title">{{ technicalTitle }}</h3>
          <ul class="tech-list">
            <li 
              v-for="(item, index) in technicalDeliverables" 
              :key="index" 
              class="tech-item"
            >
              <Icon name="lucide:check" class="check-icon" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Props - كل المحتوى قابل للتعديل
const props = defineProps({
  // Emotional Side Content
  emotionalTitle: {
    type: String,
    default: 'Clarity over noise'
  },
  emotionalText: {
    type: String,
    default: 'Your launch needs to prove itself. Not with opinions, but with data that moves the needle.'
  },
  
  // CTA
  ctaText: {
    type: String,
    default: 'Start Your Project →'
  },
  ctaLink: {
    type: String,
    default: '/contact'
  },
  
  // Technical Side Content
  technicalTitle: {
    type: String,
    default: 'Technical Delivery'
  },
  technicalDeliverables: {
    type: Array,
    default: () => [
      'Nuxt Components',
      'Server Routes',
      'Tracking Plan',
      'Zero Handoff Gap'
    ]
  },
  
  // Theme Control
  forceTheme: {
    type: String,
    default: 'auto', // 'light', 'dark', or 'auto'
    validator: (value) => ['light', 'dark', 'auto'].includes(value)
  }
})

// Detect Theme
const isDarkMode = ref(false)

const detectTheme = () => {
  if (props.forceTheme === 'light') {
    isDarkMode.value = false
    return
  }
  
  if (props.forceTheme === 'dark') {
    isDarkMode.value = true
    return
  }
  
  // Auto-detect: check for dark mode class or preference
  if (typeof window !== 'undefined') {
    const html = document.documentElement
    const hasDarkClass = html.classList.contains('dark') || 
                         html.classList.contains('dark-mode') ||
                         document.body.classList.contains('dark') ||
                         document.body.classList.contains('dark-mode')
    
    if (hasDarkClass) {
      isDarkMode.value = true
      return
    }
    
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = prefersDark
  }
}

// Watch for theme changes
onMounted(() => {
  detectTheme()
  
  // Listen for theme changes
  if (typeof window !== 'undefined') {
    const observer = new MutationObserver(() => {
      detectTheme()
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    })
  }
})
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.final-cta-section {
  position: relative;
  padding: 120px 24px;
  overflow: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Light Mode (Default) */
.light-mode {
  color: #0F172A;
}

/* Dark Mode */
.dark-mode {
  color: #F8FAFC;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* ==================== SPLIT SCREEN LAYOUT ==================== */
.split-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.split-side {
  padding: 60px 40px;
}

/* Emotional Side (Left) */
.split-side.emotional {
  text-align: right;
  border-right: 2px solid;
  transition: border-color 0.3s ease;
}

.light-mode .split-side.emotional {
  border-right-color: rgba(6, 144, 249, 0.3);
}

.dark-mode .split-side.emotional {
  border-right-color: rgba(6, 144, 249, 0.3);
}

/* Technical Side (Right) */
.split-side.technical {
  text-align: left;
}

/* Typography - Emotional Side */
.side-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
}

.light-mode .side-title {
  color: #0F172A;
}

.dark-mode .side-title {
  color: #F8FAFC;
}

.side-text {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 40px;
  transition: color 0.3s ease;
}

.light-mode .side-text {
  color: #64748B;
}

.dark-mode .side-text {
  color: #94A3B8;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -10px rgba(109, 94, 240, 0.4);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px -10px rgba(109, 94, 240, 0.5);
}

/* Divider */
.split-divider {
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider-line {
  width: 2px;
  height: 200px;
  transition: background 0.3s ease;
}

.light-mode .divider-line {
  background: linear-gradient(to bottom, transparent, rgba(6, 144, 249, 0.4), transparent);
}

.dark-mode .divider-line {
  background: linear-gradient(to bottom, transparent, rgba(6, 144, 249, 0.4), transparent);
}

/* Technical Side */
.tech-title {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 32px;
  transition: color 0.3s ease;
}

.light-mode .tech-title {
  color: #0F172A;
}

.dark-mode .tech-title {
  color: #F8FAFC;
}

.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  font-size: 1.05rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.light-mode .tech-item {
  color: #334155;
}

.dark-mode .tech-item {
  color: #E2E8F0;
}

.check-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: color 0.3s ease;
}

.light-mode .check-icon {
  color: #22C55E;
}

.dark-mode .check-icon {
  color: #22C55E;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 968px) {
  .final-cta-section {
    padding: 80px 20px;
  }
  
  .split-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .split-side.emotional {
    text-align: center;
    border-right: none;
    border-bottom: 2px solid;
    padding-bottom: 40px;
  }
  
  .light-mode .split-side.emotional {
    border-bottom-color: rgba(6, 144, 249, 0.3);
  }
  
  .dark-mode .split-side.emotional {
    border-bottom-color: rgba(6, 144, 249, 0.3);
  }
  
  .split-side.technical {
    text-align: center;
  }
  
  .divider-line {
    display: none;
  }
  
  .tech-list {
    display: inline-block;
    text-align: left;
  }
}

@media (max-width: 640px) {
  .side-title {
    font-size: 1.75rem;
  }
  
  .side-text {
    font-size: 1rem;
  }
  
  .tech-title {
    font-size: 1.25rem;
  }
  
  .tech-item {
    font-size: 0.95rem;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>