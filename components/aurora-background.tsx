"use client"

import { useEffect, useRef } from "react"

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color)
      })
      return gradient
    }

    const animate = () => {
      time += 0.005

      // Clear canvas with dark background
      ctx.fillStyle = "rgba(8, 12, 35, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create multiple flowing aurora layers
      const layers = [
        {
          x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
          y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
          radius: 400 + Math.sin(time * 0.7) * 100,
          colors: [
            `rgba(59, 130, 246, ${0.15 + Math.sin(time * 0.9) * 0.1})`, // Deep blue
            `rgba(99, 102, 241, ${0.12 + Math.cos(time * 0.8) * 0.08})`, // Indigo
            "rgba(59, 130, 246, 0)",
          ],
        },
        {
          x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
          y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
          radius: 350 + Math.cos(time * 0.6) * 80,
          colors: [
            `rgba(20, 184, 166, ${0.18 + Math.cos(time * 1.1) * 0.12})`, // Teal
            `rgba(59, 130, 246, ${0.1 + Math.sin(time * 0.9) * 0.08})`, // Blue
            "rgba(20, 184, 166, 0)",
          ],
        },
        {
          x: canvas.width * 0.5 + Math.sin(time * 0.5) * 250,
          y: canvas.height * 0.3 + Math.cos(time * 1.2) * 100,
          radius: 500 + Math.sin(time * 0.8) * 120,
          colors: [
            `rgba(147, 51, 234, ${0.12 + Math.sin(time * 0.7) * 0.08})`, // Purple
            `rgba(99, 102, 241, ${0.08 + Math.cos(time * 1.0) * 0.06})`, // Indigo
            "rgba(147, 51, 234, 0)",
          ],
        },
        {
          x: canvas.width * 0.2 + Math.cos(time * 1.1) * 160,
          y: canvas.height * 0.8 + Math.sin(time * 0.8) * 140,
          radius: 300 + Math.cos(time * 0.9) * 70,
          colors: [
            `rgba(6, 182, 212, ${0.16 + Math.cos(time * 0.6) * 0.1})`, // Cyan
            `rgba(20, 184, 166, ${0.1 + Math.sin(time * 0.8) * 0.08})`, // Teal
            "rgba(6, 182, 212, 0)",
          ],
        },
      ]

      // Draw each aurora layer with blend mode
      ctx.globalCompositeOperation = "screen"

      layers.forEach((layer) => {
        const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Add subtle flowing waves
      ctx.globalCompositeOperation = "overlay"
      for (let i = 0; i < 3; i++) {
        const waveY = canvas.height * (0.3 + i * 0.2) + Math.sin(time * (0.8 + i * 0.2)) * 50
        const gradient = ctx.createLinearGradient(0, waveY - 100, 0, waveY + 100)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0)")
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${0.08 + Math.sin(time + i) * 0.04})`)
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, waveY - 100, canvas.width, 200)
      }

      ctx.globalCompositeOperation = "source-over"
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "linear-gradient(135deg, #0c1838 0%, #1a1f3a 50%, #0f172a 100%)" }}
    />
  )
}
