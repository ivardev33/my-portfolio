import AnimateOnScroll from '@/components/AnimateOnScroll'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <AnimateOnScroll id="projects" className="py-24 px-6 sm:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">Mis proyectos</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Experiencia profesional y apps Android en las que he trabajado.
        </p>

        <div className="flex flex-col gap-6">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              featured
            />
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}
