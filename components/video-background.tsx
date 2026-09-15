"use client"

export function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#42413e]">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="STILL Production logo animation"
        /* 
          1. top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 keeps it perfectly centered.
          2. w-[150%] acts as your zoom control on mobile. 
          3. md:... classes reset it back to standard object-cover for desktop.
        */
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none h-auto opacity-40 md:w-full md:h-full md:inset-0 md:translate-x-0 md:translate-y-0 md:object-cover md:object-[50%_35%]"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Can_you_give_the_logo_hard_edg-kYosBWpTKHW1I2GaA9wKTycZAjoEpZ.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
    </div>
  )
}