// // // // // // // // "use client"

// // // // // // // // import { useEffect, useRef } from "react"

// // // // // // // // export function AuroraBackground() {
// // // // // // // //   const canvasRef = useRef<HTMLCanvasElement>(null)

// // // // // // // //   useEffect(() => {
// // // // // // // //     const canvas = canvasRef.current
// // // // // // // //     if (!canvas) return

// // // // // // // //     const ctx = canvas.getContext("2d")
// // // // // // // //     if (!ctx) return

// // // // // // // //     let animationId: number
// // // // // // // //     let time = 0

// // // // // // // //     const resize = () => {
// // // // // // // //       canvas.width = window.innerWidth
// // // // // // // //       canvas.height = window.innerHeight
// // // // // // // //     }

// // // // // // // //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// // // // // // // //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// // // // // // // //       colors.forEach((color, index) => {
// // // // // // // //         gradient.addColorStop(index / (colors.length - 1), color)
// // // // // // // //       })
// // // // // // // //       return gradient
// // // // // // // //     }

// // // // // // // //     const animate = () => {
// // // // // // // //       time += 0.005

// // // // // // // //       // Clear canvas with dark background
// // // // // // // //       ctx.fillStyle = "rgba(8, 12, 35, 1)"
// // // // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// // // // // // // //       // Create multiple flowing aurora layers
// // // // // // // //       const layers = [
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
// // // // // // // //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
// // // // // // // //           radius: 400 + Math.sin(time * 0.7) * 100,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(59, 130, 246, ${0.15 + Math.sin(time * 0.9) * 0.1})`, // Deep blue
// // // // // // // //             `rgba(99, 102, 241, ${0.12 + Math.cos(time * 0.8) * 0.08})`, // Indigo
// // // // // // // //             "rgba(59, 130, 246, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
// // // // // // // //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
// // // // // // // //           radius: 350 + Math.cos(time * 0.6) * 80,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(20, 184, 166, ${0.18 + Math.cos(time * 1.1) * 0.12})`, // Teal
// // // // // // // //             `rgba(59, 130, 246, ${0.1 + Math.sin(time * 0.9) * 0.08})`, // Blue
// // // // // // // //             "rgba(20, 184, 166, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.5 + Math.sin(time * 0.5) * 250,
// // // // // // // //           y: canvas.height * 0.3 + Math.cos(time * 1.2) * 100,
// // // // // // // //           radius: 500 + Math.sin(time * 0.8) * 120,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(147, 51, 234, ${0.12 + Math.sin(time * 0.7) * 0.08})`, // Purple
// // // // // // // //             `rgba(99, 102, 241, ${0.08 + Math.cos(time * 1.0) * 0.06})`, // Indigo
// // // // // // // //             "rgba(147, 51, 234, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.2 + Math.cos(time * 1.1) * 160,
// // // // // // // //           y: canvas.height * 0.8 + Math.sin(time * 0.8) * 140,
// // // // // // // //           radius: 300 + Math.cos(time * 0.9) * 70,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(6, 182, 212, ${0.16 + Math.cos(time * 0.6) * 0.1})`, // Cyan
// // // // // // // //             `rgba(20, 184, 166, ${0.1 + Math.sin(time * 0.8) * 0.08})`, // Teal
// // // // // // // //             "rgba(6, 182, 212, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //       ]

// // // // // // // //       // Draw each aurora layer with blend mode
// // // // // // // //       ctx.globalCompositeOperation = "screen"

// // // // // // // //       layers.forEach((layer) => {
// // // // // // // //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// // // // // // // //         ctx.fillStyle = gradient
// // // // // // // //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// // // // // // // //       })

// // // // // // // //       // Add subtle flowing waves
// // // // // // // //       ctx.globalCompositeOperation = "overlay"
// // // // // // // //       for (let i = 0; i < 3; i++) {
// // // // // // // //         const waveY = canvas.height * (0.3 + i * 0.2) + Math.sin(time * (0.8 + i * 0.2)) * 50
// // // // // // // //         const gradient = ctx.createLinearGradient(0, waveY - 100, 0, waveY + 100)
// // // // // // // //         gradient.addColorStop(0, "rgba(59, 130, 246, 0)")
// // // // // // // //         gradient.addColorStop(0.5, `rgba(99, 102, 241, ${0.08 + Math.sin(time + i) * 0.04})`)
// // // // // // // //         gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

// // // // // // // //         ctx.fillStyle = gradient
// // // // // // // //         ctx.fillRect(0, waveY - 100, canvas.width, 200)
// // // // // // // //       }

// // // // // // // //       ctx.globalCompositeOperation = "source-over"
// // // // // // // //       animationId = requestAnimationFrame(animate)
// // // // // // // //     }

// // // // // // // //     resize()
// // // // // // // //     animate()

// // // // // // // //     window.addEventListener("resize", resize)

// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener("resize", resize)
// // // // // // // //       cancelAnimationFrame(animationId)
// // // // // // // //     }
// // // // // // // //   }, [])

// // // // // // // //   return (
// // // // // // // //     <canvas
// // // // // // // //       ref={canvasRef}
// // // // // // // //       className="fixed inset-0 pointer-events-none z-0"
// // // // // // // //       style={{ background: "linear-gradient(135deg, #0c1838 0%, #1a1f3a 50%, #0f172a 100%)" }}
// // // // // // // //     />
// // // // // // // //   )
// // // // // // // // }
// // // // // // // "use client"

// // // // // // // import { useEffect, useRef } from "react"

// // // // // // // export function AuroraBackground() {
// // // // // // //   const canvasRef = useRef<HTMLCanvasElement>(null)

// // // // // // //   useEffect(() => {
// // // // // // //     const canvas = canvasRef.current
// // // // // // //     if (!canvas) return

