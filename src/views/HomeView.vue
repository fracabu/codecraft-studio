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

      <!-- Welcome Text Section - Enhanced with Hero Style -->
      <section class="welcome-section relative py-32 px-6 overflow-hidden">
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
        </div>

        <div class="max-w-5xl mx-auto text-center relative z-10">
          <!-- Main Welcome Title -->
          <h2
            v-motion
            :initial="{ opacity: 0, y: -30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            class="text-5xl md:text-7xl font-bold mb-8 pb-4"
          >
            <span class="welcome-gradient block">
              Benvenuto in CodeCraft Studio
            </span>
          </h2>

          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
            class="text-lg md:text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto"
          >
            Siamo dedicati ad aiutare le aziende a crescere con soluzioni innovative
            scalabili e a prova di futuro. Il nostro obiettivo è guidare il tuo successo
            con la nostra esperienza nello sviluppo web, mobile e AI.
          </p>

          <!-- Decorative Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 800, delay: 600 } }"
            class="mission-divider mx-auto mb-12"
          ></div>

          <!-- Our Mission Section -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }"
          >
            <h3 class="text-4xl md:text-5xl font-bold mb-8 mission-title">
              La Nostra Missione
            </h3>
            <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Rivoluzionare il panorama digitale fornendo soluzioni all'avanguardia che
              permettono alle aziende di eccellere nei rispettivi settori. Crediamo nella
              creatività, innovazione e collaborazione per creare esperienze digitali che
              fanno davvero la differenza.
            </p>
          </div>
        </div>
      </section>

      <!-- Core Values Cards - Light Style -->
      <section class="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
            class="text-4xl md:text-5xl font-bold text-center mb-16 core-values-title"
          >
            I Nostri Punti di Forza
          </h2>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 - Innovation -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
              class="core-value-card"
            >
              <div class="icon-wrapper mb-6">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 card-title">
                Innovazione
              </h3>
              <p class="text-gray-600 leading-relaxed text-center">
                Abbracciamo la creatività e spingiamo i confini della tecnologia per costruire
                soluzioni uniche su misura per le esigenze del tuo business.
              </p>
            </div>

            <!-- Card 2 - Collaboration -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
              class="core-value-card"
            >
              <div class="icon-wrapper mb-6">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 card-title">
                Collaborazione
              </h3>
              <p class="text-gray-600 leading-relaxed text-center">
                Crediamo nel lavoro di squadra e nella stretta collaborazione con i nostri clienti
                per fornire il miglior risultato possibile per i loro progetti.
              </p>
            </div>

            <!-- Card 3 - Excellence -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
              class="core-value-card"
            >
              <div class="icon-wrapper mb-6">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 card-title">
                Eccellenza
              </h3>
              <p class="text-gray-600 leading-relaxed text-center">
                Siamo impegnati nell'eccellenza, assicurando che ogni progetto che intraprendiamo
                soddisfi i più alti standard di qualità e innovazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section - Pronto a Iniziare - Brand Gradient Style -->
      <section class="py-24 px-6 cta-gradient-section">
        <!-- Animated Geometric Shapes -->
        <div class="geometric-shapes">
          <div class="shape shape-circle shape-1"></div>
          <div class="shape shape-circle shape-2"></div>
          <div class="shape shape-square shape-3"></div>
          <div class="shape shape-square shape-4"></div>
          <div class="shape shape-circle shape-5"></div>
          <div class="shape shape-triangle shape-6"></div>
          <div class="shape shape-circle shape-7"></div>
          <div class="shape shape-square shape-8"></div>
        </div>

        <div class="max-w-5xl mx-auto relative z-10">
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="cta-modern-card"
          >
            <div class="text-center">
              <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Pronto a Iniziare?
              </h2>
              <p class="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Consulenza gratuita di 30 minuti per capire come possiamo aiutare il tuo business a crescere.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link
                  to="/contatti"
                  class="cta-primary-btn-light"
                >
                  <span>Prenota Consulenza Gratuita</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
                <router-link
                  to="/tool"
                  class="cta-secondary-btn-light"
                >
                  <span>Esplora i Progetti</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What We Do - Modern Light Style -->
      <section class="py-24 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="mb-16">
            <p class="text-sm text-gray-600 mb-4 tracking-wide uppercase">
              Ci concentriamo ad aiutare il tuo business a crescere e andare avanti
            </p>
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-black max-w-3xl">
                <span class="what-we-do-highlight">Idee Uniche</span>
                <br />
                Per Il Tuo Business.
              </h2>
              <router-link
                to="/servizi"
                class="what-we-do-cta"
              >
                <span>Cosa Facciamo?</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Services Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <!-- Service 1: Web Applications -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
              class="service-card"
            >
              <div class="service-icon mb-6">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-black mb-3">
                Applicazioni Web
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-8">
                Creiamo applicazioni web personalizzate su misura per le tue esigenze aziendali, utilizzando le ultime tecnologie per prestazioni, sicurezza e scalabilità ottimali.
              </p>
              <div class="service-arrow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            <!-- Service 2: Design & Development -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
              class="service-card"
            >
              <div class="service-icon mb-6">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-black mb-3">
                Design & Sviluppo Siti Web
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-8">
                Il tuo sito web è il tuo volto online. Il nostro team progetta siti user-friendly che hanno un bell'aspetto e stimolano il coinvolgimento su tutti i dispositivi.
              </p>
              <div class="service-arrow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            <!-- Service 3: AI/ML Solutions -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
              class="service-card"
            >
              <div class="service-icon mb-6">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-black mb-3">
                Soluzioni AI/ML
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-8">
                Sistemi intelligenti con TensorFlow, Gemini e Multi-Agent. Strumenti SEO, GPT personalizzati e generatori SCORM per automatizzare e innovare il tuo business.
              </p>
              <div class="service-arrow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            <!-- Service 4: Data Analytics -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
              class="service-card"
            >
              <div class="service-icon mb-6">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-black mb-3">
                Dashboard Analytics
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-8">
                Dashboard interattive per Sales, Finance, Logistics e Retail. Visualizzazioni avanzate con Plotly e previsioni ML per decisioni data-driven.
              </p>
              <div class="service-arrow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            <!-- Service 5: Trading Systems -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
              class="service-card"
            >
              <div class="service-icon mb-6">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-black mb-3">
                Strategia Digitale & Consulting
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-8">
                Naviga nel panorama digitale con i nostri servizi di strategia e consulenza, fornendo approfondimenti per ottimizzare la tua presenza e raggiungere gli obiettivi aziendali.
              </p>
              <div class="service-arrow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
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
  will-change: opacity, transform;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
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
  will-change: transform, opacity;
  backface-visibility: hidden;
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
  will-change: transform;
  backface-visibility: hidden;
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

