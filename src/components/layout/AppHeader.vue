<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
    <nav class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
      <!-- Logo CodeCraft -->
      <router-link :to="localizedHome" class="flex items-center group">
        <img
          src="/logo-code2.png"
          alt="CodeCraft Studio"
          style="height: 48px; width: auto; display: block;"
          class="group-hover:scale-105 transition-transform duration-300"
        />
      </router-link>

      <!-- Navigation Desktop -->
      <div class="hidden md:flex items-center space-x-8">
        <router-link
          :to="localizedHome"
          :class="[
            'text-gray-300 hover:text-primary-400 transition-all duration-300 cursor-pointer relative group font-medium',
            isActiveRoute('home') ? 'text-primary-400' : ''
          ]"
        >
          {{ $t('nav.home') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        <router-link
          :to="localizedServices"
          :class="[
            'text-gray-300 hover:text-primary-400 transition-all duration-300 cursor-pointer relative group font-medium',
            isActiveRoute('services') ? 'text-primary-400' : ''
          ]"
        >
          {{ $t('nav.services') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        <router-link
          :to="localizedProjects"
          :class="[
            'text-gray-300 hover:text-primary-400 transition-all duration-300 cursor-pointer relative group font-medium',
            isActiveRoute('projects') ? 'text-primary-400' : ''
          ]"
        >
          {{ $t('nav.projects') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        <router-link
          :to="localizedContact"
          :class="[
            'text-gray-300 hover:text-primary-400 transition-all duration-300 cursor-pointer relative group font-medium',
            isActiveRoute('contact') ? 'text-primary-400' : ''
          ]"
        >
          {{ $t('nav.contact') }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <!-- Language Switcher Desktop -->
        <LanguageSwitcher />
      </div>

      <!-- CTA Button Desktop -->
      <div class="hidden md:block">
        <BaseButton
          tag="router-link"
          :to="localizedContact"
          variant="primary"
          size="md"
        >
          <span>{{ $t('nav.contactUs') }}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </BaseButton>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-white hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
        :class="{ 'text-primary-400': isMobileMenuOpen }"
      >
        <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/10 mx-6 rounded-b-2xl shadow-2xl"
      >
        <div class="flex flex-col space-y-2 p-6">
          <router-link
            :to="localizedHome"
            @click="closeMobileMenu"
            :class="[
              'text-gray-300 hover:text-primary-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              isActiveRoute('home') ? 'text-primary-400 bg-primary-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span>{{ $t('nav.home') }}</span>
          </router-link>
          <router-link
            :to="localizedServices"
            @click="closeMobileMenu"
            :class="[
              'text-gray-300 hover:text-primary-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              isActiveRoute('services') ? 'text-primary-400 bg-primary-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span>{{ $t('nav.services') }}</span>
          </router-link>
          <router-link
            :to="localizedProjects"
            @click="closeMobileMenu"
            :class="[
              'text-gray-300 hover:text-primary-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              isActiveRoute('projects') ? 'text-primary-400 bg-primary-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span>{{ $t('nav.projects') }}</span>
          </router-link>
          <router-link
            :to="localizedContact"
            @click="closeMobileMenu"
            :class="[
              'text-gray-300 hover:text-primary-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              isActiveRoute('contact') ? 'text-primary-400 bg-primary-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>{{ $t('nav.contact') }}</span>
          </router-link>

          <!-- Language Switcher Mobile -->
          <div class="pt-4 border-t border-white/10 mt-2">
            <LanguageSwitcher />
          </div>

          <!-- Mobile CTA Button -->
          <div class="pt-4 border-t border-white/10 mt-2">
            <BaseButton
              tag="router-link"
              :to="localizedContact"
              variant="primary"
              size="md"
              full-width
              @click="closeMobileMenu"
            >
              <span>{{ $t('nav.contactUs') }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/common/BaseButton.vue'
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue'
import { getLocalizedRoute } from '@/router'

const route = useRoute()
const { locale } = useI18n()

const isMobileMenuOpen = ref(false)

// Computed localized routes
const localizedHome = computed(() => getLocalizedRoute('home', locale.value))
const localizedServices = computed(() => getLocalizedRoute('services', locale.value))
const localizedProjects = computed(() => getLocalizedRoute('projects', locale.value))
const localizedContact = computed(() => getLocalizedRoute('contact', locale.value))

// Check if current route matches
const isActiveRoute = (routeName) => {
  const currentPath = route.path
  const localizedPath = getLocalizedRoute(routeName, locale.value)

  // Exact match for home
  if (routeName === 'home') {
    return currentPath === localizedPath || currentPath === `/${locale.value}`
  }

  // Starts with for other routes (to match sub-routes like /progetti/:slug)
  return currentPath.startsWith(localizedPath)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Mobile menu transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Active section indicator line */
.group:hover span {
  width: 100%;
}

/* Focus styles for accessibility */
button:focus-visible {
  outline: 2px solid theme('colors.primary.400');
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid theme('colors.primary.400');
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
