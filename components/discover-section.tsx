"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const categories = [
  "THINGS TO DO",
  "EAT & DRINK",
  "HERITAGE TRAILS",
  "STAY IN HERAT",
  "NEIGHBORHOOD GUIDES",
  "TRAVEL STORIES",
]

const posts = [
  {
    image: "/herat-cityscape.jpg",
    title: "20 Ways to Celebrate Spring in Herat",
  },
  {
    image: "/herat-mosque-interior.jpg",
    title: "Mysteries of the Herat Citadel",
  },
  {
    image: "/herat-bazaar.jpg",
    title: "10 Reasons to Visit Herat Now",
  },
]

export function DiscoverSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [startIndex, setStartIndex] = useState(0)

  return (
    <section className="py-16 bg-[#F5F3EE]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#8B1538] mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#8B1538] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#8B1538]" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Discover Herat City</h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === index ? "default" : "outline"}
                className={
                  activeCategory === index
                    ? "bg-[#2C2C2C] text-white hover:bg-[#1C1C1C]"
                    : "border-gray-400 text-gray-700 hover:bg-gray-100"
                }
                onClick={() => setActiveCategory(index)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer border-0 shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
            onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
            onClick={() => setStartIndex(Math.min(posts.length - 3, startIndex + 1))}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
