<template>
  <div class="w-full min-h-screen overflow-x-hidden pt-20">
    <div>
      <!-- Hero Section -->
      <section class="hero-gradient min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 relative overflow-hidden">
        <!-- Starfield Background -->
        <div class="stars-container">
          <div class="star" style="top: 10%; left: 15%; animation-delay: 0s;"></div>
          <div class="star" style="top: 20%; left: 80%; animation-delay: 0.5s;"></div>
          <div class="star" style="top: 30%; left: 25%; animation-delay: 1s;"></div>
          <div class="star" style="top: 40%; left: 70%; animation-delay: 1.5s;"></div>
          <div class="star" style="top: 50%; left: 10%; animation-delay: 2s;"></div>
          <div class="star" style="top: 60%; left: 85%; animation-delay: 2.5s;"></div>
          <div class="star" style="top: 70%; left: 40%; animation-delay: 3s;"></div>
          <div class="star" style="top: 15%; left: 60%; animation-delay: 0.7s;"></div>
          <div class="star" style="top: 80%; left: 20%; animation-delay: 1.2s;"></div>
          <div class="star" style="top: 25%; left: 45%; animation-delay: 1.8s;"></div>
          <div class="star" style="top: 35%; left: 90%; animation-delay: 2.3s;"></div>
          <div class="star" style="top: 75%; left: 65%; animation-delay: 0.3s;"></div>
          <div class="star" style="top: 5%; left: 35%; animation-delay: 2.8s;"></div>
          <div class="star" style="top: 85%; left: 55%; animation-delay: 1.4s;"></div>
          <div class="star" style="top: 45%; left: 5%; animation-delay: 0.9s;"></div>
        </div>

        <!-- Animated Circle with Orbiting Particles -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="orbital-system">
            <!-- Orbit Paths (Traced circles) -->
            <div class="orbit-path orbit-path-1"></div>
            <div class="orbit-path orbit-path-2"></div>
            <div class="orbit-path orbit-path-3"></div>
            <div class="orbit-path orbit-path-4"></div>
            <div class="orbit-path orbit-path-5"></div>

            <!-- Main Circle -->
            <div class="main-circle">
              <!-- Inner Target Circle -->
              <div class="inner-circle"></div>
            </div>

            <!-- Orbiting Particles -->
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
            <div class="particle particle-5"></div>
          </div>
        </div>

        <div class="max-w-6xl mx-auto text-center relative z-10">
          <!-- Main Title - Hero Style -->
          <h1
            v-motion
            :initial="{ opacity: 0, y: -50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight px-4 pb-4"
          >
            <span class="text-gradient-1 block mb-2">Trasformiamo Concetti</span>
            <span class="text-glow block my-4">in Esperienze</span>
            <span class="text-gradient-2 block pb-2">Digitali Uniche</span>
          </h1>

          <!-- CTA Button -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
            class="mt-24 flex justify-center"
          >
            <BaseButton
              tag="router-link"
              to="/contatti"
              variant="primary"
              size="lg"
              class="max-w-xs"
            >
              Inizia Ora
            </BaseButton>
          </div>
        </div>
      </section>

      <!-- Scrolling Text Banner - 50vh -->
      <section class="scrolling-banner overflow-hidden bg-gradient-to-b from-dark-900 to-dark-800">
        <!-- Top Border Line -->
        <div class="banner-border-top"></div>

        <div class="scrolling-text-container">
          <div class="scrolling-text">
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
            <span>CODECRAFT_STUDIO</span>
          </div>
        </div>

        <!-- Bottom Border Line -->
        <div class="banner-border-bottom"></div>
      </section>

      <!-- Welcome Text Section - Different Background -->
      <section class="py-20 px-6 bg-gradient-to-b from-purple-900/20 to-dark-900">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Benvenuto in CodeCraft Studio
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
            class="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Siamo dedicati ad aiutare le aziende a crescere con soluzioni innovative
            scalabili e a prova di futuro. Il nostro obiettivo è guidare il tuo successo
            con la nostra esperienza nello sviluppo web, mobile e AI.
          </p>
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
/* Hero Gradient Background */
.hero-gradient {
  background: linear-gradient(
    135deg,
    #0f172a 0%,
    #1e1b4b 25%,
    #312e81 50%,
    #1e1b4b 75%,
    #0f172a 100%
  );
  position: relative;
}

.hero-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(168, 85, 247, 0.15) 0%,
    rgba(236, 72, 153, 0.1) 30%,
    transparent 60%
  );
  pointer-events: none;
}

/* Starfield */
.stars-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow:
    0 0 4px rgba(255, 255, 255, 0.8),
    0 0 8px rgba(168, 85, 247, 0.6);
  animation: star-pulse 3s ease-in-out infinite;
}

