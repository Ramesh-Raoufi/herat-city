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
    description: "Herat International Airport (HEAT), 10 km east of the city center, with regional connections.",
  },
  {
    icon: Compass,
    title: "Silk Road Gateway",
    description: "Easy day trips to the Qala-e Ikhtiyaruddin Citadel, Friday Mosque, and Herat Bazaar Quarter.",
  },
]

export function LocationSection() {
  return (
    <section className="py-16 bg-[#F5F3EE]">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/40">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=62.155%2C34.305%2C62.265%2C34.385&layer=mapnik&marker=34.348%2C62.1997"
              title="Map of Herat City"
              className="w-full aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-[#8B1538] text-sm font-semibold mb-2 uppercase tracking-wide">Plan Your Arrival</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Where to Find Herat City</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Herat rests along the storied Silk Road, framed by desert horizons and lush valleys fed by the Hari River.
              The Old City is compact and walkable, with centuries-old caravanserais leading to artisan workshops and
              saffron markets. Use this guide to orient yourself before you arrive.
            </p>

            <div className="grid gap-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <div className="rounded-full bg-[#8B1538]/10 text-[#8B1538] p-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
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
