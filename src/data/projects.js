export const projects = [
  {
    id: 1,
    slug: 'checkinly-alloggify',
    title: 'Checkinly (Alloggify)',
    category: 'SaaS',
    tagline: 'OCR-Powered Document Extraction per Alloggiati Web',
    description: 'Sistema AI che automatizza l\'estrazione dati da documenti per strutture ricettive, riducendo il tempo da 15-20 minuti a 30 secondi.',
    longDescription: `
      <p class="mb-4">Checkinly è un\'applicazione web intelligente che automatizza l\'estrazione dati da documenti d\'identità italiani utilizzando Gemini AI, semplificando drasticamente il processo di comunicazione ospiti al portale Alloggiati Web.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Il Problema</h3>
      <p class="mb-4">Le strutture ricettive italiane devono comunicare tutti i dati degli ospiti alla Questura. Il processo manuale richiede:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Inserimento manuale da documenti</li>
        <li>15-20 minuti per completare i dati</li>
        <li>Alto rischio di errori di trascrizione</li>
        <li>Processo ripetitivo e noioso</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">La Soluzione</h3>
      <p class="mb-4">Due metodi di automazione:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Chrome Extension:</strong> Auto-fill form su Alloggiati Web</li>
        <li><strong>SOAP API + WSKEY:</strong> Automazione completa con invio diretto</li>
        <li>OCR AI-powered con 99% accuracy</li>
        <li>Supporto carta d\'identità, passaporto, patente</li>
        <li>Download ricevute PDF automatico</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Risultati</h3>
      <p class="mb-4">Riduzione del 95% del tempo di inserimento dati, da 15-20 minuti a soli 30 secondi per ospite.</p>
    `,
    technologies: ['React 19', 'TypeScript', 'Vite', 'Google Gemini 2.5 Flash', 'Tailwind CSS', 'Chrome Extension', 'Express', 'SOAP API'],
    features: [
      'OCR AI con Gemini 2.5 Flash',
      'Chrome Extension per auto-fill',
      'SOAP API integration con WSKEY',
      'Supporto 3 tipi documento (ID, passaporto, patente)',
      'Batch processing',
      'Download ricevute PDF',
      '100% local processing (privacy-first)',
      'Backend Express per SOAP'
    ],
    metrics: [
      { label: 'Tempo risparmiato', value: '95%', color: 'text-green-400' },
      { label: 'Accuracy OCR', value: '99%', color: 'text-green-400' },
      { label: 'Tempo elaborazione', value: '30 sec', color: 'text-primary-400' },
      { label: 'Documenti supportati', value: '3 tipi', color: 'text-primary-400' }
    ],
    images: [],
    status: 'In Development',
    link: 'https://github.com/fracabu/Alloggify',
    testimonial: null
  },
  {
    id: 2,
    slug: 'il-sorpasso',
    title: 'Il Sorpasso',
    category: 'Web Development',
    tagline: 'Landing Page & Contact App per Noleggio Auto',
    description: 'Landing page promozionale one-page responsive con form di contatto integrato e invio email automatico via Firebase Functions.',
    longDescription: `
      <p class="mb-4">Landing page professionale per il servizio di noleggio auto "Il Sorpasso" con gestione completa dei contatti e comunicazione automatizzata.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Caratteristiche</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Landing one-page responsive con sezioni Hero, Servizi, Gallery, Contatti</li>
        <li>Floating WhatsApp button per chat immediata</li>
        <li>Localizzazione multilingua (IT/EN) con vue-i18n</li>
        <li>Form di contatto con salvataggio Firestore</li>
        <li>Invio email automatico tramite Cloud Function</li>
        <li>Backup admin panel (opzionale) per gestione richieste</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Tecnologia</h3>
      <p class="mb-4">Costruita con Vue 3 Composition API, Vite per build veloce, e Firebase per backend serverless completo.</p>
    `,
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS', 'Firebase Functions', 'Firestore', 'vue-i18n'],
    features: [
      'One-page responsive design',
      'Multilingua IT/EN',
      'Form contatto integrato',
      'Email automatiche Cloud Function',
      'Salvataggio Firestore',
      'Floating WhatsApp',
      'Admin panel backup'
    ],
    metrics: [
      { label: 'Performance score', value: '95/100', color: 'text-green-400' },
      { label: 'Lingue supportate', value: '2', color: 'text-primary-400' },
      { label: 'Time to interactive', value: '<2s', color: 'text-primary-400' },
      { label: 'Mobile optimized', value: '100%', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: 'http://www.ilsorpassodilorenzobasile.com',
    testimonial: null
  },
  {
    id: 3,
    slug: 'scorm-course-generator',
    title: 'SCORM Course Generator',
    category: 'AI',
    tagline: 'Sistema Multi-Agente per Corsi E-Learning SCORM 1.2',
    description: 'Architettura multi-agente AI che genera automaticamente corsi e-learning professionali in formato SCORM 1.2, compatibili con tutti i LMS.',
    longDescription: `
      <p class="mb-4">Sistema avanzato di generazione contenuti didattici basato su 5 agenti AI specializzati che lavorano in parallelo per creare corsi e-learning professionali.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Architettura Multi-Agente</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Course Outliner (Orange):</strong> Struttura pedagogica basata su Bloom's Taxonomy</li>
        <li><strong>Content Creator (Blue):</strong> Generazione contenuti dettagliati in markdown</li>
        <li><strong>Senior Editor (Red):</strong> Editing qualità, grammatica, consistenza</li>
        <li><strong>SCORM Package Generator (Green):</strong> Conversione SCORM 1.2</li>
        <li><strong>Multimedia Integrator (Purple):</strong> Ottimizzazione audio/video con ffmpeg</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Compatibilità Universale</h3>
      <p class="mb-4">I pacchetti SCORM 1.2 generati funzionano su qualsiasi LMS: Moodle, Canvas, Blackboard, Google Classroom, TalentLMS, Schoology, D2L Brightspace.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Risultati</h3>
      <p class="mb-4">Corsi già creati: "AI per principianti", "Sicurezza sul lavoro". Qualità professionale con tracciamento progressi studenti.</p>
    `,
    technologies: ['Python 3', 'Claude AI', 'ffmpeg', 'SCORM 1.2', 'Markdown'],
    features: [
      'Generazione automatica da outline',
      '5 agenti AI specializzati',
      'Output SCORM 1.2 universale',
      'Integrazione multimedia (audio/video)',
      'Compressione intelligente ffmpeg',
      'Contenuti pedagogicamente validi',
      'Tracciamento progressi',
      'Offline-ready'
    ],
    metrics: [
      { label: 'Compatibilità LMS', value: '100%', color: 'text-green-400' },
      { label: 'Agenti AI', value: '5', color: 'text-primary-400' },
      { label: 'Corsi creati', value: '2+', color: 'text-primary-400' },
      { label: 'Standard', value: 'SCORM 1.2', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: null,
    testimonial: null
  },
  {
    id: 4,
    slug: 'host-reservation-panel',
    title: 'Host Reservation Panel',
    category: 'Property Management',
    tagline: 'AI Analytics per Airbnb/Booking.com',
    description: 'Piattaforma di analytics intelligente per gestione prenotazioni multi-piattaforma con AI forecasting e report automatici.',
    longDescription: `
      <p class="mb-4">Dashboard completa per analisi e gestione prenotazioni Airbnb e Booking.com, con previsioni AI e insights automatici.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Funzionalità Core</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Estrazione dati multi-formato (CSV, immagini, PDF)</li>
        <li>AI-powered OCR con Gemini per parsing automatico</li>
        <li>Dashboard analytics con grafici interattivi real-time</li>
        <li>Previsioni AI con market forecasting e pricing strategy</li>
        <li>Analisi finanziaria: commissioni, tasse (21%), guadagni netti</li>
        <li>Report PDF automatici con previsioni integrate</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Multi-Vista Avanzata</h3>
      <p class="mb-4">Navigazione fluida tra Dashboard, Analytics, Prenotazioni e Forecasting con chat AI assistant per insights personalizzati.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Metriche Calcolate</h3>
      <p class="mb-4">Tasso occupazione, revenue per notte, commissioni totali, guadagni netti pre/post tasse, gestione stati (OK, Cancellata, No-show).</p>
    `,
    technologies: ['React 19', 'TypeScript', 'Vite 6', 'Google Gemini AI', 'jsPDF', 'jsPDF-AutoTable', 'Tailwind CSS'],
    features: [
      'Estrazione multi-formato (CSV, IMG, PDF)',
      'AI OCR con Gemini',
      'Dashboard real-time',
      'Market forecasting AI',
      'Analisi finanziaria completa',
      'Report PDF automatici',
      'AI Chat Assistant',
      'Multi-piattaforma (Airbnb + Booking)',
      'Responsive design'
    ],
    metrics: [
      { label: 'Piattaforme supportate', value: '2', color: 'text-primary-400' },
      { label: 'Formati input', value: '3 tipi', color: 'text-primary-400' },
      { label: 'Viste dashboard', value: '4', color: 'text-green-400' },
      { label: 'Automation', value: '100%', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://ai.studio/apps/drive/182CA3lBr5-9E7JY0vZ49aJt3b6XxM3Kz',
    testimonial: null
  },
  {
    id: 5,
    slug: 'roma-caput-mundi-apartment',
    title: 'Roma Caput Mundi Apartment',
    category: 'Hospitality',
    tagline: 'Luxury Tourist Rental Landing Page',
    description: 'Landing page moderna per appartamento turistico di lusso a Roma, progettata per incentivare prenotazioni dirette bypassando OTA.',
    longDescription: `
      <p class="mb-4">Single-page application completa per promuovere un appartamento turistico di lusso nel quartiere Balduina di Roma, ottimizzata per conversioni dirette.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Features Principali</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Hero section con call-to-action prominente</li>
        <li>Sezione servizi con icone e descrizioni dettagliate</li>
        <li>Galleria fotografica interattiva con lightbox</li>
        <li>Recensioni clienti soddisfatti</li>
        <li>Form contatto con integrazione Firebase</li>
        <li>Admin area per gestione prenotazioni</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Privacy e GDPR</h3>
      <p class="mb-4">Cookie banner conforme normative, Privacy Policy completa in italiano, gestione consensi utente, sicurezza dati con Firebase.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">SEO e Performance</h3>
      <p class="mb-4">Meta tags ottimizzati, structured data per Google, immagini ottimizzate, font preloading, smooth scrolling e animazioni.</p>
    `,
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Vue Router', 'Vite'],
    features: [
      'Landing page moderna responsive',
      'Form contatto Firebase',
      'Admin dashboard prenotazioni',
      'GDPR compliant',
      'SEO ottimizzato',
      'Galleria interattiva',
      'Cookie banner',
      'Privacy Policy completa'
    ],
    metrics: [
      { label: 'Performance score', value: '95/100', color: 'text-green-400' },
      { label: 'Mobile optimized', value: '100%', color: 'text-green-400' },
      { label: 'GDPR compliant', value: '100%', color: 'text-primary-400' },
      { label: 'Conversion focus', value: 'High', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'http://www.romacaputmundiapt.it',
    testimonial: null
  },
  {
    id: 6,
    slug: 'custom-gpt-social-media',
    title: 'Custom GPT Social Media Manager',
    category: 'AI Automation',
    tagline: 'Automazione Social per Roma Caput Mundi',
    description: 'Sistema Custom GPT per automazione completa social media, ottimizzato per aumentare prenotazioni dirette di case vacanze.',
    longDescription: `
      <p class="mb-4">Custom GPT specializzato che genera contenuti Facebook strategici per casa vacanze Roma Caput Mundi, zona Balduina.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Obiettivi Business</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Occupancy Rate: da 64% a 75%</li>
        <li>Direct Bookings: da 0% a 25%</li>
        <li>Revenue Growth: +22% - +73% potenziale annuo</li>
        <li>Content Output: 15-20 post strategici/mese</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Content Strategy</h3>
      <p class="mb-4">Brand voice "Local Roman friend", 15+ anni expertise Balduina. Mix: 40% local tips, 25% property, 20% offers, 15% social proof. Hashtag optimization local + broad reach.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">ROI</h3>
      <p class="mb-4">Time saving: da 4h/settimana a automazione completa. Break-even: 2-3 prenotazioni extra/mese. Commission savings: €400-500/mese.</p>
    `,
    technologies: ['Custom GPT', 'OpenAI', 'Knowledge Base', 'Facebook Marketing'],
    features: [
      'Brand voice "Local Roman friend"',
      'Local expertise 15+ anni',
      'Seasonal intelligence eventi Roma',
      'Content calendar automatico',
      'Hashtag optimization',
      'Knowledge base completa',
      'Tutorial integrato',
      'Performance tracking'
    ],
    metrics: [
      { label: 'Time saved', value: '4h/week', color: 'text-green-400' },
      { label: 'Post/mese', value: '15-20', color: 'text-primary-400' },
      { label: 'Target occupancy', value: '75%', color: 'text-primary-400' },
      { label: 'Commission savings', value: '€500/mo', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: null,
    testimonial: null
  },
  {
    id: 7,
    slug: 'agentic-workflow-architect',
    title: 'Agentic Workflow Architect',
    category: 'AI',
    tagline: 'AI Multi-Agent System Designer',
    description: 'Web app per design rapido di sistemi multi-agente AI complessi da scenario in linguaggio naturale con Gemini.',
    longDescription: `
      <p class="mb-4">Applicazione web potente per concettualizzare e progettare sistemi AI multi-agente partendo da scenario in linguaggio naturale.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Workflow Completo</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>User input: scenario + numero agenti desiderati</li>
        <li>Meta-prompt costruito automaticamente</li>
        <li>Gemini AI analizza e genera agenti specializzati</li>
        <li>Output JSON strutturato con definizioni complete</li>
        <li>Rendering UI interattivo per editing</li>
        <li>Copy & download (Markdown, terminal-safe)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Features Avanzate</h3>
      <p class="mb-4">Numero agenti personalizzabile, generazione automatica nome/descrizione/prompt per ogni agente, execution prompt unificato, esempi pre-built, salvataggio custom localStorage.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Target</h3>
      <p class="mb-4">Developers, prompt engineers, system designers che vogliono prototipare rapidamente workflow agent-based complessi.</p>
    `,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API'],
    features: [
      'Input scenario naturale',
      'Numero agenti custom',
      'Generazione agenti specializzati',
      'Execution prompt orchestrazione',
      'UI interattiva editing real-time',
      'Copy & download Markdown',
      'Terminal-safe output',
      'Esempi pre-built + custom'
    ],
    metrics: [
      { label: 'Agent generation', value: 'Auto', color: 'text-green-400' },
      { label: 'Output format', value: 'JSON', color: 'text-primary-400' },
      { label: 'Customization', value: '100%', color: 'text-green-400' },
      { label: 'Templates', value: 'Built-in', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: null,
    testimonial: null
  },
  {
    id: 8,
    slug: 'generatore-prompt-craft',
    title: 'Generatore Prompt C.R.A.F.T.',
    category: 'AI',
    tagline: 'AI Prompt Engineering Tool con Framework C.R.A.F.T.',
    description: 'Web app React per generare prompt strutturati usando framework C.R.A.F.T. (Contesto, Ruolo, Azione, Formato, Target) con Gemini AI.',
    longDescription: `
      <p class="mb-4">Applicazione web per generazione rapida di prompt professionali strutturati secondo il framework C.R.A.F.T. validato.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Framework C.R.A.F.T.</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Contesto:</strong> Background della situazione</li>
        <li><strong>Ruolo:</strong> Persona/entità che agisce</li>
        <li><strong>Azione:</strong> Attività specifica da compiere</li>
        <li><strong>Formato:</strong> Struttura output desiderato</li>
        <li><strong>Target:</strong> Pubblico destinatario</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Features</h3>
      <p class="mb-4">Interfaccia 3D con animazioni, suggerimenti dinamici rotanti ogni 10 sec, tutorial integrato, tema scuro, responsive design, test prompt generati.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Workflow</h3>
      <p class="mb-4">Input argomento → Gemini genera prompt C.R.A.F.T. strutturato → Visualizzazione componenti → Test e refine.</p>
    `,
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Google Gemini API'],
    features: [
      'Framework C.R.A.F.T. validato',
      'Interfaccia 3D animata',
      'Suggerimenti dinamici',
      'Tutorial interattivo',
      'Tema scuro',
      'Design responsive',
      'Test prompt integrato',
      'Gemini AI powered'
    ],
    metrics: [
      { label: 'Framework', value: 'C.R.A.F.T.', color: 'text-primary-400' },
      { label: 'Components', value: '5', color: 'text-primary-400' },
      { label: 'Animation', value: '3D', color: 'text-green-400' },
      { label: 'AI Engine', value: 'Gemini', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/generatore-di-prompt-craft',
    testimonial: null
  },
  {
    id: 9,
    slug: 'team-dev-agents',
    title: 'Team Dev Agents',
    category: 'AI',
    tagline: 'Multi-Agent AI Development Team',
    description: 'Sistema multi-agente AI per analisi completa progetti SaaS con 5 agenti specializzati che lavorano in parallelo.',
    longDescription: `
      <p class="mb-4">Sistema di analisi progetto SaaS basato su 5 agenti AI specializzati che forniscono insights completi in ~5 minuti di esecuzione parallela.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">5 Agenti Specializzati</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>SaaS Architect:</strong> Architettura, scalabilità, tech stack</li>
        <li><strong>UI/UX Designer:</strong> Analisi UX, design recommendations</li>
        <li><strong>Backend Lead Engineer:</strong> API, database, integrations</li>
        <li><strong>Frontend Lead Engineer:</strong> Component architecture, frontend strategy</li>
        <li><strong>Development Team Lead:</strong> Roadmap, GTM, business analysis</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Case Study: Ospitly</h3>
      <p class="mb-4">Analisi completa generata: 94-page architecture + 20-page UX + 18-page backend + 17-page frontend + 79-page strategic plan. Market €13.6B by 2028, Investment €660K Year 1, Success probability 70-80%.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Future: DevTeam.AI SaaS</h3>
      <p class="mb-4">Web app con form input, auto agent execution, interactive dashboard, PDF export, AI chat. Pricing: Free → $49 → $149 → $399/mo.</p>
    `,
    technologies: ['Claude Code', 'Claude Sonnet 4', 'Markdown', 'Multi-Agent Architecture'],
    features: [
      'Parallel execution (5 min totali)',
      'Real project analysis',
      'Comprehensive reports',
      'Italian market expertise',
      'Actionable roadmaps',
      'Cost estimates',
      'Live websites + GitHub analysis',
      'GDPR compliance insights'
    ],
    metrics: [
      { label: 'Agenti AI', value: '5', color: 'text-primary-400' },
      { label: 'Execution time', value: '~5 min', color: 'text-green-400' },
      { label: 'Report pages', value: '200+', color: 'text-green-400' },
      { label: 'Success rate', value: '70-80%', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/team-dev-agents',
    testimonial: null
  },
  {
    id: 10,
    slug: 'projectflow',
    title: 'ProjectFlow',
    category: 'Project Management',
    tagline: 'Advanced Project Management Platform',
    description: 'Piattaforma completa di project management con task tracking, goal setting, calendar e workflow automation per team development.',
    longDescription: `
      <p class="mb-4">Applicazione moderna per organizzazione e tracking progetti development con funzionalità avanzate di automazione workflow.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Core Functionality</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Project Management: creazione, organizzazione, task tracking dettagliato</li>
        <li>Smart Dashboard: analytics real-time con visualizzazioni</li>
        <li>Task System: priorità, assegnazioni, due dates</li>
        <li>Goal Setting: obiettivi business/technical/personal con milestones</li>
        <li>Calendar: visual calendar con deadlines</li>
        <li>Workflow Automation: triggers e actions intelligenti</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Design & UX</h3>
      <p class="mb-4">Dark/Light mode con system preference, design responsive ottimizzato desktop/tablet/mobile, sidebar collapsabile, animazioni smooth.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Technical Features</h3>
      <p class="mb-4">Real-time updates con Firebase, TypeScript per type safety, component architecture modulare, state management con context, performance ottimizzata.</p>
    `,
    technologies: ['React 18', 'TypeScript', 'Vite', 'Firebase Firestore', 'Firebase Auth', 'Tailwind CSS', 'Lucide React'],
    features: [
      'Project & task management',
      'Smart dashboard analytics',
      'Goal tracking con milestones',
      'Visual calendar',
      'Workflow automation',
      'Dark/Light mode',
      'Real-time sync Firebase',
      'Responsive design'
    ],
    metrics: [
      { label: 'Real-time sync', value: '100%', color: 'text-green-400' },
      { label: 'Theme modes', value: '2+', color: 'text-primary-400' },
      { label: 'Automation', value: 'Yes', color: 'text-green-400' },
      { label: 'Type safety', value: 'Full', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/app-gestione-progetti',
    testimonial: null
  },
  {
    id: 11,
    slug: 'sellsnap',
    title: 'SellSnap',
    category: 'AI',
    tagline: 'Perizie Intelligenti AI per Mercato dell\'Usato',
    description: 'App web AI che fornisce perizie professionali istantanee per oggetti seconda mano con valutazione prezzo e campi pre-compilati per vendita.',
    longDescription: `
      <p class="mb-4">Applicazione web che utilizza Gemini AI per fornire perizie istantanee di oggetti di seconda mano con analisi completa.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Analisi AI Multidisciplinare</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Antiquariato & Modernariato</li>
        <li>Mobili & Arredamento</li>
        <li>Arte & Collezionabili</li>
        <li>Elettronica & Hi-Fi</li>
        <li>Moda & Accessori</li>
        <li>Strumenti Musicali</li>
        <li>Libri & Vinili</li>
        <li>Orologi & Gioielli</li>
        <li>Utensili & Attrezzature</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Features Avanzate</h3>
      <p class="mb-4">Valutazione prezzo con ricerca web, controlli anti-contraffazione, rilevamento oggetti vietati/pericolosi, campi pre-compilati per Vinted/eBay/Subito.it, chat interattiva per approfondimenti.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Workflow</h3>
      <p class="mb-4">Upload foto → Analisi Gemini 2.5 Flash → Perizia JSON (categoria, condizione, prezzo, dettagli) → Chat follow-up.</p>
    `,
    technologies: ['React 19', 'TypeScript', 'Vite', 'Google Gemini 2.5 Flash API', 'Tailwind CSS'],
    features: [
      'Analisi 9+ categorie prodotti',
      'Valutazione prezzo AI',
      'Anti-contraffazione',
      'Rilevamento oggetti pericolosi',
      'Campi Vinted/eBay/Subito',
      'Chat interattiva',
      'Responsive design',
      'Validazione anti-allucinazioni'
    ],
    metrics: [
      { label: 'Categorie supportate', value: '9+', color: 'text-primary-400' },
      { label: 'Piattaforme vendita', value: '3', color: 'text-primary-400' },
      { label: 'AI accuracy', value: 'High', color: 'text-green-400' },
      { label: 'Time to appraisal', value: '<10s', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://sellsnap.vercel.app/',
    testimonial: null
  },
  {
    id: 12,
    slug: 'remember-me',
    title: 'Remember Me',
    category: 'Productivity',
    tagline: 'Voice Reminders AI',
    description: 'App web che trasforma promemoria vocali in reminders strutturati usando AI, con Web Speech API e Gemini.',
    longDescription: `
      <p class="mb-4">Applicazione moderna che converte i tuoi promemoria vocali in reminders organizzati utilizzando intelligenza artificiale.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Features Principali</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Voice-to-text con Web Speech API browser</li>
        <li>AI processing: Gemini estrae titolo, descrizione, data, ora</li>
        <li>Privacy-first: API key solo in memoria sessione</li>
        <li>Persistenza locale con localStorage browser</li>
        <li>Integrazione calendario: aggiungi eventi</li>
        <li>Interfaccia moderna con Tailwind CSS</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Workflow Semplice</h3>
      <p class="mb-4">Configura API key (.env o sidebar) → Registra voce (es: "Ricordami di chiamare il dottore domani alle 3") → AI processa e struttura → Visualizza/gestisci reminders cronologici → Aggiungi a calendario.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Sicurezza</h3>
      <p class="mb-4">API key non salvata permanentemente, dati solo localStorage, open source verificabile.</p>
    `,
    technologies: ['React 19', 'TypeScript', 'Vite', 'Google Gemini AI', 'Web Speech API', 'Tailwind CSS'],
    features: [
      'Voice-to-text browser',
      'AI processing Gemini',
      'Privacy-first (memoria sessione)',
      'localStorage persistence',
      'Calendario integration',
      'Organizzazione cronologica',
      'Interfaccia moderna',
      'Open source'
    ],
    metrics: [
      { label: 'Voice recognition', value: 'Native', color: 'text-green-400' },
      { label: 'AI extraction', value: 'Auto', color: 'text-green-400' },
      { label: 'Privacy', value: 'Local', color: 'text-primary-400' },
      { label: 'Calendar sync', value: 'Yes', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/remember-me',
    testimonial: null
  },
  {
    id: 13,
    slug: 'tassa-soggiorno-calculator',
    title: 'Calcolatore Tassa di Soggiorno',
    category: 'Hospitality',
    tagline: 'Tax Compliance Tool per Strutture Ricettive Roma',
    description: 'App Streamlit per calcolo automatico tasse di soggiorno conformi normativa Comune di Roma con dashboard web e export CSV.',
    longDescription: `
      <p class="mb-4">Sistema professionale di calcolo automatico tasse di soggiorno per strutture ricettive a Roma, conforme alle normative comunali.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Features Core</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Calcolo automatico: elaborazione prenotazioni → tasse dovute</li>
        <li>Dashboard web Streamlit real-time</li>
        <li>Configurazione flessibile: tariffe, tipo struttura, parametri</li>
        <li>Gestione completa: adulti, bambini, esenzioni età</li>
        <li>Report dettagliati: riepilogo mensile + export CSV</li>
        <li>Conformità normativa: regole ufficiali Comune di Roma</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Regole di Calcolo</h3>
      <p class="mb-4">Tassa = (Adulti + Bambini ≥10 anni) × Notti × Tariffa. Massimo 10 notti tassabili. Esenzione bambini <10 anni. Stati: OK, Cancellata, Mancata presentazione.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Tariffe Roma 2024</h3>
      <p class="mb-4">5★: €7/notte, 4★: €6/notte, 3★: €4/notte, 2★: €3/notte, 1★: €2/notte, Case vacanze: €6/notte, B&B: €2/notte.</p>
    `,
    technologies: ['Python 3.7+', 'Streamlit', 'Pandas'],
    features: [
      'Calcolo automatico tasse',
      'Dashboard web interattiva',
      'Configurazione flessibile',
      'Gestione esenzioni',
      'Riepilogo mensile',
      'Export CSV',
      'Conformità normativa',
      'Supporto multi-struttura'
    ],
    metrics: [
      { label: 'Automation', value: '100%', color: 'text-green-400' },
      { label: 'Compliance', value: 'Roma 2024', color: 'text-green-400' },
      { label: 'Export format', value: 'CSV', color: 'text-primary-400' },
      { label: 'Real-time', value: 'Yes', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://tassa-soggiorno-calculator.vercel.app/',
    testimonial: null
  },
  {
    id: 14,
    slug: 'ffmpeg-converter',
    title: 'FFMPEG Converter and Audio Generator',
    category: 'AI Tool',
    tagline: 'Conversione multimediale e generazione audio AI-powered',
    description: 'Applicazione Flask per convertire file multimediali con FFmpeg e generare audio da testo con Google TTS e fallback offline.',
    longDescription: `
      <p class="mb-4">FFMPEG Converter è un'applicazione web Flask che combina la potenza di FFmpeg per la conversione multimediale con tecnologie AI per la generazione audio da testo.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Funzionalità Principali</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Conversione Multimediale:</strong> Upload e conversione di file video/audio in formati standard (MP4, MP3, ecc.)</li>
        <li><strong>Generazione Audio da Testo:</strong> Utilizzo di Google Text-to-Speech (gTTS) con fallback offline tramite pyttsx3</li>
        <li><strong>Download Diretto:</strong> Scarica i file convertiti o generati direttamente dal browser</li>
        <li><strong>API RESTful:</strong> Endpoints completi per tutte le operazioni</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Architettura</h3>
      <p class="mb-4">Applicazione modulare con:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Upload folder per file caricati</li>
        <li>Converted folder per output</li>
        <li>Ambiente virtuale Python isolato</li>
        <li>FFmpeg integrato nel PATH</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">API Endpoints</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>POST /upload:</strong> Caricamento file</li>
        <li><strong>POST /convert:</strong> Conversione con parametri personalizzabili</li>
        <li><strong>POST /generate_audio:</strong> Generazione audio da testo con supporto multilingua</li>
        <li><strong>GET /download/&lt;filename&gt;:</strong> Download file processati</li>
      </ul>
    `,
    technologies: ['Python 3.8+', 'Flask', 'FFmpeg', 'gTTS', 'pyttsx3'],
    features: [
      'Upload file multimediali',
      'Conversione formati con FFmpeg',
      'Generazione audio da testo (gTTS)',
      'Fallback offline (pyttsx3)',
      'Download diretto browser',
      'API RESTful completa',
      'Supporto multilingua',
      'Configurazione flessibile output'
    ],
    metrics: [
      { label: 'Formati supportati', value: 'Multi', color: 'text-green-400' },
      { label: 'TTS Engine', value: 'Google + Offline', color: 'text-green-400' },
      { label: 'API Endpoints', value: '4+', color: 'text-primary-400' },
      { label: 'Python Version', value: '3.8+', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Completed',
    link: 'https://github.com/fracabu/ffmpeg_converter_project',
    testimonial: null
  },
  {
    id: 15,
    slug: 'cyber-anomaly-shield',
    title: 'Cyber Anomaly Shield',
    category: 'Cybersecurity',
    tagline: 'Sistema ML per Rilevamento Anomalie in Traffico HTTP',
    description: 'Sistema avanzato di rilevamento anomalie per la sicurezza informatica, che utilizza machine learning per identificare pattern sospetti nel traffico HTTP.',
    longDescription: `
      <p class="mb-4">Cyber Anomaly Shield è un sistema intelligente di rilevamento anomalie basato su machine learning, progettato per identificare pattern sospetti nel traffico HTTP e prevenire minacce alla sicurezza informatica.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Dashboard Interattivo</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Monitoraggio Real-time:</strong> Metriche chiave di sicurezza aggiornate in tempo reale</li>
        <li><strong>Visualizzazioni Interattive:</strong> Grafici dinamici per trend temporali e analisi statistica</li>
        <li><strong>Analisi Pattern:</strong> Distribuzione richieste, pattern traffico, hot-spot anomalie</li>
        <li><strong>Export Report:</strong> Generazione report dettagliati per audit di sicurezza</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Training Modelli ML</h3>
      <p class="mb-4">Sistema multi-modello con opzioni configurabili:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Random Forest:</strong> Ensemble learning per alta accuracy</li>
        <li><strong>Isolation Forest:</strong> Specializzato in rilevamento outlier</li>
        <li><strong>Modello Ibrido:</strong> Combinazione dei due approcci per massima precisione</li>
        <li>Configurazione iperparametri, bilanciamento classi, dimensione test set</li>
        <li>Metriche complete: Accuracy, Precision, Recall, ROC/PR curves, matrice confusione</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Dataset Originale</h3>
      <p class="mb-4">Dataset proprietario pubblicato su Kaggle "HTTP Log Anomaly Detection" con 10,000 record simulati. Features: Timestamp, IP Address, Request Type (GET/POST/PUT/DELETE), Status Code, Anomaly Flag, User Agent, Session ID, Location.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Rilevamento Live</h3>
      <p class="mb-4">Analisi in tempo reale con valutazione immediata, score di rischio, alert configurabili, grafici interattivi e dettagli anomalie per risposta rapida agli incidenti.</p>
    `,
    technologies: ['Python 3.9', 'Streamlit', 'scikit-learn', 'Random Forest', 'Isolation Forest', 'Pandas', 'Matplotlib'],
    features: [
      'Dashboard real-time interattivo',
      '3 modelli ML (Random Forest, Isolation Forest, Ibrido)',
      'Dataset originale 10K record su Kaggle',
      'Analisi pattern traffico HTTP',
      'Rilevamento anomalie live',
      'Alert configurabili',
      'Metriche performance complete',
      'Export report sicurezza',
      'Visualizzazioni avanzate'
    ],
    metrics: [
      { label: 'Dataset size', value: '10K records', color: 'text-primary-400' },
      { label: 'ML Models', value: '3 types', color: 'text-green-400' },
      { label: 'Features', value: '8', color: 'text-primary-400' },
      { label: 'Detection', value: 'Real-time', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/generate-dataset',
    testimonial: null
  },
  {
    id: 16,
    slug: 'logistics-tracking-dashboard',
    title: 'Logistics Tracking Dashboard',
    category: 'Analytics',
    tagline: 'Dashboard Interattiva per Analisi Dati Logistici con ML',
    description: 'Dashboard Streamlit multi-versione per monitoraggio e analisi dati logistici con 3 livelli di funzionalità (Basic, Standard, Premium) e previsioni ML.',
    longDescription: `
      <p class="mb-4">Dashboard interattiva professionale per il monitoraggio completo delle operazioni logistiche, disponibile in tre versioni scalabili per adattarsi a diverse esigenze aziendali.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Tre Versioni Scalabili</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Basic Version:</strong> Caricamento CSV, filtri essenziali (data, veicolo), KPI fondamentali (prenotazioni, distanza totale/media), Top 10 materiali, trend temporale, tabella prime 100 righe</li>
        <li><strong>Standard Version:</strong> Tutte le funzionalità Basic + filtri avanzati materiali, mappa logistica base, KPI estesi, analisi materiali approfondita, trend analysis migliorata, tabella dati completa</li>
        <li><strong>Premium Version:</strong> Tutte le funzionalità Standard + Machine Learning per previsioni, mappa logistica avanzata con rotte, analisi performance approfondita, feature importance analysis, metriche predittive, dashboard multi-tab</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Funzionalità Avanzate Premium</h3>
      <p class="mb-4">La versione Premium integra:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Machine Learning con Scikit-learn per forecasting operazioni</li>
        <li>Mappe interattive Plotly con visualizzazione rotte logistiche</li>
        <li>Analisi performance veicoli e materiali</li>
        <li>Feature importance per ottimizzazione operativa</li>
        <li>Dashboard multi-tab per analisi segmentate</li>
        <li>KPI predittivi per pianificazione strategica</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Formato Dati & Integrazione</h3>
      <p class="mb-4">Sistema compatibile con CSV contenente: BookingID, BookingID_Date, Origin/Destination Location, vehicleType, Material Shipped, Transportation Distance, coordinate geografiche. Supporto per analisi temporale, spaziale e predittiva completa.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Visualizzazioni Interattive</h3>
      <p class="mb-4">Mappe rotte interattive, grafici temporali trend, analisi distribuzione materiali, statistiche performance veicoli, KPI logistici real-time con filtri dinamici su date, località, veicoli e materiali.</p>
    `,
    technologies: ['Python 3.8+', 'Streamlit', 'Plotly', 'Pandas', 'scikit-learn', 'NumPy', 'Statsmodels'],
    features: [
      '3 versioni scalabili (Basic, Standard, Premium)',
      'Machine Learning forecasting (Premium)',
      'Mappe logistiche interattive con rotte',
      'KPI dashboard real-time',
      'Analisi performance multi-dimensionale',
      'Filtri avanzati dinamici',
      'Trend analysis temporale',
      'Feature importance ML',
      'Export dati CSV',
      'Dashboard multi-tab'
    ],
    metrics: [
      { label: 'Versioni', value: '3 tiers', color: 'text-primary-400' },
      { label: 'ML Forecasting', value: 'Yes', color: 'text-green-400' },
      { label: 'Interactive maps', value: 'Plotly', color: 'text-green-400' },
      { label: 'Data formats', value: 'CSV', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/logistic-data-dash',
    testimonial: null
  },
  {
    id: 17,
    slug: 'retail-sales-dashboard',
    title: 'Retail Sales Analytics Dashboard',
    category: 'Analytics',
    tagline: 'Dashboard Premium per Analisi Vendite Retail con ML Forecasting',
    description: 'Dashboard Streamlit avanzata per analizzare vendite retail, esplorare insights e prevedere tendenze future con Machine Learning e analisi stagionale.',
    longDescription: `
      <p class="mb-4">Dashboard analytics completa per il settore retail, progettata per fornire insights avanzati sulle vendite e previsioni accurate attraverso tecniche di Machine Learning e analisi statistica approfondita.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Dashboard Principale</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Caricamento Dati Flessibile:</strong> Upload CSV personalizzato o utilizzo dataset di esempio predefinito</li>
        <li><strong>Filtri Avanzati:</strong> Intervallo date, categorie prodotto, genere cliente, fasce d'età</li>
        <li><strong>KPI Real-time:</strong> Vendite totali, numero ordini, valore medio ordine, clienti unici</li>
        <li><strong>Grafici Interattivi:</strong> Vendite per categoria, distribuzione per genere, trend giornalieri, analisi demografica</li>
        <li><strong>Tabella Transazioni:</strong> Dettagli completi con dati filtrati in tempo reale</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Analisi Avanzate</h3>
      <p class="mb-4">Strumenti statistici professionali per insights approfonditi:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Decomposizione Stagionale:</strong> Analisi trend, pattern stagionali e componenti residue</li>
        <li><strong>Matrice Correlazione:</strong> Identificazione relazioni tra variabili numeriche per decision making</li>
        <li><strong>Analisi Fasce d'Età:</strong> Spesa media, numero transazioni e vendite totali per segmento demografico</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Machine Learning Forecasting</h3>
      <p class="mb-4">Sistema predittivo basato su regressione lineare con metriche complete: R² (coefficiente determinazione), MSE (errore quadratico medio). Visualizzazioni dati storici vs previsioni future per pianificazione strategica.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Integrazione API & Customization</h3>
      <p class="mb-4">Configurazione chiavi API ed endpoint per sincronizzazione/export dati. Documentazione API integrata. Personalizzazione UI completa: tema (Light/Dark/System), valuta, lingua, formato data, stile grafici, aggiornamento automatico configurabile.</p>
    `,
    technologies: ['Python 3.8+', 'Streamlit', 'Plotly', 'Pandas', 'scikit-learn', 'Statsmodels', 'NumPy'],
    features: [
      '3 versioni (Basic, Standard, Premium)',
      'ML Forecasting con regressione lineare',
      'Decomposizione stagionale avanzata',
      'Matrice correlazione variabili',
      'Analisi demografica fasce età',
      'KPI dashboard real-time',
      'Filtri multi-dimensionali',
      'Integrazione API completa',
      'UI personalizzabile (tema, lingua, valuta)',
      'Dataset esempio incluso'
    ],
    metrics: [
      { label: 'Versioni', value: '3 tiers', color: 'text-primary-400' },
      { label: 'ML Model', value: 'Linear Reg', color: 'text-green-400' },
      { label: 'API Integration', value: 'Yes', color: 'text-green-400' },
      { label: 'Themes', value: '3', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/retail-sales-dash',
    testimonial: null
  },
  {
    id: 18,
    slug: 'finance-analytics-dashboard',
    title: 'Advanced Finance Analytics Dashboard',
    category: 'Finance',
    tagline: 'Piattaforma Completa di Analisi Finanziaria con TA-Lib e Risk Management',
    description: 'Dashboard Streamlit avanzata per analisi finanziaria completa con indicatori tecnici (RSI, MACD, Bollinger), risk analytics (VaR, Maximum Drawdown), portfolio analysis e API integration.',
    longDescription: `
      <p class="mb-4">Piattaforma professionale di analisi finanziaria costruita con Streamlit, che offre capacità avanzate di data analysis, indicatori tecnici professionali, strumenti di gestione del rischio e analisi di portafoglio.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Dashboard Principale</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Multi-format Support:</strong> Upload dati finanziari in CSV, Excel, JSON con parsing automatico</li>
        <li><strong>Filtri Avanzati:</strong> Intervallo date, simboli multi-asset, filtraggio dinamico real-time</li>
        <li><strong>KPI Finanziari:</strong> Total rows, volume totale, volatilità, Sharpe ratio, rendimento giornaliero medio</li>
        <li><strong>Visualizzazioni Professionali:</strong> Candlestick charts, overlay SMA/EMA, volume analysis</li>
        <li><strong>Export Flessibile:</strong> Esportazione dataset filtrati in CSV, Excel o JSON</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Advanced Analytics</h3>
      <p class="mb-4">Strumenti statistici e machine learning per insights approfonditi:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Correlation Heatmap:</strong> Matrice correlazione asset per diversificazione portafoglio</li>
        <li><strong>PCA Analysis:</strong> Principal Component Analysis per riduzione dimensionalità</li>
        <li><strong>K-Means Clustering:</strong> Raggruppamento asset basato su prezzo e volume</li>
        <li><strong>Linear Regression:</strong> Analisi trend e previsioni future di prezzo</li>
        <li>Statistical summaries completi (media, mediana, deviazione standard)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Technical Analysis con TA-Lib</h3>
      <p class="mb-4">Indicatori tecnici professionali con parametri personalizzabili:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>RSI:</strong> Relative Strength Index per identificare condizioni overbought/oversold</li>
        <li><strong>MACD:</strong> Moving Average Convergence Divergence per segnali trend</li>
        <li><strong>Bollinger Bands:</strong> Bande di volatilità per identificare breakout</li>
        <li>Parametri configurabili per ogni indicatore (periodi, deviazioni, ecc.)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Risk Analytics & Portfolio Management</h3>
      <p class="mb-4">Sistema completo di gestione rischio e analisi portafoglio:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Risk Metrics:</strong> VaR (Value at Risk), Expected Shortfall, Maximum Drawdown</li>
        <li><strong>Statistical Analysis:</strong> Curtosi, asimmetria, distribuzione rendimenti</li>
        <li><strong>Portfolio Analysis:</strong> Matrice correlazione, rendimenti annuali, volatilità</li>
        <li><strong>Performance Tracking:</strong> Cumulative returns, risk-return scatter plots</li>
        <li>Analisi drawdown storici con visualizzazioni dettagliate</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">API Integration & Settings</h3>
      <p class="mb-4">Integrazione API completa con endpoint per Market Summary, Technical Indicators, Historical Data, Synthetic Data generation. Personalizzazione completa: chart themes, dimensioni, anomaly detection thresholds, data handling methods. Auto-refresh configurabile e salvataggio preferenze sessione.</p>
    `,
    technologies: ['Python 3.8+', 'Streamlit', 'Plotly', 'TA-Lib', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    features: [
      'Multi-format data support (CSV, Excel, JSON)',
      'Technical indicators (RSI, MACD, Bollinger)',
      'Risk metrics (VaR, Expected Shortfall, Max Drawdown)',
      'Advanced analytics (PCA, K-Means, Linear Regression)',
      'Portfolio correlation & performance analysis',
      'Candlestick charts con SMA/EMA overlay',
      'API integration completa',
      'Customizable chart themes',
      'Anomaly detection configurabile',
      'Export multi-format'
    ],
    metrics: [
      { label: 'Technical Indicators', value: '3+', color: 'text-green-400' },
      { label: 'Risk Metrics', value: 'VaR/ES/MDD', color: 'text-green-400' },
      { label: 'ML Models', value: 'PCA/K-Means', color: 'text-primary-400' },
      { label: 'Data Formats', value: '3', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/finance-data-dashboard',
    testimonial: null
  },
  {
    id: 19,
    slug: 'sales-data-api',
    title: 'Sales Data API',
    category: 'API',
    tagline: 'API Flask per Generazione Dati Vendita Simulati su Render',
    description: 'API RESTful deployata su Render per generazione dataset vendite simulati in JSON, con supporto fino a 100K record per testing e sviluppo.',
    longDescription: `
      <p class="mb-4">API Flask professionale per la generazione on-demand di dataset di vendite simulati, ideale per testing, sviluppo, demo e prototipazione rapida di applicazioni data-driven.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Endpoint API</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Base URL:</strong> https://sales-data-api.onrender.com</li>
        <li><strong>Endpoint Principale:</strong> GET /generate-sales?num_records={number}</li>
        <li><strong>Parametri Query:</strong> num_records (opzionale, default: 1000, max: 100,000)</li>
        <li><strong>Response Format:</strong> JSON array con oggetti strutturati</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Struttura Dati Generati</h3>
      <p class="mb-4">Ogni record contiene campi realistici per analisi vendite complete:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>ID:</strong> Identificativo univoco progressivo</li>
        <li><strong>Date:</strong> Data casuale nell'ultimo anno (formato YYYY-MM-DD)</li>
        <li><strong>Product:</strong> Prodotto venduto (Laptop, Smartphone, Tablet, Headphones, ecc.)</li>
        <li><strong>Region:</strong> Regione geografica (North, South, East, West)</li>
        <li><strong>Sales:</strong> Valore vendite in USD (range 100-1000)</li>
        <li><strong>Profit:</strong> Profitto netto in USD (range 10-200)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Use Cases</h3>
      <p class="mb-4">Ideale per molteplici scenari di sviluppo e testing:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Testing di dashboard analytics e data visualization</li>
        <li>Prototipazione rapida applicazioni business intelligence</li>
        <li>Demo per clienti con dati realistici ma non sensibili</li>
        <li>Training machine learning models su dataset simulati</li>
        <li>Load testing di pipeline data processing</li>
        <li>Workshop e tutorial su data analysis</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Integrazione & Utilizzo</h3>
      <p class="mb-4">Facile integrazione in Python (requests + pandas), JavaScript (fetch API), o qualsiasi linguaggio con supporto HTTP. Supporto CORS completo per utilizzo da frontend. Response JSON direttamente convertibile in DataFrame pandas o array JavaScript.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Deployment & Limiti</h3>
      <p class="mb-4">Deployata su Render con piano gratuito. Massimo 100,000 record per richiesta. L'istanza può andare in sleep dopo inattività (cold start ~30s prima richiesta). Dati generati casualmente per scopi dimostrativi, non utilizzare per produzione.</p>
    `,
    technologies: ['Python 3.8+', 'Flask', 'Render', 'CORS'],
    features: [
      'API RESTful con endpoint GET',
      'Generazione dataset vendite simulati',
      'Supporto fino a 100K record per richiesta',
      'Output JSON strutturato',
      'Dati realistici (prodotti, regioni, date, valori)',
      'Supporto CORS per frontend integration',
      'Deploy automatico su Render',
      'Facile integrazione Python/JavaScript',
      'Parametri query configurabili',
      'Ideal per testing e prototyping'
    ],
    metrics: [
      { label: 'Max Records', value: '100K', color: 'text-green-400' },
      { label: 'Data Fields', value: '6', color: 'text-primary-400' },
      { label: 'Response', value: 'JSON', color: 'text-green-400' },
      { label: 'CORS', value: 'Enabled', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/finance-data-api',
    testimonial: null
  },
  {
    id: 20,
    slug: 'sales-analytics-dashboard',
    title: 'Advanced Sales Analytics Dashboard',
    category: 'Analytics',
    tagline: 'Comprehensive Analytics Dashboard for Sales Data Visualization',
    description: 'Dashboard completa Streamlit per visualizzare e analizzare dati vendite con analytics avanzate, visualizzazioni interattive e integrazione dati real-time.',
    longDescription: `
      <p class="mb-4">Dashboard analitica professionale costruita con Streamlit che offre capacità di analisi avanzate, visualizzazioni interattive dinamiche e integrazione dati in tempo reale per analisi vendite complete.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Main Dashboard</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Data Upload Interattivo:</strong> Supporto multi-formato (CSV, JSON, Excel) con parsing automatico</li>
        <li><strong>KPI Tracking Real-time:</strong> Monitoraggio metriche chiave con aggiornamento dinamico</li>
        <li><strong>Sistema Filtri Dinamico:</strong> Date range, prodotti, regioni con update automatico visualizzazioni</li>
        <li><strong>Export Multi-formato:</strong> Download dati filtrati in CSV, Excel o JSON</li>
        <li><strong>Visualizzazioni Avanzate:</strong> Sales trends analysis, regional/product performance, distribution analysis</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Advanced Analytics</h3>
      <p class="mb-4">Strumenti analitici professionali per insights approfonditi:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Anomaly Detection:</strong> Rilevamento automatico pattern anomali nelle vendite</li>
        <li><strong>Customer Segmentation:</strong> Analisi segmentazione clienti con clustering</li>
        <li><strong>Seasonal Trend Analysis:</strong> Identificazione pattern stagionali e trend ciclici</li>
        <li><strong>Product Correlation Matrix:</strong> Correlazione tra performance prodotti diversi</li>
        <li><strong>Performance Metrics:</strong> Sales volatility, trend strength, profit margins, growth rates</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Visualizzazioni Interattive</h3>
      <p class="mb-4">Suite completa di visualizzazioni professionali powered by Plotly:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Dashboard 4-in-1 interattiva con overview completa</li>
        <li>Sales heatmap per giorno/ora per identificare peak periods</li>
        <li>Product performance scatter plots per analisi comparativa</li>
        <li>Seasonal analysis charts per pianificazione strategica</li>
        <li>Correlation matrices per relazioni tra variabili</li>
        <li>Supporto zoom, hover tooltips, filtri dinamici, export PNG</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">API Integration</h3>
      <p class="mb-4">Sistema completo di integrazione API per dati esterni: Real-time data fetching, auto-refresh configurabile, supporto autenticazione API, analisi dati immediata post-fetch.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Configurazione & Personalizzazione</h3>
      <p class="mb-4">Theme settings con Light/Dark mode toggle, chart theme selection, animation settings. Analysis settings con anomaly detection threshold configurabile, customer segmentation parameters, data refresh intervals personalizzabili.</p>
    `,
    technologies: ['Python 3.8+', 'Streamlit', 'Pandas', 'Plotly', 'Matplotlib', 'Seaborn', 'scikit-learn', 'scipy', 'openpyxl', 'xlsxwriter'],
    features: [
      'Multi-format data upload (CSV, JSON, Excel)',
      'Real-time KPI tracking',
      'Dynamic filtering system',
      'Advanced visualizations (4-in-1 dashboard)',
      'Anomaly detection in sales patterns',
      'Customer segmentation analysis',
      'Seasonal trend analysis',
      'Product correlation matrix',
      'Sales heatmap by day/hour',
      'Product performance scatter plots',
      'API integration with auto-refresh',
      'Configurable themes (Light/Dark)',
      'Multi-format data export',
      'Chart export as PNG'
    ],
    metrics: [
      { label: 'Data formats', value: '3 types', color: 'text-primary-400' },
      { label: 'Visualizations', value: '4-in-1', color: 'text-green-400' },
      { label: 'Analytics', value: 'Advanced', color: 'text-green-400' },
      { label: 'API Integration', value: 'Yes', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/sales-dashboard',
    testimonial: null
  },
  {
    id: 21,
    slug: 'medical-data-api',
    title: 'Medical Data API',
    category: 'API',
    tagline: 'API Flask per Generazione Dati Medici Simulati su Render',
    description: 'API RESTful deployata su Render per generazione dataset medici simulati in JSON, con metriche realistiche per testing healthcare applications.',
    longDescription: `
      <p class="mb-4">API Flask professionale per la generazione on-demand di dataset medici simulati, ideale per testing, sviluppo, demo e prototipazione rapida di applicazioni healthcare e medical analytics.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Endpoint API</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Base URL:</strong> https://medical-data-api-2.onrender.com</li>
        <li><strong>Endpoint Principale:</strong> GET /generate?num_records={number}</li>
        <li><strong>Parametri Query:</strong> num_records (opzionale, default: 100, max: 100,000)</li>
        <li><strong>Response Format:</strong> JSON array con oggetti strutturati</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Struttura Dati Generati</h3>
      <p class="mb-4">Ogni record contiene campi medici realistici per analisi healthcare complete:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>ID & Nome:</strong> Identificativo univoco e nome paziente simulato</li>
        <li><strong>Dati Demografici:</strong> Age (18-80 anni), Gender (Male/Female)</li>
        <li><strong>Blood Pressure:</strong> Systolic (110-180 mmHg), Diastolic (70-120 mmHg), formato "120/80"</li>
        <li><strong>Glucose Level:</strong> 70-250 mg/dL con categorizzazione (Normal <100, Pre-Diabetic 100-139, Diabetic ≥140)</li>
        <li><strong>Diagnosis:</strong> Healthy, Diabetes, Hypertension, Pre-Diabetes, Obesity</li>
        <li><strong>Visit Date:</strong> Data visita medica randomizzata</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Ranges Medici Realistici</h3>
      <p class="mb-4">Tutti i valori generati seguono range clinicamente plausibili:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Pressione sistolica: 110-180 mmHg (range normale-ipertensione)</li>
        <li>Pressione diastolica: 70-120 mmHg</li>
        <li>Glucosio: 70-250 mg/dL (ipoglicemia-iperglicemia)</li>
        <li>Categorie glucosio mappate secondo standard clinici</li>
        <li>Diagnosi correlate a parametri vitali generati</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Use Cases Healthcare</h3>
      <p class="mb-4">Ideale per molteplici scenari medical software development:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Testing dashboard analytics sanitari</li>
        <li>Prototipazione EMR/EHR systems</li>
        <li>Demo applicazioni telemedicina</li>
        <li>Training ML models su dati medical simulati</li>
        <li>Load testing healthcare data pipelines</li>
        <li>Workshop medical data science</li>
        <li>Sviluppo patient monitoring systems</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Integrazione & Privacy</h3>
      <p class="mb-4">Facile integrazione in Python (requests + pandas), JavaScript (fetch API). Supporto CORS completo per frontend. IMPORTANTE: Dati 100% simulati senza informazioni personali reali. Non utilizzare per scopi medici diagnostici reali. Conforme privacy: nessun dato sensibile reale.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Deployment & Limiti</h3>
      <p class="mb-4">Deployata su Render con piano gratuito. Massimo 100,000 record per richiesta. L'istanza può andare in sleep dopo inattività (cold start ~30s prima richiesta). Rate limiting su piano free. Dati generati casualmente per scopi dimostrativi educational.</p>
    `,
    technologies: ['Python 3.8+', 'Flask', 'Render', 'CORS'],
    features: [
      'API RESTful con endpoint GET',
      'Generazione dataset medici simulati',
      'Supporto fino a 100K record per richiesta',
      'Output JSON strutturato',
      'Dati medici realistici (pressione, glucosio)',
      'Diagnosi categorizzate (5 tipi)',
      'Range clinicamente plausibili',
      'Categorizzazione automatica glucosio',
      'Dati demografici (età, genere)',
      'Supporto CORS per frontend',
      'Deploy automatico su Render',
      'Privacy-compliant (dati simulati)',
      'Facile integrazione Python/JavaScript',
      'Parametri query configurabili'
    ],
    metrics: [
      { label: 'Max Records', value: '100K', color: 'text-green-400' },
      { label: 'Medical Fields', value: '10', color: 'text-primary-400' },
      { label: 'Diagnosis Types', value: '5', color: 'text-primary-400' },
      { label: 'CORS', value: 'Enabled', color: 'text-green-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/medical-data-api',
    testimonial: null
  },
  {
    id: 22,
    slug: 'fastify-i18n-plugin',
    title: 'fastify-i18n-plugin',
    category: 'npm Package',
    tagline: 'Plugin Fastify per Internazionalizzazione Dinamica - 137+ Downloads',
    description: 'Package npm pubblicato su npm registry con 137+ download. Aggiunge funzionalità i18n a progetti Fastify con traduzioni dinamiche da file JSON, caching e cambio lingua basato su rotte.',
    longDescription: `
      <p class="mb-4">Plugin professionale per Fastify che aggiunge capacità di internazionalizzazione (i18n) dinamica, consentendo di caricare traduzioni da file JSON e servire contenuti tradotti in base alla lingua dell'utente.</p>

      <div class="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-lg p-4 mb-6">
        <h3 class="text-lg font-bold text-primary-400 mb-2">📦 Package npm Pubblicato</h3>
        <p class="text-gray-300 mb-2">Disponibile su npm registry con oltre <strong class="text-green-400">137+ download</strong> dalla community</p>
        <code class="bg-gray-800 px-3 py-1 rounded text-sm text-primary-300">npm install fastify-i18n-plugin</code>
      </div>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Caratteristiche Principali</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Traduzioni Dinamiche:</strong> Caricamento automatico traduzioni da file JSON in directory specificata</li>
        <li><strong>Cambio Lingua Basato su Rotte:</strong> Lingua determinata dinamicamente in base al parametro rotta (:lang)</li>
        <li><strong>Caching per Performance:</strong> Sistema di cache integrato per file traduzione, ottimizzando performance</li>
        <li><strong>Supporto Multilingue:</strong> Aggiunta facile di nuove lingue tramite file JSON</li>
        <li><strong>API Semplice:</strong> Accesso traduzioni tramite request.i18n(lang) decorator</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Installazione & Setup</h3>
      <p class="mb-4">Installazione via npm:</p>
      <pre class="bg-gray-800 p-3 rounded mb-4"><code>npm install fastify-i18n-plugin</code></pre>
      <p class="mb-4">Registrazione plugin con configurazione opzionale:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>defaultLocale:</strong> Lingua di default (es. 'en', 'it')</li>
        <li><strong>directory:</strong> Percorso cartella traduzioni (es. './translations')</li>
        <li>Decoratore request.i18n(lang) disponibile automaticamente in tutte le rotte</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Struttura Traduzioni</h3>
      <p class="mb-4">Sistema basato su file JSON semplice e intuitivo:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Ogni lingua = file JSON separato (es. en.json, it.json, fr.json)</li>
        <li>Struttura chiave-valore per traduzioni</li>
        <li>Organizzazione flessibile: flat o nested JSON</li>
        <li>Aggiunta nuove lingue senza modifiche codice</li>
        <li>Hot-reload supportato in sviluppo</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Use Cases</h3>
      <p class="mb-4">Ideale per molteplici scenari applicativi:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>API REST multilingua per applicazioni internazionali</li>
        <li>Backend per siti web multi-paese</li>
        <li>Microservizi con supporto localizzazione</li>
        <li>E-commerce platforms con traduzione dinamica</li>
        <li>SaaS applications con customer internazionali</li>
        <li>Mobile app backends con supporto i18n</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Integrazione con Fastify Ecosystem</h3>
      <p class="mb-4">Compatibilità completa con:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Fastify hooks per preprocessing lingua</li>
        <li>Fastify decorators per estensibilità</li>
        <li>Altri Fastify plugins (auth, swagger, ecc.)</li>
        <li>TypeScript support con type definitions</li>
        <li>Testing frameworks (tap, jest, vitest)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Performance & Best Practices</h3>
      <p class="mb-4">Caching intelligente dei file traduzione evita letture disco ripetute. Caricamento lazy delle lingue riduce memory footprint. Validazione file JSON al startup previene runtime errors. Supporto fallback a defaultLocale per traduzioni mancanti. Design leggero senza dipendenze pesanti.</p>
    `,
    technologies: ['Node.js', 'Fastify', 'JavaScript', 'npm', 'JSON', 'i18n'],
    features: [
      'Traduzioni dinamiche da file JSON',
      'Cambio lingua basato su rotte',
      'Caching file traduzione per performance',
      'Supporto multilingue scalabile',
      'API semplice con request decorator',
      'Configurazione flessibile (defaultLocale, directory)',
      'Aggiunta nuove lingue senza code changes',
      'Integrazione completa Fastify ecosystem',
      'TypeScript support',
      'Fallback automatico a lingua default',
      'Validazione JSON al startup',
      'Design leggero zero-dependency',
      'Pubblicato su npm registry',
      'Documentazione completa'
    ],
    metrics: [
      { label: 'npm Downloads', value: '137+', color: 'text-green-400' },
      { label: 'Package', value: 'npm', color: 'text-green-400' },
      { label: 'Framework', value: 'Fastify', color: 'text-primary-400' },
      { label: 'License', value: 'MIT', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/fastify-i18n-plugin',
    testimonial: null
  },
  {
    id: 23,
    slug: 'gemini-seo-analyzer',
    title: 'Gemini SEO Analyzer',
    category: 'SEO Tool',
    tagline: 'AI-Powered On-Page SEO Analysis Tool con Google Gemini',
    description: 'Tool di analisi SEO on-page che utilizza Google Gemini AI per fornire insights su titolo, meta description, heading, immagini e keyword placement.',
    longDescription: `
      <p class="mb-4">Strumento di analisi SEO professionale che sfrutta l'intelligenza artificiale di Google Gemini per fornire approfondimenti dettagliati su elementi on-page critici, aiutando a ottimizzare i siti web per i motori di ricerca.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Funzionalità SEO Avanzate</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Analisi Tag Title:</strong> Controllo lunghezza ottimale (50-60 caratteri) e presenza keyword target</li>
        <li><strong>Meta Description Analysis:</strong> Verifica lunghezza ottimale (120-155 caratteri) e keyword presence</li>
        <li><strong>Struttura H1 Tags:</strong> Controlla unicità H1 e presenza keyword per ottimizzazione heading</li>
        <li><strong>Attributi Alt Immagini:</strong> Calcola percentuale immagini con testi alternativi per accessibilità SEO</li>
        <li><strong>Conteggio Parole:</strong> Analisi profondità contenuto con word count totale pagina</li>
        <li><strong>Keyword Placement:</strong> Riassunto presenza keyword nei 3 elementi on-page critici (title, description, H1)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Tecnologia AI-Powered</h3>
      <p class="mb-4">Sistema basato su Google Gemini 2.5 Flash per analisi SEO intelligente:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Prompt engineering con istruzioni "SEO expert persona"</li>
        <li>Response schema strutturato per output JSON affidabile</li>
        <li>Analisi real-time tramite API @google/genai</li>
        <li>Interpretazione dati con indicatori visivi (verde/giallo/rosso)</li>
        <li>Modello gemini-2.5-flash per performance ottimali</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">User Experience & Design</h3>
      <p class="mb-4">Interfaccia moderna e intuitiva con design professionale:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Tema dark mode elegante con Tailwind CSS</li>
        <li>Form centrale per inserimento URL e keyword target</li>
        <li>Risultati visualizzati in cards informative</li>
        <li>Indicatori cromatici per identificare rapidamente aree miglioramento</li>
        <li>Layout responsive per desktop e mobile</li>
        <li>User-provided API key (no backend needed)</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Workflow Analisi</h3>
      <p class="mb-4">Processo di analisi SEO in 5 step:</p>
      <ol class="list-decimal list-inside mb-4 text-gray-400">
        <li>Utente inserisce URL sito, keyword target e API key Gemini</li>
        <li>App costruisce prompt specifico per analisi SEO</li>
        <li>Prompt invia richiesta a Gemini con responseSchema JSON</li>
        <li>Gemini AI analizza pagina e restituisce dati strutturati</li>
        <li>App visualizza insights con indicatori visivi per action items</li>
      </ol>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Deployment & Accessibilità</h3>
      <p class="mb-4">App statica deployabile ovunque senza configurazione backend:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Deploy su Vercel/Netlify/GitHub Pages con zero config</li>
        <li>Nessuna variabile d'ambiente da configurare</li>
        <li>Ogni utente usa propria API key (gratuita da Google AI Studio)</li>
        <li>Servito con importmap per gestione moduli ES</li>
        <li>CORS-friendly: richieste dirette a Gemini API</li>
        <li>Local development con npx serve o Python http.server</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Use Cases</h3>
      <p class="mb-4">SEO audit rapidi per content creators. Analisi competitor on-page. Quality check pre-pubblicazione contenuti. Training SEO per principianti. Validazione keyword placement. Ottimizzazione accessibilità immagini.</p>
    `,
    technologies: ['React', 'TypeScript', 'Google Gemini 2.5 Flash', 'Tailwind CSS', '@google/genai', 'ES Modules'],
    features: [
      'Analisi title tag (lunghezza + keyword)',
      'Analisi meta description (lunghezza + keyword)',
      'Verifica struttura H1 (unicità + keyword)',
      'Calcolo percentuale alt text immagini',
      'Conteggio parole contenuto',
      'Riassunto keyword placement',
      'Indicatori visivi performance (verde/giallo/rosso)',
      'User-provided API key (no backend)',
      'Design dark mode moderno',
      'Response schema strutturato JSON',
      'Analisi real-time con Gemini AI',
      'Deploy statico zero-config',
      'Mobile responsive',
      'Free API key da Google AI Studio'
    ],
    metrics: [
      { label: 'SEO Checks', value: '6 types', color: 'text-primary-400' },
      { label: 'AI Model', value: 'Gemini 2.5', color: 'text-green-400' },
      { label: 'Deploy', value: 'Static', color: 'text-green-400' },
      { label: 'API Cost', value: 'Free tier', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://github.com/fracabu/seo-analyzer',
    testimonial: null
  },
  {
    id: 24,
    slug: 'customrsi50-mt5',
    title: 'CustomRSI50',
    category: 'Trading Tool',
    tagline: 'Indicatore RSI Personalizzato per MetaTrader 5 - Download da 80+ Paesi',
    description: 'Indicatore tecnico pubblicato su MQL5 Market con download internazionali da oltre 80 paesi. RSI customizzato con focus livello 50 e strategie multi-timeframe.',
    longDescription: `
      <p class="mb-4">Indicatore tecnico professionale per MetaTrader 5 pubblicato sul marketplace MQL5, utilizzato da trader in oltre 80 paesi per analisi momentum e strategie multi-timeframe.</p>

      <div class="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-lg p-4 mb-6">
        <h3 class="text-lg font-bold text-primary-400 mb-2">🌍 Pubblicato su MQL5 Market</h3>
        <p class="text-gray-300 mb-2">Download internazionali da <strong class="text-green-400">80+ paesi</strong> (Nigeria, France, Brazil, USA, Russia, Germany, Iran, South Africa, Thailand, Indonesia, Italy, China...)</p>
        <div class="flex gap-2 items-center">
          <span class="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm font-semibold">FREE</span>
          <span class="text-gray-400">Rating: ⭐⭐⭐⭐ (4/5)</span>
        </div>
      </div>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Descrizione</h3>
      <p class="mb-4">CustomRSI50 è un indicatore tecnico basato sul popolare Relative Strength Index (RSI) con una visualizzazione chiara e customizzabile, con enfasi speciale sul livello 50, cruciale per l'analisi momentum di molti trader.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Caratteristiche Principali</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Periodo RSI Configurabile:</strong> Personalizzazione completa del periodo di calcolo (default: 14)</li>
        <li><strong>Livello 50 Evidenziato:</strong> Focus sul livello critico 50 per identificare momentum bullish/bearish</li>
        <li><strong>Applied Price Personalizzabile:</strong> Selezione tipo prezzo per calcolo (close, open, high, low, etc.)</li>
        <li><strong>Finestra Separata:</strong> Visualizzazione in sub-window dedicata</li>
        <li><strong>Scala Fissa 0-100:</strong> Interpretazione facile con range standard RSI</li>
        <li><strong>Customizzazione Completa:</strong> Adattabile a varie strategie trading</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Interpretazione Segnali</h3>
      <p class="mb-4">Sistema di segnali basato su cross del livello 50:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>RSI > 50:</strong> Momentum bullish - bias long</li>
        <li><strong>RSI < 50:</strong> Momentum bearish - bias short</li>
        <li><strong>Entry Signal:</strong> Cross livello 50 a chiusura candela con R/R 1:1.5</li>
        <li><strong>Higher Timeframe Confirmation:</strong> Filtro aggiuntivo su timeframe superiori</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Strategie Multi-Timeframe</h3>
      <p class="mb-4">Tabella conferme higher timeframe per massimizzare probabilità successo:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>M5 → H1:</strong> Long su M5 solo se RSI H1 > 50, short se < 50</li>
        <li><strong>M15 → H4:</strong> Long su M15 solo se RSI H4 > 50, short se < 50</li>
        <li><strong>H1 → H8:</strong> Long su H1 solo se RSI H8 > 50, short se < 50</li>
        <li><strong>H4 → Daily:</strong> Long su H4 solo se RSI Daily > 50, short se < 50</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Versione Premium</h3>
      <p class="mb-4">Disponibile anche <strong>CustomRsi50 Alert and Mail</strong> ($30) con funzionalità avanzate:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Notifiche email automatiche ad ogni cross livello 50</li>
        <li>Alert sonori per non perdere segnali importanti</li>
        <li>Tutte le features della versione FREE</li>
        <li>Perfetto per trading multi-chart</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Vantaggi Chiave</h3>
      <p class="mb-4">Visualizzazione chiara momentum mercato. Identificazione facile cambi trend attorno livello 50. Customizzazione per fit strategie diverse. Integrazione higher timeframes per conferme. Utilizzato da trader in 80+ paesi worldwide.</p>
    `,
    technologies: ['MQL5', 'MetaTrader 5', 'Technical Analysis', 'RSI', 'Trading Algorithms'],
    features: [
      'Indicatore RSI customizzato per MT5',
      'Focus sul livello critico 50',
      'Periodo RSI configurabile',
      'Applied price personalizzabile',
      'Segnali cross livello 50',
      'Strategie multi-timeframe (M5-Daily)',
      'Higher timeframe confirmation system',
      'Scala fissa 0-100 per facile lettura',
      'Pubblicato su MQL5 Market',
      'Download da 80+ paesi',
      'Rating 4/5 stelle',
      'Versione FREE disponibile',
      'Versione Premium con alert ($30)',
      '11 screenshot dimostrativi'
    ],
    metrics: [
      { label: 'Countries', value: '80+', color: 'text-green-400' },
      { label: 'Rating', value: '4/5 ⭐', color: 'text-green-400' },
      { label: 'Version', value: '1.4', color: 'text-primary-400' },
      { label: 'Price', value: 'FREE', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Live',
    link: 'https://www.mql5.com/en/market/product/115070',
    testimonial: null
  },
  {
    id: 25,
    slug: 'bradipo-system-signal-board',
    title: 'Bradipo System Signal Board',
    category: 'AI Trading',
    tagline: 'Sistema Bradipo con 3 Condizioni + ML - EA Automatico su MT5',
    description: 'Sistema automatico di trading con Expert Advisor MT5 basato su 3 condizioni precise (TSI, Stochastic, Heikin Ashi) + TensorFlow ML model. Dashboard React per monitoring real-time.',
    longDescription: `
      <p class="mb-4">Sistema professionale di trading signals che combina machine learning con TensorFlow/Keras, integrazione diretta MetaTrader 5 e dashboard React interattiva per segnali long/short multi-timeframe con apertura posizioni automatica.</p>

      <div class="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-lg p-4 mb-6">
        <h3 class="text-lg font-bold text-primary-400 mb-2">🤖 AI-Powered Trading System</h3>
        <p class="text-gray-300 mb-2">Modello <strong class="text-green-400">TensorFlow/Keras</strong> addestrato su indicatori tecnici (TSI, Stochastic, Heikin Ashi) per previsioni long/short con probabilità in tempo reale</p>
        <div class="flex gap-2 items-center flex-wrap">
          <span class="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm font-semibold">Flask API</span>
          <span class="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm font-semibold">MetaTrader 5</span>
          <span class="bg-purple-500/20 text-purple-400 px-3 py-1 rounded text-sm font-semibold">TensorFlow</span>
          <span class="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded text-sm font-semibold">React Dashboard</span>
        </div>
      </div>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Architettura Sistema</h3>
      <p class="mb-4">Full-stack trading platform con 3 componenti principali:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Backend Flask:</strong> API RESTful con endpoints per signals, predictions, position opening</li>
        <li><strong>MetaTrader 5 Integration:</strong> Connessione diretta MT5 per lettura dati real-time e apertura posizioni</li>
        <li><strong>Frontend React:</strong> Dashboard interattiva con 3 sezioni (Home, Signal Board, Glass Ball)</li>
        <li><strong>ML Model (TensorFlow):</strong> Modello pre-addestrato (model_trading.h5) per previsioni long/short</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Sistema Bradipo - Le 3 Condizioni</h3>
      <p class="mb-4">L'EA (Expert Advisor) su MT5 esegue operazioni automaticamente quando TUTTE E 3 le condizioni sono soddisfatte contemporaneamente:</p>

      <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
        <h4 class="text-green-400 font-bold mb-2">📈 Segnale LONG (righe 227-236 app.py):</h4>
        <ol class="list-decimal list-inside text-gray-300">
          <li><strong>TSI > TSI_EMA</strong> - True Strength Index sopra la sua EMA</li>
          <li><strong>Stochastic K > Stochastic D</strong> - Momentum positivo</li>
          <li><strong>Heikin Ashi Close > HA Open</strong> - Candela bullish</li>
        </ol>
      </div>

      <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
        <h4 class="text-red-400 font-bold mb-2">📉 Segnale SHORT (righe 239-248 app.py):</h4>
        <ol class="list-decimal list-inside text-gray-300">
          <li><strong>TSI < TSI_EMA</strong> - True Strength Index sotto la sua EMA</li>
          <li><strong>Stochastic K < Stochastic D</strong> - Momentum negativo</li>
          <li><strong>Heikin Ashi Close < HA Open</strong> - Candela bearish</li>
        </ol>
      </div>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Machine Learning Enhancement</h3>
      <p class="mb-4">Sistema predittivo TensorFlow/Keras che integra le 3 condizioni base:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Input Features:</strong> TSI, TSI EMA, Stochastic K/D, Heikin Ashi Open/Close (6 features)</li>
        <li><strong>Training:</strong> Script train_model.py per re-training su dati storici</li>
        <li><strong>Output:</strong> Previsione binaria (long >= 0.5, short < 0.5) con score probabilità</li>
        <li><strong>Prediction Endpoint:</strong> POST /predict per previsioni real-time con dati live</li>
        <li><strong>Model Loading:</strong> Caricamento automatico model_trading.h5 all'avvio Flask app</li>
        <li><strong>Next Price Prediction:</strong> Linear Regression per previsione prezzo prossima candela</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Signal Board Dashboard</h3>
      <p class="mb-4">Interfaccia professionale per monitoraggio segnali multi-simbolo e multi-timeframe:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li><strong>Timeframes Supportati:</strong> H1, H4, H8, D1, Weekly per analisi completa</li>
        <li><strong>Indicatori Recenza:</strong> Pallini colorati (verde/giallo/rosso) in base a candele trascorse dal segnale</li>
        <li><strong>Auto-Refresh:</strong> Polling automatico segnali da Flask backend</li>
        <li><strong>Visual Indicators:</strong> Frecce up/down (FontAwesome icons) per direzione long/short</li>
        <li><strong>Next Price Prediction:</strong> Previsione prezzo prossima candela per ogni segnale</li>
        <li><strong>Position Opening:</strong> Apertura automatica posizioni su MT5 da dashboard</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Glass Ball Component</h3>
      <p class="mb-4">Visualizzazione processo TensorFlow con transparency completa:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400">
        <li>Tabella previsioni con data e valore prediction</li>
        <li>Tabella dati input modello (TSI, Stochastic K, HA Close) per ogni candela</li>
        <li>Real-time fetch da endpoint /all-values e /predict</li>
        <li>Debugging visivo per capire decision making del modello</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Technical Stack Completo</h3>
      <p class="mb-4">Backend: Python 3.8+, Flask, Flask-CORS, MetaTrader5 (mt5), TensorFlow/Keras, scikit-learn (LinearRegression), pandas, numpy. Frontend: React 18, React Router DOM, FontAwesome icons, CSS custom styling. ML: TensorFlow 2.x, Keras sequential model, NumPy array processing. Tools: dotenv per environment variables, tabulate per logging, venv per isolation.</p>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Workflow Operativo</h3>
      <ol class="list-decimal list-inside mb-4 text-gray-400">
        <li>MT5 fornisce dati real-time (OHLC, volumi) via Python API</li>
        <li>Backend calcola indicatori tecnici (TSI, Stochastic, HA)</li>
        <li>ML model processa features e genera previsioni long/short</li>
        <li>Flask API serve segnali via endpoint /get-signals</li>
        <li>React dashboard visualizza segnali con color-coding recency</li>
        <li>Trader può aprire posizioni automaticamente da UI</li>
        <li>Glass Ball component mostra internals del modello per trasparenza</li>
      </ol>

      <h3 class="text-xl font-bold text-white mt-6 mb-3">Use Cases</h3>
      <p class="mb-4">Day trading con segnali ML-based. Swing trading multi-timeframe. Backtesting strategie algoritmiche. Analisi performance modelli ML su mercati reali. Automazione trading retail con MT5. Training material per algo trading education.</p>
    `,
    technologies: ['Python 3.8+', 'Flask', 'TensorFlow', 'Keras', 'MetaTrader 5', 'React 18', 'scikit-learn', 'pandas', 'NumPy', 'React Router', 'FontAwesome'],
    features: [
      'TensorFlow/Keras ML model per previsioni',
      'Integrazione diretta MetaTrader 5',
      'Dashboard React multi-timeframe (H1-Weekly)',
      'Flask API RESTful completa',
      'Indicatori tecnici (TSI, Stochastic, Heikin Ashi)',
      'Segnali long/short con score probabilità',
      'Color-coded recency indicators (verde/giallo/rosso)',
      'Auto-refresh polling signals',
      'Apertura posizioni automatica da UI',
      'Glass Ball component per ML transparency',
      'Next price prediction per segnale',
      'Training script per re-training modello',
      'Real-time data fetching da MT5',
      'Multi-symbol support',
      'Event logging system',
      'Environment variables configuration'
    ],
    metrics: [
      { label: 'ML Model', value: 'TensorFlow', color: 'text-green-400' },
      { label: 'Timeframes', value: '5 types', color: 'text-primary-400' },
      { label: 'Integration', value: 'MT5 API', color: 'text-green-400' },
      { label: 'Stack', value: 'Full-Stack', color: 'text-primary-400' }
    ],
    images: [],
    status: 'Completed',
    link: null,
    testimonial: null
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