@keyframes star-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

/* Orbital System Container */
.orbital-system {
  position: relative;
  width: 600px;
  height: 600px;
}

/* Main Circle with Deep 3D Effect */
.main-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin: -200px 0 0 -200px;
  border-radius: 50%;

  /* Multiple borders for depth */
  border: 3px solid rgba(168, 85, 247, 0.6);

  /* Inner gradient for depth */
  background:
    radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
    radial-gradient(circle, rgba(15, 23, 42, 0.8) 0%, rgba(30, 27, 75, 0.6) 40%, transparent 70%);

  /* Deep shadow effects */
  box-shadow:
    /* Outer glow */
    0 0 40px rgba(168, 85, 247, 0.6),
    0 0 80px rgba(236, 72, 153, 0.4),
    0 0 120px rgba(168, 85, 247, 0.3),
    /* Inner shadow for depth */
    inset 0 0 80px rgba(0, 0, 0, 0.8),
    inset 0 0 40px rgba(168, 85, 247, 0.3),
    /* Highlight */
    inset -10px -10px 60px rgba(168, 85, 247, 0.2);

  animation: rotate-pulse 8s linear infinite, pulse-scale 4s ease-in-out infinite;
}

/* Inner Target Circle */
.inner-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin: -100px 0 0 -100px;
  border-radius: 50%;
  border: 2px dashed rgba(168, 85, 247, 0.5);
  background: radial-gradient(
    circle,
    rgba(15, 23, 42, 0.9) 0%,
    rgba(30, 27, 75, 0.7) 50%,
    transparent 80%
  );
  box-shadow:
    inset 0 0 40px rgba(0, 0, 0, 0.9),
    inset 0 0 20px rgba(168, 85, 247, 0.2),
    0 0 20px rgba(168, 85, 247, 0.3);
}

/* Orbit Paths (visible traced circles) */
.orbit-path {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 2px solid rgba(168, 85, 247, 0.4);
  pointer-events: none;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.orbit-path-1 {
  width: 400px;
  height: 400px;
  margin: -200px 0 0 -200px;
}

.orbit-path-2 {
  width: 340px;
  height: 340px;
  margin: -170px 0 0 -170px;
}

.orbit-path-3 {
  width: 440px;
  height: 440px;
  margin: -220px 0 0 -220px;
}

.orbit-path-4 {
  width: 300px;
  height: 300px;
  margin: -150px 0 0 -150px;
}

.orbit-path-5 {
  width: 380px;
  height: 380px;
  margin: -190px 0 0 -190px;
}

/* Orbiting Particles */
.particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236, 72, 153, 1) 0%, rgba(168, 85, 247, 0.8) 100%);
  box-shadow:
    0 0 20px rgba(236, 72, 153, 0.8),
    0 0 40px rgba(168, 85, 247, 0.6);
}

/* Different orbit sizes and speeds */
.particle-1 {
  animation: orbit-1 6s linear infinite;
}

.particle-2 {
  animation: orbit-2 8s linear infinite;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
}

.particle-3 {
  animation: orbit-3 10s linear infinite;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
}

.particle-4 {
  animation: orbit-4 7s linear infinite reverse;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
}

.particle-5 {
  animation: orbit-5 9s linear infinite reverse;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
}

