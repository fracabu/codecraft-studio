<template>
  <div class="min-h-screen pt-20">
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 mb-6">
          <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span class="text-yellow-400 font-medium">Success Stories</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Casi di </span>
          <span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Successo
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
          Risultati reali dei nostri clienti.
          <strong class="text-yellow-400">ROI medio 4.5x</strong> in 90 giorni con
          <strong class="text-green-400">risparmio €2.500+ al mese</strong>.
        </p>

        <!-- ROI Stats Highlight -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div class="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <div class="text-3xl font-bold text-green-400 mb-1">-60%</div>
            <div class="text-sm text-gray-400">Costi Support</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <div class="text-3xl font-bold text-cyan-400 mb-1">+35%</div>
            <div class="text-sm text-gray-400">Soddisfazione</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <div class="text-3xl font-bold text-blue-400 mb-1">€2.8K</div>
            <div class="text-sm text-gray-400">Risparmio/mese</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <div class="text-3xl font-bold text-purple-400 mb-1">24/7</div>
            <div class="text-sm text-gray-400">Disponibilità</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Preview -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div
            v-for="(caseStudy, index) in caseStudies"
            :key="index"
            class="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-500"
          >
            <!-- Company Header -->
            <div class="flex items-center space-x-4 mb-6">
              <div class="text-4xl">{{ caseStudy.icon }}</div>
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {{ caseStudy.company }}
                </h3>
                <p class="text-sm text-gray-400">{{ caseStudy.sector }} • {{ caseStudy.size }}</p>
              </div>
            </div>

            <!-- Challenge & Solution -->
            <div class="mb-6">
              <h4 class="text-white font-medium mb-2">Sfida:</h4>
              <p class="text-gray-300 text-sm mb-4">{{ caseStudy.challenge }}</p>

              <h4 class="text-white font-medium mb-2">Soluzione:</h4>
              <p class="text-gray-300 text-sm">{{ caseStudy.solution }}</p>
            </div>

            <!-- Results Grid -->
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div
                v-for="(metric, i) in caseStudy.metrics"
                :key="i"
                class="text-center p-3 bg-white/5 rounded-lg"
              >
                <div class="text-lg font-bold text-green-400">{{ metric.value }}</div>
                <div class="text-xs text-gray-400">{{ metric.label }}</div>
              </div>
            </div>

            <!-- Technologies Used -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in caseStudy.technologies"
                :key="tech"
                class="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Coming Soon Section -->
        <div class="p-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl">
          <h2 class="text-2xl font-bold text-white mb-4">📊 Case Studies Dettagliati in Arrivo</h2>
          <p class="text-gray-300 mb-6">
            Stiamo preparando case studies completi con dati dettagliati su ROI, implementazione step-by-step,
            metriche prima/dopo e testimonial video dei nostri clienti.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contatti"
              class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg font-semibold text-white hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Richiedi Case Study Personalizzato</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </router-link>
            <router-link
              to="/servizi"
              class="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              <span>Scopri i Nostri Servizi</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Case studies data
const caseStudies = ref([
  {
    icon: '🏢',
    company: 'E-commerce SaaS Platform',
    sector: 'Technology',
    size: '50-100 dipendenti',
    challenge: 'Customer support costoso e inefficiente con tempi di risposta lunghi e alta rotazione staff.',
    solution: 'Implementazione chatbot AI multilingue + sistema automatico ticket routing + knowledge base intelligente.',
    metrics: [
      { value: '-60%', label: 'Costi Support' },
      { value: '+35%', label: 'Soddisfazione' },
      { value: '24/7', label: 'Disponibilità' }
    ],
    technologies: ['OpenAI GPT-4', 'n8n', 'Zendesk API', 'Vue.js']
  },
  {
    icon: '🎯',
    company: 'Agenzia Marketing Digitale',
    sector: 'Marketing',
    size: '10-50 dipendenti',
    challenge: 'Creazione report clienti manuale richiedeva 8+ ore settimanali per account manager.',
    solution: 'Dashboard automatica con integrazione multi-platform + report AI + insights predittivi performance.',
    metrics: [
      { value: '-70%', label: 'Tempo Report' },
      { value: '+25%', label: 'ROI Campagne' },
      { value: '€2.8K', label: 'Risparmio/mese' }
    ],
    technologies: ['Google Analytics API', 'Facebook API', 'Python', 'Firebase']
  },
  {
    icon: '🏭',
    company: 'Azienda Manifatturiera',
    sector: 'Manufacturing',
    size: '100+ dipendenti',
    challenge: 'Gestione ordini e inventario manuale con errori frequenti e stock-out imprevisti.',
    solution: 'Sistema predittivo inventario + automazione ordini + alert intelligenti + dashboard real-time.',
    metrics: [
      { value: '-45%', label: 'Errori Ordini' },
      { value: '+30%', label: 'Efficienza' },
      { value: '€5.2K', label: 'Risparmio/mese' }
    ],
    technologies: ['Python', 'Machine Learning', 'ERP Integration', 'PostgreSQL']
  },
  {
    icon: '🏪',
    company: 'Retail Chain',
    sector: 'Retail',
    size: '20-50 dipendenti',
    challenge: 'Analisi vendite e gestione prezzi competitivi richiedeva analisi manuale giornaliera.',
    solution: 'AI pricing optimization + competitor monitoring + sales forecasting + automated reporting.',
    metrics: [
      { value: '+18%', label: 'Margini Profit' },
      { value: '-50%', label: 'Tempo Analisi' },
      { value: '€3.5K', label: 'Ricavo Extra/mese' }
    ],
    technologies: ['Web Scraping', 'ML Algorithms', 'API Integration', 'Dashboard']
  }
])
</script>
