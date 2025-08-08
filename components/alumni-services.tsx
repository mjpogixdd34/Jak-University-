import { CreditCard, Users, Briefcase, Calendar, Award, Mail } from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Alumni E-Card",
    description: "Digital alumni identification and membership card",
    features: ["Digital ID Card", "Alumni Discounts", "Library Access", "Event Invitations"],
    action: "Get E-Card",
  },
  {
    icon: Users,
    title: "Profile Update",
    description: "Keep your alumni information current and connected",
    features: ["Contact Information", "Career Updates", "Achievement Records", "Photo Gallery"],
    action: "Update Profile",
  },
  {
    icon: Briefcase,
    title: "A-LEAP Program",
    description: "Alumni Leadership Enhancement and Professional Development",
    features: ["Leadership Training", "Professional Workshops", "Mentorship Program", "Networking Events"],
    action: "Join A-LEAP",
  },
  {
    icon: Calendar,
    title: "Alumni Events",
    description: "Stay connected through exclusive alumni gatherings",
    features: ["Homecoming", "Class Reunions", "Professional Mixers", "Cultural Events"],
    action: "View Events",
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Celebrate outstanding alumni achievements",
    features: ["Alumni Awards", "Hall of Fame", "Success Stories", "Achievement Nominations"],
    action: "Nominate",
  },
  {
    icon: Mail,
    title: "Alumni Newsletter",
    description: "Stay informed with university news and alumni updates",
    features: ["Monthly Newsletter", "University News", "Alumni Spotlights", "Event Announcements"],
    action: "Subscribe",
  },
]

export default function AlumniServices() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Alumni Services</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Stay connected with your alma mater through our comprehensive alumni services and programs
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

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-mist">
                    <div className="w-1.5 h-1.5 bg-almond rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full bg-navy text-ivory py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors duration-300">
                {service.action}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-navy text-ivory p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Join the JRU Alumni Association</h3>
            <p className="text-mist mb-6 max-w-2xl mx-auto">
              Become an active member of our growing alumni community and help shape the future of JRU while advancing
              your own career and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-almond text-navy px-8 py-3 rounded-full font-semibold hover:bg-almond/90 transition-colors">
                Become a Member
              </button>
              <button className="border border-almond text-almond px-8 py-3 rounded-full font-semibold hover:bg-almond hover:text-navy transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
