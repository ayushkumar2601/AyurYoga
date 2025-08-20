"use client"

import { useEffect, useState } from "react"

export function Lotus3D() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="lotus-3d-container">
      <div
        className="lotus-3d"
        style={{
          transform: `rotateY(${rotation}deg) rotateX(${Math.sin(rotation * 0.02) * 10}deg)`,
        }}
      >
        {/* Lotus petals arranged in layers */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`outer-${i}`}
            className="lotus-petal outer-petal"
            style={{
              transform: `rotateZ(${i * 45}deg) translateY(-20px) rotateX(30deg)`,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`middle-${i}`}
            className="lotus-petal middle-petal"
            style={{
              transform: `rotateZ(${i * 60 + 30}deg) translateY(-15px) rotateX(45deg)`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`inner-${i}`}
            className="lotus-petal inner-petal"
            style={{
              transform: `rotateZ(${i * 90 + 45}deg) translateY(-10px) rotateX(60deg)`,
            }}
          />
        ))}
        <div className="lotus-center" />
      </div>
    </div>
  )
}
