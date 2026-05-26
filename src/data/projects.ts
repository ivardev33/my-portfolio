export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'SAGATECH ERP — Módulo RRHH',
    description:
      'Desarrollo del módulo de Recursos Humanos en un ERP/CRM modular: frontend con Astro y TailwindCSS, APIs REST para nóminas, subida de documentos con FormData y rutas protegidas. Trabajo con GitFlow, PRs y revisión de código.',
    image: '/images/sagatech.jpg',
    technologies: ['Astro', 'JavaScript', 'TailwindCSS', 'REST API', 'GitFlow'],
    featured: true,
  },
  {
    id: 2,
    title: 'WowPlan',
    description:
      'App Android para planificar viajes de forma intuitiva y colaborativa: itinerarios, planes compartidos y organización de actividades.',
    image: '/images/wowplan.jpg',
    technologies: ['Kotlin', 'Android', 'Firebase'],
  },
  {
    id: 3,
    title: 'TravelLog',
    description:
      'Diario de viajes interactivo para guardar experiencias con fotos, notas y ubicaciones. Persistencia local con SQLite.',
    image: '/images/travellog.jpg',
    technologies: ['Kotlin', 'Android', 'SQLite'],
  },
  {
    id: 4,
    title: 'FocusFlow',
    description:
      'App Android de productividad: gestión de tareas, seguimiento de tiempos y estadísticas. Datos persistentes con SQLite.',
    image: '/images/focusflow.jpg',
    technologies: ['Kotlin', 'Android', 'SQLite'],
  },
]
