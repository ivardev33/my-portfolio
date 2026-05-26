'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiKotlin,
  SiJavascript,
  SiJetpackcompose,
  SiMysql,
  SiPython,
  SiFastapi,
} from 'react-icons/si'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const techs = [
  { icon: <SiPython size={40} color="#3776AB" />, name: 'Python', highlight: true },
  { icon: <SiFastapi size={40} color="#009688" />, name: 'FastAPI', highlight: true },
  { icon: <SiKotlin size={40} color="#7F52FF" />, name: 'Kotlin' },
  { icon: <SiJetpackcompose size={40} color="#4285F4" />, name: 'Jetpack Compose' },
  { icon: <FaReact size={40} color="#61DBFB" />, name: 'React' },
  { icon: <SiNextdotjs size={40} />, name: 'Next.js' },
  { icon: <SiTailwindcss size={40} color="#38bdf8" />, name: 'Tailwind' },
  { icon: <SiJavascript size={40} color="#f7df1e" />, name: 'JavaScript' },
  { icon: <FaHtml5 size={40} color="#e34c26" />, name: 'HTML' },
  { icon: <FaCss3Alt size={40} color="#264de4" />, name: 'CSS' },
  { icon: <FaNodeJs size={40} color="#3C873A" />, name: 'Node.js' },
  { icon: <SiMysql size={40} color="#00758f" />, name: 'MySQL' },
  { icon: <SiFirebase size={40} color="#FFCA28" />, name: 'Firebase' },
  { icon: <FaGitAlt size={40} color="#f1502f" />, name: 'Git' },
]

export default function Technologies() {
  const reduceMotion = useReducedMotion()

  return (
    <AnimateOnScroll id="technologies" className="py-24 flex flex-col items-center justify-center px-8 bg-gray-950">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center text-white">Tecnologías que uso</h2>
      <p className="text-gray-400 text-center mb-10 max-w-xl">
        Enfoque actual en <span className="text-yellow-300 font-medium">Python</span> y{' '}
        <span className="text-emerald-300 font-medium">FastAPI</span>, además de mi stack en móvil y web.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl w-full">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl shadow-md transition ${
              tech.highlight
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 ring-2 ring-emerald-500/40'
                : 'bg-white'
            }`}
          >
            {tech.icon}
            <span className={`mt-1 text-sm font-medium ${tech.highlight ? 'text-gray-100' : 'text-gray-800'}`}>
              {tech.name}
            </span>
            {tech.highlight && (
              <span className="text-[10px] uppercase tracking-wide text-emerald-400">En foco</span>
            )}
          </motion.div>
        ))}
      </div>
    </AnimateOnScroll>
  )
}
