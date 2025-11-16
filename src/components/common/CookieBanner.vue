<template>
  <Transition name="slide-up">
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 shadow-2xl"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <!-- Content -->
          <div class="flex-1">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0">
                <Cookie class="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Utilizzo dei Cookie
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Utilizziamo cookie essenziali per il funzionamento del sito e cookie analitici
                  (Google Analytics) per migliorare la tua esperienza. I tuoi dati sono anonimi e
                  protetti secondo il GDPR.
                </p>
                <div class="flex flex-wrap gap-2 text-xs">
                  <router-link
                    to="/privacy"
                    class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline font-medium"
                  >
                    Privacy Policy
                  </router-link>
                  <span class="text-gray-400">•</span>
                  <router-link
                    to="/cookie"
                    class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline font-medium"
                  >
                    Cookie Policy
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              @click="handleReject"
              class="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-600"
            >
              Solo Essenziali
            </button>
            <button
              @click="handleAccept"
              class="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Accetta Tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Cookie } from 'lucide-vue-next'

const showBanner = ref(false)
const CONSENT_KEY = 'codecraft_cookie_consent'

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem(CONSENT_KEY)
  if (!consent) {
    // Show banner after a small delay for better UX
    setTimeout(() => {
      showBanner.value = true
    }, 1000)
  } else {
    // Apply saved consent
    applyConsent(JSON.parse(consent))
  }
})

const handleAccept = () => {
  const consent = {
    essential: true,
    analytics: true,
    timestamp: new Date().toISOString()
  }
  saveConsent(consent)
  showBanner.value = false
}

const handleReject = () => {
  const consent = {
    essential: true,
    analytics: false,
    timestamp: new Date().toISOString()
  }
  saveConsent(consent)
  showBanner.value = false
}

const saveConsent = (consent) => {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
  applyConsent(consent)

  // Track consent choice (only if analytics accepted)
  if (consent.analytics && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
  }
}

const applyConsent = (consent) => {
  if (consent.analytics) {
    // Enable Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  } else {
    // Disable Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }
}

// Export function to reset consent (useful for testing or user preference changes)
const resetConsent = () => {
  localStorage.removeItem(CONSENT_KEY)
  showBanner.value = true
}

// Make resetConsent available globally for preference management
if (import.meta.env.DEV) {
  window.__resetCookieConsent = resetConsent
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
