import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Side - Video */}
          <div className="relative h-[400px] lg:h-auto lg:min-h-[520px] overflow-hidden">
            <img
              src="/herat-cityscape.jpg"
              alt="Herat Architecture"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 flex items-center justify-center transition-all duration-300 border border-white/30 group">
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1538] to-[#C9A96E] flex items-center justify-center text-white text-xs font-bold">
                H
              </div>
              <span className="text-white text-sm font-medium tracking-wide">@visitherat</span>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="bg-[#1a1a2e] p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Watch & Follow</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Herat City: Poetry in Motion
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 text-[15px]">
              Experience the timeless beauty of Herat, where turquoise minarets meet centuries-old caravanserais and
              fragrant gardens. Explore artisan workshops, taste saffron-infused dishes, and listen to traditional music
              drifting through the Old City. Every corner shares a story from Afghanistan&apos;s Silk Road heritage.
            </p>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-gray-900 w-fit bg-transparent rounded-full px-8 py-5 tracking-wider text-xs font-semibold transition-all duration-300"
            >
              FOLLOW US ON INSTAGRAM
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
