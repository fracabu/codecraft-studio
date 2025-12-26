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
            {{ $t('projects.title') }}
          </h1>

          <!-- Description -->
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
            class="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
          >
            {{ $t('projects.subtitle') }}
          </p>
        </div>

        <!-- Category Filters -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          class="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            v-for="category in categories"
            :key="category.value"
            @click="selectedCategory = category.value"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              selectedCategory === category.value
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
            ]"
          >
            <span class="mr-1.5">{{ category.icon }}</span>
            {{ category.label }}
            <span class="ml-1.5 text-xs opacity-70">({{ getCategoryCount(category.value) }})</span>
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :to="getProjectDetailRoute(project.slug)"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 + index * 50 } }"
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
                <span>{{ $t('projects.learnMore') }}</span>
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
            {{ $t('projects.cta.title') }}
          </h2>
          <p class="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl mx-auto">
            {{ $t('projects.cta.description') }}
          </p>
          <router-link
            :to="localizedContact"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl font-semibold text-white hover:from-primary-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
          >
            <span>{{ $t('projects.cta.button') }}</span>
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/projects'
import { getLocalizedProjects } from '@/data/projects-en'
import { getLocalizedRoute } from '@/router'

const { t, locale } = useI18n()

// Get localized projects based on current locale
const localizedProjectsList = computed(() => getLocalizedProjects(projects, locale.value))

// Localized routes
const localizedContact = computed(() => getLocalizedRoute('contact', locale.value))

// Get project detail route with correct locale
const getProjectDetailRoute = (slug) => {
  const basePath = locale.value === 'it' ? 'progetti' : 'projects'
  return `/${locale.value}/${basePath}/${slug}`
}

// Category filter state
const selectedCategory = ref('all')

// Categories definition with icons (matching actual project categories)
const categories = computed(() => [
  { value: 'all', label: t('projects.filters.all'), icon: '🎯' },
  { value: 'Open Source', label: t('projects.filters.openSource'), icon: '📦' },
  { value: 'AI', label: t('projects.filters.ai'), icon: '🤖' },
  { value: 'Analytics', label: t('projects.filters.analytics'), icon: '📊' },
  { value: 'Hospitality', label: t('projects.filters.hospitality'), icon: '🏠' },
  { value: 'API', label: t('projects.filters.api'), icon: '🔌' },
  { value: 'SaaS', label: t('projects.filters.saas'), icon: '☁️' },
  { value: 'Web Development', label: t('projects.filters.webDev'), icon: '🌐' },
  { value: 'AI Automation', label: t('projects.filters.aiAutomation'), icon: '⚡' },
  { value: 'AI/ML', label: t('projects.filters.aiMl'), icon: '🧠' },
  { value: 'Trading Tool', label: t('projects.filters.trading'), icon: '📈' },
])

// Get count of projects per category
const getCategoryCount = (category) => {
  if (category === 'all') return localizedProjectsList.value.length
  return localizedProjectsList.value.filter(p => p.category === category).length
}

// Filtered projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return localizedProjectsList.value
  return localizedProjectsList.value.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
/* Ensure smooth transitions */
a {
  text-decoration: none;
}
</style>
