"use client"

export function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#42413e]">
      {/* 1. Blurred Background Video (Fills the entire screen) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        /* scale-110 prevents a "halo" effect around the edges caused by the blur */
        className="absolute inset-0 w-full h-full object-cover blur-[40px] opacity-30 scale-110"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Can_you_give_the_logo_hard_edg-kYosBWpTKHW1I2GaA9wKTycZAjoEpZ.mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. Main Focused Video (Your zoom-controlled logo) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="STILL Production logo animation"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none h-auto opacity-70 md:w-full md:h-full md:inset-0 md:translate-x-0 md:translate-y-0 md:object-cover md:object-[50%_35%] md:opacity-40"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Can_you_give_the_logo_hard_edg-kYosBWpTKHW1I2GaA9wKTycZAjoEpZ.mp4"
          type="video/mp4"
        />
      </video>

      {/* 3. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
    </div>
  )
}