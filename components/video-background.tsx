"use client"

import { useRef } from 'react'

const BACKGROUND_VIDEO =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260921-2216-35.7361938-HlWfS5KBJfzI5Sofm0znveUMGqqumR.mp4'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const stopAnimation = () => {
    videoRef.current?.pause()
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onPointerDown={stopAnimation}
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full object-cover"
      >
        <source src={BACKGROUND_VIDEO} type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/50" />
    </>
  )
}
