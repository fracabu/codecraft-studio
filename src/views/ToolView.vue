<template>
  <div class="h-screen pt-4 flex flex-col overflow-hidden">
    <section class="flex-1 px-6 flex flex-col justify-start pt-16">
      <div class="max-w-5xl mx-auto text-center space-y-8">
        
        <h1 class="text-5xl md:text-7xl font-bold mb-20">
          <span class="text-white">Tool </span>
          <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sviluppati
          </span>
        </h1>

        <!-- Tools Carousel -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Navigation Buttons -->
          <button
            @click="previousSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-500/20 border border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-all duration-300 -ml-6"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-500/20 border border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-all duration-300 -mr-6"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Carousel Container -->
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(toolGroup, groupIndex) in toolGroups"
                :key="groupIndex"
                class="w-full flex-shrink-0"
              >
                <div class="grid md:grid-cols-3 gap-8">
                  <div
                    v-for="(tool, index) in toolGroup"
                    :key="index"
                    class="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div class="w-16 h-16 mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110 icon-container">
                      <component :is="getToolIcon(tool.category)" class="w-8 h-8 text-white centered-icon" />
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {{ tool.title }}
                    </h3>
                    <p class="text-gray-300 text-base mb-6 leading-relaxed">{{ tool.description }}</p>
                    <div class="flex items-center justify-between">
                      <div class="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1.5">
                        <div class="text-green-400 font-medium text-xs">{{ tool.impact }}</div>
                      </div>
                      <a
                        v-if="tool.url"
                        :href="tool.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center space-x-1 px-3 py-1.5 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors text-xs font-medium"
                      >
                        <span>Provalo ora</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide Indicators -->
          <div class="flex justify-center space-x-2 mt-8">
            <button
              v-for="(_, index) in toolGroups"
              :key="index"
              @click="goToSlide(index)"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="currentSlide === index ? 'bg-purple-400' : 'bg-purple-400/30 hover:bg-purple-400/60'"
            />
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  ChartBarIcon,
  CpuChipIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  CursorArrowRaysIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
  ShoppingCartIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

// Carousel state
const currentSlide = ref(0)

// Icon mapping function
const getToolIcon = (category) => {
  const iconMap = {
    'Tourism': BuildingOfficeIcon,
    'SEO': MagnifyingGlassIcon,
    'Hospitality': HomeIcon,
    'Analytics': ChartBarIcon,
    'Marketing': CpuChipIcon,
    'Productivity': ClipboardDocumentListIcon,
    'Finance': BanknotesIcon,
    'Sales': CursorArrowRaysIcon,
    'Multimedia': MusicalNoteIcon,
    'Developer': CodeBracketIcon,
    'Retail': ShoppingCartIcon,
    'Automation': DocumentTextIcon
  }
  return iconMap[category] || ChartBarIcon
}

