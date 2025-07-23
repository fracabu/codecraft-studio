<template>
  <div class="min-h-screen pt-20">
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30 mb-6">
          <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span class="text-orange-400 font-medium">Contattaci</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Iniziamo </span>
          <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Insieme
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Consulenza gratuita di 30 minuti per analizzare i tuoi processi e
          <strong class="text-orange-400">identificare opportunità</strong> di automazione AI.
        </p>
      </div>
    </section>

    <!-- Contact Options -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <!-- Email Contact -->
          <div class="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
            <div class="text-5xl mb-6">📧</div>
            <h3 class="text-2xl font-bold text-white mb-4">Email Diretto</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Scrivi direttamente per richieste specifiche, informazioni dettagliate sui servizi o per
              richiedere un preventivo personalizzato.
            </p>
            <a
              href="mailto:fracabu@gmail.com?subject=Richiesta Consulenza CodeCraft Studio&body=Ciao,%0D%0A%0D%0ASono interessato ai vostri servizi di automazione AI.%0D%0A%0D%0ADettagli azienda:%0D%0A- Settore: %0D%0A- Dimensione: %0D%0A- Processi da automatizzare: %0D%0A%0D%0AGrazie!"
              class="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>fracabu@gmail.com</span>
            </a>
          </div>

          <!-- WhatsApp Contact -->
          <div class="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl opacity-75">
            <div class="text-5xl mb-6">💬</div>
            <h3 class="text-2xl font-bold text-white mb-4">WhatsApp Business</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Per una comunicazione diretta e immediata. Perfetto per domande veloci o per
              fissare appuntamenti per la consulenza gratuita.
            </p>
            <button class="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white cursor-not-allowed">
              <span class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>WhatsApp (coming soon)</span>
              </span>
            </button>
          </div>
        </div>

        <!-- Quick Info Cards -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div class="text-3xl mb-4">⏱️</div>
            <h4 class="text-lg font-bold text-white mb-2">Risposta Rapida</h4>
            <p class="text-gray-300 text-sm">Rispondiamo entro 24 ore lavorative</p>
          </div>
          <div class="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div class="text-3xl mb-4">🎯</div>
            <h4 class="text-lg font-bold text-white mb-2">Consulenza Gratuita</h4>
            <p class="text-gray-300 text-sm">30 minuti di analisi senza impegno</p>
          </div>
          <div class="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div class="text-3xl mb-4">🚀</div>
            <h4 class="text-lg font-bold text-white mb-2">Start Veloce</h4>
            <p class="text-gray-300 text-sm">Implementazione in 1-4 settimane</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Placeholder Section -->
    <section class="py-20 px-6 bg-white/5">
      <div class="max-w-4xl mx-auto text-center">
        <div class="p-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-2xl">
          <h2 class="text-2xl font-bold text-white mb-4">📝 Form di Contatto Avanzato in Arrivo</h2>
          <p class="text-gray-300 mb-6">
            Stiamo sviluppando un form completo con integrazione Firebase per raccogliere richieste dettagliate,
            upload file e scheduling automatico delle consulenze. Nel frattempo, contattaci direttamente via email!
          </p>

          <!-- Contact Summary -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
            <h3 class="text-lg font-bold text-white mb-4">Informazioni di Contatto</h3>
            <div class="grid md:grid-cols-2 gap-4 text-left">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <div class="text-white font-medium">Email</div>
                  <a href="mailto:fracabu@gmail.com" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                    fracabu@gmail.com
                  </a>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <div class="text-white font-medium">Località</div>
                  <div class="text-gray-300">Milano, Lombardia, IT</div>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                </svg>
                <div>
                  <div class="text-white font-medium">Website</div>
                  <a href="https://www.codecraft.it" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                    www.codecraft.it
                  </a>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <div class="text-white font-medium">Orari</div>
                  <div class="text-gray-300">Lun-Ven 9:00-18:00</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Final CTA -->
          <a
            href="mailto:fracabu@gmail.com?subject=Consulenza Gratuita CodeCraft&body=Ciao,%0D%0A%0D%0AVorrei richiedere una consulenza gratuita di 30 minuti.%0D%0A%0D%0AInfo azienda:%0D%0A- Nome azienda: %0D%0A- Settore: %0D%0A- Dimensione team: %0D%0A- Processi da ottimizzare: %0D%0A- Obiettivi principali: %0D%0A%0D%0APreferenza orario chiamata:%0D%0A- Giorni: %0D%0A- Orari: %0D%0A%0D%0AGrazie!"
            class="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
            </svg>
            <span>Richiedi Consulenza Gratuita Ora</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// ContattiView logic here
</script>
