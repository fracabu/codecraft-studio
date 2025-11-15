import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('motion-')
        }
      }
    }),

    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,webp,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      },
      manifest: {
        name: 'CodeCraft Studio - AI Business Automations',
        short_name: 'CodeCraft',
        description: 'Automazioni AI per business - Riduci costi del 60%',
        theme_color: '#0ea5e9',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        categories: ['business', 'productivity', 'technology'],
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ]
      }
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'ui': ['@vueuse/core', '@vueuse/head', '@vueuse/motion'],
          'lucide': ['lucide-vue-next']
        }
      }
    },

    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Always drop console in production builds
        drop_debugger: true
      }
    },
    cssCodeSplit: true,
    sourcemap: false // Disable sourcemap in production for security
  },

  server: {
    port: 3000,
    open: true,
    cors: true,
    hmr: {
      overlay: false // Disabilita overlay errori se troppo invasivo
    }
  },

  preview: {
    port: 4173,
    open: true
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      '@vueuse/core',
      '@vueuse/head',
      'lucide-vue-next'
    ]
  }
})
