<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
    <!-- Hero Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>

      <div class="relative max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          {{ $t('privacy.title') }}
        </h1>
        <p
          class="text-xl text-gray-300 mb-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        >
          {{ $t('privacy.subtitle') }}
        </p>
        <p
          class="text-sm text-gray-400"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          {{ $t('privacy.lastUpdate') }} {{ lastUpdate }}
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div class="prose prose-invert prose-lg max-w-none">
            <!-- Introduzione -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.intro.title') }}</h2>
              <p class="text-gray-300 leading-relaxed">
                {{ $t('privacy.sections.intro.content') }}
              </p>
            </section>

            <!-- Titolare del trattamento -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.controller.title') }}</h2>
              <div class="bg-white/5 rounded-lg p-6 border border-white/10">
                <p class="text-gray-300 mb-2">
                  <strong class="text-white">CodeCraft Studio</strong>
                </p>
                <p class="text-gray-300 mb-2">Email: info@codecraft.it</p>
                <p class="text-gray-300">Sito web: www.codecraft.it</p>
              </div>
            </section>

            <!-- Dati raccolti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.dataCollected.title') }}</h2>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">{{ $t('privacy.sections.dataCollected.provided.title') }}</h3>
              <p class="text-gray-300 mb-4">
                {{ $t('privacy.sections.dataCollected.provided.intro') }}
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li v-for="(item, index) in $tm('privacy.sections.dataCollected.provided.items')" :key="index">{{ item }}</li>
              </ul>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">{{ $t('privacy.sections.dataCollected.automatic.title') }}</h3>
              <p class="text-gray-300 mb-4">
                {{ $t('privacy.sections.dataCollected.automatic.intro') }}
              </p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li v-for="(item, index) in $tm('privacy.sections.dataCollected.automatic.items')" :key="index">{{ item }}</li>
              </ul>
            </section>

            <!-- Finalità del trattamento -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.purposes.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('privacy.sections.purposes.intro') }}</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li v-for="(item, index) in $tm('privacy.sections.purposes.items')" :key="index">
                  <strong class="text-white">{{ item.title }}</strong> - {{ item.description }}
                </li>
              </ul>
            </section>

            <!-- Base giuridica -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.legalBasis.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('privacy.sections.legalBasis.intro') }}</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li v-for="(item, index) in $tm('privacy.sections.legalBasis.items')" :key="index">
                  <strong class="text-white">{{ item.title }}</strong> - {{ item.description }}
                </li>
              </ul>
            </section>

            <!-- Condivisione dati -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.sharing.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('privacy.sections.sharing.intro') }}</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li v-for="(item, index) in $tm('privacy.sections.sharing.items')" :key="index">
                  <strong class="text-white">{{ item.title }}</strong> - {{ item.description }}
                </li>
              </ul>
              <p class="text-gray-300 mt-4">{{ $t('privacy.sections.sharing.noSale') }}</p>
            </section>

            <!-- Conservazione dati -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.retention.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('privacy.sections.retention.intro') }}</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li v-for="(item, index) in $tm('privacy.sections.retention.items')" :key="index">
                  <strong class="text-white">{{ item.title }}</strong> - {{ item.description }}
                </li>
              </ul>
            </section>

            <!-- Diritti dell'utente -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.rights.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('privacy.sections.rights.intro') }}</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li v-for="(item, index) in $tm('privacy.sections.rights.items')" :key="index">
                  <strong class="text-white">{{ item.title }}</strong> - {{ item.description }}
                </li>
              </ul>
              <p class="text-gray-300 mt-4">
                {{ $t('privacy.sections.rights.exerciseRights') }}
                <a href="mailto:info@codecraft.it" class="text-primary-400 hover:text-primary-300">info@codecraft.it</a>
              </p>
            </section>

            <!-- Sicurezza -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.security.title') }}</h2>
              <p class="text-gray-300">{{ $t('privacy.sections.security.intro') }}</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li v-for="(item, index) in $tm('privacy.sections.security.items')" :key="index">{{ item }}</li>
              </ul>
            </section>

            <!-- Cookie -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.cookies.title') }}</h2>
              <p class="text-gray-300">
                {{ $t('privacy.sections.cookies.content') }}
                <router-link :to="localizedCookie" class="text-primary-400 hover:text-primary-300">Cookie Policy</router-link>.
              </p>
            </section>

            <!-- Modifiche -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.changes.title') }}</h2>
              <p class="text-gray-300">{{ $t('privacy.sections.changes.content') }}</p>
            </section>

            <!-- Contatti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('privacy.sections.contact.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('privacy.sections.contact.intro') }}</p>
              <div class="bg-white/5 rounded-lg p-6 border border-white/10">
                <p class="text-gray-300 mb-2">
                  <strong class="text-white">{{ $t('privacy.sections.contact.email') }}</strong>
                  <a href="mailto:info@codecraft.it" class="text-primary-400 hover:text-primary-300 ml-2">info@codecraft.it</a>
                </p>
                <p class="text-gray-300">
                  <strong class="text-white">{{ $t('privacy.sections.contact.contactForm') }}</strong>
                  <router-link :to="localizedContact" class="text-primary-400 hover:text-primary-300 ml-2">www.codecraft.it/contatti</router-link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getLocalizedRoute } from '@/router'

const { locale, tm } = useI18n()

const localizedCookie = computed(() => getLocalizedRoute('cookie', locale.value))
const localizedContact = computed(() => getLocalizedRoute('contact', locale.value))

const lastUpdate = computed(() => {
  return new Date().toLocaleDateString(locale.value === 'it' ? 'it-IT' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
.prose {
  @apply text-gray-300;
}

.prose h2 {
  @apply text-white border-b border-white/10 pb-2;
}

.prose h3 {
  @apply text-white;
}

.prose strong {
  @apply text-white font-semibold;
}

.prose a {
  @apply text-primary-400 hover:text-primary-300 transition-colors duration-200;
}

.prose ul {
  @apply space-y-2;
}

.prose li {
  @apply text-gray-300;
}
</style>
