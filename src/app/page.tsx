import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import Hero from '@/components/pages/Hero'
import Technologies from '@/components/pages/Technologies'
import Projects from '@/components/pages/Projects'

export default function HomePage() {
  return (
    <main className="scroll-smooth bg-gray-950">
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
