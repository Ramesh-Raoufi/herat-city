import { Compass, MapPin, PlaneTakeoff } from "lucide-react"

const highlights = [
  {
    icon: MapPin,
    title: "Central Coordinates",
    description: "34.3482° N, 62.1997° E — right in the historical heart of western Afghanistan.",
  },
  {
    icon: PlaneTakeoff,
    title: "Nearest Airport",
    description: "Herat International Airport (HEA), 10 km east of the city center, with regional connections.",
  },
  {
    icon: Compass,
    title: "Silk Road Gateway",
    description: "Easy day trips to the Qala-e Ikhtiyaruddin Citadel, Friday Mosque, and Herat Bazaar Quarter.",
  },
]

export function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F4]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="text-[#8B1538] text-sm font-semibold tracking-[0.2em] uppercase">Plan Your Arrival</span>
            <div className="h-px w-12 bg-[#C9A96E]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Where to Find Herat City</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Herat rests along the storied Silk Road, framed by desert horizons and lush valleys fed by the Hari River.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/40 group">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=62.155%2C34.305%2C62.265%2C34.385&layer=mapnik&marker=34.348%2C62.1997"
              title="Map of Herat City"
              className="w-full aspect-[4/3] group-hover:opacity-90 transition-opacity"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed mb-8">
              The Old City is compact and walkable, with centuries-old caravanserais leading to artisan workshops and
              saffron markets. Use this guide to orient yourself before you arrive.
            </p>

            <div className="grid gap-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm border border-gray-50 hover:shadow-md hover:border-[#8B1538]/10 transition-all duration-300 group cursor-pointer">
                  <div className="rounded-xl bg-gradient-to-br from-[#8B1538]/10 to-[#C9A96E]/10 text-[#8B1538] p-3.5 group-hover:from-[#8B1538] group-hover:to-[#8B1538] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
