<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section Servizi -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/30 mb-6">
          <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          <span class="text-green-400 font-medium">I Nostri Servizi AI</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Servizi </span>
          <span class="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Intelligenti
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
          Integriamo l'intelligenza artificiale nei tuoi processi aziendali per
          <strong class="text-green-400">ridurre i costi del 60%</strong> e
          <strong class="text-cyan-400">aumentare la produttività del 40%</strong>.
        </p>

        <!-- Stats Mini -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div class="text-center">
            <div class="text-3xl font-bold text-green-400 mb-1">60%</div>
            <div class="text-sm text-gray-400">Riduzione Costi</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-cyan-400 mb-1">40%</div>
            <div class="text-sm text-gray-400">Aumento Produttività</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-400 mb-1">4.5x</div>
            <div class="text-sm text-gray-400">ROI Medio</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-400 mb-1">90 giorni</div>
            <div class="text-sm text-gray-400">Break-even Point</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-500"
          >
            <!-- Service Header -->
            <div class="flex items-start justify-between mb-6">
              <div :class="`text-6xl p-4 rounded-2xl bg-gradient-to-r ${service.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`">
                {{ service.icon }}
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-white">{{ service.startingPrice }}</div>
                <div class="text-sm text-gray-400">da</div>
              </div>
            </div>

            <!-- Service Content -->
            <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed">{{ service.description }}</p>

            <!-- ROI Badge -->
            <div class="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
              <div class="flex items-center space-x-2 text-green-400 font-medium">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                <span>{{ service.savings }}</span>
              </div>
            </div>

            <!-- Examples -->
            <div class="space-y-3 mb-6">
              <h4 class="text-white font-medium mb-3">Esempi di Automazione:</h4>
              <div
                v-for="(example, i) in service.examples.slice(0, 3)"
                :key="i"
                class="flex items-start space-x-3 text-sm text-gray-300"
              >
                <svg class="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>{{ example }}</span>
              </div>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in service.technologies.slice(0, 4)"
                :key="tech"
                class="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-xs"
              >
                {{ tech }}
              </span>
              <span
                v-if="service.technologies.length > 4"
                class="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs"
              >
                +{{ service.technologies.length - 4 }}
              </span>
            </div>

            <!-- CTA -->
            <router-link
              to="/contatti"
              class="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Richiedi Preventivo</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 px-6 bg-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-white">Il Nostro </span>
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Processo
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Dalla consulenza iniziale all'implementazione finale in 4 semplici step.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="text-center group"
          >
            <div class="relative mb-6">
              <!-- Step Number -->
              <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-lg">{{ index + 1 }}</span>
              </div>
              <!-- Connecting Line -->
              <div
                v-if="index < processSteps.length - 1"
                class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform translate-x-8"
              ></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {{ step.title }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">{{ step.description }}</p>
            <div class="text-xs text-cyan-400 font-medium mt-2">{{ step.duration }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-white">Domande </span>
            <span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Frequenti
            </span>
          </h2>
        </div>

        <div class="space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <h3 class="text-lg font-bold text-white mb-3">{{ faq.question }}</h3>
            <p class="text-gray-300 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-6 bg-white/5">
      <div class="max-w-4xl mx-auto text-center">
        <div class="p-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/30 rounded-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto a Automatizzare il Tuo Business?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Consulenza gratuita di 30 minuti per identificare le migliori opportunità di automazione.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contatti"
              class="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
              </svg>
              <span>Prenota Consulenza Gratuita</span>
            </router-link>
            <router-link
              to="/casi-successo"
              class="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span>Vedi Casi di Successo</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Services data
const services = ref([
  {
    id: 'ai-automations',
    title: 'Automazioni AI per Business',
    description: 'Integriamo intelligenza artificiale nei tuoi processi aziendali per automatizzare attività ripetitive e ridurre i costi operativi fino al 60%.',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
    startingPrice: '€1.500',
    savings: 'Risparmio fino al 60% sui costi operativi',
    examples: [
      'Classificazione automatica email clienti',
      'Generazione automatica preventivi',
      'Chatbot supporto clienti 24/7',
      'Analisi sentiment social media',
      'Estrazione dati da documenti',
      'Workflow approval automatici'
    ],
    technologies: ['OpenAI GPT-4', 'Claude AI', 'n8n', 'Make.com', 'Python', 'API Integration']
  },
  {
    id: 'process-optimization',
    title: 'Consulenza Ottimizzazione Processi',
    description: 'Analizziamo i tuoi workflow aziendali per identificare inefficienze e implementare soluzioni che aumentano la produttività del 40%.',
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
    startingPrice: '€800',
    savings: 'Aumento produttività fino al 40%',
    examples: [
      'Ottimizzazione ciclo ordine-fattura',
      'Automazione onboarding dipendenti',
      'Gestione automatica inventario',
      'Workflow approvazioni documenti',
      'Dashboard performance real-time',
      'Reporting automatico KPI'
    ],
    technologies: ['Process Mining', 'Analytics', 'Workflow Tools', 'Dashboard', 'API', 'Database']
  },
  {
    id: 'custom-tools',
    title: 'Tool Web Personalizzati',
    description: 'Sviluppiamo calcolatori, dashboard e applicazioni web su misura per automatizzare calcoli complessi e ridurre il 70% del tempo operativo.',
    icon: '🔧',
    color: 'from-green-500 to-teal-500',
    startingPrice: '€1.200',
    savings: 'Riduzione 70% tempo operativo',
    examples: [
      'Calcolatori business personalizzati',
      'Dashboard analytics custom',
      'Tool gestione progetti interni',
      'Applicazioni mobile-first',
      'Integrazioni API third-party',
      'Plugin e estensioni custom'
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'Python', 'MongoDB', 'Firebase', 'AWS']
  },
  {
    id: 'strategic-consulting',
    title: 'Consulenza Strategica AI',
    description: 'Sviluppiamo roadmap di trasformazione digitale e strategie di implementazione AI per massimizzare il ROI con risultati misurabili.',
    icon: '📊',
    color: 'from-orange-500 to-red-500',
    startingPrice: '€600',
    savings: 'ROI medio 4.5x in 90 giorni',
    examples: [
      'Roadmap trasformazione digitale',
      'Audit processi aziendali',
      'Strategia implementazione AI',
      'Cost-benefit analysis',
      'Training team interno',
      'Monitoraggio ROI continuo'
    ],
    technologies: ['Business Intelligence', 'Data Analysis', 'Strategic Planning', 'ROI Tracking']
  }
])

// Process steps
const processSteps = ref([
  {
    title: 'Analisi',
    description: 'Analizziamo i tuoi processi attuali per identificare opportunità di automazione.',
    duration: '1-2 settimane'
  },
  {
    title: 'Strategia',
    description: 'Sviluppiamo una strategia personalizzata con ROI e timeline chiari.',
    duration: '3-5 giorni'
  },
  {
    title: 'Implementazione',
    description: 'Sviluppiamo e implementiamo le soluzioni concordate.',
    duration: '2-6 settimane'
  },
  {
    title: 'Monitoraggio',
    description: 'Monitoraggio performance e ottimizzazione continua.',
    duration: 'Ongoing'
  }
])

// FAQs
const faqs = ref([
  {
    question: 'Quanto tempo richiede l\'implementazione di un\'automazione AI?',
    answer: 'Dipende dalla complessità del progetto. Automazioni semplici possono essere implementate in 1-2 settimane, mentre progetti più complessi richiedono 4-6 settimane. Durante la consulenza iniziale forniamo timeline precise.'
  },
  {
    question: 'Quale ROI posso aspettarmi dalle automazioni AI?',
    answer: 'I nostri clienti ottengono un ROI medio di 4.5x entro 90 giorni. Il risparmio varia dal 40% al 70% sui costi operativi, a seconda del tipo di automazione implementata.'
  },
  {
    question: 'Le automazioni si integrano con i nostri sistemi esistenti?',
    answer: 'Sì, sviluppiamo soluzioni che si integrano perfettamente con i tuoi sistemi attuali tramite API e connettori personalizzati. Non è necessario sostituire i software esistenti.'
  },
  {
    question: 'Offrite supporto post-implementazione?',
    answer: 'Assolutamente sì. Includiamo 3 mesi di supporto gratuito e monitoraggio performance. Offriamo anche piani di manutenzione estesi per ottimizzazioni continue.'
  }
])
</script>
