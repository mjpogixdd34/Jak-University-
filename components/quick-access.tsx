import Link from "next/link"
import { GraduationCap, HelpCircle, Monitor, BookOpen, Mail } from "lucide-react"

const quickAccessItems = [
  {
    icon: GraduationCap,
    title: "Apply Now",
    description: "Start your journey with us",
    href: "/admissions/apply",
    color: "bg-navy hover:bg-navy/90",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Get answers to common questions",
    href: "/faqs",
    color: "bg-mist hover:bg-mist/90 text-noir",
  },
  {
    icon: Monitor,
    title: "AIMS Portal",
    description: "Access student information system",
    href: "/aims-portal",
    color: "bg-noir hover:bg-noir/90",
  },
  {
    icon: BookOpen,
    title: "E-Learning Portal",
    description: "Access online courses and materials",
    href: "/e-learning",
    color: "bg-almond hover:bg-almond/90 text-noir",
  },
  {
    icon: Mail,
    title: "Microsoft 365",
    description: "Campus email and collaboration",
    href: "/microsoft-365",
    color: "bg-navy hover:bg-navy/90",
  },
]

export default function QuickAccess() {
  return (
    <section className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Quick Access</h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            Fast-track your university experience with our essential services and portals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {quickAccessItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mist/20">
                <div
                  className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-6 w-6 text-ivory" />
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-navy/80 transition-colors">{item.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
