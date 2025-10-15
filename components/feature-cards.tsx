import { Card } from "@/components/ui/card"

const features = [
  {
    image: "/herat-bazaar.jpg",
    title: "Plan a Weekend in Herat",
    overlay: true,
  },
  {
    image: "/herat-arch.jpg",
    title: "Browse Silk Road Festivals",
    overlay: true,
  },
  {
    image: "/herat-old-city.jpg",
    title: "Explore Herat's Live Music",
    overlay: true,
  },
]

export function FeatureCards() {
  return (
    <section className="py-16 bg-[#F5F3EE]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative h-64 overflow-hidden group cursor-pointer border-0">
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {feature.overlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold text-balance">{feature.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
