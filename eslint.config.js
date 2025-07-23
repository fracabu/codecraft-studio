import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/*.config.js'],
  },

  {
    name: 'app/js-rules',
    ...js.configs.recommended,
  },

  {
    name: 'app/vue-rules',
    ...pluginVue.configs['flat/essential'],
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        // Vite globals
        'import': 'readonly',
        // Vue 3 Composition API globals
        'defineProps': 'readonly',
        'defineEmits': 'readonly',
        'defineExpose': 'readonly',
        'withDefaults': 'readonly',
        'defineOptions': 'readonly',
        'defineSlots': 'readonly',
        'defineModel': 'readonly',
        // Browser/Analytics globals
        'gtag': 'writable',
        'dataLayer': 'writable',
        // Process for compatibility
        'process': 'readonly'
      }
    },
    rules: {
      // Vue.js rules
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',

      // General rules
      'no-console': 'off', // Allow console in development
      'no-debugger': 'off', // Allow debugger in development
      'no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],

      // Modern JavaScript
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',

      // Import/Export
      'no-duplicate-imports': 'error',

      // Disable problematic rules for Vue SFC
      'no-undef': 'off' // Vue compiler handles this
    }
  }
]
