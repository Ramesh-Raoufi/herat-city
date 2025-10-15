import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterFooter() {
  return (
    <footer className="bg-[#2C2C2C] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get Herat Stories in Your Inbox</h2>
          <p className="text-white/80 mb-8">
            Subscribe for travel tips, cultural highlights, and insider guides from Herat City.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Email Address" className="bg-white border-0 flex-1" />
            <Button className="bg-[#8B1538] hover:bg-[#6B1028] text-white px-8">SUBMIT</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
