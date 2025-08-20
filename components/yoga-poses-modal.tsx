"use client"

import { useState } from "react"
import { X, Play, Pause } from "lucide-react"

interface YogaPose {
  id: string
  sanskrit: string
  english: string
  benefit: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  imageQuery: string
}

const yogaPoses: YogaPose[] = [
  {
    id: "tadasana",
    sanskrit: "Tadasana",
    english: "Mountain Pose",
    benefit: "Improves posture and balance",
    description: "Stand tall with feet hip-width apart, arms at sides, grounding through all four corners of feet.",
    difficulty: "Beginner",
    duration: "30-60 seconds",
    imageQuery: "mountain pose yoga silhouette",
  },
  {
    id: "bhujangasana",
    sanskrit: "Bhujangasana",
    english: "Cobra Pose",
    benefit: "Strengthens spine and opens chest",
    description: "Lie face down, place palms under shoulders, gently lift chest while keeping hips grounded.",
    difficulty: "Beginner",
    duration: "15-30 seconds",
    imageQuery: "cobra pose yoga silhouette",
  },
  {
    id: "trikonasana",
    sanskrit: "Trikonasana",
    english: "Triangle Pose",
    benefit: "Stretches legs and improves flexibility",
    description: "Stand wide, turn right foot out, reach right hand to floor, extend left arm up.",
    difficulty: "Beginner",
    duration: "30-60 seconds each side",
    imageQuery: "triangle pose yoga silhouette",
  },
  {
    id: "adho-mukha-svanasana",
    sanskrit: "Adho Mukha Svanasana",
    english: "Downward Dog",
    benefit: "Strengthens arms and stretches hamstrings",
    description: "From hands and knees, tuck toes, lift hips up and back, creating inverted V shape.",
    difficulty: "Beginner",
    duration: "30-60 seconds",
    imageQuery: "downward dog yoga silhouette",
  },
  {
    id: "savasana",
    sanskrit: "Savasana",
    english: "Corpse Pose",
    benefit: "Deep relaxation and stress relief",
    description: "Lie flat on back, arms at sides, palms up, close eyes and focus on breath.",
    difficulty: "Beginner",
    duration: "5-10 minutes",
    imageQuery: "corpse pose yoga relaxation",
  },
  {
    id: "vrikshasana",
    sanskrit: "Vrikshasana",
    english: "Tree Pose",
    benefit: "Improves balance and concentration",
    description: "Stand on left foot, place right foot on inner left thigh, hands in prayer position.",
    difficulty: "Beginner",
    duration: "30-60 seconds each side",
    imageQuery: "tree pose yoga balance",
  },
  {
    id: "balasana",
    sanskrit: "Balasana",
    english: "Child's Pose",
    benefit: "Calms mind and relieves stress",
    description: "Kneel, sit back on heels, fold forward with arms extended or by sides.",
    difficulty: "Beginner",
    duration: "1-3 minutes",
    imageQuery: "child pose yoga relaxation",
  },
  {
    id: "marjaryasana",
    sanskrit: "Marjaryasana",
    english: "Cat Pose",
    benefit: "Increases spine flexibility",
    description: "On hands and knees, arch back up like a cat, tuck chin to chest.",
    difficulty: "Beginner",
    duration: "30 seconds",
    imageQuery: "cat pose yoga stretch",
  },
  {
    id: "bitilasana",
    sanskrit: "Bitilasana",
    english: "Cow Pose",
    benefit: "Stretches front body and neck",
    description: "On hands and knees, drop belly, lift chest and tailbone, look up gently.",
    difficulty: "Beginner",
    duration: "30 seconds",
    imageQuery: "cow pose yoga stretch",
  },
  {
    id: "uttanasana",
    sanskrit: "Uttanasana",
    english: "Forward Fold",
    benefit: "Calms nervous system",
    description: "Stand, hinge at hips, fold forward with soft knees, let arms hang.",
    difficulty: "Beginner",
    duration: "30-60 seconds",
    imageQuery: "forward fold yoga stretch",
  },
  {
    id: "virabhadrasana-i",
    sanskrit: "Virabhadrasana I",
    english: "Warrior I",
    benefit: "Builds strength and confidence",
    description: "Lunge position, back foot angled, arms reach up, square hips forward.",
    difficulty: "Intermediate",
    duration: "30-60 seconds each side",
    imageQuery: "warrior 1 pose yoga strength",
  },
  {
    id: "virabhadrasana-ii",
    sanskrit: "Virabhadrasana II",
    english: "Warrior II",
    benefit: "Strengthens legs and core",
    description: "Wide stance, front knee bent, arms parallel to floor, gaze over front hand.",
    difficulty: "Intermediate",
    duration: "30-60 seconds each side",
    imageQuery: "warrior 2 pose yoga strength",
  },
  {
    id: "utthita-parsvakonasana",
    sanskrit: "Utthita Parsvakonasana",
    english: "Extended Side Angle",
    benefit: "Stretches side body and legs",
    description: "From Warrior II, place forearm on thigh, extend top arm over ear.",
    difficulty: "Intermediate",
    duration: "30-60 seconds each side",
    imageQuery: "extended side angle yoga",
  },
  {
    id: "paschimottanasana",
    sanskrit: "Paschimottanasana",
    english: "Seated Forward Bend",
    benefit: "Calms mind and stretches spine",
    description: "Sit with legs extended, hinge at hips, fold forward over legs.",
    difficulty: "Intermediate",
    duration: "1-3 minutes",
    imageQuery: "seated forward bend yoga",
  },
  {
    id: "setu-bandhasana",
    sanskrit: "Setu Bandhasana",
    english: "Bridge Pose",
    benefit: "Strengthens glutes and opens chest",
    description: "Lie on back, knees bent, lift hips up, press feet and arms down.",
    difficulty: "Intermediate",
    duration: "30-60 seconds",
    imageQuery: "bridge pose yoga backbend",
  },
  {
    id: "ustrasana",
    sanskrit: "Ustrasana",
    english: "Camel Pose",
    benefit: "Opens heart and improves posture",
    description: "Kneel, place hands on lower back, gently arch back, optional to reach heels.",
    difficulty: "Advanced",
    duration: "15-30 seconds",
    imageQuery: "camel pose yoga backbend",
  },
  {
    id: "bakasana",
    sanskrit: "Bakasana",
    english: "Crow Pose",
    benefit: "Builds arm strength and focus",
    description: "Squat, place hands on floor, lean forward, lift feet off ground.",
    difficulty: "Advanced",
    duration: "10-30 seconds",
    imageQuery: "crow pose yoga arm balance",
  },
  {
    id: "sirsasana",
    sanskrit: "Sirsasana",
    english: "Headstand",
    benefit: "Improves circulation and focus",
    description: "Place forearms on floor, crown of head down, slowly lift legs up.",
    difficulty: "Advanced",
    duration: "30 seconds - 5 minutes",
    imageQuery: "headstand yoga inversion",
  },
]

