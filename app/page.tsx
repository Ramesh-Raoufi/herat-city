import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuoteSection } from "@/components/quote-section"
import { EventsSection } from "@/components/events-section"
import { FeatureCards } from "@/components/feature-cards"
import { VideoSection } from "@/components/video-section"
import { DiscoverSection } from "@/components/discover-section"
import { LocationSection } from "@/components/location-section"
import { HotelsSection } from "@/components/hotels-section"
import { NewsletterFooter } from "@/components/newsletter-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <QuoteSection />
      <EventsSection />
      <FeatureCards />
      <VideoSection />
      <LocationSection />
      <HotelsSection />
      <DiscoverSection />
      <NewsletterFooter />
    </main>
  )
}
