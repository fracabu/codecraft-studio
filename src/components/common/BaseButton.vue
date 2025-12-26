<template>
  <component
    :is="tag"
    :class="[pushable ? 'pushable' : buttonClasses, pushable && `pushable-${variant}`, pushable && `pushable-${size}`]"
    :disabled="disabled || loading"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :role="role"
    :aria-label="ariaLabel"
    :aria-disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- 3D Pushable Button Structure -->
    <template v-if="pushable">
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">
        <!-- Loading spinner -->
        <div
          v-if="loading"
          class="animate-spin rounded-full border-2 border-current border-t-transparent w-5 h-5"
        ></div>

        <!-- Left icon -->
        <component
          v-else-if="leftIcon && !loading"
          :is="leftIcon"
          :class="iconSizeClasses"
        />

        <!-- Slot content -->
        <template v-if="$slots.default && !loading">
          <slot />
        </template>

        <!-- Right icon -->
        <component
          v-if="rightIcon && !loading"
          :is="rightIcon"
          :class="iconSizeClasses"
        />
      </span>
    </template>

    <!-- Regular Button Structure -->
    <template v-else>
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
    </template>
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
  },
  pushable: {
    type: Boolean,
    default: true // Abilita 3D style di default
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'

  const variants = {
    primary: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 focus:ring-rose-400/50 shadow-lg hover:shadow-rose-500/25',
    secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:ring-white/50',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-green-400/50 shadow-lg hover:shadow-green-500/25',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700 focus:ring-yellow-400/50 shadow-lg hover:shadow-yellow-500/25',
    error: 'bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 focus:ring-red-400/50 shadow-lg hover:shadow-red-500/25',
    ghost: 'text-gray-300 hover:text-rose-400 hover:bg-white/5 focus:ring-rose-400/50',
    outline: 'border-2 border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white focus:ring-rose-400/50'
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

<style scoped>
/* 3D Pushable Button Styles */
.pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
}

.pushable .shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
}

.pushable .edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.pushable .front {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: nowrap;
  position: relative;
  padding: 0.625rem 2rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  white-space: nowrap;
  min-width: fit-content;
}

/* Pushable Size Variants */
.pushable-xl .front {
  padding: 1rem 3rem;
  font-size: 1.25rem;
  border-radius: 14px;
}

.pushable-xl .shadow,
.pushable-xl .edge {
  border-radius: 14px;
}

.pushable .front > * {
  flex-shrink: 0;
}

.pushable:hover {
  filter: brightness(110%);
}

.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
}

.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.pushable:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
}

.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}

.pushable:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.pushable:disabled:hover .front {
  transform: translateY(-4px);
}

.pushable:disabled:hover .shadow {
  transform: translateY(2px);
}

/* Primary Variant (Rose/Pink) */
.pushable-primary .edge {
  background: linear-gradient(
    to left,
    hsl(330deg 100% 30%) 0%,
    hsl(330deg 100% 40%) 8%,
    hsl(330deg 100% 40%) 92%,
    hsl(330deg 100% 30%) 100%
  );
}

.pushable-primary .front {
  background: linear-gradient(to right, #f43f5e 0%, #ec4899 100%); /* rose-500 to pink-500 */
}

/* Secondary Variant (Glass) */
.pushable-secondary .edge {
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.15) 8%,
    rgba(255, 255, 255, 0.15) 92%,
    rgba(255, 255, 255, 0.05) 100%
  );
}

.pushable-secondary .front {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

/* Success Variant (Green) */
.pushable-success .edge {
  background: linear-gradient(
    to left,
    hsl(142deg 76% 30%) 0%,
    hsl(142deg 76% 40%) 8%,
    hsl(142deg 76% 40%) 92%,
    hsl(142deg 76% 30%) 100%
  );
}

.pushable-success .front {
  background: linear-gradient(to right, #10b981 0%, #059669 100%); /* emerald-500 to emerald-600 */
}

/* Warning Variant (Orange) */
.pushable-warning .edge {
  background: linear-gradient(
    to left,
    hsl(27deg 86% 33%) 0%,
    hsl(27deg 86% 43%) 8%,
    hsl(27deg 86% 43%) 92%,
    hsl(27deg 86% 33%) 100%
  );
}

.pushable-warning .front {
  background: linear-gradient(to right, #f59e0b 0%, #f97316 100%); /* amber-500 to orange-500 */
}

/* Error Variant (Red) */
.pushable-error .edge {
  background: linear-gradient(
    to left,
    hsl(0deg 84% 40%) 0%,
    hsl(0deg 84% 50%) 8%,
    hsl(0deg 84% 50%) 92%,
    hsl(0deg 84% 40%) 100%
  );
}

.pushable-error .front {
  background: linear-gradient(to right, #ef4444 0%, #dc2626 100%); /* red-500 to red-600 */
}

/* Ghost Variant */
.pushable-ghost .edge {
  background: transparent;
}

.pushable-ghost .front {
  background: transparent;
  color: #d1d5db; /* gray-300 */
}

.pushable-ghost:hover .front {
  color: #f43f5e; /* rose-500 */
}

/* Outline Variant */
.pushable-outline .edge {
  background: linear-gradient(
    to left,
    rgba(244, 63, 94, 0.2) 0%,
    rgba(244, 63, 94, 0.3) 8%,
    rgba(244, 63, 94, 0.3) 92%,
    rgba(244, 63, 94, 0.2) 100%
  );
}

.pushable-outline .front {
  background: transparent;
  border: 2px solid #f43f5e; /* rose-500 */
  color: #f43f5e;
}

.pushable-outline:hover .front {
  background: #f43f5e;
  color: white;
}
</style>
