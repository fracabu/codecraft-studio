# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Migration Status

**IMPORTANT:** This project is actively migrating from Vue 3 to Next.js 14 on the `nextjs-migration` branch. The codebase contains both Vue and Next.js code during this transition period.

- **Current Branch:** `nextjs-migration`
- **Target Framework:** Next.js 14 (React 19)
- **Migration Status:** In progress (Phases 1-6 complete, homepage functional)
- **See:** `MIGRATION_PLAN.md` for detailed migration roadmap

## Development Commands

### Next.js (Current)
- **Install dependencies**: `npm install`
- **Development server**: `npm run dev` (runs on port 3000)
- **Production build**: `npm run build`
- **Start production**: `npm run start`
- **Lint code**: `npm run lint` (Next.js ESLint)
- **Format code**: `npm run format` (Prettier)

### Legacy Commands (Vue - being phased out)
- `npm run dev:full` - Runs Vue frontend + Express backend concurrently
- `npm run server` - Express local development server (port 3001)
- `npm run test:unit` - Vitest tests (Vue components)

## Architecture Overview

CodeCraft Studio is an AI business automation platform transitioning from Vue 3 to Next.js 14 for improved mobile performance.

### Core Stack (Next.js)
- **Next.js 14** with App Router (React 19.2.0)
- **React Server Components** and Client Components
- **Tailwind CSS** with custom design system (rose/pink theme)
- **TypeScript** support enabled
- **Lucide React** for icons
- **Nodemailer** for SMTP email (Aruba)

### Key Architectural Decisions
1. **No animation libraries**: Pure CSS animations only (no Framer Motion, no @vueuse/motion)
2. **Performance-first**: Optimized for old mobile devices (tested on Blackview 9900)
3. **3D Pushable Buttons**: Custom CSS-only implementation with `.pushable` class
4. **SSR/SSG**: Leveraging Next.js for instant page loads
5. **API Routes**: Next.js route handlers replace Express + Vercel serverless functions

### Project Structure (Next.js)
```
codecraft-studio/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout with fonts, Header, Footer
│   ├── page.jsx                 # Homepage (migrated from Vue)
│   ├── contatti/page.jsx        # Contact form page
│   └── api/
│       └── send-email/route.js  # Email API endpoint (POST handler)
├── components/
│   ├── layout/
│   │   ├── AppHeader.jsx       # Navigation header
│   │   └── AppFooter.jsx       # Footer
│   └── common/
│       ├── BaseButton.jsx      # 3D pushable button component
│       └── CookieBanner.jsx    # GDPR cookie consent
├── styles/
│   └── globals.css             # Global styles, Tailwind imports, animations
├── public/                      # Static assets (images, logo, favicons)
├── src/                         # ⚠️ Legacy Vue code (being migrated)
├── server/                      # ⚠️ Legacy Express server (deprecated)
└── api/                         # ⚠️ Legacy Vercel functions (deprecated)
```

### Email System (Migrated to Next.js)
- **Contact Form**: Client component in `app/contatti/page.jsx`
- **API Endpoint**: `app/api/send-email/route.js` (Next.js POST route handler)
- **Email Service**: Nodemailer with Aruba SMTP (SSL port 465)
- **Email Template**: Branded HTML template with CodeCraft logo and gradient styling
- **Environment Variables**:
  - `SMTP_HOST` - Aruba SMTP server (`smtps.aruba.it`)
  - `SMTP_PORT` - Port number (`465` for SSL)
  - `SMTP_SECURE` - SSL flag (`true`)
  - `SMTP_USER` - SMTP username/email
  - `SMTP_PASS` - SMTP password
  - `SMTP_FROM_NAME` - Sender name (`CodeCraft Studio`)
  - `CONTACT_EMAIL` - Recipient email (`info@codecraft.it`)
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 (optional)

### Styling System
**Tailwind CSS** with custom configuration:
- **Primary Colors**: Rose/pink gradient theme (`#f43f5e`, `#ec4899`)
- **Background**: Dark slate gradients (`#0f172a` to `#1e293b`)
- **Fonts**:
  - `Inter` - Primary sans-serif (weights 300-900)
  - `Space Grotesk` - Display font (weights 300-700)
  - Both loaded via `next/font/google` with `display: 'swap'`
- **Custom Animations** (CSS only):
  - `fadeInUp` - Fade in with upward motion
  - `pulse-slow` - Slow pulsing effect
  - `glow` - Glowing shadow animation
  - `scroll` - Infinite scrolling banner
  - Star animations with keyframes
- **3D Pushable Buttons**: Custom CSS classes (`.pushable`, `.shadow`, `.edge`, `.front`)

