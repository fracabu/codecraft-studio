# TODO - CodeCraft Studio

## 🔴 URGENTE - Lunedì Mattina (Problema Email Aruba)

### Problema Attuale
- ✅ **Locale**: Form funziona, email arrivano
- ❌ **Vercel/Production**: Errore 525 - Aruba blocca invio da IP stranieri (server Vercel USA)
- ❌ **Template email**: Layout "a quadri" su alcuni client, logo non si carica

### Task Lunedì Ore 9:00

#### 1. Chiamata Aruba Support ☎️
**Numero**: 0575 0505
**Orario**: Lunedì-Venerdì 9:00-20:00

**Cosa dire**:
> "Buongiorno, ho un server cloud Vercel che deve inviare email automatiche dalla mia casella info@codecraft.it. Ho errore 525 'Invio temporaneamente disabilitato'. Il server è in USA (IP stranieri). Posso autorizzare questi IP per l'invio?"

**Informazioni da fornire**:
- Email: `info@codecraft.it`
- Errore: `525 5.7.13 Invio temporaneamente disabilitato`
- Motivo: Server cloud Vercel (Virginia, USA)
- Ho già cambiato la password (15/11/2025 ore 23:31)

#### 2. Se Aruba dice SÌ ✅
- [ ] Chiedono di autorizzare IP Vercel
- [ ] Testare form su https://codecraft-studio.vercel.app/contatti
- [ ] Verificare ricezione email su info@codecraft.it
- [ ] ✅ RISOLTO!

#### 3. Se Aruba dice NO ❌
- [ ] **Richiedere RIMBORSO** servizio email
- [ ] Passare a **SendGrid** (gratis 100 email/giorno)
  - Creare account SendGrid
  - Verificare dominio codecraft.it
  - Configurare API Key
  - Aggiornare codice per usare SendGrid invece di SMTP Aruba

---

## 📧 Configurazione Attuale

### Variabili Environment (Vercel)
**DA AGGIORNARE SU VERCEL**:
```
SMTP_HOST=smtps.aruba.it
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@codecraft.it
SMTP_PASS=Codecraft1234!  ⚠️ AGGIORNARE SU VERCEL
SMTP_FROM_NAME=CodeCraft Studio
CONTACT_EMAIL=info@codecraft.it  ⚠️ AGGIORNARE SU VERCEL
```

**URL Vercel Settings**:
https://vercel.com/fracabus-projects/codecraft-studio/settings/environment-variables

---

## 🎨 Fix Template Email (Opzionale)

### Problema Logo
- Logo non si carica perché URL esterno: `https://codecraft-studio.vercel.app/logo-code2.png`
- Alcuni client email bloccano immagini esterne

### Soluzioni Possibili:
1. **Inline base64** (logo embedded nell'email)
2. **CDN esterno** (Cloudinary, ImgBB)
3. **Accettare** che alcuni client non mostrano logo

### Problema Layout "a quadri"
- Normale su Outlook/Gmail mobile
- Layout email HTML ha limitazioni
- Funziona comunque, solo estetica

---

## ✅ Completati

- [x] Aggiunto progetto AI Rave Rewind al portfolio
- [x] Creato template email custom con brand CodeCraft (rosa/pink)
- [x] Aggiunto logging dettagliato API
- [x] Aggiunto timeout 30s per mobile
- [x] Risolto problema password locale
- [x] Email funzionanti in sviluppo locale

---

## 📝 Note

- Password cambiata: 15/11/2025 23:31 UTC
- Locale funziona: ✅
- Vercel bloccato: ❌ (errore 525 Aruba)
- Versione deployment: v2024.11.16.1-debug
- Template email: Rosa/Pink con logo CC

---

**Ultima modifica**: 16 Novembre 2025 00:45
