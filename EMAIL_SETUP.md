# Configurazione Email per CodeCraft Studio

Questa guida spiega come configurare l'invio email dal form di contatto, sia in locale che su Vercel.

## Setup Locale (Sviluppo)

### 1. Crea il file `.env`

Copia `.env.example` in `.env` e compila i valori:

```bash
cp .env.example .env
```

### 2. Configurazione SMTP Aruba

Se usi Aruba per l'email del dominio, usa queste impostazioni nel file `.env`:

```env
SMTP_HOST=smtps.aruba.it
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=tua-email@tuodominio.com
SMTP_PASS=tua-password-email
SMTP_FROM_NAME=CodeCraft Studio
CONTACT_EMAIL=info@codecraft.it
```

**Note IMPORTANTI per Aruba:**
- ⚠️ Usa `smtps.aruba.it` (NON `smtp.aruba.it`) per connessioni SSL
- Porta 465 con SSL (SMTP_SECURE=true) - configurazione raccomandata
- L'indirizzo SMTP_USER deve essere un'email valida del dominio Aruba
- Usa la stessa password che usi per accedere alla webmail Aruba

### 3. Test con Gmail (alternativa per sviluppo)

Se preferisci testare con Gmail:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tua-email@gmail.com
SMTP_PASS=password-app-gmail
CONTACT_EMAIL=tua-email@gmail.com
```

**Importante per Gmail:**
- Devi creare una "App Password" nelle impostazioni Google
- Non usare la password normale dell'account
- Vai su: Account Google → Sicurezza → Verifica in due passaggi → Password per le app

### 4. Avvia il server di sviluppo

```bash
# Opzione 1: Solo frontend (senza email)
npm run dev

# Opzione 2: Frontend + Backend insieme (con email funzionante)
npm run dev:full

# Opzione 3: Server separati in due terminali
# Terminale 1:
npm run dev

# Terminale 2:
npm run server
```

Il server Express girerà su `http://localhost:3001`
Il frontend Vue girerà su `http://localhost:3000`

### 5. Test del form

1. Apri `http://localhost:3000/contatti`
2. Compila il form
3. Invia
4. Controlla la console del server per i log
5. Controlla l'email configurata in `CONTACT_EMAIL`

## Deploy su Vercel

### 1. Installa Vercel CLI (opzionale)

```bash
npm i -g vercel
```

### 2. Configura le variabili d'ambiente su Vercel

Vai su **Vercel Dashboard** → **Settings** → **Environment Variables** e aggiungi:

- `SMTP_HOST` = `smtp.aruba.it`
- `SMTP_PORT` = `587`
- `SMTP_SECURE` = `false`
- `SMTP_USER` = `tua-email@tuodominio.com`
- `SMTP_PASS` = `tua-password` (usa Vercel Secrets per sicurezza)
- `SMTP_FROM_NAME` = `CodeCraft Studio`
- `CONTACT_EMAIL` = `info@codecraft.it`
- `VITE_GA_MEASUREMENT_ID` = `your-ga-id` (opzionale)

**Importante:** Aggiungi queste variabili per tutti gli environment (Production, Preview, Development)

### 3. Deploy

```bash
# Primo deploy
vercel

# Deploy in produzione
vercel --prod
```

Oppure usa GitHub integration per deploy automatici ad ogni push.

### 4. Test in produzione

1. Vai sul tuo sito Vercel (es: `https://codecraft-studio.vercel.app/contatti`)
2. Compila il form
3. Invia
4. Controlla l'email

## Troubleshooting

### Email non arriva

1. **Controlla i log del server locale:**
   ```bash
   # Nella console dove gira npm run server
   ```

2. **Controlla i log Vercel:**
   ```bash
   vercel logs
   ```
   Oppure vai su Vercel Dashboard → Functions → Logs

3. **Testa le credenziali SMTP:**
   ```bash
   # Nel server/index.js, verifica che le variabili d'ambiente siano caricate
   console.log('SMTP_HOST:', process.env.SMTP_HOST)
   ```

4. **Verifica la cartella spam**

### Errore CORS in locale

Se vedi errori CORS nella console del browser:
- Assicurati che il server Express sia in esecuzione (`npm run server`)
- L'endpoint deve essere su porta 3001
- Il CORS è già configurato nel server Express

### Errore 500 su Vercel

- Verifica che tutte le variabili d'ambiente siano configurate
- Controlla i logs di Vercel per dettagli
- Verifica che nodemailer sia nelle `dependencies` e non nelle `devDependencies`

## Alternative Email Provider

### Sendgrid (consigliato per produzione)

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.xxx-your-api-key-xxx
```

### Mailgun

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
```

### AWS SES

```env
SMTP_HOST=email-smtp.eu-west-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-ses-access-key
SMTP_PASS=your-ses-secret-key
```

## Struttura File

```
codecraft-studio/
├── server/
│   └── index.js          # Server Express locale
├── api/
│   └── send-email.js     # Vercel serverless function
├── src/
│   └── views/
│       └── ContattiView.vue  # Form di contatto
├── .env                  # Variabili locali (non committare!)
├── .env.example          # Template variabili
└── vercel.json          # Config Vercel
```

## Sicurezza

✅ **Mai committare il file `.env`** - è già nel `.gitignore`
✅ **Usa password app dedicate**, non password principali
✅ **Su Vercel, usa Secrets per dati sensibili**
✅ **Valida sempre l'input del form** (già implementato)
✅ **Rate limiting** (considera di implementarlo in futuro)

## Contatti

Per problemi o domande: info@codecraft.it
