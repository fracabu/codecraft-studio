<template>
  <div class="w-full min-h-screen overflow-x-hidden pt-20">
    <div>
      <!-- Hero Section -->
      <section class="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Simple badge -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-rose-500/10 rounded-full border border-rose-500/20 mb-8">
            <div class="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
            <span class="text-rose-400 font-medium text-sm">Web Development & AI Solutions</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span class="text-white block mb-2">Creiamo App e Tool</span>
            <span class="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent block">
              Potenziati dall'AI
            </span>
            <span class="text-white/90 block text-4xl md:text-5xl mt-2">per il Tuo Business</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Sviluppiamo soluzioni digitali su misura - da landing page ad alta conversione a SaaS completi.
            <span class="text-white font-medium">Integriamo AI</span> e creiamo <span class="text-white font-medium">agenti automatici</span> che lavorano 24/7 per te.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <router-link
              to="/contatti"
              class="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl font-semibold text-white hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105"
            >
              Consulenza Gratuita
            </router-link>
            <router-link
              to="/tool"
              class="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-rose-500/50 transition-all duration-300"
            >
              Vedi i Nostri Progetti
            </router-link>
          </div>

          <!-- Trust indicators -->
          <div class="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Delivery in 2-4 settimane</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>25+ progetti completati</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>40+ agenti AI attivi</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Value Proposition Cards -->
      <section class="py-20 px-6 bg-white/[0.02]">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">
                Sviluppo Web Custom
              </h3>
              <p class="text-gray-400 leading-relaxed mb-6">
                App, landing page e tool su misura costruiti con tecnologie moderne. Da MVP a SaaS scalabili.
              </p>
              <div class="text-sm text-primary-400 font-medium">
                Delivery in 2-4 settimane →
              </div>
            </div>

            <!-- Card 2 -->
            <div class="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">
                AI Integration
              </h3>
              <p class="text-gray-400 leading-relaxed mb-6">
                Integriamo GPT-4 e Claude direttamente nei tuoi prodotti. Chatbot intelligenti e assistenti virtuali.
              </p>
              <div class="text-sm text-primary-400 font-medium">
                AI sempre aggiornata →
              </div>
            </div>

            <!-- Card 3 -->
            <div class="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">
                Agenti Automatici
              </h3>
              <p class="text-gray-400 leading-relaxed mb-6">
                Workflow n8n che automatizzano task ripetitivi 24/7. Gestione dati, notifiche e report automatici.
              </p>
              <div class="text-sm text-primary-400 font-medium">
                500+ ore risparmiate →
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What We Do -->
      <section class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
              Cosa Facciamo
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluzioni digitali end-to-end per far crescere il tuo business
            </p>
          </div>

          <!-- Services Grid -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">Landing Page & Siti Web</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">Design moderni e performanti ottimizzati per conversioni. Responsive, SEO-friendly e veloci.</p>
                </div>
              </div>
            </div>

            <div class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">App Web & SaaS</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">Applicazioni web scalabili da MVP a prodotti complessi. Stack moderno e architetture robuste.</p>
                </div>
              </div>
            </div>

            <div class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">Chatbot & AI Assistants</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">Integriamo GPT-4 e Claude per creare assistenti intelligenti personalizzati per il tuo business.</p>
                </div>
              </div>
            </div>

            <div class="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">Automazioni con n8n</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">Workflow automatici che lavorano 24/7. Data sync, notifiche, report e molto altro.</p>
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
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">
                Progetti in Evidenza
              </h2>
              <p class="text-xl text-gray-400">
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
            <div class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all">
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">SaaS</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  Tool Alloggiati Web
                </h3>
                <p class="text-sm text-gray-400 mb-4">
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

            <div class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all">
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">AI</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  Chatbot Assistente
                </h3>
                <p class="text-sm text-gray-400 mb-4">
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

            <div class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all">
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">Automation</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  Workflow n8n
                </h3>
                <p class="text-sm text-gray-400 mb-4">
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
          <div class="relative p-12 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-3xl overflow-hidden">
            <!-- Decorative gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>

            <div class="relative text-center">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                Pronto a Iniziare?
              </h2>
              <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Consulenza gratuita di 30 minuti per capire come possiamo aiutare il tuo business a crescere.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link
                  to="/contatti"
                  class="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl font-semibold text-white hover:from-primary-600 hover:to-accent-700 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105"
                >
                  Prenota Consulenza Gratuita
                </router-link>
                <router-link
                  to="/tool"
                  class="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300"
                >
                  Esplora i Progetti
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Clean HomeView without problematic dynamic components
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