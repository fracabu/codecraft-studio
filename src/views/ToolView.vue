<template>
  <div class="w-full min-h-screen overflow-x-hidden pt-20">
    <section class="min-h-[calc(100vh-5rem)] flex items-center px-6 py-12">
      <div class="max-w-7xl mx-auto w-full">
        <!-- Header -->
        <div class="text-center mb-12">
          <!-- Title -->
          <h1
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Progetti Sviluppati
          </h1>

          <!-- Description -->
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
            class="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
          >
            Scopri i progetti che abbiamo realizzato: SaaS, automazioni, AI integration e molto altro.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="(project, index) in projects"
            :key="project.id"
            :to="`/progetti/${project.slug}`"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 + index * 100 } }"
            class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 hover:bg-white/[0.07] transition-all duration-300"
          >
            <!-- Card Content -->
            <div class="p-5">
              <!-- Icon -->
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                {{ project.title }}
              </h3>

              <!-- Tagline -->
              <p class="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed line-clamp-2">
                {{ project.tagline }}
              </p>

              <!-- Tech Stack Preview -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span
                  v-for="(tech, index) in project.technologies.slice(0, 3)"
                  :key="index"
                  class="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="px-2 py-0.5 text-xs text-gray-500">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <!-- CTA -->
              <div class="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                <span>Scopri di più</span>
                <svg class="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </router-link>
        </div>

        <!-- CTA Section -->
        <div class="mt-12 text-center p-8 bg-gradient-to-br from-primary-500/5 to-accent-500/5 border border-primary-500/10 rounded-2xl">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Hai un'idea simile?
          </h2>
          <p class="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl mx-auto">
            Parliamo del tuo progetto e vediamo come possiamo aiutarti a realizzarlo.
          </p>
          <router-link
            to="/contatti"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl font-semibold text-white hover:from-primary-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
          >
            <span>Richiedi Consulenza Gratuita</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from '@/data/projects'
</script>

<style scoped>
/* Ensure smooth transitions */
a {
  text-decoration: none;
}
</style>
