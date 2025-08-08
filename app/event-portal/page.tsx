"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, MapPin, Clock, Users, Star, Filter, Search } from "lucide-react"

export default function EventPortalPage() {
  const [user, setUser] = useState<any>(null)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const events = [
    {
      id: 1,
      title: "Career Fair 2025",
      date: "2025-02-15",
      time: "9:00 AM - 5:00 PM",
      location: "University Gymnasium",
      category: "Career",
      description: "Meet with top employers and explore career opportunities across various industries",
      image: "/career-fair-event.png",
      capacity: 500,
      registered: 234,
      featured: true,
      organizer: "Career Services Office",
    },
    {
      id: 2,
      title: "Research Symposium 2025",
      date: "2025-02-20",
      time: "1:00 PM - 6:00 PM",
      location: "Science Building Auditorium",
      category: "Academic",
      description: "Student and faculty research presentations across all disciplines",
      image: "/research-symposium-presentation.png",
      capacity: 200,
      registered: 89,
      featured: false,
      organizer: "Research Office",
    },
    {
      id: 3,
      title: "Cultural Festival 2025",
      date: "2025-02-25",
      time: "10:00 AM - 8:00 PM",
      location: "University Grounds",
      category: "Cultural",
      description: "Celebrate diversity with performances, food, and cultural exhibits",
      image: "/cultural-festival-celebration.png",
      capacity: 1000,
      registered: 567,
      featured: true,
      organizer: "Student Affairs",
    },
    {
      id: 4,
      title: "Tech Innovation Summit",
      date: "2025-03-05",
      time: "8:00 AM - 5:00 PM",
      location: "IT Building Conference Hall",
      category: "Technology",
      description: "Explore the latest trends in technology and innovation",
      image: "/tech-innovation-summit.png",
      capacity: 150,
      registered: 78,
      featured: false,
      organizer: "IT Department",
    },
    {
      id: 5,
      title: "Sports Festival 2025",
      date: "2025-03-10",
      time: "7:00 AM - 6:00 PM",
      location: "Sports Complex",
      category: "Sports",
      description: "Inter-college sports competition and recreational activities",
      image: "/sports-festival-competition.png",
      capacity: 800,
      registered: 345,
      featured: true,
      organizer: "Sports Office",
    },
    {
      id: 6,
      title: "Alumni Homecoming",
      date: "2025-03-15",
      time: "5:00 PM - 10:00 PM",
      location: "Main Campus",
      category: "Alumni",
      description: "Reconnect with fellow alumni and celebrate university achievements",
      image: "/alumni-homecoming-event.png",
      capacity: 600,
      registered: 123,
      featured: false,
      organizer: "Alumni Office",
    },
  ]

  const myRegistrations = [
    { eventId: 1, registrationDate: "2025-01-10", status: "Confirmed" },
    { eventId: 3, registrationDate: "2025-01-12", status: "Confirmed" },
    { eventId: 5, registrationDate: "2025-01-15", status: "Waitlist" },
  ]

  const categories = ["all", "Academic", "Career", "Cultural", "Technology", "Sports", "Alumni"]

  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeFilter === "all" || event.category === activeFilter
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const isRegistered = (eventId: number) => {
    return myRegistrations.some((reg) => reg.eventId === eventId)
  }

  const getRegistrationStatus = (eventId: number) => {
    const registration = myRegistrations.find((reg) => reg.eventId === eventId)
    return registration?.status || null
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-navy text-ivory py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Event Registration Portal</h1>
            <p className="text-mist">Discover and register for university events and activities</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-mist" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-mist" />
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="px-4 py-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Events */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => event.featured)
                .map((event, index) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-navy text-ivory px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            event.category === "Academic"
                              ? "bg-blue-100 text-blue-800"
                              : event.category === "Career"
                                ? "bg-green-100 text-green-800"
                                : event.category === "Cultural"
                                  ? "bg-purple-100 text-purple-800"
                                  : event.category === "Technology"
                                    ? "bg-orange-100 text-orange-800"
                                    : event.category === "Sports"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-navy mb-2 text-lg">{event.title}</h3>
                      <p className="text-mist text-sm mb-4 line-clamp-2">{event.description}</p>

                      <div className="space-y-2 text-sm text-mist mb-4">
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
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-navy" />
                          <span>
                            {event.registered}/{event.capacity} registered
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Registration Progress</span>
                          <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                        </div>
                        <div className="w-full bg-mist/20 rounded-full h-2">
                          <div
                            className="bg-navy h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {isRegistered(event.id) ? (
                        <div className="text-center">
                          <span
                            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                              getRegistrationStatus(event.id) === "Confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {getRegistrationStatus(event.id)}
                          </span>
                        </div>
                      ) : (
                        <button
                          className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                            event.registered >= event.capacity
                              ? "bg-mist/20 text-mist cursor-not-allowed"
                              : "bg-navy text-ivory hover:bg-navy/90"
                          }`}
                          disabled={event.registered >= event.capacity}
                        >
                          {event.registered >= event.capacity ? "Event Full" : "Register Now"}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Events */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">
              All Events
              {activeFilter !== "all" && <span className="text-lg font-normal text-mist ml-2">- {activeFilter}</span>}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.category === "Academic"
                            ? "bg-blue-100 text-blue-800"
                            : event.category === "Career"
                              ? "bg-green-100 text-green-800"
                              : event.category === "Cultural"
                                ? "bg-purple-100 text-purple-800"
                                : event.category === "Technology"
                                  ? "bg-orange-100 text-orange-800"
                                  : event.category === "Sports"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-navy mb-2">{event.title}</h3>
                    <p className="text-mist text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 text-sm text-mist mb-4">
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

                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-mist">Organized by {event.organizer}</span>
                      <span className="text-navy font-semibold">
                        {event.registered}/{event.capacity}
                      </span>
                    </div>

                    {isRegistered(event.id) ? (
                      <div className="text-center">
                        <span
                          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                            getRegistrationStatus(event.id) === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {getRegistrationStatus(event.id)}
                        </span>
                      </div>
                    ) : (
                      <button
                        className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                          event.registered >= event.capacity
                            ? "bg-mist/20 text-mist cursor-not-allowed"
                            : "bg-navy text-ivory hover:bg-navy/90"
                        }`}
                        disabled={event.registered >= event.capacity}
                      >
                        {event.registered >= event.capacity ? "Event Full" : "Register"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-mist mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">No Events Found</h3>
                <p className="text-mist">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
