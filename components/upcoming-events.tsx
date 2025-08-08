import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const upcomingEvents = [
  {
    id: 1,
    title: "Career Fair 2025",
    date: "2025-02-15",
    time: "9:00 AM - 5:00 PM",
    location: "University Gymnasium",
    description: "Meet with top employers and explore career opportunities across various industries",
    image: "/career-fair-event.png",
    attendees: 500,
    category: "Career",
    featured: true,
  },
  {
    id: 2,
    title: "Research Symposium 2025",
    date: "2025-02-20",
    time: "1:00 PM - 6:00 PM",
    location: "Science Building Auditorium",
    description: "Student and faculty research presentations across all disciplines",
    image: "/research-symposium-presentation.png",
    attendees: 200,
    category: "Academic",
    featured: false,
  },
  {
    id: 3,
    title: "Cultural Festival 2025",
    date: "2025-02-25",
    time: "10:00 AM - 8:00 PM",
    location: "University Grounds",
    description: "Celebrate diversity with performances, food, and cultural exhibits",
    image: "/cultural-festival-celebration.png",
    attendees: 1000,
    category: "Cultural",
    featured: true,
  },
  {
    id: 4,
    title: "Tech Innovation Summit",
    date: "2025-03-05",
    time: "8:00 AM - 5:00 PM",
    location: "IT Building Conference Hall",
    description: "Explore the latest trends in technology and innovation",
    image: "/tech-innovation-summit.png",
    attendees: 150,
    category: "Technology",
    featured: false,
  },
]

export default function UpcomingEvents() {
  const featuredEvent = upcomingEvents.find((event) => event.featured)
  const otherEvents = upcomingEvents.filter((event) => !event.featured)

  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-almond/10 to-white">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Upcoming Events</h2>
            <p className="text-mist text-xl max-w-3xl mx-auto leading-relaxed">
              Join us for exciting events and activities happening throughout 2025
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Event */}
        {featuredEvent && (
          <ScrollReveal direction="up" delay={200}>
            <div className="mb-16">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={featuredEvent.image || "/placeholder.svg"}
                        alt={featuredEvent.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-almond text-navy px-4 py-2 rounded-full text-sm font-bold">
                          Featured Event
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          featuredEvent.category === "Career"
                            ? "bg-green-100 text-green-800"
                            : featuredEvent.category === "Cultural"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {featuredEvent.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-navy mb-4">{featuredEvent.title}</h3>
                    <p className="text-mist text-lg mb-6 leading-relaxed">{featuredEvent.description}</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3 text-mist">
                        <Calendar className="h-5 w-5 text-navy" />
                        <span>{new Date(featuredEvent.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-mist">
                        <Clock className="h-5 w-5 text-navy" />
                        <span>{featuredEvent.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-mist">
                        <MapPin className="h-5 w-5 text-navy" />
                        <span>{featuredEvent.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-mist">
                        <Users className="h-5 w-5 text-navy" />
                        <span>Expected: {featuredEvent.attendees} attendees</span>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="bg-navy text-ivory px-8 py-3 rounded-full font-semibold hover:bg-navy/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                        <span>Register Now</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button className="border-2 border-navy text-navy px-8 py-3 rounded-full font-semibold hover:bg-navy hover:text-ivory transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Other Events Grid */}
        <ScrollReveal direction="up" delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.category === "Academic"
                          ? "bg-blue-100 text-blue-800"
                          : event.category === "Technology"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-navy mb-3 text-lg group-hover:text-navy/80 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-mist text-sm mb-4 leading-relaxed">{event.description}</p>

                  <div className="space-y-2 text-sm text-mist mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-navy" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-navy" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-navy" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-mist">{event.attendees} expected</span>
                    <button className="text-navy font-semibold text-sm hover:text-navy/80 transition-colors flex items-center space-x-1">
                      <span>Register</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* View All Events CTA */}
        <ScrollReveal direction="up" delay={600}>
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-navy to-noir text-ivory px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              View All Events
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
