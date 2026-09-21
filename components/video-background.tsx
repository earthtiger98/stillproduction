"use client"

import { AnimatedBackground } from './animated-background'

export function VideoBackground() {
  return (
    <>
      <AnimatedBackground />
      {/* Subtle gradient overlay for depth */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/50" />
    </>
  )
}
