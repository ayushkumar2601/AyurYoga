"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/gradient-text"

interface ContentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  items: string[]
  icon: string
  gradient: string
}

export function ContentModal({ isOpen, onClose, title, items, icon, gradient }: ContentModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-slate-900/95 backdrop-blur-md rounded-3xl border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center text-2xl`}
              >
                {icon}
              </div>
              <GradientText className="text-2xl font-serif font-bold">{title}</GradientText>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`} />
                <p className="text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-md border-t border-white/10 p-6">
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-4">Practice these recommendations consistently for best results</p>
            <Button
              onClick={onClose}
              className={`bg-gradient-to-r ${gradient} hover:opacity-90 text-white font-semibold px-8 py-2`}
            >
              Got it!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
