<template>
  <Teleport to="body">
    <Transition name="modal-backdrop">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="handleBackdropClick"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
        
        <!-- Modal -->
        <Transition name="modal-content">
          <div
            v-if="show"
            :class="modalClasses"
            role="dialog"
            :aria-labelledby="titleId"
            :aria-describedby="descriptionId"
            aria-modal="true"
            @click.stop
          >
            <!-- Header -->
            <div v-if="$slots.header || title" class="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 v-if="title" :id="titleId" class="text-xl font-bold text-white">
                  {{ title }}
                </h2>
                <slot name="header" />
              </div>
              
              <button
                v-if="closable"
                @click="closeModal"
                class="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                aria-label="Chiudi modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <!-- Content -->
            <div :id="descriptionId" :class="contentClasses">
              <slot />
            </div>
            
            <!-- Footer -->
            <div v-if="$slots.footer" class="p-6 border-t border-white/10 bg-white/5">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, nextTick } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  },
  scrollable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'update:show'])

const titleId = computed(() => `modal-title-${Math.random().toString(36).substr(2, 9)}`)
const descriptionId = computed(() => `modal-description-${Math.random().toString(36).substr(2, 9)}`)

const modalClasses = computed(() => {
  const base = 'relative bg-slate-800 border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-300 max-h-[90vh] flex flex-col'
  
  const sizes = {
    xs: 'max-w-xs w-full',
    sm: 'max-w-sm w-full',
    md: 'max-w-md w-full',
    lg: 'max-w-lg w-full',
    xl: 'max-w-4xl w-full',
    full: 'max-w-7xl w-full h-full max-h-[95vh]'
  }
  
  return [base, sizes[props.size]].join(' ')
})

const contentClasses = computed(() => {
  const base = 'p-6'
  const scrollable = props.scrollable ? 'overflow-y-auto flex-1' : ''
  
  return [base, scrollable].join(' ')
})

const closeModal = () => {
  emit('close')
  emit('update:show', false)
}

const handleBackdropClick = () => {
  if (props.closeOnBackdrop && props.closable) {
    closeModal()
  }
}

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && props.show && props.closable) {
    closeModal()
  }
}

// Focus trap and body scroll lock
watch(() => props.show, async (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    // Focus first focusable element
    await nextTick()
    const modalElement = document.querySelector('[role="dialog"]')
    const focusableElements = modalElement?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    focusableElements?.[0]?.focus()
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Modal backdrop transitions */
.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
}

/* Modal content transitions */
.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 0.3s ease;
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
</style>