// // // // // // //     const ctx = canvas.getContext("2d")
// // // // // // //     if (!ctx) return

// // // // // // //     let animationId: number
// // // // // // //     let time = 0

// // // // // // //     const resize = () => {
// // // // // // //       canvas.width = window.innerWidth
// // // // // // //       canvas.height = window.innerHeight
// // // // // // //     }

// // // // // // // //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// // // // // // // //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// // // // // // // //       colors.forEach((color, index) => {
// // // // // // // //         gradient.addColorStop(index / (colors.length - 1), color)
// // // // // // // //       })
// // // // // // // //       return gradient
// // // // // // // //     }

// // // // // // // //     const animate = () => {
// // // // // // // //       time += 0.005

// // // // // // // //       // Warm dark background
// // // // // // // //       ctx.fillStyle = "rgba(28, 18, 25, 1)"
// // // // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// // // // // // // //       // Pinkish-beige aurora layers
// // // // // // // //       const layers = [
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
// // // // // // // //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
// // // // // // // //           radius: 400 + Math.sin(time * 0.7) * 100,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(236, 72, 153, ${0.15 + Math.sin(time * 0.9) * 0.1})`, // Rose pink
// // // // // // // //             `rgba(244, 114, 182, ${0.12 + Math.cos(time * 0.8) * 0.08})`, // Light pink
// // // // // // // //             "rgba(236, 72, 153, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
// // // // // // // //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
// // // // // // // //           radius: 350 + Math.cos(time * 0.6) * 80,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(253, 164, 175, ${0.18 + Math.cos(time * 1.1) * 0.12})`, // Soft peach
// // // // // // // //             `rgba(251, 191, 183, ${0.1 + Math.sin(time * 0.9) * 0.08})`, // Warm beige
// // // // // // // //             "rgba(253, 164, 175, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.5 + Math.sin(time * 0.5) * 250,
// // // // // // // //           y: canvas.height * 0.3 + Math.cos(time * 1.2) * 100,
// // // // // // // //           radius: 500 + Math.sin(time * 0.8) * 120,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(244, 114, 182, ${0.12 + Math.sin(time * 0.7) * 0.08})`, // Pink glow
// // // // // // // //             `rgba(253, 186, 116, ${0.08 + Math.cos(time * 1.0) * 0.06})`, // Soft amber
// // // // // // // //             "rgba(244, 114, 182, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           x: canvas.width * 0.2 + Math.cos(time * 1.1) * 160,
// // // // // // // //           y: canvas.height * 0.8 + Math.sin(time * 0.8) * 140,
// // // // // // // //           radius: 300 + Math.cos(time * 0.9) * 70,
// // // // // // // //           colors: [
// // // // // // // //             `rgba(251, 191, 183, ${0.16 + Math.cos(time * 0.6) * 0.1})`, // Beige
// // // // // // // //             `rgba(253, 164, 175, ${0.1 + Math.sin(time * 0.8) * 0.08})`, // Peachy pink
// // // // // // // //             "rgba(251, 191, 183, 0)",
// // // // // // // //           ],
// // // // // // // //         },
// // // // // // // //       ]

// // // // // // // //       ctx.globalCompositeOperation = "screen"

// // // // // // // //       layers.forEach((layer) => {
// // // // // // // //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// // // // // // // //         ctx.fillStyle = gradient
// // // // // // // //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// // // // // // // //       })

// // // // // // // //       // Subtle warm flowing waves
// // // // // // // //       ctx.globalCompositeOperation = "overlay"
// // // // // // // //       for (let i = 0; i < 3; i++) {
// // // // // // // //         const waveY = canvas.height * (0.3 + i * 0.2) + Math.sin(time * (0.8 + i * 0.2)) * 50
// // // // // // // //         const gradient = ctx.createLinearGradient(0, waveY - 100, 0, waveY + 100)
// // // // // // // //         gradient.addColorStop(0, "rgba(236, 72, 153, 0)")
// // // // // // // //         gradient.addColorStop(0.5, `rgba(244, 114, 182, ${0.08 + Math.sin(time + i) * 0.04})`)
// // // // // // // //         gradient.addColorStop(1, "rgba(236, 72, 153, 0)")

// // // // // // // //         ctx.fillStyle = gradient
// // // // // // // //         ctx.fillRect(0, waveY - 100, canvas.width, 200)
// // // // // // // //       }

// // // // // // // //       ctx.globalCompositeOperation = "source-over"
// // // // // // // //       animationId = requestAnimationFrame(animate)
// // // // // // // //     }

// // // // // // // //     resize()
// // // // // // // //     animate()

// // // // // // // //     window.addEventListener("resize", resize)

// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener("resize", resize)
// // // // // // // //       cancelAnimationFrame(animationId)
// // // // // // // //     }
// // // // // // // //   }, [])

// // // // // // // //   return (
// // // // // // // //     <canvas
// // // // // // // //       ref={canvasRef}
// // // // // // // //       className="fixed inset-0 pointer-events-none z-0"
// // // // // // // //       style={{
// // // // // // // //         background: "linear-gradient(135deg, #1e0f12 0%, #2a1a1c 50%, #1a0f12 100%)",
// // // // // // // //       }}
// // // // // // // //     />
// // // // // // // //   )
// // // // // // // // }
// // // // // // // "use client"

// // // // // // // import { useEffect, useRef } from "react"

// // // // // // // export function AuroraBackground() {
// // // // // // //   const canvasRef = useRef<HTMLCanvasElement>(null)

// // // // // // //   useEffect(() => {
// // // // // // //     const canvas = canvasRef.current
// // // // // // //     if (!canvas) return

// // // // // // //     const ctx = canvas.getContext("2d")
// // // // // // //     if (!ctx) return

