import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/pages/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iván Cano — Desarrollador Android & Full Stack',
  description:
    'Portfolio de Iván Cano: Android (Kotlin, Jetpack Compose), frontend con React y especialización actual en Python y FastAPI para APIs y backend.',
  openGraph: {
    title: 'Iván Cano — Desarrollador Android & Full Stack',
    description:
      'Android, React y backend con Python y FastAPI. Proyectos, experiencia y contacto.',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/foto_perfil.jpeg', width: 400, height: 400, alt: 'Iván Cano' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
