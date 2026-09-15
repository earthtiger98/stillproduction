"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

const letters = ["S", "T", "I", "L", "L"]

export function MobileStillExperience() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? Math.min(window.scrollY / Math.min(maxScroll, window.innerHeight * 2.2), 1) : 0)
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  const activeIndex = Math.min(letters.length - 1, Math.floor(progress * letters.length))
  const zoom = 1 + progress * 3.8
  const letterOpacity = progress > 0.08 ? 0.16 : 1

  return (
    <section className="mobile-still-scene relative min-h-[280vh] overflow-hidden md:hidden" aria-label="STILL mobile introduction">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/45 via-transparent to-background/90" />

        <div className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-center">
          <div className="still-wordmark" style={{ transform: `scale(${zoom})`, opacity: letterOpacity }} aria-hidden="true">
            {letters.map((letter, index) => (
              <span className={`still-letter ${index === activeIndex ? "is-active" : ""}`} key={`${letter}-${index}`}>
                {letter}
              </span>
            ))}
          </div>

          <div className="mt-12 w-full transition-opacity duration-500" style={{ opacity: Math.max(0.2, progress * 1.3) }}>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Design Studio / 0{activeIndex + 1}</p>
            <h1 className="text-5xl font-bold uppercase leading-[0.86] tracking-tighter">
              Design<br /><span className="text-accent">that</span><br />moves<span className="text-muted-foreground">.</span>
            </h1>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-muted-foreground">
              We transform your vision into vivid reality. Creating experiences that connect, inspire, and move people.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href="#contact" className="inline-flex items-center justify-center bg-foreground px-6 py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground">
                Start a Project
              </a>
              <a href="#work" className="inline-flex items-center justify-center border border-border px-6 py-4 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/10">
                View Work
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-muted-foreground">
          <span className="mb-2 block text-[10px] uppercase tracking-[0.25em]">Scroll to enter</span>
          <ArrowDown className="mx-auto animate-bounce" size={18} />
        </div>
      </div>
    </section>
  )
}
