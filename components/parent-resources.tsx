import { BookOpen, Users, Calendar, Phone, Mail } from "lucide-react"

const resources = [
  {
    icon: BookOpen,
    title: "Parent Handbook",
    description: "Complete guide to university policies, procedures, and parent resources",
    action: "Download PDF",
    color: "bg-navy",
  },
  {
    icon: Users,
    title: "Parent Association",
    description: "Join other parents in supporting student activities and university initiatives",
    action: "Learn More",
    color: "bg-mist",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "Important dates, holidays, and academic milestones for the year",
    action: "View Calendar",
    color: "bg-almond",
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    description: "24/7 contact information for campus security and emergency services",
    action: "View Contacts",
    color: "bg-noir",
  },
]

const supportServices = [
  {
    service: "Academic Support",
    contact: "academics@jru.edu.ph",
    phone: "(02) 8123-4567",
    hours: "8:00 AM - 5:00 PM",
  },
  {
    service: "Student Affairs",
    contact: "studentaffairs@jru.edu.ph",
    phone: "(02) 8123-4568",
    hours: "8:00 AM - 5:00 PM",
  },
  {
    service: "Financial Services",
    contact: "finance@jru.edu.ph",
    phone: "(02) 8123-4569",
    hours: "8:00 AM - 4:00 PM",
  },
  {
    service: "Campus Security",
    contact: "security@jru.edu.ph",
    phone: "(02) 8123-4570",
    hours: "24/7",
  },
]

export default function ParentResources() {
  return (
    <section className="py-16 bg-mist/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Parent Resources</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Access helpful resources and support services designed specifically for parents
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${resource.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <resource.icon
                  className={`h-8 w-8 ${resource.color === "bg-mist" || resource.color === "bg-almond" ? "text-noir" : "text-ivory"}`}
                />
              </div>
              <h3 className="font-bold text-navy mb-3">{resource.title}</h3>
              <p className="text-mist text-sm mb-4 leading-relaxed">{resource.description}</p>
              <button className="bg-navy text-ivory px-4 py-2 rounded-lg hover:bg-navy/90 transition-colors text-sm font-semibold">
                {resource.action}
              </button>
            </div>
          ))}
        </div>

        {/* Support Services */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Support Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportServices.map((service, index) => (
              <div
                key={service.service}
                className="border border-mist/20 rounded-lg p-6 hover:shadow-md transition-shadow animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h4 className="font-bold text-navy mb-4">{service.service}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-almond" />
                    <span className="text-mist">{service.contact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-almond" />
                    <span className="text-mist">{service.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-almond" />
                    <span className="text-mist">{service.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How can I access my child's grades?",
                answer:
                  "You can access grades through the Parent Portal using your login credentials. Grades are updated regularly by professors.",
              },
              {
                question: "What should I do if my child is having academic difficulties?",
                answer:
                  "Contact the Academic Support office or your child's academic advisor. We offer tutoring services and academic counseling.",
              },
              {
                question: "How do I make tuition payments?",
                answer:
                  "Payments can be made online through the Parent Portal, at the Finance Office, or through authorized payment centers.",
              },
              {
                question: "Can I visit my child on campus?",
                answer:
                  "Yes, parents are welcome to visit. Please coordinate with Student Affairs for overnight stays in dormitories.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold text-navy mb-3">{faq.question}</h4>
                <p className="text-mist text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
