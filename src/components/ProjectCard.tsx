'use client'

import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  featured,
}: ProjectCardProps) {
  return (
    <article
      className={`bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border ${
        featured ? 'border-blue-500/50' : 'border-white/5'
      }`}
    >
      <div className="relative w-full h-52 sm:h-56 bg-gradient-to-r from-slate-700 to-slate-900 overflow-hidden">
        <Image
          src={image}
          alt={`Ilustración del proyecto ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wide bg-blue-600 text-white px-2 py-1 rounded">
            Destacado
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-fit bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors mt-auto"
          >
            <FaGithub size={18} />
            <span className="text-sm">Ver código</span>
          </a>
        )}
      </div>
    </article>
  )
}
