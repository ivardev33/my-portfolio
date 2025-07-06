
"use client";

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import{Menu,X} from "lucide-react";

export default function Navbar() {

const [menuOpen,setMenuOpen]=useState(false);

const toggleMenu=()=>setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Nombre a la izquierda */}
        <div className="text-xl font-bold text-white">
          Iván Cano
        </div>

            {/* Botón menú en móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Enlaces a la derecha */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-400">
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

       {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><a onClick={toggleMenu} href="#hero" className="hover:underline hover:text-white">Inicio</a></li>
            <li><a onClick={toggleMenu} href="#technologies" className="hover:underline hover:text-white">Tecnologías</a></li>
            <li><a onClick={toggleMenu} href="#about" className="hover:underline hover:text-white">Sobre mí</a></li>
            <li><a onClick={toggleMenu} href="#contact" className="hover:underline hover:text-white">Contacto</a></li>
            <li className="flex gap-4">
              <a href="https://www.linkedin.com/in/ivancanop" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/ivardev33" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-200">
                <FaGithub size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}





    </nav>
  )
}
