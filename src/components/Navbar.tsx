import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <ul className="flex justify-center space-x-6 p-4">
        <li><a href="#hero" className=" text-black hover:underline">Inicio</a></li>
        <li><a href="#technologies" className="text-black hover:underline">Tecnologías</a></li>
        <li><a href="#about" className=" text-black hover:underline">Sobre mí</a></li>
        <li><a href="#contact" className=" text-black hover:underline">Contacto</a></li>
      </ul>
    </nav>
  )
}
