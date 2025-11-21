'use client'

import BaseButton from '@/components/common/BaseButton'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function HomePage() {
  // Scroll animations
  const welcomeTitle = useScrollAnimation()
  const welcomeText = useScrollAnimation()
  const missionDivider = useScrollAnimation()
  const missionTitle = useScrollAnimation()
  const missionText = useScrollAnimation()
  const coreValues = useScrollAnimation()
  const ctaSection = useScrollAnimation()
  const whatWeDo = useScrollAnimation()
  const statsHighlight = useScrollAnimation()
  const featuredProjects = useScrollAnimation()

  return (
    <div className="w-full min-h-screen overflow-x-hidden pt-20">
      {/* Hero Section with Orbital System */}
      <section className="hero-gradient min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Starfield Background */}
        <div className="stars-container">
          <div className="star" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
          <div className="star" style={{top: '20%', left: '80%', animationDelay: '0.5s'}}></div>
          <div className="star" style={{top: '30%', left: '25%', animationDelay: '1s'}}></div>
          <div className="star" style={{top: '40%', left: '70%', animationDelay: '1.5s'}}></div>
          <div className="star" style={{top: '50%', left: '10%', animationDelay: '2s'}}></div>
          <div className="star" style={{top: '60%', left: '85%', animationDelay: '2.5s'}}></div>
          <div className="star" style={{top: '70%', left: '40%', animationDelay: '3s'}}></div>
          <div className="star" style={{top: '15%', left: '60%', animationDelay: '0.7s'}}></div>
          <div className="star" style={{top: '80%', left: '20%', animationDelay: '1.2s'}}></div>
          <div className="star" style={{top: '25%', left: '45%', animationDelay: '1.8s'}}></div>
          <div className="star" style={{top: '35%', left: '90%', animationDelay: '2.3s'}}></div>
          <div className="star" style={{top: '75%', left: '65%', animationDelay: '0.3s'}}></div>
          <div className="star" style={{top: '5%', left: '35%', animationDelay: '2.8s'}}></div>
          <div className="star" style={{top: '85%', left: '55%', animationDelay: '1.4s'}}></div>
          <div className="star" style={{top: '45%', left: '5%', animationDelay: '0.9s'}}></div>
        </div>

        {/* Animated Circle with Orbiting Particles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="orbital-system">
            {/* Orbit Paths */}
            <div className="orbit-path orbit-path-1"></div>
            <div className="orbit-path orbit-path-2"></div>
            <div className="orbit-path orbit-path-3"></div>
            <div className="orbit-path orbit-path-4"></div>
            <div className="orbit-path orbit-path-5"></div>

            {/* Main Circle */}
            <div className="main-circle">
              <div className="inner-circle"></div>
            </div>

            {/* Orbiting Particles */}
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight px-4 pb-4">
            <span className="text-gradient-1 block mb-2">Trasformiamo Concetti</span>
            <span className="text-glow block my-4">in Esperienze</span>
            <span className="text-gradient-2 block pb-2">Digitali Uniche</span>
          </h1>

          <div className="mt-24 flex justify-center">
            <BaseButton
              to="/contatti"
              variant="primary"
              size="lg"
              className="max-w-xs"
            >
              Inizia Ora
            </BaseButton>
          </div>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <section className="scrolling-banner overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="banner-border-top"></div>

        <div className="scrolling-text-container">
          <div className="scrolling-text">
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

        <div className="banner-border-bottom"></div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section relative py-32 px-6 overflow-hidden">
        {/* Starfield Background */}
        <div className="stars-container">
          <div className="star" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
          <div className="star" style={{top: '20%', left: '80%', animationDelay: '0.5s'}}></div>
          <div className="star" style={{top: '30%', left: '25%', animationDelay: '1s'}}></div>
          <div className="star" style={{top: '40%', left: '70%', animationDelay: '1.5s'}}></div>
          <div className="star" style={{top: '50%', left: '10%', animationDelay: '2s'}}></div>
          <div className="star" style={{top: '60%', left: '85%', animationDelay: '2.5s'}}></div>
          <div className="star" style={{top: '70%', left: '40%', animationDelay: '3s'}}></div>
          <div className="star" style={{top: '15%', left: '60%', animationDelay: '0.7s'}}></div>
          <div className="star" style={{top: '80%', left: '20%', animationDelay: '1.2s'}}></div>
          <div className="star" style={{top: '25%', left: '45%', animationDelay: '1.8s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2
            ref={welcomeTitle.ref}
            className={`text-5xl md:text-7xl font-bold mb-8 pb-4 transition-all duration-700 ${
              welcomeTitle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="welcome-gradient block">
              Benvenuto in CodeCraft Studio
            </span>
          </h2>

          <p
            ref={welcomeText.ref}
            className={`text-lg md:text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto transition-all duration-700 delay-200 ${
              welcomeText.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Siamo dedicati ad aiutare le aziende a crescere con soluzioni innovative
            scalabili e a prova di futuro. Il nostro obiettivo è guidare il tuo successo
            con la nostra esperienza nello sviluppo web, mobile e AI.
          </p>

          <div
            ref={missionDivider.ref}
            className={`mission-divider mx-auto mb-12 transition-all duration-700 delay-300 ${
              missionDivider.isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>

          <div>
            <h3
              ref={missionTitle.ref}
              className={`text-4xl md:text-5xl font-bold mb-8 mission-title transition-all duration-700 delay-400 ${
                missionTitle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              La Nostra Missione
            </h3>
            <p
              ref={missionText.ref}
              className={`text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-500 ${
                missionText.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Rivoluzionare il panorama digitale fornendo soluzioni all'avanguardia che
              permettono alle aziende di eccellere nei rispettivi settori. Crediamo nella
              creatività, innovazione e collaborazione per creare esperienze digitali che
              fanno davvero la differenza.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Cards */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={coreValues.ref}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 core-values-title transition-all duration-700 ${
              coreValues.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            I Nostri Punti di Forza
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Innovation */}
            <div className="core-value-card">
              <div className="icon-wrapper mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 card-title">
                Innovazione
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Abbracciamo la creatività e spingiamo i confini della tecnologia per costruire
                soluzioni uniche su misura per le esigenze del tuo business.
              </p>
            </div>

            {/* Card 2 - Collaboration */}
            <div className="core-value-card">
              <div className="icon-wrapper mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 card-title">
                Collaborazione
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Crediamo nel lavoro di squadra e nella stretta collaborazione con i nostri clienti
                per fornire il miglior risultato possibile per i loro progetti.
              </p>
            </div>

            {/* Card 3 - Excellence */}
            <div className="core-value-card">
              <div className="icon-wrapper mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 card-title">
                Eccellenza
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Siamo impegnati nell'eccellenza, assicurando che ogni progetto che intraprendiamo
                soddisfi i più alti standard di qualità e innovazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Geometric Shapes */}
      <section className="py-24 px-6 cta-gradient-section relative">
        {/* Animated Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="shape shape-circle shape-1"></div>
          <div className="shape shape-circle shape-2"></div>
          <div className="shape shape-square shape-3"></div>
          <div className="shape shape-square shape-4"></div>
          <div className="shape shape-circle shape-5"></div>
          <div className="shape shape-triangle shape-6"></div>
          <div className="shape shape-circle shape-7"></div>
          <div className="shape shape-square shape-8"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="cta-modern-card">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Pronto a Iniziare?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Consulenza gratuita di 30 minuti per capire come possiamo aiutare il tuo business a crescere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BaseButton
                  to="/contatti"
                  variant="secondary"
                  size="lg"
                  className="cta-primary-btn-light"
                  rightIcon={ArrowRight}
                >
                  Prenota Consulenza Gratuita
                </BaseButton>
                <BaseButton
                  to="/tool"
                  variant="outline"
                  size="lg"
                  pushable={false}
                  className="cta-secondary-btn-light"
                  rightIcon={ArrowRight}
                >
                  Esplora i Progetti
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-wide uppercase">
              Ci concentriamo ad aiutare il tuo business a crescere e andare avanti
            </p>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black max-w-3xl">
                <span className="what-we-do-highlight">Idee Uniche</span>
                <br />
                Per Il Tuo Business.
              </h2>
              <BaseButton
                to="/servizi"
                variant="primary"
                size="lg"
                pushable={false}
                className="what-we-do-cta"
                rightIcon={ArrowRight}
              >
                Cosa Facciamo?
              </BaseButton>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Applicazioni Web
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Creiamo applicazioni web personalizzate su misura per le tue esigenze aziendali, utilizzando le ultime tecnologie per prestazioni, sicurezza e scalabilità ottimali.
              </p>
              <div className="service-arrow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Design & Sviluppo Siti Web
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Il tuo sito web è il tuo volto online. Il nostro team progetta siti user-friendly che hanno un bell'aspetto e stimolano il coinvolgimento su tutti i dispositivi.
              </p>
              <div className="service-arrow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Soluzioni AI/ML
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Sistemi intelligenti con TensorFlow, Gemini e Multi-Agent. Strumenti SEO, GPT personalizzati e generatori SCORM per automatizzare e innovare il tuo business.
              </p>
              <div className="service-arrow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Dashboard Analytics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Dashboard interattive per Sales, Finance, Logistics e Retail. Visualizzazioni avanzate con Plotly e previsioni ML per decisioni data-driven.
              </p>
              <div className="service-arrow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>

            {/* Service 5 */}
            <div className="service-card">
              <div className="service-icon mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Strategia Digitale & Consulting
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Naviga nel panorama digitale con i nostri servizi di strategia e consulenza, fornendo approfondimenti per ottimizzare la tua presenza e raggiungere gli obiettivi aziendali.
              </p>
              <div className="service-arrow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Progetti Completati</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">2-4</div>
              <div className="text-gray-400">Settimane di Delivery</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Ore Risparmiate/Mese</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Progetti in Evidenza
              </h2>
              <p className="text-lg sm:text-xl text-gray-400">
                Alcuni dei tool e app che abbiamo realizzato
              </p>
            </div>
            <BaseButton
              to="/tool"
              variant="ghost"
              size="lg"
              pushable={false}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium"
              rightIcon={ArrowRight}
            >
              Vedi tutti i progetti
            </BaseButton>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">SaaS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Tool Alloggiati Web
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  Automazione inserimento dati per strutture ricettive con integrazione WSKEY
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Vue.js</span>
                  <span className="mx-2">•</span>
                  <span>Python</span>
                  <span className="mx-2">•</span>
                  <span>API</span>
                </div>
              </div>
            </div>

            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">AI</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Chatbot Assistente
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  Assistente virtuale con GPT-4 integrato per supporto clienti automatizzato
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Node.js</span>
                  <span className="mx-2">•</span>
                  <span>OpenAI</span>
                  <span className="mx-2">•</span>
                  <span>React</span>
                </div>
              </div>
            </div>

            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">Automation</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Workflow n8n
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  Automazione completa di processi business con 40+ agenti attivi
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>n8n</span>
                  <span className="mx-2">•</span>
                  <span>APIs</span>
                  <span className="mx-2">•</span>
                  <span>Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
