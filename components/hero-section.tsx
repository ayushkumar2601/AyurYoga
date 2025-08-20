"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"
import { ChakraRing } from "./chakra-ring"
import { ParallaxSection } from "./parallax-section"
import type { ReactNode } from "react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  backgroundImage?: string
  children?: ReactNode
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  children,
}: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Dynamic background gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            oklch(0.65 0.15 200 / 0.3) 0%, 
            oklch(0.55 0.18 280 / 0.2) 25%, 
            transparent 50%)`,
        }}
      />

      {/* Animated background elements */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-20 left-10 opacity-20">
          <ChakraRing size={120} />
        </div>
        <div className="absolute bottom-32 right-16 opacity-15">
          <ChakraRing size={80} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-10">
          <ChakraRing size={200} />
        </div>
      </ParallaxSection>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="relative inline-block mb-6">
              <h1 className="font-serif text-5xl md:text-7xl font-bold gradient-text mb-4 text-glow">{title}</h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-full animate-pulse-slow" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={400}>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">{subtitle}</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={600}>
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryAction && (
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg glassmorphism glassmorphism-hover border-glow hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={primaryAction.href}>{primaryAction.text}</a>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a href={secondaryAction.href}>{secondaryAction.text}</a>
                </Button>
              )}
            </div>
          </ScrollReveal>

          {children && (
            <ScrollReveal animation="fade-in" delay={1000}>
              <div className="mt-16">{children}</div>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 text-6xl opacity-10 floating-enhanced animate-bounce-slow">🕉️</div>
      <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-15 floating animate-pulse-slow">🪷</div>
    </section>
  )
}
