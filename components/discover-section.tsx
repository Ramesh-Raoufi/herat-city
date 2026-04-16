"use client"

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
    category: "Things to Do",
    readTime: "5 min read",
  },
  {
    image: "/herat-mosque-interior.jpg",
    title: "Mysteries of the Herat Citadel",
    category: "Heritage Trails",
    readTime: "8 min read",
  },
  {
    image: "/herat-bazaar.jpg",
    title: "10 Reasons to Visit Herat Now",
    category: "Travel Stories",
    readTime: "4 min read",
  },
]

export function DiscoverSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [startIndex, setStartIndex] = useState(0)

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F4]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A96E]" />
            <div className="w-10 h-10 rounded-full border-2 border-[#8B1538] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border border-[#8B1538] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B1538]" />
              </div>
            </div>
            <div className="h-px w-12 bg-[#C9A96E]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">Discover Herat City</h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === index ? "default" : "outline"}
                className={`rounded-full text-xs tracking-wider font-semibold px-5 py-2 transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-[#8B1538] text-white hover:bg-[#6B1028] shadow-md"
                    : "border-gray-300 text-gray-600 hover:bg-white hover:border-[#8B1538] hover:text-[#8B1538]"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-[#8B1538] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400">{post.readTime}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-10">
            <button
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] transition-all duration-300 shadow-sm"
              onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] transition-all duration-300 shadow-sm"
              onClick={() => setStartIndex(Math.min(posts.length - 3, startIndex + 1))}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
