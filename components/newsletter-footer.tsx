import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"

const footerLinks = {
  "Explore Herat": ["Things to Do", "Eat & Drink", "Heritage Trails", "Neighborhood Guides"],
  "Plan Your Trip": ["Hotels & Stays", "Getting Here", "Travel Tips", "Events Calendar"],
  "About": ["Our Story", "Partners", "Press", "Contact Us"],
}

export function NewsletterFooter() {
  return (
    <footer className="bg-[#1a1a2e]">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B1538] to-[#C9A96E] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C9A96E]/30 to-transparent" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  Get Herat Stories in Your Inbox
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  Subscribe for travel tips, cultural highlights, and insider guides from Herat City. Join 5,000+ fellow travelers.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/30 flex-1 h-12 rounded-full px-5 focus-visible:border-[#C9A96E] focus-visible:ring-[#C9A96E]/20"
                  />
                  <Button className="bg-[#8B1538] hover:bg-[#6B1028] text-white h-12 px-8 rounded-full shadow-lg shadow-[#8B1538]/20 transition-all duration-300 tracking-wider text-xs font-semibold">
                    SUBSCRIBE <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <p className="text-white/30 text-xs mt-3">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full border-2 border-[#C9A96E] flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border border-[#C9A96E] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                </div>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold tracking-[0.15em] leading-none">HERAT CITY</h3>
                <p className="text-[#C9A96E] text-[9px] tracking-[0.25em] uppercase">Official Visitor Guide</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Your official guide to exploring Herat — Afghanistan&apos;s cultural capital on the ancient Silk Road. Discover heritage, cuisine, music, and more.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-[#C9A96E]" />
                <span>Herat, Afghanistan</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <Phone className="w-4 h-4 text-[#C9A96E]" />
                <span>+93 40 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <Clock className="w-4 h-4 text-[#C9A96E]" />
                <span>Visitor Center: 8 AM – 6 PM</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-[#C9A96E] transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-xs">
              &copy; 2025 Herat City Official Visitor Guide. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Terms of Use</a>
              <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
