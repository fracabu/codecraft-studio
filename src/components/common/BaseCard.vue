<template>
  <div 
    :class="cardClasses"
    :role="role"
    :tabindex="interactive ? 0 : undefined"
    @click="handleClick"
    @keypress="handleKeyPress"
  >
    <!-- Header slot -->
    <div v-if="$slots.header" class="border-b border-white/10 pb-4 mb-4">
      <slot name="header" />
    </div>

    <!-- Main content -->
    <div :class="contentClasses">
      <slot />
    </div>

    <!-- Footer slot -->
    <div v-if="$slots.footer" class="border-t border-white/10 pt-4 mt-4">
      <slot name="footer" />
    </div>

    <!-- Loading overlay -->
    <div v-if="loading" class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'highlighted', 'success', 'warning', 'error'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  interactive: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['click'])

const cardClasses = computed(() => {
  const base = 'relative bg-white/5 backdrop-blur-sm border rounded-2xl transition-all duration-300'
  
  const variants = {
    default: 'border-white/10 hover:bg-white/10',
    highlighted: 'border-cyan-400/50 bg-cyan-400/5 hover:bg-cyan-400/10',
    success: 'border-green-400/50 bg-green-400/5 hover:bg-green-400/10',
    warning: 'border-yellow-400/50 bg-yellow-400/5 hover:bg-yellow-400/10',
    error: 'border-red-400/50 bg-red-400/5 hover:bg-red-400/10'
  }
  
  const sizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const interactive = props.interactive 
    ? 'cursor-pointer hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900'
    : ''
  
  return [
    base,
    variants[props.variant],
    sizes[props.size],
    interactive
  ].join(' ')
})

const contentClasses = computed(() => {
  return props.loading ? 'opacity-50 pointer-events-none' : ''
})

const handleClick = (event) => {
  if (props.interactive && !props.loading) {
    emit('click', event)
  }
}

const handleKeyPress = (event) => {
  if (props.interactive && !props.loading && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault()
    emit('click', event)
  }
}
</script>