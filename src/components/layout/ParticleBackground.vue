<template>
  <!-- Particle Background Effect -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <!-- Base gradient overlays -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_50%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

    <!-- Small animated particles -->
    <div
      v-for="(particle, index) in particles"
      :key="`particle-${index}`"
      class="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
      :style="{
        left: particle.x + '%',
        top: particle.y + '%',
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's',
        opacity: particle.opacity
      }"
    ></div>

    <!-- Medium floating particles -->
    <div
      v-for="(bigParticle, index) in bigParticles"
      :key="`big-${index}`"
      class="absolute w-2 h-2 bg-blue-400/40 rounded-full"
      :style="{
        left: bigParticle.x + '%',
        top: bigParticle.y + '%',
        animation: `float ${bigParticle.duration}s ease-in-out infinite`,
        animationDelay: bigParticle.delay + 's'
      }"
    ></div>

    <!-- Large glow orbs -->
    <div
      v-for="(orb, index) in glowOrbs"
      :key="`orb-${index}`"
      :class="[
        'absolute rounded-full blur-2xl',
        orb.color
      ]"
      :style="{
        left: orb.x + '%',
        top: orb.y + '%',
        width: orb.size + 'px',
        height: orb.size + 'px',
        animation: `glow ${orb.duration}s ease-in-out infinite`,
        animationDelay: orb.delay + 's'
      }"
    ></div>

    <!-- Connection lines between particles -->
    <svg class="absolute inset-0 w-full h-full opacity-40">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(0,245,255,0.3);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(59,130,246,0.2);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(168,85,247,0.1);stop-opacity:0" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(168,85,247,0.2);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(0,245,255,0.1);stop-opacity:0" />
        </linearGradient>
      </defs>

      <line
        v-for="(line, index) in connectionLines"
        :key="`line-${index}`"
        :x1="line.x1 + '%'"
        :y1="line.y1 + '%'"
        :x2="line.x2 + '%'"
        :y2="line.y2 + '%'"
        :stroke="index % 2 === 0 ? 'url(#lineGradient)' : 'url(#lineGradient2)'"
        stroke-width="0.5"
        :style="{
          animation: `fadeInOut ${line.duration}s ease-in-out infinite`,
          animationDelay: line.delay + 's'
        }"
      />
    </svg>

    <!-- Central hero glow effect -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

    <!-- Secondary glow effects -->
    <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-2xl animate-pulse" style="animation-delay: 1s; animation-duration: 4s;"></div>
    <div class="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/6 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s; animation-duration: 6s;"></div>
    <div class="absolute top-3/4 right-1/3 w-32 h-32 bg-cyan-500/8 rounded-full blur-xl animate-pulse" style="animation-delay: 3s; animation-duration: 5s;"></div>

    <!-- Floating geometric shapes -->
    <div
      v-for="(shape, index) in geometricShapes"
      :key="`shape-${index}`"
      :class="[
        'absolute border opacity-20',
        shape.shape === 'square' ? 'border-cyan-400/30' : 'border-blue-400/30 rounded-full',
        shape.shape === 'triangle' ? 'border-purple-400/30' : ''
      ]"
      :style="{
        left: shape.x + '%',
        top: shape.y + '%',
        width: shape.size + 'px',
        height: shape.size + 'px',
        animation: `rotate360 ${shape.duration}s linear infinite`,
        animationDelay: shape.delay + 's',
        transform: shape.shape === 'triangle' ? 'rotate(45deg)' : 'none'
      }"
    ></div>

    <!-- Interactive mouse-following particles (if mouse is moving) -->
    <div
      v-if="mouseParticles.length > 0"
      v-for="(mouseParticle, index) in mouseParticles"
      :key="`mouse-${index}`"
      class="absolute w-1 h-1 bg-cyan-300 rounded-full pointer-events-none"
      :style="{
        left: mouseParticle.x + 'px',
        top: mouseParticle.y + 'px',
        opacity: mouseParticle.opacity,
        animation: `mouseParticleFade ${mouseParticle.duration}s ease-out forwards`
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Particle arrays
const particles = ref([])
const bigParticles = ref([])
const glowOrbs = ref([])
const connectionLines = ref([])
const geometricShapes = ref([])
const mouseParticles = ref([])

// Mouse tracking
const mousePosition = ref({ x: 0, y: 0 })
let mouseTimeout = null

// Generate all particles
const generateParticles = () => {
  // Small particles (30 particles)
  for (let i = 0; i < 30; i++) {
    particles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7
    })
  }

  // Big floating particles (12 particles)
  for (let i = 0; i < 12; i++) {
    bigParticles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 4
    })
  }

  // Glow orbs (6 orbs)
  const orbColors = [
    'bg-cyan-500/10',
    'bg-blue-500/8',
    'bg-purple-500/6',
    'bg-cyan-400/12',
    'bg-blue-400/10',
    'bg-purple-400/8'
  ]

  for (let i = 0; i < 6; i++) {
    glowOrbs.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 100 + Math.random() * 150,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4,
      color: orbColors[i]
    })
  }

  // Connection lines (8 lines)
  for (let i = 0; i < 8; i++) {
    connectionLines.value.push({
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4
    })
  }

  // Geometric shapes (8 shapes)
  const shapes = ['square', 'circle', 'triangle']
  for (let i = 0; i < 8; i++) {
    geometricShapes.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    })
  }
}

// Mouse movement handler
const handleMouseMove = (event) => {
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY
  }

  // Add mouse particle trail
  if (mouseParticles.value.length < 20) {
    mouseParticles.value.push({
      x: event.clientX - 2,
      y: event.clientY - 2,
      opacity: 0.8,
      duration: 1 + Math.random() * 2,
      id: Date.now() + Math.random()
    })

    // Remove old particles
    if (mouseParticles.value.length > 15) {
      mouseParticles.value.shift()
    }
  }

  // Clear existing timeout
  if (mouseTimeout) {
    clearTimeout(mouseTimeout)
  }

  // Clear particles after mouse stops moving
  mouseTimeout = setTimeout(() => {
    mouseParticles.value = []
  }, 2000)
}

// Lifecycle
onMounted(() => {
  generateParticles()

  // Add mouse move listener
  document.addEventListener('mousemove', handleMouseMove)

  // Cleanup mouse particles periodically
  setInterval(() => {
    mouseParticles.value = mouseParticles.value.filter(
      particle => particle.opacity > 0.1
    )
  }, 1000)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  if (mouseTimeout) {
    clearTimeout(mouseTimeout)
  }
})
</script>

<style scoped>
/* Float animation for big particles */
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

/* Glow animation for orbs */
@keyframes glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  25% {
    opacity: 0.6;
    transform: scale(1.1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.95);
  }
  75% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}

/* Fade animation for lines */
@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.2;
  }
}

/* Rotation for geometric shapes */
@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Mouse particle fade */
@keyframes mouseParticleFade {
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}

/* Custom pulse animation */
@keyframes customPulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

/* Override default pulse */
.animate-pulse {
  animation: customPulse 2s ease-in-out infinite;
}

/* Performance optimizations */
.absolute {
  will-change: transform, opacity;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse,
  [style*="animation"] {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
