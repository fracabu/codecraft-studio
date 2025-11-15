# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `npm install`
- **Development server (frontend only)**: `npm run dev` (runs on port 3000 with auto-reload)
- **Backend server (local email API)**: `npm run server` (runs on port 3001)
- **Full development (frontend + backend)**: `npm run dev:full` (runs both concurrently)
- **Production build**: `npm run build`
- **Preview production build**: `npm run preview` (runs on port 4173)
- **Run tests**: `npm run test:unit` (uses Vitest)
- **Lint code**: `npm run lint` (ESLint with auto-fix)
- **Format code**: `npm run format` (Prettier)

## Architecture Overview

This is a Vue 3 application using the Composition API with modern tooling for an AI business automation platform (CodeCraft Studio).

### Core Stack
- **Vue 3** with Composition API (`<script setup>` syntax)
- **Vite** for build tooling and development server
- **Vue Router** with comprehensive SEO metadata and analytics tracking
- **Pinia** for state management
- **Tailwind CSS** for styling with custom design system
- **Vitest** for unit testing
- **Express** for local development API server
- **Vercel Serverless Functions** for production API endpoints

### Key Libraries
- **@vueuse/core**: Vue composition utilities
- **@vueuse/head**: Head management for SEO
- **@vueuse/motion**: Animation library with custom motion- elements
- **lucide-vue-next** and **@heroicons/vue**: Icon libraries
- **vite-plugin-pwa**: Progressive Web App capabilities
- **nodemailer**: Email sending via SMTP
- **express**: Local development server
- **cors**: CORS middleware for API endpoints

### Project Structure
- `src/views/` - Page components (HomeView, ServicesView, ToolView, ContattiView)
- `src/components/common/` - Reusable UI components (BaseButton, BaseCard, BaseModal, BaseSkeleton, BaseBreadcrumbs, LoadingSpinner)
- `src/components/layout/` - Layout components (AppHeader, AppFooter, HeroSection, ParticleBackground)
- `src/stores/` - Pinia stores (auth.js, counter.js)
- `src/router/` - Vue Router configuration with SEO guards
- `server/` - Express local development server for email API
- `api/` - Vercel serverless functions for production

### Router & SEO Implementation
The router in `src/router/index.js` includes comprehensive SEO metadata for all routes:
- Each route has meta tags: title, description, keywords, Open Graph tags, canonical URLs
- Navigation guards (`beforeEach`) dynamically update meta tags and canonical links
- Analytics tracking in `afterEach` guard (Google Analytics 4)
- Smooth scroll behavior to top on route changes
- Helper functions `updateOrCreateMeta()` and `updateOrCreateLink()` manage SEO tags

### Global App Configuration (main.js)
- **Analytics**: Google Analytics 4 initialized only in production with GDPR compliance (anonymize_ip, no ad personalization)
- **Error Handling**: Global error handlers for Vue errors, JavaScript errors, and unhandled promise rejections
- **Performance Monitoring**: Core Web Vitals tracking (LCP, FID, CLS) using PerformanceObserver API
- **PWA**: Service Worker registration in production with analytics tracking
- **Global Providers**:
  - `$toast`: Toast notification utility via CustomEvent
  - `$track`: Analytics tracking wrapper
  - `$env`: Access to import.meta.env
- **Development Helpers**: Keyboard shortcuts (Ctrl/Cmd+K to clear console)

### Styling & Theming
- **Tailwind CSS** with custom color palette:
  - Primary colors (sky blue theme): 50-900 scale, default #0ea5e9
  - Secondary colors (emerald green): 50-900 scale, default #10b981
- **Custom Fonts**: Inter (sans), Space Grotesk (display)
- **Custom Animations**: fade-in-up, pulse-slow, bounce-slow, glow
- **Plugins**: @tailwindcss/forms, @tailwindcss/typography
- **Dark Theme**: Configured with gradient backgrounds and particle effects

### Build Configuration (vite.config.js)
- **Path Alias**: `@` points to `./src`
- **Manual Chunk Splitting**:
  - `vendor`: Vue core (vue, vue-router, pinia)
  - `firebase`: Firebase modules
  - `ui`: VueUse libraries
  - `lucide`: Icon library
- **Production Optimizations**:
  - Terser minification with console/debugger removal
  - CSS code splitting enabled
  - Sourcemaps disabled for security
- **PWA Configuration**:
  - Auto-update service worker
  - Runtime caching for Google Fonts and Firebase Storage
  - Manifest: "CodeCraft Studio - AI Business Automations"
- **Custom Elements**: `motion-` prefixed tags for @vueuse/motion

### Email System
- **Contact Form** in `ContattiView.vue` sends to backend API
- **Local Development**: Express server (`server/index.js`) on port 3001
- **Production**: Vercel serverless function (`api/send-email.js`)
- **Email Sending**: Nodemailer with SMTP configuration
- **Configuration**: See `EMAIL_SETUP.md` for complete setup guide
- **Environment Variables Required**:
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`
  - `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM_NAME`
  - `CONTACT_EMAIL` (where messages are sent)
- Form automatically switches between local (`http://localhost:3001/api/send-email`) and production (`/api/send-email`) endpoints

### ESLint Configuration
- Modern flat config format (eslint.config.js)
- Vue 3 Composition API globals pre-configured (defineProps, defineEmits, etc.)
- Browser and analytics globals defined (gtag, dataLayer)
- Vue multi-word component names rule disabled
- Allows console/debugger in development

### Environment Variables
Required variables (see `.env.example`):
- `VITE_GA_MEASUREMENT_ID` - Google Analytics 4 measurement ID (optional)
- `SMTP_HOST` - SMTP server host (e.g., smtp.aruba.it)
- `SMTP_PORT` - SMTP port (587 for TLS, 465 for SSL)
- `SMTP_SECURE` - Use SSL (true/false)
- `SMTP_USER` - SMTP username/email
- `SMTP_PASS` - SMTP password
- `SMTP_FROM_NAME` - Sender name for emails
- `CONTACT_EMAIL` - Email address where contact form submissions are sent

**Important:**
- Copy `.env.example` to `.env` for local development
- Configure environment variables in Vercel dashboard for production
- Never commit `.env` to version control

When making changes, ensure you maintain the existing code style and follow the Vue 3 Composition API patterns used throughout the codebase.
