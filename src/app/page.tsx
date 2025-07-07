import Technologies from '@/components/Technologies'


export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center p-8  bg-gray-900">
        <img src="/perfil.jpg" alt="Foto de perfil" className="w-70 h-70 rounded-full mx-auto mb-6 shadow-md object-cover" />
        <h1 className="text-4xl font-bold mb-4 text-white">¡Hola! Soy Iván</h1>
        <p className="text-lg text-gray-700">Desarrollador Full Stack especializado en React, Kotlin y más.</p>
      </section>

      <section id="technologies" className="min-h-screen flex flex-col items-center justify-center p-8 bg-black-100">
        <h2 className="text-3xl font-bold mb-6">Tecnologías que uso</h2>
        <Technologies />
      </section>

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



<section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8 bg-black-100">
  <h2 className="text-3xl font-bold mb-6">Contacto</h2>

  <p className="text-gray-700 mb-4">
    Puedes escribirme a:{' '}
    <a href="mailto:ivan.cano.p@outlook.com" className="text-blue-500 underline">
      ivan.cano.p@outlook.com
    </a>
  </p>

  <a
    href="/cv/Ivan-CV.pdf"
    download
    className="mt-4 inline-block px-6 py-3 bg-black text-white border border-gray-300 rounded-lg hover:bg-gray-800 transition"
  >
    Descargar CV
  </a>
</section>

    </main>
  )
}
