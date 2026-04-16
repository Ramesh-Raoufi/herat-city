"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const events = [
  {
    date: { month: "APR", day: "12" },
    image: "/herat-bazaar.jpg",
    title: "Herat Saffron Harvest Festival",
    location: "Herat Citadel Gardens",
    dateRange: "Apr 12, 2025 - Apr 14, 2025",
  },
  {
    date: { month: "MAY", day: "03" },
    image: "/herat-old-city.jpg",
    title: "Silk Road Cultural Week",
    location: "Great Mosque Square",
    dateRange: "May 3, 2025 - May 9, 2025",
  },
  {
    date: { month: "JUN", day: "21" },
    image: "/herat-mosque-interior.jpg",
    title: "Herat Traditional Music Nights",
    location: "Old City Amphitheater",
    dateRange: "Jun 21, 2025",
  },
];

export function EventsSection() {
  const [startIndex, setStartIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Text */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#8B1538]" />
              <p className="text-[#8B1538] text-sm font-semibold uppercase tracking-[0.2em]">
                Upcoming Events
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              There is Always Something Happening in Herat
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
              From saffron celebrations to starlit concerts, Herat keeps the
              calendar filled with culture. Join artisans, musicians, and
              storytellers as they share the spirit of Afghanistan&apos;s western
              gateway.
            </p>
            <Button
              variant="outline"
              className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white px-8 py-5 bg-transparent rounded-full transition-all duration-300 tracking-wider text-xs font-semibold"
            >
              VIEW ALL EVENTS
            </Button>
          </div>

          {/* Right Side - Event Cards */}
          <div className="lg:w-2/3 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.slice(startIndex, startIndex + 3).map((event, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1"
                >
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 text-center z-10">
                    <div className="text-[#8B1538] text-[10px] font-bold tracking-wider">
                      {event.date.month}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 leading-tight">
                      {event.date.day}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-[#8B1538] transition-colors leading-snug">
                      {event.title}
                    </h3>
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#8B1538]" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-3.5 h-3.5 text-[#8B1538]" />
                      <span>{event.dateRange}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-3 mt-8 lg:hidden">
              <button
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#8B1538] transition-colors"
                onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#8B1538] transition-colors"
                onClick={() =>
                  setStartIndex(Math.min(events.length - 1, startIndex + 1))
                }
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
