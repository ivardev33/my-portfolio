



export default function About(){

    return(


<section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Sobre mí</h2>

        <div className="max-w-3xl text-lg text-gray-200 space-y-6 leading-relaxed bg-gray-800 p-8 rounded-2xl shadow-xl">
          <p>
            👨‍💻 Soy desarrollador con experiencia en la creación de <span className="font-semibold text-blue-400">aplicaciones móviles Android</span>,
            trabajando con <span className="font-semibold">Java</span> y <span className="font-semibold">Kotlin</span>. He implementado patrones
            como <span className="italic">MVVM</span>, diseñando interfaces intuitivas y conectando con bases de datos locales y en la nube.
          </p>

          <p>
            🚀 Actualmente me estoy especializando en <span className="font-semibold text-blue-400">desarrollo frontend con React</span>,
            utilizando tecnologías modernas como <span className="font-semibold">Next.js</span> para construir interfaces web dinámicas y profesionales.
          </p>

          <p>
            🔐 Además, cuento con la certificación <span className="font-semibold text-green-400">CCST Cybersecurity de Cisco</span>, que respalda mis
            conocimientos en seguridad informática, buenas prácticas y análisis de amenazas en entornos digitales.
          </p>
        </div>
      </section>
    )
}