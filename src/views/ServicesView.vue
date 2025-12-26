<template>
  <div class="min-h-screen pt-8 flex flex-col overflow-x-hidden">
    <!-- Hero Section Servizi -->
    <section class="flex-1 px-4 sm:px-6 flex flex-col justify-start pt-8 sm:pt-16 pb-12">
      <div class="max-w-7xl mx-auto w-full">

        <!-- Title - Mobile First -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-10 md:mb-16 text-center px-2"
        >
          <span class="text-white block sm:inline">{{ $t('services.title') }} </span>
          <span class="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent block sm:inline">
            {{ $t('services.titleHighlight') }}
          </span>
        </h1>

        <!-- Services Grid - Mobile First -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          <div
            v-for="(service, index) in services"
            :key="index"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 + index * 150 } }"
            class="group p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
          >
            <!-- Icon -->
            <div class="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl relative shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300 group-hover:scale-110">
              <component :is="getServiceIcon(service.key)" class="w-7 h-7 sm:w-8 sm:h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            <!-- Title -->
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  CpuChipIcon,
  ChartBarIcon,
  CloudIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  CubeIcon
} from '@heroicons/vue/24/outline'

const { t } = useI18n()

// Icon mapping function
const getServiceIcon = (title) => {
  const iconMap = {
    'AI/ML Solutions': CpuChipIcon,
    'Data Analytics Dashboards': ChartBarIcon,
    'API Development': CloudIcon,
    'Trading Systems': ArrowTrendingUpIcon,
    'Web Applications': GlobeAltIcon,
    'npm Packages': CubeIcon
  }
  return iconMap[title] || CpuChipIcon
}

// Services with i18n
const services = computed(() => [
  {
    icon: '🤖',
    title: t('services.items.aiMl.title'),
    description: t('services.items.aiMl.description'),
    key: 'AI/ML Solutions'
  },
  {
    icon: '📊',
    title: t('services.items.analytics.title'),
    description: t('services.items.analytics.description'),
    key: 'Data Analytics Dashboards'
  },
  {
    icon: '🔌',
    title: t('services.items.api.title'),
    description: t('services.items.api.description'),
    key: 'API Development'
  },
  {
    icon: '📈',
    title: t('services.items.trading.title'),
    description: t('services.items.trading.description'),
    key: 'Trading Systems'
  },
  {
    icon: '🌐',
    title: t('services.items.webApps.title'),
    description: t('services.items.webApps.description'),
    key: 'Web Applications'
  },
  {
    icon: '📦',
    title: t('services.items.npm.title'),
    description: t('services.items.npm.description'),
    key: 'npm Packages'
  }
])
</script>