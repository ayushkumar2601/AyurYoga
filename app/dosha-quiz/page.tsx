"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { GradientText } from "@/components/gradient-text"
import { getDoshaFromScores } from "@/lib/dosha-data"
import CustomCursor from "@/components/CustomCursor"

interface Question {
  id: number
  question: string
  options: {
    text: string
    dosha: "vata" | "pitta" | "kapha"
    points: number
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "What best describes your body frame?",
    options: [
      { text: "Thin, light, delicate with prominent joints", dosha: "vata", points: 3 },
      { text: "Medium, muscular, athletic with good proportions", dosha: "pitta", points: 3 },
      { text: "Large, heavy, solid with broad shoulders/hips", dosha: "kapha", points: 3 },
    ],
  },
  {
    id: 2,
    question: "How is your appetite and digestion?",
    options: [
      { text: "Variable appetite, sometimes forget to eat, irregular digestion", dosha: "vata", points: 3 },
      { text: "Strong appetite, get irritable when hungry, good digestion", dosha: "pitta", points: 3 },
      { text: "Steady appetite, can skip meals easily, slow digestion", dosha: "kapha", points: 3 },
    ],
  },
  {
    id: 3,
    question: "What describes your sleep pattern?",
    options: [
      { text: "Light sleeper, wake up easily, active dreams", dosha: "vata", points: 3 },
      { text: "Sound sleeper, need 6-8 hours, moderate dreams", dosha: "pitta", points: 3 },
      { text: "Deep sleeper, love long sleep, few dreams", dosha: "kapha", points: 3 },
    ],
  },
  {
    id: 4,
    question: "How do you handle stress and emotions?",
    options: [
      { text: "Get anxious, worried, and overwhelmed quickly", dosha: "vata", points: 3 },
      { text: "Become irritated, angry, and impatient", dosha: "pitta", points: 3 },
      { text: "Withdraw, become sluggish, and avoid confrontation", dosha: "kapha", points: 3 },
    ],
  },
  {
    id: 5,
    question: "What's your preferred weather and climate?",
    options: [
      { text: "Warm, humid weather; dislike cold and wind", dosha: "vata", points: 3 },
      { text: "Cool, dry weather; dislike heat and humidity", dosha: "pitta", points: 3 },
      { text: "Warm, dry weather; dislike cold and dampness", dosha: "kapha", points: 3 },
    ],
  },
  {
    id: 6,
    question: "How do you make decisions?",
    options: [
      { text: "Quickly but change mind often, indecisive", dosha: "vata", points: 3 },
      { text: "Decisively after analysis, stick to decisions", dosha: "pitta", points: 3 },
      { text: "Slowly and deliberately, resist change", dosha: "kapha", points: 3 },
    ],
  },
  {
    id: 7,
    question: "What's your energy level and activity pattern?",
    options: [
      { text: "Energy comes in bursts, then crashes, very active", dosha: "vata", points: 3 },
      { text: "Intense and focused energy, moderate activity", dosha: "pitta", points: 3 },
      { text: "Steady and enduring energy, prefer gentle activity", dosha: "kapha", points: 3 },
    ],
  },
  {
    id: 8,
    question: "How do you learn and remember information?",
    options: [
      { text: "Learn quickly but forget easily, creative thinking", dosha: "vata", points: 3 },
      { text: "Learn moderately fast with good retention, analytical", dosha: "pitta", points: 3 },
      { text: "Learn slowly but never forget, methodical approach", dosha: "kapha", points: 3 },
    ],
  },
]

export default function DoshaQuizPage() {
  const [hover, setHover] = useState(false);//this one added
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ dosha: string; points: number }[]>([])
  const [showQuestion, setShowQuestion] = useState(true)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()

  const handleAnswer = (option: { text: string; dosha: string; points: number }, optionIndex: number) => {
    if (isTransitioning) return // Prevent multiple clicks during transition

    setSelectedOption(optionIndex)
    setIsTransitioning(true)

    setTimeout(() => {
      const newAnswers = [...answers, { dosha: option.dosha, points: option.points }]
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        // Move to next question
        setShowQuestion(false)
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedOption(null)
          setIsTransitioning(false)
          setShowQuestion(true)
        }, 500)
      } else {
        // Quiz completed, calculate result
        const doshaScores = {
          vata: newAnswers.filter((a) => a.dosha === "vata").reduce((sum, a) => sum + a.points, 0),
          pitta: newAnswers.filter((a) => a.dosha === "pitta").reduce((sum, a) => sum + a.points, 0),
          kapha: newAnswers.filter((a) => a.dosha === "kapha").reduce((sum, a) => sum + a.points, 0),
        }

        const dominantDosha = getDoshaFromScores(doshaScores)

        localStorage.setItem("doshaResult", dominantDosha)
        localStorage.setItem("doshaScores", JSON.stringify(doshaScores))

        setTimeout(() => {
          setShowQuestion(false)
          setTimeout(() => {
            router.push("/dosha-result")
          }, 800)
        }, 1000)
      }
    }, 300)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <CustomCursor isHover={hover}/>

      {/* Enhanced Progress Chakras */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-500 ${
                index < currentQuestion
                  ? "bg-gradient-to-r from-teal-400 to-purple-400 border-teal-400 shadow-lg shadow-teal-400/50"
                  : index === currentQuestion
                    ? "bg-gradient-to-r from-teal-400/50 to-purple-400/50 border-teal-400/50 shadow-md shadow-teal-400/30 animate-pulse"
                    : "border-slate-600 bg-slate-800"
              }`}
            >
              <div
                className={`w-full h-full rounded-full ${
                  index <= currentQuestion ? "bg-white/20" : ""
                } ${index === currentQuestion ? "animate-pulse" : ""}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-purple-400 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-slate-400 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32">
        <div
          className={`transition-all duration-500 ${
            showQuestion ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <GradientText className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {questions[currentQuestion].question}
            </GradientText>
            <p className="text-slate-400 text-lg">Choose the option that best describes you</p>
          </div>

          <div className="grid gap-6 max-w-2xl mx-auto">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option, index)}
                disabled={isTransitioning}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed ${
                  selectedOption === index
                    ? "bg-gradient-to-r from-teal-500/20 to-purple-500/20 border-teal-400 shadow-lg shadow-teal-400/25 scale-105"
                    : "bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/20"
                } ${isTransitioning && selectedOption !== index ? "opacity-50" : ""}`}
              >
                <div className="relative z-10">
                  <p className="text-lg text-slate-200 font-medium text-left">{option.text}</p>
                </div>

                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/0 to-purple-400/0 group-hover:from-teal-400/10 group-hover:to-purple-400/10 transition-all duration-300" />

                {/* Enhanced selection indicator */}
                {selectedOption === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {currentQuestion === questions.length - 1 && (
            <div className="text-center mt-8">
              <p className="text-slate-400 text-sm">Final question - your dosha assessment is almost complete!</p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced mystical floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mystical-orb mystical-orb-1"></div>
        <div className="mystical-orb mystical-orb-2"></div>
        <div className="mystical-orb mystical-orb-3"></div>
      </div>

      <style jsx>{`
        .mystical-orb {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1), transparent);
          animation: float 6s infinite ease-in-out;
        }

        .mystical-orb-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .mystical-orb-2 {
          top: 60%;
          right: 15%;
          animation-delay: 2s;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent);
        }

        .mystical-orb-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
