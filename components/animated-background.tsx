'use client'

import { useEffect, useRef } from 'react'

const MOBILE_BREAKPOINT = 768

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: false })
    if (!canvas || !context) return

    let frameId = 0
    let startTime = performance.now()
    let width = 0
    let height = 0
    let pixelRatio = 1
    let renderWidth = 0
    let renderHeight = 0
    let imageData: ImageData

    const hash = (x: number, y: number, z: number) => {
      const value = Math.sin(x * 12.9898 + y * 78.233 + z * 43.14) * 43758.5453
      return value - Math.floor(value)
    }

    const noise = (x: number, y: number, z: number) => {
      const x0 = Math.floor(x)
      const y0 = Math.floor(y)
      const z0 = Math.floor(z)
      const xf = x - x0
      const yf = y - y0
      const zf = z - z0
      const fade = (value: number) => value * value * value * (value * (value * 6 - 15) + 10)
      const u = fade(xf)
      const v = fade(yf)
      const w = fade(zf)
      const lerp = (a: number, b: number, amount: number) => a + (b - a) * amount
      const a = lerp(hash(x0, y0, z0), hash(x0 + 1, y0, z0), u)
      const b = lerp(hash(x0, y0 + 1, z0), hash(x0 + 1, y0 + 1, z0), u)
      const c = lerp(hash(x0, y0, z0 + 1), hash(x0 + 1, y0, z0 + 1), u)
      const d = lerp(hash(x0, y0 + 1, z0 + 1), hash(x0 + 1, y0 + 1, z0 + 1), u)
      return lerp(lerp(a, b, v), lerp(c, d, v), w)
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      const mobile = width < MOBILE_BREAKPOINT
      const resolutionScale = mobile ? 0.42 : 0.58
      renderWidth = Math.max(1, Math.floor(width * resolutionScale))
      renderHeight = Math.max(1, Math.floor(height * resolutionScale))
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      imageData = new ImageData(renderWidth, renderHeight)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const render = (now: number) => {
      if (!pausedRef.current) {
        const elapsed = (now - startTime) / 12000
        const data = imageData.data

        for (let y = 0; y < renderHeight; y += 1) {
          for (let x = 0; x < renderWidth; x += 1) {
            const index = (y * renderWidth + x) * 4
            const nx = x / renderWidth
            const ny = y / renderHeight
            const flow = noise(nx * 2.2 + elapsed * 0.14, ny * 2.2 - elapsed * 0.1, elapsed * 0.08)
            const detail = noise(nx * 8 + elapsed * 0.04, ny * 8 + elapsed * 0.06, 4 + elapsed * 0.03)
            const dither = ((x * 17 + y * 31) % 9) / 9
            const brightness = Math.max(0, flow * 17 + detail * 9 + dither * 3 + Math.sin(ny * 5 - elapsed * 2) * 2)
            data[index] = 13 + brightness * 0.82
            data[index + 1] = 15 + brightness * 0.86
            data[index + 2] = 18 + brightness
            data[index + 3] = 255
          }
        }

        context.imageSmoothingEnabled = true
        context.putImageData(imageData, 0, 0)
        context.drawImage(canvas, 0, 0, renderWidth, renderHeight, 0, 0, width, height)
      }

      frameId = requestAnimationFrame(render)
    }

    const pauseOnInteraction = () => {
      pausedRef.current = true
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointerdown', pauseOnInteraction, { passive: true, once: true })
    frameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointerdown', pauseOnInteraction)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full"
      style={{ background: '#0d0f12' }}
    />
  )
}
