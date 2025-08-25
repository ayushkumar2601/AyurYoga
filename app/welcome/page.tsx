
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import FloatingNavbar from "@/components/floating-navbar"
import { AuroraBackground } from "@/components/aurora-background"
import { GradientText } from "@/components/gradient-text"
import CustomCursor from "@/components/CustomCursor"

export default function WelcomePage() {
  const [hover, setHover] = useState(false);
  const [showContent, setShowContent] = useState(false)
  const [showMantra, setShowMantra] = useState(false)
  const [blurActive, setBlurActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 500)
    const timer2 = setTimeout(() => setShowMantra(true), 1500)
    const timer3 = setTimeout(() => setBlurActive(true), 1000)
    const timer4 = setTimeout(() => {
      router.push("/dosha-quiz")
    }, 6000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-100 to-orange-50 relative overflow-hidden">
      <FloatingNavbar />
      <AuroraBackground />
      <CustomCursor isHover={hover}/>

      <div className={`absolute inset-0 blur-fade-in ${blurActive ? "active" : ""}`} />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="lotus-bloom">
          <div className="lotus-petal lotus-petal-1"></div>
          <div className="lotus-petal lotus-petal-2"></div>
          <div className="lotus-petal lotus-petal-3"></div>
          <div className="lotus-petal lotus-petal-4"></div>
          <div className="lotus-petal lotus-petal-5"></div>
          <div className="lotus-petal lotus-petal-6"></div>
          <div className="lotus-center"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div
          className={`text-center transition-all duration-2000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-8">
            <GradientText className="text-6xl md:text-8xl font-serif font-bold mb-4">Welcome</GradientText>
            <p className="text-xl md:text-2xl text-gray-700 font-light">to your spiritual wellness journey</p>
          </div>

          <div
            className={`transition-all duration-2000 delay-1000 ${showMantra ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="bg-orange-100/50 backdrop-blur-md rounded-2xl p-8 border border-pink-200/50 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed italic">
                "The body benefits from movement, and the mind benefits from stillness."
              </p>
              <p className="text-sm text-gray-600 mt-4">- Ancient Wisdom</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-400"></div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Preparing your personalized experience...</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lotus-bloom {
          position: relative;
          width: 120px;
          height: 120px;
          animation: lotusGlow 4s infinite ease-in-out;
        }

        .lotus-petal {
          position: absolute;
          width: 40px;
          height: 60px;
          background: linear-gradient(45deg, rgba(244, 114, 182, 0.4), rgba(249, 115, 22, 0.4));
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          transform-origin: center bottom;
        }

        .lotus-petal-1 { transform: rotate(0deg) translateY(-30px); animation: petalBloom 3s infinite ease-in-out; }
        .lotus-petal-2 { transform: rotate(60deg) translateY(-30px); animation: petalBloom 3s infinite ease-in-out 0.2s; }
        .lotus-petal-3 { transform: rotate(120deg) translateY(-30px); animation: petalBloom 3s infinite ease-in-out 0.4s; }
        .lotus-petal-4 { transform: rotate(180deg) translateY(-30px); animation: petalBloom 3s infinite ease-in-out 0.6s; }
        .lotus-petal-5 { transform: rotate(240deg) translateY(-30px); animation: petalBloom 3s infinite ease-in-out 0.8s; }
        .lotus-petal-6 { transform: rotate(300deg) translateY(-30px); animation: petalBloom 3s infinite ease-in-out 1s; }

        .lotus-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(255, 167, 38, 0.8), rgba(244, 114, 182, 0.4));
          border-radius: 50%;
          animation: centerPulse 2s infinite ease-in-out;
        }

        @keyframes lotusGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(244, 114, 182, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(249, 115, 22, 0.5)); }
        }

        @keyframes petalBloom {
          0%, 100% { transform: rotate(var(--rotation, 0deg)) translateY(-30px) scale(1); }
          50% { transform: rotate(var(--rotation, 0deg)) translateY(-35px) scale(1.1); }
        }

        @keyframes centerPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  )
}