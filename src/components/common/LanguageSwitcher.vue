<template>
  <div class="language-switcher">
    <button
      v-for="locale in locales"
      :key="locale.code"
      @click="changeLocale(locale.code)"
      :class="[
        'locale-btn',
        { 'active': currentLocale === locale.code }
      ]"
      :aria-label="`Switch to ${locale.name}`"
    >
      {{ locale.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { switchLocale } from '@/router'

const { locale } = useI18n()

const locales = [
  { code: 'it', name: 'Italiano' },
  { code: 'en', name: 'English' }
]

const currentLocale = computed(() => locale.value)

const changeLocale = (newLocale) => {
  if (newLocale !== currentLocale.value) {
    switchLocale(newLocale)
  }
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.locale-btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.05em;
}

.locale-btn:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.locale-btn.active {
  color: white;
  background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
  box-shadow: 0 2px 8px rgba(244, 63, 94, 0.3);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .language-switcher {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    padding: 0.375rem;
  }

  .locale-btn {
    flex: 1;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
