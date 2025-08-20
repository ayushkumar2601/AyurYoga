import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface SpiritualCardProps {
  children: ReactNode
  className?: string
  glowing?: boolean
  hoverable?: boolean
}

export function SpiritualCard({ children, className = "", glowing = false, hoverable = true }: SpiritualCardProps) {
  return (
    <Card
      className={`
        card-glow backdrop-blur-sm bg-card/50 border border-primary/20
        ${glowing ? "pulse-glow" : ""} 
        ${hoverable ? "hover:scale-105 hover:bg-card/70 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20" : ""}
        transition-all duration-500 ease-out
        ${className}
      `}
    >
      {children}
    </Card>
  )
}
