"use client"

import { Search, Globe, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-[#C9A96E] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border border-[#C9A96E] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              </div>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold tracking-[0.2em] leading-none">HERAT CITY</h1>
              <p className="text-[#C9A96E] text-[9px] tracking-[0.3em] uppercase">Official Visitor Guide</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {["THINGS TO DO", "EAT & DRINK", "STAY", "EVENTS", "TRIP PLANNING", "EXPLORE HERAT"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-[#C9A96E] transition-colors font-medium text-xs tracking-wider px-3 py-2 rounded-md hover:bg-white/5"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            <button className="text-white/90 hover:text-[#C9A96E] transition-colors p-2 rounded-full hover:bg-white/10">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-white/90 hover:text-[#C9A96E] transition-colors p-2 rounded-full hover:bg-white/10">
              <Globe className="w-4 h-4" />
            </button>
            <button
              className="lg:hidden text-white/90 hover:text-[#C9A96E] transition-colors p-2 rounded-full hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4 border-t border-white/10 pt-4">
            {["THINGS TO DO", "EAT & DRINK", "STAY", "EVENTS", "TRIP PLANNING", "EXPLORE HERAT"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-[#C9A96E] transition-colors font-medium text-sm tracking-wider py-2 px-3 rounded-md hover:bg-white/5"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
