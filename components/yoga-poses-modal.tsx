// // "use client"

// // import { useState } from "react"
// // import { X, Play, Pause } from "lucide-react"

// // interface YogaPose {
// //   id: string
// //   sanskrit: string
// //   english: string
// //   benefit: string
// //   description: string
// //   difficulty: "Beginner" | "Intermediate" | "Advanced"
// //   duration: string
// //   imageQuery: string
// // }

// // const yogaPoses: YogaPose[] = [
// //   {
// //     id: "tadasana",
// //     sanskrit: "Tadasana",
// //     english: "Mountain Pose",
// //     benefit: "Improves posture and balance",
// //     description: "Stand tall with feet hip-width apart, arms at sides, grounding through all four corners of feet.",
// //     difficulty: "Beginner",
// //     duration: "30-60 seconds",
// //     imageQuery: "mountain pose yoga silhouette",
    
// //   },
// //   {
// //     id: "bhujangasana",
// //     sanskrit: "Bhujangasana",
// //     english: "Cobra Pose",
// //     benefit: "Strengthens spine and opens chest",
// //     description: "Lie face down, place palms under shoulders, gently lift chest while keeping hips grounded.",
// //     difficulty: "Beginner",
// //     duration: "15-30 seconds",
// //     imageQuery: "cobra pose yoga silhouette",
// //   },
// //   {
// //     id: "trikonasana",
// //     sanskrit: "Trikonasana",
// //     english: "Triangle Pose",
// //     benefit: "Stretches legs and improves flexibility",
// //     description: "Stand wide, turn right foot out, reach right hand to floor, extend left arm up.",
// //     difficulty: "Beginner",
// //     duration: "30-60 seconds each side",
// //     imageQuery: "triangle pose yoga silhouette",
// //   },
// //   {
// //     id: "adho-mukha-svanasana",
// //     sanskrit: "Adho Mukha Svanasana",
// //     english: "Downward Dog",
// //     benefit: "Strengthens arms and stretches hamstrings",
// //     description: "From hands and knees, tuck toes, lift hips up and back, creating inverted V shape.",
// //     difficulty: "Beginner",
// //     duration: "30-60 seconds",
// //     imageQuery: "downward dog yoga silhouette",
// //   },
// //   {
// //     id: "savasana",
// //     sanskrit: "Savasana",
// //     english: "Corpse Pose",
// //     benefit: "Deep relaxation and stress relief",
// //     description: "Lie flat on back, arms at sides, palms up, close eyes and focus on breath.",
// //     difficulty: "Beginner",
// //     duration: "5-10 minutes",
// //     imageQuery: "corpse pose yoga relaxation",
// //   },
// //   {
// //     id: "vrikshasana",
// //     sanskrit: "Vrikshasana",
// //     english: "Tree Pose",
// //     benefit: "Improves balance and concentration",
// //     description: "Stand on left foot, place right foot on inner left thigh, hands in prayer position.",
// //     difficulty: "Beginner",
// //     duration: "30-60 seconds each side",
// //     imageQuery: "tree pose yoga balance",
// //   },
// //   {
// //     id: "balasana",
// //     sanskrit: "Balasana",
// //     english: "Child's Pose",
// //     benefit: "Calms mind and relieves stress",
// //     description: "Kneel, sit back on heels, fold forward with arms extended or by sides.",
// //     difficulty: "Beginner",
// //     duration: "1-3 minutes",
// //     imageQuery: "child pose yoga relaxation",
// //   },
// //   {
// //     id: "marjaryasana",
// //     sanskrit: "Marjaryasana",
// //     english: "Cat Pose",
// //     benefit: "Increases spine flexibility",
// //     description: "On hands and knees, arch back up like a cat, tuck chin to chest.",
// //     difficulty: "Beginner",
// //     duration: "30 seconds",
// //     imageQuery: "cat pose yoga stretch",
// //   },
// //   {
// //     id: "bitilasana",
// //     sanskrit: "Bitilasana",
// //     english: "Cow Pose",
// //     benefit: "Stretches front body and neck",
// //     description: "On hands and knees, drop belly, lift chest and tailbone, look up gently.",
// //     difficulty: "Beginner",
// //     duration: "30 seconds",
// //     imageQuery: "cow pose yoga stretch",
// //   },
// //   {
// //     id: "uttanasana",
// //     sanskrit: "Uttanasana",
// //     english: "Forward Fold",
// //     benefit: "Calms nervous system",
// //     description: "Stand, hinge at hips, fold forward with soft knees, let arms hang.",
// //     difficulty: "Beginner",
// //     duration: "30-60 seconds",
// //     imageQuery: "forward fold yoga stretch",
// //   },
// //   {
// //     id: "virabhadrasana-i",
// //     sanskrit: "Virabhadrasana I",
// //     english: "Warrior I",
// //     benefit: "Builds strength and confidence",
// //     description: "Lunge position, back foot angled, arms reach up, square hips forward.",
// //     difficulty: "Intermediate",
// //     duration: "30-60 seconds each side",
// //     imageQuery: "warrior 1 pose yoga strength",
// //   },
// //   {
// //     id: "virabhadrasana-ii",
// //     sanskrit: "Virabhadrasana II",
// //     english: "Warrior II",
// //     benefit: "Strengthens legs and core",
// //     description: "Wide stance, front knee bent, arms parallel to floor, gaze over front hand.",
// //     difficulty: "Intermediate",
// //     duration: "30-60 seconds each side",
// //     imageQuery: "warrior 2 pose yoga strength",
// //   },
// //   {
// //     id: "utthita-parsvakonasana",
// //     sanskrit: "Utthita Parsvakonasana",
// //     english: "Extended Side Angle",
// //     benefit: "Stretches side body and legs",
// //     description: "From Warrior II, place forearm on thigh, extend top arm over ear.",
// //     difficulty: "Intermediate",
// //     duration: "30-60 seconds each side",
// //     imageQuery: "extended side angle yoga",
// //   },
// //   {
// //     id: "paschimottanasana",
// //     sanskrit: "Paschimottanasana",
// //     english: "Seated Forward Bend",
// //     benefit: "Calms mind and stretches spine",
// //     description: "Sit with legs extended, hinge at hips, fold forward over legs.",
// //     difficulty: "Intermediate",
// //     duration: "1-3 minutes",
// //     imageQuery: "seated forward bend yoga",
// //   },
// //   {
// //     id: "setu-bandhasana",
// //     sanskrit: "Setu Bandhasana",
// //     english: "Bridge Pose",
// //     benefit: "Strengthens glutes and opens chest",
// //     description: "Lie on back, knees bent, lift hips up, press feet and arms down.",
// //     difficulty: "Intermediate",
// //     duration: "30-60 seconds",
// //     imageQuery: "bridge pose yoga backbend",
// //   },
// //   {
// //     id: "ustrasana",
// //     sanskrit: "Ustrasana",
// //     english: "Camel Pose",
// //     benefit: "Opens heart and improves posture",
// //     description: "Kneel, place hands on lower back, gently arch back, optional to reach heels.",
// //     difficulty: "Advanced",
// //     duration: "15-30 seconds",
// //     imageQuery: "camel pose yoga backbend",
// //   },
// //   {
// //     id: "bakasana",
// //     sanskrit: "Bakasana",
// //     english: "Crow Pose",
// //     benefit: "Builds arm strength and focus",
// //     description: "Squat, place hands on floor, lean forward, lift feet off ground.",
// //     difficulty: "Advanced",
// //     duration: "10-30 seconds",
// //     imageQuery: "crow pose yoga arm balance",
// //   },
// //   {
// //     id: "sirsasana",
// //     sanskrit: "Sirsasana",
// //     english: "Headstand",
// //     benefit: "Improves circulation and focus",
// //     description: "Place forearms on floor, crown of head down, slowly lift legs up.",
// //     difficulty: "Advanced",
// //     duration: "30 seconds - 5 minutes",
// //     imageQuery: "headstand yoga inversion",
// //   },
// // ]

