# Piano di Migrazione: Vue 3 → Next.js 14

**Branch:** `nextjs-migration`
**Data inizio:** 2025-01-20
**Obiettivo:** Migliorare drasticamente le performance mobile mantenendo tutte le funzionalità

---

## 📊 Confronto Stack

| Aspetto | Vue 3 (Attuale) | Next.js 14 (Target) |
|---------|----------------|---------------------|
| Framework | Vue 3 + Vite | Next.js 14 (React) |
| Routing | Vue Router | App Router (native) |
| State | Pinia | React Context/Zustand |
| Styling | Tailwind CSS | Tailwind CSS ✅ |
| Animations | @vueuse/motion | CSS puro / Framer Motion (opzionale) |
| Build Tool | Vite | Turbopack |
| Image Opt | Manuale | next/image (automatico) |
| Font Opt | Manuale | next/font (automatico) |
| SEO | vue-head | Metadata API (native) |

---

## 🎯 Motivazioni Migrazione

### Performance Issues (Mobile Blackview 9900)
- ❌ Vue + VueUse/motion troppo pesante per hardware vecchio
- ❌ Animazioni a scatti anche con ottimizzazioni GPU
- ❌ Caricamento lento iniziale
- ❌ Scrolling non fluido

### Vantaggi Next.js (testato su https://codecraft-studio.vercel.app/)
- ✅ Zero librerie animation JavaScript - solo CSS
- ✅ Code splitting automatico e ottimale
- ✅ SSR/SSG per caricamento istantaneo
- ✅ Image optimization automatica (WebP, lazy load)
- ✅ Font optimization (WOFF2, preload)
- ✅ Performance native su mobile vecchio

---

## 📋 Step by Step Migration Plan

### **FASE 1: Setup Base (30-45 min)**

#### 1.1 Cleanup Vue Dependencies
```bash
npm uninstall vue vue-router pinia @vitejs/plugin-vue vite
npm uninstall @vueuse/core @vueuse/head @vueuse/motion
```

#### 1.2 Install Next.js Stack
```bash
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/node @types/react @types/react-dom
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

#### 1.3 Keep Existing Dependencies
- ✅ `nodemailer` (email sending)
- ✅ `lucide-react` (icons - cambio da lucide-vue-next)
- ✅ Tailwind plugins (@tailwindcss/forms, @tailwindcss/typography)

#### 1.4 Create Next.js Structure
```
codecraft-studio/
├── app/                    # Next.js App Router
│   ├── layout.jsx         # Root layout (era App.vue)
│   ├── page.jsx           # Homepage (era HomeView.vue)
│   ├── servizi/
│   │   └── page.jsx       # Services page
│   ├── tool/
│   │   └── page.jsx       # Tools page
│   ├── contatti/
│   │   └── page.jsx       # Contact page
│   ├── privacy/
│   │   └── page.jsx       # Privacy page
│   ├── cookie/
│   │   └── page.jsx       # Cookie page
│   └── api/
│       └── send-email/
│           └── route.js   # Email API endpoint
├── components/            # React components
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── HeroSection.jsx
│   └── common/
│       ├── BaseButton.jsx
│       ├── BaseCard.jsx
│       └── CookieBanner.jsx
├── public/               # Static assets (invariato)
├── styles/
│   └── globals.css      # Global Tailwind imports
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind config (invariato)
└── .env.local           # Environment variables (invariato)
```

---

### **FASE 2: Configurazione (30 min)**

#### 2.1 next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add external image domains if needed
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM_NAME: process.env.SMTP_FROM_NAME,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
}

module.exports = nextConfig
```

