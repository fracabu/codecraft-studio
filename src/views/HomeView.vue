<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full border border-cyan-400/30 mb-6">
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span class="text-cyan-400 font-medium">AI & Business Automations</span>
        </div>

        <!-- Main Title -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Automatizziamo i Tuoi</span>
          <br />
          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Processi Business
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Integriamo <strong class="text-cyan-400">intelligenza artificiale</strong> e
          <strong class="text-cyan-400"> automazioni custom</strong> per ridurre i costi operativi del
          <strong class="text-green-400"> 60%</strong> e aumentare la produttività del
          <strong class="text-green-400"> 40%</strong>.
        </p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group cursor-default"
          >
            <div class="flex justify-center mb-2 text-cyan-400 group-hover:scale-110 transition-transform">
              <component :is="stat.icon" class="w-6 h-6" />
            </div>
            <div class="text-2xl md:text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-400">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <span
            v-for="(tech, index) in techStack"
            :key="tech"
            class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full text-sm text-cyan-300 hover:bg-cyan-400/20 transition-all duration-300 hover:scale-105 cursor-default"
          >
            {{ tech }}
          </span>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contatti"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2 group"
          >
            <svg class="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
            </svg>
            <span>Consulenza Gratuita 30min</span>
          </router-link>

          <router-link
            to="/casi-successo"
            class="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span>Vedi Casi di Successo</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Value Proposition Cards -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(prop, index) in valueProps"
            :key="index"
            class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
          >
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ prop.icon }}
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {{ prop.title }}
            </h3>
            <p class="text-gray-300 text-sm mb-4 leading-relaxed">{{ prop.description }}</p>
            <div class="inline-flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full group-hover:bg-green-500/30 transition-colors">
              <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <span class="text-green-400 font-medium text-sm">{{ prop.metric }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 px-6 bg-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/30 mb-6">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span class="text-green-400 font-medium">I Nostri Servizi</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-white">Soluzioni </span>
            <span class="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligenti
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Automazioni AI personalizzate per ogni processo aziendale.
            <strong class="text-cyan-400">ROI garantito</strong> e implementazione rapida.
          </p>
          <router-link
            to="/servizi"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>Scopri Tutti i Servizi</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>

        <!-- Services Preview Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(service, index) in servicesPreview"
            :key="index"
            class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105"
          >
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ service.icon }}
            </div>
            <h3 class="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-300 text-sm mb-4 leading-relaxed">{{ service.description }}</p>
            <div class="inline-flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full group-hover:bg-green-500/30 transition-colors">
              <span class="text-green-400 font-medium text-sm">{{ service.benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Highlight -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center p-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/30 rounded-2xl">
          <div class="text-4xl md:text-5xl font-bold text-white mb-4">
            ROI Medio: <span class="text-green-400">4.5x</span> entro 90 giorni
          </div>
          <p class="text-gray-300 text-lg mb-6">
            I nostri clienti recuperano l'investimento in media entro 3 mesi e
            <strong class="text-cyan-400">risparmiano €2.500+ al mese</strong> grazie alle automazioni.
          </p>
          <router-link
            to="/casi-successo"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
          >
            <span>Vedi i Risultati Reali</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Tools Preview -->
    <section class="py-20 px-6 bg-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
            <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-purple-400 font-medium">I Nostri Tool</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-white">15+ Tool </span>
            <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sviluppati
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Calcolatori, dashboard e applicazioni web personalizzate per automatizzare calcoli complessi.
          </p>
          <router-link
            to="/tool"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>Esplora il Portfolio</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>

        <!-- Featured Tools -->
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(tool, index) in featuredTools"
            :key="index"
            class="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="text-3xl group-hover:scale-110 transition-transform">{{ tool.icon }}</div>
              <div class="text-sm text-gray-400">{{ tool.category }}</div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {{ tool.title }}
            </h3>
            <p class="text-gray-300 text-sm mb-4 leading-relaxed">{{ tool.description }}</p>
            <div class="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1">
              <div class="text-green-400 font-medium text-xs">{{ tool.impact }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto a Iniziare?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Consulenza gratuita di 30 minuti per analizzare i tuoi processi e identificare opportunità di automazione.
          </p>
          <router-link
            to="/contatti"
            class="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
            </svg>
            <span>Prenota Consulenza Gratuita</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, defineComponent } from 'vue'

// Icon components
const CogIcon = defineComponent({
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>`
})

const DollarSignIcon = defineComponent({
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
  </svg>`
})

const SettingsIcon = defineComponent({
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
  </svg>`
})

const TrendingUpIcon = defineComponent({
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
  </svg>`
})

// Data
const stats = ref([
  {
    label: 'Processi Automatizzati',
    value: '50+',
    icon: CogIcon
  },
  {
    label: 'Risparmio Medio Clienti',
    value: '€2.5K',
    icon: DollarSignIcon
  },
  {
    label: 'Tool Sviluppati',
    value: '15+',
    icon: SettingsIcon
  },
  {
    label: 'ROI Medio Progetti',
    value: '4.5x',
    icon: TrendingUpIcon
  }
])

const techStack = ref([
  'OpenAI GPT-4', 'Claude AI', 'n8n Automations', 'Python', 'Vue.js', 'Firebase'
])

const valueProps = ref([
  {
    icon: '🤖',
    title: 'Automazioni AI Intelligenti',
    description: 'Integriamo GPT-4 e Claude per automatizzare processi complessi: dalla gestione email ai report automatici, chatbot avanzati e analisi documenti.',
    metric: 'Risparmio 60% costi'
  },
  {
    icon: '⚡',
    title: 'Implementazione Rapida',
    description: 'Soluzioni operative in 1-4 settimane, non mesi. Risultati immediati e ROI misurabile dal primo giorno con supporto completo.',
    metric: '1-4 settimane delivery'
  },
  {
    icon: '📊',
    title: 'ROI Garantito',
    description: 'Ogni progetto è progettato per generare un ritorno concreto. Media 4.5x di ROI entro 90 giorni con monitoraggio continuo delle performance.',
    metric: '4.5x ROI medio'
  }
])

const servicesPreview = ref([
  {
    icon: '🤖',
    title: 'Automazioni AI',
    description: 'Chatbot intelligenti, analisi documenti automatica, email management AI.',
    benefit: 'Risparmio 60%'
  },
  {
    icon: '⚡',
    title: 'Ottimizzazione Processi',
    description: 'Analisi workflow, identificazione inefficienze, implementazione soluzioni.',
    benefit: '+40% produttività'
  },
  {
    icon: '🔧',
    title: 'Tool Personalizzati',
    description: 'Calcolatori custom, dashboard analytics, applicazioni web su misura.',
    benefit: '-70% tempo'
  },
  {
    icon: '📊',
    title: 'Consulenza Strategica',
    description: 'Analisi processi business, roadmap automazione, ROI planning.',
    benefit: 'ROI 4.5x'
  }
])

const featuredTools = ref([
  {
    icon: '⚡',
    title: 'Plugin Fastify Custom',
    description: 'Plugin NPM personalizzati per server Node.js con funzionalità avanzate.',
    impact: '+200% velocità sviluppo',
    category: 'Development'
  },
  {
    icon: '📊',
    title: 'Dashboard Analytics',
    description: 'Visualizzazione dati business in tempo reale con insights automatici.',
    impact: '€1.2K/mese risparmio',
    category: 'Analytics'
  },
  {
    icon: '🔮',
    title: 'AI Content Generator',
    description: 'Generazione automatica contenuti SEO-optimized per marketing.',
    impact: '-80% tempo creazione',
    category: 'Marketing'
  }
])
</script>

<style scoped>
/* Custom animations for enhanced user experience */
.group:hover .text-4xl {
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0) scale(1);
  }
  40%, 43% {
    transform: translate3d(0,-8px,0) scale(1.1);
  }
  70% {
    transform: translate3d(0,-4px,0) scale(1.05);
  }
  90% {
    transform: translate3d(0,-1px,0) scale(1.02);
  }
}
</style>
