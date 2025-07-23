import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'
import './assets/main.css'

// Firebase inizializzazione (temporaneamente commentato)
// import './plugins/firebase'

// Initialize gtag as no-op function first (fallback)
window.gtag = window.gtag || function() {
  // No-op function when Analytics is not loaded
}

// Google Analytics inizializzazione (solo in produzione)
if (import.meta.env.PROD && import.meta.env.VITE_GA_MEASUREMENT_ID) {
  try {
    // Google Analytics 4
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }

    // Override the no-op function with real gtag
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: true, // GDPR compliance
      allow_ad_personalization_signals: false
    })

    console.log('Google Analytics initialized')
  } catch (error) {
    console.warn('Google Analytics failed to initialize:', error)
  }
}

// Service Worker per PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration)

        // Track SW installation safely
        trackEvent('pwa_install', {
          event_category: 'engagement',
          event_label: 'service_worker'
        })
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

// Safe Analytics tracking utility
const trackEvent = (eventName, parameters = {}) => {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters)
    }
  } catch (error) {
    console.warn('Analytics tracking failed:', error)
  }
}

// Global Error Handling
const handleError = (error, context = 'unknown') => {
  console.error(`[${context}] Error:`, error)

  // Track errors safely
  if (import.meta.env.PROD) {
    trackEvent('exception', {
      description: error?.message || 'Unknown error',
      fatal: false,
      custom_map: { context }
    })
  }

  // Show user-friendly error in development
  if (import.meta.env.DEV) {
    console.warn('Error details:', error)
  }
}

// Global error handlers
window.addEventListener('error', (event) => {
  handleError(event.error, 'global_error')
})

window.addEventListener('unhandledrejection', (event) => {
  handleError(event.reason, 'unhandled_promise')
  event.preventDefault() // Prevent console logging
})

// Performance monitoring
const measurePerformance = () => {
  // Core Web Vitals tracking
  if (import.meta.env.PROD && 'PerformanceObserver' in window) {
    try {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]

        if (lastEntry) {
          trackEvent('web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
            custom_map: { metric_value: lastEntry.startTime }
          })
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          trackEvent('web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
            custom_map: { metric_value: entry.processingStart - entry.startTime }
          })
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }

        trackEvent('web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000),
          custom_map: { metric_value: clsValue }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

    } catch (error) {
      console.warn('Performance monitoring failed:', error)
    }
  }
}

// Create Vue app
const app = createApp(App)
const pinia = createPinia()
const head = createHead()

// Global error handler for Vue
app.config.errorHandler = (error, instance, info) => {
  handleError(error, `vue_${info}`)
}

// Global warning handler for Vue (dev only)
if (import.meta.env.DEV) {
  app.config.warnHandler = (msg, instance, trace) => {
    console.warn(`[Vue warn]: ${msg}`, trace)
  }
}

// Use plugins
app.use(pinia)
app.use(router)
app.use(head)
app.use(MotionPlugin)

// Global properties
app.config.globalProperties.$env = import.meta.env

// Provide global utilities
app.provide('$toast', (message, type = 'info') => {
  // Simple toast implementation
  const event = new CustomEvent('toast', {
    detail: { message, type }
  })
  window.dispatchEvent(event)
})

app.provide('$track', (event, parameters = {}) => {
  // Analytics tracking utility
  trackEvent(event, {
    event_category: 'user_engagement',
    ...parameters
  })
})

// Mount app
app.mount('#app')

// Post-mount initialization
measurePerformance()

// Register global components (if needed)
// app.component('GlobalComponent', GlobalComponent)

// Development helpers
if (import.meta.env.DEV) {
  console.log('🚀 CodeCraft Studio - Development Mode')
  console.log('📊 Vue DevTools available')
  console.log('🔥 Hot Module Replacement active')

  // Make app available globally for debugging
  window.__VUE_APP__ = app
}

// Production optimizations
if (import.meta.env.PROD) {
  console.log('✅ CodeCraft Studio - Production Mode')

  // Disable Vue DevTools in production
  app.config.devtools = false

  // Performance logging
  window.addEventListener('load', () => {
    const loadTime = performance.now()
    console.log(`⚡ App loaded in ${Math.round(loadTime)}ms`)

    trackEvent('page_load_time', {
      value: Math.round(loadTime),
      event_category: 'performance'
    })
  })
}

// Keyboard shortcuts for development
if (import.meta.env.DEV) {
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K = Clear console
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      console.clear()
      console.log('🧹 Console cleared')
    }

    // Ctrl/Cmd + R = Reload (standard browser behavior)
    // Ctrl/Cmd + D = Toggle Vue DevTools (if available)
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
      e.preventDefault()
      console.log('🔧 Vue DevTools - Check browser extension')
    }
  })
}

export default app