/* Orbit Animations - GPU Accelerated */
@keyframes orbit-1 {
  from {
    transform: rotate(0deg) translate3d(200px, 0, 0) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate3d(200px, 0, 0) rotate(-360deg);
  }
}

@keyframes orbit-2 {
  from {
    transform: rotate(120deg) translate3d(170px, 0, 0) rotate(-120deg);
  }
  to {
    transform: rotate(480deg) translate3d(170px, 0, 0) rotate(-480deg);
  }
}

@keyframes orbit-3 {
  from {
    transform: rotate(240deg) translate3d(220px, 0, 0) rotate(-240deg);
  }
  to {
    transform: rotate(600deg) translate3d(220px, 0, 0) rotate(-600deg);
  }
}

@keyframes orbit-4 {
  from {
    transform: rotate(60deg) translate3d(150px, 0, 0) rotate(-60deg);
  }
  to {
    transform: rotate(420deg) translate3d(150px, 0, 0) rotate(-420deg);
  }
}

@keyframes orbit-5 {
  from {
    transform: rotate(180deg) translate3d(190px, 0, 0) rotate(-180deg);
  }
  to {
    transform: rotate(540deg) translate3d(190px, 0, 0) rotate(-540deg);
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
    font-size: 15vh;
    padding: 1.5vh 0;
    animation: scroll-left 200s linear infinite; /* Molto più lento su mobile */
  }

  .scrolling-text span {
    padding: 0 2rem;
  }

  .scrolling-text span::after {
    padding-left: 2rem;
  }

  /* Hide stars on mobile for performance */
  .stars-container {
    display: none;
  }

  /* Hide orbital system on mobile for performance */
  .orbital-system {
    display: none;
  }
}

