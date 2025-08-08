import { Calendar, MapPin, Users, Clock } from "lucide-react"

const upcomingEvents = [
  {
    title: "Annual Homecoming 2024",
    date: "2024-03-15",
    time: "6:00 PM - 11:00 PM",
    location: "JRU Main Campus",
    description: "Join us for our biggest alumni gathering of the year with dinner, entertainment, and networking",
    attendees: "500+ expected",
    image: "/alumni-homecoming-event.png",
    category: "Major Event",
    registration: "Open",
  },
  {
    title: "Tech Alumni Meetup",
    date: "2024-02-20",
    time: "7:00 PM - 9:00 PM",
    location: "Makati Business District",
    description: "Networking event for IT and Computer Science graduates working in the tech industry",
    attendees: "80+ expected",
    image: "/tech-alumni-networking.png",
    category: "Professional",
    registration: "Open",
  },
  {
    title: "Class of 2014 Reunion",
    date: "2024-04-05",
    time: "5:00 PM - 10:00 PM",
    location: "JRU Alumni Center",
    description: "10-year reunion celebration for the graduating class of 2014",
    attendees: "150+ expected",
    image: "/class-reunion-celebration.png",
    category: "Class Reunion",
    registration: "Members Only",
  },
  {
    title: "Alumni Golf Tournament",
    date: "2024-05-10",
    time: "7:00 AM - 5:00 PM",
    location: "Manila Golf & Country Club",
    description: "Annual golf tournament with prizes and networking opportunities",
    attendees: "120+ expected",
    image: "/alumni-golf-tournament.png",
    category: "Sports",
    registration: "Open",
  },
]

export default function AlumniEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Upcoming Alumni Events</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Connect, celebrate, and create lasting memories with fellow JRU alumni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.title}
              className="bg-ivory rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-navy text-ivory px-3 py-1 rounded-full text-sm font-semibold">
                  {event.category}
                </div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    event.registration === "Open" ? "bg-green-500 text-white" : "bg-orange-500 text-white"
                  }`}
                >
                  {event.registration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-navy mb-3 text-xl">{event.title}</h3>
                <p className="text-mist mb-4 text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-4 text-sm text-mist">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-almond" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-almond" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-almond" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-almond" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-navy text-ivory py-2 rounded-lg hover:bg-navy/90 transition-colors duration-300 font-semibold">
                    Register Now
                  </button>
                  <button className="flex-1 border border-navy text-navy py-2 rounded-lg hover:bg-navy hover:text-ivory transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-navy/5 p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">Host an Alumni Event</h3>
            <p className="text-mist mb-6">
              Interested in organizing an alumni gathering in your area? We provide support and resources to help you
              connect with fellow graduates.
            </p>
            <button className="bg-navy text-ivory px-8 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors">
              Propose an Event
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
