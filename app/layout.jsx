import { Inter, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import CookieBanner from '@/components/common/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'CodeCraft Studio - AI Business Automations',
  description: 'Soluzioni innovative per automatizzare il tuo business con intelligenza artificiale',
  keywords: ['AI', 'automazione', 'business', 'machine learning', 'n8n', 'workflow automation'],
  authors: [{ name: 'CodeCraft Studio' }],
  metadataBase: new URL('https://www.codecraft.it'),
  openGraph: {
    title: 'CodeCraft Studio - AI Business Automations',
    description: 'Soluzioni innovative per automatizzare il tuo business con intelligenza artificiale',
    url: 'https://www.codecraft.it',
    siteName: 'CodeCraft Studio',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCraft Studio - AI Business Automations',
    description: 'Soluzioni innovative per automatizzare il tuo business con intelligenza artificiale',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div id="app" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <AppHeader />

          <main className="relative z-10">
            {children}
          </main>

          <AppFooter />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
