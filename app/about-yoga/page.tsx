"use client"

import FloatingNavbar from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { SpiritualCard } from "@/components/spiritual-card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Zap, Shield, Sun } from "lucide-react"

export default function AboutYogaPage() {
  const yogaTypes = [
    {
      name: "Hatha Yoga",
      description: "Gentle, slow-paced practice focusing on basic postures and breathing techniques.",
      icon: "🧘‍♀️",
      benefits: ["Flexibility", "Stress Relief", "Balance"],
    },
    {
      name: "Vinyasa Yoga",
      description: "Dynamic flow connecting movement with breath in a graceful sequence.",
      icon: "🌊",
      benefits: ["Strength", "Cardio", "Mindfulness"],
    },
    {
      name: "Ashtanga Yoga",
      description: "Traditional, vigorous practice with a set sequence of poses.",
      icon: "⚡",
      benefits: ["Discipline", "Power", "Focus"],
    },
    {
      name: "Yin Yoga",
      description: "Passive practice with long-held poses to target deep connective tissues.",
      icon: "🌙",
      benefits: ["Deep Stretch", "Meditation", "Restoration"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Physical Health",
      description: "Improves flexibility, strength, balance, and cardiovascular health through mindful movement.",
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Enhances focus, reduces anxiety, and promotes emotional stability through meditation.",
    },
    {
      icon: Zap,
      title: "Energy Flow",
      description: "Balances the body's energy systems, increasing vitality and reducing fatigue.",
    },
    {
      icon: Shield,
      title: "Stress Relief",
      description: "Activates the parasympathetic nervous system, promoting deep relaxation and healing.",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <FloatingNavbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
                  The Ancient Art of <GradientText>Yoga</GradientText>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
                  Discover the transformative practice that unites body, mind, and spirit through movement, breath, and
                  meditation.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative">
                  <img
                    src="/serene-yoga-lotus.png"
                    alt="Yoga practitioner in meditation"
                    className="rounded-2xl shadow-2xl mx-auto floating"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What is Yoga Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    What is <GradientText>Yoga</GradientText>?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Yoga, derived from the Sanskrit word "yuj" meaning "to unite," is a holistic practice that
                    harmonizes the physical, mental, and spiritual aspects of our being.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal delay={100}>
                  <SpiritualCard className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <Sun className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-serif font-semibold">The Eight Limbs of Yoga</h3>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs font-bold text-primary">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Yamas</h4>
                            <p className="text-sm text-muted-foreground">Ethical restraints and moral guidelines</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs font-bold text-primary">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Niyamas</h4>
                            <p className="text-sm text-muted-foreground">Observances and spiritual practices</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs font-bold text-primary">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Asanas</h4>
                            <p className="text-sm text-muted-foreground">Physical postures and movements</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs font-bold text-primary">4</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Pranayama</h4>
                            <p className="text-sm text-muted-foreground">Breath control and energy regulation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="space-y-6">
                    <img src="/yoga-sequence.png" alt="Yoga poses sequence" className="rounded-xl shadow-lg w-full" />
                    <p className="text-muted-foreground leading-relaxed">
                      Through the practice of asanas (postures), pranayama (breathing techniques), and meditation, yoga
                      creates a pathway to inner peace, physical vitality, and spiritual awakening. Each element works
                      synergistically to bring balance and harmony to our daily lives.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <GradientText>Benefits</GradientText> of Yoga
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Experience profound transformation across all dimensions of your being through regular yoga
                    practice.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <ScrollReveal key={benefit.title} delay={index * 100}>
                    <SpiritualCard className="p-6 text-center h-full">
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                          <benefit.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </SpiritualCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Types of Yoga Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    Types of <GradientText>Yoga</GradientText>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Explore different styles of yoga to find the practice that resonates with your body, mind, and
                    spirit.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                {yogaTypes.map((type, index) => (
                  <ScrollReveal key={type.name} delay={index * 150}>
                    <SpiritualCard className="p-8 hover:scale-105 transition-transform duration-300">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{type.icon}</div>
                          <h3 className="text-2xl font-serif font-semibold">{type.name}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {type.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpiritualCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold">
                    Begin Your <GradientText>Yoga Journey</GradientText>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Whether you're a complete beginner or an experienced practitioner, AyurYoga provides personalized
                    guidance to deepen your practice and enhance your well-being.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-3"
                    >
                      Start Your Practice
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
