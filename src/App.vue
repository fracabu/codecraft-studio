<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <!-- Header Component -->
    <AppHeader />

    <!-- Main Content -->
    <main class="relative z-10">
      <!-- Router View without transitions for debugging -->
      <router-view :key="$route.fullPath" />
    </main>

    <!-- Footer Component -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
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
  background: #f43f5e;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ec4899;
}

/* Router link active states */
.router-link-active {
  color: #f43f5e !important;
}

/* Page transitions - temporarily disabled for debugging */
/*
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
*/

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
  outline: 2px solid #f43f5e;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Text selection styling */
::selection {
  background-color: rgba(244, 63, 94, 0.3);
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
