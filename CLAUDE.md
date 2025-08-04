# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `npm install`
- **Development server**: `npm run dev` (runs on port 3000 with auto-reload)
- **Production build**: `npm run build`
- **Preview production build**: `npm run preview` (runs on port 4173)
- **Run tests**: `npm run test:unit` (uses Vitest)
- **Lint code**: `npm run lint` (ESLint with auto-fix)
- **Format code**: `npm run format` (Prettier)

## Architecture Overview

This is a Vue 3 application using the Composition API with modern tooling:

### Core Stack
- **Vue 3** with Composition API (`<script setup>` syntax)
- **Vite** for build tooling and development server
- **Vue Router** with SEO metadata and analytics tracking
- **Pinia** for state management
- **Tailwind CSS** for styling with custom design system
- **Vitest** for unit testing

### Key Libraries
- **@vueuse/core**: Vue composition utilities
- **@vueuse/head**: Head management for SEO
- **@vueuse/motion**: Animation library
- **lucide-vue-next**: Icon library
- **Firebase**: Backend services (currently commented out)

### Project Structure
- `src/views/` - Page components with SEO metadata
- `src/components/common/` - Reusable UI components (BaseButton, BaseCard, etc.)
- `src/components/layout/` - Layout components (AppHeader, AppFooter, etc.)
- `src/stores/` - Pinia stores for state management
- `src/router/` - Vue Router configuration with SEO guards
- `src/plugins/` - Plugin configurations (Firebase)

### Special Features
- **SEO-optimized**: Router includes meta tags, Open Graph, and canonical URLs
- **PWA-ready**: Configured with service worker and manifest
- **Analytics integration**: Google Analytics 4 with performance monitoring
- **Error handling**: Global error handlers for Vue and JavaScript
- **Performance monitoring**: Core Web Vitals tracking
- **Responsive design**: Mobile-first approach with Tailwind

### Configuration Files
- **eslint.config.js**: Modern flat config with Vue rules
- **tailwind.config.js**: Custom design system with animations
- **vite.config.js**: Build optimization with chunk splitting and PWA
- **vitest.config.js**: Test configuration

## Development Notes

### Router Implementation
The router in `src/router/index.js` currently imports `HomeView-new.vue` instead of `HomeView.vue`. There are multiple HomeView variants in the views directory (`HomeView.vue`, `HomeView-new.vue`, `HomeView-test.vue`, `HomeView-backup.vue`).

### State Management
- Uses Pinia with stores in `src/stores/`
- `auth.js` and `counter.js` stores are available
- Global utilities provided via app.provide() in main.js

### Styling Approach
- Tailwind CSS with custom color palette (primary/secondary)
- Custom animations and keyframes defined in tailwind.config.js
- Responsive design with mobile-first breakpoints
- Dark theme with gradient backgrounds and particle effects

### Performance Optimizations
- Manual chunk splitting for better caching
- Runtime caching for external resources
- Console/debugger removal in production builds
- Optimized dependency bundling

### Error Handling
- Global error handlers in main.js
- Analytics error tracking in production
- Development-friendly error logging

When making changes, ensure you maintain the existing code style and follow the Vue 3 Composition API patterns used throughout the codebase.