// // interface YogaPosesModalProps {
// //   isOpen: boolean
// //   onClose: () => void
// // }

// // export default function YogaPosesModal({ isOpen, onClose }: YogaPosesModalProps) {
// //   const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All")
// //   const [animatingPoses, setAnimatingPoses] = useState<Set<string>>(new Set())

// //   const filteredPoses =
// //     selectedDifficulty === "All" ? yogaPoses : yogaPoses.filter((pose) => pose.difficulty === selectedDifficulty)

// //   const toggleAnimation = (poseId: string) => {
// //     setAnimatingPoses((prev) => {
// //       const newSet = new Set(prev)
// //       if (newSet.has(poseId)) {
// //         newSet.delete(poseId)
// //       } else {
// //         newSet.add(poseId)
// //       }
// //       return newSet
// //     })
// //   }

// //   if (!isOpen) return null

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// //       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

// //       <div className="relative w-full max-w-6xl max-h-[90vh] glass-card rounded-3xl overflow-hidden">
// //         {/* Header */}
// //         <div className="flex items-center justify-between p-6 border-b border-white/10">
// //           <div>
// //             <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
// //               Yoga Asanas
// //             </h2>
// //             <p className="text-white/70 mt-1">Discover ancient poses for modern wellness</p>
// //           </div>
// //           <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
// //             <X className="w-6 h-6 text-white" />
// //           </button>
// //         </div>

