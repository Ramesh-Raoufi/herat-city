"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"

const slides = [
  {
    image: "/herat-cityscape.jpg",
    title: "Fall in Love with Herat",
    subtitle:
      "Wander beneath the blue-tiled minarets, fragrant gardens, and lively bazaars that make Herat Afghanistan's cultural heart.",
    cta: "PLAN YOUR TRIP",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
          animation: "slowZoom 20s ease-in-out infinite alternate",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-end pb-28 lg:pb-32">
        <div className="max-w-2xl">
          <div className="inline-block mb-4">
            <span className="text-[#C9A96E] text-sm font-semibold tracking-[0.3em] uppercase border border-[#C9A96E]/40 px-4 py-1.5 rounded-full animate-fade-in">
              Discover Afghanistan&apos;s Silk Road Gem
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-5 leading-[1.1] tracking-tight animate-fade-in-up">
            {slides[currentSlide].title}
          </h2>
          <p className="text-white/85 text-lg lg:text-xl mb-8 leading-relaxed max-w-xl animate-fade-in-up delay-200">
            {slides[currentSlide].subtitle}
          </p>
          <Button className="bg-[#8B1538] hover:bg-[#6B1028] text-white px-10 py-6 text-sm font-semibold tracking-wider rounded-full shadow-lg shadow-[#8B1538]/30 hover:shadow-[#8B1538]/50 transition-all duration-300 animate-fade-in-up delay-300">
            {slides[currentSlide].cta}
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button
          className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/70 transition-all duration-300 backdrop-blur-sm"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/70 transition-all duration-300 backdrop-blur-sm"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-gentle-pulse">
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/50" />
      </div>

      {/* Ken Burns keyframes injected inline */}
      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  )
}
