# Guida Completa allo Sviluppo - CodeCraft Studio

Questa guida documenta tutti i problemi affrontati, le soluzioni implementate e le configurazioni necessarie per il progetto CodeCraft Studio.

---

## 📋 Indice

1. [Logo e Branding](#logo-e-branding)
2. [Favicon e PWA Icons](#favicon-e-pwa-icons)
3. [Configurazione Dominio](#configurazione-dominio)
4. [Sistema Email](#sistema-email)
5. [SEO e Indicizzazione](#seo-e-indicizzazione)
6. [Fix Tecnici](#fix-tecnici)
7. [Deployment e Vercel](#deployment-e-vercel)
8. [Troubleshooting](#troubleshooting)

---

## 🎨 Logo e Branding

### Problema: Logo con Troppo Spazio Bianco

Il logo originale `logo-codecraft.png` aveva troppo spazio bianco attorno, risultando piccolo quando visualizzato.

### Soluzione: Crop con GIMP

**Tool usato:** [GIMP](https://www.gimp.org/) (gratuito, open-source)

**Procedura:**
1. Apri il logo in GIMP
2. **Image** → **Autocrop Image** (rimuove automaticamente spazio bianco)
3. Oppure manuale: **Image** → **Crop to Selection**
4. **File** → **Export As** → salva come `logo-code2.png`
5. Formato: PNG con trasparenza
6. Compressione: livello 9 per dimensione file ottimale

**Risultato:**
- Logo più grande e visibile nell'header
- File: `public/logo-code2.png`
- Dimensioni ottimizzate per web

**Tip:** Per loghi vettoriali, usa **Inkscape** invece di GIMP per qualità migliore.

---

## 🖼️ Favicon e PWA Icons

### Tool Consigliato: RealFaviconGenerator

**URL:** https://realfavicongenerator.net

### Processo di Generazione

1. **Prepara il logo:**
   - Usa la versione quadrata del logo (solo icona `</>`, senza testo)
   - Dimensione minima: 512x512 px
   - Formato: PNG con sfondo trasparente

2. **Genera su RealFaviconGenerator:**
   - Carica `logo-code2.png`
   - Configura per ogni piattaforma:
     - **iOS:** Mantieni colori brand (rosa/slate)
     - **Android:** Background personalizzato
     - **Windows:** Tile color
   - Scarica il package .zip

3. **File generati:**
   ```
   favicon.ico          # Multi-size (16x16, 32x32, 48x48)
   favicon.svg          # Vettoriale scalabile
   favicon-96x96.png    # Alta risoluzione
   apple-touch-icon.png # iOS (180x180)
   web-app-manifest-192x192.png  # Android
   web-app-manifest-512x512.png  # Android
   site.webmanifest     # Configurazione PWA
   ```

4. **Installazione:**
   - Copia tutti i file in `public/`
   - Aggiungi link in `index.html`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico">
   <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
   <link rel="icon" type="image/svg+xml" href="/favicon.svg">
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
   <link rel="manifest" href="/site.webmanifest">
   ```

### Configurazione site.webmanifest

```json
{
  "name": "CodeCraft Studio - AI Business Automations",
  "short_name": "CodeCraft",
  "icons": [
    {
      "src": "/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#ec4899",
  "background_color": "#0f172a",
  "display": "standalone"
}
```

---

## 🌐 Configurazione Dominio

### Passaggio da Aruba a Vercel

#### 1. Acquisto Dominio su Aruba

- Dominio: `codecraft.it`
- Pannello Aruba: https://www.aruba.it

#### 2. Configurazione Nameserver su Aruba

**Problema iniziale:** Dominio su nameserver Aruba, sito su Vercel.

**Soluzione:** Cambiare nameserver a quelli di Vercel.

**Procedura:**
1. Login su Aruba → **Domini** → `codecraft.it`
2. Sezione **"Name Server"**
3. Clicca **"Sostituisci Name Server"** o **"Usa name server personalizzati"**
4. Scegli wizard configurazione email (importante!)
   - ✅ Seleziona: "Il record MX reindirizza la posta elettronica sul server Aruba"
   - Questo crea automaticamente i record MX temporanei
5. Inserisci i nameserver Vercel:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
6. Salva e conferma

**Tempo di propagazione:** 1-48 ore (solitamente 1-2 ore)

#### 3. Aggiunta Dominio su Vercel

1. Vai su **Vercel** → Progetto `codecraft-studio`
2. **Settings** → **Domains**
3. Clicca **"Add Domain"**
4. Inserisci: `codecraft.it`
5. Spunta: ✅ "Redirect codecraft.it to www.codecraft.it" (raccomandato)
6. Clicca **"Add"**

**Vercel mostrerà:**
- Istruzioni per configurare DNS (già fatto con nameserver)
- Status del certificato SSL (generato automaticamente dopo propagazione DNS)

#### 4. Record MX per Email (Fondamentale!)

**Problema:** Con nameserver Vercel, i record MX di Aruba non sono più attivi.

**Soluzione:** Aggiungere manualmente record MX su Vercel DNS.

**Procedura:**
1. **Vercel** → **Settings** → **Domains** → clicca su `codecraft.it`
2. Cerca **"DNS Records"** o **"Manage DNS"**
3. Clicca **"Add Record"**
4. Aggiungi record MX di Aruba:
   ```
   Type: MX
   Name: @ (o lascia vuoto per root domain)
   Value: mx.aruba.it
   Priority: 10
   TTL: Auto
   ```
5. Salva

**Verifica propagazione MX:**
- Tool: https://mxtoolbox.com/SuperTool.aspx
- Inserisci: `codecraft.it`
- Dovresti vedere: `mx.aruba.it` con priorità 10

**Tempo propagazione:** 10-60 minuti

---

## 📧 Sistema Email

### Configurazione SMTP Aruba

Il form contatti invia email tramite SMTP di Aruba.

#### Credenziali SMTP Aruba

```env
SMTP_HOST=smtps.aruba.it
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@codecraft.it        # Email completa
SMTP_PASS=your-password-here
SMTP_FROM_NAME=CodeCraft Studio
CONTACT_EMAIL=info@codecraft.it    # Dove arrivano i messaggi
```

**Importante:**
- `SMTP_USER` deve essere l'**email completa**, non solo username
- `SMTP_PORT=465` con `SMTP_SECURE=true` (SSL)
- Alternativa: `SMTP_PORT=587` con `SMTP_SECURE=false` (TLS)

#### Configurazione Locale (.env)

File: `.env` (nella root del progetto, **NON** committato su Git)

```env
# SMTP Configuration
SMTP_HOST=smtps.aruba.it
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@codecraft.it
SMTP_PASS=Codecraft123!
SMTP_FROM_NAME=CodeCraft Studio
CONTACT_EMAIL=info@codecraft.it
```

#### Configurazione Produzione (Vercel)

1. **Vercel** → Progetto → **Settings** → **Environment Variables**
2. Aggiungi ogni variabile separatamente:
   - Name: `SMTP_HOST` → Value: `smtps.aruba.it`
   - Name: `SMTP_PORT` → Value: `465`
   - Name: `SMTP_SECURE` → Value: `true`
   - Name: `SMTP_USER` → Value: `info@codecraft.it`
   - Name: `SMTP_PASS` → Value: `password-qui`
   - Name: `SMTP_FROM_NAME` → Value: `CodeCraft Studio`
   - Name: `CONTACT_EMAIL` → Value: `info@codecraft.it`
3. Environment: **Production** ✅
4. Dopo aver aggiunto tutte le variabili → **Redeploy**

#### Test Email Locale

```bash
# Avvia frontend + backend
npm run dev:full

# Oppure separatamente:
# Terminale 1:
npm run dev

# Terminale 2:
npm run server
```

Testa su: http://localhost:3000/contatti

#### Problemi Comuni Email

**Problema 1:** Email "inviate" ma non arrivano

**Causa:** Record MX non propagati o mancanti.

**Soluzione:**
- Verifica MX su https://mxtoolbox.com
- Aspetta propagazione DNS (fino a 2 ore)
- Controlla spam/posta indesiderata

**Problema 2:** Errore SMTP auth

**Causa:** Credenziali sbagliate o formato email errato.

**Soluzione:**
- `SMTP_USER` deve essere email **completa**: `info@codecraft.it`
- Verifica password su webmail Aruba
- Controlla porta: 465 (SSL) o 587 (TLS)

**Problema 3:** Email su smartphone non funzionano

**Causa:** Cache CDN di Vercel.

**Soluzione:**
- Aprire in modalità incognito
- Aggiungere `?v=2` all'URL
- Svuotare cache browser
- Aspettare nuovo deployment

---

## 🔍 SEO e Indicizzazione

### 1. Meta Tags (index.html)

File: `index.html`

```html
<!-- SEO Meta Tags -->
<title>CodeCraft Studio - Automazioni AI per Business</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="CodeCraft Studio">
<meta name="robots" content="index, follow">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.codecraft.it/">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://www.codecraft.it/og-images/home.jpg">
<meta property="og:locale" content="it_IT">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://www.codecraft.it/">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://www.codecraft.it/og-images/home.jpg">

<!-- Canonical URL -->
<link rel="canonical" href="https://www.codecraft.it/">

<!-- Schema.org Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CodeCraft Studio",
  "url": "https://www.codecraft.it",
  "logo": "https://www.codecraft.it/logo-code2.png",
  ...
}
</script>
```

### 2. robots.txt

File: `public/robots.txt`

```txt
# robots.txt per CodeCraft Studio
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.codecraft.it/sitemap.xml

# Blocca file sensibili
Disallow: /api/
Disallow: /*.json$
```

### 3. sitemap.xml

File: `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.codecraft.it/</loc>
    <lastmod>2024-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.codecraft.it/servizi</loc>
    <lastmod>2024-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... altre pagine ... -->
</urlset>
```

**Aggiorna la data** `<lastmod>` ogni volta che modifichi contenuti!

### 4. Google Search Console

**URL:** https://search.google.com/search-console

#### Setup Iniziale

1. **Aggiungi proprietà:**
   - Tipo: **Dominio** (preferito) o **Prefisso URL**
   - Inserisci: `codecraft.it`

2. **Verifica proprietà:**

   **Metodo 1: Record DNS TXT** (con nameserver Vercel)
   - Copia il codice TXT da Search Console
   - Aggiungi su **Vercel DNS**:
     ```
     Type: TXT
     Name: @
     Value: google-site-verification=abc123xyz...
     ```
   - Aspetta propagazione (10-30 min)
   - Clicca "Verifica" su Search Console

   **Metodo 2: Tag HTML** (più veloce)
   - Copia tag `<meta name="google-site-verification"...>`
   - Aggiungi in `index.html` nel `<head>`
   - Deploy
   - Clicca "Verifica"

3. **Invia Sitemap:**
   - Menu → **Sitemap**
   - Aggiungi: `sitemap.xml` o `https://www.codecraft.it/sitemap.xml`
   - Clicca **Invia**
   - Status dovrebbe diventare "Riuscita" dopo pochi minuti

4. **Richiedi indicizzazione manuale:**
   - Barra in alto: **Controllo URL**
   - Inserisci ogni URL:
     - `https://www.codecraft.it/`
     - `https://www.codecraft.it/servizi`
     - `https://www.codecraft.it/tool`
     - `https://www.codecraft.it/contatti`
   - Clicca **"Richiedi indicizzazione"**

#### Monitoraggio

Dopo 24-48 ore, controlla:
- **Copertura/Pagine:** Quante pagine indicizzate
- **Rendimento:** Impression, click, CTR
- **Miglioramenti:** Dati strutturati, usabilità mobile
- **Segnali web essenziali:** LCP, FID, CLS

### 5. Immagini Open Graph (Opzionale)

**Dimensioni:** 1200x630 px
**Formato:** JPG o PNG
**Tool:** Canva (https://www.canva.com)

**Procedura:**
1. Canva → "Dimensioni personalizzate" → 1200x630 px
2. Design con logo + titolo pagina
3. Colori brand: Rosa (#ec4899), Slate (#0f172a)
4. Export come JPG (qualità alta)
5. Salva in `public/og-images/`:
   - `home.jpg`
   - `servizi.jpg`
   - `tool.jpg`
   - `contatti.jpg`

**Test Open Graph:**
- https://www.opengraph.xyz
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Inspector: https://www.linkedin.com/post-inspector/

---

## 🔧 Fix Tecnici

### Problema 1: Button Text Wrapping

**Sintomo:** Il testo "Contattaci" e la freccia andavano a capo nel button.

**Causa:** Mancava `whitespace-nowrap` e `flex-nowrap` nel BaseButton.

**Soluzione:**

File: `src/components/common/BaseButton.vue`

```javascript
// Aggiunto nelle classes del button:
const base = 'inline-flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap ...'

// CSS per pushable button:
.pushable .front {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: nowrap;  // ← Aggiunto
  white-space: nowrap; // ← Aggiunto
  min-width: fit-content; // ← Aggiunto
}

.pushable .front > * {
  flex-shrink: 0; // ← Previene restringimento figli
}
```

### Problema 2: Routing SPA - Errore 404

**Sintomo:** Accedendo direttamente a `/servizi`, `/tool`, `/contatti` si otteneva 404.

**Causa:** Vercel cercava file fisici che non esistono (SPA con client-side routing).

**Soluzione:** Configurare fallback a `index.html` in `vercel.json`.

File: `vercel.json`

```json
{
  "routes": [
    { "handle": "filesystem" },  // Serve prima i file statici
    { "src": "/api/.*", "dest": "/api/$0" },  // API routes
    { "src": "/(.*)", "dest": "/index.html" }  // Fallback SPA
  ]
}
```

**Ordine importante:**
1. Filesystem: Serve sitemap.xml, robots.txt, favicon, immagini
2. API: Gestisce /api/send-email
3. Catch-all: Tutto il resto va a index.html (Vue Router)

### Problema 3: site.webmanifest - Errore 401

**Sintomo:** Browser mostrava errore 401 su `/site.webmanifest`.

**Causa:** Il catch-all route intercettava anche i file statici.

**Soluzione 1 (Tentata):** Regex negativo per escludere estensioni file.

```json
{
  "source": "/((?!.*\\.(xml|txt|ico|png|svg|webmanifest|...)).*)",
  "destination": "/index.html"
}
```

**Soluzione 2 (Definitiva):** Usare `handle: filesystem` come prima route.

```json
{
  "routes": [
    { "handle": "filesystem" },  // ← Questo risolve!
    ...
  ]
}
```

**Header corretti:**

```json
{
  "headers": [
    {
      "source": "/site.webmanifest",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/manifest+json"
        }
      ]
    }
  ]
}
```

### Problema 4: Sitemap.xml Mostra HTML

**Sintomo:** Aprendo `/sitemap.xml` si vedeva header/footer del sito.

**Causa:** Vue Router intercettava la richiesta.

**Soluzione:** `handle: filesystem` in `vercel.json` + header Content-Type.

```json
{
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/xml"
        }
      ]
    }
  ]
}
```

**Test:** Aprire `https://www.codecraft.it/sitemap.xml` deve mostrare XML puro.

**Fix cache:** Se vedi ancora HTML, svuota cache (`Ctrl+F5`) o apri in incognito.

---

## 🚀 Deployment e Vercel

### Configurazione vercel.json Completa

File: `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",

  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        { "key": "Content-Type", "value": "application/xml" }
      ]
    },
    {
      "source": "/robots.txt",
      "headers": [
        { "key": "Content-Type", "value": "text/plain" }
      ]
    },
    {
      "source": "/site.webmanifest",
      "headers": [
        { "key": "Content-Type", "value": "application/manifest+json" }
      ]
    }
  ],

  "routes": [
    { "handle": "filesystem" },
    { "src": "/api/.*", "dest": "/api/$0" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Workflow Deploy

**Deploy Automatico (Consigliato):**

1. Collega repository GitHub a Vercel
2. Ogni `git push` su `main` → deploy automatico
3. Preview deployment su branch secondari

**Deploy Manuale:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Environment Variables Checklist

**Production (Vercel Dashboard):**
- ✅ `SMTP_HOST`
- ✅ `SMTP_PORT`
- ✅ `SMTP_SECURE`
- ✅ `SMTP_USER`
- ✅ `SMTP_PASS`
- ✅ `SMTP_FROM_NAME`
- ✅ `CONTACT_EMAIL`
- ⚠️ `VITE_GA_MEASUREMENT_ID` (opzionale)

**Importante:** Dopo aver aggiunto/modificato variabili → **Redeploy** il progetto!

### Build Warnings (Ignorabili)

Questi warning sono **normali** e non bloccano il build:

```
npm warn ERESOLVE overriding peer dependency
npm warn 3 moderate severity vulnerabilities
Generated an empty chunk: "lucide"
```

- `ERESOLVE`: Conflitto dipendenze dev, non influisce in produzione
- `vulnerabilities`: Dipendenze dev, non esposte in produzione
- `empty chunk`: Ottimizzazione Vite, normale

---

## 🔍 Troubleshooting

### Email Non Arrivano

**Checklist:**

1. ✅ **Variabili ambiente configurate?**
   - Vercel: Settings → Environment Variables
   - Tutte le 7 variabili SMTP presenti?

2. ✅ **Record MX propagati?**
   - Test: https://mxtoolbox.com
   - Inserisci: `codecraft.it`
   - Deve mostrare: `mx.aruba.it` priorità 10
   - Se no, aspetta 1-2 ore

3. ✅ **Email nello spam?**
   - Controlla webmail Aruba: https://webmail.aruba.it
   - Cartella "Posta indesiderata"

4. ✅ **CONTACT_EMAIL corretto?**
   - Verifica su Vercel che l'email sia giusta
   - Deve essere email valida @codecraft.it

5. ✅ **Logs Vercel mostrano invio?**
   - Vercel → Deployments → Functions → `/api/send-email`
   - Dovrebbe mostrare: `POST 200 Email sent: <message-id>`
   - Se `POST 500` → errore SMTP, controlla credenziali

### Pagine 404 su Route Vue

**Sintomo:** `/servizi`, `/tool` danno 404

**Soluzione:**
1. Verifica `vercel.json` abbia `{ "handle": "filesystem" }` come prima route
2. Redeploy progetto
3. Svuota cache browser (`Ctrl+F5`)

### Google Search Console - URL Non Disponibile

**Sintomo:** "URL non disponibile per Google" - 404

**Cause possibili:**
1. ❌ Routing SPA non configurato → Vedi sopra
2. ❌ DNS non propagato → Aspetta 24-48h
3. ❌ Robots.txt blocca crawler → Verifica `Allow: /`

**Test:**
1. Apri URL direttamente in incognito
2. Se vedi la pagina → Problema crawler Google (aspetta)
3. Se vedi 404 → Problema routing (fix vercel.json)

### Cache CDN su Mobile

**Sintomo:** Deployment aggiornato ma smartphone vede versione vecchia

**Soluzione:**
1. Aprire in modalità **incognito/privata**
2. Aggiungere `?v=2` all'URL: `https://www.codecraft.it/?v=2`
3. Svuotare cache app browser
4. Aspettare 5-10 minuti (cache CDN)
5. Versione debug: Aggiungere numero versione visibile nel codice

### Favicon Non Aggiornata

**Sintomo:** Browser mostra ancora favicon vecchia

**Soluzione:**
1. Hard refresh: `Ctrl+F5` (Windows) o `Cmd+Shift+R` (Mac)
2. Svuota cache browser completamente
3. Chiudi e riapri browser
4. Su mobile: Chiudi app browser e riaprila
5. Ultima risorsa: Cambia nome file favicon e aggiorna HTML

---

## 📊 Performance e Ottimizzazione

### Test Performance

**Tool consigliati:**
- **PageSpeed Insights:** https://pagespeed.web.dev
- **GTmetrix:** https://gtmetrix.com
- **WebPageTest:** https://www.webpagetest.org

**Metriche target:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Performance Score: > 90

### Ottimizzazioni Implementate

**Vite Build:**
- ✅ Code splitting manuale (vendor, ui, lucide chunks)
- ✅ Terser minification
- ✅ CSS code splitting
- ✅ Sourcemaps disabilitati in produzione

**PWA:**
- ✅ Service Worker con auto-update
- ✅ Runtime caching (fonts, immagini)
- ✅ Offline capability

**SEO:**
- ✅ Preconnect a domini esterni (fonts.googleapis.com)
- ✅ DNS prefetch per analytics
- ✅ Meta tags completi

---

## 📚 Risorse Utili

### Tool Online

- **Favicon Generator:** https://realfavicongenerator.net
- **GIMP:** https://www.gimp.org
- **Canva:** https://www.canva.com (Open Graph images)
- **MX Toolbox:** https://mxtoolbox.com
- **DNS Checker:** https://dnschecker.org
- **PageSpeed:** https://pagespeed.web.dev
- **Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Documentazione

- **Vercel Docs:** https://vercel.com/docs
- **Vue 3:** https://vuejs.org
- **Vite:** https://vitejs.dev
- **Google Search Console:** https://search.google.com/search-console/welcome

### Schema.org

- **Organization:** https://schema.org/Organization
- **WebSite:** https://schema.org/WebSite
- **Testing Tool:** https://search.google.com/test/rich-results

---

## 🎯 Checklist Post-Deploy

Dopo ogni deploy importante, verifica:

- [ ] Sito accessibile su `https://www.codecraft.it`
- [ ] SSL certificate attivo (lucchetto verde)
- [ ] Tutte le pagine caricano: /, /servizi, /tool, /contatti
- [ ] Form contatti invia email
- [ ] Favicon corretta su browser/mobile
- [ ] sitemap.xml accessibile e valido
- [ ] robots.txt accessibile
- [ ] Google Search Console: nessun errore
- [ ] Nessun errore 401/404 in console browser
- [ ] Test da mobile (iOS + Android)
- [ ] Performance > 90 su PageSpeed

---

## 📝 Note Finali

### Manutenzione Periodica

**Ogni settimana:**
- Controlla Google Search Console per errori
- Verifica che form email funzioni

**Ogni mese:**
- Aggiorna `lastmod` in sitemap.xml se ci sono modifiche
- Test performance con PageSpeed
- Controlla Core Web Vitals

**Ogni 3 mesi:**
- Aggiorna dipendenze npm: `npm update`
- Run `npm audit` e fix vulnerabilità se necessario
- Backup del progetto

### Backup

**Cosa backuppare:**
- ✅ Codice sorgente (già su GitHub)
- ✅ File `.env` (localmente, NON su Git)
- ✅ Configurazioni Vercel (screenshot environment variables)
- ✅ Credenziali Aruba (password manager)

---

**Documento creato:** 15 Novembre 2024
**Ultima modifica:** 15 Novembre 2024
**Versione:** 1.0
**Autore:** Documentazione sviluppo CodeCraft Studio

---

*Questa guida è un documento vivo. Aggiornala ogni volta che risolvi un nuovo problema o implementi una nuova feature!*
