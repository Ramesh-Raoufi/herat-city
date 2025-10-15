import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

const hotels = [
  {
    name: "Arg Hotel Herat",
    image: "/herat-arch.jpg",
    description:
      "A recently restored property blending traditional Herati tilework with modern comfort. Located steps from the Great Mosque.",
    distance: "0.4 km to Friday Mosque",
    amenities: ["Rooftop terrace", "Airport transfers", "Local guide concierge"],
    rating: "4.6 / 5 guest reviews",
  },
  {
    name: "Qala Heritage Guesthouse",
    image: "/herat-old-city.jpg",
    description:
      "Family-run guesthouse inside the Old City walls with intimate courtyards, home-cooked meals, and stories from local artisans.",
    distance: "0.7 km to Qala-e Ikhtiyaruddin Citadel",
    amenities: ["Traditional breakfast", "Workshop tours", "Evening tea salon"],
    rating: "4.8 / 5 traveler ratings",
  },
  {
    name: "Saffron Palace Hotel",
    image: "/herat-mosque-interior.jpg",
    description:
      "A boutique stay surrounded by saffron fields on the outskirts of Herat, offering serene views and curated cultural excursions.",
    distance: "8 km to Old Bazaar Quarter",
    amenities: ["Garden restaurant", "On-site hammam", "Craft workshops"],
    rating: "4.5 / 5 guest reviews",
  },
]

export function HotelsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#8B1538] text-sm font-semibold uppercase tracking-wide mb-2">Stay in Comfort</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Hotels & Guesthouses in Herat</h2>
          <p className="text-gray-700 leading-relaxed">
            Choose from boutique guesthouses within the Old City walls, contemporary hotels near the airport, or
            countryside retreats surrounded by saffron farms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {hotels.map((hotel) => (
            <Card key={hotel.name} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="px-6 pt-6 pb-4">
                <CardTitle className="text-2xl text-gray-900">{hotel.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-[#8B1538] font-semibold">
                  <Star className="w-4 h-4" />
                  <span>{hotel.rating}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm text-gray-700 mb-4">{hotel.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-[#8B1538]" />
                  <span>{hotel.distance}</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {hotel.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8B1538]" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
