'use client'

import { useState } from 'react'
import BaseButton from '@/components/common/BaseButton'
import { Send } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Messaggio inviato con successo! Ti risponderemo presto.'
        })
        setForm({
          nome: '',
          cognome: '',
          email: '',
          telefono: '',
          messaggio: ''
        })
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.message || 'Errore durante l\'invio. Riprova.'
        })
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Errore di connessione. Riprova più tardi.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="flex-1 px-6 py-16 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-white">Iniziamo </span>
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
              Insieme
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Consulenza gratuita di 30 minuti per analizzare i tuoi processi.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                name="nome"
                type="text"
                required
                value={form.nome}
                onChange={handleChange}
                placeholder="Nome *"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
              />
              <input
                name="cognome"
                type="text"
                required
                value={form.cognome}
                onChange={handleChange}
                placeholder="Cognome *"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
            />

            <input
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Telefono (opzionale)"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
            />

            <textarea
              name="messaggio"
              rows="5"
              required
              value={form.messaggio}
              onChange={handleChange}
              placeholder="Descrivi il tuo progetto... *"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 resize-none"
            ></textarea>

            <BaseButton
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              variant="primary"
              size="lg"
              fullWidth={true}
              leftIcon={!isSubmitting ? Send : null}
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
            </BaseButton>

            {submitMessage && (
              <div className={`text-center text-sm p-3 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {submitMessage.text}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
