'use client'

import BaseButton from '@/components/common/BaseButton'
import { ArrowRight, Zap, Target, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight px-4 pb-4">
            <span className="block mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trasformiamo Concetti
            </span>
            <span className="block my-4 text-white">
              in Esperienze
            </span>
            <span className="block pb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Digitali Uniche
            </span>
          </h1>

          <div className="mt-24 flex justify-center">
            <BaseButton
              to="/contatti"
              variant="primary"
              size="lg"
              className="max-w-xs"
              rightIcon={ArrowRight}
            >
              Inizia Ora
            </BaseButton>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 pb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Benvenuto in CodeCraft Studio
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
            Siamo dedicati ad aiutare le aziende a crescere con soluzioni innovative
            scalabili e a prova di futuro. Il nostro obiettivo è guidare il tuo successo
            con la nostra esperienza nello sviluppo web, mobile e AI.
          </p>

          <div className="h-1 w-32 mx-auto mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>

          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            La Nostra Missione
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Rivoluzionare il panorama digitale fornendo soluzioni all'avanguardia che
            permettono alle aziende di eccellere nei rispettivi settori.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            I Nostri Punti di Forza
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Innovazione', desc: 'Soluzioni all\'avanguardia per il futuro digitale' },
              { icon: Target, title: 'Precisione', desc: 'Attenzione ai dettagli in ogni progetto' },
              { icon: Users, title: 'Collaborazione', desc: 'Lavoriamo insieme per il tuo successo' }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pronto a Iniziare?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Trasforma la tua visione in realtà con le nostre soluzioni innovative
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              to="/contatti"
              variant="secondary"
              size="lg"
              rightIcon={ArrowRight}
            >
              Contattaci
            </BaseButton>
            <BaseButton
              to="/servizi"
              variant="outline"
              size="lg"
              pushable={false}
              className="!text-white !border-white hover:!bg-white hover:!text-purple-600"
            >
              Scopri i Servizi
            </BaseButton>
          </div>
        </div>
      </section>
    </div>
  )
}
