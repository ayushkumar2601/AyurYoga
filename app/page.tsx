"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AuroraBackground } from "@/components/aurora-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { SpiritualCard } from "@/components/spiritual-card"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor"
import Chatbot from "@/components/Chatbot"


export default function HomePage() {
    const [hover, setHover] = useState(false);//this one added
  return (
    <div className="min-h-screen bg-background relative">
      <AuroraBackground />
      <FloatingNavbar />
      <CustomCursor isHover={hover}/>

      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
                  <GradientText>AyurYog</GradientText>
                </h1>
                <p className="text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed">
                  Where Ancient Wisdom Meets Modern Wellness
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-4 text-lg " 
                       onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)}
                    >
                      Begin Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/about-yoga">
<Button
  size="lg"
  variant="outline"
  className="
    border-pink-500 text-pink-600 
    bg-white/60 backdrop-blur-sm
    hover:bg-gradient-to-r hover:from-pink-400/20 hover:to-purple-400/20 
    hover:text-pink-700 hover:border-pink-600 
    active:from-pink-200/40 active:to-purple-200/40
    transition-all duration-500 ease-out
    shadow-sm hover:shadow-lg
    px-8 py-4 text-lg rounded-2xl
  "
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  Explore Wisdom
</Button>


                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)} >
                <ScrollReveal delay={100}>
                  <Link href="/signup">
                    <SpiritualCard className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer" >
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                          <span className="text-2xl">🧘‍♀️</span>
                        </div>
                        <h3 className="text-xl font-semibold">Create Account</h3>
                        <p className="text-muted-foreground text-sm">Start your personalized wellness journey today</p>
                      </div>
                    </SpiritualCard>
                  </Link>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <Link href="/about-yoga">
                    <SpiritualCard className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                          <span className="text-2xl">🕉️</span>
                        </div>
                        <h3 className="text-xl font-semibold">About Yoga</h3>
                        <p className="text-muted-foreground text-sm">Discover the ancient art of mind-body unity</p>
                      </div>
                    </SpiritualCard>
                  </Link>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                  <Link href="/about-ayurveda">
                    <SpiritualCard className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                          <span className="text-2xl">🌿</span>
                        </div>
                        <h3 className="text-xl font-semibold">About Ayurveda</h3>
                        <p className="text-muted-foreground text-sm">Learn the science of life and balance</p>
                      </div>
                    </SpiritualCard>
                  </Link>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <Link href="/history-culture">
                    <SpiritualCard className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                          <span className="text-2xl">🏛️</span>
                        </div>
                        <h3 className="text-xl font-semibold">History & Culture</h3>
                        <p className="text-muted-foreground text-sm">Explore 5,000 years of ancient wisdom</p>
                      </div>
                    </SpiritualCard>
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="space-y-8">
                  <Sparkles className="h-12 w-12 text-primary mx-auto" />
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold">
                    Welcome to Your <GradientText>Transformation</GradientText>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Experience the perfect harmony of ancient wisdom and modern technology. AyurYoga brings you
                    personalized wellness practices rooted in 5,000 years of tradition, adapted for today's world.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Chatbot fixed at bottom-right */}
      <Chatbot />
      </main>

      <Footer />
    </div>
  )
}
