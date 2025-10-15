import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Video */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl h-[500px]">
            <img
              src="/herat-arch.jpg"
              alt="Herat Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors">
                <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/80 rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                f
              </div>
              <span className="text-white text-sm font-semibold">visitherat</span>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="bg-[#2C2C2C] p-12 rounded-lg h-[500px] flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Herat City: Poetry in Motion
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              Experience the timeless beauty of Herat, where turquoise minarets meet centuries-old caravanserais and
              fragrant gardens. Explore artisan workshops, taste saffron-infused dishes, and listen to traditional music
              drifting through the Old City. Every corner shares a story from Afghanistan's Silk Road heritage.
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 w-fit bg-transparent"
            >
              STAY SOCIAL - FOLLOW US ON INSTAGRAM
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