#### 2.2 tailwind.config.js (Update)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of current config (invariato)
}
```

#### 2.3 package.json scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

### **FASE 3: Layout & Pages (2h)**

#### 3.1 Root Layout (app/layout.jsx)
**Conversione da:** `src/App.vue`
```jsx
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/common/CookieBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata = {
  title: 'CodeCraft Studio - AI Business Automations',
  description: 'Soluzioni AI e automazione per il tuo business',
  // ... more metadata
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
```

#### 3.2 Homepage (app/page.jsx)
**Conversione da:** `src/views/HomeView.vue`
```jsx
export default function HomePage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden pt-20">
      <HeroSection />
      <ScrollingBanner />
      <WelcomeSection />
      <CoreValuesSection />
      <CTASection />
      <ServicesSection />
      {/* ... altre sezioni */}
    </div>
  )
}
```

#### 3.3 Altre Pages
- `app/servizi/page.jsx` ← `src/views/ServicesView.vue`
- `app/tool/page.jsx` ← `src/views/ToolView.vue`
- `app/contatti/page.jsx` ← `src/views/ContattiView.vue`
- `app/privacy/page.jsx` ← `src/views/PrivacyView.vue`
- `app/cookie/page.jsx` ← `src/views/CookieView.vue`

---

### **FASE 4: Componenti React (2h)**

#### 4.1 Conversione Componenti Vue → React

**Esempio: BaseButton**

**Da Vue (src/components/common/BaseButton.vue):**
```vue
<template>
  <component :is="tag" :class="buttonClasses">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  variant: String,
  size: String,
  tag: { type: String, default: 'button' }
})
</script>
```

**A React (components/common/BaseButton.jsx):**
```jsx
export default function BaseButton({
  children,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center...'
  const variantClasses = {
    primary: 'bg-primary-500 text-white...',
    secondary: 'bg-white text-black...'
  }
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {children}
    </Component>
  )
}
```

#### 4.2 Lista Componenti da Convertire
- [ ] BaseButton
- [ ] BaseCard
- [ ] BaseModal
- [ ] BaseSkeleton
- [ ] BaseBreadcrumbs
- [ ] LoadingSpinner
- [ ] CookieBanner
- [ ] AppHeader
- [ ] AppFooter
- [ ] HeroSection
- [ ] ParticleBackground

---

### **FASE 5: Animazioni (1h)**

#### 5.1 Strategia Animazioni

**NO @vueuse/motion** - Usare:
1. **CSS puro** (Tailwind transitions)
2. **Intersection Observer** per trigger on scroll
3. **Framer Motion** (opzionale, solo se necessario)

**Esempio: Fade-in on scroll con Intersection Observer**
```jsx
'use client'
import { useEffect, useRef, useState } from 'react'

export default function FadeInOnScroll({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}
```

#### 5.2 Animazioni Specifiche
- **Stelle/Particelle:** CSS puro con `@keyframes`
- **Sistema orbitale:** Invariato (CSS)
- **Scrolling banner:** CSS `animation`
- **Forme geometriche:** CSS `transform` animations
- **Cards hover:** Tailwind `hover:` utilities

---

### **FASE 6: API Routes (1h)**

#### 6.1 Email API (app/api/send-email/route.js)
**Conversione da:** `api/send-email.js` (Vercel serverless) + `server/index.js` (Express)

```javascript
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    // Nodemailer config (IDENTICO all'attuale)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content (IDENTICO all'attuale)
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <!-- Stesso HTML template attuale -->
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email inviata con successo!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Errore invio email:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'invio dell\'email' },
      { status: 500 }
    )
  }
}
```

#### 6.2 Contact Form Client (app/contatti/page.jsx)
```jsx
'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Messaggio inviato!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Errore invio')
      }
    } catch (error) {
      alert('Errore invio')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6">
      {/* Form fields */}
    </form>
  )
}
```

---

### **FASE 7: Image & Font Optimization (30 min)**

#### 7.1 Next/Image per Logo e Immagini
```jsx
import Image from 'next/image'

// Prima (Vue):
<img src="/logo.png" alt="Logo" class="w-32 h-32" />

// Dopo (Next.js):
<Image
  src="/logo.png"
  alt="Logo"
  width={128}
  height={128}
  priority // Per logo in header
