<template>
  <div class="w-full min-h-screen overflow-x-hidden">
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="py-32 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Main Title -->
          <h1 class="text-5xl md:text-7xl font-bold mb-8">
            <span class="text-white">Automatizziamo i Tuoi</span>
            <br />
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Processi Business
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Riduci i costi del <strong class="text-green-400">60%</strong> con automazioni AI personalizzate
          </p>

          <!-- CTA Button -->
          <router-link
            to="/contatti"
            class="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Consulenza Gratuita</span>
          </router-link>
        </div>
      </section>

      <!-- Value Proposition Cards -->
      <section class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🤖
              </div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                Automazioni AI Intelligenti
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Integriamo GPT-4 e Claude per automatizzare processi complessi: dalla gestione email ai report automatici, chatbot avanzati e analisi documenti.</p>
              <div class="inline-flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full group-hover:bg-green-500/30 transition-colors">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                <span class="text-green-400 font-medium text-sm">Risparmio 60% costi</span>
              </div>
            </div>

            <div class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                Implementazione Rapida
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Soluzioni operative in 1-4 settimane, non mesi. Risultati immediati e ROI misurabile dal primo giorno con supporto completo.</p>
              <div class="inline-flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full group-hover:bg-green-500/30 transition-colors">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                <span class="text-green-400 font-medium text-sm">1-4 settimane delivery</span>
              </div>
            </div>

            <div class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                ROI Garantito
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Ogni progetto è progettato per generare un ritorno concreto. Media 4.5x di ROI entro 90 giorni con monitoraggio continuo delle performance.</p>
              <div class="inline-flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full group-hover:bg-green-500/30 transition-colors">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                <span class="text-green-400 font-medium text-sm">4.5x ROI medio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Overview -->
      <section class="py-20 px-6 bg-white/5">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="text-white">Soluzioni </span>
              <span class="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligenti
              </span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Automazioni AI personalizzate per ogni processo aziendale
            </p>
          </div>

          <!-- Services Preview Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🤖
              </div>
              <h3 class="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                Automazioni AI
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Chatbot intelligenti, analisi documenti automatica, email management AI.</p>
            </div>

            <div class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 class="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                Ottimizzazione Processi
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Analisi workflow, identificazione inefficienze, implementazione soluzioni.</p>
            </div>

            <div class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🔧
              </div>
              <h3 class="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                Tool Personalizzati
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Calcolatori custom, dashboard analytics, applicazioni web su misura.</p>
            </div>

            <div class="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 class="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                Consulenza Strategica
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Analisi processi business, roadmap automazione, ROI planning.</p>
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
            <div class="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div class="flex items-start justify-between mb-4">
                <div class="text-3xl group-hover:scale-110 transition-transform">⚡</div>
                <div class="text-sm text-gray-400">Development</div>
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Plugin Fastify Custom
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Plugin NPM personalizzati per server Node.js con funzionalità avanzate di i18n e routing.</p>
              <div class="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1">
                <div class="text-green-400 font-medium text-xs">+200% velocità sviluppo</div>
              </div>
            </div>

            <div class="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div class="flex items-start justify-between mb-4">
                <div class="text-3xl group-hover:scale-110 transition-transform">📊</div>
                <div class="text-sm text-gray-400">Analytics</div>
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Dashboard Analytics
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Visualizzazione dati business in tempo reale con insights automatici e reportistica.</p>
              <div class="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1">
                <div class="text-green-400 font-medium text-xs">€1.2K/mese risparmio</div>
              </div>
            </div>

            <div class="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div class="flex items-start justify-between mb-4">
                <div class="text-3xl group-hover:scale-110 transition-transform">🔮</div>
                <div class="text-sm text-gray-400">Marketing</div>
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                AI Content Generator
              </h3>
              <p class="text-gray-300 text-sm mb-4 leading-relaxed">Generazione automatica contenuti SEO-optimized per strategie di marketing digitale.</p>
              <div class="bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1">
                <div class="text-green-400 font-medium text-xs">-80% tempo creazione</div>
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
  </div>
</template>

<script setup>
// Clean HomeView without problematic dynamic components
</script>