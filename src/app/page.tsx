'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import About from '@/components/about'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Technologies from '@/components/Technologies'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Smooth scroll setup
      gsap.to(window, {
        scrollBehavior: "smooth",
      })

      // Animación básica al hacer scroll
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="scroll-smooth">
      <Hero />
      <Technologies />
      <About />
      <Contact />
    </main>
  )
}
