<template>
  <div class="w-full min-h-screen overflow-x-hidden pt-20">
    <div>
      <!-- Hero Section -->
      <section class="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Main Title - Simplified -->
          <h1
            v-motion
            :initial="{ opacity: 0, y: -50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight px-4"
          >
            <span class="text-white block mb-2">App e Tool</span>
            <span class="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent block">
              Potenziati dall'AI
            </span>
          </h1>

          <!-- Subtitle - One line only -->
          <p
            v-motion
            :initial="{ opacity: 0, y: -30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
            class="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 sm:mb-12 px-4"
          >
            Sviluppiamo soluzioni su misura con AI integrata
          </p>

          <!-- CTA Buttons -->
          <div
            v-motion
            :initial="{ opacity: 0, y: -30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <BaseButton
              tag="router-link"
              to="/contatti"
              variant="primary"
              size="lg"
            >
              Consulenza Gratuita
            </BaseButton>
            <BaseButton
              tag="router-link"
              to="/tool"
              variant="secondary"
              size="lg"
            >
              Vedi i Nostri Progetti
            </BaseButton>
          </div>

          <!-- Trust indicators - Simplified -->
          <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>25+ Progetti</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>AI Integration</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Value Proposition Cards -->
      <section class="py-20 px-6 bg-white/[0.02]">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
              class="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white mb-3">
                AI/ML Solutions
              </h3>
              <p class="text-gray-400 leading-relaxed mb-6">
                Sistemi AI con TensorFlow, Gemini, OpenAI. SEO Analyzer, Trading ML Models, Multi-Agent Systems.
              </p>
              <div class="text-sm text-primary-400 font-medium">
                8 progetti AI →
              </div>
            </div>

            <!-- Card 2 -->
            <div
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
              class="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white mb-3">
                Data Analytics
              </h3>
              <p class="text-gray-400 leading-relaxed mb-6">
                Dashboard Streamlit/React per Sales, Finance, Logistics. Visualizzazioni Plotly, ML forecasting.
              </p>
              <div class="text-sm text-primary-400 font-medium">
                7 dashboard live →
              </div>
            </div>

            <!-- Card 3 -->
            <div
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 600 } }"
              class="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white mb-3">
                Trading Systems
              </h3>
              <p class="text-gray-400 leading-relaxed mb-6">
                Indicatori MT5 pubblicati su MQL5 Market, Expert Advisors automatici, Signal Boards con ML.
              </p>
              <div class="text-sm text-primary-400 font-medium">
                80+ paesi →
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What We Do -->
      <section class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Cosa Facciamo
            </h2>
            <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Soluzioni digitali end-to-end per far crescere il tuo business
            </p>
          </div>

          <!-- Services Grid -->
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
              class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all"
            >
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Web Applications</h3>
                  <p class="text-gray-400 text-sm sm:text-base leading-relaxed">SPA Vue/React per hospitality, e-commerce, project management. Firebase integration, i18n.</p>
                </div>
              </div>
            </div>

            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 350 } }"
              class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all"
            >
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-2">AI/ML Solutions</h3>
                  <p class="text-gray-400 text-sm sm:text-base leading-relaxed">Sistemi AI con TensorFlow, Gemini, Multi-Agent. SEO tools, Custom GPT, SCORM generator.</p>
                </div>
              </div>
            </div>

            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
              class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all"
            >
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Data Dashboards</h3>
                  <p class="text-gray-400 text-sm sm:text-base leading-relaxed">Dashboard analytics per Sales, Finance, Logistics, Retail. Plotly visualizations, ML forecasting.</p>
                </div>
              </div>
            </div>

            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 650 } }"
              class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all"
            >
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Trading Systems</h3>
                  <p class="text-gray-400 text-sm sm:text-base leading-relaxed">Indicatori MT5 su MQL5 Market, Expert Advisors automatici con TensorFlow, Signal Boards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Highlight -->
      <section class="py-20 px-6 bg-white/[0.02]">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-5xl font-bold text-white mb-2">25+</div>
              <div class="text-gray-400">Progetti Completati</div>
            </div>
            <div>
              <div class="text-5xl font-bold text-primary-400 mb-2">2-4</div>
              <div class="text-gray-400">Settimane di Delivery</div>
            </div>
            <div>
              <div class="text-5xl font-bold text-white mb-2">500+</div>
              <div class="text-gray-400">Ore Risparmiate/Mese</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Progetti in Evidenza
              </h2>
              <p class="text-lg sm:text-xl text-gray-400">
                Alcuni dei tool e app che abbiamo realizzato
              </p>
            </div>
            <router-link
              to="/tool"
              class="mt-6 md:mt-0 inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium"
            >
              <span>Vedi tutti i progetti</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>

          <!-- Project Cards -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-motion
              :initial="{ opacity: 0, x: 50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
              class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all"
            >
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">SaaS</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  Tool Alloggiati Web
                </h3>
                <p class="text-sm sm:text-base text-gray-400 mb-4">
                  Automazione inserimento dati per strutture ricettive con integrazione WSKEY
                </p>
                <div class="flex items-center text-xs text-gray-500">
                  <span>Vue.js</span>
                  <span class="mx-2">•</span>
                  <span>Python</span>
                  <span class="mx-2">•</span>
                  <span>API</span>
                </div>
              </div>
            </div>

            <div
              v-motion
              :initial="{ opacity: 0, x: 50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
              class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all"
            >
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">AI</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  Chatbot Assistente
                </h3>
                <p class="text-sm sm:text-base text-gray-400 mb-4">
                  Assistente virtuale con GPT-4 integrato per supporto clienti automatizzato
                </p>
                <div class="flex items-center text-xs text-gray-500">
                  <span>Node.js</span>
                  <span class="mx-2">•</span>
                  <span>OpenAI</span>
                  <span class="mx-2">•</span>
                  <span>React</span>
                </div>
              </div>
            </div>

            <div
              v-motion
              :initial="{ opacity: 0, x: 50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 600 } }"
              class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all"
            >
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">Automation</span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  Workflow n8n
                </h3>
                <p class="text-sm sm:text-base text-gray-400 mb-4">
                  Automazione completa di processi business con 40+ agenti attivi
                </p>
                <div class="flex items-center text-xs text-gray-500">
                  <span>n8n</span>
                  <span class="mx-2">•</span>
                  <span>APIs</span>
                  <span class="mx-2">•</span>
                  <span>Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="py-20 px-6 bg-white/[0.02]">
        <div class="max-w-4xl mx-auto">
          <div
            v-motion
            :initial="{ opacity: 0, y: -50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="relative p-12 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-3xl overflow-hidden"
          >
            <!-- Decorative gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>

            <div class="relative text-center">
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Pronto a Iniziare?
              </h2>
              <p class="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Consulenza gratuita di 30 minuti per capire come possiamo aiutare il tuo business a crescere.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <BaseButton
                  tag="router-link"
                  to="/contatti"
                  variant="primary"
                  size="lg"
                >
                  Prenota Consulenza Gratuita
                </BaseButton>
                <BaseButton
                  tag="router-link"
                  to="/tool"
                  variant="secondary"
                  size="lg"
                >
                  Esplora i Progetti
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<style scoped>
/* Gradient animation for title */
.animate-gradient {
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}
</style>