// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import { AnimatedBackground } from "@/components/animated-background"
// import { GradientText } from "@/components/gradient-text"
// import { ScrollReveal } from "@/components/scroll-reveal"
// import { ContentModal } from "@/components/content-modal"
// import { doshaData } from "@/lib/dosha-data"
// import FloatingNavbar from "@/components/floating-navbar"
// import YogaPosesModal from "@/components/yoga-poses-modal"
// import { FloatingElements3D } from "@/components/3d-floating-elements"
// import { Lotus3D } from "@/components/3d-lotus"
// import { Chakra3D } from "@/components/3d-chakra"
// import { Footer } from "@/components/footer"
// import CustomCursor from "@/components/CustomCursor"
// import { AuroraBackground } from "@/components/aurora-background"

// export default function WellnessDashboardPage() {
//   const [hover, setHover] = useState(false);
//   const [doshaType, setDoshaType] = useState<string>("")
//   const [doshaScores, setDoshaScores] = useState<Record<string, number>>({})
//   const [modalContent, setModalContent] = useState<{
//     isOpen: boolean
//     title: string
//     items: string[]
//     icon: string
//     gradient: string
//   }>({
//     isOpen: false,
//     title: "",
//     items: [],
//     icon: "",
//     gradient: "",
//   })
//   const [isYogaPosesOpen, setIsYogaPosesOpen] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     const result = localStorage.getItem("doshaResult")
//     const scores = localStorage.getItem("doshaScores")

//     if (result && scores) {
//       setDoshaType(result)
//       setDoshaScores(JSON.parse(scores))
//     } else {
//       router.push("/dosha-quiz")
//     }
//   }, [router])

//   const currentDosha = doshaData[doshaType]

//   if (!currentDosha) return null

//   const handleRetakeQuiz = () => {
//     localStorage.removeItem("doshaResult")
//     localStorage.removeItem("doshaScores")
//     router.push("/dosha-quiz")
//   }

//   const openModal = (title: string, items: string[], icon: string, gradient: string) => {
//     setModalContent({
//       isOpen: true,
//       title,
//       items,
//       icon,
//       gradient,
//     })
//   }

//   const closeModal = () => {
//     setModalContent((prev) => ({ ...prev, isOpen: false }))
//   }

//   const dashboardSections = [
//     {
//       key: "diet",
//       title: currentDosha.diet.title,
//       items: currentDosha.diet.items,
//       icon: "🥗",
//       gradient: currentDosha.colors.primary,
//     },
//     {
//       key: "lifestyle",
//       title: currentDosha.lifestyle.title,
//       items: currentDosha.lifestyle.items,
//       icon: "🏠",
//       gradient: currentDosha.colors.primary,
//     },
//     {
//       key: "yoga",
//       title: currentDosha.yoga.title,
//       items: currentDosha.yoga.items,
//       icon: "🧘‍♀️",
//       gradient: currentDosha.colors.primary,
//     },
//     {
//       key: "remedies",
//       title: currentDosha.remedies.title,
//       items: currentDosha.remedies.items,
//       icon: "🌿",
//       gradient: currentDosha.colors.primary,
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <FloatingNavbar />
//       {/* <AnimatedBackground /> */}
//       <AuroraBackground/>
//       <FloatingElements3D />
//       <CustomCursor isHover={hover}/>
      

//       <div className="relative z-10">
//         {/* Header */}
//         <div className="pt-20 pb-12 px-4">
//           <div className="max-w-6xl mx-auto text-center">
//             <ScrollReveal>
//               <GradientText className="text-4xl md:text-6xl font-serif font-bold mb-4">
//                 Your Wellness Dashboard
//               </GradientText>
//               <p className="text-xl text-slate-300 mb-8">
//                 Personalized recommendations for your {currentDosha.name} constitution
//               </p>
//             </ScrollReveal>

