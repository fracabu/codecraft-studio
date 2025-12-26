import { createRouter, createWebHistory } from 'vue-router'
import i18n, { SUPPORTED_LOCALES, DEFAULT_LOCALE, setLocale } from '../i18n'

// Views
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ToolView from '../views/ToolView.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import ContattiView from '../views/ContattiView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import CookieView from '../views/CookieView.vue'

// Route definitions for each locale
const localeRoutes = [
  {
    path: '',
    name: 'home',
    component: HomeView,
    meta: { metaKey: 'home' }
  },
  // Italian paths
  {
    path: 'servizi',
    name: 'services-it',
    component: ServicesView,
    meta: { metaKey: 'services', locale: 'it' }
  },
  {
    path: 'progetti',
    name: 'projects-it',
    component: ToolView,
    meta: { metaKey: 'projects', locale: 'it' }
  },
  {
    path: 'progetti/:slug',
    name: 'project-detail-it',
    component: ProjectDetail,
    meta: { metaKey: 'projectDetail', locale: 'it' }
  },
  {
    path: 'contatti',
    name: 'contact-it',
    component: ContattiView,
    meta: { metaKey: 'contact', locale: 'it' }
  },
  // English paths
  {
    path: 'services',
    name: 'services-en',
    component: ServicesView,
    meta: { metaKey: 'services', locale: 'en' }
  },
  {
    path: 'projects',
    name: 'projects-en',
    component: ToolView,
    meta: { metaKey: 'projects', locale: 'en' }
  },
  {
    path: 'projects/:slug',
    name: 'project-detail-en',
    component: ProjectDetail,
    meta: { metaKey: 'projectDetail', locale: 'en' }
  },
  {
    path: 'contact',
    name: 'contact-en',
    component: ContattiView,
    meta: { metaKey: 'contact', locale: 'en' }
  },
  // Shared paths (same in both languages)
  {
    path: 'privacy',
    name: 'privacy',
    component: PrivacyView,
    meta: { metaKey: 'privacy' }
  },
  {
    path: 'cookie',
    name: 'cookie',
    component: CookieView,
    meta: { metaKey: 'cookie' }
  }
]

