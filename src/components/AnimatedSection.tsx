"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";


interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;          // <-- aquí
  className?: string;   // <-- aquí
}

export default function AnimatedSection({ children, id, className }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id={id}                      // <-- pasamos el id
      ref={ref}
      className={`${className ?? ""} ${isVisible ? "visible" : ""}`}  // <-- pasamos className + animación
    >
      {children}
    </section>
  );
}