// // // // // // //     let animationId: number
// // // // // // //     let time = 0

// // // // // // //     const resize = () => {
// // // // // // //       canvas.width = window.innerWidth
// // // // // // //       canvas.height = window.innerHeight
// // // // // // //     }

// // // // // // //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// // // // // // //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// // // // // // //       colors.forEach((color, index) => {
// // // // // // //         gradient.addColorStop(index / (colors.length - 1), color)
// // // // // // //       })
// // // // // // //       return gradient
// // // // // // //     }

// // // // // // //     const animate = () => {
// // // // // // //       time += 0.005

// // // // // // //       // Dark background with subtle warmth
// // // // // // //       ctx.fillStyle = "rgba(15, 10, 20, 1)"
// // // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// // // // // // //       // Bright pink + beige aurora layers
// // // // // // //       const layers = [
// // // // // // //         {
// // // // // // //           x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
// // // // // // //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
// // // // // // //           radius: 400 + Math.sin(time * 0.7) * 100,
// // // // // // //           colors: [
// // // // // // //             `rgba(236, 72, 153, ${0.18 + Math.sin(time * 0.9) * 0.1})`, // Bright pink
// // // // // // //             `rgba(244, 114, 182, ${0.14 + Math.cos(time * 0.8) * 0.08})`, // Soft rose
// // // // // // //             "rgba(236, 72, 153, 0)",
// // // // // // //           ],
// // // // // // //         },
// // // // // // //         {
// // // // // // //           x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
// // // // // // //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
// // // // // // //           radius: 350 + Math.cos(time * 0.6) * 80,
// // // // // // //           colors: [
// // // // // // //             `rgba(253, 224, 170, ${0.2 + Math.cos(time * 1.1) * 0.12})`, // Warm beige-gold
// // // // // // //             `rgba(251, 191, 183, ${0.12 + Math.sin(time * 0.9) * 0.08})`, // Peach beige
// // // // // // //             "rgba(253, 224, 170, 0)",
// // // // // // //           ],
// // // // // // //         },
// // // // // // //         {
// // // // // // //           x: canvas.width * 0.5 + Math.sin(time * 0.5) * 250,
// // // // // // //           y: canvas.height * 0.3 + Math.cos(time * 1.2) * 100,
// // // // // // //           radius: 500 + Math.sin(time * 0.8) * 120,
// // // // // // //           colors: [
// // // // // // //             `rgba(236, 72, 153, ${0.15 + Math.sin(time * 0.7) * 0.08})`, // Fuchsia pink
// // // // // // //             `rgba(253, 224, 170, ${0.1 + Math.cos(time * 1.0) * 0.06})`, // Beige-golden glow
// // // // // // //             "rgba(236, 72, 153, 0)",
// // // // // // //           ],
// // // // // // //         },
// // // // // // //         {
// // // // // // //           x: canvas.width * 0.2 + Math.cos(time * 1.1) * 160,
// // // // // // //           y: canvas.height * 0.8 + Math.sin(time * 0.8) * 140,
// // // // // // //           radius: 300 + Math.cos(time * 0.9) * 70,
// // // // // // //           colors: [
// // // // // // //             `rgba(244, 114, 182, ${0.16 + Math.cos(time * 0.6) * 0.1})`, // Rose-pink
// // // // // // //             `rgba(251, 191, 183, ${0.1 + Math.sin(time * 0.8) * 0.08})`, // Soft beige
// // // // // // //             "rgba(244, 114, 182, 0)",
// // // // // // //           ],
// // // // // // //         },
// // // // // // //       ]

// // // // // // //       ctx.globalCompositeOperation = "screen"

// // // // // // //       layers.forEach((layer) => {
// // // // // // //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// // // // // // //         ctx.fillStyle = gradient
// // // // // // //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// // // // // // //       })

// // // // // // //       // Flowing waves in pinkish beige tones
// // // // // // //       ctx.globalCompositeOperation = "overlay"
// // // // // // //       for (let i = 0; i < 3; i++) {
// // // // // // //         const waveY = canvas.height * (0.3 + i * 0.2) + Math.sin(time * (0.8 + i * 0.2)) * 50
// // // // // // //         const gradient = ctx.createLinearGradient(0, waveY - 100, 0, waveY + 100)
// // // // // // //         gradient.addColorStop(0, "rgba(236, 72, 153, 0)")
// // // // // // //         gradient.addColorStop(0.5, `rgba(253, 224, 170, ${0.1 + Math.sin(time + i) * 0.05})`)
// // // // // // //         gradient.addColorStop(1, "rgba(236, 72, 153, 0)")

// // // // // // //         ctx.fillStyle = gradient
// // // // // // //         ctx.fillRect(0, waveY - 100, canvas.width, 200)
// // // // // // //       }

// // // // // // //       ctx.globalCompositeOperation = "source-over"
// // // // // // //       animationId = requestAnimationFrame(animate)
// // // // // // //     }

// // // // // // //     resize()
// // // // // // //     animate()

// // // // // // //     window.addEventListener("resize", resize)

// // // // // // //     return () => {
// // // // // // //       window.removeEventListener("resize", resize)
// // // // // // //       cancelAnimationFrame(animationId)
// // // // // // //     }
// // // // // // //   }, [])

// // // // // // //   return (
// // // // // // //     <canvas
// // // // // // //       ref={canvasRef}
// // // // // // //       className="fixed inset-0 pointer-events-none z-0"
// // // // // // //       style={{
// // // // // // //         background: "linear-gradient(135deg, #120a14 0%, #1a0f12 50%, #0d0810 100%)",
// // // // // // //       }}
// // // // // // //     />
// // // // // // //   )
// // // // // // // }

// // // // // // "use client"

// // // // // // import { useEffect, useRef } from "react"