//             <ScrollReveal delay={200}>
//               <div className="flex justify-center items-center space-x-8 mb-8">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-400">{doshaScores.vata || 0}</div>
//                   <div className="text-sm text-slate-400">Vata</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-orange-400">{doshaScores.pitta || 0}</div>
//                   <div className="text-sm text-slate-400">Pitta</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-400">{doshaScores.kapha || 0}</div>
//                   <div className="text-sm text-slate-400">Kapha</div>
//                 </div>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={400}>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <button
//                   onClick={handleRetakeQuiz}
//                   className="px-6 py-3 glass-card rounded-xl text-slate-200 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
//                 >
//                   Re-evaluate My Dosha
//                 </button>
//                 <button
//                   onClick={() => setIsYogaPosesOpen(true)}
//                   className="px-6 py-3 glass-card rounded-xl text-slate-200 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
//                 >
//                   <span>🧘‍♀️</span>
//                   <span>Explore Yoga Poses</span>
//                 </button>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>

//         {/* Recommendations Grid */}
//         <div className="max-w-6xl mx-auto px-4 pb-20">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {dashboardSections.map((section, index) => (
//               <ScrollReveal key={section.key} delay={index * 100} animation="slide-up">
//                 <div className="group relative">
//                   <button
//                     onClick={() => openModal(section.title, section.items, section.icon, section.gradient)}
//                     className="w-full text-left glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
//                   >
//                     {/* Icon */}
//                     <div className="mb-6">
//                       <div
//                         className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.gradient} flex items-center justify-center text-2xl mb-4 animate-pulse`}
//                       >
//                         {section.icon}
//                       </div>
//                       <h3 className="text-2xl font-serif font-bold text-slate-200 mb-2">{section.title}</h3>
//                     </div>

//                     {/* Preview of first 2 items */}
//                     <div className="space-y-3">
//                       {section.items.slice(0, 2).map((item, itemIndex) => (
//                         <div
//                           key={itemIndex}
//                           className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300"
//                           style={{ transitionDelay: `${itemIndex * 50}ms` }}
//                         >
//                           <div
//                             className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient} mt-2 flex-shrink-0`}
//                           />
//                           <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
//                         </div>
//                       ))}
//                       {section.items.length > 2 && (
//                         <div className="text-center pt-4">
//                           <span className="text-slate-400 text-sm">Click to see all recommendations →</span>
//                         </div>
//                       )}
//                     </div>

//                     {/* Hover Glow Effect */}
//                     <div
//                       className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
//                     />
//                   </button>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>

//         {/* Daily Practice Section */}
//         <ScrollReveal>
//           <div className="max-w-4xl mx-auto px-4 pb-20">
//             <div className="glass-card rounded-3xl p-8">
//               <div className="text-center mb-8">
//                 <GradientText className="text-3xl font-serif font-bold mb-4">Daily Practice Reminder</GradientText>
//                 <p className="text-slate-300">Consistency is key to balancing your {currentDosha.name} constitution</p>
//               </div>

//               <div className="grid md:grid-cols-3 gap-6">
//                 <div className="text-center">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center text-xl mb-3 mx-auto animate-spin-slow">
//                     🧘
//                   </div>
//                   <h4 className="font-semibold text-slate-200 mb-2">Morning Practice</h4>
//                   <p className="text-sm text-slate-400">Start with meditation and pranayama</p>
//                 </div>

//                 <div className="text-center">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-xl mb-3 mx-auto animate-bounce-slow">
//                     🍃
//                   </div>
//                   <h4 className="font-semibold text-slate-200 mb-2">Mindful Eating</h4>
//                   <p className="text-sm text-slate-400">Follow your dosha-specific diet</p>
//                 </div>

//                 <div className="text-center">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 flex items-center justify-center text-xl mb-3 mx-auto animate-pulse">
//                     🌙
//                   </div>
//                   <h4 className="font-semibold text-slate-200 mb-2">Evening Routine</h4>
//                   <p className="text-sm text-slate-400">Wind down with gentle yoga</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>
//       </div>

//       <ContentModal
//         isOpen={modalContent.isOpen}
//         onClose={closeModal}
//         title={modalContent.title}
//         items={modalContent.items}
//         icon={modalContent.icon}
//         gradient={modalContent.gradient}
//       />

