"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { GradientText } from "@/components/gradient-text"

interface DoshaInfo {
  name: string
  element: string
  qualities: string[]
  description: string
  color: string
  gradient: string
  symbol: string
}

const doshaData: Record<string, DoshaInfo> = {
  vata: {
    name: "Vata",
    element: "Air & Space",
    qualities: ["Creative", "Energetic", "Quick-thinking", "Adaptable"],
    description:
      "You are governed by movement and change. Your creative spirit and quick mind are your greatest strengths. Focus on grounding practices and warm, nourishing foods to maintain balance.",
    color: "from-blue-400 to-cyan-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
    symbol: "🌪️",
  },
  pitta: {
    name: "Pitta",
    element: "Fire & Water",
    qualities: ["Focused", "Determined", "Intelligent", "Natural Leader"],
    description:
      "You are driven by transformation and achievement. Your sharp intellect and leadership abilities shine bright. Embrace cooling practices and moderate activities to maintain your inner fire.",
    color: "from-orange-400 to-red-400",
    gradient: "from-orange-500/20 to-red-500/20",
    symbol: "🔥",
  },
  kapha: {
    name: "Kapha",
    element: "Earth & Water",
    qualities: ["Stable", "Compassionate", "Patient", "Nurturing"],
    description:
      "You embody strength and stability. Your calm nature and caring heart create harmony around you. Engage in stimulating activities and light, warm foods to energize your gentle spirit.",
    color: "from-green-400 to-emerald-400",
    gradient: "from-green-500/20 to-emerald-500/20",
    symbol: "🌱",
  },
}

export default function DoshaResultPage() {
  const [doshaType, setDoshaType] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const result = localStorage.getItem("doshaResult")
    if (result) {
      setDoshaType(result)
      setTimeout(() => setShowResult(true), 500)
      setTimeout(() => setShowDescription(true), 1500)
    } else {
      router.push("/dosha-quiz")
    }
  }, [router])

  const dosha = doshaData[doshaType]

  if (!dosha) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />

      {/* Flowing Aura Lines */}
      <div className="absolute inset-0">
        <div className={`aura-flow aura-flow-1 bg-gradient-to-r ${dosha.color}`}></div>
        <div className={`aura-flow aura-flow-2 bg-gradient-to-r ${dosha.color}`}></div>
        <div className={`aura-flow aura-flow-3 bg-gradient-to-r ${dosha.color}`}></div>
      </div>

      {/* Central Dosha Symbol */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={`dosha-mandala bg-gradient-to-r ${dosha.gradient}`}>
          <div className="dosha-symbol">
            <div className={`symbol-glow bg-gradient-to-r ${dosha.color}`}></div>
            <div className="symbol-text text-6xl">{dosha.symbol}</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div
          className={`text-center transition-all duration-2000 ${showResult ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-8">
            <p className="text-xl text-slate-300 mb-4">Your Dominant Dosha is</p>
            <GradientText className={`text-7xl md:text-9xl font-serif font-bold mb-4 bg-gradient-to-r ${dosha.color}`}>
              {dosha.name}
            </GradientText>
            <p className="text-2xl text-slate-400 font-light">{dosha.element}</p>
          </div>

          <div
            className={`transition-all duration-2000 delay-1000 ${showDescription ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div
              className={`bg-gradient-to-r ${dosha.gradient} backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto mb-8`}
            >
              <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-6">{dosha.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {dosha.qualities.map((quality, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transform hover:scale-105 transition-all duration-300"
                  >
                    <p className="text-sm font-medium text-slate-200">{quality}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push("/wellness-dashboard")}
                className={`group relative px-8 py-4 bg-gradient-to-r ${dosha.color} rounded-2xl font-semibold text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <span className="relative z-10">Go to My Wellness Dashboard</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Prism Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`prism-element prism-1 bg-gradient-to-r ${dosha.color}`}></div>
        <div className={`prism-element prism-2 bg-gradient-to-r ${dosha.color}`}></div>
        <div className={`prism-element prism-3 bg-gradient-to-r ${dosha.color}`}></div>
      </div>

      <style jsx>{`
        .aura-flow {
          position: absolute;
          width: 2px;
          height: 200px;
          opacity: 0.3;
          animation: auraFlow 10s infinite linear;
        }
        
        .aura-flow-1 {
          left: 15%;
          animation-delay: 0s;
        }
        
        .aura-flow-2 {
          left: 50%;
          animation-delay: 3s;
        }
        
        .aura-flow-3 {
          right: 15%;
          animation-delay: 6s;
        }

        @keyframes auraFlow {
          0% {
            top: -200px;
            opacity: 0;
            transform: rotate(0deg);
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            top: 100vh;
            opacity: 0;
            transform: rotate(360deg);
          }
        }

        .dosha-mandala {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: mandalaRotate 20s infinite linear;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .dosha-symbol {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .symbol-glow {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          opacity: 0.3;
          animation: symbolPulse 3s infinite ease-in-out;
        }

        .symbol-text {
          position: relative;
          z-10;
          animation: symbolFloat 4s infinite ease-in-out;
        }

        @keyframes mandalaRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes symbolPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }

        @keyframes symbolFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .prism-element {
          position: absolute;
          width: 60px;
          height: 60px;
          opacity: 0.2;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          animation: prismFloat 8s infinite ease-in-out;
        }

        .prism-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .prism-2 {
          top: 30%;
          right: 25%;
          animation-delay: 2s;
        }

        .prism-3 {
          bottom: 25%;
          left: 30%;
          animation-delay: 4s;
        }

        @keyframes prismFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2; 
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 0.4; 
          }
        }
      `}</style>
    </div>
  )
}
