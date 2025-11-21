'use client'

import Link from 'next/link'
import { Zap, ArrowRight } from 'lucide-react'
import BaseButton from '@/components/common/BaseButton'
import { projects } from '@/app/data/projects'

export default function ToolPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden pt-20">
      <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
              Progetti Sviluppati
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Scopri i progetti che abbiamo realizzato: SaaS, automazioni, AI integration e molto altro.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {/* Card Content */}
                <div className="p-5">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                    <span>Scopri di più</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary-500/5 to-accent-500/5 border border-primary-500/10 rounded-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Hai un'idea simile?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl mx-auto">
              Parliamo del tuo progetto e vediamo come possiamo aiutarti a realizzarlo.
            </p>
            <div className="flex justify-center">
              <BaseButton
                to="/contatti"
                variant="primary"
                size="lg"
                rightIcon={ArrowRight}
              >
                Richiedi Consulenza Gratuita
              </BaseButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
