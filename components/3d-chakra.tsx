"use client"

import { useEffect, useState } from "react"

interface Chakra3DProps {
  size?: number
  color?: string
  speed?: number
}

export function Chakra3D({ size = 60, color = "teal", speed = 1 }: Chakra3DProps) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + speed) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div className="chakra-3d-container" style={{ width: size, height: size }}>
      <div
        className="chakra-3d"
        style={{
          transform: `rotateY(${rotation}deg) rotateZ(${rotation * 0.5}deg)`,
          width: size,
          height: size,
        }}
      >
        {/* Outer ring */}
        <div className={`chakra-ring outer-ring chakra-${color}`} />
        {/* Middle ring */}
        <div className={`chakra-ring middle-ring chakra-${color}`} />
        {/* Inner ring */}
        <div className={`chakra-ring inner-ring chakra-${color}`} />
        {/* Center symbol */}
        <div className={`chakra-center chakra-${color}`}>
          <span className="chakra-symbol">ॐ</span>
        </div>
        {/* Rotating spokes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`chakra-spoke chakra-${color}`}
            style={{
              transform: `rotateZ(${i * 60}deg) translateY(-${size / 4}px)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
