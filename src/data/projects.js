export const projects = [
  {
    id: 1,
    slug: 'alloggiati-web-automation',
    title: 'Tool Alloggiati Web',
    category: 'SaaS',
    tagline: 'Automazione inserimento dati per strutture ricettive',
    description: 'Sistema completo per automatizzare l\'inserimento dati su Alloggiati Web con integrazione WSKEY. Trasforma un processo manuale di ore in pochi click.',
    longDescription: `
      <p class="mb-4">Tool Alloggiati Web è una soluzione SaaS sviluppata per strutture ricettive che devono gestire l'obbligo di comunicazione degli ospiti alla Questura tramite il portale Alloggiati Web.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Il Problema</h3>
      <p class="mb-4">Le strutture ricettive devono comunicare i dati di tutti gli ospiti entro 24 ore dall'arrivo. Il processo manuale richiede:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Inserimento manuale di ogni singolo ospite</li>
        <li>Compilazione di 15+ campi per persona</li>
        <li>Rischio di errori umani</li>
        <li>Tempo: 2-5 minuti per ospite</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">La Soluzione</h3>
      <p class="mb-4">Abbiamo sviluppato un tool che:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Importa dati da CSV/Excel o PMS</li>
        <li>Valida automaticamente i dati</li>
        <li>Comunica con Alloggiati Web via WSKEY</li>
        <li>Invia automaticamente le comunicazioni</li>
        <li>Traccia stato e conferme</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Risultati</h3>
      <p class="mb-4">Strutture che gestiscono 50+ ospiti al giorno hanno ridotto il tempo di gestione da 3 ore a 10 minuti, con zero errori.</p>
    `,
    technologies: ['Vue.js', 'Python', 'FastAPI', 'WSKEY API', 'PostgreSQL', 'Docker'],
    features: [
      'Importazione automatica da CSV/Excel',
      'Integrazione diretta con PMS (Property Management System)',
      'Validazione dati in tempo reale',
      'Invio automatico tramite WSKEY',
      'Dashboard con statistiche',
      'Notifiche email su conferme/errori',
      'Export report conformità'
    ],
    metrics: [
      { label: 'Tempo risparmiato', value: '95%', color: 'text-green-400' },
      { label: 'Errori ridotti', value: '100%', color: 'text-green-400' },
      { label: 'Ospiti gestiti/giorno', value: '200+', color: 'text-primary-400' },
      { label: 'Strutture attive', value: '15+', color: 'text-primary-400' }
    ],
    images: [
      '/img/projects/alloggiati-dashboard.jpg',
      '/img/projects/alloggiati-import.jpg'
    ],
    status: 'Live',
    link: 'https://alloggiati.codecraft.it',
    testimonial: {
      quote: 'Da 3 ore al giorno a 10 minuti. Un game changer per la nostra struttura.',
      author: 'Hotel Bella Vista',
      role: 'Responsabile Reception'
    }
  },
  {
    id: 2,
    slug: 'ai-chatbot-assistant',
    title: 'Chatbot Assistente AI',
    category: 'AI',
    tagline: 'Assistente virtuale con GPT-4 per supporto clienti',
    description: 'Chatbot intelligente integrato con GPT-4 che gestisce supporto clienti, FAQ e prequalificazione leads 24/7.',
    longDescription: `
      <p class="mb-4">Un assistente virtuale alimentato da GPT-4 che fornisce supporto clienti intelligente e personalizzato senza intervento umano.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Caratteristiche</h3>
      <p class="mb-4">L'assistente è in grado di:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Rispondere a domande frequenti in linguaggio naturale</li>
        <li>Raccogliere informazioni dai clienti</li>
        <li>Prequalificare leads prima di passarli al team vendite</li>
        <li>Integrarsi con CRM esistente</li>
        <li>Apprendere dalle conversazioni passate</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Tecnologia</h3>
      <p class="mb-4">Costruito su stack moderno con OpenAI GPT-4, Node.js backend e interfaccia React responsive che si adatta a qualsiasi sito web.</p>
    `,
    technologies: ['React', 'Node.js', 'OpenAI GPT-4', 'MongoDB', 'WebSockets', 'Redis'],
    features: [
      'Risposte in linguaggio naturale',
      'Apprendimento continuo',
      'Multi-lingua (IT, EN, FR, DE)',
      'Integrazione CRM',
      'Analytics conversazioni',
      'Handoff a operatore umano',
      'Widget personalizzabile'
    ],
    metrics: [
      { label: 'Query risolte automaticamente', value: '85%', color: 'text-green-400' },
      { label: 'Tempo risposta medio', value: '<2s', color: 'text-primary-400' },
      { label: 'Leads qualificati/mese', value: '150+', color: 'text-primary-400' },
      { label: 'Soddisfazione utenti', value: '4.7/5', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: null,
    testimonial: {
      quote: 'Il chatbot gestisce il 80% delle richieste, permettendoci di concentrarci su casi complessi.',
      author: 'TechCorp SRL',
      role: 'Customer Success Manager'
    }
  },
  {
    id: 3,
    slug: 'n8n-workflow-automation',
    title: 'Sistema Automazioni n8n',
    category: 'Automation',
    tagline: 'Workflow automatici per processi business complessi',
    description: 'Oltre 40 workflow attivi che automatizzano processi business: da sync dati a notifiche intelligenti, report automatici e molto altro.',
    longDescription: `
      <p class="mb-4">Abbiamo implementato un ecosistema di automazioni n8n per diversi clienti, eliminando task ripetitivi e connettendo sistemi prima disconnessi.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Casi d'Uso</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>E-commerce:</strong> Sync ordini → CRM → Warehouse → Email clienti</li>
        <li><strong>Marketing:</strong> Lead capture → Qualificazione AI → CRM → Email sequence</li>
        <li><strong>Operations:</strong> Monitor sistemi → Alert team → Ticket auto-creation</li>
        <li><strong>HR:</strong> Onboarding automatico nuovi dipendenti</li>
        <li><strong>Finance:</strong> Report mensili automatici con dati da fonti multiple</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Benefici</h3>
      <p class="mb-4">I clienti risparmiano in media 500+ ore/mese su task ripetitivi, con errori ridotti a zero e dati sempre sincronizzati.</p>
    `,
    technologies: ['n8n', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Various APIs'],
    features: [
      '40+ workflow attivi',
      'Integrazione con 50+ servizi',
      'Monitoring e alerting',
      'Error handling automatico',
      'Retry logic intelligente',
      'Dashboard centralizzata',
      'Logs e analytics'
    ],
    metrics: [
      { label: 'Ore risparmiate/mese', value: '500+', color: 'text-green-400' },
      { label: 'Workflow attivi', value: '40+', color: 'text-primary-400' },
      { label: 'Integrazioni', value: '50+', color: 'text-primary-400' },
      { label: 'Uptime', value: '99.9%', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: null,
    testimonial: {
      quote: 'Le automazioni n8n hanno trasformato il nostro modo di lavorare. Processi che richiedevano giorni ora sono istantanei.',
      author: 'InnovateLab',
      role: 'COO'
    }
  },
  {
    id: 4,
    slug: 'landing-page-high-conversion',
    title: 'Landing Page Alta Conversione',
    category: 'Web Development',
    tagline: 'Landing page ottimizzate per massimizzare le conversioni',
    description: 'Landing page moderne con design persuasivo, A/B testing integrato e ottimizzazioni SEO per conversion rate fino al 12%.',
    longDescription: `
      <p class="mb-4">Sviluppiamo landing page data-driven con un unico obiettivo: massimizzare le conversioni. Non solo belle, ma efficaci.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Il Nostro Approccio</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Ricerca target audience e competitor</li>
        <li>Copywriting persuasivo orientato al beneficio</li>
        <li>Design con chiara gerarchia visiva</li>
        <li>CTA strategicamente posizionate</li>
        <li>Ottimizzazione velocità (score 95+)</li>
        <li>A/B testing su elementi chiave</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Performance</h3>
      <p class="mb-4">Le nostre landing raggiungono conversion rate medi del 8-12%, molto sopra il benchmark di settore (2-5%).</p>
    `,
    technologies: ['Vue.js', 'Tailwind CSS', 'Google Analytics', 'GTM', 'Vercel'],
    features: [
      'Design responsive mobile-first',
      'Ottimizzazione SEO on-page',
      'Performance score 95+',
      'A/B testing integrato',
      'Analytics e tracking eventi',
      'Form validation avanzata',
      'Animazioni micro-interazioni'
    ],
    metrics: [
      { label: 'Conversion rate medio', value: '12%', color: 'text-green-400' },
      { label: 'Performance score', value: '96/100', color: 'text-green-400' },
      { label: 'Time to interactive', value: '<1.5s', color: 'text-primary-400' },
      { label: 'Progetti landing', value: '30+', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Service',
    link: null,
    testimonial: {
      quote: 'La nuova landing ha triplicato le nostre conversioni. ROI recuperato in 2 settimane.',
      author: 'StartupXYZ',
      role: 'Marketing Director'
    }
  },
  {
    id: 5,
    slug: 'saas-dashboard-analytics',
    title: 'Dashboard Analytics SaaS',
    category: 'SaaS',
    tagline: 'Piattaforma analytics con visualizzazione dati real-time',
    description: 'Dashboard SaaS per visualizzare metriche business in tempo reale con insights AI e report automatici.',
    longDescription: `
      <p class="mb-4">Una piattaforma completa per monitorare KPI aziendali con dashboard interattive, alert intelligenti e report automatici.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Funzionalità Core</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Dashboard personalizzabili con drag & drop</li>
        <li>Connettori per 20+ data sources</li>
        <li>Visualizzazioni interattive (charts, heatmaps, funnels)</li>
        <li>Alert automatici su anomalie</li>
        <li>Report PDF/Excel schedulati</li>
        <li>API per integrazioni custom</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">AI Integration</h3>
      <p class="mb-4">L'AI analizza i dati e suggerisce insights, rileva trend anomali e predice metriche future.</p>
    `,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'D3.js', 'Chart.js', 'AWS'],
    features: [
      'Real-time data updates',
      'Custom dashboard builder',
      'Multi-user con permessi',
      'White-label ready',
      'API completa',
      'Export CSV/PDF/Excel',
      'Mobile app (iOS/Android)'
    ],
    metrics: [
      { label: 'Data sources supportate', value: '20+', color: 'text-primary-400' },
      { label: 'Utenti attivi mensili', value: '500+', color: 'text-primary-400' },
      { label: 'Dashboard create', value: '1200+', color: 'text-green-400' },
      { label: 'Uptime', value: '99.95%', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: null,
    testimonial: {
      quote: 'Finalmente tutti i nostri dati in un unico posto. Decisioni più veloci e basate su dati certi.',
      author: 'GrowthCo',
      role: 'CEO'
    }
  }
]

// Helper functions
export const getProjectBySlug = (slug) => {
  return projects.find(p => p.slug === slug)
}

export const getProjectsByCategory = (category) => {
  return projects.filter(p => p.category === category)
}

export const getFeaturedProjects = (limit = 3) => {
  return projects.slice(0, limit)
}
