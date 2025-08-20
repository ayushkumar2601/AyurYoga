"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-up" | "rotate-in"
}

export function ScrollReveal({ children, className = "", delay = 0, animation = "fade-in" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (animation) {
      case "slide-up":
        return "scroll-fade-in"
      case "slide-left":
        return "scroll-slide-left"
      case "slide-right":
        return "scroll-slide-right"
      case "scale-up":
        return "scroll-scale-up"
      case "rotate-in":
        return "scroll-rotate-in"
      default:
        return "scroll-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
