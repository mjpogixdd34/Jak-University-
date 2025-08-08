import { Monitor, BookOpen, CreditCard, FileText, Users, Calendar } from "lucide-react"

const portals = [
  {
    icon: Monitor,
    title: "AIMS Portal",
    description: "Access grades, schedules, enrollment, and academic records",
    features: ["View Grades", "Class Schedules", "Enrollment Status", "Academic History"],
    color: "bg-navy",
    status: "Active",
  },
  {
    icon: BookOpen,
    title: "E-Learning Platform",
    description: "Online courses, assignments, and learning materials",
    features: ["Course Materials", "Submit Assignments", "Discussion Forums", "Video Lectures"],
    color: "bg-mist",
    status: "Active",
  },
  {
    icon: CreditCard,
    title: "Payment Portal",
    description: "Manage tuition payments and financial transactions",
    features: ["Pay Tuition", "Payment History", "Financial Aid", "Billing Statements"],
    color: "bg-almond",
    status: "Active",
  },
  {
    icon: FileText,
    title: "Document Request",
    description: "Request official documents and transcripts online",
    features: ["Transcript Request", "Certificates", "Good Moral", "Track Requests"],
    color: "bg-noir",
    status: "Active",
  },
  {
    icon: Users,
    title: "Student Services",
    description: "Access counseling, health services, and student support",
    features: ["Counseling Appointment", "Health Records", "Student ID", "Support Tickets"],
    color: "bg-navy",
    status: "Active",
  },
  {
    icon: Calendar,
    title: "Event Registration",
    description: "Register for campus events, workshops, and activities",
    features: ["Event Calendar", "Workshop Registration", "Activity Sign-up", "Event History"],
    color: "bg-mist",
    status: "Active",
  },
]

export default function StudentPortals() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Student Portals</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Access all your academic and administrative needs through our integrated online portals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <div
              key={portal.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 ${portal.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <portal.icon
                    className={`h-6 w-6 ${portal.color === "bg-mist" || portal.color === "bg-almond" ? "text-noir" : "text-ivory"}`}
                  />
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                  {portal.status}
                </span>
              </div>

              <h3 className="font-bold text-navy mb-3 text-lg group-hover:text-navy/80 transition-colors">
                {portal.title}
              </h3>
              <p className="text-mist mb-4 text-sm leading-relaxed">{portal.description}</p>

              <div className="space-y-2 mb-6">
                {portal.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-mist">
                    <div className="w-1.5 h-1.5 bg-almond rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full bg-navy text-ivory py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors duration-300">
                Access Portal
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-navy/5 p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">Need Help?</h3>
            <p className="text-mist mb-6">
              Our IT support team is available 24/7 to assist you with any portal-related questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-navy text-ivory px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors">
                Contact IT Support
              </button>
              <button className="border border-navy text-navy px-6 py-3 rounded-full font-semibold hover:bg-navy hover:text-ivory transition-all duration-300">
                View User Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
