<h1 align="center">CodeCraft Studio</h1>
<h3 align="center">AI Business Automations Agency Website</h3>

<p align="center">
  <em>Reduce costs up to 60% and boost productivity up to 40% with AI automation</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=flat-square&logo=pwa&logoColor=white" alt="PWA" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <strong>Live:</strong> <a href="https://www.codecraft.it">www.codecraft.it</a>
</p>

<p align="center">
  :gb: <a href="#english">English</a> | :it: <a href="#italiano">Italiano</a>
</p>

---

<a name="english"></a>
## :gb: English

### Overview

CodeCraft Studio is a comprehensive web platform showcasing AI-powered business automation solutions. It integrates artificial intelligence into business processes to reduce operational costs and boost productivity, offering custom tools, process optimization, and strategic AI consulting.

### Features

- **AI Business Automation** - Design and implement AI solutions for complex workflows
- **Custom AI Tools** - Portfolio of 15+ tools: calculators, dashboards, content generators
- **ROI Focused** - Average 4.5x ROI in 90 days with documented case studies
- **PWA Support** - Installable, offline-capable, app-like experience
- **SEO Optimized** - Complete sitemap, robots.txt, meta tags, Google Search Console
- **Email Integration** - Contact form via Nodemailer + Aruba SMTP

### Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vue 3 (Composition API) |
| Build | Vite 7 |
| State | Pinia |
| Routing | Vue Router with SEO metadata |
| Styling | Tailwind CSS |
| Email | Nodemailer + Aruba SMTP |
| Deploy | Vercel (serverless) |
| PWA | Vite PWA Plugin |

### Quick Start

```bash
git clone https://github.com/fracabu/codecraft-studio.git
cd codecraft-studio
npm install

# Development (frontend only)
npm run dev

# Full development (frontend + backend)
npm run dev:full

# Production build
npm run build
```

### Commands

```bash
npm run dev       # Frontend dev server (port 3000)
npm run dev:full  # Frontend + Express backend
npm run server    # Backend only (port 3001)
npm run build     # Production build
npm run preview   # Preview production
npm run test:unit # Run unit tests
npm run lint      # Lint code
```

### Environment Variables

```env
SMTP_HOST=smtps.aruba.it
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@codecraft.it
SMTP_PASS=your-password
SMTP_FROM_NAME=CodeCraft Studio
CONTACT_EMAIL=info@codecraft.it
```

---

<a name="italiano"></a>
## :it: Italiano

### Panoramica

CodeCraft Studio e una piattaforma web completa per presentare soluzioni di automazione aziendale basate su AI. Integra l'intelligenza artificiale nei processi aziendali per ridurre costi operativi e aumentare la produttivita, offrendo strumenti custom, ottimizzazione processi e consulenza strategica AI.

### Funzionalita

- **Automazione Business AI** - Progettazione e implementazione soluzioni AI per workflow complessi
- **Strumenti AI Custom** - Portfolio di 15+ tool: calcolatori, dashboard, generatori contenuti
- **Focus ROI** - Media 4.5x ROI in 90 giorni con case study documentati
- **Supporto PWA** - Installabile, offline-capable, esperienza app-like
- **SEO Ottimizzato** - Sitemap completa, robots.txt, meta tag, Google Search Console
- **Integrazione Email** - Form contatto via Nodemailer + Aruba SMTP

### Stack Tecnologico

| Layer | Tecnologia |
|-------|------------|
| Frontend | Vue 3 (Composition API) |
| Build | Vite 7 |
| State | Pinia |
| Routing | Vue Router con metadata SEO |
| Styling | Tailwind CSS |
| Email | Nodemailer + Aruba SMTP |
| Deploy | Vercel (serverless) |
| PWA | Vite PWA Plugin |

### Avvio Rapido

```bash
git clone https://github.com/fracabu/codecraft-studio.git
cd codecraft-studio
npm install

# Sviluppo (solo frontend)
npm run dev

# Sviluppo completo (frontend + backend)
npm run dev:full

# Build produzione
npm run build
```

### Comandi

```bash
npm run dev       # Server dev frontend (porta 3000)
npm run dev:full  # Frontend + backend Express
npm run server    # Solo backend (porta 3001)
npm run build     # Build produzione
npm run preview   # Preview produzione
npm run test:unit # Esegui test unitari
npm run lint      # Lint codice
```

---

## Requirements

- Node.js >= 18
- Aruba SMTP account (for contact form)

## License

Proprietary - All rights reserved © 2024 CodeCraft Studio

---

<p align="center">
  <a href="https://github.com/fracabu">
    <img src="https://img.shields.io/badge/Made_by-fracabu-8B5CF6?style=flat-square" alt="Made by fracabu" />
  </a>
</p>
