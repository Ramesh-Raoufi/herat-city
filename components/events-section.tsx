"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    image: "/herat-arch.jpg",
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Text */}
          <div className="lg:w-1/3">
            <p className="text-[#8B1538] text-sm font-semibold mb-2 uppercase tracking-wide">
              Upcoming Events
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              There is Always Something Happening in Herat
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              From saffron celebrations to starlit concerts, Herat keeps the
              calendar filled with culture. Join artisans, musicians, and
              storytellers as they share the spirit of Afghanistan's western
              gateway.
            </p>
            <Button
              variant="outline"
              className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white px-6 bg-transparent"
            >
              VIEW ALL EVENTS
            </Button>
          </div>

          {/* Right Side - Event Cards */}
          <div className="lg:w-2/3 relative">
            <div className="flex gap-4 overflow-hidden">
              {events.slice(startIndex, startIndex + 3).map((event, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] overflow-hidden group cursor-pointer"
                >
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 text-center z-10">
                    <div className="text-[#8B1538] text-xs font-bold">
                      {event.date.month}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {event.date.day}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {event.title}
                    </h3>
                    {event.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4 text-[#8B1538]" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-[#8B1538]" />
                      <span>{event.dateRange}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              onClick={() =>
                setStartIndex(Math.min(events.length - 3, startIndex + 1))
              }
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
