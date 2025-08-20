"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  z: number
  size: number
  opacity: number
  rotationX: number
  rotationY: number
  rotationZ: number
  speedX: number
  speedY: number
  speedZ: number
  type: "leaf" | "crystal" | "orb" | "mandala"
}

export function FloatingElements3D() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const newElements: FloatingElement[] = []
    const types: FloatingElement["type"][] = ["leaf", "crystal", "orb", "mandala"]

    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 100,
        size: Math.random() * 30 + 20,
        opacity: Math.random() * 0.3 + 0.1,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        speedZ: (Math.random() - 0.5) * 0.3,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }

    setElements(newElements)

    const interval = setInterval(() => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          x: (element.x + element.speedX + 100) % 100,
          y: element.y <= -10 ? 110 : element.y - element.speedY * 0.1,
          z: (element.z + element.speedZ + 100) % 100,
          rotationX: element.rotationX + 0.5,
          rotationY: element.rotationY + 1,
          rotationZ: element.rotationZ + 0.3,
          opacity: Math.sin(Date.now() * 0.002 + element.id) * 0.15 + 0.25,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const renderElement = (element: FloatingElement) => {
    const baseStyle = {
      left: `${element.x}%`,
      top: `${element.y}%`,
      width: `${element.size}px`,
      height: `${element.size}px`,
      opacity: element.opacity,
      transform: `
        translateZ(${element.z}px) 
        rotateX(${element.rotationX}deg) 
        rotateY(${element.rotationY}deg) 
        rotateZ(${element.rotationZ}deg)
        scale(${1 + element.z * 0.01})
      `,
    }

    switch (element.type) {
      case "leaf":
        return (
          <div key={element.id} className="floating-3d-element leaf-3d" style={baseStyle}>
            <div className="leaf-shape" />
          </div>
        )
      case "crystal":
        return (
          <div key={element.id} className="floating-3d-element crystal-3d" style={baseStyle}>
            <div className="crystal-shape" />
          </div>
        )
      case "orb":
        return (
          <div key={element.id} className="floating-3d-element orb-3d" style={baseStyle}>
            <div className="orb-shape" />
          </div>
        )
      case "mandala":
        return (
          <div key={element.id} className="floating-3d-element mandala-3d" style={baseStyle}>
            <div className="mandala-shape">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="mandala-spoke" style={{ transform: `rotate(${i * 45}deg)` }} />
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ perspective: "1000px" }}>
      {elements.map(renderElement)}
    </div>
  )
}
