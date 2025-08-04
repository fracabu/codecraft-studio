<template>
  <div :class="skeletonClasses" :style="customStyles">
    <div v-if="avatar" :class="avatarClasses"></div>
    <div v-if="lines > 0" class="flex-1 space-y-3">
      <div
        v-for="line in lines"
        :key="line"
        :class="lineClasses(line)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  lines: {
    type: Number,
    default: 3
  },
  avatar: {
    type: Boolean,
    default: false
  },
  avatarSize: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  width: {
    type: String,
    default: null
  },
  height: {
    type: String,
    default: null
  },
  rounded: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  }
})

const skeletonClasses = computed(() => {
  const base = 'flex items-start gap-4'
  return base
})

const avatarClasses = computed(() => {
  const base = 'bg-white/10 flex-shrink-0'
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }
  
  const rounded = props.rounded ? 'rounded-full' : 'rounded-lg'
  const animated = props.animated ? 'animate-pulse' : ''
  
  return [base, sizes[props.avatarSize], rounded, animated].join(' ')
})

const lineClasses = (lineNumber) => {
  const base = 'h-4 bg-white/10 rounded'
  const animated = props.animated ? 'animate-pulse' : ''
  
  // Vary the width for more realistic skeleton
  const widths = {
    1: 'w-full',
    2: 'w-5/6',
    3: 'w-4/5'
  }
  
  const width = lineNumber <= 3 ? widths[lineNumber] : 'w-3/4'
  
  return [base, animated, width].join(' ')
}

const customStyles = computed(() => {
  const styles = {}
  
  if (props.width) {
    styles.width = props.width
  }
  
  if (props.height) {
    styles.height = props.height
  }
  
  return styles
})
</script>

<style scoped>
@keyframes skeleton-loading {
  0% {
    background-color: rgba(255, 255, 255, 0.1);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.2);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.animate-pulse {
  animation: skeleton-loading 2s ease-in-out infinite;
}
</style>