### Component Patterns

#### BaseButton (React)
Versatile button component supporting:
- Multiple variants: `primary`, `secondary`, `success`, `warning`, `error`, `ghost`, `outline`
- Sizes: `xs`, `sm`, `md`, `lg`, `xl`
- Rendering modes: button, Link (Next.js), or anchor
- 3D pushable style (default) or flat style (`pushable={false}`)
- Left/right icons (Lucide components)
- Loading state with spinner
- Full TypeScript support

```jsx
import BaseButton from '@/components/common/BaseButton'
import { ArrowRight } from 'lucide-react'

<BaseButton
  to="/contatti"
  variant="primary"
  size="lg"
  rightIcon={ArrowRight}
>
  Contact Us
</BaseButton>
```

#### Client vs Server Components
- **Use `'use client'`** for: state, events, browser APIs, animations
- **Default to Server Components** for: static content, SEO metadata, data fetching

### Next.js Configuration (`next.config.js`)
- **Image Optimization**: WebP/AVIF formats, responsive device sizes
- **Console Removal**: Production builds strip console logs
- **Security Headers**: X-Frame-Options, X-DNS-Prefetch-Control
- **Environment Variables**: Exposed via `env` config for client-side access

### SEO & Metadata
- **Static Metadata**: Defined in page components via `export const metadata`
- **Open Graph & Twitter Cards**: Complete social sharing tags
- **Canonical URLs**: Set via `metadataBase` in root layout
- **Sitemap**: `public/sitemap.xml`
- **Robots.txt**: `public/robots.txt`

### Performance Optimizations
**Critical for mobile devices:**
1. **No heavy animation libraries** - Pure CSS keyframes only
2. **next/image** - Automatic WebP/AVIF conversion, lazy loading
3. **next/font** - Font optimization with display swap
4. **Code splitting** - Automatic via Next.js App Router
5. **Server Components** - Reduced client-side JavaScript
6. **CSS-only animations** - Hardware-accelerated transforms

**Target Lighthouse Scores:**
- Mobile: 90+
- Desktop: 95+
- Accessibility: 95+
- SEO: 100

### Build Configuration
**Tailwind** (`tailwind.config.js`):
- Content paths: `./app/**/*.{js,jsx,tsx}`, `./components/**/*.{js,jsx,tsx}`
- Extended theme with custom colors, fonts, animations
- Plugins: `@tailwindcss/forms`, `@tailwindcss/typography`

**Next.js**:
- React Strict Mode enabled
- Automatic production console removal
- TypeScript support with `jsconfig.json`

### Environment Setup
1. **Copy environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Configure SMTP variables** (see `.env.example`)

3. **Vercel deployment**:
   - Configure all environment variables in Vercel dashboard
   - Automatic deployments from `main` branch
   - Branch preview URLs for `nextjs-migration`

### Deployment
- **Production URL**: https://www.codecraft.it
- **Hosting**: Vercel
- **Domain**: Aruba (using Vercel nameservers)
- **SSL**: Automatic via Vercel
- **Framework Detection**: Automatic Next.js recognition
- **Build Command**: `next build`
- **Output Directory**: `.next`

### Migration Notes
**When working on this codebase:**
1. **Add new features to Next.js** (`app/`, `components/`), NOT Vue (`src/`)
2. **Use React patterns**: hooks, client components, Server Components
3. **Follow existing styling**: 3D pushable buttons, rose/pink gradients
4. **Test mobile performance**: Verify animations are smooth on low-end devices
5. **Maintain SEO**: Add proper metadata to all new pages
6. **Keep email template consistent**: Use existing branded HTML template

**Legacy Code (do not extend):**
- `src/` - Vue 3 components and views
- `server/` - Express local server
- `api/` - Old Vercel serverless functions
- `vite.config.js`, `vitest.config.js` - Vite build configs

### Testing Workflow
1. **Local development**: `npm run dev` → http://localhost:3000
2. **Production build**: `npm run build` → test for errors
3. **Production preview**: `npm run start` → verify build
4. **Lighthouse audit**: Test performance, accessibility, SEO
5. **Mobile testing**: Verify on low-end Android devices

### Code Style
- **Modern JavaScript**: ES6+, async/await, optional chaining
- **React**: Functional components with hooks, destructuring props
- **Tailwind**: Utility-first, responsive prefixes (`sm:`, `md:`, `lg:`)
- **File Naming**: PascalCase for components, camelCase for utilities
- **Client Components**: Always add `'use client'` directive at top when needed

When making changes, prioritize mobile performance, maintain the existing visual style (3D buttons, gradients, animations), and ensure all new pages have proper SEO metadata.