interface YogaPosesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function YogaPosesModal({ isOpen, onClose }: YogaPosesModalProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All")
  const [animatingPoses, setAnimatingPoses] = useState<Set<string>>(new Set())

  const filteredPoses =
    selectedDifficulty === "All" ? yogaPoses : yogaPoses.filter((pose) => pose.difficulty === selectedDifficulty)

  const toggleAnimation = (poseId: string) => {
    setAnimatingPoses((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(poseId)) {
        newSet.delete(poseId)
      } else {
        newSet.add(poseId)
      }
      return newSet
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[90vh] glass-card rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Yoga Asanas
            </h2>
            <p className="text-white/70 mt-1">Discover ancient poses for modern wellness</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-1 p-6 pb-4">
          {["All", "Beginner", "Intermediate", "Advanced"].map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedDifficulty === difficulty
                  ? "bg-gradient-to-r from-teal-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>

        {/* Poses Grid */}
        <div className="overflow-y-auto max-h-[60vh] px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPoses.map((pose) => (
              <div
                key={pose.id}
                className="group glass-card rounded-2xl p-4 hover:scale-105 transition-all duration-300"
              >
                {/* Pose Image */}
                <div className="relative mb-4 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-teal-500/20 to-purple-500/20">
                  <img
                    src={`/abstract-geometric-shapes.png?height=128&width=200&query=${pose.imageQuery}`}
                    alt={pose.english}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      animatingPoses.has(pose.id) ? "animate-pulse scale-110" : ""
                    }`}
                  />
                  <button
                    onClick={() => toggleAnimation(pose.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    {animatingPoses.has(pose.id) ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <div
                    className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
                      pose.difficulty === "Beginner"
                        ? "bg-green-500/80 text-white"
                        : pose.difficulty === "Intermediate"
                          ? "bg-yellow-500/80 text-white"
                          : "bg-red-500/80 text-white"
                    }`}
                  >
                    {pose.difficulty}
                  </div>
                </div>

                {/* Pose Info */}
                <div className="space-y-2">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                      {pose.sanskrit}
                    </h3>
                    <p className="text-white/70 text-sm">{pose.english}</p>
                  </div>

                  <p className="text-teal-400 text-sm font-medium">{pose.benefit}</p>

                  <p className="text-white/60 text-xs leading-relaxed">{pose.description}</p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-purple-400 text-xs font-medium">{pose.duration}</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">ॐ</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