// //         {/* Filter Tabs */}
// //         <div className="flex space-x-1 p-6 pb-4">
// //           {["All", "Beginner", "Intermediate", "Advanced"].map((difficulty) => (
// //             <button
// //               key={difficulty}
// //               onClick={() => setSelectedDifficulty(difficulty)}
// //               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
// //                 selectedDifficulty === difficulty
// //                   ? "bg-gradient-to-r from-teal-500 to-purple-500 text-white shadow-lg"
// //                   : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
// //               }`}
// //             >
// //               {difficulty}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Poses Grid */}
// //         <div className="overflow-y-auto max-h-[60vh] px-6 pb-6">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //             {filteredPoses.map((pose) => (
// //               <div
// //                 key={pose.id}
// //                 className="group glass-card rounded-2xl p-4 hover:scale-105 transition-all duration-300"
// //               >
// //                 {/* Pose Image */}
// //                 <div className="relative mb-4 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-teal-500/20 to-purple-500/20">
// //                   <img
// //                     src={`/abstract-geometric-shapes.png?height=128&width=200&query=${pose.imageQuery}`}
// //                     alt={pose.english}
// //                     className={`w-full h-full object-cover transition-all duration-500 ${
// //                       animatingPoses.has(pose.id) ? "animate-pulse scale-110" : ""
// //                     }`}
// //                   />
// //                   <button
// //                     onClick={() => toggleAnimation(pose.id)}
// //                     className="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
// //                   >
// //                     {animatingPoses.has(pose.id) ? (
// //                       <Pause className="w-4 h-4 text-white" />
// //                     ) : (
// //                       <Play className="w-4 h-4 text-white" />
// //                     )}
// //                   </button>
// //                   <div
// //                     className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
// //                       pose.difficulty === "Beginner"
// //                         ? "bg-green-500/80 text-white"
// //                         : pose.difficulty === "Intermediate"
// //                           ? "bg-yellow-500/80 text-white"
// //                           : "bg-red-500/80 text-white"
// //                     }`}
// //                   >
// //                     {pose.difficulty}
// //                   </div>
// //                 </div>

// //                 {/* Pose Info */}
// //                 <div className="space-y-2">
// //                   <div>
// //                     <h3 className="font-serif text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
// //                       {pose.sanskrit}
// //                     </h3>
// //                     <p className="text-white/70 text-sm">{pose.english}</p>
// //                   </div>

// //                   <p className="text-teal-400 text-sm font-medium">{pose.benefit}</p>

// //                   <p className="text-white/60 text-xs leading-relaxed">{pose.description}</p>

// //                   <div className="flex items-center justify-between pt-2">
// //                     <span className="text-purple-400 text-xs font-medium">{pose.duration}</span>
// //                     <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center">
// //                       <span className="text-white text-xs font-bold">ॐ</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }






















// "use client"

// import React, { useState } from "react"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// // ✅ Interface with image field
// interface YogaPose {
//   id: string
//   sanskrit: string
//   english: string
//   benefit: string
//   description: string
//   difficulty: "Beginner" | "Intermediate" | "Advanced"
//   duration: string
//   image: string
// }

