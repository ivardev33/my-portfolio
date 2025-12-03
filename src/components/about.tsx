



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
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><span className="font-medium">API de Nóminas:</span> subida de PDFs (FormData), consulta por empleado, descarga/visualización segura, rutas protegidas, validación y manejo de errores con respuestas JSON.</li>
                <li><span className="font-medium">Módulo RRHH (Nomina-user):</span> listado responsive (tabla/cards), descarga directa de PDF, previsualización en modal con iframe, control de estados, contadores, filtros y ordenación; integración front-API con <code>fetch()</code>.</li>
                <li><span className="font-medium">Componentes reutilizables:</span> botones (ver/descargar/ordenar), barra de búsqueda con filtrado en tiempo real, modales reutilizables y formularios accesibles.</li>
                <li><span className="font-medium">Diseño y maquetación:</span> interfaces con Astro, JavaScript y TailwindCSS; uso de variables de color; arquitectura modular y adaptación a mockups validados.</li>
                <li><span className="font-medium">Metodología y GitFlow:</span> ramas <code>feature/</code>, PRs, revisión cruzada, resolución de conflictos y limpieza tras merges; uso habitual de <code>clone</code>, <code>checkout</code>, <code>fetch</code>, <code>merge</code>, <code>pull</code>, <code>push</code>, <code>branch -a</code>.</li>
              </ul>
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