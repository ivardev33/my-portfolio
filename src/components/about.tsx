



export default function About() {
  return (
    <section id="about" className="animate-on-scroll py-24 flex flex-col items-center px-6 bg-gray-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10">Sobre mí</h2>

        <div className="text-gray-200 leading-relaxed bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
          <p className="text-lg">
            Desarrollador Android con experiencia en <span className="font-semibold">MVVM</span>, <span className="font-semibold">Clean Architecture</span> y
            desarrollo con <span className="font-semibold">Kotlin</span> y <span className="font-semibold">Jetpack Compose</span>. Apasionado de la tecnología, adaptable y orientado a la mejora continua.
            Actualmente especializado en la creación de interfaces modernas y en la optimización del ciclo de desarrollo móvil con Android Studio.
          </p>

          <p className="text-lg">
            Además, tengo conocimientos en <span className="font-semibold">Java</span>, <span className="font-semibold">Python</span> y <span className="font-semibold">C#</span>, y trabajo con
            <span className="font-semibold"> JavaScript</span> y <span className="font-semibold">React</span>, ampliando mi perfil hacia el frontend moderno. Estoy certificado como
            <span className="font-semibold text-green-400"> Cisco CCST (Certified Cybersecurity Support Technician)</span>, reforzando mis competencias en ciberseguridad y redes. Abierto a explorar
            administración de sistemas, redes o DevOps, donde seguir aportando valor.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-300">Experiencia reciente</h3>
            <div className="space-y-2">
              <p className="font-semibold">SAGATECH — Desarrollador Frontend/Full Stack <span className="text-sm text-gray-400">(09/2025 – Presente)</span></p>
              <p className="text-gray-300 leading-relaxed">
                Participé en el desarrollo del ERP/CRM de Sagatech, un sistema modular orientado a la gestión empresarial. Fui responsable del módulo de Recursos Humanos,
                abarcando <span className="font-medium">desarrollo frontend completo</span> con Astro, JavaScript y TailwindCSS, así como el <span className="font-medium">diseño e implementación
                  de APIs REST</span> para la gestión de nóminas. Desarrollé endpoints para subida de documentos mediante FormData, consultas por empleado, descarga segura y gestión de rutas
                protegidas, implementando validación de datos y manejo robusto de errores con respuestas JSON estructuradas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                En el frontend, construí interfaces responsivas con componentes reutilizables (botones, modales, barra de búsqueda con filtrado en tiempo real), aplicando
                arquitectura modular y variables de color para mantener consistencia visual. Integré el frontend con las APIs mediante <code>fetch()</code>, gestionando estados de carga,
                errores y éxito. Trabajé bajo metodología <span className="font-medium">GitFlow</span>, utilizando ramas <code>feature/</code>, Pull Requests, revisión de código y resolución
                de conflictos, con documentación de avances en sprints y validación continua del tutor.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <p className="font-semibold">Freelance y Transición — Android y Frontend <span className="text-sm text-gray-400">(09/2022 – Presente)</span></p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Desarrollo de apps Android nativas con Jetpack Compose y Material Design.</li>
                <li>Arquitectura <span className="font-medium">MVVM</span>, repositorios y persistencia con <span className="font-medium">SQLite/Room</span>.</li>
                <li>Frontend con <span className="font-medium">JavaScript</span> y <span className="font-medium">React</span>, interfaces responsivas y dinámicas.</li>
                <li>Control de versiones con Git, foco en rendimiento y UX; trabajo ágil (Scrum/Kanban).</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <h3 className="text-2xl font-semibold text-blue-300">Tecnologías</h3>
            <p className="text-gray-300">
              Kotlin · Jetpack Compose · Android Studio · Java · JavaScript · React · TailwindCSS · MySQL · APIs REST · Git · GitHub · GitFlow · Cisco CCST
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}