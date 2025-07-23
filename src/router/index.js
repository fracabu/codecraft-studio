import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ToolView from '../views/ToolView.vue'
import CasiSuccessoView from '../views/CasiSuccessoView.vue'
import ContattiView from '../views/ContattiView.vue'

// Routes with SEO metadata
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'CodeCraft Studio - Automazioni AI per Business',
      description: 'Integriamo intelligenza artificiale nei processi aziendali per ridurre costi del 60% e aumentare produttività del 40%. Consulenza gratuita 30min.',
      keywords: 'automazioni AI, intelligenza artificiale business, chatbot, processi automatizzati, CodeCraft Studio',
      ogTitle: 'CodeCraft Studio - Automazioni AI per Business',
      ogDescription: 'Riduci i costi operativi del 60% con le nostre automazioni AI personalizzate. ROI garantito in 90 giorni.',
      ogImage: '/og-images/home.jpg',
      canonicalUrl: 'https://www.codecraft.it/'
    }
  },
  {
    path: '/servizi',
    name: 'Servizi',
    component: ServicesView,
    meta: {
      title: 'Servizi AI | Automazioni Business | CodeCraft Studio',
      description: 'Scopri i nostri 4 servizi principali: Automazioni AI, Ottimizzazione Processi, Tool Personalizzati, Consulenza Strategica. ROI medio 4.5x.',
      keywords: 'servizi AI, automazioni business, chatbot custom, ottimizzazione processi, tool personalizzati',
      ogTitle: 'Servizi AI per Business - CodeCraft Studio',
      ogDescription: '4 servizi AI per automatizzare i tuoi processi: chatbot, analisi documenti, workflow optimization. Risparmio garantito 60%.',
      ogImage: '/og-images/servizi.jpg',
      canonicalUrl: 'https://www.codecraft.it/servizi'
    }
  },
  {
    path: '/tool',
    name: 'Tool',
    component: ToolView,
    meta: {
      title: 'Portfolio Tool | 15+ Applicazioni Sviluppate | CodeCraft',
      description: 'Esplora i nostri 15+ tool sviluppati: calcolatori, dashboard, plugin NPM, AI generators. Riduci il 70% del tempo operativo.',
      keywords: 'tool personalizzati, dashboard custom, calcolatori business, plugin NPM, AI content generator',
      ogTitle: 'Portfolio Tool - CodeCraft Studio',
      ogDescription: '15+ tool personalizzati per automatizzare calcoli e processi. Dalla creazione plugin NPM alle dashboard analytics.',
      ogImage: '/og-images/tool.jpg',
      canonicalUrl: 'https://www.codecraft.it/tool'
    }
  },
  {
    path: '/casi-successo',
    name: 'CasiSuccesso',
    component: CasiSuccessoView,
    meta: {
      title: 'Casi di Successo | ROI 4.5x | Clienti CodeCraft Studio',
      description: 'Scopri i risultati reali dei nostri clienti: -60% costi support, +35% soddisfazione clienti, €2.8K risparmio mensile. ROI medio 4.5x in 90 giorni.',
      keywords: 'casi successo AI, ROI automazioni, risultati clienti, case study business, testimonial AI',
      ogTitle: 'Casi di Successo - ROI 4.5x con le Automazioni AI',
      ogDescription: 'Risultati reali: E-commerce con -60% costi support, Agenzia con +25% ROI campagne. Scopri come i nostri clienti risparmiano migliaia di euro.',
      ogImage: '/og-images/casi-successo.jpg',
      canonicalUrl: 'https://www.codecraft.it/casi-successo'
    }
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: ContattiView,
    meta: {
      title: 'Contatti | Consulenza Gratuita 30min | CodeCraft Studio',
      description: 'Richiedi una consulenza gratuita di 30 minuti per analizzare i tuoi processi e identificare opportunità di automazione AI. Contatta CodeCraft Studio.',
      keywords: 'contatti CodeCraft, consulenza gratuita AI, analisi processi business, preventivo automazioni',
      ogTitle: 'Contatti - Consulenza Gratuita 30min',
      ogDescription: 'Analisi gratuita dei tuoi processi aziendali. Identifichiamo insieme le migliori opportunità di automazione per il tuo business.',
      ogImage: '/og-images/contatti.jpg',
      canonicalUrl: 'https://www.codecraft.it/contatti'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when changing routes
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global navigation guards for SEO
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // Update meta description
  if (to.meta.description) {
    updateOrCreateMeta('description', to.meta.description)
  }

  // Update meta keywords
  if (to.meta.keywords) {
    updateOrCreateMeta('keywords', to.meta.keywords)
  }

  // Update Open Graph tags
  if (to.meta.ogTitle) {
    updateOrCreateMeta('og:title', to.meta.ogTitle, 'property')
  }

  if (to.meta.ogDescription) {
    updateOrCreateMeta('og:description', to.meta.ogDescription, 'property')
  }

  if (to.meta.ogImage) {
    updateOrCreateMeta('og:image', to.meta.ogImage, 'property')
  }

  // Update canonical URL
  if (to.meta.canonicalUrl) {
    updateOrCreateLink('canonical', to.meta.canonicalUrl)
  }

  // Continue navigation
  next()
})

// Helper function to update or create meta tags
function updateOrCreateMeta(name, content, attribute = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)

  if (element) {
    element.setAttribute('content', content)
  } else {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    element.setAttribute('content', content)
    document.head.appendChild(element)
  }
}

// Helper function to update or create link tags
function updateOrCreateLink(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`)

  if (element) {
    element.setAttribute('href', href)
  } else {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    element.setAttribute('href', href)
    document.head.appendChild(element)
  }
}

// Track page views for analytics
router.afterEach((to) => {
  // Google Analytics 4 tracking
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: to.meta.title,
      page_location: window.location.href
    })
  }

  // Development logging
  if (import.meta.env.DEV) {
    console.log(`🚀 Navigated to: ${to.name} (${to.path})`)
    console.log(`📄 Page title: ${to.meta.title}`)
  }
})

export default router
