"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Users,
  Heart,
  BookOpen,
  Briefcase,
  Shield,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"

export default function StudentServicesPortalPage() {
  const [user, setUser] = useState<any>(null)
  const [activeService, setActiveService] = useState("counseling")
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const services = [
    {
      id: "counseling",
      title: "Counseling Services",
      icon: Heart,
      description: "Mental health support and academic guidance",
      color: "bg-pink-500",
      image: "/counseling-session.png",
    },
    {
      id: "academic",
      title: "Academic Support",
      icon: BookOpen,
      description: "Tutoring, study groups, and academic assistance",
      color: "bg-blue-500",
      image: "/academic-tutoring.png",
    },
    {
      id: "career",
      title: "Career Services",
      icon: Briefcase,
      description: "Job placement, internships, and career guidance",
      color: "bg-green-500",
      image: "/career-counseling.png",
    },
    {
      id: "safety",
      title: "Campus Safety",
      icon: Shield,
      description: "Security services and emergency assistance",
      color: "bg-red-500",
      image: "/campus-security.png",
    },
    {
      id: "health",
      title: "Health Services",
      icon: Heart,
      description: "Medical care and health consultations",
      color: "bg-purple-500",
      image: "/health-clinic.png",
    },
    {
      id: "support",
      title: "Student Support",
      icon: Users,
      description: "General student assistance and advocacy",
      color: "bg-orange-500",
      image: "/student-support.png",
    },
  ]

  const appointments = [
    {
      date: "2025-01-20",
      time: "10:00 AM",
      service: "Career Counseling",
      counselor: "Ms. Ana Cruz",
      status: "Confirmed",
    },
    {
      date: "2025-01-22",
      time: "2:00 PM",
      service: "Academic Support",
      counselor: "Prof. Carlos Santos",
      status: "Pending",
    },
    {
      date: "2025-01-25",
      time: "11:00 AM",
      service: "Mental Health",
      counselor: "Dr. Maria Rodriguez",
      status: "Confirmed",
    },
  ]

  const serviceDetails = {
    counseling: {
      title: "Counseling Services",
      description: "Professional mental health support and personal guidance for students",
      services: [
        "Individual counseling sessions",
        "Group therapy sessions",
        "Crisis intervention",
        "Stress management workshops",
        "Academic counseling",
        "Personal development programs",
      ],
      contact: {
        phone: "(02) 8123-4567 ext. 301",
        email: "counseling@jru.edu.ph",
        location: "Student Services Building, 3rd Floor",
        hours: "Monday-Friday, 8:00 AM - 5:00 PM",
      },
    },
    academic: {
      title: "Academic Support Services",
      description: "Comprehensive academic assistance to help students succeed",
      services: [
        "Free tutoring sessions",
        "Study skills workshops",
        "Writing center assistance",
        "Math and science support",
        "Research guidance",
        "Academic planning",
      ],
      contact: {
        phone: "(02) 8123-4567 ext. 302",
        email: "academic.support@jru.edu.ph",
        location: "Library Building, 2nd Floor",
        hours: "Monday-Friday, 9:00 AM - 6:00 PM",
      },
    },
    career: {
      title: "Career Development Services",
      description: "Preparing students for successful careers and professional growth",
      services: [
        "Career counseling and planning",
        "Resume and cover letter assistance",
        "Interview preparation",
        "Job placement assistance",
        "Internship coordination",
        "Industry networking events",
      ],
      contact: {
        phone: "(02) 8123-4567 ext. 303",
        email: "careers@jru.edu.ph",
        location: "Career Center, Admin Building",
        hours: "Monday-Friday, 8:30 AM - 5:30 PM",
      },
    },
    safety: {
      title: "Campus Safety & Security",
      description: "Ensuring a safe and secure campus environment for all students",
      services: [
        "24/7 campus security patrol",
        "Emergency response services",
        "Safety escort services",
        "Lost and found assistance",
        "Incident reporting",
        "Safety awareness programs",
      ],
      contact: {
        phone: "(02) 8123-4567 ext. 911",
        email: "security@jru.edu.ph",
        location: "Security Office, Main Gate",
        hours: "24/7 Emergency Services",
      },
    },
    health: {
      title: "Health & Medical Services",
      description: "Comprehensive healthcare services for student wellness",
      services: [
        "General medical consultations",
        "First aid and emergency care",
        "Health screenings",
        "Vaccination programs",
        "Health education workshops",
        "Referral services",
      ],
      contact: {
        phone: "(02) 8123-4567 ext. 304",
        email: "health@jru.edu.ph",
        location: "Health Center, Ground Floor",
        hours: "Monday-Friday, 8:00 AM - 5:00 PM",
      },
    },
    support: {
      title: "General Student Support",
      description: "Comprehensive support services for all student needs",
      services: [
        "Student advocacy",
        "Accommodation services",
        "Financial aid guidance",
        "Housing assistance",
        "Transportation services",
        "Student rights information",
      ],
      contact: {
        phone: "(02) 8123-4567 ext. 305",
        email: "student.affairs@jru.edu.ph",
        location: "Student Affairs Office, 2nd Floor",
        hours: "Monday-Friday, 8:00 AM - 5:00 PM",
      },
    },
  }

  if (!user) return null

  const currentService = serviceDetails[activeService as keyof typeof serviceDetails]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-navy text-ivory py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Student Services Portal</h1>
            <p className="text-mist">Access comprehensive support services for your academic journey</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Service Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Services</h3>
                <nav className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeService === service.id
                          ? "bg-navy text-ivory"
                          : "text-mist hover:bg-mist/10 hover:text-navy"
                      }`}
                    >
                      <service.icon className="h-5 w-5" />
                      <span className="text-sm">{service.title}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h3 className="font-bold text-navy mb-4">Emergency Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Emergency: 911</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-navy" />
                    <span className="text-sm">Campus Security: ext. 911</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Crisis Hotline: 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Service Header */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="flex">
                  <div className="flex-1 p-8">
                    <h2 className="text-3xl font-bold text-navy mb-4">{currentService.title}</h2>
                    <p className="text-mist text-lg mb-6">{currentService.description}</p>
                    <button className="bg-navy text-ivory px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors">
                      Schedule Appointment
                    </button>
                  </div>
                  <div className="w-64 h-48">
                    <img
                      src={services.find((s) => s.id === activeService)?.image || "/placeholder.svg"}
                      alt={currentService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-navy mb-4">Services Offered</h3>
                  <ul className="space-y-3">
                    {currentService.services.map((service, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-mist">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-navy mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-navy mt-0.5" />
                      <div>
                        <p className="font-semibold text-navy">Phone</p>
                        <p className="text-mist text-sm">{currentService.contact.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-navy mt-0.5" />
                      <div>
                        <p className="font-semibold text-navy">Email</p>
                        <p className="text-mist text-sm">{currentService.contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-navy mt-0.5" />
                      <div>
                        <p className="font-semibold text-navy">Location</p>
                        <p className="text-mist text-sm">{currentService.contact.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-navy mt-0.5" />
                      <div>
                        <p className="font-semibold text-navy">Hours</p>
                        <p className="text-mist text-sm">{currentService.contact.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Your Upcoming Appointments</h3>
                {appointments.length > 0 ? (
                  <div className="space-y-4">
                    {appointments.map((appointment, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-mist/20 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-ivory" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-navy">{appointment.service}</h4>
                            <p className="text-mist text-sm">with {appointment.counselor}</p>
                            <p className="text-mist text-sm">
                              {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            appointment.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-mist mx-auto mb-4" />
                    <p className="text-mist">No upcoming appointments</p>
                    <button className="mt-4 bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-navy/90 transition-colors">
                      Schedule New Appointment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
