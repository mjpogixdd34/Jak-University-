import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import QuickAccess from "@/components/quick-access"
import NewsCarousel from "@/components/news-carousel"
import CampaignHighlights from "@/components/campaign-highlights"
import WhyChooseUs from "@/components/why-choose-us"
import VirtualTourPreview from "@/components/virtual-tour-preview"
import UpcomingEvents from "@/components/upcoming-events"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <HeroSection />
        <QuickAccess />
        <NewsCarousel />
        <CampaignHighlights />
        <WhyChooseUs />
        <VirtualTourPreview />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  )
}
