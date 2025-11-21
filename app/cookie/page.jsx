export const metadata = {
  title: 'Cookie Policy - CodeCraft Studio',
  description: 'Informativa sull\'utilizzo dei cookie - GDPR compliant',
}

export default function CookiePage() {
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
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Come utilizziamo i cookie sul nostro sito
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

              {/* Cosa sono i cookie */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. Cosa sono i Cookie</h2>
                <p className="text-gray-300 leading-relaxed">
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
                </p>
              </section>

              {/* Tipologie di cookie */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Tipologie di Cookie Utilizzati</h2>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Cookie Tecnici (Necessari)</h3>
                <p className="text-gray-300 mb-4">
                  Questi cookie sono essenziali per il corretto funzionamento del sito e non richiedono consenso:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li><strong className="text-white">Cookie di sessione</strong> - mantengono la tua sessione attiva durante la navigazione</li>
                  <li><strong className="text-white">Cookie di preferenze</strong> - memorizzano le tue scelte (es. consenso cookie)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Cookie Analitici</h3>
                <p className="text-gray-300 mb-4">
                  Utilizziamo Google Analytics per raccogliere informazioni anonime su come i visitatori utilizzano il sito:
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-4">
                  <p className="text-gray-300 mb-2"><strong className="text-white">Google Analytics</strong></p>
                  <p className="text-gray-300 mb-2">Provider: Google LLC</p>
                  <p className="text-gray-300 mb-2">Durata: 26 mesi</p>
                  <p className="text-gray-300 mb-2">Finalità: Analisi statistiche anonime del traffico</p>
                  <p className="text-gray-300 text-sm">
                    Dati raccolti: IP anonimizzato, pagine visitate, tempo di permanenza, dispositivo, browser
                  </p>
                </div>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Configurazione privacy-friendly:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>IP anonimizzato (anonymize_ip: true)</li>
                  <li>No personalizzazione annunci</li>
                  <li>No condivisione dati con Google</li>
                  <li>Solo statistiche aggregate</li>
                </ul>
              </section>

              {/* Cookie di terze parti */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. Cookie di Terze Parti</h2>
                <p className="text-gray-300 mb-4">
                  Il nostro sito potrebbe includere servizi di terze parti che installano cookie:
                </p>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Google Fonts</h4>
                    <p className="text-gray-300 text-sm">
                      Utilizziamo Google Fonts per caricare i caratteri web. Questo può comportare la trasmissione dell'indirizzo IP a Google.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Vercel Analytics (se attivo)</h4>
                    <p className="text-gray-300 text-sm">
                      Cookie tecnici per il monitoraggio delle performance del sito (privacy-first, senza tracciamento utente).
                    </p>
                  </div>
                </div>
              </section>

              {/* Durata dei cookie */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Durata dei Cookie</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-gray-300 border border-white/10">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-3 border-b border-white/10">Tipo Cookie</th>
                        <th className="px-4 py-3 border-b border-white/10">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3">Cookie di sessione</td>
                        <td className="px-4 py-3">Alla chiusura del browser</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3">Cookie consenso</td>
                        <td className="px-4 py-3">12 mesi</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3">Google Analytics</td>
                        <td className="px-4 py-3">26 mesi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Base giuridica */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. Base Giuridica</h2>
                <p className="text-gray-300 mb-4">
                  L'utilizzo dei cookie si basa su:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Cookie tecnici</strong> - Interesse legittimo (funzionamento del sito)</li>
                  <li><strong className="text-white">Cookie analitici</strong> - Consenso esplicito tramite cookie banner</li>
                </ul>
              </section>

              {/* Gestione cookie */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. Come Gestire i Cookie</h2>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Tramite Cookie Banner</h3>
                <p className="text-gray-300 mb-4">
                  Alla prima visita del sito, ti viene mostrato un banner che ti permette di:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Accettare tutti i cookie</li>
                  <li>Rifiutare i cookie non necessari</li>
                  <li>Modificare le tue preferenze in qualsiasi momento</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Tramite Browser</h3>
                <p className="text-gray-300 mb-4">
                  Puoi gestire o eliminare i cookie attraverso le impostazioni del tuo browser:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Safari</a></li>
                  <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Microsoft Edge</a></li>
                </ul>
                <p className="text-gray-300 mt-4 text-sm">
                  <strong className="text-white">Nota:</strong> Disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.3 Opt-out Google Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Puoi impedire a Google Analytics di raccogliere i tuoi dati installando il{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                    componente aggiuntivo del browser per la disattivazione di Google Analytics
                  </a>.
                </p>
              </section>

              {/* Diritti dell'utente */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. I Tuoi Diritti</h2>
                <p className="text-gray-300 mb-4">
                  In conformità con il GDPR, hai diritto a:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Revocare il consenso all'uso dei cookie in qualsiasi momento</li>
                  <li>Accedere ai dati raccolti tramite cookie</li>
                  <li>Richiedere la cancellazione dei dati</li>
                  <li>Opporti al trattamento per finalità di marketing</li>
                </ul>
              </section>

              {/* Modifiche */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Modifiche alla Cookie Policy</h2>
                <p className="text-gray-300">
                  Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con data di aggiornamento. Ti consigliamo di consultare regolarmente questa pagina.
                </p>
              </section>

              {/* Contatti */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. Contatti</h2>
                <p className="text-gray-300">
                  Per qualsiasi domanda sui cookie o sul loro utilizzo, contattaci a:
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-4">
                  <p className="text-gray-300 mb-2">Email: <a href="mailto:info@codecraft.it" className="text-primary-400 hover:text-primary-300">info@codecraft.it</a></p>
                  <p className="text-gray-300">Sito web: <a href="https://www.codecraft.it" className="text-primary-400 hover:text-primary-300">www.codecraft.it</a></p>
                </div>
              </section>

              {/* Link utili */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Link Utili</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><a href="/privacy" className="text-primary-400 hover:text-primary-300">Privacy Policy</a></li>
                  <li><a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Garante Privacy Italiano</a></li>
                  <li><a href="https://gdpr.eu" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">GDPR Official Text</a></li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
