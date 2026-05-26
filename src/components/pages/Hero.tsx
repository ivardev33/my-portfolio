'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiArrowDown, FiDownload, FiGithub } from 'react-icons/fi'

const CV_PATH = '/cv/Ivan_Cano_CV.pdf'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center bg-gray-900 px-6 pt-24 pb-16"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/foto_perfil.jpeg"
          alt="Foto de perfil de Iván Cano"
          width={280}
          height={280}
          priority
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full mx-auto mb-6 shadow-lg object-cover ring-2 ring-blue-500/30"
        />
      </motion.div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white max-w-3xl">
        {reduceMotion ? (
          '¡Hola! Soy Iván'
        ) : (
          <Typewriter
            words={['¡Hola! Soy Iván', 'Desarrollador Android & Full Stack']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={55}
            deleteSpeed={35}
            delaySpeed={2000}
          />
        )}
      </h1>

      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-2">
        Android con Kotlin y Jetpack Compose · Frontend con React
      </p>
      <p className="text-base sm:text-lg text-blue-300 max-w-2xl mb-8 font-medium">
        Actualmente especializándome en{' '}
        <span className="text-yellow-300">Python</span> y{' '}
        <span className="text-emerald-300">FastAPI</span> para backend y APIs.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
        >
          <FiArrowDown /> Ver proyectos
        </Link>
        <a
          href={CV_PATH}
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-gray-900 hover:bg-gray-200 transition"
        >
          <FiDownload /> Descargar CV
        </a>
        <a
          href="https://github.com/ivardev33"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400 text-gray-200 transition"
        >
          <FiGithub /> GitHub
        </a>
      </div>
    </section>
  )
}
