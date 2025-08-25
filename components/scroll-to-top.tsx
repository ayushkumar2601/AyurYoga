"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Scroll to top on initial mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  // Scroll to top whenever the route changes (pathname or query changes)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
    }
  }, [pathname, searchParams])

  return null
}
