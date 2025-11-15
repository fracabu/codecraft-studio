<template>
  <div class="min-h-screen pt-8 flex flex-col overflow-x-hidden">
    <!-- Hero Section Servizi -->
    <section class="flex-1 px-4 sm:px-6 flex flex-col justify-start pt-8 sm:pt-16 pb-12">
      <div class="max-w-7xl mx-auto w-full">

        <!-- Title - Mobile First -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-10 md:mb-16 text-center px-2"
        >
          <span class="text-white block sm:inline">I Nostri </span>
          <span class="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent block sm:inline">
            Servizi
          </span>
        </h1>

        <!-- Services Grid - Mobile First -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          <div
            v-for="(service, index) in services"
            :key="index"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 + index * 150 } }"
            class="group p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
          >
            <!-- Icon -->
            <div class="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl relative shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300 group-hover:scale-110">
              <component :is="getServiceIcon(service.title)" class="w-7 h-7 sm:w-8 sm:h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            <!-- Title -->
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              {{ service.description }}
            </p>
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
  ChartBarIcon,
  CloudIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  CubeIcon
} from '@heroicons/vue/24/outline'

// Icon mapping function
const getServiceIcon = (title) => {
  const iconMap = {
    'AI/ML Solutions': CpuChipIcon,
    'Data Analytics Dashboards': ChartBarIcon,
    'API Development': CloudIcon,
    'Trading Systems': ArrowTrendingUpIcon,
    'Web Applications': GlobeAltIcon,
    'npm Packages': CubeIcon
  }
  return iconMap[title] || CpuChipIcon
}

// Services preview
const services = ref([
  {
    icon: '🤖',
    title: 'AI/ML Solutions',
    description: 'Sistemi AI con TensorFlow, Gemini, OpenAI. SEO Analyzer, Trading ML Models, Multi-Agent Systems, Custom GPT.',
    benefit: '8 progetti AI'
  },
  {
    icon: '📊',
    title: 'Data Analytics Dashboards',
    description: 'Dashboard Streamlit/React per Sales, Finance, Logistics, Retail. Visualizzazioni Plotly, ML forecasting, API integration.',
    benefit: '7 dashboard live'
  },
  {
    icon: '🔌',
    title: 'API Development',
    description: 'API Flask/Express per generazione dati simulati (Medical, Sales, Finance). Deploy su Render, supporto 100K+ records.',
    benefit: '3 API pubbliche'
  },
  {
    icon: '📈',
    title: 'Trading Systems',
    description: 'Indicatori MT5 (CustomRSI50 su MQL5 Market), Expert Advisors automatici, Signal Boards con ML predictions.',
    benefit: '80+ paesi'
  },
  {
    icon: '🌐',
    title: 'Web Applications',
    description: 'SPA Vue/React per hospitality, e-commerce, project management. Firebase integration, i18n multilingua, SEO optimized.',
    benefit: '5 app live'
  },
  {
    icon: '📦',
    title: 'npm Packages',
    description: 'Plugin open-source per Fastify, utilities i18n. Pubblicati su npm registry con documentazione completa.',
    benefit: '137+ downloads'
  }
])
</script>