// // // // // // export function AuroraBackground() {
// // // // // //   const canvasRef = useRef<HTMLCanvasElement>(null)

// // // // // //   useEffect(() => {
// // // // // //     const canvas = canvasRef.current
// // // // // //     if (!canvas) return

// // // // // //     const ctx = canvas.getContext("2d")
// // // // // //     if (!ctx) return

// // // // // //     let animationId: number
// // // // // //     let time = 0

// // // // // //     const resize = () => {
// // // // // //       canvas.width = window.innerWidth
// // // // // //       canvas.height = window.innerHeight
// // // // // //     }

// // // // // //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// // // // // //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// // // // // //       colors.forEach((color, index) => {
// // // // // //         gradient.addColorStop(index / (colors.length - 1), color)
// // // // // //       })
// // // // // //       return gradient
// // // // // //     }

// // // // // //     const animate = () => {
// // // // // //       time += 0.005

// // // // // //       // Light warm background
// // // // // //       ctx.fillStyle = "rgba(250, 245, 240, 1)" // soft beige-white
// // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// // // // // //       // Bright pink + beige aurora layers
// // // // // //       const layers = [
// // // // // //         {
// // // // // //           x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
// // // // // //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
// // // // // //           radius: 400 + Math.sin(time * 0.7) * 100,
// // // // // //           colors: [
// // // // // //             `rgba(236, 72, 153, ${0.2 + Math.sin(time * 0.9) * 0.1})`,
// // // // // //             `rgba(244, 114, 182, ${0.15 + Math.cos(time * 0.8) * 0.08})`,
// // // // // //             "rgba(236, 72, 153, 0)",
// // // // // //           ],
// // // // // //         },
// // // // // //         {
// // // // // //           x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
// // // // // //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
// // // // // //           radius: 350 + Math.cos(time * 0.6) * 80,
// // // // // //           colors: [
// // // // // //             `rgba(253, 224, 170, ${0.22 + Math.cos(time * 1.1) * 0.12})`,
// // // // // //             `rgba(251, 191, 183, ${0.14 + Math.sin(time * 0.9) * 0.08})`,
// // // // // //             "rgba(253, 224, 170, 0)",
// // // // // //           ],
// // // // // //         },
// // // // // //         {
// // // // // //           x: canvas.width * 0.5 + Math.sin(time * 0.5) * 250,
// // // // // //           y: canvas.height * 0.3 + Math.cos(time * 1.2) * 100,
// // // // // //           radius: 500 + Math.sin(time * 0.8) * 120,
// // // // // //           colors: [
// // // // // //             `rgba(236, 72, 153, ${0.18 + Math.sin(time * 0.7) * 0.08})`,
// // // // // //             `rgba(253, 224, 170, ${0.12 + Math.cos(time * 1.0) * 0.06})`,
// // // // // //             "rgba(236, 72, 153, 0)",
// // // // // //           ],
// // // // // //         },
// // // // // //         {
// // // // // //           x: canvas.width * 0.2 + Math.cos(time * 1.1) * 160,
// // // // // //           y: canvas.height * 0.8 + Math.sin(time * 0.8) * 140,
// // // // // //           radius: 300 + Math.cos(time * 0.9) * 70,
// // // // // //           colors: [
// // // // // //             `rgba(244, 114, 182, ${0.18 + Math.cos(time * 0.6) * 0.1})`,
// // // // // //             `rgba(251, 191, 183, ${0.12 + Math.sin(time * 0.8) * 0.08})`,
// // // // // //             "rgba(244, 114, 182, 0)",
// // // // // //           ],
// // // // // //         },
// // // // // //       ]

// // // // // //       ctx.globalCompositeOperation = "screen"

// // // // // //       layers.forEach((layer) => {
// // // // // //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// // // // // //         ctx.fillStyle = gradient
// // // // // //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// // // // // //       })

// // // // // //       // Flowing waves in pinkish beige tones
// // // // // //       ctx.globalCompositeOperation = "soft-light"
// // // // // //       for (let i = 0; i < 3; i++) {
// // // // // //         const waveY = canvas.height * (0.3 + i * 0.2) + Math.sin(time * (0.8 + i * 0.2)) * 50
// // // // // //         const gradient = ctx.createLinearGradient(0, waveY - 100, 0, waveY + 100)
// // // // // //         gradient.addColorStop(0, "rgba(236, 72, 153, 0)")
// // // // // //         gradient.addColorStop(0.5, `rgba(253, 224, 170, ${0.12 + Math.sin(time + i) * 0.05})`)
// // // // // //         gradient.addColorStop(1, "rgba(236, 72, 153, 0)")

// // // // // //         ctx.fillStyle = gradient
// // // // // //         ctx.fillRect(0, waveY - 100, canvas.width, 200)
// // // // // //       }

// // // // // //       ctx.globalCompositeOperation = "source-over"
// // // // // //       animationId = requestAnimationFrame(animate)
// // // // // //     }

// // // // // //     resize()
// // // // // //     animate()

// // // // // //     window.addEventListener("resize", resize)

// // // // // //     return () => {
// // // // // //       window.removeEventListener("resize", resize)
// // // // // //       cancelAnimationFrame(animationId)
// // // // // //     }
// // // // // //   }, [])

// // // // // //   return (
// // // // // //     <canvas
// // // // // //       ref={canvasRef}
// // // // // //       className="fixed inset-0 pointer-events-none z-0"
// // // // // //       style={{
// // // // // //         background: "linear-gradient(135deg, #fdfcf9 0%, #faf4ef 50%, #f9f5f1 100%)",
// // // // // //       }}
// // // // // //     />
// // // // // //   )
// // // // // // }
// // // // // "use client"

// // // // // import { useEffect, useRef } from "react"

