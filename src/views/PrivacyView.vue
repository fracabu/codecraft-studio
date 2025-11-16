<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
    <!-- Hero Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>

      <div class="relative max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          Privacy Policy
        </h1>
        <p
          class="text-xl text-gray-300 mb-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        >
          La tua privacy è importante per noi
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
              <h2 class="text-2xl font-bold text-white mb-4">1. Introduzione</h2>
              <p class="text-gray-300 leading-relaxed">
                CodeCraft Studio ("noi", "nostro", "la società") si impegna a proteggere la
                privacy dei visitatori del sito web
                <a href="https://www.codecraft.it" class="text-primary-400 hover:text-primary-300"
                  >www.codecraft.it</a
                >. Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le
                tue informazioni personali in conformità con il Regolamento Generale sulla
                Protezione dei Dati (GDPR) dell'Unione Europea.
              </p>
            </section>

            <!-- Titolare del trattamento -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">2. Titolare del Trattamento</h2>
              <div class="bg-white/5 rounded-lg p-6 border border-white/10">
                <p class="text-gray-300 mb-2">
                  <strong class="text-white">CodeCraft Studio</strong>
                </p>
                <p class="text-gray-300 mb-2">Email: info@codecraft.it</p>
                <p class="text-gray-300">Sito web: www.codecraft.it</p>
              </div>
            </section>

            <!-- Dati raccolti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">3. Dati Personali Raccolti</h2>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">3.1 Dati forniti dall'utente</h3>
              <p class="text-gray-300 mb-4">
                Attraverso il form di contatto, raccogliamo i seguenti dati:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono (facoltativo)</li>
                <li>Messaggio di richiesta</li>
              </ul>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">
                3.2 Dati raccolti automaticamente
              </h3>
              <p class="text-gray-300 mb-4">
                Quando visiti il nostro sito, raccogliamo automaticamente:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Dati di navigazione (pagine visitate, durata della visita) tramite Google
                  Analytics
                </li>
                <li>Indirizzo IP (anonimizzato)</li>
                <li>Tipo di browser e dispositivo</li>
                <li>Sistema operativo</li>
                <li>Referrer (sito da cui provieni)</li>
              </ul>
            </section>

            <!-- Finalità del trattamento -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">4. Finalità del Trattamento</h2>
              <p class="text-gray-300 mb-4">Utilizziamo i tuoi dati personali per:</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong class="text-white">Rispondere alle richieste di contatto</strong> -
                  elaborare e rispondere ai messaggi inviati tramite il form di contatto
                </li>
                <li>
                  <strong class="text-white">Analisi del sito web</strong> - migliorare
                  l'esperienza utente e ottimizzare il sito tramite Google Analytics
                </li>
                <li>
                  <strong class="text-white">Comunicazioni di marketing</strong> - solo previo
                  consenso esplicito, per informarti su servizi e novità
                </li>
                <li>
                  <strong class="text-white">Obblighi legali</strong> - adempiere a obblighi di
                  legge o regolamentari
                </li>
              </ul>
            </section>

            <!-- Base giuridica -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">5. Base Giuridica del Trattamento</h2>
              <p class="text-gray-300 mb-4">Il trattamento dei tuoi dati si basa su:</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong class="text-white">Consenso</strong> - per l'invio di comunicazioni di
                  marketing e l'uso di cookie analitici
                </li>
                <li>
                  <strong class="text-white">Esecuzione di un contratto</strong> - per rispondere
                  alle tue richieste di servizi
                </li>
                <li>
                  <strong class="text-white">Interesse legittimo</strong> - per analizzare e
                  migliorare il sito web
                </li>
              </ul>
            </section>

            <!-- Condivisione dati -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">6. Condivisione dei Dati</h2>
              <p class="text-gray-300 mb-4">
                I tuoi dati possono essere condivisi con i seguenti soggetti terzi:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong class="text-white">Google Analytics</strong> - per l'analisi del traffico
                  web (dati anonimizzati)
                </li>
                <li>
                  <strong class="text-white">Vercel</strong> - provider di hosting del sito web
                </li>
                <li>
                  <strong class="text-white">Aruba</strong> - provider email per l'invio e ricezione
                  di messaggi
                </li>
              </ul>
              <p class="text-gray-300 mt-4">
                Non vendiamo, affittiamo o scambiamo i tuoi dati personali con terze parti per
                scopi commerciali.
              </p>
            </section>

            <!-- Conservazione dati -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">7. Conservazione dei Dati</h2>
              <p class="text-gray-300 mb-4">
                Conserviamo i tuoi dati personali per il tempo necessario a soddisfare le finalità
                per cui sono stati raccolti:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong class="text-white">Richieste di contatto</strong> - fino a 2 anni dalla
                  ricezione
                </li>
                <li>
                  <strong class="text-white">Dati analitici</strong> - 26 mesi (impostazione Google
                  Analytics)
                </li>
                <li>
                  <strong class="text-white">Consensi marketing</strong> - fino a revoca del
                  consenso
                </li>
              </ul>
            </section>

            <!-- Diritti dell'utente -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">8. I Tuoi Diritti</h2>
              <p class="text-gray-300 mb-4">
                In conformità con il GDPR, hai il diritto di:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong class="text-white">Accesso</strong> - ottenere una copia dei tuoi dati
                  personali
                </li>
                <li>
                  <strong class="text-white">Rettifica</strong> - correggere dati inesatti o
                  incompleti
                </li>
                <li>
                  <strong class="text-white">Cancellazione</strong> - richiedere la cancellazione
                  dei tuoi dati (diritto all'oblio)
                </li>
                <li>
                  <strong class="text-white">Limitazione</strong> - limitare il trattamento dei tuoi
                  dati
                </li>
                <li>
                  <strong class="text-white">Portabilità</strong> - ricevere i tuoi dati in formato
                  strutturato
                </li>
                <li>
                  <strong class="text-white">Opposizione</strong> - opporti al trattamento dei tuoi
                  dati
                </li>
                <li>
                  <strong class="text-white">Revoca consenso</strong> - revocare il consenso in
                  qualsiasi momento
                </li>
              </ul>
              <p class="text-gray-300 mt-4">
                Per esercitare i tuoi diritti, contattaci all'indirizzo:
                <a
                  href="mailto:info@codecraft.it"
                  class="text-primary-400 hover:text-primary-300"
                  >info@codecraft.it</a
                >
              </p>
            </section>

            <!-- Sicurezza -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">9. Sicurezza dei Dati</h2>
              <p class="text-gray-300">
                Adottiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati
                personali da accessi non autorizzati, perdita, distruzione o alterazione. Questo
                include:
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Crittografia SSL/TLS per la trasmissione dei dati</li>
                <li>Server sicuri con accesso limitato</li>
                <li>Backup regolari dei dati</li>
                <li>Monitoraggio continuo delle minacce</li>
              </ul>
            </section>

            <!-- Cookie -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">10. Cookie</h2>
              <p class="text-gray-300">
                Il nostro sito utilizza cookie per migliorare l'esperienza utente. Per maggiori
                informazioni, consulta la nostra
                <router-link to="/cookie" class="text-primary-400 hover:text-primary-300"
                  >Cookie Policy</router-link
                >.
              </p>
            </section>

            <!-- Modifiche -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">11. Modifiche alla Privacy Policy</h2>
              <p class="text-gray-300">
                Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento.
                Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento. Ti
                invitiamo a consultare regolarmente questa pagina per rimanere informato.
              </p>
            </section>

            <!-- Contatti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">12. Contatti</h2>
              <p class="text-gray-300 mb-4">
                Per domande o richieste relative a questa Privacy Policy, puoi contattarci a:
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
                  <strong class="text-white">Form di contatto:</strong>
                  <router-link to="/contatti" class="text-primary-400 hover:text-primary-300 ml-2"
                    >www.codecraft.it/contatti</router-link
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
