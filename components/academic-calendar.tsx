import { Clock } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const academicEvents = [
  {
    month: "January 2025",
    events: [
      { date: "8", title: "Classes Begin", type: "academic", time: "8:00 AM" },
      { date: "15", title: "Add/Drop Deadline", type: "deadline", time: "5:00 PM" },
      { date: "22", title: "Research Symposium", type: "event", time: "1:00 PM" },
    ],
  },
  {
    month: "February 2025",
    events: [
      { date: "5", title: "Midterm Exams Begin", type: "exam", time: "8:00 AM" },
      { date: "14", title: "Valentine's Cultural Show", type: "event", time: "6:00 PM" },
      { date: "19", title: "Midterm Break", type: "break", time: "All Day" },
    ],
  },
  {
    month: "March 2025",
    events: [
      { date: "1", title: "Registration for Next Semester", type: "deadline", time: "9:00 AM" },
      { date: "15", title: "Career Fair", type: "event", time: "10:00 AM" },
      { date: "25", title: "Spring Festival", type: "event", time: "2:00 PM" },
    ],
  },
  {
    month: "April 2025",
    events: [
      { date: "8", title: "Final Exams Begin", type: "exam", time: "8:00 AM" },
      { date: "22", title: "Graduation Ceremony", type: "graduation", time: "10:00 AM" },
      { date: "29", title: "Summer Classes Begin", type: "academic", time: "8:00 AM" },
    ],
  },
]

const getEventColor = (type: string) => {
  switch (type) {
    case "academic":
      return "bg-navy text-ivory"
    case "exam":
      return "bg-red-500 text-white"
    case "deadline":
      return "bg-orange-500 text-white"
    case "event":
      return "bg-almond text-noir"
    case "break":
      return "bg-green-500 text-white"
    case "graduation":
      return "bg-purple-500 text-white"
    default:
      return "bg-mist text-noir"
  }
}

export default function AcademicCalendar() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-ivory to-almond/20">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Academic Calendar 2025</h2>
            <p className="text-mist text-xl max-w-4xl mx-auto leading-relaxed">
              Stay informed about important dates and events throughout the academic year 2025
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicEvents.map((month, monthIndex) => (
            <ScrollReveal key={month.month} direction="up" delay={monthIndex * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-almond/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">{month.month}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-navy to-almond mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                  {month.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="group">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-navy to-noir rounded-xl flex items-center justify-center text-ivory font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {event.date}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy text-sm mb-2 group-hover:text-navy/80 transition-colors leading-tight">
                            {event.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-mist mb-3">
                            <Clock className="h-3 w-3" />
                            <span>{event.time}</span>
                          </div>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getEventColor(event.type)} shadow-sm`}
                          >
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-navy to-noir rounded-3xl p-8 text-ivory shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need the Full Calendar?</h3>
              <p className="text-almond mb-6">
                Download the complete academic calendar for 2025 with all important dates
              </p>
              <button className="bg-almond text-navy px-8 py-3 rounded-full font-bold hover:bg-almond/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Download Full Calendar
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
