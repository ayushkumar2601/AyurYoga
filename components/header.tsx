"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/30"
          : "bg-background/80 backdrop-blur-md border-b border-primary/20"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center rotating-chakra group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-sm">AY</span>
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </div>
            <span className="font-serif text-xl font-semibold gradient-text group-hover:scale-105 transition-transform duration-300">
              AyurYoga
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/signup"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
            >
              Sign Up
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about-yoga"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
            >
              About Yoga
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about-ayurveda"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
            >
              About Ayurveda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/history-culture"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
            >
              History & Culture
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-primary/20 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <Link
                href="/signup"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                href="/about-yoga"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Yoga
              </Link>
              <Link
                href="/about-ayurveda"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Ayurveda
              </Link>
              <Link
                href="/history-culture"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                History & Culture
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