/* Welcome Section Styling */
.welcome-section {
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

.welcome-section::before {
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

/* Welcome Title Gradient */
.welcome-gradient {
  background: linear-gradient(
    135deg,
    rgba(244, 63, 94, 1) 0%,
    rgba(236, 72, 153, 0.9) 35%,
    rgba(168, 85, 247, 0.8) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 80px rgba(236, 72, 153, 0.3);
  animation: welcome-glow 3s ease-in-out infinite;
}

@keyframes welcome-glow {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}

/* Mission Divider Line */
.mission-divider {
  width: 200px;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(168, 85, 247, 0.6) 20%,
    rgba(236, 72, 153, 0.8) 50%,
    rgba(168, 85, 247, 0.6) 80%,
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
  border-radius: 2px;
}

/* Mission Title */
.mission-title {
  background: linear-gradient(
    180deg,
    rgba(236, 72, 153, 0.9) 0%,
    rgba(168, 85, 247, 0.7) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Core Values Section */
.core-values-title {
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 1) 0%,
    rgba(236, 72, 153, 0.9) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.core-value-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  text-align: center;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(168, 85, 247, 0.1);
}

.core-value-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 50px rgba(168, 85, 247, 0.15),
    0 10px 20px rgba(236, 72, 153, 0.1);
  border-color: rgba(168, 85, 247, 0.3);
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a855f7;
}

.core-value-card:nth-child(2) .icon-wrapper {
  color: #ec4899;
}

.core-value-card:nth-child(3) .icon-wrapper {
  color: #8b5cf6;
}

.card-title {
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 1) 0%,
    rgba(236, 72, 153, 0.9) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

/* Responsive adjustments for core values */
@media (max-width: 768px) {
  .core-value-card {
    padding: 2rem 1.5rem;
  }

  .core-values-title {
    font-size: 2rem;
  }
}

/* What We Do Section - Modern Style */
.what-we-do-highlight {
  position: relative;
  display: inline-block;
}

.what-we-do-highlight::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 40px;
  background: black;
  border-radius: 50px;
  z-index: -1;
}

.what-we-do-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: black;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.what-we-do-cta:hover {
  background: #1f1f1f;
  transform: translateX(5px);
}

.service-card {
  background: white;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  border-color: #000;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.service-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
  margin-top: auto;
}

.service-card:hover .service-arrow {
  transform: translateX(5px);
}

/* Responsive adjustments for services */
@media (max-width: 1024px) {
  .what-we-do-highlight::before {
    width: 60px;
    height: 30px;
  }
}

@media (max-width: 768px) {
  .what-we-do-highlight::before {
    display: none;
  }

  .service-card {
    padding: 1.5rem;
  }
}

/* CTA Section - Brand Gradient Style */
.cta-gradient-section {
  background: linear-gradient(
    135deg,
    #a855f7 0%,
    #ec4899 50%,
    #f43f5e 100%
  );
  position: relative;
}

.cta-gradient-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.cta-modern-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 4rem 3rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.cta-primary-btn-light {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  color: black;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
}

.cta-primary-btn-light:hover {
  background: #f9fafb;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.cta-secondary-btn-light {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  border: 2px solid white;
}

.cta-secondary-btn-light:hover {
  background: white;
  color: #a855f7;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
}

/* Responsive adjustments for CTA */
@media (max-width: 768px) {
  .cta-modern-card {
    padding: 2.5rem 1.5rem;
  }

  .cta-primary-btn-light,
  .cta-secondary-btn-light {
    width: 100%;
    justify-content: center;
  }
}

/* Animated Geometric Shapes */
.geometric-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  opacity: 0.15;
  filter: blur(1px);
  will-change: transform;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}

.shape-circle {
  border-radius: 50%;
  background: white;
}

.shape-square {
  background: white;
  border-radius: 8px;
}

.shape-triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 52px solid white;
  background: transparent;
}

/* Individual shape positions and animations */
.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 5%;
  animation: float-1 20s ease-in-out infinite;
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 70%;
  left: 10%;
  animation: float-2 25s ease-in-out infinite;
}

.shape-3 {
  width: 50px;
  height: 50px;
  top: 15%;
  right: 8%;
  animation: float-rotate-1 18s ease-in-out infinite;
}

.shape-4 {
  width: 70px;
  height: 70px;
  bottom: 15%;
  right: 12%;
  animation: float-rotate-2 22s ease-in-out infinite;
}

.shape-5 {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 15%;
  animation: float-3 30s ease-in-out infinite;
}

.shape-6 {
  top: 25%;
  right: 20%;
  animation: float-rotate-3 28s ease-in-out infinite;
}

.shape-7 {
  width: 40px;
  height: 40px;
  bottom: 30%;
  left: 25%;
  animation: float-1 24s ease-in-out infinite reverse;
}

.shape-8 {
  width: 55px;
  height: 55px;
  top: 60%;
  right: 25%;
  animation: float-rotate-1 26s ease-in-out infinite reverse;
}

/* Floating animations - GPU Accelerated */
@keyframes float-1 {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  25% {
    transform: translate3d(30px, -30px, 0) scale(1.1);
  }
  50% {
    transform: translate3d(-20px, 20px, 0) scale(0.9);
  }
  75% {
    transform: translate3d(20px, 30px, 0) scale(1.05);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  33% {
    transform: translate3d(-40px, 30px, 0) scale(1.15);
  }
  66% {
    transform: translate3d(25px, -25px, 0) scale(0.85);
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(15px, -40px, 0) scale(1.2);
  }
}

@keyframes float-rotate-1 {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  25% {
    transform: translate3d(20px, -25px, 0) rotate(90deg);
  }
  50% {
    transform: translate3d(-15px, 15px, 0) rotate(180deg);
  }
  75% {
    transform: translate3d(25px, 20px, 0) rotate(270deg);
  }
}

@keyframes float-rotate-2 {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate3d(-30px, 20px, 0) rotate(120deg) scale(1.1);
  }
  66% {
    transform: translate3d(20px, -30px, 0) rotate(240deg) scale(0.9);
  }
}

@keyframes float-rotate-3 {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(-25px, 35px, 0) rotate(180deg);
  }
}

/* Hide shapes on mobile for better performance */
@media (max-width: 768px) {
  .geometric-shapes {
    display: none;
  }
}
</style>