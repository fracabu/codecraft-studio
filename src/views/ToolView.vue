<template>
  <div class="min-h-screen pt-20">
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
          <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="text-purple-400 font-medium">Portfolio Tool</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">15+ Tool </span>
          <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sviluppati
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
          Calcolatori, dashboard e applicazioni web personalizzate per automatizzare calcoli complessi e
          <strong class="text-purple-400">ridurre il 70% del tempo operativo</strong>.
        </p>

        <!-- Featured Tools Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
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
            <div class="flex items-center justify-between mb-4">
              <div class="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1">
                <div class="text-green-400 font-medium text-xs">{{ tool.impact }}</div>
              </div>
              <div class="text-xs text-gray-400">{{ tool.sector }}</div>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in tool.technologies.slice(0, 3)"
                :key="tech"
                class="px-2 py-1 bg-purple-400/20 text-purple-300 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Coming Soon Section -->
        <div class="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-2xl">
          <h2 class="text-2xl font-bold text-white mb-4">🚧 Portfolio Completo in Costruzione</h2>
          <p class="text-gray-300 mb-6">
            Stiamo preparando il portfolio completo con tutti i nostri 15+ tool sviluppati,
            inclusi dettagli tecnici, case studies e demo interattive.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contatti"
              class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Richiedi Info sui Tool</span>
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

// Featured tools data
const featuredTools = ref([
  {
    icon: '⚡',
    title: 'Plugin Fastify Custom',
    description: 'Plugin NPM personalizzati per server Node.js con funzionalità avanzate di i18n e routing.',
    impact: '+200% velocità sviluppo',
    category: 'Development',
    sector: 'Web Dev',
    technologies: ['Node.js', 'Fastify', 'NPM', 'TypeScript']
  },
  {
    icon: '📊',
    title: 'Dashboard Analytics',
    description: 'Visualizzazione dati business in tempo reale con insights automatici e reportistica.',
    impact: '€1.2K/mese risparmio',
    category: 'Analytics',
    sector: 'Business',
    technologies: ['Vue.js', 'D3.js', 'Firebase', 'Charts']
  },
  {
    icon: '🔮',
    title: 'AI Content Generator',
    description: 'Generazione automatica contenuti SEO-optimized per strategie di marketing digitale.',
    impact: '-80% tempo creazione',
    category: 'Marketing',
    sector: 'Content',
    technologies: ['OpenAI', 'Claude', 'Python', 'API']
  }
])
</script>
