"use client"

import Technologies from '@/components/Technologies'
import Hero from '@/components/hero'
import About from '@/components/about'
import Contact from '@/components/contact'


export default function HomePage() {
  return (
    <main className="scroll-smooth">

      <Hero />

      <Technologies />
      <About/>
      <Contact/>



    </main>
  )
}
