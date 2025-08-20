"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  symbol: string
  speed: number
  rotation: number
  rotationSpeed: number
}

interface AuraWave {
  id: number
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [auraWaves, setAuraWaves] = useState<AuraWave[]>([])

  useEffect(() => {
    const symbols = ["🕉️", "🪷", "☯️", "🧘‍♀️", "✨", "🌸", "🔮", "🌙", "⭐", "💫"]
    const newParticles: Particle[] = []

    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 25 + 8,
        opacity: Math.random() * 0.4 + 0.1,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        speed: Math.random() * 1.5 + 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      })
    }

    const newAuraWaves: AuraWave[] = []
    for (let i = 0; i < 8; i++) {
      newAuraWaves.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        radius: Math.random() * 200 + 100,
        opacity: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 0.5 + 0.2,
      })
    }

    setParticles(newParticles)
    setAuraWaves(newAuraWaves)

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y <= -10 ? 110 : particle.y - particle.speed * 0.05,
          x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.02,
          opacity: Math.sin(Date.now() * 0.002 + particle.id) * 0.2 + 0.3,
          rotation: particle.rotation + particle.rotationSpeed,
        })),
      )

      setAuraWaves((prev) =>
        prev.map((wave) => ({
          ...wave,
          radius: wave.radius + wave.speed,
          opacity: wave.opacity * 0.995,
          ...(wave.radius > 400 && {
            radius: 50,
            opacity: Math.random() * 0.1 + 0.05,
            x: Math.random() * 100,
            y: Math.random() * 100,
          }),
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {auraWaves.map((wave) => (
        <div
          key={`wave-${wave.id}`}
          className="absolute rounded-full border border-primary/20"
          style={{
            left: `${wave.x}%`,
            top: `${wave.y}%`,
            width: `${wave.radius}px`,
            height: `${wave.radius}px`,
            opacity: wave.opacity,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, rgba(139, 92, 246, ${wave.opacity * 0.5}) 0%, transparent 70%)`,
          }}
        />
      ))}

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-1000 ease-linear floating-enhanced"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `rotate(${particle.rotation}deg)`,
            animationDelay: `${particle.id * 0.3}s`,
            filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))",
          }}
        >
          {particle.symbol}
        </div>
      ))}
    </div>
  )
}
