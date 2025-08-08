import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import AcademicCalendar from "@/components/academic-calendar"
import CollegesOverview from "@/components/colleges-overview"
import { BookOpen, Users, Award, Microscope } from "lucide-react"

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Academics"
          subtitle="World-Class Education for Global Leaders"
          image="/modern-classroom-technology.png"
        />

        {/* Academic Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: BookOpen, number: "50+", label: "Degree Programs" },
                { icon: Users, number: "500+", label: "Expert Faculty" },
                { icon: Award, number: "95%", label: "Employment Rate" },
                { icon: Microscope, number: "20+", label: "Research Centers" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-ivory" />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-mist">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CollegesOverview />
        <AcademicCalendar />

        {/* Innovation Hubs */}
        <section className="py-16 bg-mist/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Innovation Hubs</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                State-of-the-art facilities designed to foster creativity, innovation, and hands-on learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Tech Innovation Lab",
                  description: "Cutting-edge technology for AI, robotics, and software development",
                  image: "/tech-innovation-lab.png",
                  features: ["AI Development", "Robotics Workshop", "3D Printing", "VR/AR Studio"],
                },
                {
                  name: "Esports Arena",
                  description: "Professional gaming facility with tournament-grade equipment",
                  image: "/esports-arena-professional.png",
                  features: ["Gaming Stations", "Streaming Studio", "Tournament Hall", "Training Rooms"],
                },
                {
                  name: "Environmental Research Center",
                  description: "Advanced laboratories for sustainability and environmental studies",
                  image: "/environmental-lab-research.png",
                  features: ["Climate Lab", "Water Testing", "Soil Analysis", "Green Technology"],
                },
              ].map((hub, index) => (
                <div
                  key={hub.name}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img src={hub.image || "/placeholder.svg"} alt={hub.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-3">{hub.name}</h3>
                    <p className="text-mist mb-4">{hub.description}</p>
                    <div className="space-y-2">
                      {hub.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-mist">
                          <div className="w-2 h-2 bg-almond rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
