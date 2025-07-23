<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <!-- Particle Background Effect -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <!-- Animated particles -->
      <div v-for="i in 25" :key="i"
           class="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 2 + 's',
             animationDuration: (2 + Math.random() * 3) + 's'
           }">
      </div>

      <!-- Larger floating particles -->
      <div v-for="i in 8" :key="`big-${i}`"
           class="absolute w-2 h-2 bg-blue-400/40 rounded-full"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
             animationDelay: Math.random() * 3 + 's'
           }">
      </div>
    </div>

    <!-- Header -->
    <header class="relative z-50 p-6">
      <nav class="flex justify-between items-center max-w-7xl mx-auto">
        <!-- Logo CodeCraft -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <div class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              CodeCraft
            </div>
            <div class="text-sm text-gray-400 tracking-wider font-medium">
              AI AUTOMATIONS
            </div>
          </div>
        </router-link>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex space-x-8">
          <router-link
            to="/"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group',
              $route.name === 'Home' ? 'text-cyan-400' : ''
            ]"
          >
            Home
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  :class="{ 'w-full': $route.name === 'Home' }"></span>
          </router-link>

          <router-link
            to="/servizi"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group',
              $route.name === 'Servizi' ? 'text-cyan-400' : ''
            ]"
          >
            Servizi
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  :class="{ 'w-full': $route.name === 'Servizi' }"></span>
          </router-link>

          <router-link
            to="/tool"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group',
              $route.name === 'Tool' ? 'text-cyan-400' : ''
            ]"
          >
            Tool
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  :class="{ 'w-full': $route.name === 'Tool' }"></span>
          </router-link>

          <router-link
            to="/casi-successo"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group',
              $route.name === 'CasiSuccesso' ? 'text-cyan-400' : ''
            ]"
          >
            Casi di Successo
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  :class="{ 'w-full': $route.name === 'CasiSuccesso' }"></span>
          </router-link>

          <router-link
            to="/contatti"
            :class="[
              'text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group',
              $route.name === 'Contatti' ? 'text-cyan-400' : ''
            ]"
          >
            Contatti
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                  :class="{ 'w-full': $route.name === 'Contatti' }"></span>
          </router-link>
        </div>

        <!-- CTA Button Desktop -->
        <div class="hidden md:block">
          <router-link
            to="/contatti"
            class="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
            </svg>
            <span>Consulenza Gratuita</span>
          </router-link>
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
            <router-link
              to="/"
              @click="closeMobileMenu"
              :class="[
                'flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors',
                $route.name === 'Home' ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-cyan-400'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <span>Home</span>
            </router-link>

            <router-link
              to="/servizi"
              @click="closeMobileMenu"
              :class="[
                'flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors',
                $route.name === 'Servizi' ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-cyan-400'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span>Servizi</span>
            </router-link>

            <router-link
              to="/tool"
              @click="closeMobileMenu"
              :class="[
                'flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors',
                $route.name === 'Tool' ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-cyan-400'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Tool</span>
            </router-link>

            <router-link
              to="/casi-successo"
              @click="closeMobileMenu"
              :class="[
                'flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors',
                $route.name === 'CasiSuccesso' ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-cyan-400'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span>Casi di Successo</span>
            </router-link>

            <router-link
              to="/contatti"
              @click="closeMobileMenu"
              :class="[
                'flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors',
                $route.name === 'Contatti' ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-cyan-400'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>Contatti</span>
            </router-link>

            <!-- Mobile CTA Button -->
            <div class="pt-4 border-t border-white/10 mt-4">
              <router-link
                to="/contatti"
                @click="closeMobileMenu"
                class="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
                </svg>
                <span>Consulenza Gratuita</span>
              </router-link>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main class="relative z-10">
      <!-- Router View with page transitions -->
      <Transition name="page" mode="out-in">
        <router-view :key="$route.fullPath" />
      </Transition>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 py-12 px-6 border-t border-white/10 bg-slate-900/50">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Logo e descrizione -->
          <div class="col-span-2">
            <router-link to="/" class="flex items-center space-x-3 mb-6 group">
              <div class="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">CodeCraft Studio</div>
                <div class="text-sm text-gray-400">AI AUTOMATIONS</div>
              </div>
            </router-link>
            <p class="text-gray-300 mb-4 max-w-md">
              Automatizziamo i processi business con intelligenza artificiale per ridurre costi e aumentare produttività.
            </p>
            <div class="flex space-x-4">
              <a href="mailto:fracabu@gmail.com" class="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Links rapidi -->
          <div>
            <h3 class="text-white font-semibold mb-4">Servizi</h3>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/servizi" class="hover:text-cyan-400 transition-colors">Automazioni AI</router-link></li>
              <li><router-link to="/servizi" class="hover:text-cyan-400 transition-colors">Ottimizzazione Processi</router-link></li>
              <li><router-link to="/tool" class="hover:text-cyan-400 transition-colors">Tool Personalizzati</router-link></li>
              <li><router-link to="/contatti" class="hover:text-cyan-400 transition-colors">Consulenza</router-link></li>
            </ul>
          </div>

          <!-- Contatti -->
          <div>
            <h3 class="text-white font-semibold mb-4">Contatti</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="mailto:fracabu@gmail.com" class="hover:text-cyan-400 transition-colors">
                  fracabu@gmail.com
                </a>
              </li>
              <li>Milano, Lombardia, IT</li>
              <li>
                <a href="https://www.codecraft.it" class="hover:text-cyan-400 transition-colors">
                  www.codecraft.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 border-t border-white/10 text-center">
          <p class="text-gray-400 text-sm">
            © 2024 CodeCraft Studio - Automazioni AI per il futuro del business.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a2e;
}

::-webkit-scrollbar-thumb {
  background: #00f5ff;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00d4ff;
}

/* Router link active states */
.router-link-active {
  color: #00f5ff !important;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

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

/* Float animation for particles */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.4;
  }
  25% {
    transform: translateY(-15px) scale(1.1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-8px) scale(0.9);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-20px) scale(1.05);
    opacity: 0.5;
  }
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid theme('colors.cyan.400');
  outline-offset: 2px;
  border-radius: 4px;
}

/* Text selection styling */
::selection {
  background-color: rgba(6, 182, 212, 0.3);
  color: white;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
