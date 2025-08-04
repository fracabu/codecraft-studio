<template>
  <div class="h-screen pt-4 flex flex-col overflow-hidden">
    <section class="flex-1 px-6 flex flex-col justify-start pt-12">
      <div class="max-w-5xl mx-auto text-center space-y-4">
        
        <h1 class="text-4xl md:text-5xl font-bold">
          <span class="text-white">Tool </span>
          <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sviluppati
          </span>
        </h1>

        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          Calcolatori specializzati e applicazioni web per <strong class="text-purple-400">automatizzare processi business</strong>.
        </p>

        <!-- Featured Tools Grid -->
        <div class="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div
            v-for="(tool, index) in featuredTools.slice(0, 3)"
            :key="index"
            class="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
          >
            <div class="flex items-center space-x-3 mb-3">
              <div class="text-2xl">{{ tool.icon }}</div>
              <h3 class="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                {{ tool.title }}
              </h3>
            </div>
            <p class="text-gray-300 text-sm mb-3 leading-relaxed">{{ tool.description }}</p>
            <div class="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1.5 inline-block">
              <div class="text-green-400 font-medium text-xs">{{ tool.impact }}</div>
            </div>
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
    icon: '🏨',
    title: 'City Tax Calculator',
    description: 'Calcolatore avanzato per la tassa di soggiorno destinato a gestori di case vacanze, B&B e strutture ricettive. Calcolo automatico basato su location, durata e tipologia.',
    impact: '-90% tempo calcolo',
    category: 'Tourism',
    target: 'Gestori B&B, Case Vacanze',
    status: 'live',
    url: 'https://tassa-soggiorno-calculator.vercel.app/',
    technologies: ['Vue.js', 'JavaScript', 'CSS', 'Responsive Design'],
    features: ['Calcolo automatico tasse', 'Multi-location', 'Export risultati', 'Mobile-first']
  },
  {
    icon: '📊',
    title: 'Business Analytics Dashboard',
    description: 'Dashboard completa per analisi dati business con visualizzazioni interattive, KPI tracking e reportistica automatica personalizzabile.',
    impact: '€1.2K/mese risparmio',
    category: 'Analytics',
    target: 'PMI, Startup',
    status: 'development',
    technologies: ['Vue.js', 'D3.js', 'Firebase', 'Charts.js'],
    features: ['Real-time data', 'Custom KPIs', 'Auto-reports', 'API Integration']
  },
  {
    icon: '🤖',
    title: 'AI Content Generator',
    description: 'Tool per generazione automatica di contenuti SEO-optimized, social posts e copy marketing usando GPT-4 e prompt engineering avanzato.',
    impact: '-80% tempo creazione',
    category: 'Marketing',
    target: 'Agenzie, Content Creator',
    status: 'development',
    technologies: ['OpenAI GPT-4', 'Python', 'Vue.js', 'API'],
    features: ['SEO optimization', 'Multi-format', 'Brand consistency', 'Bulk generation']
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
  }
])
</script>