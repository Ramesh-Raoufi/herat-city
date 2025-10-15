"use client"

import { Search, Globe, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-white text-xl font-bold tracking-wider">HERAT CITY</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              THINGS TO DO
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              EAT & DRINK
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              STAY
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              EVENTS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              TRIP PLANNING TOOLS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              EXPLORE HERAT
            </a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-white/80 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-white/80 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3">
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              THINGS TO DO
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              EAT & DRINK
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              STAY
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              EVENTS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              TRIP PLANNING TOOLS
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              EXPLORE HERAT
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
