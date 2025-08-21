"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FloatingNavbar from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { SpiritualCard } from "@/components/spiritual-card"
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react"
import CustomCursor from "@/components/CustomCursor"

export default function SignupPage() {
  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsLoading(false)

    window.location.href = "/welcome"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <FloatingNavbar />
      <CustomCursor isHover={hover}/>
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Welcome Content */}
              <ScrollReveal className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                    Begin Your <GradientText>Sacred Journey</GradientText>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Join thousands who have discovered the transformative power of ancient wisdom combined with modern
                    wellness practices.
                  </p>
                </div>

                <div className="grid gap-6">
                  <SpiritualCard className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🧘‍♀️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Personalized Yoga Practice</h3>
                        <p className="text-muted-foreground">
                          Discover yoga sequences tailored to your unique constitution and wellness goals.
                        </p>
                      </div>
                    </div>
                  </SpiritualCard>

                  <SpiritualCard className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🌿</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Ayurvedic Wisdom</h3>
                        <p className="text-muted-foreground">
                          Learn about your dosha and receive personalized lifestyle recommendations.
                        </p>
                      </div>
                    </div>
                  </SpiritualCard>

                  <SpiritualCard className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">✨</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Mindful Community</h3>
                        <p className="text-muted-foreground">
                          Connect with like-minded souls on the path to holistic wellness.
                        </p>
                      </div>
                    </div>
                  </SpiritualCard>
                </div>
              </ScrollReveal>

              {/* Right Side - Signup Form */}
              <ScrollReveal delay={200}>
                <SpiritualCard glowing className="p-8">
                  <CardHeader className="text-center space-y-4 pb-8">
                    <CardTitle className="text-3xl font-serif">
                      <GradientText>Create Your Account</GradientText>
                    </CardTitle>
                    <CardDescription className="text-lg">Start your journey to holistic wellness today</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10 glow-input"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 glow-input"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="pl-10 pr-10 glow-input"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="pl-10 pr-10 glow-input"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 text-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Your Account..." : "Begin Your Journey"}
                      </Button>

                      <div className="text-center text-sm text-muted-foreground">
                        By creating an account, you agree to our{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </div>
                    </form>
                  </CardContent>
                </SpiritualCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
