"use client"

export function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#42413e]">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Can_you_give_the_logo_hard_edg-kYosBWpTKHW1I2GaA9wKTycZAjoEpZ.mp4"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="K and N Production logo animation"
        className="relative h-full w-full object-contain opacity-40 sm:object-cover"
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
