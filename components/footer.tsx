import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerSections = [
  {
    title: "About JRU",
    links: [
      { name: "University Profile", href: "/about/profile" },
      { name: "President's Message", href: "/about/president" },
      { name: "Officials", href: "/about/officials" },
      { name: "Awards & Recognition", href: "/about/awards" },
      { name: "Core Philosophy", href: "/about/philosophy" },
    ],
  },
  {
    title: "Academics",
    links: [
      { name: "Academic Calendar", href: "/academics/calendar" },
      { name: "Colleges", href: "/academics/colleges" },
      { name: "Graduate Programs", href: "/academics/graduate" },
      { name: "Research Centers", href: "/academics/research" },
      { name: "Innovation Hubs", href: "/academics/innovation" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { name: "Campus Life", href: "/campus-life" },
      { name: "Student Organizations", href: "/campus-life/organizations" },
      { name: "Sports & Recreation", href: "/campus-life/sports" },
      { name: "Cultural Affairs", href: "/campus-life/cultural" },
      { name: "Student Handbook", href: "/students/handbook" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "AIMS Portal", href: "/aims-portal" },
      { name: "E-Learning", href: "/e-learning" },
      { name: "Library Services", href: "/services/library" },
      { name: "Registrar", href: "/departments/registrar" },
      { name: "Counseling Services", href: "/departments/counseling" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* University Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-almond rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-xl">JRU</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Jak Roberto University</h3>
                <p className="text-mist text-sm">Excellence • Innovation • Service</p>
              </div>
            </div>

            <p className="text-mist mb-6 leading-relaxed">
              Committed to providing world-class education that prepares students for global leadership and service to
              humanity through innovative programs and transformative learning experiences.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-mist">
                <MapPin className="h-5 w-5 text-almond" />
                <span className="text-sm">123 University Avenue, Manila, Philippines</span>
              </div>
              <div className="flex items-center space-x-3 text-mist">
                <Phone className="h-5 w-5 text-almond" />
                <span className="text-sm">+63 2 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-mist">
                <Mail className="h-5 w-5 text-almond" />
                <span className="text-sm">info@jru.edu.ph</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-almond mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-mist hover:text-almond transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-mist/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-mist hover:text-almond transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-mist hover:text-almond transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-mist hover:text-almond transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-mist hover:text-almond transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-mist">
              <p>&copy; {new Date().getFullYear()} Jak Roberto University. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-almond transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-almond transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="hover:text-almond transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
