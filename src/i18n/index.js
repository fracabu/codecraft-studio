import { createI18n } from 'vue-i18n'
import it from './locales/it.json'
import en from './locales/en.json'

// Supported locales
export const SUPPORTED_LOCALES = ['it', 'en']
export const DEFAULT_LOCALE = 'it'

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  globalInjection: true, // Enable $t in templates
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    it,
    en
  }
})

/**
 * Set locale and update HTML lang attribute
 * @param {string} locale - The locale to set ('it' or 'en')
 */
export function setLocale(locale) {
  if (SUPPORTED_LOCALES.includes(locale)) {
    i18n.global.locale.value = locale
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)
  }
}

/**
 * Get saved locale from localStorage or browser preference
 * @returns {string} The locale to use
 */
export function getSavedLocale() {
  // Check localStorage first
  const saved = localStorage.getItem('locale')
  if (saved && SUPPORTED_LOCALES.includes(saved)) {
    return saved
  }

  // Check browser language
  const browserLang = navigator.language.split('-')[0]
  if (SUPPORTED_LOCALES.includes(browserLang)) {
    return browserLang
  }

  return DEFAULT_LOCALE
}

/**
 * Get the localized path for a route
 * @param {string} path - The path without locale prefix
 * @param {string} locale - The target locale
 * @returns {string} The localized path
 */
export function getLocalizedPath(path, locale) {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(it|en)/, '') || ''
  return `/${locale}${cleanPath}`
}

/**
 * Route path mappings for different locales
 */
export const routePaths = {
  home: { it: '', en: '' },
  services: { it: 'servizi', en: 'services' },
  projects: { it: 'progetti', en: 'projects' },
  projectDetail: { it: 'progetti', en: 'projects' },
  contact: { it: 'contatti', en: 'contact' },
  privacy: { it: 'privacy', en: 'privacy' },
  cookie: { it: 'cookie', en: 'cookie' }
}

export default i18n
