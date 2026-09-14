"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full pt-24">
        <div className="flex flex-col gap-8">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground">
            Design Studio
          </p>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-balance">
            DESIGN<br />
            <span className="text-accent">THAT</span><br />
            MOVES<span className="text-muted-foreground">.</span>
          </h1>

          <p className="max-w-md text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            We transform your vision into vivid reality. Creating experiences that connect, inspire, and move people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium text-sm uppercase tracking-widest hover:bg-foreground/10 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  )
}
