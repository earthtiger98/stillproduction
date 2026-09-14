"use client"

export function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover opacity-40"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ComfyUI_00002_%20%281%29-jMOCaPa7K3h7svc342b6C51gqH0RrA.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
    </div>
  )
}
