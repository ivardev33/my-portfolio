import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto flex justify-center gap-8">
        <Link href="/" className="hover:underline">Inicio</Link>
        <Link href="/about" className="hover:underline">Sobre mí</Link>
        <Link href="/projects" className="hover:underline">Proyectos</Link>
        <Link href="/contact" className="hover:underline">Contacto</Link>
      </div>
    </nav>
  )
}
