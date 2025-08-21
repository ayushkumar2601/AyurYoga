"use client"

import * as React from "react"
import { cn } from "@/lib/utils" // optional, only if you already have cn util

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "destructive"
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants: Record<string, string> = {
    default:
      "bg-gradient-to-r from-teal-400 to-purple-400 text-white shadow-md",
    secondary:
      "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    success: "bg-green-500 text-white",
    destructive: "bg-red-500 text-white",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
