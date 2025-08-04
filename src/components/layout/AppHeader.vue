<template>
  <header class="relative z-50 p-6">
    <nav class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo CodeCraft Enhanced -->
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div>
          <div class="text-xl font-bold text-white hover:text-cyan-400 transition-colors cursor-default">
            CodeCraft
          </div>
          <div class="text-sm text-gray-400 tracking-wider font-medium">
            AI AUTOMATIONS
          </div>
        </div>
      </div>

      <!-- Navigation Desktop -->
      <div class="hidden md:flex space-x-8">
        <a
          href="#home"
          @click="scrollTo('home')"
          :class="[
            'text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer relative group',
            activeSection === 'home' ? 'text-cyan-400' : ''
          ]"
        >
          Home
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#servizi"
          @click="scrollTo('servizi')"
          :class="[
            'text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer relative group',
            activeSection === 'servizi' ? 'text-cyan-400' : ''
          ]"
        >
          Servizi
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#tool"
          @click="scrollTo('tool')"
          :class="[
            'text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer relative group',
            activeSection === 'tool' ? 'text-cyan-400' : ''
          ]"
        >
          Tool
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contatti"
          @click="scrollTo('contatti')"
          :class="[
            'text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer relative group',
            activeSection === 'contatti' ? 'text-cyan-400' : ''
          ]"
        >
          Contatti
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <!-- CTA Button Desktop -->
      <div class="hidden md:block">
        <button
          @click="scrollTo('contatti')"
          class="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
          </svg>
          <span>Consulenza Gratuita</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        :class="{ 'text-cyan-400': isMobileMenuOpen }"
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
          <a
            href="#home"
            @click="scrollToAndCloseMobile('home')"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              activeSection === 'home' ? 'text-cyan-400 bg-cyan-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span>Home</span>
          </a>
          <a
            href="#servizi"
            @click="scrollToAndCloseMobile('servizi')"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              activeSection === 'servizi' ? 'text-cyan-400 bg-cyan-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span>Servizi</span>
          </a>
          <a
            href="#tool"
            @click="scrollToAndCloseMobile('tool')"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              activeSection === 'tool' ? 'text-cyan-400 bg-cyan-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Tool</span>
          </a>
          <a
            href="#contatti"
            @click="scrollToAndCloseMobile('contatti')"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3',
              activeSection === 'contatti' ? 'text-cyan-400 bg-cyan-400/10' : ''
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Contatti</span>
          </a>

          <!-- Mobile CTA Button -->
          <div class="pt-4 border-t border-white/10 mt-4">
            <button
              @click="scrollToAndCloseMobile('contatti')"
              class="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
              </svg>
              <span>Consulenza Gratuita</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = elementId
  }
}

const scrollToAndCloseMobile = (elementId) => {
  scrollTo(elementId)
  isMobileMenuOpen.value = false
}

// Active section detection
const updateActiveSection = () => {
  const sections = ['home', 'servizi', 'tool', 'contatti']

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      const isVisible = rect.top <= 100 && rect.bottom >= 100

      if (isVisible) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
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
  outline: 2px solid theme('colors.cyan.400');
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid theme('colors.cyan.400');
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
