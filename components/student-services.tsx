import { Heart, Shield, Briefcase, Home, Utensils, Bus } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive healthcare and wellness programs for students",
    services: ["Medical Clinic", "Mental Health Counseling", "Fitness Center", "Health Insurance"],
    contact: "health@jru.edu.ph",
    hours: "8:00 AM - 5:00 PM",
    location: "Health Center, Ground Floor",
  },
  {
    icon: Shield,
    title: "Campus Security",
    description: "24/7 security services ensuring a safe campus environment",
    services: ["Emergency Response", "Lost & Found", "ID Replacement", "Incident Reporting"],
    contact: "security@jru.edu.ph",
    hours: "24/7",
    location: "Security Office, Main Gate",
  },
  {
    icon: Briefcase,
    title: "Career Services",
    description: "Career guidance and job placement assistance for students and alumni",
    services: ["Career Counseling", "Job Placement", "Resume Writing", "Interview Preparation"],
    contact: "careers@jru.edu.ph",
    hours: "9:00 AM - 4:00 PM",
    location: "Career Center, 2nd Floor",
  },
  {
    icon: Home,
    title: "Housing Services",
    description: "On-campus and off-campus housing assistance and dormitory management",
    services: ["Dormitory Assignment", "Housing Search", "Roommate Matching", "Maintenance Requests"],
    contact: "housing@jru.edu.ph",
    hours: "8:00 AM - 5:00 PM",
    location: "Housing Office, Student Center",
  },
  {
    icon: Utensils,
    title: "Dining Services",
    description: "Variety of dining options and meal plans across campus",
    services: ["Meal Plans", "Cafeteria Services", "Special Dietary Needs", "Catering Services"],
    contact: "dining@jru.edu.ph",
    hours: "6:00 AM - 9:00 PM",
    location: "Various Campus Locations",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Campus shuttle services and transportation assistance",
    services: ["Shuttle Service", "Parking Permits", "Transportation Vouchers", "Route Information"],
    contact: "transport@jru.edu.ph",
    hours: "6:00 AM - 10:00 PM",
    location: "Transportation Office",
  },
]

export default function StudentServices() {
  return (
    <section className="py-16 bg-mist/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Student Services</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Comprehensive support services to enhance your university experience and ensure your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-ivory" />
              </div>

              <h3 className="font-bold text-navy mb-3 text-lg">{service.title}</h3>
              <p className="text-mist mb-4 text-sm leading-relaxed">{service.description}</p>

              <div className="space-y-2 mb-4">
                <h4 className="font-semibold text-navy text-sm">Services Offered:</h4>
                {service.services.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center text-xs text-mist">
                    <div className="w-1.5 h-1.5 bg-almond rounded-full mr-2"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="border-t border-mist/20 pt-4 space-y-2 text-xs text-mist">
                <div>
                  <strong>Contact:</strong> {service.contact}
                </div>
                <div>
                  <strong>Hours:</strong> {service.hours}
                </div>
                <div>
                  <strong>Location:</strong> {service.location}
                </div>
              </div>

              <button className="w-full mt-4 bg-navy text-ivory py-2 rounded-lg hover:bg-navy/90 transition-colors duration-300 text-sm font-semibold">
                Contact Service
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">Emergency Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-navy">Campus Security</div>
                <div className="text-mist">0917-123-4567</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-navy">Medical Emergency</div>
                <div className="text-mist">0917-123-4568</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-navy">Student Hotline</div>
                <div className="text-mist">0917-123-4569</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
