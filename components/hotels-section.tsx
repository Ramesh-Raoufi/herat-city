import { MapPin, Star } from "lucide-react"

const hotels = [
  {
    name: "Arg Hotel Herat",
    image: "/herat-cityscape.jpg",
    description:
      "A recently restored property blending traditional Herati tilework with modern comfort. Located steps from the Great Mosque.",
    distance: "0.4 km to Friday Mosque",
    amenities: ["Rooftop terrace", "Airport transfers", "Local guide concierge"],
    rating: "4.6",
    reviews: "128 reviews",
  },
  {
    name: "Qala Heritage Guesthouse",
    image: "/herat-old-city.jpg",
    description:
      "Family-run guesthouse inside the Old City walls with intimate courtyards, home-cooked meals, and stories from local artisans.",
    distance: "0.7 km to Qala-e Ikhtiyaruddin Citadel",
    amenities: ["Traditional breakfast", "Workshop tours", "Evening tea salon"],
    rating: "4.8",
    reviews: "96 reviews",
  },
  {
    name: "Saffron Palace Hotel",
    image: "/herat-mosque-interior.jpg",
    description:
      "A boutique stay surrounded by saffron fields on the outskirts of Herat, offering serene views and curated cultural excursions.",
    distance: "8 km to Old Bazaar Quarter",
    amenities: ["Garden restaurant", "On-site hammam", "Craft workshops"],
    rating: "4.5",
    reviews: "84 reviews",
  },
]

export function HotelsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="text-[#8B1538] text-sm font-semibold tracking-[0.2em] uppercase">Stay in Comfort</span>
            <div className="h-px w-12 bg-[#C9A96E]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hotels &amp; Guesthouses in Herat</h2>
          <p className="text-gray-600 leading-relaxed">
            Choose from boutique guesthouses within the Old City walls, contemporary hotels near the airport, or
            countryside retreats surrounded by saffron farms.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
                  <span className="text-sm font-bold text-gray-900">{hotel.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#8B1538] transition-colors">{hotel.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{hotel.reviews}</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{hotel.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#8B1538]" />
                  <span>{hotel.distance}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity) => (
                    <span key={amenity} className="text-xs px-3 py-1 rounded-full bg-[#FAF8F4] text-gray-600 border border-gray-100">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
