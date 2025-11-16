<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
    <!-- Hero Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10"></div>

      <div class="relative max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          Cookie Policy
        </h1>
        <p
          class="text-xl text-gray-300 mb-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        >
          Come utilizziamo i cookie su questo sito
        </p>
        <p
          class="text-sm text-gray-400"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          Ultimo aggiornamento: {{ lastUpdate }}
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div class="prose prose-invert prose-lg max-w-none">
            <!-- Introduzione -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">1. Cosa sono i Cookie</h2>
              <p class="text-gray-300 leading-relaxed">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo
                (computer, tablet, smartphone) quando visiti un sito web. I cookie permettono al
                sito di ricordare le tue azioni e preferenze (come login, lingua, dimensione dei
                caratteri e altre impostazioni di visualizzazione) per un determinato periodo di
                tempo, così non devi reinserirle ogni volta che torni sul sito o navighi da una
                pagina all'altra.
              </p>
            </section>

            <!-- Come usiamo i cookie -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">2. Come Utilizziamo i Cookie</h2>
              <p class="text-gray-300 mb-6">
                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito web, per
                comprendere come viene utilizzato e per fornire contenuti personalizzati. Di seguito
                sono elencate le categorie di cookie che utilizziamo:
              </p>

              <!-- Cookie Essenziali -->
              <div class="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
                <div class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center"
                  >
                    <Shield class="w-6 h-6 text-primary-400" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-white mb-2">Cookie Essenziali</h3>
                    <p class="text-gray-300 mb-3">
                      Questi cookie sono strettamente necessari per il funzionamento del sito web e
                      non possono essere disabilitati nei nostri sistemi.
                    </p>
                    <div class="bg-white/5 rounded p-4 text-sm">
                      <p class="text-gray-300 mb-2">
                        <strong class="text-white">Nome:</strong> codecraft_cookie_consent
                      </p>
                      <p class="text-gray-300 mb-2">
                        <strong class="text-white">Scopo:</strong> Memorizza le tue preferenze sui
                        cookie
                      </p>
                      <p class="text-gray-300 mb-2">
                        <strong class="text-white">Durata:</strong> 1 anno
                      </p>
                      <p class="text-gray-300">
                        <strong class="text-white">Tipo:</strong> localStorage (non inviato al
                        server)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cookie Analitici -->
              <div class="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
                <div class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center"
                  >
                    <BarChart3 class="w-6 h-6 text-accent-400" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-white mb-2">
                      Cookie Analitici (Google Analytics)
                    </h3>
                    <p class="text-gray-300 mb-3">
                      Utilizziamo Google Analytics per analizzare come i visitatori utilizzano il
                      nostro sito. Questi cookie raccolgono informazioni in forma anonima.
                    </p>
                    <div class="bg-white/5 rounded p-4 text-sm space-y-4">
                      <div>
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">Nome:</strong> _ga
                        </p>
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">Scopo:</strong> Distingue gli utenti unici
                        </p>
                        <p class="text-gray-300">
                          <strong class="text-white">Durata:</strong> 2 anni
                        </p>
                      </div>
                      <div class="border-t border-white/10 pt-4">
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">Nome:</strong> _ga_*
                        </p>
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">Scopo:</strong> Mantiene lo stato della
                          sessione
                        </p>
                        <p class="text-gray-300">
                          <strong class="text-white">Durata:</strong> 2 anni
                        </p>
                      </div>
                    </div>
                    <div class="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded">
                      <p class="text-sm text-blue-200">
                        ℹ️ <strong>Nota sulla Privacy:</strong> Abbiamo configurato Google Analytics
                        con le seguenti impostazioni per proteggere la tua privacy:
                      </p>
                      <ul class="list-disc list-inside text-sm text-blue-200 mt-2 space-y-1">
                        <li>Anonimizzazione IP attiva</li>
                        <li>Nessuna personalizzazione degli annunci</li>
                        <li>Conformità GDPR</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Gestione cookie -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">3. Come Gestire i Cookie</h2>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">
                3.1 Tramite il nostro Banner
              </h3>
              <p class="text-gray-300 mb-4">
                Al tuo primo accesso sul sito, ti viene mostrato un banner che ti permette di:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Accettare tutti i cookie (essenziali + analitici)</li>
                <li>Rifiutare i cookie analitici (solo cookie essenziali)</li>
              </ul>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">3.2 Tramite il tuo Browser</h3>
              <p class="text-gray-300 mb-4">
                Puoi controllare e/o eliminare i cookie come desideri. Puoi eliminare tutti i
                cookie che sono già sul tuo computer e puoi impostare la maggior parte dei browser
                per impedire che vengano installati. Tuttavia, se lo fai, potresti dover regolare
                manualmente alcune preferenze ogni volta che visiti un sito.
              </p>

              <div class="grid md:grid-cols-2 gap-4 mt-6">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Google Chrome</p>
                  <p class="text-sm text-gray-400">Gestione cookie su Chrome</p>
                </a>

                <a
                  href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Mozilla Firefox</p>
                  <p class="text-sm text-gray-400">Gestione cookie su Firefox</p>
                </a>

                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Safari</p>
                  <p class="text-sm text-gray-400">Gestione cookie su Safari</p>
                </a>

                <a
                  href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Microsoft Edge</p>
                  <p class="text-sm text-gray-400">Gestione cookie su Edge</p>
                </a>
              </div>
            </section>

            <!-- Cookie di terze parti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">4. Cookie di Terze Parti</h2>
              <p class="text-gray-300 mb-4">
                Alcuni cookie sono installati da terze parti di cui ci avvaliamo. Attualmente
                utilizziamo:
              </p>

              <div class="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 class="text-lg font-semibold text-white mb-3">Google Analytics</h3>
                <p class="text-gray-300 mb-4">
                  Google Analytics è un servizio di analisi web fornito da Google Inc. ("Google").
                  Google utilizza i dati raccolti per tracciare ed esaminare l'uso di questo sito,
                  compilare report sulle sue attività e condividerli con altri servizi Google.
                </p>
                <p class="text-gray-300 mb-2">
                  <strong class="text-white">Privacy Policy di Google:</strong>
                </p>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary-400 hover:text-primary-300 text-sm"
                  >https://policies.google.com/privacy</a
                >
              </div>
            </section>

            <!-- Aggiornamenti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">5. Aggiornamenti alla Cookie Policy</h2>
              <p class="text-gray-300">
                Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento.
                Qualsiasi modifica sarà pubblicata su questa pagina con la data di aggiornamento. Ti
                invitiamo a consultare regolarmente questa pagina per rimanere informato sul nostro
                uso dei cookie.
              </p>
            </section>

            <!-- Contatti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">6. Contatti</h2>
              <p class="text-gray-300 mb-4">
                Per domande o richieste relative a questa Cookie Policy, puoi contattarci a:
              </p>
              <div class="bg-white/5 rounded-lg p-6 border border-white/10">
                <p class="text-gray-300 mb-2">
                  <strong class="text-white">Email:</strong>
                  <a
                    href="mailto:info@codecraft.it"
                    class="text-primary-400 hover:text-primary-300 ml-2"
                    >info@codecraft.it</a
                  >
                </p>
                <p class="text-gray-300">
                  <strong class="text-white">Privacy Policy:</strong>
                  <router-link to="/privacy" class="text-primary-400 hover:text-primary-300 ml-2"
                    >www.codecraft.it/privacy</router-link
                  >
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Shield, BarChart3 } from 'lucide-vue-next'

const lastUpdate = computed(() => {
  return new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
.prose {
  @apply text-gray-300;
}

.prose h2 {
  @apply text-white border-b border-white/10 pb-2;
}

.prose h3 {
  @apply text-white;
}

.prose strong {
  @apply text-white font-semibold;
}

.prose a {
  @apply text-primary-400 hover:text-primary-300 transition-colors duration-200;
}

.prose ul {
  @apply space-y-2;
}

.prose li {
  @apply text-gray-300;
}
</style>