/>
```

#### 7.2 Next/Font per Custom Fonts
```jsx
// app/layout.jsx
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Performance boost
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// CSS variables disponibili automaticamente
```

---

### **FASE 8: SEO & Metadata (30 min)**

#### 8.1 Static Metadata
```jsx
// app/page.jsx
export const metadata = {
  title: 'CodeCraft Studio - AI Business Automations',
  description: 'Soluzioni innovative per automatizzare il tuo business con AI',
  keywords: ['AI', 'automazione', 'business', 'machine learning'],
  openGraph: {
    title: 'CodeCraft Studio',
    description: 'Soluzioni AI per il tuo business',
    url: 'https://www.codecraft.it',
    siteName: 'CodeCraft Studio',
    images: [{ url: 'https://www.codecraft.it/og-image.jpg' }],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCraft Studio',
    description: 'Soluzioni AI per il tuo business',
    images: ['https://www.codecraft.it/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.codecraft.it',
  },
}
```

#### 8.2 Dynamic Metadata (per pages dinamiche)
```jsx
// app/tool/[id]/page.jsx
export async function generateMetadata({ params }) {
  return {
    title: `Tool ${params.id} - CodeCraft Studio`,
    description: `Scopri il tool ${params.id}`,
  }
}
```

---

### **FASE 9: Testing & QA (1h)**

#### 9.1 Development Testing
```bash
npm run dev
# Test su http://localhost:3000
```

**Checklist Test Locale:**
- [ ] Homepage rendering corretto
- [ ] Tutte le pagine accessibili
- [ ] Animazioni smooth (senza scatti)
- [ ] Form contatti funzionante
- [ ] Responsive mobile/desktop
- [ ] Cookie banner funzionante
- [ ] Navigation tra pagine
- [ ] Immagini caricate correttamente

#### 9.2 Build Production
```bash
npm run build
npm run start
# Test su http://localhost:3000
```

**Analisi Performance:**
```bash
npx lighthouse http://localhost:3000 --view
```

**Target Scores:**
- Performance: 90+ (mobile), 95+ (desktop)
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

### **FASE 10: Deploy & Vercel Setup (30 min)**

#### 10.1 Push Branch
```bash
git add .
git commit -m "feat: migrate to Next.js 14"
git push origin nextjs-migration
```

#### 10.2 Vercel Auto-Deploy
- ✅ Vercel rileva automaticamente Next.js
- ✅ Build settings automatici:
  - Build Command: `next build`
  - Output Directory: `.next`
  - Install Command: `npm install`

#### 10.3 Environment Variables
**Vercel Dashboard → Settings → Environment Variables**
- ✅ Stesse variabili attuali (nessuna modifica)
- ✅ Disponibili automaticamente a Next.js

#### 10.4 Preview URL
Vercel genera URL tipo:
```
https://codecraft-studio-git-nextjs-migration-yourname.vercel.app
```

---

### **FASE 11: Performance Testing Mobile (30 min)**

#### 11.1 Test su Blackview 9900
**Cosa verificare:**
- [ ] Caricamento iniziale < 3 secondi
- [ ] Scrolling fluido a 60fps
- [ ] Banner animato smooth
- [ ] Zero scatti su animazioni
- [ ] Interazioni immediate (click, form)
- [ ] Nessun lag durante navigazione

#### 11.2 Confronto Performance
| Metrica | Vue (main) | Next.js (migration) |
|---------|-----------|---------------------|
| First Contentful Paint | ? | ? |
| Time to Interactive | ? | ? |
| Total Blocking Time | ? | ? |
| Lighthouse Score Mobile | ? | ? |

#### 11.3 Debug se Lento
- Network tab: dimensioni bundle
- Performance tab: CPU/GPU usage
- Lighthouse: bottleneck identification

---

### **FASE 12: Merge a Main (quando pronto)**

#### 12.1 Pull Request
```bash
git checkout main
git pull origin main
git merge nextjs-migration
```

#### 12.2 Deploy Production
```bash
git push origin main
```

#### 12.3 Post-Deploy Verification
- [ ] www.codecraft.it accessibile
- [ ] Tutte le pagine funzionanti
- [ ] Email form funzionante (test reale)
- [ ] Analytics Google tracking
- [ ] No errori console
- [ ] Mobile performance OK

#### 12.4 Cleanup
```bash
git branch -d nextjs-migration # Locale
git push origin --delete nextjs-migration # Remote
```

---

## 📂 File da Rimuovere

```
❌ src/ (intero folder)
❌ public/vite.svg
❌ index.html
❌ vite.config.js
❌ server/ (Express locale non più necessario)
❌ api/ (Vercel functions, sostituito da app/api/)
```

## 📂 File da Mantenere

```
✅ public/ (assets statici)
✅ .env.example
✅ .gitignore
✅ tailwind.config.js (adattato)
✅ postcss.config.js
✅ CLAUDE.md (aggiornato)
✅ README.md (aggiornato)
✅ EMAIL_SETUP.md
```

---

## 🚨 Rischi & Mitigazioni

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|-------------|---------|-------------|
| Animazioni non smooth | Media | Alto | Test early, fallback CSS puro |
| Email API non funziona | Bassa | Alto | Testare API route subito |
| SEO penalizzazione | Bassa | Alto | Metadata identici, canonical URLs |
| Bundle size maggiore | Media | Medio | Code splitting Next.js automatico |
| Breaking changes Vercel | Bassa | Alto | Branch separato, rollback facile |

---

## ✅ Checklist Finale Pre-Merge

### Funzionalità
- [ ] Tutte le pagine renderizzano correttamente
- [ ] Routing funzionante (link interni)
- [ ] Form contatti invia email correttamente
- [ ] Cookie banner funzionante con localStorage
- [ ] Tutti i link esterni funzionanti
- [ ] Immagini ottimizzate e caricate

### Performance
- [ ] Lighthouse Mobile Score > 85
- [ ] Lighthouse Desktop Score > 95
- [ ] Test su Blackview 9900 OK
- [ ] Zero errori console
- [ ] Bundle size accettabile (< 500KB JS)

### SEO
- [ ] Metadata corretti su tutte le pagine
- [ ] Sitemap.xml generato
- [ ] robots.txt presente
- [ ] Canonical URLs corretti
- [ ] Open Graph tags presenti

### Deploy
- [ ] Build production success
- [ ] Preview URL funzionante
- [ ] Environment variables configurate
- [ ] DNS non modificato (ok)
- [ ] HTTPS attivo

---

## 📊 Success Metrics

### Performance Targets
- **Mobile (Blackview 9900):**
  - First Contentful Paint: < 2s
  - Time to Interactive: < 3.5s
  - No frame drops durante scroll

- **Desktop:**
  - First Contentful Paint: < 1s
  - Time to Interactive: < 2s

### User Experience
- [ ] Zero lamentele performance mobile
- [ ] Animazioni percepite come smooth
- [ ] Caricamento percepito come "istantaneo"

---

## 🔄 Rollback Plan

Se qualcosa va male:

```bash
# 1. Revert su Vercel dashboard
Settings → Git → Production Branch → main

# 2. Delete merge (se già fatto)
git revert HEAD

# 3. Force push (ONLY if necessary)
git push origin main --force
```

**Tempo rollback:** < 2 minuti

---

## 📚 Risorse Utili

- [Next.js 14 Docs](https://nextjs.org/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)

---

## 📝 Note Finali

- **Durata stimata totale:** 6-8 ore
- **Complessità:** Media-Alta
- **Rischio:** Basso (branch separato)
- **Beneficio atteso:** Performance 3-5x migliori su mobile

**Approccio:** Migrare progressivamente, testare ogni fase, merge solo quando tutto è verificato.

---

**Creato:** 2025-01-20
**Autore:** Claude Code
**Status:** Draft - In attesa approvazione
