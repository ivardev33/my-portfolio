'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiMail, FiDownload, FiCopy, FiCheck } from 'react-icons/fi'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const EMAIL = 'ivan.cano.p@outlook.com'
const CV_PATH = '/cv/Ivan_Cano_CV.pdf'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const reduceMotion = useReducedMotion()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard no disponible */
    }
  }

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true, amount: 0.3 } as const,
      }

  return (
    <AnimateOnScroll id="contact" className="relative py-24 px-6 bg-gray-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-white">Contacto</h2>
        <p className="text-center text-gray-300 mb-10">¿Tienes un proyecto o propuesta? Hablemos.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            {...motionProps}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gray-800/70 backdrop-blur border border-white/10 p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Escríbeme</h3>
            <p className="text-gray-300 mb-4">Correo directo:</p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <FiMail className="text-blue-400 shrink-0" size={22} />
              <a href={`mailto:${EMAIL}`} className="text-blue-400 hover:underline break-all">
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 text-sm text-gray-100 transition"
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={CV_PATH}
                download="Ivan_Cano_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition"
              >
                <FiDownload /> Descargar CV
              </a>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-500 hover:border-gray-400 text-gray-200 transition"
              >
                Ver CV
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Contacto%20desde%20portafolio`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
              >
                <FiMail /> Contactar ahora
              </a>
            </div>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.1 }}
            className="rounded-2xl bg-gray-800/70 backdrop-blur border border-white/10 p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Disponibilidad</h3>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc pl-5">
              <li>Tiempo completo o parcial</li>
              <li>Remoto o híbrido</li>
              <li>Zona horaria CET (España)</li>
              <li>Abierto a proyectos con Python / FastAPI</li>
            </ul>
            <p className="text-gray-400 text-sm">Respuesta habitual: 24–48 h.</p>
          </motion.div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}
