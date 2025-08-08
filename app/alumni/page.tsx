import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import AlumniServices from "@/components/alumni-services"
import AlumniSpotlight from "@/components/alumni-spotlight"
import AlumniEvents from "@/components/alumni-events"

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Alumni Network"
          subtitle="Stay Connected, Keep Growing"
          image="/alumni-networking-event.png"
        />
        <AlumniServices />
        <AlumniSpotlight />
        <AlumniEvents />
      </main>
      <Footer />
    </div>
  )
}
