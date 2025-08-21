"use client"

import * as React from "react"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export function Progress({ value = 0, className, ...props }: ProgressProps) {
  return (
    <div
      className={`relative w-full h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="h-full bg-gradient-to-r from-teal-400 to-purple-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
