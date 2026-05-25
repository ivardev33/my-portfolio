'use client'

import ProjectCard from '../ProjectCard'

interface Project {
    id: number
    title: string
    description: string
    image?: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'WowPlan',
        description: 'Aplicación de Android para planificación de viajes intuitiva y colaborativa. Permite a los usuarios crear itinerarios, compartir planes con amigos y organizar actividades de forma sencilla.',
        image: '/images/wowplan.jpg',
        technologies: ['Kotlin', 'Android', 'Firebase'],
        githubUrl: 'https://github.com/tuusuario/wowplan',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.wowplan'
    },
    {
        id: 2,
        title: 'TravelLog',
        description: 'Diario de viajes interactivo para guardar experiencias y recuerdos. Permite documentar viajes con fotos, notas y ubicaciones geográficas. Almacenamiento local con SQLite.',
        image: '/images/travellog.jpg',
        technologies: ['Kotlin', 'Android', 'SQLite'],
        githubUrl: 'https://github.com/tuusuario/travellog',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.travellog'
    },
    {
        id: 3,
        title: 'FocusFlow',
        description: 'Aplicación de Android para gestionar tareas y mejorar la productividad. Incluye gestión de proyectos, seguimiento de tiempos y estadísticas de productividad. Datos persistentes con SQLite.',
        image: '/images/focusflow.jpg',
        technologies: ['Kotlin', 'Android', 'SQLite'],
        githubUrl: 'https://github.com/tuusuario/focusflow',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.focusflow'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-8 bg-black-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-white text-center">Mis Proyectos</h2>
                <p className="text-gray-400 text-center mb-12">
                    Aquí están algunos de los proyectos en los que he trabajado
                </p>

                {projects.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">
                            Proyectos por venir... 🚀
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                technologies={project.technologies}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
