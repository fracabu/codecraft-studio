<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
    <!-- Hero Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10"></div>

      <div class="relative max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          {{ $t('cookie.title') }}
        </h1>
        <p
          class="text-xl text-gray-300 mb-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        >
          {{ $t('cookie.subtitle') }}
        </p>
        <p
          class="text-sm text-gray-400"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          {{ $t('cookie.lastUpdate') }} {{ lastUpdate }}
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div class="prose prose-invert prose-lg max-w-none">
            <!-- Cosa sono i Cookie -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('cookie.sections.whatAreCookies.title') }}</h2>
              <p class="text-gray-300 leading-relaxed">{{ $t('cookie.sections.whatAreCookies.content') }}</p>
            </section>

            <!-- Come usiamo i cookie -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('cookie.sections.howWeUse.title') }}</h2>
              <p class="text-gray-300 mb-6">{{ $t('cookie.sections.howWeUse.intro') }}</p>

              <!-- Cookie Essenziali -->
              <div class="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <Shield class="w-6 h-6 text-primary-400" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-white mb-2">{{ $t('cookie.sections.howWeUse.essential.title') }}</h3>
                    <p class="text-gray-300 mb-3">{{ $t('cookie.sections.howWeUse.essential.description') }}</p>
                    <div class="bg-white/5 rounded p-4 text-sm">
                      <p class="text-gray-300 mb-2">
                        <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.name') }}</strong> codecraft_cookie_consent
                      </p>
                      <p class="text-gray-300 mb-2">
                        <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.purpose') }}</strong> {{ $t('cookie.sections.howWeUse.essential.purposeValue') }}
                      </p>
                      <p class="text-gray-300 mb-2">
                        <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.duration') }}</strong> {{ $t('cookie.sections.howWeUse.essential.durationValue') }}
                      </p>
                      <p class="text-gray-300">
                        <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.type') }}</strong> {{ $t('cookie.sections.howWeUse.essential.typeValue') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cookie Analitici -->
              <div class="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <BarChart3 class="w-6 h-6 text-accent-400" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-white mb-2">{{ $t('cookie.sections.howWeUse.analytics.title') }}</h3>
                    <p class="text-gray-300 mb-3">{{ $t('cookie.sections.howWeUse.analytics.description') }}</p>
                    <div class="bg-white/5 rounded p-4 text-sm space-y-4">
                      <div>
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.name') }}</strong> {{ $t('cookie.sections.howWeUse.analytics.ga.name') }}
                        </p>
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.purpose') }}</strong> {{ $t('cookie.sections.howWeUse.analytics.ga.purpose') }}
                        </p>
                        <p class="text-gray-300">
                          <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.duration') }}</strong> {{ $t('cookie.sections.howWeUse.analytics.ga.duration') }}
                        </p>
                      </div>
                      <div class="border-t border-white/10 pt-4">
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.name') }}</strong> {{ $t('cookie.sections.howWeUse.analytics.gaId.name') }}
                        </p>
                        <p class="text-gray-300 mb-2">
                          <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.purpose') }}</strong> {{ $t('cookie.sections.howWeUse.analytics.gaId.purpose') }}
                        </p>
                        <p class="text-gray-300">
                          <strong class="text-white">{{ $t('cookie.sections.howWeUse.essential.duration') }}</strong> {{ $t('cookie.sections.howWeUse.analytics.gaId.duration') }}
                        </p>
                      </div>
                    </div>
                    <div class="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded">
                      <p class="text-sm text-blue-200">
                        <strong>{{ $t('cookie.sections.howWeUse.analytics.privacyNote') }}</strong> {{ $t('cookie.sections.howWeUse.analytics.privacyNoteIntro') }}
                      </p>
                      <ul class="list-disc list-inside text-sm text-blue-200 mt-2 space-y-1">
                        <li v-for="(item, index) in $tm('cookie.sections.howWeUse.analytics.privacySettings')" :key="index">{{ item }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Gestione cookie -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('cookie.sections.manage.title') }}</h2>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">{{ $t('cookie.sections.manage.banner.title') }}</h3>
              <p class="text-gray-300 mb-4">{{ $t('cookie.sections.manage.banner.intro') }}</p>
              <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li v-for="(item, index) in $tm('cookie.sections.manage.banner.options')" :key="index">{{ item }}</li>
              </ul>

              <h3 class="text-xl font-semibold text-white mt-6 mb-3">{{ $t('cookie.sections.manage.browser.title') }}</h3>
              <p class="text-gray-300 mb-4">{{ $t('cookie.sections.manage.browser.intro') }}</p>

              <div class="grid md:grid-cols-2 gap-4 mt-6">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Google Chrome</p>
                  <p class="text-sm text-gray-400">{{ $t('cookie.sections.manage.browser.chrome') }}</p>
                </a>

                <a
                  href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Mozilla Firefox</p>
                  <p class="text-sm text-gray-400">{{ $t('cookie.sections.manage.browser.firefox') }}</p>
                </a>

                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Safari</p>
                  <p class="text-sm text-gray-400">{{ $t('cookie.sections.manage.browser.safari') }}</p>
                </a>

                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                >
                  <p class="text-white font-semibold mb-1">Microsoft Edge</p>
                  <p class="text-sm text-gray-400">{{ $t('cookie.sections.manage.browser.edge') }}</p>
                </a>
              </div>
            </section>

            <!-- Cookie di terze parti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('cookie.sections.thirdParty.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('cookie.sections.thirdParty.intro') }}</p>

              <div class="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 class="text-lg font-semibold text-white mb-3">{{ $t('cookie.sections.thirdParty.googleAnalytics.title') }}</h3>
                <p class="text-gray-300 mb-4">{{ $t('cookie.sections.thirdParty.googleAnalytics.description') }}</p>
                <p class="text-gray-300 mb-2">
                  <strong class="text-white">{{ $t('cookie.sections.thirdParty.googleAnalytics.privacyPolicy') }}</strong>
                </p>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary-400 hover:text-primary-300 text-sm"
                >https://policies.google.com/privacy</a>
              </div>
            </section>

            <!-- Aggiornamenti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('cookie.sections.updates.title') }}</h2>
              <p class="text-gray-300">{{ $t('cookie.sections.updates.content') }}</p>
            </section>

            <!-- Contatti -->
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('cookie.sections.contact.title') }}</h2>
              <p class="text-gray-300 mb-4">{{ $t('cookie.sections.contact.intro') }}</p>
              <div class="bg-white/5 rounded-lg p-6 border border-white/10">
                <p class="text-gray-300 mb-2">
                  <strong class="text-white">{{ $t('cookie.sections.contact.email') }}</strong>
                  <a href="mailto:info@codecraft.it" class="text-primary-400 hover:text-primary-300 ml-2">info@codecraft.it</a>
                </p>
                <p class="text-gray-300">
                  <strong class="text-white">{{ $t('cookie.sections.contact.privacyPolicy') }}</strong>
                  <router-link :to="localizedPrivacy" class="text-primary-400 hover:text-primary-300 ml-2">www.codecraft.it/privacy</router-link>
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
import { Shield, BarChart3 } from 'lucide-vue-next'
import { getLocalizedRoute } from '@/router'

const { locale, tm } = useI18n()

const localizedPrivacy = computed(() => getLocalizedRoute('privacy', locale.value))

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