// Main routes with locale prefix
const routes = [
  // Redirect root to default locale
  {
    path: '/',
    redirect: `/${DEFAULT_LOCALE}`
  },
  // Locale-prefixed routes
  {
    path: '/:locale(it|en)',
    children: localeRoutes
  },
  // Legacy redirects (old URLs without locale)
  { path: '/servizi', redirect: '/it/servizi' },
  { path: '/tool', redirect: '/it/progetti' },
  { path: '/progetti/:slug', redirect: to => `/it/progetti/${to.params.slug}` },
  { path: '/contatti', redirect: '/it/contatti' },
  { path: '/privacy', redirect: '/it/privacy' },
  { path: '/cookie', redirect: '/it/cookie' },
  // Catch all - redirect to home
  {
    path: '/:pathMatch(.*)*',
    redirect: `/${DEFAULT_LOCALE}`
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global navigation guards
router.beforeEach((to, from, next) => {
  // Get locale from route params
  const locale = to.params.locale

  // Validate and set locale
  if (locale && SUPPORTED_LOCALES.includes(locale)) {
    setLocale(locale)
  }

  // Get meta key for translations
  const metaKey = to.meta.metaKey
  if (metaKey) {
    const t = i18n.global.t

    // Update document title
    const title = t(`meta.${metaKey}.title`)
    if (title && !title.startsWith('meta.')) {
      document.title = title
    }

    // Update meta description
    const description = t(`meta.${metaKey}.description`)
    if (description && !description.startsWith('meta.')) {
      updateOrCreateMeta('description', description)
    }

    // Update meta keywords
    const keywords = t(`meta.${metaKey}.keywords`)
    if (keywords && !keywords.startsWith('meta.')) {
      updateOrCreateMeta('keywords', keywords)
    }

    // Update Open Graph tags
    const ogTitle = t(`meta.${metaKey}.ogTitle`) || title
    if (ogTitle && !ogTitle.startsWith('meta.')) {
      updateOrCreateMeta('og:title', ogTitle, 'property')
    }

    const ogDescription = t(`meta.${metaKey}.ogDescription`) || description
    if (ogDescription && !ogDescription.startsWith('meta.')) {
      updateOrCreateMeta('og:description', ogDescription, 'property')
    }

    // Update canonical URL with locale
    const baseUrl = 'https://www.codecraft.it'
    const canonicalUrl = `${baseUrl}${to.path}`
    updateOrCreateLink('canonical', canonicalUrl)

    // Update alternate language links for SEO
    updateAlternateLinks(to.path, locale || DEFAULT_LOCALE)
  }

  next()
})

// Helper function to update or create meta tags
function updateOrCreateMeta(name, content, attribute = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)

  if (element) {
    element.setAttribute('content', content)
  } else {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    element.setAttribute('content', content)
    document.head.appendChild(element)
  }
}

// Helper function to update or create link tags
function updateOrCreateLink(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`)

  if (element) {
    element.setAttribute('href', href)
  } else {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    element.setAttribute('href', href)
    document.head.appendChild(element)
  }
}

// Update alternate language links for SEO
function updateAlternateLinks(currentPath, currentLocale) {
  const baseUrl = 'https://www.codecraft.it'

  // Path mappings between locales
  const pathMappings = {
    'servizi': 'services',
    'services': 'servizi',
    'progetti': 'projects',
    'projects': 'progetti',
    'contatti': 'contact',
    'contact': 'contatti'
  }

  SUPPORTED_LOCALES.forEach(locale => {
    let alternatePath = currentPath

    // If switching to different locale, translate the path
    if (locale !== currentLocale) {
      alternatePath = currentPath.replace(/^\/(it|en)/, `/${locale}`)

      // Also translate path segments
      Object.entries(pathMappings).forEach(([from, to]) => {
        if (currentLocale === 'it' && locale === 'en') {
          alternatePath = alternatePath.replace(`/${from}`, `/${to}`)
        } else if (currentLocale === 'en' && locale === 'it') {
          alternatePath = alternatePath.replace(`/${from}`, `/${to}`)
        }
      })
    }

    const href = `${baseUrl}${alternatePath}`
    let element = document.querySelector(`link[rel="alternate"][hreflang="${locale}"]`)

    if (element) {
      element.setAttribute('href', href)
    } else {
      element = document.createElement('link')
      element.setAttribute('rel', 'alternate')
      element.setAttribute('hreflang', locale)
      element.setAttribute('href', href)
      document.head.appendChild(element)
    }
  })

  // Add x-default alternate link
  let xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]')
  if (!xDefault) {
    xDefault = document.createElement('link')
    xDefault.setAttribute('rel', 'alternate')
    xDefault.setAttribute('hreflang', 'x-default')
    document.head.appendChild(xDefault)
  }
  xDefault.setAttribute('href', `${baseUrl}/${DEFAULT_LOCALE}${currentPath.replace(/^\/(it|en)/, '')}`)
}

// Track page views for analytics
router.afterEach((to) => {
  // Google Analytics 4 tracking
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href
    })
  }

  // Development logging
  if (import.meta.env.DEV) {
    console.log(`🚀 Navigated to: ${to.name} (${to.path})`)
    console.log(`🌐 Locale: ${to.params.locale || DEFAULT_LOCALE}`)
    console.log(`📄 Page title: ${document.title}`)
  }
})

/**
 * Get localized route path
 * @param {string} routeName - Base route name (e.g., 'services', 'projects')
 * @param {string} locale - Target locale
 * @param {Object} params - Route params
 * @returns {string} Localized path
 */
export function getLocalizedRoute(routeName, locale = null, params = {}) {
  const currentLocale = locale || i18n.global.locale.value

  const routeMap = {
    home: { it: '', en: '' },
    services: { it: 'servizi', en: 'services' },
    projects: { it: 'progetti', en: 'projects' },
    'project-detail': { it: 'progetti', en: 'projects' },
    contact: { it: 'contatti', en: 'contact' },
    privacy: { it: 'privacy', en: 'privacy' },
    cookie: { it: 'cookie', en: 'cookie' }
  }

  const basePath = routeMap[routeName]?.[currentLocale] || routeName
  let path = `/${currentLocale}/${basePath}`.replace(/\/+/g, '/').replace(/\/$/, '') || `/${currentLocale}`

  // Add params like :slug
  if (params.slug) {
    path += `/${params.slug}`
  }

  return path
}

/**
 * Switch to another locale while staying on same page
 * @param {string} newLocale - Target locale
 */
export function switchLocale(newLocale) {
  if (!SUPPORTED_LOCALES.includes(newLocale)) return

  const currentPath = router.currentRoute.value.path
  const currentLocale = router.currentRoute.value.params.locale || DEFAULT_LOCALE

  // Path mappings
  const itToEn = {
    'servizi': 'services',
    'progetti': 'projects',
    'contatti': 'contact'
  }
  const enToIt = Object.fromEntries(Object.entries(itToEn).map(([k, v]) => [v, k]))

  let newPath = currentPath.replace(`/${currentLocale}`, `/${newLocale}`)

  // Translate path segments
  if (currentLocale === 'it' && newLocale === 'en') {
    Object.entries(itToEn).forEach(([it, en]) => {
      newPath = newPath.replace(`/${it}`, `/${en}`)
    })
  } else if (currentLocale === 'en' && newLocale === 'it') {
    Object.entries(enToIt).forEach(([en, it]) => {
      newPath = newPath.replace(`/${en}`, `/${it}`)
    })
  }

  router.push(newPath)
}

export default router