// // ✅ Yoga poses with images directly in /public/
// const yogaPoses: YogaPose[] = [
//   {
//     id: "tadasana",
//     sanskrit: "Tadasana",
//     english: "Mountain Pose",
//     benefit: "Improves posture and balance",
//     description:
//       "Stand tall with feet hip-width apart, arms at sides, grounding through all four corners of feet.",
//     difficulty: "Beginner",
//     duration: "30-60 seconds",
//     image: "/TADASANA image.webp",
//   },
//   {
//     id: "bhujangasana",
//     sanskrit: "Bhujangasana",
//     english: "Cobra Pose",
//     benefit: "Strengthens spine and opens chest",
//     description:
//       "Lie on stomach, place palms under shoulders, inhale and lift chest up while keeping elbows close.",
//     difficulty: "Beginner",
//     duration: "15-30 seconds",
//     image: "/BHUJANGASANA image.webp",
//   },
//   {
//     id: "trikonasana",
//     sanskrit: "Trikonasana",
//     english: "Triangle Pose",
//     benefit: "Stretches legs, hips, and spine",
//     description:
//       "Stand with feet wide apart, extend arms, and bend sideways to touch shin or floor.",
//     difficulty: "Intermediate",
//     duration: "30-60 seconds",
//     image: "/TRIKONASANA image.jpg",
//   },
// ]

// export default function YogaPoseCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [animatingPoses, setAnimatingPoses] = useState<Set<string>>(new Set())

//   const nextPose = () => {
//     setAnimatingPoses(new Set([yogaPoses[currentIndex].id]))
//     setTimeout(() => {
//       setAnimatingPoses(new Set())
//       setCurrentIndex((prev) => (prev + 1) % yogaPoses.length)
//     }, 500)
//   }

//   const prevPose = () => {
//     setAnimatingPoses(new Set([yogaPoses[currentIndex].id]))
//     setTimeout(() => {
//       setAnimatingPoses(new Set())
//       setCurrentIndex(
//         (prev) => (prev - 1 + yogaPoses.length) % yogaPoses.length
//       )
//     }, 500)
//   }

//   const pose = yogaPoses[currentIndex]

//   return (
//     <div className="w-full flex items-center justify-center p-6">
//       <Card className="w-full max-w-3xl overflow-hidden shadow-2xl rounded-3xl border border-pink-200/50 bg-white/70 backdrop-blur-lg">
//         <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-pink-100/80 to-orange-100/80">
//           <CardTitle className="text-2xl font-bold text-pink-800">
//             {pose.english} <span className="text-sm text-pink-500">({pose.sanskrit})</span>
//           </CardTitle>
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={prevPose}
//               className="rounded-full border-pink-300 text-pink-600 hover:bg-pink-100"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={nextPose}
//               className="rounded-full border-pink-300 text-pink-600 hover:bg-pink-100"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </Button>
//           </div>
//         </CardHeader>

//         <CardContent className="grid md:grid-cols-2 gap-6 p-6 items-center">
//           {/* ✅ Pose Image */}
//           <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
//             <img
//               src={pose.image}
//               alt={pose.english}
//               className={`max-h-full max-w-full object-contain transition-all duration-500 ${
//                 animatingPoses.has(pose.id) ? "animate-pulse scale-110" : ""
//               }`}
//             />
//           </div>

//           {/* ✅ Pose Details */}
//           <div className="space-y-4 text-gray-800">
//             <p className="text-lg font-medium text-pink-700">{pose.benefit}</p>
//             <p className="text-gray-600">{pose.description}</p>
//             <div className="flex gap-4 text-sm">
//               <span className="px-3 py-1 bg-pink-100 rounded-full text-pink-700 font-medium">
//                 {pose.difficulty}
//               </span>
//               <span className="px-3 py-1 bg-orange-100 rounded-full text-orange-700 font-medium">
//                 {pose.duration}
//               </span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


"use client"

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Interface with image field
interface YogaPose {
  id: string
  sanskrit: string
  english: string
  benefit: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  image: string
}

