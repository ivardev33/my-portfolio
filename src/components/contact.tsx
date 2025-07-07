export default function Contact(){


return(



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







)









}