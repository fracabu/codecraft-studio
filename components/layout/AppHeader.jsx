'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Home, Briefcase, Zap, Mail } from 'lucide-react'

export default function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Servizi', href: '/servizi', icon: Briefcase },
    { name: 'Progetti', href: '/tool', icon: Zap },
    { name: 'Contatti', href: '/contatti', icon: Mail },
  ]

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo CodeCraft */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo-code2.png"
            alt="CodeCraft Studio"
            width={192}
            height={48}
            priority
            className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Menu Button (visible on all screen sizes) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`
            text-white hover:text-rose-400 transition-colors p-2 rounded-lg
            hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400/50
            ${mobileMenuOpen ? 'text-rose-400' : ''}
          `}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {!mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu Dropdown */}
      <div
        className={`
          absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm
          border-t border-white/10 mx-6 rounded-b-2xl shadow-2xl
          transition-all duration-300 ease-in-out origin-top
          ${mobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-y-100'
            : 'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
          }
        `}
      >
        <div className="flex flex-col space-y-2 p-6">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className={`
                  text-gray-300 hover:text-rose-400 transition-colors py-3 px-4
                  rounded-lg hover:bg-white/10 flex items-center space-x-3
                  ${pathname === item.href ? 'text-rose-400 bg-rose-400/10' : ''}
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}

        </div>
      </div>
    </header>
  )
}