// Yoga poses with placeholder image URLs (replace with local paths after downloading)
const yogaPoses: YogaPose[] = [
  {
    id: "tadasana",
    sanskrit: "Tadasana",
    english: "Mountain Pose",
    benefit: "Improves posture and balance",
    description: "Stand tall with feet hip-width apart, arms at sides, grounding through all four corners of feet.",
    difficulty: "Beginner",
    duration: "30-60 seconds",
    image: "https://images.pexels.com/photos/3772610/pexels-photo-3772610.jpeg", // Placeholder, download and save as /TADASANA_image.webp
  },
  {
    id: "bhujangasana",
    sanskrit: "Bhujangasana",
    english: "Cobra Pose",
    benefit: "Strengthens spine and opens chest",
    description: "Lie on stomach, place palms under shoulders, inhale and lift chest up while keeping elbows close.",
    difficulty: "Beginner",
    duration: "15-30 seconds",
    image: "https://images.pexels.com/photos/3772611/pexels-photo-3772611.jpeg", // Placeholder, download and save as /BHUJANGASANA_image.webp
  },
  {
    id: "trikonasana",
    sanskrit: "Trikonasana",
    english: "Triangle Pose",
    benefit: "Stretches legs, hips, and spine",
    description: "Stand with feet wide apart, extend arms, and bend sideways to touch shin or floor.",
    difficulty: "Intermediate",
    duration: "30-60 seconds",
    image: "https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg", // Placeholder, download and save as /TRIKONASANA_image.jpg
  },
  {
    id: "vrikshasana",
    sanskrit: "Vrikshasana",
    english: "Tree Pose",
    benefit: "Enhances balance and focus",
    description: "Stand on one leg, place the other foot on the inner thigh, and bring hands to prayer position.",
    difficulty: "Beginner",
    duration: "20-40 seconds",
    image: "https://images.pexels.com/photos/3772613/pexels-photo-3772613.jpeg", // Placeholder, download and save as /VRIKSHASANA_image.webp
  },
  {
    id: "adho-mukha-svanasana",
    sanskrit: "Adho Mukha Svanasana",
    english: "Downward Facing Dog",
    benefit: "Stretches hamstrings and strengthens arms",
    description: "Form an inverted V-shape with body, hands and feet on the ground, hips lifted.",
    difficulty: "Beginner",
    duration: "30-60 seconds",
    image: "https://images.pexels.com/photos/3772614/pexels-photo-3772614.jpeg", // Placeholder, download and save as /ADHO_MUKHA_SVANASANA_image.webp
  },
  {
    id: "virabhadrasana-i",
    sanskrit: "Virabhadrasana I",
    english: "Warrior I",
    benefit: "Strengthens legs and opens hips",
    description: "Step one foot forward, bend knee, raise arms overhead, and square hips forward.",
    difficulty: "Beginner",
    duration: "20-40 seconds",
    image: "https://images.pexels.com/photos/3772615/pexels-photo-3772615.jpeg", // Placeholder, download and save as /VIRABHADRASANA_I_image.webp
  },
  {
    id: "virabhadrasana-ii",
    sanskrit: "Virabhadrasana II",
    english: "Warrior II",
    benefit: "Improves stamina and leg strength",
    description: "Stand with legs wide, one foot forward, arms extended, gaze over front hand.",
    difficulty: "Beginner",
    duration: "30-60 seconds",
    image: "https://images.pexels.com/photos/3772616/pexels-photo-3772616.jpeg", // Placeholder, download and save as /VIRABHADRASANA_II_image.webp
  },
  {
    id: "utthita-parsvakonasana",
    sanskrit: "Utthita Parsvakonasana",
    english: "Extended Side Angle",
    benefit: "Stretches sides and strengthens legs",
    description: "From Warrior II, lower forearm to thigh, extend other arm overhead.",
    difficulty: "Intermediate",
    duration: "30-60 seconds",
    image: "https://images.pexels.com/photos/3772617/pexels-photo-3772617.jpeg", // Placeholder, download and save as /UTTHITA_PARSVAKONASANA_image.webp
  },
  {
    id: "balasana",
    sanskrit: "Balasana",
    english: "Child's Pose",
    benefit: "Relieves stress and stretches hips",
    description: "Kneel, sit back on heels, fold forward, and rest forehead on ground.",
    difficulty: "Beginner",
    duration: "30-90 seconds",
    image: "https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg", // Placeholder, download and save as /BALASANA_image.webp
  },
  {
    id: "setu-bandhasana",
    sanskrit: "Setu Bandhasana",
    english: "Bridge Pose",
    benefit: "Strengthens back and opens chest",
    description: "Lie on back, bend knees, lift hips toward ceiling, clasp hands under back.",
    difficulty: "Beginner",
    duration: "20-40 seconds",
    image: "https://images.pexels.com/photos/3772619/pexels-photo-3772619.jpeg", // Placeholder, download and save as /SETU_BANDHASANA_image.webp
  },
  {
    id: "dhanurasana",
    sanskrit: "Dhanurasana",
    english: "Bow Pose",
    benefit: "Improves flexibility and strengthens back",
    description: "Lie on stomach, grab ankles, lift chest and thighs upward.",
    difficulty: "Intermediate",
    duration: "15-30 seconds",
    image: "https://images.pexels.com/photos/3772620/pexels-photo-3772620.jpeg", // Placeholder, download and save as /DHANURASANA_image.webp
  },
  {
    id: "paschimottanasana",
    sanskrit: "Paschimottanasana",
    english: "Seated Forward Bend",
    benefit: "Stretches hamstrings and calms mind",
    description: "Sit with legs extended, reach forward to touch feet, hinge at hips.",
    difficulty: "Intermediate",
    duration: "30-60 seconds",
    image: "https://images.pexels.com/photos/3772621/pexels-photo-3772621.jpeg", // Placeholder, download and save as /PASCHIMOTTANASANA_image.webp
  },
  {
    id: "ardha-matsyendrasana",
    sanskrit: "Ardha Matsyendrasana",
    english: "Half Lord of the Fishes",
    benefit: "Improves digestion and spinal flexibility",
    description: "Sit with one leg bent, twist torso, and hold opposite knee.",
    difficulty: "Intermediate",
    duration: "20-40 seconds",
    image: "https://images.pexels.com/photos/3772622/pexels-photo-3772622.jpeg", // Placeholder, download and save as /ARDHA_MATSYENDRASANA_image.webp
  },
  {
    id: "savasana",
    sanskrit: "Savasana",
    english: "Corpse Pose",
    benefit: "Promotes relaxation and reduces stress",
    description: "Lie flat on back, arms at sides, close eyes, and breathe deeply.",
    difficulty: "Beginner",
    duration: "5-10 minutes",
    image: "https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg", // Placeholder, download and save as /SAVASANA_image.webp
  },
  {
    id: "utkatasana",
    sanskrit: "Utkatasana",
    english: "Chair Pose",
    benefit: "Strengthens thighs and improves balance",
    description: "Stand, bend knees, lower hips as if sitting, raise arms overhead.",
    difficulty: "Intermediate",
    duration: "20-40 seconds",
    image: "https://images.pexels.com/photos/3772624/pexels-photo-3772624.jpeg", // Placeholder, download and save as /UTKATASANA_image.webp
  },
]

