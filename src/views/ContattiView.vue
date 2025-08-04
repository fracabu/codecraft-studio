<template>
  <div class="h-screen pt-4 flex flex-col overflow-hidden">
    <!-- Hero Section Centrata -->
    <section class="flex-1 px-6 flex flex-col justify-start pt-16 overflow-y-auto">
      <div class="max-w-4xl mx-auto text-center space-y-6">

        <h1 class="text-5xl md:text-7xl font-bold">
          <span class="text-white">Iniziamo </span>
          <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Insieme
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Consulenza gratuita di 30 minuti per analizzare i tuoi processi.
        </p>

        <!-- Contact Form -->
        <form 
          @submit.prevent="submitForm"
          class="max-w-lg mx-auto space-y-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
        >
          <div class="grid grid-cols-2 gap-4">
            <input
              v-model="form.nome"
              type="text"
              required
              placeholder="Nome *"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
            />
            <input
              v-model="form.cognome"
              type="text"
              required
              placeholder="Cognome *"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          <input
            v-model="form.email"
            type="email"
            required
            placeholder="Email *"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          />

          <textarea
            v-model="form.messaggio"
            rows="3"
            required
            placeholder="Descrivi il tuo progetto... *"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
          ></textarea>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isSubmitting ? 'Invio...' : 'Invia Messaggio' }}</span>
          </button>

          <div v-if="submitMessage" :class="['text-center text-sm', submitMessage.type === 'success' ? 'text-green-400' : 'text-red-400']">
            {{ submitMessage.text }}
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

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

  try {
    // Prepare email data
    const emailData = {
      to: 'info@codecraft.it',
      subject: `Nuovo contatto da ${form.nome} ${form.cognome}`,
      body: `
Nome: ${form.nome} ${form.cognome}
Email: ${form.email}
Telefono: ${form.telefono || 'Non fornito'}

Messaggio:
${form.messaggio}

---
Messaggio inviato dal sito CodeCraft Studio
      `.trim()
    }

    // Create mailto link
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`
    
    // Open email client
    window.location.href = mailtoLink

    // Show success message
    submitMessage.value = {
      type: 'success',
      text: 'Email preparata! Controlla il tuo client di posta.'
    }

    // Reset form after successful submission
    setTimeout(() => {
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      submitMessage.value = null
    }, 3000)

  } catch (error) {
    console.error('Error:', error)
    submitMessage.value = {
      type: 'error',
      text: 'Errore durante l\'invio. Riprova o contattaci direttamente.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>