// // // // // export function AuroraBackground() {
// // // // //   const canvasRef = useRef<HTMLCanvasElement>(null)

// // // // //   useEffect(() => {
// // // // //     const canvas = canvasRef.current
// // // // //     if (!canvas) return
// // // // //     const ctx = canvas.getContext("2d")
// // // // //     if (!ctx) return

// // // // //     let animationId: number
// // // // //     let time = 0

// // // // //     const resize = () => {
// // // // //       canvas.width = window.innerWidth
// // // // //       canvas.height = window.innerHeight
// // // // //     }

// // // // //     // Generate amoeba blobs
// // // // //     const blobs = Array.from({ length: 5 }).map((_, i) => ({
// // // // //       x: Math.random() * window.innerWidth,
// // // // //       y: Math.random() * window.innerHeight,
// // // // //       radius: 100 + Math.random() * 80,
// // // // //       speedX: (Math.random() - 0.5) * 0.6,
// // // // //       speedY: (Math.random() - 0.5) * 0.6,
// // // // //       wobble: Math.random() * 2,
// // // // //     }))

// // // // //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// // // // //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// // // // //       colors.forEach((color, index) => {
// // // // //         gradient.addColorStop(index / (colors.length - 1), color)
// // // // //       })
// // // // //       return gradient
// // // // //     }

// // // // //     const drawBlob = (blob: any, t: number) => {
// // // // //       ctx.save()
// // // // //       ctx.translate(blob.x, blob.y)

// // // // //       ctx.beginPath()
// // // // //       for (let i = 0; i < Math.PI * 2; i += Math.PI / 24) {
// // // // //         const wobble =
// // // // //           Math.sin(i * 3 + t * 2 + blob.wobble) * 15 + Math.cos(i * 2 - t) * 10
// // // // //         const r = blob.radius + wobble
// // // // //         const x = Math.cos(i) * r
// // // // //         const y = Math.sin(i) * r
// // // // //         if (i === 0) ctx.moveTo(x, y)
// // // // //         else ctx.lineTo(x, y)
// // // // //       }
// // // // //       ctx.closePath()

// // // // //       // Gradient inside blob
// // // // //       const gradient = ctx.createRadialGradient(0, 0, blob.radius * 0.3, 0, 0, blob.radius)
// // // // //       gradient.addColorStop(0, "rgba(236, 72, 153, 0.35)") // bright pink
// // // // //       gradient.addColorStop(0.5, "rgba(244, 114, 182, 0.2)") // light pink
// // // // //       gradient.addColorStop(1, "rgba(253, 224, 170, 0)") // beige fade

// // // // //       ctx.fillStyle = gradient
// // // // //       ctx.fill()
// // // // //       ctx.restore()
// // // // //     }

// // // // //     const animate = () => {
// // // // //       time += 0.005

// // // // //       // Background
// // // // //       ctx.fillStyle = "rgba(250, 245, 240, 1)"
// // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// // // // //       // Aurora layers (unchanged from your version)
// // // // //       const layers = [
// // // // //         {
// // // // //           x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
// // // // //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
// // // // //           radius: 400 + Math.sin(time * 0.7) * 100,
// // // // //           colors: [
// // // // //             `rgba(236, 72, 153, ${0.2 + Math.sin(time * 0.9) * 0.1})`,
// // // // //             `rgba(244, 114, 182, ${0.15 + Math.cos(time * 0.8) * 0.08})`,
// // // // //             "rgba(236, 72, 153, 0)",
// // // // //           ],
// // // // //         },
// // // // //         {
// // // // //           x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
// // // // //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
// // // // //           radius: 350 + Math.cos(time * 0.6) * 80,
// // // // //           colors: [
// // // // //             `rgba(253, 224, 170, ${0.22 + Math.cos(time * 1.1) * 0.12})`,
// // // // //             `rgba(251, 191, 183, ${0.14 + Math.sin(time * 0.9) * 0.08})`,
// // // // //             "rgba(253, 224, 170, 0)",
// // // // //           ],
// // // // //         },
// // // // //       ]

// // // // //       ctx.globalCompositeOperation = "screen"
// // // // //       layers.forEach((layer) => {
// // // // //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// // // // //         ctx.fillStyle = gradient
// // // // //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// // // // //       })

// // // // //       // Draw amoeba blobs
// // // // //       ctx.globalCompositeOperation = "lighter"
// // // // //       blobs.forEach((blob) => {
// // // // //         blob.x += blob.speedX
// // // // //         blob.y += blob.speedY

// // // // //         if (blob.x < -200) blob.x = canvas.width + 200
// // // // //         if (blob.x > canvas.width + 200) blob.x = -200
// // // // //         if (blob.y < -200) blob.y = canvas.height + 200
// // // // //         if (blob.y > canvas.height + 200) blob.y = -200

// // // // //         drawBlob(blob, time)
// // // // //       })

// // // // //       ctx.globalCompositeOperation = "source-over"
// // // // //       animationId = requestAnimationFrame(animate)
// // // // //     }

// // // // //     resize()
// // // // //     animate()
// // // // //     window.addEventListener("resize", resize)

// // // // //     return () => {
// // // // //       window.removeEventListener("resize", resize)
// // // // //       cancelAnimationFrame(animationId)
// // // // //     }
// // // // //   }, [])

// // // // //   return (
// // // // //     <canvas
// // // // //       ref={canvasRef}
// // // // //       className="fixed inset-0 pointer-events-none z-0"
// // // // //       style={{
// // // // //         background: "linear-gradient(135deg, #fdfcf9 0%, #faf4ef 50%, #f9f5f1 100%)",
// // // // //       }}
// // // // //     />
// // // // //   )
// // // // // }
// // // // "use client"

// // // // import { useEffect, useRef } from "react"