// Featured tools data
const featuredTools = ref([
  {
    icon: '🏨',
    title: 'City Tax Calculator',
    description: 'Calcolatore automatico della tassa di soggiorno per B&B e case vacanze.',
    impact: '-90% tempo calcolo',
    category: 'Tourism',
    target: 'Gestori B&B, Case Vacanze',
    status: 'live',
    url: 'https://tassa-soggiorno-calculator.vercel.app/',
    technologies: ['Vue.js', 'JavaScript', 'CSS', 'Responsive Design'],
    features: ['Calcolo automatico tasse', 'Multi-location', 'Export risultati', 'Mobile-first']
  },
  {
    icon: '🔍',
    title: 'SEO Analyzer',
    description: 'Analizza e ottimizza la SEO del tuo sito con suggerimenti automatici.',
    impact: '+150% traffico organico',
    category: 'SEO',
    target: 'Web Developer, Marketer',
    status: 'live',
    url: 'https://seo-analyzer-alpha.vercel.app/',
    technologies: ['Vue.js', 'SEO APIs', 'Lighthouse', 'Analytics'],
    features: ['On-page analysis', 'Performance audit', 'Keyword suggestions', 'Technical SEO']
  },
  {
    icon: '🏠',
    title: 'Ospitly Anti-Overbooking',
    description: 'Previene l\'overbooking monitorando le disponibilità in tempo reale.',
    impact: '-100% overbooking',
    category: 'Hospitality',
    target: 'Hotel, B&B, Airbnb Host',
    status: 'live',
    url: 'https://ospitly-anti-overbooking.vercel.app/',
    technologies: ['Vue.js', 'Booking APIs', 'Real-time sync', 'Calendar'],
    features: ['Multi-platform sync', 'Real-time monitoring', 'Auto-blocking', 'Calendar integration']
  },
  {
    icon: '📋',
    title: 'Project Management Suite',
    description: 'Suite completa per gestione progetti con task tracking, time management, team collaboration e reporting automatico per PMI.',
    impact: '+40% efficienza team',
    category: 'Productivity',
    target: 'Team, Project Manager',
    status: 'planned',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    features: ['Task automation', 'Time tracking', 'Team chat', 'Gantt charts']
  },
  {
    icon: '💰',
    title: 'Invoice & Expense Tracker',
    description: 'Sistema completo per gestione fatturazione, spese e contabilità semplificata per freelancer e piccole aziende.',
    impact: '€800/mese risparmio',
    category: 'Finance',
    target: 'Freelancer, Piccole Aziende',
    status: 'planned',
    technologies: ['Vue.js', 'PDF Generation', 'API Banking', 'Charts'],
    features: ['Auto-invoicing', 'Expense tracking', 'Tax calculations', 'Bank sync']
  },
  {
    icon: '🎯',
    title: 'Lead Generation Tool',
    description: 'Piattaforma per generazione e gestione lead con form intelligenti, CRM integrato e automazione follow-up via email.',
    impact: '+300% lead quality',
    category: 'Sales',
    target: 'Sales Team, Marketing',
    status: 'planned',
    technologies: ['Vue.js', 'CRM API', 'Email automation', 'Analytics'],
    features: ['Smart forms', 'Lead scoring', 'Auto follow-up', 'Conversion tracking']
  },
  {
    icon: '🎵',
    title: 'FFMPEG Converter & Audio Generator',
    description: 'Convertitore multimediale con FFmpeg e generatore audio da testo tramite gTTS/pyttsx3.',
    impact: '-80% tempo conversione',
    category: 'Multimedia',
    target: 'Content Creator, Developer',
    status: 'live',
    technologies: ['Flask', 'FFmpeg', 'gTTS', 'pyttsx3'],
    features: ['Video/Audio conversion', 'Text-to-speech', 'Batch processing', 'Multiple formats']
  },
  {
    icon: '📝',
    title: 'GitHub Repo Describer',
    description: 'Analisi automatica repo GitHub con AI. Genera descrizioni e README con Gemini API e upload automatico.',
    impact: '100% README coverage',
    category: 'Developer',
    target: 'Developer, Open Source',
    status: 'live',
    technologies: ['Python', 'Gemini API', 'GitHub API', 'AI Analysis'],
    features: ['Auto README generation', 'Repo analysis', 'AI descriptions', 'Auto upload']
  },
  {
    icon: '📊',
    title: 'Logistics Tracking Dashboard',
    description: 'Dashboard interattiva per analisi dati logistici con 3 versioni (Basic/Standard/Premium) e ML predictions.',
    impact: '+60% efficienza logistica',
    category: 'Analytics',
    target: 'Logistica, Supply Chain',
    status: 'live',
    technologies: ['Streamlit', 'Plotly', 'Scikit-learn', 'Pandas'],
    features: ['Interactive maps', 'ML predictions', 'KPI tracking', 'Multi-version']
  },
  {
    icon: '🛒',
    title: 'Retail Sales Analytics Dashboard',
    description: 'Dashboard ML per analisi vendite retail con previsioni, KPI avanzati e decomposizione stagionale.',
    impact: '+45% insights vendite',
    category: 'Retail',
    target: 'Retail, E-commerce',
    status: 'live',
    technologies: ['Streamlit', 'ML', 'Plotly', 'API Integration'],
    features: ['Sales forecasting', 'Seasonal analysis', 'Customer demographics', 'Multi-version']
  },
  {
    icon: '📄',
    title: 'Scan-Doc-ID',
    description: 'App web OCR per estrazione dati da documenti di identità con export Excel automatico.',
    impact: '-90% tempo elaborazione',
    category: 'Automation',
    target: 'Uffici, PA, Aziende',
    status: 'live',
    technologies: ['HTML5', 'JavaScript', 'OCR.space', 'Google Vision API'],
    features: ['Drag & drop upload', 'Dual OCR providers', 'Excel export', 'Client-side processing']
  }
])

// Group tools into slides of 3
const toolGroups = computed(() => {
  const groups = []
  for (let i = 0; i < featuredTools.value.length; i += 3) {
    groups.push(featuredTools.value.slice(i, i + 3))
  }
  return groups
})

// Carousel navigation functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % toolGroups.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? toolGroups.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style scoped>
.icon-container {
  display: grid !important;
  place-items: center !important;
  width: 64px !important;
  height: 64px !important;
}

.centered-icon {
  margin: 0 !important;
  padding: 0 !important;
  width: 32px !important;
  height: 32px !important;
  display: block !important;
}

.centered-icon svg {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
  
  /* Hide navigation buttons on mobile */
  button[class*="-ml-6"],
  button[class*="-mr-6"] {
    display: none;
  }
}
</style>