"use client"

interface ChakraRingProps {
  size?: number
  className?: string
}

export function ChakraRing({ size = 100, className = "" }: ChakraRingProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
      <div className="absolute inset-2 rounded-full border border-accent/40 animate-spin-reverse"></div>
      <div className="absolute inset-4 rounded-full border border-primary/20 animate-pulse"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse"></div>
    </div>
  )
}
