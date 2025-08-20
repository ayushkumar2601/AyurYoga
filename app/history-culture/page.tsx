"use client"

import FloatingNavbar from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { SpiritualCard } from "@/components/spiritual-card"
import { Button } from "@/components/ui/button"
import { Globe, BookOpen, Users, Sparkles } from "lucide-react"

export default function HistoryCulturePage() {
  const timeline = [
    {
      period: "3000-1500 BCE",
      title: "Indus Valley Civilization",
      description: "Archaeological evidence suggests yoga-like practices existed in the Indus Valley civilization.",
      icon: "🏛️",
    },
    {
      period: "1500-500 BCE",
      title: "Vedic Period",
      description: "The Vedas, ancient Sanskrit texts, first mention yoga and Ayurvedic principles.",
      icon: "📜",
    },
    {
      period: "400 BCE - 400 CE",
      title: "Classical Period",
      description: "Patanjali's Yoga Sutras codified yoga philosophy and the eight-limbed path.",
      icon: "🧘‍♂️",
    },
    {
      period: "800-1700 CE",
      title: "Medieval Period",
      description: "Hatha Yoga emerged, focusing on physical practices and energy cultivation.",
      icon: "⚡",
    },
    {
      period: "1800s-Present",
      title: "Modern Era",
      description: "Yoga and Ayurveda spread globally, adapting to contemporary wellness needs.",
      icon: "🌍",
    },
  ]

  const culturalAspects = [
    {
      title: "Sacred Texts",
      description:
        "Ancient scriptures like the Vedas, Upanishads, and Yoga Sutras form the foundation of these practices.",
      icon: BookOpen,
      examples: ["Rig Veda", "Bhagavad Gita", "Hatha Yoga Pradipika", "Charaka Samhita"],
    },
    {
      title: "Philosophical Traditions",
      description: "Deep philosophical systems exploring consciousness, reality, and the nature of existence.",
      icon: Sparkles,
      examples: ["Samkhya", "Vedanta", "Tantra", "Kashmir Shaivism"],
    },
    {
      title: "Guru-Disciple Tradition",
      description: "Knowledge transmitted through direct experience and personal guidance from teacher to student.",
      icon: Users,
      examples: ["Oral Tradition", "Ashram System", "Lineage Preservation", "Experiential Learning"],
    },
    {
      title: "Holistic Worldview",
      description: "Understanding of interconnectedness between individual, society, nature, and cosmos.",
      icon: Globe,
      examples: ["Dharma", "Karma", "Moksha", "Cosmic Consciousness"],
    },
  ]

  const globalAdoption = [
    {
      region: "North America",
      practitioners: "36+ million",
      growth: "50% increase since 2012",
      focus: "Physical fitness, stress relief, mindfulness",
    },
    {
      region: "Europe",
      practitioners: "30+ million",
      growth: "Growing integration in healthcare",
      focus: "Therapeutic applications, wellness tourism",
    },
    {
      region: "Asia-Pacific",
      practitioners: "200+ million",
      growth: "Traditional revival with modern adaptations",
      focus: "Cultural preservation, medical integration",
    },
    {
      region: "Latin America",
      practitioners: "15+ million",
      growth: "Rapid expansion in urban centers",
      focus: "Community wellness, spiritual growth",
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
                  Ancient <GradientText>Wisdom</GradientText> for Modern Times
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
                  Journey through 5,000 years of history to discover how yoga and Ayurveda emerged from the sacred
                  traditions of India and transformed global wellness.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative">
                  <img
                    src="/ancient-temple.png"
                    alt="Ancient Indian temple representing yoga and Ayurveda origins"
                    className="rounded-2xl shadow-2xl mx-auto floating"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <GradientText>Historical</GradientText> Timeline
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Trace the evolution of yoga and Ayurveda through millennia of human civilization and spiritual
                    discovery.
                  </p>
                </div>
              </ScrollReveal>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-30" />

                <div className="space-y-12">
                  {timeline.map((period, index) => (
                    <ScrollReveal key={period.period} delay={index * 100}>
                      <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                          <SpiritualCard className="p-6">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <span className="text-3xl">{period.icon}</span>
                                <div>
                                  <h3 className="text-xl font-serif font-semibold">{period.title}</h3>
                                  <p className="text-primary font-medium">{period.period}</p>
                                </div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{period.description}</p>
                            </div>
                          </SpiritualCard>
                        </div>

                        {/* Timeline Dot */}
                        <div className="relative z-10">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background" />
                        </div>

                        <div className="w-1/2" />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Foundations */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <GradientText>Cultural</GradientText> Foundations
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Explore the rich cultural and philosophical traditions that gave birth to these transformative
                    practices.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                {culturalAspects.map((aspect, index) => (
                  <ScrollReveal key={aspect.title} delay={index * 150}>
                    <SpiritualCard className="p-8 h-full">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                            <aspect.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-2xl font-serif font-semibold">{aspect.title}</h3>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{aspect.description}</p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Elements</h4>
                          <div className="flex flex-wrap gap-2">
                            {aspect.examples.map((example) => (
                              <span
                                key={example}
                                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SpiritualCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Adoption */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <GradientText>Global</GradientText> Adoption
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Witness how these ancient practices have transcended cultural boundaries to become a worldwide
                    movement for health and consciousness.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {globalAdoption.map((region, index) => (
                  <ScrollReveal key={region.region} delay={index * 100}>
                    <SpiritualCard className="p-6 text-center">
                      <div className="space-y-4">
                        <h3 className="text-xl font-serif font-semibold">{region.region}</h3>
                        <div className="space-y-2">
                          <div className="text-3xl font-bold gradient-text">{region.practitioners}</div>
                          <p className="text-sm text-muted-foreground">Practitioners</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-primary">{region.growth}</p>
                          <p className="text-xs text-muted-foreground">{region.focus}</p>
                        </div>
                      </div>
                    </SpiritualCard>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={400}>
                <div className="mt-12 text-center">
                  <SpiritualCard className="p-8 max-w-4xl mx-auto">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif font-semibold">Modern Relevance</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        In our fast-paced, technology-driven world, the ancient wisdom of yoga and Ayurveda offers
                        timeless solutions for modern challenges. These practices provide tools for managing stress,
                        maintaining physical health, cultivating mental clarity, and finding deeper meaning in life.
                        Their emphasis on prevention, personalization, and holistic well-being aligns perfectly with
                        contemporary approaches to healthcare and wellness.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🏥</div>
                          <h4 className="font-semibold mb-1">Healthcare Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Hospitals and clinics worldwide incorporate yoga and Ayurvedic principles
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">🎓</div>
                          <h4 className="font-semibold mb-1">Academic Research</h4>
                          <p className="text-sm text-muted-foreground">
                            Universities study the scientific basis of these ancient practices
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">💼</div>
                          <h4 className="font-semibold mb-1">Corporate Wellness</h4>
                          <p className="text-sm text-muted-foreground">
                            Companies adopt these practices for employee well-being and productivity
                          </p>
                        </div>
                      </div>
                    </div>
                  </SpiritualCard>
                </div>
              </ScrollReveal>
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
                    Be Part of the <GradientText>Living Tradition</GradientText>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Join millions worldwide who have discovered the transformative power of these ancient practices.
                    Honor the tradition while embracing modern innovation with AyurYoga.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-3"
                    >
                      Start Your Journey
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Explore Traditions
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