// // // // export function AuroraBackground() {
// // // //   const canvasRef = useRef<HTMLCanvasElement>(null)

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current
// // // //     if (!canvas) return

// // // //     const ctx = canvas.getContext("2d")
// // // //     if (!ctx) return

// // // //     let animationId: number
// // // //     let time = 0

// // // //     const resize = () => {
// // // //       canvas.width = window.innerWidth
// // // //       canvas.height = window.innerHeight
// // // //     }

// // // //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// // // //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// // // //       colors.forEach((color, index) => {
// // // //         gradient.addColorStop(index / (colors.length - 1), color)
// // // //       })
// // // //       return gradient
// // // //     }

// // // //     const animate = () => {
// // // //       time += 0.005
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height)

// // // //       // Light warm base background
// // // //       ctx.fillStyle = "rgba(250, 245, 240, 1)"
// // // //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// // // //       // Aurora layers (background flow)
// // // //       const layers = [
// // // //         {
// // // //           x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
// // // //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
// // // //           radius: 400 + Math.sin(time * 0.7) * 100,
// // // //           colors: [
// // // //             `rgba(236, 72, 153, ${0.3})`,
// // // //             `rgba(244, 114, 182, ${0.2})`,
// // // //             "rgba(236, 72, 153, 0)",
// // // //           ],
// // // //         },
// // // //         {
// // // //           x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
// // // //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
// // // //           radius: 350 + Math.cos(time * 0.6) * 80,
// // // //           colors: [
// // // //             `rgba(253, 224, 170, 0.25)`,
// // // //             `rgba(251, 191, 183, 0.18)`,
// // // //             "rgba(253, 224, 170, 0)",
// // // //           ],
// // // //         },
// // // //       ]

// // // //       ctx.globalCompositeOperation = "screen"
// // // //       layers.forEach((layer) => {
// // // //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// // // //         ctx.fillStyle = gradient
// // // //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// // // //       })

// // // //       // ====== Main Amoeba Bubble ======
// // // //       ctx.globalCompositeOperation = "lighter"

// // // //       const bubbleX = canvas.width * 0.5 + Math.sin(time * 0.6) * 100
// // // //       const bubbleY = canvas.height * 0.5 + Math.cos(time * 0.8) * 80
// // // //       const bubbleRadius = 350 + Math.sin(time * 1.2) * 40

// // // //       const bubbleGradient = ctx.createRadialGradient(bubbleX, bubbleY, 50, bubbleX, bubbleY, bubbleRadius)
// // // //       bubbleGradient.addColorStop(0, "rgba(236, 72, 153, 0.9)") // vivid hot pink
// // // //       bubbleGradient.addColorStop(0.4, "rgba(244, 114, 182, 0.6)") // bright rose
// // // //       bubbleGradient.addColorStop(1, "rgba(253, 224, 170, 0)") // soft beige fade

// // // //       ctx.fillStyle = bubbleGradient
// // // //       ctx.beginPath()
// // // //       ctx.arc(bubbleX, bubbleY, bubbleRadius, 0, Math.PI * 2)
// // // //       ctx.fill()

// // // //       // Add soft outer glow
// // // //       ctx.shadowColor = "rgba(236, 72, 153, 0.5)"
// // // //       ctx.shadowBlur = 120
// // // //       ctx.fill()

// // // //       ctx.shadowBlur = 0 // reset

// // // //       ctx.globalCompositeOperation = "source-over"
// // // //       animationId = requestAnimationFrame(animate)
// // // //     }

// // // //     resize()
// // // //     animate()
// // // //     window.addEventListener("resize", resize)

// // // //     return () => {
// // // //       window.removeEventListener("resize", resize)
// // // //       cancelAnimationFrame(animationId)
// // // //     }
// // // //   }, [])

// // // //   return (
// // // //     <canvas
// // // //       ref={canvasRef}
// // // //       className="fixed inset-0 pointer-events-none z-0"
// // // //       style={{
// // // //         background: "linear-gradient(135deg, #fff8f5 0%, #fdf3f8 50%, #fdf2f7 100%)",
// // // //       }}
// // // //     />
// // // //   )
// // // // }
// // // "use client"

// // // import { useEffect, useRef } from "react"

// // // export function AuroraBackground() {
// // //   const canvasRef = useRef<HTMLCanvasElement>(null)

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current
// // //     if (!canvas) return

// // //     const ctx = canvas.getContext("2d")
// // //     if (!ctx) return

// // //     let animationId: number
// // //     let time = 0

// // //     const resize = () => {
// // //       canvas.width = window.innerWidth
// // //       canvas.height = window.innerHeight
// // //     }

// // //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// // //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// // //       colors.forEach((color, index) => {
// // //         gradient.addColorStop(index / (colors.length - 1), color)
// // //       })
// // //       return gradient
// // //     }

// // //     const animate = () => {
// // //       time += 0.005
// // //       ctx.clearRect(0, 0, canvas.width, canvas.height)

// // //       // Dark background (inverted)
// // //       ctx.fillStyle = "rgba(15, 10, 20, 1)" // deep purple-black
// // //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// // //       // Aurora layers (subtle background flow)
// // //       const layers = [
// // //         {
// // //           x: canvas.width * 0.3 + Math.sin(time * 0.8) * 200,
// // //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 150,
// // //           radius: 400 + Math.sin(time * 0.7) * 100,
// // //           colors: [
// // //             `rgba(236, 72, 153, ${0.12})`, // faint pink haze
// // //             `rgba(244, 114, 182, ${0.08})`,
// // //             "rgba(236, 72, 153, 0)",
// // //           ],
// // //         },
// // //         {
// // //           x: canvas.width * 0.7 + Math.cos(time * 0.9) * 180,
// // //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 120,
// // //           radius: 350 + Math.cos(time * 0.6) * 80,
// // //           colors: [
// // //             `rgba(253, 224, 170, 0.1)`, // soft beige mist
// // //             `rgba(251, 191, 183, 0.08)`,
// // //             "rgba(253, 224, 170, 0)",
// // //           ],
// // //         },
// // //       ]

