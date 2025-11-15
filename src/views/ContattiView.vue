<template>
  <div class="h-screen pt-4 flex flex-col overflow-hidden">
    <!-- Hero Section Centrata -->
    <section class="flex-1 px-6 flex flex-col justify-center overflow-y-auto">
      <div class="max-w-4xl mx-auto text-center space-y-6">

        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          <span class="text-white">Iniziamo </span>
          <span class="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
            Insieme
          </span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Consulenza gratuita di 30 minuti per analizzare i tuoi processi.
        </p>

        <!-- Contact Form -->
        <form
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }" 
          @submit.prevent="submitForm"
          class="max-w-lg mx-auto space-y-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
        >
          <div class="grid grid-cols-2 gap-4">
            <input
              v-model="form.nome"
              type="text"
              required
              placeholder="Nome *"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
            />
            <input
              v-model="form.cognome"
              type="text"
              required
              placeholder="Cognome *"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          <input
            v-model="form.email"
            type="email"
            required
            placeholder="Email *"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
          />

          <textarea
            v-model="form.messaggio"
            rows="3"
            required
            placeholder="Descrivi il tuo progetto... *"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
          ></textarea>

          <BaseButton
            type="submit"
            :disabled="isSubmitting"
            :loading="isSubmitting"
            variant="primary"
            size="md"
            full-width
          >
            <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            <span>{{ isSubmitting ? 'Invio...' : 'Invia Messaggio' }}</span>
          </BaseButton>

          <div v-if="submitMessage" :class="['text-center text-sm', submitMessage.type === 'success' ? 'text-green-400' : 'text-red-400']">
            {{ submitMessage.text }}
          </div>

          <!-- Versione deployment per debug -->
          <p class="text-xs text-gray-500 text-center mt-2">v2024.11.16.1-debug</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

// Form data
const form = reactive({
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  messaggio: ''
})

// Form state
const isSubmitting = ref(false)
const submitMessage = ref(null)

// Submit form function
const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = null

  console.log('Form submission started')

  try {
    // Determine API endpoint based on environment
    const apiEndpoint = import.meta.env.DEV
      ? 'http://localhost:3001/api/send-email'
      : '/api/send-email'

    console.log('API endpoint:', apiEndpoint)

    // Create AbortController for timeout (30 seconds for mobile)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)

    // Send form data to backend
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: form.nome,
        cognome: form.cognome,
        email: form.email,
        telefono: form.telefono,
        messaggio: form.messaggio
      }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    console.log('Response status:', response.status)

    const data = await response.json()
    console.log('Response data:', data)

    if (!response.ok || !data.success) {
      throw new Error(data.message || data.error || 'Errore durante l\'invio')
    }

    // Show success message
    submitMessage.value = {
      type: 'success',
      text: 'Messaggio inviato con successo! Ti risponderemo presto.'
    }

    // Reset form after successful submission
    setTimeout(() => {
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      submitMessage.value = null
    }, 5000)

  } catch (error) {
    console.error('Error submitting form:', error)

    let errorMessage = 'Errore durante l\'invio. Riprova o contattaci direttamente.'

    if (error.name === 'AbortError') {
      errorMessage = 'Richiesta scaduta. Controlla la connessione e riprova.'
    } else if (error.message) {
      errorMessage = error.message
    }

    submitMessage.value = {
      type: 'error',
      text: errorMessage
    }
  } finally {
    isSubmitting.value = false
    console.log('Form submission completed')
  }
}
</script>