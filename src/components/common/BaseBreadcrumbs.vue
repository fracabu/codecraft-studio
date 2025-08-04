<template>
  <nav :aria-label="ariaLabel" class="flex items-center space-x-2 text-sm">
    <ol class="flex items-center space-x-2">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <!-- Separator -->
        <svg
          v-if="index > 0"
          class="w-4 h-4 text-gray-500 mx-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        
        <!-- Breadcrumb link or text -->
        <component
          :is="crumb.to ? 'router-link' : 'span'"
          :to="crumb.to"
          :class="breadcrumbClasses(crumb, index === breadcrumbs.length - 1)"
          :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
        >
          <!-- Icon -->
          <component
            v-if="crumb.icon"
            :is="crumb.icon"
            class="w-4 h-4 mr-1 flex-shrink-0"
          />
          
          <!-- Text -->
          <span :class="{ 'sr-only sm:not-sr-only': crumb.hideOnMobile }">
            {{ crumb.text }}
          </span>
        </component>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => 
        typeof item === 'object' && 
        typeof item.text === 'string'
      )
    }
  },
  ariaLabel: {
    type: String,
    default: 'Navigazione breadcrumb'
  },
  maxItems: {
    type: Number,
    default: null
  }
})

const breadcrumbs = computed(() => {
  let items = [...props.items]
  
  // Truncate if maxItems is set
  if (props.maxItems && items.length > props.maxItems) {
    const first = items[0]
    const last = items.slice(-2) // Keep last 2 items
    
    items = [
      first,
      { text: '...', disabled: true },
      ...last
    ]
  }
  
  return items
})

const breadcrumbClasses = (crumb, isLast) => {
  const base = 'flex items-center transition-colors duration-200'
  
  if (crumb.disabled) {
    return `${base} text-gray-500 cursor-default`
  }
  
  if (isLast) {
    return `${base} text-white font-medium cursor-default`
  }
  
  if (crumb.to) {
    return `${base} text-gray-400 hover:text-cyan-400 focus:text-cyan-400 focus:outline-none focus:underline`
  }
  
  return `${base} text-gray-400`
}
</script>

<style scoped>
/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 640px) {
  .sm\:not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
}
</style>