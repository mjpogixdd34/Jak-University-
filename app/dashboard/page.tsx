"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  BookOpen,
  CreditCard,
  FileText,
  Calendar,
  Users,
  GraduationCap,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) return null

  const portals = [
    {
      title: "AIMS Portal",
      description: "Academic Information Management System",
      icon: GraduationCap,
      href: "/aims-portal",
      color: "bg-blue-500",
      image: "/academic-records-system.png",
    },
    {
      title: "E-Learning Platform",
      description: "Access courses and learning materials",
      icon: BookOpen,
      href: "/e-learning",
      color: "bg-green-500",
      image: "/online-learning-platform.png",
    },
    {
      title: "Payment Portal",
      description: "Manage tuition and fee payments",
      icon: CreditCard,
      href: "/payment-portal",
      color: "bg-purple-500",
      image: "/payment-processing-system.png",
    },
    {
      title: "Document Requests",
      description: "Request official documents",
      icon: FileText,
      href: "/document-portal",
      color: "bg-orange-500",
      image: "/document-management-system.png",
    },
    {
      title: "Student Services",
      description: "Access student support services",
      icon: Users,
      href: "/student-services-portal",
      color: "bg-teal-500",
      image: "/student-support-services.png",
    },
    {
      title: "Event Registration",
      description: "Register for university events",
      icon: Calendar,
      href: "/event-portal",
      color: "bg-red-500",
      image: "/event-registration-system.png",
    },
  ]

  const recentActivity = [
    { action: "Submitted assignment", course: "Web Development", time: "2 hours ago" },
    { action: "Payment processed", amount: "₱25,000", time: "1 day ago" },
    { action: "Document requested", type: "Certificate of Enrollment", time: "3 days ago" },
    { action: "Event registered", event: "Career Fair 2025", time: "1 week ago" },
  ]

  const announcements = [
    { title: "Midterm Examination Schedule Released", date: "2025-01-15", type: "Academic" },
    { title: "New Scholarship Program Available", date: "2025-01-12", type: "Financial" },
    { title: "Campus Safety Guidelines Updated", date: "2025-01-10", type: "Safety" },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Dashboard Header */}
        <div className="bg-navy text-ivory py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/student-profile-sample.png"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover border-2 border-almond"
                />
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
                  <p className="text-mist">Student Dashboard - Academic Year 2024-2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-navy/50 rounded-lg transition-colors">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="p-2 hover:bg-navy/50 rounded-lg transition-colors">
                  <Settings className="h-6 w-6" />
                </button>
                <button onClick={handleLogout} className="p-2 hover:bg-navy/50 rounded-lg transition-colors">
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Current GPA", value: "3.75", color: "bg-green-500" },
                  { label: "Units Enrolled", value: "21", color: "bg-blue-500" },
                  { label: "Pending Payments", value: "₱15,750", color: "bg-red-500" },
                  { label: "Documents Ready", value: "2", color: "bg-purple-500" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                    >
                      <span className="text-white font-bold text-lg">
                        {stat.value.includes("₱") ? "₱" : stat.value.replace(/[^0-9.]/g, "")}
                      </span>
                    </div>
                    <p className="text-mist text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Portal Access */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Access Your Portals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portals.map((portal, index) => (
                    <div
                      key={portal.title}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-in fade-in-0 slide-in-from-left-10 duration-500"
                      style={{ animationDelay: `${index * 150}ms` }}
                      onClick={() => router.push(portal.href)}
                    >
                      <div className="flex">
                        <div className="flex-1 p-6">
                          <div className="flex items-center mb-4">
                            <div
                              className={`w-12 h-12 ${portal.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <portal.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-navy group-hover:text-navy/80 transition-colors">
                                {portal.title}
                              </h3>
                              <p className="text-mist text-sm">{portal.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-navy group-hover:text-navy/80 transition-colors">
                            <span className="text-sm font-medium">Access Portal</span>
                            <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="w-32 h-32">
                          <img
                            src={portal.image || "/placeholder.svg"}
                            alt={portal.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 pb-3 border-b border-mist/20 last:border-b-0"
                    >
                      <div className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-navy font-medium text-sm">{activity.action}</p>
                        <p className="text-mist text-xs">
                          {activity.course || activity.amount || activity.type || activity.event}
                        </p>
                        <p className="text-mist text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Announcements */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Latest Announcements</h3>
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="p-3 border border-mist/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            announcement.type === "Academic"
                              ? "bg-blue-100 text-blue-800"
                              : announcement.type === "Financial"
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {announcement.type}
                        </span>
                        <span className="text-xs text-mist">{announcement.date}</span>
                      </div>
                      <h4 className="font-semibold text-navy text-sm">{announcement.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
