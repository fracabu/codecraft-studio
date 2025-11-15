<template>
  <div class="w-full min-h-screen overflow-x-hidden pt-20">
    <div v-if="project" class="min-h-screen">
      <!-- Hero Section -->
      <section class="py-20 px-6 bg-gradient-to-br from-primary-500/5 to-accent-500/5">
        <div class="max-w-5xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <router-link to="/" class="hover:text-primary-400 transition-colors">Home</router-link>
            <span>/</span>
            <router-link to="/tool" class="hover:text-primary-400 transition-colors">Progetti</router-link>
            <span>/</span>
            <span class="text-white">{{ project.title }}</span>
          </nav>

          <!-- Title -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {{ project.title }}
          </h1>

          <!-- Tagline -->
          <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
            {{ project.tagline }}
          </p>

          <!-- Metrics -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(metric, index) in project.metrics" :key="index" class="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div :class="['text-3xl font-bold mb-1', metric.color]">
                {{ metric.value }}
              </div>
              <div class="text-sm text-gray-400">{{ metric.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="py-20 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-12">
            <!-- Main Column -->
            <div class="md:col-span-2">
              <!-- Description -->
              <div class="prose prose-invert prose-lg max-w-none mb-12">
                <div v-html="project.longDescription" class="text-gray-300 leading-relaxed"></div>
              </div>

              <!-- Features -->
              <div v-if="project.features && project.features.length" class="mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Funzionalità</h2>
                <div class="grid md:grid-cols-2 gap-4">
                  <div
                    v-for="(feature, index) in project.features"
                    :key="index"
                    class="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="text-gray-300 text-sm">{{ feature }}</span>
                  </div>
                </div>
              </div>

              <!-- Testimonial -->
              <div v-if="project.testimonial" class="p-8 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl">
                <svg class="w-10 h-10 text-primary-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p class="text-lg text-white italic mb-4">"{{ project.testimonial.quote }}"</p>
                <div>
                  <div class="font-semibold text-white">{{ project.testimonial.author }}</div>
                  <div class="text-sm text-gray-400">{{ project.testimonial.role }}</div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="md:col-span-1">
              <!-- Tech Stack -->
              <div class="p-6 bg-white/5 rounded-2xl border border-white/10 mb-6 sticky top-24">
                <h3 class="text-lg font-bold text-white mb-4">Tech Stack</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, index) in project.technologies"
                    :key="index"
                    class="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-lg text-sm text-primary-300"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- CTA Button -->
                <div v-if="project.link" class="mt-6 pt-6 border-t border-white/10">
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl font-semibold text-white hover:from-primary-600 hover:to-accent-700 transition-all duration-300 text-center"
                  >
                    Visita il Progetto →
                  </a>
                </div>

                <!-- Contact CTA -->
                <div class="mt-4">
                  <router-link
                    to="/contatti"
                    class="block w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 text-center"
                  >
                    Progetto Simile?
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- More Projects -->
      <section class="py-20 px-6 bg-white/[0.02]">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Altri Progetti
          </h2>
          <div class="grid md:grid-cols-3 gap-6">
            <router-link
              v-for="otherProject in otherProjects"
              :key="otherProject.id"
              :to="`/progetti/${otherProject.slug}`"
              class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all p-6"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">{{ otherProject.category }}</span>
              </div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {{ otherProject.title }}
              </h3>
              <p class="text-sm text-gray-400">
                {{ otherProject.tagline }}
              </p>
            </router-link>
          </div>
        </div>
      </section>
    </div>

    <!-- Loading/Not Found State -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">Progetto non trovato</h1>
        <p class="text-gray-400 mb-8">Il progetto che cerchi non esiste o è stato rimosso.</p>
        <router-link
          to="/tool"
          class="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 rounded-xl font-semibold text-white hover:bg-primary-600 transition-colors"
        >
          <span>Torna ai Progetti</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects, getProjectBySlug } from '@/data/projects'

const route = useRoute()
const project = ref(null)

const otherProjects = computed(() => {
  if (!project.value) return []
  return projects
    .filter(p => p.id !== project.value.id)
    .slice(0, 3)
})

onMounted(() => {
  const slug = route.params.slug
  project.value = getProjectBySlug(slug)

  // Update page title
  if (project.value) {
    document.title = `${project.value.title} | CodeCraft Studio`
  }
})
</script>
