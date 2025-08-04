<template>
  <div class="h-screen pt-8 flex flex-col overflow-hidden">
    <!-- Hero Section Servizi -->
    <section class="flex-1 px-6 flex flex-col justify-start pt-16">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        
        <h1 class="text-5xl md:text-7xl font-bold mb-20">
          <span class="text-white">I Nostri </span>
          <span class="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Servizi
          </span>
        </h1>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(service, index) in services.slice(0, 3)"
            :key="index"
            class="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-300"
          >
            <div class="w-16 h-16 mb-4 bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl relative shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 group-hover:scale-110">
              <component :is="getServiceIcon(service.title)" class="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-300 text-base leading-relaxed mb-6">{{ service.description }}</p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  CpuChipIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  PresentationChartBarIcon
} from '@heroicons/vue/24/outline'

// Icon mapping function
const getServiceIcon = (title) => {
  const iconMap = {
    'Automazioni AI': CpuChipIcon,
    'Ottimizzazione Processi': BoltIcon,
    'Tool Personalizzati': WrenchScrewdriverIcon,
    'Consulenza Strategica': PresentationChartBarIcon
  }
  return iconMap[title] || CpuChipIcon
}

// Services preview
const services = ref([
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
</script>