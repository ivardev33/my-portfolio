import Technologies from '@/components/Technologies'

export default function HomePage() {
  return (
   <main className="scroll-smooth">
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <img src="/perfil.jpg" alt="Foto de perfil" className="w-70 h-70 rounded-full mx-auto mb-6 shadow-md object-cover" />
        <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Iván</h1>
        <p className="text-lg text-gray-700">Desarrollador Full Stack especializado en React, Kotlin y más.</p>
      </section>

      <section id="technologies" className="min-h-screen flex flex-col items-center justify-center p-8 bg-black-100">
        <h2 className="text-3xl font-bold mb-6">Tecnologías que uso</h2>
        <Technologies />
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="max-w-2xl text-center text-gray-700">
          Soy un apasionado del desarrollo móvil y web. Me encanta construir soluciones elegantes y funcionales.
        </p>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8 bg-black-100">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="text-gray-700">Puedes escribirme a: <a href="mailto:ivan.cano.p@outlook.com" className="text-blue-500 underline">ivan.cano.p@outlook.com</a></p>
      </section>
    </main>
  )
}
