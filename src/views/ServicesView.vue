<template>
  <div class="h-screen pt-8 flex flex-col overflow-hidden">
    <!-- Hero Section Servizi -->
    <section class="flex-1 px-6 flex flex-col justify-center">
      <div class="max-w-4xl mx-auto text-center space-y-4">
        
        <h1 class="text-4xl md:text-5xl font-bold">
          <span class="text-white">I Nostri </span>
          <span class="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Servizi
          </span>
        </h1>

        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Automazioni AI per ottimizzare i tuoi processi aziendali.
        </p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
          >
            <div class="text-3xl font-bold text-green-400">{{ stat.value }}</div>
            <div class="text-sm text-gray-400">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-300"
          >
            <div class="flex items-center space-x-3 mb-3">
              <div class="text-2xl">{{ service.icon }}</div>
              <h3 class="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                {{ service.title }}
              </h3>
            </div>
            <p class="text-gray-300 text-sm">{{ service.description }}</p>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="p-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/30 rounded-2xl max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold text-white mb-4">
            Pronto a Automatizzare il Tuo Business?
          </h2>
          <p class="text-base text-gray-300 mb-6">
            Consulenza gratuita di 30 minuti per identificare le migliori opportunità di automazione.
          </p>
          <router-link
            to="/contatti"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-cyan-700 transition-all duration-300"
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
import { ref } from 'vue'

// Stats
const stats = ref([
  { label: 'Riduzione Costi', value: '60%' },
  { label: 'Aumento Produttività', value: '40%' },
  { label: 'ROI Medio', value: '4.5x' },
  { label: 'Break-even', value: '90 giorni' }
])

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