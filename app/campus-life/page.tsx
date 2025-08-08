import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import StudentOrganizations from "@/components/student-organizations"
import CampusActivities from "@/components/campus-activities"
import { Users, Music, Trophy, Heart } from "lucide-react"

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Campus Life"
          subtitle="Experience the Vibrant JRU Community"
          image="/students-campus-activities.png"
        />

        {/* Campus Life Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Student Organizations",
                  count: "50+",
                  description: "Active clubs and societies",
                },
                { icon: Music, title: "Cultural Events", count: "100+", description: "Annual performances and shows" },
                { icon: Trophy, title: "Sports Teams", count: "15", description: "Competitive athletic programs" },
                { icon: Heart, title: "Community Service", count: "1000+", description: "Hours of volunteer work" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-ivory" />
                  </div>
                  <div className="text-2xl font-bold text-navy mb-2">{item.count}</div>
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-mist text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StudentOrganizations />
        <CampusActivities />

        {/* Virtual Tour Section */}
        <section className="py-16 bg-navy text-ivory">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Campus</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                Take a virtual tour of our beautiful campus and discover world-class facilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Main Library",
                  image: "/modern-university-library.png",
                  description: "5-floor research facility with 500,000+ books",
                },
                {
                  name: "Student Center",
                  image: "/student-center-activities.png",
                  description: "Hub for student activities and dining",
                },
                {
                  name: "Sports Complex",
                  image: "/sports-complex-facilities.png",
                  description: "Olympic-size pool and multi-sport courts",
                },
                {
                  name: "Science Building",
                  image: "/science-laboratory-modern.png",
                  description: "State-of-the-art laboratories and research facilities",
                },
                {
                  name: "Arts Center",
                  image: "/arts-center-performance.png",
                  description: "Theater, studios, and exhibition spaces",
                },
                {
                  name: "Dormitories",
                  image: "/student-dormitory-modern.png",
                  description: "Comfortable on-campus housing options",
                },
              ].map((location, index) => (
                <div
                  key={location.name}
                  className="group cursor-pointer animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-navy/50 backdrop-blur-sm rounded-xl overflow-hidden border border-mist/20 hover:border-almond/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={location.image || "/placeholder.svg"}
                        alt={location.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-almond mb-2">{location.name}</h3>
                      <p className="text-mist text-sm">{location.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-almond text-navy px-8 py-3 rounded-full font-semibold hover:bg-almond/90 transition-all duration-300 hover:scale-105">
                Start Virtual Tour
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