// // //       ctx.globalCompositeOperation = "screen"
// // //       layers.forEach((layer) => {
// // //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// // //         ctx.fillStyle = gradient
// // //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// // //       })

// // //       // ====== Main Glowing Bubble ======
// // //       ctx.globalCompositeOperation = "lighter"

// // //       const bubbleX = canvas.width * 0.5 + Math.sin(time * 0.6) * 100
// // //       const bubbleY = canvas.height * 0.5 + Math.cos(time * 0.8) * 80
// // //       const bubbleRadius = 350 + Math.sin(time * 1.2) * 40

// // //       const bubbleGradient = ctx.createRadialGradient(bubbleX, bubbleY, 80, bubbleX, bubbleY, bubbleRadius)
// // //       bubbleGradient.addColorStop(0, "rgba(255, 20, 147, 1)")   // neon deep pink
// // //       bubbleGradient.addColorStop(0.35, "rgba(255, 105, 180, 0.9)") // hot pink
// // //       bubbleGradient.addColorStop(0.7, "rgba(253, 224, 170, 0.6)") // glowing beige edge
// // //       bubbleGradient.addColorStop(1, "rgba(255, 182, 193, 0)") // soft fade out

// // //       ctx.fillStyle = bubbleGradient
// // //       ctx.beginPath()
// // //       ctx.arc(bubbleX, bubbleY, bubbleRadius, 0, Math.PI * 2)
// // //       ctx.fill()

// // //       // Stronger glow effect
// // //       ctx.shadowColor = "rgba(255, 20, 147, 0.8)"
// // //       ctx.shadowBlur = 160
// // //       ctx.fill()

// // //       ctx.shadowBlur = 0 // reset

// // //       ctx.globalCompositeOperation = "source-over"
// // //       animationId = requestAnimationFrame(animate)
// // //     }

// // //     resize()
// // //     animate()
// // //     window.addEventListener("resize", resize)

// // //     return () => {
// // //       window.removeEventListener("resize", resize)
// // //       cancelAnimationFrame(animationId)
// // //     }
// // //   }, [])

// // //   return (
// // //     <canvas
// // //       ref={canvasRef}
// // //       className="fixed inset-0 pointer-events-none z-0"
// // //       style={{
// // //         background: "radial-gradient(circle at center, #0b0b15 0%, #100820 100%)",
// // //       }}
// // //     />
// // //   )
// // // }
// // "use client"

// // import { useEffect, useRef } from "react"

// // export function AuroraBackground() {
// //   const canvasRef = useRef<HTMLCanvasElement>(null)

// //   useEffect(() => {
// //     const canvas = canvasRef.current
// //     if (!canvas) return

// //     const ctx = canvas.getContext("2d")
// //     if (!ctx) return

// //     let animationId: number
// //     let time = 0

// //     const resize = () => {
// //       canvas.width = window.innerWidth
// //       canvas.height = window.innerHeight
// //     }

// //     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
// //       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
// //       colors.forEach((color, index) => {
// //         gradient.addColorStop(index / (colors.length - 1), color)
// //       })
// //       return gradient
// //     }

// //     const animate = () => {
// //       time += 0.005
// //       ctx.clearRect(0, 0, canvas.width, canvas.height)

// //       // Soft whitish background
// //       ctx.fillStyle = "rgba(252, 250, 255, 1)"
// //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// //       // Textural aurora-style blobs
// //       const layers = [
// //         {
// //           x: canvas.width * 0.4 + Math.sin(time * 0.8) * 180,
// //           y: canvas.height * 0.4 + Math.cos(time * 0.6) * 140,
// //           radius: 400 + Math.sin(time * 0.7) * 120,
// //           colors: [
// //             `rgba(255, 182, 193, 0.4)`, // light pink
// //             `rgba(255, 105, 180, 0.25)`, // hot pink
// //             "rgba(255, 182, 193, 0)",
// //           ],
// //         },
// //         {
// //           x: canvas.width * 0.6 + Math.cos(time * 0.9) * 200,
// //           y: canvas.height * 0.6 + Math.sin(time * 0.7) * 160,
// //           radius: 380 + Math.cos(time * 0.6) * 100,
// //           colors: [
// //             `rgba(147, 51, 234, 0.25)`, // purple glow
// //             `rgba(236, 72, 153, 0.3)`, // magenta
// //             "rgba(147, 51, 234, 0)",
// //           ],
// //         },
// //         {
// //           x: canvas.width * 0.5 + Math.sin(time * 1.1) * 160,
// //           y: canvas.height * 0.8 + Math.cos(time * 0.9) * 140,
// //           radius: 300 + Math.sin(time * 0.8) * 90,
// //           colors: [
// //             `rgba(59, 130, 246, 0.25)`, // hint of blue
// //             `rgba(236, 72, 153, 0.2)`,
// //             "rgba(59, 130, 246, 0)",
// //           ],
// //         },
// //       ]

// //       ctx.globalCompositeOperation = "screen"
// //       layers.forEach((layer) => {
// //         const gradient = createGradient(layer.x, layer.y, layer.radius, layer.colors)
// //         ctx.fillStyle = gradient
// //         ctx.fillRect(0, 0, canvas.width, canvas.height)
// //       })

// //       // Main pink bubble
// //       ctx.globalCompositeOperation = "lighter"

