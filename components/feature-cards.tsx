const features = [
  {
    image: "/herat-bazaar.jpg",
    title: "Plan a Weekend in Herat",
    subtitle: "Curated itineraries for every traveler",
  },
  {
    image: "/herat-old-city.jpg",
    title: "Browse Silk Road Festivals",
    subtitle: "Celebrations rooted in centuries of tradition",
  },
  {
    image: "/herat-mosque-interior.jpg",
    title: "Explore Herat's Live Music",
    subtitle: "Rubab, dutar, and the sounds of the Silk Road",
  },
]

export function FeatureCards() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F4]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="text-[#8B1538] text-sm font-semibold tracking-[0.2em] uppercase">Explore</span>
            <div className="h-px w-12 bg-[#C9A96E]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Start Your Herat Adventure</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index === 1 ? "md:h-[360px]" : "h-[300px] md:h-[320px]"
              }`}
            >
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="text-white text-2xl font-bold mb-1 leading-snug">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.subtitle}</p>
                <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                  <span className="text-[#C9A96E] text-sm font-semibold tracking-wider flex items-center gap-2">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