//       <YogaPosesModal isOpen={isYogaPosesOpen} onClose={() => setIsYogaPosesOpen(false)} />

//       <div className="absolute top-32 left-10 opacity-30">
//         <Lotus3D />
//       </div>
//       <div className="absolute top-40 right-20 opacity-40">
//         <Chakra3D size={80} color="teal" speed={0.5} />
//       </div>
//       <div className="absolute bottom-40 left-1/4 opacity-25">
//         <Chakra3D size={60} color="purple" speed={1.2} />
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }
//       `}</style>
//       <Footer/>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { GradientText } from "@/components/gradient-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContentModal } from "@/components/content-modal"
import { doshaData } from "@/lib/dosha-data"
import FloatingNavbar from "@/components/floating-navbar"
import YogaPosesModal from "@/components/yoga-poses-modal"
import { FloatingElements3D } from "@/components/3d-floating-elements"
import { Lotus3D } from "@/components/3d-lotus"
import { Chakra3D } from "@/components/3d-chakra"
import { Footer } from "@/components/footer"
import CustomCursor from "@/components/CustomCursor"
import { AuroraBackground } from "@/components/aurora-background"

// shadcn imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import { Badge } from "@/components/ui/badge"

export default function WellnessDashboardPage() {
  const [hover, setHover] = useState(false);
  const [doshaType, setDoshaType] = useState<string>("")
  const [doshaScores, setDoshaScores] = useState<Record<string, number>>({})
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean
    title: string
    items: string[]
    icon: string
    gradient: string
  }>({
    isOpen: false,
    title: "",
    items: [],
    icon: "",
    gradient: "",
  })
  const [isYogaPosesOpen, setIsYogaPosesOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const result = localStorage.getItem("doshaResult")
    const scores = localStorage.getItem("doshaScores")

    if (result && scores) {
      setDoshaType(result)
      setDoshaScores(JSON.parse(scores))
    } else {
      router.push("/dosha-quiz")
    }
  }, [router])

  const currentDosha = doshaData[doshaType]

  if (!currentDosha) return null

  const handleRetakeQuiz = () => {
    localStorage.removeItem("doshaResult")
    localStorage.removeItem("doshaScores")
    router.push("/dosha-quiz")
  }

  const openModal = (title: string, items: string[], icon: string, gradient: string) => {
    setModalContent({
      isOpen: true,
      title,
      items,
      icon,
      gradient,
    })
  }

  const closeModal = () => {
    setModalContent((prev) => ({ ...prev, isOpen: false }))
  }

  const dashboardSections = [
    {
      key: "diet",
      title: currentDosha.diet.title,
      items: currentDosha.diet.items,
      icon: "🥗",
      gradient: currentDosha.colors.primary,
    },
    {
      key: "lifestyle",
      title: currentDosha.lifestyle.title,
      items: currentDosha.lifestyle.items,
      icon: "🏠",
      gradient: currentDosha.colors.primary,
    },
    {
      key: "yoga",
      title: currentDosha.yoga.title,
      items: currentDosha.yoga.items,
      icon: "🧘‍♀️",
      gradient: currentDosha.colors.primary,
    },
    {
      key: "remedies",
      title: currentDosha.remedies.title,
      items: currentDosha.remedies.items,
      icon: "🌿",
      gradient: currentDosha.colors.primary,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingNavbar />
      <AuroraBackground/>
      <FloatingElements3D />
      <CustomCursor isHover={hover}/>

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-20 pb-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <ScrollReveal>
              <GradientText className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Your Wellness Dashboard
              </GradientText>
              <p className="text-xl text-slate-300 mb-8">
                Personalized recommendations for your {currentDosha.name} constitution
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{doshaScores.vata || 0}</div>
                  <div className="text-sm text-slate-400">Vata</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{doshaScores.pitta || 0}</div>
                  <div className="text-sm text-slate-400">Pitta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{doshaScores.kapha || 0}</div>
                  <div className="text-sm text-slate-400">Kapha</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleRetakeQuiz}
                  className="px-6 py-3 glass-card rounded-xl text-slate-200 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Re-evaluate My Dosha
                </button>
                <button
                  onClick={() => setIsYogaPosesOpen(true)}
                  className="px-6 py-3 glass-card rounded-xl text-slate-200 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>🧘‍♀️</span>
                  <span>Explore Yoga Poses</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

      {/* Daily Tracker + Streak Section */}
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-8">
            {/* Daily Tracker */}
            <Card className="glass-card rounded-3xl">
              <CardHeader>
                <CardTitle className="text-slate-200 font-serif text-xl">Daily Tracker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-slate-300 text-sm mb-2">Morning Meditation</p>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-2">Yoga Practice</p>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-2">Mindful Eating</p>
                  <Progress value={15 } className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Streak Section */}
            <Card className="glass-card rounded-3xl">
              <CardHeader>
                <CardTitle className="text-slate-200 font-serif text-xl">Your Streak</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="text-6xl font-bold text-teal-400">🔥</div>
                <p className="text-slate-400">Start your Streak</p>
                <div className="flex gap-2">
                  {[...Array(7)].map((_, i) => (
                    <Badge key={i} className={`rounded-full px-3 py-1 ${i < 7 ? "bg-gradient-to-r from-teal-400 to-purple-400 text-white" : "bg-slate-600"}`}>
                      {i + 1}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>










        {/* Recommendations Grid */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardSections.map((section, index) => (
              <ScrollReveal key={section.key} delay={index * 100} animation="slide-up">
                <div className="group relative">
                  <button
                    onClick={() => openModal(section.title, section.items, section.icon, section.gradient)}
                    className="w-full text-left glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.gradient} flex items-center justify-center text-2xl mb-4 animate-pulse`}
                      >
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-slate-200 mb-2">{section.title}</h3>
                    </div>

                    {/* Preview of first 2 items */}
                    <div className="space-y-3">
                      {section.items.slice(0, 2).map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${itemIndex * 50}ms` }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient} mt-2 flex-shrink-0`}
                          />
                          <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                      {section.items.length > 2 && (
                        <div className="text-center pt-4">
                          <span className="text-slate-400 text-sm">Click to see all recommendations →</span>
                        </div>
                      )}
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                    />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Daily Practice Section */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 pb-20">
            <div className="glass-card rounded-3xl p-8">
              <div className="text-center mb-8">
                <GradientText className="text-3xl font-serif font-bold mb-4">Daily Practice Reminder</GradientText>
                <p className="text-slate-300">Consistency is key to balancing your {currentDosha.name} constitution</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center text-xl mb-3 mx-auto animate-spin-slow">
                    🧘
                  </div>
                  <h4 className="font-semibold text-slate-200 mb-2">Morning Practice</h4>
                  <p className="text-sm text-slate-400">Start with meditation and pranayama</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-xl mb-3 mx-auto animate-bounce-slow">
                    🍃
                  </div>
                  <h4 className="font-semibold text-slate-200 mb-2">Mindful Eating</h4>
                  <p className="text-sm text-slate-400">Follow your dosha-specific diet</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 flex items-center justify-center text-xl mb-3 mx-auto animate-pulse">
                    🌙
                  </div>
                  <h4 className="font-semibold text-slate-200 mb-2">Evening Routine</h4>
                  <p className="text-sm text-slate-400">Wind down with gentle yoga</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        
      </div>

      <ContentModal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        items={modalContent.items}
        icon={modalContent.icon}
        gradient={modalContent.gradient}
      />

      <YogaPosesModal isOpen={isYogaPosesOpen} onClose={() => setIsYogaPosesOpen(false)} />

      <div className="absolute top-32 left-10 opacity-30">
        <Lotus3D />
      </div>
      <div className="absolute top-40 right-20 opacity-40">
        <Chakra3D size={80} color="teal" speed={0.5} />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-25">
        <Chakra3D size={60} color="purple" speed={1.2} />
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <Footer/>
    </div>
  )
}
