"use client"

import FloatingNavbar from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { SpiritualCard } from "@/components/spiritual-card"
import { Button } from "@/components/ui/button"
import { Leaf, Wind, Flame, Mountain } from "lucide-react"

export default function AboutAyurvedaPage() {
  const doshas = [
    {
      name: "Vata",
      element: "Air + Space",
      icon: Wind,
      color: "from-blue-400 to-purple-400",
      characteristics: ["Movement", "Creativity", "Communication", "Flexibility"],
      qualities: ["Light", "Dry", "Cold", "Rough", "Mobile"],
      imbalance: ["Anxiety", "Insomnia", "Digestive issues", "Joint pain"],
      balance: ["Regular routine", "Warm foods", "Oil massage", "Gentle yoga"],
    },
    {
      name: "Pitta",
      element: "Fire + Water",
      icon: Flame,
      color: "from-orange-400 to-red-400",
      characteristics: ["Transformation", "Intelligence", "Leadership", "Focus"],
      qualities: ["Hot", "Sharp", "Light", "Oily", "Liquid"],
      imbalance: ["Anger", "Inflammation", "Skin issues", "Heartburn"],
      balance: ["Cool foods", "Moderate exercise", "Avoid heat", "Calming practices"],
    },
    {
      name: "Kapha",
      element: "Earth + Water",
      icon: Mountain,
      color: "from-green-400 to-teal-400",
      characteristics: ["Structure", "Stability", "Immunity", "Compassion"],
      qualities: ["Heavy", "Slow", "Cold", "Oily", "Stable"],
      imbalance: ["Lethargy", "Weight gain", "Congestion", "Depression"],
      balance: ["Light foods", "Vigorous exercise", "Warm spices", "Active lifestyle"],
    },
  ]

  const principles = [
    {
      title: "Individual Constitution",
      description:
        "Every person has a unique combination of doshas that determines their physical and mental characteristics.",
      icon: "🧬",
    },
    {
      title: "Balance is Health",
      description: "Health is achieved when the doshas are in their natural state of balance for each individual.",
      icon: "⚖️",
    },
    {
      title: "Prevention First",
      description: "Ayurveda emphasizes preventing disease through lifestyle, diet, and daily practices.",
      icon: "🛡️",
    },
    {
      title: "Natural Healing",
      description: "Treatment uses natural methods including herbs, diet, yoga, and meditation.",
      icon: "🌿",
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
                  The Science of <GradientText>Ayurveda</GradientText>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
                  Discover the ancient wisdom of life that personalizes wellness based on your unique constitution and
                  natural rhythms.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative">
                  <img
                    src="/ayurveda-herbs.png"
                    alt="Ayurvedic herbs and elements"
                    className="rounded-2xl shadow-2xl mx-auto floating"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What is Ayurveda Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    What is <GradientText>Ayurveda</GradientText>?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Ayurveda, meaning "knowledge of life," is a 5,000-year-old system of natural healing that originated
                    in India. It's based on the belief that health and wellness depend on a delicate balance between
                    mind, body, and spirit.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal delay={100}>
                  <div className="space-y-6">
                    <img
                      src="/ayurveda-balance.png"
                      alt="Ayurvedic balance concept"
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <SpiritualCard className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <Leaf className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-serif font-semibold">Core Principles</h3>
                      </div>

                      <div className="space-y-4">
                        {principles.map((principle, index) => (
                          <div key={principle.title} className="flex items-start space-x-3">
                            <div className="text-2xl flex-shrink-0">{principle.icon}</div>
                            <div>
                              <h4 className="font-semibold mb-1">{principle.title}</h4>
                              <p className="text-sm text-muted-foreground">{principle.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* The Three Doshas Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    The Three <GradientText>Doshas</GradientText>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    According to Ayurveda, three fundamental energies or doshas govern all biological, psychological,
                    and physiological functions of the body, mind, and consciousness.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid lg:grid-cols-3 gap-8">
                {doshas.map((dosha, index) => (
                  <ScrollReveal key={dosha.name} delay={index * 150}>
                    <SpiritualCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="text-center">
                          <div
                            className={`w-20 h-20 rounded-full bg-gradient-to-r ${dosha.color} flex items-center justify-center mx-auto mb-4`}
                          >
                            <dosha.icon className="h-10 w-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-serif font-bold">{dosha.name}</h3>
                          <p className="text-muted-foreground">{dosha.element}</p>
                        </div>

                        {/* Characteristics */}
                        <div>
                          <h4 className="font-semibold mb-3 text-center">Key Characteristics</h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {dosha.characteristics.map((char) => (
                              <span
                                key={char}
                                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                              >
                                {char}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Qualities */}
                        <div>
                          <h4 className="font-semibold mb-2">Qualities</h4>
                          <p className="text-sm text-muted-foreground">{dosha.qualities.join(", ")}</p>
                        </div>

                        {/* Imbalance Signs */}
                        <div>
                          <h4 className="font-semibold mb-2 text-destructive">When Imbalanced</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {dosha.imbalance.map((sign) => (
                              <li key={sign} className="flex items-center space-x-2">
                                <span className="w-1 h-1 bg-destructive rounded-full" />
                                <span>{sign}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Balance Tips */}
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">To Balance</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {dosha.balance.map((tip) => (
                              <li key={tip} className="flex items-center space-x-2">
                                <span className="w-1 h-1 bg-primary rounded-full" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SpiritualCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How AyurYoga Uses Ayurveda Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                    How <GradientText>AyurYoga</GradientText> Integrates Ayurveda
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our app combines ancient Ayurvedic wisdom with modern technology to provide personalized wellness
                    recommendations tailored to your unique constitution.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollReveal delay={100}>
                  <SpiritualCard className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                        <span className="text-2xl">🧬</span>
                      </div>
                      <h3 className="text-xl font-semibold">Dosha Assessment</h3>
                      <p className="text-muted-foreground text-sm">
                        Take our comprehensive quiz to discover your unique constitutional type and current state of
                        balance.
                      </p>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <SpiritualCard className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                        <span className="text-2xl">🧘‍♀️</span>
                      </div>
                      <h3 className="text-xl font-semibold">Personalized Yoga</h3>
                      <p className="text-muted-foreground text-sm">
                        Receive yoga sequences specifically designed for your dosha to maintain balance and enhance
                        well-being.
                      </p>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <SpiritualCard className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                        <span className="text-2xl">🍃</span>
                      </div>
                      <h3 className="text-xl font-semibold">Lifestyle Guidance</h3>
                      <p className="text-muted-foreground text-sm">
                        Get personalized recommendations for diet, daily routines, and seasonal adjustments based on
                        Ayurvedic principles.
                      </p>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <SpiritualCard className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="text-xl font-semibold">Smart Tracking</h3>
                      <p className="text-muted-foreground text-sm">
                        Monitor your progress and receive insights on how your practices are affecting your doshic
                        balance.
                      </p>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <SpiritualCard className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                        <span className="text-2xl">🌙</span>
                      </div>
                      <h3 className="text-xl font-semibold">Seasonal Wisdom</h3>
                      <p className="text-muted-foreground text-sm">
                        Adapt your practice with seasonal recommendations that align with natural cycles and doshic
                        influences.
                      </p>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <SpiritualCard className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="text-xl font-semibold">Holistic Approach</h3>
                      <p className="text-muted-foreground text-sm">
                        Experience wellness that addresses mind, body, and spirit through integrated Ayurvedic and yogic
                        practices.
                      </p>
                    </div>
                  </SpiritualCard>
                </ScrollReveal>
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
                    Discover Your <GradientText>Ayurvedic Constitution</GradientText>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Take our comprehensive dosha assessment and begin your personalized journey to optimal health and
                    balance through the wisdom of Ayurveda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-3"
                    >
                      Take Dosha Quiz
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
