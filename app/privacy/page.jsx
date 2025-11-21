export const metadata = {
  title: 'Privacy Policy - CodeCraft Studio',
  description: 'Informativa sulla privacy e trattamento dei dati personali - GDPR compliant',
}

export default function PrivacyPage() {
  const lastUpdate = new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            La tua privacy è importante per noi
          </p>
          <p className="text-sm text-gray-400">
            Ultimo aggiornamento: {lastUpdate}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-invert prose-lg max-w-none">

              {/* Introduzione */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduzione</h2>
                <p className="text-gray-300 leading-relaxed">
                  CodeCraft Studio ("noi", "nostro", "la società") si impegna a proteggere la privacy dei visitatori del sito web <a href="https://www.codecraft.it" className="text-primary-400 hover:text-primary-300">www.codecraft.it</a>. Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea.
                </p>
              </section>

              {/* Titolare del trattamento */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Titolare del Trattamento</h2>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <p className="text-gray-300 mb-2"><strong className="text-white">CodeCraft Studio</strong></p>
                  <p className="text-gray-300 mb-2">Email: info@codecraft.it</p>
                  <p className="text-gray-300">Sito web: www.codecraft.it</p>
                </div>
              </section>

              {/* Dati raccolti */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. Dati Personali Raccolti</h2>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Dati forniti dall'utente</h3>
                <p className="text-gray-300 mb-4">Attraverso il form di contatto, raccogliamo i seguenti dati:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono (facoltativo)</li>
                  <li>Messaggio di richiesta</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Dati raccolti automaticamente</h3>
                <p className="text-gray-300 mb-4">Quando visiti il nostro sito, raccogliamo automaticamente:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Dati di navigazione (pagine visitate, durata della visita) tramite Google Analytics</li>
                  <li>Indirizzo IP (anonimizzato)</li>
                  <li>Tipo di browser e dispositivo</li>
                  <li>Sistema operativo</li>
                  <li>Referrer (sito da cui provieni)</li>
                </ul>
              </section>

              {/* Finalità del trattamento */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Finalità del Trattamento</h2>
                <p className="text-gray-300 mb-4">Utilizziamo i tuoi dati personali per:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Rispondere alle richieste di contatto</strong> - elaborare e rispondere ai messaggi inviati tramite il form di contatto</li>
                  <li><strong className="text-white">Analisi del sito web</strong> - migliorare l'esperienza utente e ottimizzare il sito tramite Google Analytics</li>
                  <li><strong className="text-white">Comunicazioni di marketing</strong> - solo previo consenso esplicito, per informarti su servizi e novità</li>
                  <li><strong className="text-white">Obblighi legali</strong> - adempiere a obblighi di legge o regolamentari</li>
                </ul>
              </section>

              {/* Base giuridica */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. Base Giuridica del Trattamento</h2>
                <p className="text-gray-300 mb-4">Il trattamento dei tuoi dati si basa su:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Consenso</strong> - per l'invio di comunicazioni di marketing e l'uso di cookie analitici</li>
                  <li><strong className="text-white">Esecuzione di un contratto</strong> - per rispondere alle tue richieste di servizi</li>
                  <li><strong className="text-white">Interesse legittimo</strong> - per analizzare e migliorare il sito web</li>
                </ul>
              </section>

              {/* Conservazione dati */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. Conservazione dei Dati</h2>
                <p className="text-gray-300 mb-4">I tuoi dati personali vengono conservati per:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Dati di contatto</strong> - fino a 2 anni dalla ricezione o revoca del consenso</li>
                  <li><strong className="text-white">Dati analitici</strong> - 26 mesi (Google Analytics default)</li>
                  <li><strong className="text-white">Cookie</strong> - variabile in base al tipo (vedi Cookie Policy)</li>
                </ul>
              </section>

              {/* Diritti dell'utente */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. I Tuoi Diritti</h2>
                <p className="text-gray-300 mb-4">In conformità al GDPR, hai diritto a:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Accesso</strong> - ottenere conferma del trattamento e copia dei tuoi dati</li>
                  <li><strong className="text-white">Rettifica</strong> - correggere dati inesatti o incompleti</li>
                  <li><strong className="text-white">Cancellazione</strong> - richiedere la cancellazione dei tuoi dati ("diritto all'oblio")</li>
                  <li><strong className="text-white">Limitazione</strong> - limitare il trattamento in determinate circostanze</li>
                  <li><strong className="text-white">Portabilità</strong> - ricevere i dati in formato strutturato e trasferirli</li>
                  <li><strong className="text-white">Opposizione</strong> - opporti al trattamento basato su interesse legittimo</li>
                  <li><strong className="text-white">Revoca consenso</strong> - ritirare il consenso in qualsiasi momento</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Per esercitare i tuoi diritti, contattaci a: <a href="mailto:info@codecraft.it" className="text-primary-400 hover:text-primary-300">info@codecraft.it</a>
                </p>
              </section>

              {/* Sicurezza */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Sicurezza dei Dati</h2>
                <p className="text-gray-300">
                  Implementiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i tuoi dati personali da accesso non autorizzato, perdita, distruzione o alterazione, tra cui: crittografia SSL/TLS, firewall, backup regolari, e accesso limitato ai dati.
                </p>
              </section>

              {/* Cookie */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. Cookie</h2>
                <p className="text-gray-300">
                  Utilizziamo cookie tecnici e analitici. Per maggiori informazioni, consulta la nostra <a href="/cookie" className="text-primary-400 hover:text-primary-300">Cookie Policy</a>.
                </p>
              </section>

              {/* Modifiche */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Modifiche alla Privacy Policy</h2>
                <p className="text-gray-300">
                  Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con data di aggiornamento. Ti consigliamo di consultare regolarmente questa pagina.
                </p>
              </section>

              {/* Contatti */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contatti</h2>
                <p className="text-gray-300">
                  Per qualsiasi domanda sulla presente Privacy Policy o sul trattamento dei tuoi dati personali, contattaci a:
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-4">
                  <p className="text-gray-300 mb-2">Email: <a href="mailto:info@codecraft.it" className="text-primary-400 hover:text-primary-300">info@codecraft.it</a></p>
                  <p className="text-gray-300">Sito web: <a href="https://www.codecraft.it" className="text-primary-400 hover:text-primary-300">www.codecraft.it</a></p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
