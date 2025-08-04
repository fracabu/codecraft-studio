<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :role="role"
    :aria-label="ariaLabel"
    :aria-disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <div 
      v-if="loading" 
      class="animate-spin rounded-full border-2 border-current border-t-transparent"
      :class="iconSizeClasses"
    ></div>
    
    <!-- Left icon -->
    <component 
      v-else-if="leftIcon && !loading" 
      :is="leftIcon" 
      :class="iconSizeClasses"
    />
    
    <!-- Slot content -->
    <span v-if="$slots.default" :class="{ 'opacity-0': loading }">
      <slot />
    </span>
    
    <!-- Right icon -->
    <component 
      v-if="rightIcon && !loading" 
      :is="rightIcon" 
      :class="iconSizeClasses"
    />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'warning', 'error', 'ghost', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  tag: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'a', 'router-link'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  leftIcon: {
    type: [String, Object],
    default: null
  },
  rightIcon: {
    type: [String, Object],
    default: null
  },
  role: {
    type: String,
    default: null
  },
  ariaLabel: {
    type: String,
    default: null
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 focus:ring-cyan-400/50 shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:ring-white/50',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-green-400/50 shadow-lg hover:shadow-green-500/25',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700 focus:ring-yellow-400/50 shadow-lg hover:shadow-yellow-500/25',
    error: 'bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 focus:ring-red-400/50 shadow-lg hover:shadow-red-500/25',
    ghost: 'text-gray-300 hover:text-cyan-400 hover:bg-white/5 focus:ring-cyan-400/50',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 focus:ring-cyan-400/50'
  }
  
  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  }
  
  const width = props.fullWidth ? 'w-full' : ''
  
  const interactive = !props.disabled && !props.loading 
    ? 'transform hover:scale-105 active:scale-95'
    : ''
  
  return [
    base,
    variants[props.variant],
    sizes[props.size],
    width,
    interactive
  ].join(' ')
})

const iconSizeClasses = computed(() => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }
  
  return sizes[props.size]
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>