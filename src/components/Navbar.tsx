'use client'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useCallback, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#hero', label: 'Inicio', id: 'hero' },
  { href: '#technologies', label: 'Tecnologías', id: 'technologies' },
  { href: '#projects', label: 'Proyectos', id: 'projects' },
  { href: '#about', label: 'Sobre mí', id: 'about' },
  { href: '#contact', label: 'Contacto', id: 'contact' },
] as const

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  const updateActiveSection = useCallback(() => {
    const offset = 120
    let current = SECTION_IDS[0]

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [updateActiveSection])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const linkClass = (id: string) =>
    `transition-colors ${
      activeSection === id ? 'text-white font-medium' : 'text-gray-400 hover:text-white'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-950/95 backdrop-blur border-b border-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-white hover:text-blue-300 transition">
          Iván Cano
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(({ href, label, id }) => (
            <li key={id}>
              <a href={href} className={linkClass(id)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/ivancanop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ivardev33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <FaGithub size={22} />
            </a>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="md:hidden px-4 pb-4 border-t border-gray-800">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ href, label, id }) => (
              <li key={id}>
                <a href={href} onClick={closeMenu} className={linkClass(id)}>
                  {label}
                </a>
              </li>
            ))}
            <li className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/ivancanop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/ivardev33"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaGithub size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
