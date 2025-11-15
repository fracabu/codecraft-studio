<template>
  <section id="home" class="relative z-10 py-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Hero Badge -->
      <div
        id="hero-title"
        data-animate
        :class="[
          'transition-all duration-1000',
          isVisible['hero-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <!-- Code-style badge -->
        <div class="inline-flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-lg border border-blue-400/40 mb-8 backdrop-blur-md hover:scale-105 transition-transform duration-300">
          <span class="font-mono text-orange-400">&lt;</span>
          <svg class="w-5 h-5 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
          <span class="text-blue-300 font-semibold tracking-wide">Web Dev + AI Integration</span>
          <span class="font-mono text-orange-400">/&gt;</span>
        </div>

        <!-- Main Title with typing effect -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span class="font-mono text-gray-400 text-2xl md:text-3xl block mb-2">const business = {</span>
          <span class="text-white block">Creiamo </span>
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient block">
            App & Tool AI-Powered
          </span>
          <span class="text-white block">per il Tuo Business</span>
          <span class="font-mono text-gray-400 text-2xl md:text-3xl block mt-2">}</span>
        </h1>

        <!-- Subtitle with code accent -->
        <div class="max-w-4xl mx-auto mb-8">
          <p class="text-lg md:text-xl text-gray-300 leading-relaxed">
            <span class="font-mono text-purple-400 text-sm">// </span>
            Sviluppiamo <strong class="text-blue-400">soluzioni digitali intelligenti</strong> -
            da <span class="px-2 py-0.5 bg-orange-500/20 border border-orange-500/30 rounded text-orange-300 font-mono text-sm">landing page</span> performanti
            a <span class="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300 font-mono text-sm">SaaS</span> completi -
            con AI integrata.
          </p>
          <p class="text-base md:text-lg text-gray-400 mt-3">
            <span class="font-mono text-blue-400">→</span> Agenti automatici che lavorano <strong class="text-green-400">24/7</strong> per risparmiare tempo prezioso al tuo team.
          </p>
        </div>
      </div>

      <!-- Stats Grid -->
      <div
        id="stats-section"
        data-animate
        :class="[
          'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-1000 delay-200',
          isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="relative text-center bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-5 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group overflow-hidden"
        >
          <!-- Decorative corner -->
          <div class="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-3xl"></div>

          <div class="flex justify-center mb-3 text-blue-400 group-hover:scale-110 transition-transform relative z-10">
            <component :is="stat.icon" class="w-7 h-7" />
          </div>
          <div class="text-2xl md:text-3xl font-bold font-mono text-white mb-1 counter-animation group-hover:text-blue-300 transition-colors">
            {{ stat.value }}
          </div>
          <div class="text-xs md:text-sm text-gray-400 font-medium">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div
        id="tech-stack"
        data-animate
        :class="[
          'transition-all duration-1000 delay-300',
          isVisible['tech-stack'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <div class="mb-4">
          <span class="font-mono text-sm text-purple-400">// stack.config.js</span>
        </div>
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <span
            v-for="(tech, index) in techStack"
            :key="tech"
            :class="[
              'px-4 py-2 bg-gradient-to-r backdrop-blur-sm border rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default shadow-sm',
              index % 4 === 0 ? 'from-blue-500/10 to-blue-600/10 border-blue-400/30 text-blue-300 hover:border-blue-400/60 hover:shadow-blue-500/20' :
              index % 4 === 1 ? 'from-purple-500/10 to-purple-600/10 border-purple-400/30 text-purple-300 hover:border-purple-400/60 hover:shadow-purple-500/20' :
              index % 4 === 2 ? 'from-orange-500/10 to-orange-600/10 border-orange-400/30 text-orange-300 hover:border-orange-400/60 hover:shadow-orange-500/20' :
              'from-green-500/10 to-green-600/10 border-green-400/30 text-green-300 hover:border-green-400/60 hover:shadow-green-500/20'
            ]"
          >
            <span class="font-mono">{{ tech }}</span>
          </span>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="scrollToSection('contatti')"
            class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative flex items-center justify-center space-x-2">
              <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"/>
              </svg>
              <span>Consulenza Gratuita 30min</span>
            </div>
          </button>
          <button
            @click="scrollToSection('tools')"
            class="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-purple-400/30 rounded-lg font-semibold text-white hover:bg-purple-500/10 hover:border-purple-400/60 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
            <span>Scopri i Nostri Tool</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Value Proposition Cards -->
    <div class="max-w-6xl mx-auto mt-20">
      <div
        id="value-props"
        data-animate
        :class="[
          'grid md:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 delay-500',
          isVisible['value-props'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <div
          v-for="(prop, index) in valueProps"
          :key="index"
          :class="[
            'group relative text-center p-8 backdrop-blur-md border-2 rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden',
            index === 0 ? 'bg-gradient-to-br from-blue-500/5 to-blue-600/10 border-blue-400/30 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20' :
            index === 1 ? 'bg-gradient-to-br from-purple-500/5 to-purple-600/10 border-purple-400/30 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20' :
            'bg-gradient-to-br from-orange-500/5 to-orange-600/10 border-orange-400/30 hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-500/20'
          ]"
        >
          <!-- Decorative code element -->
          <div class="absolute top-3 left-3 font-mono text-xs opacity-30 select-none">
            <span :class="index === 0 ? 'text-blue-400' : index === 1 ? 'text-purple-400' : 'text-orange-400'">
              &lt;{{ prop.title.toLowerCase().replace(/\s+/g, '-') }}/&gt;
            </span>
          </div>

          <div class="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            {{ prop.icon }}
          </div>
          <h3 :class="[
            'text-xl md:text-2xl font-bold mb-4 transition-colors',
            index === 0 ? 'text-white group-hover:text-blue-300' :
            index === 1 ? 'text-white group-hover:text-purple-300' :
            'text-white group-hover:text-orange-300'
          ]">
            {{ prop.title }}
          </h3>
          <p class="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">{{ prop.description }}</p>
          <div :class="[
            'inline-flex items-center space-x-2 px-4 py-2 border rounded-lg font-mono text-sm font-medium transition-all',
            index === 0 ? 'bg-blue-500/20 border-blue-400/50 text-blue-300 group-hover:bg-blue-500/30' :
            index === 1 ? 'bg-purple-500/20 border-purple-400/50 text-purple-300 group-hover:bg-purple-500/30' :
            'bg-orange-500/20 border-orange-400/50 text-orange-300 group-hover:bg-orange-500/30'
          ]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span>{{ prop.metric }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Code Highlight Box -->
    <div class="max-w-4xl mx-auto mt-20">
      <div
        id="roi-highlight"
        data-animate
        :class="[
          'relative p-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10 border border-blue-400/30 rounded-2xl transition-all duration-1000 delay-700 overflow-hidden backdrop-blur-sm',
          isVisible['roi-highlight'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <!-- Decorative code brackets -->
        <div class="absolute top-2 left-4 font-mono text-blue-400/30 text-6xl select-none">{</div>
        <div class="absolute bottom-2 right-4 font-mono text-orange-400/30 text-6xl select-none">}</div>

        <div class="relative z-10 text-center">
          <div class="font-mono text-purple-400 text-sm mb-2">// success_story.js</div>
          <div class="text-2xl md:text-3xl font-bold text-white mb-3">
            <span class="font-mono text-blue-400">const</span> risultati =
            <span class="text-green-400">{ delivery: "2-4 settimane"</span>,
            <span class="text-orange-400">saving: "500+ ore/mese" }</span>
          </div>
          <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Dal prototipo al prodotto live in tempi rapidi. I nostri tool e agenti AI
            <strong class="text-blue-400">liberano centinaia di ore</strong> ogni mese,
            permettendoti di concentrarti sul <strong class="text-purple-400">crescere il tuo business</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive visibility state
const isVisible = ref({})

// Stats data
const stats = ref([
  {
    label: 'App & Tool Creati',
    value: '25+',
    icon: 'CogIcon'
  },
  {
    label: 'Agenti AI Attivi',
    value: '40+',
    icon: 'SettingsIcon'
  },
  {
    label: 'Ore Risparmiate/Mese',
    value: '500+',
    icon: 'TrendingUpIcon'
  },
  {
    label: 'Delivery Medio',
    value: '2-4w',
    icon: 'DollarSignIcon'
  }
])

// Tech Stack badges
const techStack = ref([
  'Vue.js',
  'React',
  'Node.js',
  'Python',
  'Claude AI',
  'GPT-4',
  'n8n',
  'Tailwind CSS'
])

// Value Propositions
const valueProps = ref([
  {
    icon: '💻',
    title: 'Sviluppo Web Custom',
    description: 'App, landing page e tool su misura costruiti con tecnologie moderne. Da MVP a SaaS scalabili - come il nostro tool per Alloggiati Web.',
    metric: 'Delivery in 2-4 settimane'
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Integriamo GPT-4 e Claude direttamente nei tuoi prodotti. Chatbot intelligenti, analisi documenti, assistenti virtuali che lavorano per te.',
    metric: 'AI sempre aggiornata'
  },
  {
    icon: '⚡',
    title: 'Agenti Automatici',
    description: 'Workflow n8n che automatizzano task ripetitivi 24/7. Gestione dati, notifiche, report - tutto in background senza intervento manuale.',
    metric: '500+ ore risparmiate'
  }
])

// Icon components (simplified for Vue)
const CogIcon = {
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>`
}

const DollarSignIcon = {
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
  </svg>`
}

const SettingsIcon = {
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
  </svg>`
}

const TrendingUpIcon = {
  template: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
  </svg>`
}

// Methods
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Intersection Observer for animations
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value[entry.target.id] = true
        }
      })
    },
    { threshold: 0.1 }
  )

  // Observe all elements with data-animate
  setTimeout(() => {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (observer) {
        observer.observe(el)
      }
    })
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Gradient animation for title */
.animate-gradient {
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

/* Counter animation */
.counter-animation {
  animation: countUp 0.8s ease-out;
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effects */
.group:hover .counter-animation {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Glow animation for buttons */
.shadow-cyan-500\/25 {
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2);
}

/* Text selection styling - VS Code inspired */
::selection {
  background-color: rgba(59, 130, 246, 0.3);
  color: white;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(30, 30, 30, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #60a5fa, #a78bfa);
}
</style>
 
