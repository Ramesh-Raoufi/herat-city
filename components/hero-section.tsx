"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-end pb-20">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 text-balance">{slides[currentSlide].title}</h2>
          <p className="text-white/90 text-lg mb-6 text-balance">{slides[currentSlide].subtitle}</p>
          <Button className="bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-6 text-sm font-semibold">
            {slides[currentSlide].cta}
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <button
          className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
