"use client"

const BACKGROUND_VIDEO =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260921-2217-49.3251505-EVNf7vk0vJDtToANwlPY1MmCTNAG6F.mp4'

export function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full object-cover"
      >
        <source src={BACKGROUND_VIDEO} type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/50" />
    </>
  )
}