export default function YogaPoseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animatingPoses, setAnimatingPoses] = useState<Set<string>>(new Set())

  const nextPose = () => {
    setAnimatingPoses(new Set([yogaPoses[currentIndex].id]))
    setTimeout(() => {
      setAnimatingPoses(new Set())
      setCurrentIndex((prev) => (prev + 1) % yogaPoses.length)
    }, 500)
  }

  const prevPose = () => {
    setAnimatingPoses(new Set([yogaPoses[currentIndex].id]))
    setTimeout(() => {
      setAnimatingPoses(new Set())
      setCurrentIndex((prev) => (prev - 1 + yogaPoses.length) % yogaPoses.length)
    }, 500)
  }

  const pose = yogaPoses[currentIndex]

  return (
    <div className="w-full flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl overflow-hidden shadow-2xl rounded-3xl border border-pink-200/50 bg-white/70 backdrop-blur-lg">
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-pink-100/80 to-orange-100/80">
          <CardTitle className="text-2xl font-bold text-pink-800">
            {pose.english} <span className="text-sm text-pink-500">({pose.sanskrit})</span>
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPose}
              className="rounded-full border-pink-300 text-pink-600 hover:bg-pink-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPose}
              className="rounded-full border-pink-300 text-pink-600 hover:bg-pink-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-6 p-6 items-center">
          {/* Pose Image */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
            <img
              src={pose.image}
              alt={pose.english}
              className={`max-h-full max-w-full object-contain transition-all duration-500 ${
                animatingPoses.has(pose.id) ? "animate-pulse scale-110" : ""
              }`}
            />
          </div>

          {/* Pose Details */}
          <div className="space-y-4 text-gray-800">
            <p className="text-lg font-medium text-pink-700">{pose.benefit}</p>
            <p className="text-gray-600">{pose.description}</p>
            <div className="flex gap-4 text-sm">
              <span className="px-3 py-1 bg-pink-100 rounded-full text-pink-700 font-medium">
                {pose.difficulty}
              </span>
              <span className="px-3 py-1 bg-orange-100 rounded-full text-orange-700 font-medium">
                {pose.duration}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