// //       const bubbleX = canvas.width * 0.5 + Math.sin(time * 0.6) * 120
// //       const bubbleY = canvas.height * 0.5 + Math.cos(time * 0.8) * 100
// //       const bubbleRadius = 420 + Math.sin(time * 1.3) * 60

// //       const bubbleGradient = ctx.createRadialGradient(bubbleX, bubbleY, 100, bubbleX, bubbleY, bubbleRadius)
// //       bubbleGradient.addColorStop(0, "rgba(255, 105, 180, 0.95)") // hot pink core
// //       bubbleGradient.addColorStop(0.3, "rgba(255, 182, 193, 0.8)") // light pink
// //       bubbleGradient.addColorStop(0.6, "rgba(236, 72, 153, 0.5)") // magenta
// //       bubbleGradient.addColorStop(1, "rgba(255, 255, 255, 0)") // fade out

// //       ctx.fillStyle = bubbleGradient
// //       ctx.beginPath()
// //       ctx.arc(bubbleX, bubbleY, bubbleRadius, 0, Math.PI * 2)
// //       ctx.fill()

// //       ctx.shadowColor = "rgba(236, 72, 153, 0.6)"
// //       ctx.shadowBlur = 120
// //       ctx.fill()

// //       ctx.shadowBlur = 0
// //       ctx.globalCompositeOperation = "source-over"

// //       animationId = requestAnimationFrame(animate)
// //     }

// //     resize()
// //     animate()
// //     window.addEventListener("resize", resize)

// //     return () => {
// //       window.removeEventListener("resize", resize)
// //       cancelAnimationFrame(animationId)
// //     }
// //   }, [])

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="fixed inset-0 pointer-events-none z-0"
// //       style={{
// //         background: "radial-gradient(circle at center, #fdfdfd 0%, #f7f2ff 100%)",
// //       }}
// //     />
// //   )
// // }
// "use client"

// import { useEffect, useRef } from "react"

// export function AuroraBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     let animationId: number
//     let time = 0

//     const resize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     // helper to create gradient
//     const createGradient = (x: number, y: number, radius: number, colors: string[]) => {
//       const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
//       colors.forEach((color, i) => gradient.addColorStop(i / (colors.length - 1), color))
//       return gradient
//     }

//     // noise-like distortion (simple sin waves combined)
//     const blobRadiusAtAngle = (angle: number, baseRadius: number, t: number) => {
//       return (
//         baseRadius +
//         Math.sin(angle * 3 + t * 2) * 40 + // 3 bumps
//         Math.sin(angle * 7 + t * 1.5) * 20 // finer ripples
//       )
//     }

//     const animate = () => {
//       time += 0.01
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       // soft whitish bg
//       ctx.fillStyle = "#fdfdfd"
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       // blob position
//       const blobX = canvas.width / 2
//       const blobY = canvas.height / 2
//       const baseRadius = 300

//       // create gradient fill
//       const gradient = ctx.createRadialGradient(blobX, blobY, 100, blobX, blobY, baseRadius + 150)
//       gradient.addColorStop(0, "rgba(255,105,180,0.95)") // hot pink
//       gradient.addColorStop(0.4, "rgba(236,72,153,0.7)")  // magenta
//       gradient.addColorStop(0.7, "rgba(255,182,193,0.4)") // light pink
//       gradient.addColorStop(1, "rgba(255,255,255,0)")     // fade out

//       ctx.fillStyle = gradient
//       ctx.beginPath()

//       // draw blob with distortion
//       const steps = 100
//       for (let i = 0; i <= steps; i++) {
//         const angle = (i / steps) * Math.PI * 2
//         const radius = blobRadiusAtAngle(angle, baseRadius, time)
//         const x = blobX + Math.cos(angle) * radius
//         const y = blobY + Math.sin(angle) * radius
//         if (i === 0) ctx.moveTo(x, y)
//         else ctx.lineTo(x, y)
//       }
//       ctx.closePath()
//       ctx.fill()

//       animationId = requestAnimationFrame(animate)
//     }

//     resize()
//     animate()
//     window.addEventListener("resize", resize)

//     return () => {
//       window.removeEventListener("resize", resize)
//       cancelAnimationFrame(animationId)
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none z-0"
//       style={{
//         background: "radial-gradient(circle at center, #fdfdfd 0%, #f7f2ff 100%)",
//       }}
//     />
//   )
// }
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

    // noise-like distortion (liquid effect)
    const blobRadiusAtAngle = (angle: number, baseRadius: number, t: number) => {
      return (
        baseRadius +
        Math.sin(angle * 3 + t * 2) * 30 + // smaller ripples
        Math.sin(angle * 6 + t * 1.5) * 15
      )
    }

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // background
      ctx.fillStyle = "#fdfdfd"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // blob position (LEFT side instead of center)
      const blobX = canvas.width * 0.3
      const blobY = canvas.height * 0.5
      const baseRadius = 250

      // softer pink gradient (desaturated)
      const gradient = ctx.createRadialGradient(blobX, blobY, 80, blobX, blobY, baseRadius + 150)
      gradient.addColorStop(0, "rgba(255, 182, 193, 0.8)") // soft light pink
      gradient.addColorStop(0.4, "rgba(236, 135, 193, 0.5)") // pastel pink-magenta
      gradient.addColorStop(0.7, "rgba(255, 200, 220, 0.3)") // very light pink
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")     // fade out

      ctx.fillStyle = gradient
      ctx.beginPath()

      const steps = 100
      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * Math.PI * 2
        const radius = blobRadiusAtAngle(angle, baseRadius, time)
        const x = blobX + Math.cos(angle) * radius
        const y = blobY + Math.sin(angle) * radius
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.fill()

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
      style={{
        background: "radial-gradient(circle at center, #fdfdfd 0%, #f7f6ff 100%)",
      }}
    />
  )
}