/* Orbit Animations */
@keyframes orbit-1 {
  from {
    transform: rotate(0deg) translateX(200px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(200px) rotate(-360deg);
  }
}

@keyframes orbit-2 {
  from {
    transform: rotate(120deg) translateX(170px) rotate(-120deg);
  }
  to {
    transform: rotate(480deg) translateX(170px) rotate(-480deg);
  }
}

@keyframes orbit-3 {
  from {
    transform: rotate(240deg) translateX(220px) rotate(-240deg);
  }
  to {
    transform: rotate(600deg) translateX(220px) rotate(-600deg);
  }
}

@keyframes orbit-4 {
  from {
    transform: rotate(60deg) translateX(150px) rotate(-60deg);
  }
  to {
    transform: rotate(420deg) translateX(150px) rotate(-420deg);
  }
}

@keyframes orbit-5 {
  from {
    transform: rotate(180deg) translateX(190px) rotate(-180deg);
  }
  to {
    transform: rotate(540deg) translateX(190px) rotate(-540deg);
  }
}

/* Circle Rotation and Pulse */
@keyframes rotate-pulse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

/* Text with gradient blend */
.text-gradient-1 {
  background: linear-gradient(
    180deg,
    rgba(203, 213, 225, 0.95) 0%,
    rgba(168, 85, 247, 0.7) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-2 {
  background: linear-gradient(
    180deg,
    rgba(168, 85, 247, 0.8) 0%,
    rgba(203, 213, 225, 0.6) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Text Glow Effect */
.text-glow {
  color: rgba(255, 255, 255, 0.95);
  text-shadow:
    0 0 40px rgba(168, 85, 247, 0.8),
    0 0 80px rgba(236, 72, 153, 0.6),
    0 0 120px rgba(168, 85, 247, 0.4);
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    text-shadow:
      0 0 40px rgba(168, 85, 247, 0.8),
      0 0 80px rgba(236, 72, 153, 0.6),
      0 0 120px rgba(168, 85, 247, 0.4);
  }
  50% {
    text-shadow:
      0 0 50px rgba(168, 85, 247, 1),
      0 0 100px rgba(236, 72, 153, 0.8),
      0 0 150px rgba(168, 85, 247, 0.6);
  }
}

/* Scrolling Banner - 50vh */
.scrolling-banner {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Border Lines */
.banner-border-top,
.banner-border-bottom {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(168, 85, 247, 0.6) 20%,
    rgba(236, 72, 153, 0.8) 50%,
    rgba(168, 85, 247, 0.6) 80%,
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}

.banner-border-top {
  top: 15%;
}

.banner-border-bottom {
  bottom: 15%;
}

.scrolling-text-container {
  width: 100%;
  overflow: visible;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.scrolling-text {
  display: flex;
  white-space: nowrap;
  animation: scroll-left 100s linear infinite; /* Ultra lento: 100s */
  font-size: 25vh; /* Caratteri più grandi */
  font-weight: 900;
  letter-spacing: 0.02em;
  line-height: 1.2; /* Più spazio per non tagliare */
  background: linear-gradient(
    90deg,
    rgba(168, 85, 247, 0.4) 0%,
    rgba(236, 72, 153, 0.6) 50%,
    rgba(168, 85, 247, 0.4) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.6;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  padding: 2vh 0; /* Padding verticale per non tagliare */
}

.scrolling-text span {
  padding: 0 2rem; /* Spazio minimo per continuità */
  display: inline-block;
}

.scrolling-text span::after {
  content: ' · ';
  padding-left: 2rem;
  opacity: 0.5;
}

@keyframes scroll-left {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .scrolling-banner {
    height: 40vh;
  }

  .scrolling-text {
    font-size: 15vh; /* Più grande anche su mobile */
    padding: 1.5vh 0;
  }

  .scrolling-text span {
    padding: 0 2rem;
  }

  .scrolling-text span::after {
    padding-left: 2rem;
  }

  .orbital-system {
    width: 400px;
    height: 400px;
  }

  .main-circle {
    width: 280px;
    height: 280px;
    margin: -140px 0 0 -140px;
  }

  .inner-circle {
    width: 140px;
    height: 140px;
    margin: -70px 0 0 -70px;
  }

  .orbit-path-1 {
    width: 280px;
    height: 280px;
    margin: -140px 0 0 -140px;
  }

  .orbit-path-2 {
    width: 240px;
    height: 240px;
    margin: -120px 0 0 -120px;
  }

  .orbit-path-3 {
    width: 300px;
    height: 300px;
    margin: -150px 0 0 -150px;
  }

  .orbit-path-4 {
    width: 200px;
    height: 200px;
    margin: -100px 0 0 -100px;
  }

  .orbit-path-5 {
    width: 260px;
    height: 260px;
    margin: -130px 0 0 -130px;
  }

  .particle-1 {
    animation: orbit-1-mobile 6s linear infinite;
  }

  .particle-2 {
    animation: orbit-2-mobile 8s linear infinite;
  }

  .particle-3 {
    animation: orbit-3-mobile 10s linear infinite;
  }

  .particle-4 {
    animation: orbit-4-mobile 7s linear infinite reverse;
  }

  .particle-5 {
    animation: orbit-5-mobile 9s linear infinite reverse;
  }

  @keyframes orbit-1-mobile {
    from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
  }

  @keyframes orbit-2-mobile {
    from { transform: rotate(120deg) translateX(120px) rotate(-120deg); }
    to { transform: rotate(480deg) translateX(120px) rotate(-480deg); }
  }

  @keyframes orbit-3-mobile {
    from { transform: rotate(240deg) translateX(150px) rotate(-240deg); }
    to { transform: rotate(600deg) translateX(150px) rotate(-600deg); }
  }

  @keyframes orbit-4-mobile {
    from { transform: rotate(60deg) translateX(100px) rotate(-60deg); }
    to { transform: rotate(420deg) translateX(100px) rotate(-420deg); }
  }

  @keyframes orbit-5-mobile {
    from { transform: rotate(180deg) translateX(130px) rotate(-180deg); }
    to { transform: rotate(540deg) translateX(130px) rotate(-540deg); }
  }
}
</style>