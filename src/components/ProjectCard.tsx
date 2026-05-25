'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
    title: string
    description: string
    image?: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
}

export default function ProjectCard({
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Imagen del proyecto */}
            {image && (
                <div className="w-full h-48 bg-gradient-to-r from-slate-700 to-slate-900 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>

                <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Enlaces */}
                <div className="flex gap-3 mt-auto">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                        >
                            <FaGithub size={18} />
                            <span className="text-sm">Código</span>
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                        >
                            <FaExternalLinkAlt size={16} />
                            <span className="text-sm">Ver</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
