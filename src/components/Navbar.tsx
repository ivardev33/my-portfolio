import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Nombre a la izquierda */}
        <div className="text-xl font-bold text-white">
          Iván Cano
        </div>

        {/* Enlaces a la derecha */}
        <ul className="flex items-center space-x-6 text-gray-400">
          <li><a href="#hero" className="hover:underline hover:text-white">Inicio</a></li>
          <li><a href="#technologies" className="hover:underline hover:text-white">Tecnologías</a></li>
          <li><a href="#about" className="hover:underline hover:text-white">Sobre mí</a></li>
          <li><a href="#contact" className="hover:underline hover:text-white">Contacto</a></li>

          {/* Iconos de LinkedIn y GitHub */}
          <li>
            <a
              href="https://www.linkedin.com/in/ivancanop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ivardev33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-200"
            >
              <FaGithub size={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
