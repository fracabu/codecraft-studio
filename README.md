# CodeCraft Studio - AI Business Automations

🌐 **Live:** [www.codecraft.it](https://www.codecraft.it)

CodeCraft Studio is a comprehensive web platform dedicated to showcasing and offering AI-powered business automation solutions. It focuses on integrating artificial intelligence into business processes to significantly reduce operational costs (up to 60%) and boost productivity (up to 40%), offering a clear return on investment through custom tools, process optimization, and strategic AI consulting services.

## Key Features

*   **AI Business Automation Services:** Specializes in designing and implementing AI solutions to automate complex business workflows and reduce operational expenses.
*   **Custom AI Tool Development:** Offers a portfolio of over 15 custom-developed AI tools, including calculators, dashboards, and AI content generators, designed to streamline specific business needs.
*   **Performance & ROI Focused:** Highlights real-world case studies demonstrating significant cost savings and productivity gains, with an average ROI of 4.5x in 90 days.
*   **Progressive Web App (PWA):** Delivers an installable, offline-capable, and app-like experience for enhanced user engagement and accessibility.
*   **SEO Optimized:** Complete SEO implementation with sitemap, robots.txt, meta tags, and Google Search Console integration.
*   **Custom Branding:** Professional favicon suite and Open Graph images for social media sharing.

## Tech Stack

This project is built with a modern web development stack:

*   **Frontend Framework:** Vue 3 (Composition API)
*   **Build Tool:** Vite 7
*   **State Management:** Pinia
*   **Routing:** Vue Router with SEO metadata
*   **Styling:** Tailwind CSS with custom design system
*   **Email Backend:** Nodemailer + Aruba SMTP
*   **Deployment:** Vercel (serverless functions)
*   **Domain:** Custom domain (codecraft.it) with Vercel DNS
*   **PWA Capabilities:** Vite PWA Plugin with offline support
*   **UI Icons:** Lucide Vue Next & Heroicons
*   **Utilities:** VueUse (Core, Head, Motion)
*   **Testing:** Vitest
*   **Analytics:** Google Analytics 4 (optional)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm (or Yarn/pnpm) installed on your system.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd codecraft-studio
    ```
2.  Install NPM dependencies:
    ```bash
    npm install
    ```

### Running the Project

1.  **Development (Frontend Only):**
    ```bash
    npm run dev
    ```
    This will start the Vite development server on `http://localhost:3000`.
    Note: Email sending won't work without the backend server.

2.  **Full Development (Frontend + Backend):**
    ```bash
    npm run dev:full
    ```
    This runs both the Vue frontend (port 3000) and Express backend (port 3001) concurrently.
    Use this to test the contact form email functionality locally.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This command compiles and minifies the application for production deployment into the `dist/` directory.

4.  **Preview the production build:**
    ```bash
    npm run preview
    ```
    This command serves the built application locally for testing the production bundle.

### Other Commands

*   **Run Backend Server Only:**
    ```bash
    npm run server
    ```
    Starts the Express server on port 3001 for email handling.

*   **Run Unit Tests:**
    ```bash
    npm run test:unit
    ```
*   **Lint and Fix Code Issues:**
    ```bash
    npm run lint
    ```
*   **Format Code:**
    ```bash
    npm run format
    ```

## Email Configuration

The contact form sends emails via Aruba SMTP. To set up email functionality:

### Local Development

1.  **Copy the environment variables template:**
    ```bash
    cp .env.example .env
    ```

2.  **Configure your SMTP settings in `.env`:**
    ```env
    SMTP_HOST=smtps.aruba.it
    SMTP_PORT=465
    SMTP_SECURE=true
    SMTP_USER=info@codecraft.it
    SMTP_PASS=your-password
    SMTP_FROM_NAME=CodeCraft Studio
    CONTACT_EMAIL=info@codecraft.it
    ```

### Production (Vercel)

1.  **Configure environment variables in Vercel Dashboard:**
    - Go to: **Settings** → **Environment Variables**
    - Add all 7 SMTP variables (see `.env.example`)
    - Select **Production** environment
    - Redeploy after adding variables

2.  **Configure MX Records (Important!):**
    - If using Vercel nameservers, add MX records for email delivery
    - See [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md#configurazione-dominio) for details

### Deploy to Vercel

**Automatic Deployment (Recommended):**
- Connect GitHub repository to Vercel
- Every push to `main` triggers automatic deployment

**Manual Deployment:**
```bash
npm i -g vercel
vercel --prod
```

For complete setup instructions, see:
- [EMAIL_SETUP.md](EMAIL_SETUP.md) - Email configuration
- [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - Complete development guide

## SEO & Performance

This project includes comprehensive SEO optimization:

- ✅ **Meta Tags:** Complete Open Graph, Twitter Card, and Schema.org structured data
- ✅ **Sitemap:** Auto-generated XML sitemap at `/sitemap.xml`
- ✅ **Robots.txt:** Search engine crawling configuration
- ✅ **Google Search Console:** Verified property with submitted sitemap
- ✅ **Canonical URLs:** Proper canonical tags for all pages
- ✅ **Performance:** Optimized build with code splitting and lazy loading
- ✅ **PWA:** Service worker with offline capabilities and caching

### SEO Files

- `public/sitemap.xml` - Site structure for search engines
- `public/robots.txt` - Crawler instructions
- `index.html` - Base meta tags and structured data
- `src/router/index.js` - Per-page SEO metadata

## Custom Domain Setup

**Production URL:** https://www.codecraft.it

**Configuration:**
- **Domain Provider:** Aruba
- **DNS:** Vercel nameservers
- **SSL:** Automatic via Vercel
- **MX Records:** Configured for Aruba email

For detailed domain configuration, see [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md#configurazione-dominio).

## Documentation

- **[DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)** - Comprehensive development guide covering:
  - Logo optimization and favicon generation
  - Domain configuration (Aruba → Vercel)
  - Email system setup with MX records
  - SEO implementation and Google Search Console
  - Technical fixes and troubleshooting
  - Performance optimization

- **[EMAIL_SETUP.md](EMAIL_SETUP.md)** - Email configuration details

- **[CLAUDE.md](CLAUDE.md)** - Project instructions for Claude Code

## Contributing

This is a private project for CodeCraft Studio. For questions or collaboration inquiries, please contact via the website contact form.

## License

Proprietary - All rights reserved © 2024 CodeCraft Studio