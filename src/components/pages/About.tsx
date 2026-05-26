import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function About() {
  return (
    <AnimateOnScroll id="about" className="py-24 flex flex-col items-center px-6 bg-gray-950 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Sobre mí</h2>

        <div className="text-gray-200 leading-relaxed bg-gray-800/80 p-6 sm:p-8 rounded-2xl shadow-xl border border-white/5 space-y-6">
          <p className="text-lg rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-4">
            <span className="font-semibold text-emerald-300">Especialización actual:</span> estoy profundizando en{' '}
            <span className="font-semibold text-yellow-300">Python</span> y{' '}
            <span className="font-semibold text-teal-300">FastAPI</span> para diseñar APIs REST escalables, validación
            de datos y backends orientados a servicios — complementando mi experiencia en Android y frontend.
          </p>

          <p className="text-lg">
            Desarrollador Android con experiencia en <span className="font-semibold">MVVM</span>,{' '}
            <span className="font-semibold">Clean Architecture</span> y desarrollo con{' '}
            <span className="font-semibold">Kotlin</span> y <span className="font-semibold">Jetpack Compose</span>.
            Apasionado de la tecnología, adaptable y orientado a la mejora continua.
          </p>

          <p className="text-lg">
            También trabajo con <span className="font-semibold">JavaScript</span>,{' '}
            <span className="font-semibold">React</span> y <span className="font-semibold">Next.js</span>. Certificado{' '}
            <span className="font-semibold text-green-400">Cisco CCST</span> en ciberseguridad y redes.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-300">Experiencia reciente</h3>
            <div className="space-y-2">
              <p className="font-semibold">
                SAGATECH — Desarrollador Frontend/Full Stack{' '}
                <span className="text-sm text-gray-400 font-normal">(09/2025 – Presente)</span>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Módulo de Recursos Humanos en ERP/CRM: frontend con Astro, JavaScript y TailwindCSS; APIs REST para
                nóminas, documentos con FormData y rutas protegidas. GitFlow, PRs y revisión de código.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <p className="font-semibold">
                Freelance — Android y Frontend{' '}
                <span className="text-sm text-gray-400 font-normal">(09/2022 – Presente)</span>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Apps Android nativas con Jetpack Compose y Material Design.</li>
                <li>Arquitectura MVVM, Room/SQLite y control de versiones con Git.</li>
                <li>Frontend con React e interfaces responsivas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}
