<template>
  <div :class="containerClasses">
    <div v-if="variant === 'spinner'" :class="spinnerClasses"></div>
    
    <div v-else-if="variant === 'dots'" class="flex gap-1">
      <div
        v-for="i in 3"
        :key="i"
        :class="dotClasses"
        :style="{ animationDelay: `${(i - 1) * 0.2}s` }"
      ></div>
    </div>
    
    <div v-else-if="variant === 'pulse'" :class="pulseClasses"></div>
    
    <div v-else-if="variant === 'bars'" class="flex gap-1 items-end">
      <div
        v-for="i in 4"
        :key="i"
        :class="barClasses"
        :style="{ animationDelay: `${(i - 1) * 0.15}s` }"
      ></div>
    </div>
    
    <p v-if="text" :class="textClasses">{{ text }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'spinner',
    validator: (value) => ['spinner', 'dots', 'pulse', 'bars'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  color: {
    type: String,
    default: 'cyan',
    validator: (value) => ['cyan', 'blue', 'green', 'purple', 'white'].includes(value)
  },
  text: {
    type: String,
    default: null
  },
  center: {
    type: Boolean,
    default: false
  }
})

const containerClasses = computed(() => {
  const base = 'flex flex-col items-center gap-3'
  const center = props.center ? 'justify-center min-h-[200px]' : ''
  
  return [base, center].join(' ')
})

const colorClasses = computed(() => {
  const colors = {
    cyan: 'border-cyan-400',
    blue: 'border-blue-400',
    green: 'border-green-400',
    purple: 'border-purple-400',
    white: 'border-white'
  }
  
  return colors[props.color]
})

const sizeClasses = computed(() => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }
  
  return sizes[props.size]
})

const spinnerClasses = computed(() => {
  const base = 'animate-spin rounded-full border-2 border-transparent'
  return [base, sizeClasses.value, colorClasses.value, 'border-t-current'].join(' ')
})

const dotClasses = computed(() => {
  const base = 'animate-bounce rounded-full'
  const color = `bg-${props.color}-400`
  
  const sizes = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4'
  }
  
  return [base, color, sizes[props.size]].join(' ')
})

const pulseClasses = computed(() => {
  const base = 'animate-pulse rounded-full'
  const color = `bg-${props.color}-400`
  
  return [base, color, sizeClasses.value].join(' ')
})

const barClasses = computed(() => {
  const base = 'animate-bounce rounded-sm'
  const color = `bg-${props.color}-400`
  
  const sizes = {
    xs: 'w-1 h-4',
    sm: 'w-1 h-6',
    md: 'w-1.5 h-8',
    lg: 'w-2 h-12',
    xl: 'w-3 h-16'
  }
  
  return [base, color, sizes[props.size]].join(' ')
})

const textClasses = computed(() => {
  const base = 'text-gray-300 animate-pulse'
  
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }
  
  return [base, sizes[props.size]].join(' ')
})
</script>

<style scoped>
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.animate-bounce {
  animation: bounce 1.4s ease-in-out infinite;
}
</style>