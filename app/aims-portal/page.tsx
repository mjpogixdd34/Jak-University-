"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { User, BookOpen, CreditCard, FileText, Calendar, GraduationCap, Bell, Settings } from "lucide-react"

export default function AIMSPortalPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const studentData = {
    name: "Juan Carlos dela Cruz",
    studentId: "2021-12345",
    program: "BS Information Technology",
    year: "4th Year",
    semester: "1st Semester AY 2024-2025",
    gpa: "3.75",
    units: "21",
    image: "/student-profile-sample.png",
  }

  const grades = [
    { code: "IT401", subject: "Software Engineering", units: 3, grade: "A", remarks: "Passed" },
    { code: "IT402", subject: "Database Systems", units: 3, grade: "A-", remarks: "Passed" },
    { code: "IT403", subject: "Web Development", units: 3, grade: "B+", remarks: "Passed" },
    { code: "GE08", subject: "Ethics", units: 3, grade: "A", remarks: "Passed" },
    { code: "PE04", subject: "Physical Education", units: 2, grade: "A", remarks: "Passed" },
  ]

  const schedule = [
    { time: "7:30-9:00 AM", monday: "IT401", tuesday: "", wednesday: "IT401", thursday: "", friday: "IT401" },
    { time: "9:00-10:30 AM", monday: "IT402", tuesday: "GE08", wednesday: "IT402", thursday: "GE08", friday: "IT402" },
    { time: "10:30-12:00 PM", monday: "", tuesday: "IT403", wednesday: "", thursday: "IT403", friday: "" },
    { time: "1:00-2:30 PM", monday: "PE04", tuesday: "", wednesday: "PE04", thursday: "", friday: "" },
  ]

  const announcements = [
    { date: "2025-01-15", title: "Midterm Examination Schedule Released", type: "Academic" },
    { date: "2025-01-12", title: "Library Extended Hours During Finals", type: "Service" },
    { date: "2025-01-10", title: "Scholarship Application Deadline", type: "Financial" },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Portal Header */}
        <div className="bg-navy text-ivory py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">AIMS Portal</h1>
                <p className="text-mist">Academic Information Management System</p>
              </div>
              <div className="flex items-center space-x-4">
                <Bell className="h-6 w-6 text-almond" />
                <Settings className="h-6 w-6 text-almond" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <img
                    src={studentData.image || "/placeholder.svg"}
                    alt="Student Profile"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-navy">{studentData.name}</h3>
                  <p className="text-mist text-sm">{studentData.studentId}</p>
                  <p className="text-mist text-sm">{studentData.program}</p>
                </div>

                <nav className="space-y-2">
                  {[
                    { id: "dashboard", label: "Dashboard", icon: User },
                    { id: "grades", label: "Grades", icon: BookOpen },
                    { id: "schedule", label: "Schedule", icon: Calendar },
                    { id: "enrollment", label: "Enrollment", icon: GraduationCap },
                    { id: "payments", label: "Payments", icon: CreditCard },
                    { id: "documents", label: "Documents", icon: FileText },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === item.id ? "bg-navy text-ivory" : "text-mist hover:bg-mist/10 hover:text-navy"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {activeTab === "dashboard" && (
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-6">Dashboard</h2>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                      {[
                        { label: "Current GPA", value: studentData.gpa, color: "bg-green-500" },
                        { label: "Units Enrolled", value: studentData.units, color: "bg-blue-500" },
                        { label: "Year Level", value: studentData.year, color: "bg-purple-500" },
                        { label: "Semester", value: "1st Sem", color: "bg-orange-500" },
                      ].map((stat, index) => (
                        <div key={index} className="bg-ivory p-4 rounded-lg text-center">
                          <div
                            className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                          >
                            <span className="text-white font-bold">{stat.value}</span>
                          </div>
                          <p className="text-mist text-sm">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Recent Announcements */}
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-4">Recent Announcements</h3>
                      <div className="space-y-3">
                        {announcements.map((announcement, index) => (
                          <div key={index} className="border border-mist/20 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs bg-navy text-ivory px-2 py-1 rounded-full">
                                {announcement.type}
                              </span>
                              <span className="text-xs text-mist">{announcement.date}</span>
                            </div>
                            <h4 className="font-semibold text-navy">{announcement.title}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "grades" && (
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-6">Academic Records</h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-navy mb-4">Current Semester Grades</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-navy text-ivory">
                              <th className="border border-mist/20 p-3 text-left">Course Code</th>
                              <th className="border border-mist/20 p-3 text-left">Subject</th>
                              <th className="border border-mist/20 p-3 text-center">Units</th>
                              <th className="border border-mist/20 p-3 text-center">Grade</th>
                              <th className="border border-mist/20 p-3 text-center">Remarks</th>
                            </tr>
                          </thead>
                          <tbody>
                            {grades.map((grade, index) => (
                              <tr key={index} className="hover:bg-mist/5">
                                <td className="border border-mist/20 p-3 font-semibold">{grade.code}</td>
                                <td className="border border-mist/20 p-3">{grade.subject}</td>
                                <td className="border border-mist/20 p-3 text-center">{grade.units}</td>
                                <td className="border border-mist/20 p-3 text-center font-bold text-navy">
                                  {grade.grade}
                                </td>
                                <td className="border border-mist/20 p-3 text-center">
                                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                    {grade.remarks}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-ivory p-4 rounded-lg">
                      <h4 className="font-semibold text-navy mb-2">Semester Summary</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-navy">3.75</div>
                          <div className="text-mist text-sm">GPA</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-navy">17</div>
                          <div className="text-mist text-sm">Total Units</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-navy">5</div>
                          <div className="text-mist text-sm">Subjects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "schedule" && (
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-6">Class Schedule</h2>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-navy text-ivory">
                            <th className="border border-mist/20 p-3">Time</th>
                            <th className="border border-mist/20 p-3">Monday</th>
                            <th className="border border-mist/20 p-3">Tuesday</th>
                            <th className="border border-mist/20 p-3">Wednesday</th>
                            <th className="border border-mist/20 p-3">Thursday</th>
                            <th className="border border-mist/20 p-3">Friday</th>
                          </tr>
                        </thead>
                        <tbody>
                          {schedule.map((slot, index) => (
                            <tr key={index} className="hover:bg-mist/5">
                              <td className="border border-mist/20 p-3 font-semibold bg-ivory">{slot.time}</td>
                              <td className="border border-mist/20 p-3 text-center">
                                {slot.monday && (
                                  <span className="bg-navy text-ivory px-2 py-1 rounded text-xs">{slot.monday}</span>
                                )}
                              </td>
                              <td className="border border-mist/20 p-3 text-center">
                                {slot.tuesday && (
                                  <span className="bg-navy text-ivory px-2 py-1 rounded text-xs">{slot.tuesday}</span>
                                )}
                              </td>
                              <td className="border border-mist/20 p-3 text-center">
                                {slot.wednesday && (
                                  <span className="bg-navy text-ivory px-2 py-1 rounded text-xs">{slot.wednesday}</span>
                                )}
                              </td>
                              <td className="border border-mist/20 p-3 text-center">
                                {slot.thursday && (
                                  <span className="bg-navy text-ivory px-2 py-1 rounded text-xs">{slot.thursday}</span>
                                )}
                              </td>
                              <td className="border border-mist/20 p-3 text-center">
                                {slot.friday && (
                                  <span className="bg-navy text-ivory px-2 py-1 rounded text-xs">{slot.friday}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "enrollment" && (
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-6">Enrollment Status</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-ivory p-6 rounded-lg">
                        <h3 className="font-bold text-navy mb-4">Current Enrollment</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-mist">Academic Year:</span>
                            <span className="font-semibold">2024-2025</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-mist">Semester:</span>
                            <span className="font-semibold">1st Semester</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-mist">Status:</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                              Enrolled
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-mist">Total Units:</span>
                            <span className="font-semibold">21 units</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-ivory p-6 rounded-lg">
                        <h3 className="font-bold text-navy mb-4">Next Semester</h3>
                        <div className="text-center">
                          <p className="text-mist mb-4">Pre-enrollment for 2nd Semester 2024-2025</p>
                          <button className="bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-navy/90 transition-colors">
                            Start Pre-enrollment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "payments" && (
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-6">Payment Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-ivory p-6 rounded-lg">
                        <h3 className="font-bold text-navy mb-4">Current Balance</h3>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-navy mb-2">₱15,750.00</div>
                          <p className="text-mist">Outstanding Balance</p>
                          <button className="mt-4 bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-navy/90 transition-colors">
                            Pay Now
                          </button>
                        </div>
                      </div>

                      <div className="bg-ivory p-6 rounded-lg">
                        <h3 className="font-bold text-navy mb-4">Payment History</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Jan 15, 2025</span>
                            <span className="font-semibold">₱25,000.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Dec 10, 2024</span>
                            <span className="font-semibold">₱25,000.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Nov 15, 2024</span>
                            <span className="font-semibold">₱25,000.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "documents" && (
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-6">Document Requests</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-navy mb-4">Request New Document</h3>
                        <div className="space-y-3">
                          {[
                            "Certificate of Enrollment",
                            "Transcript of Records",
                            "Certificate of Good Moral",
                            "Diploma (Certified True Copy)",
                            "Certificate of Grades",
                          ].map((doc, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 border border-mist/20 rounded-lg"
                            >
                              <span className="text-navy">{doc}</span>
                              <button className="bg-navy text-ivory px-4 py-1 rounded text-sm hover:bg-navy/90 transition-colors">
                                Request
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-navy mb-4">Request Status</h3>
                        <div className="space-y-3">
                          <div className="p-3 border border-mist/20 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">Certificate of Enrollment</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Ready</span>
                            </div>
                            <p className="text-mist text-sm">Requested: Jan 10, 2025</p>
                          </div>
                          <div className="p-3 border border-mist/20 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">Transcript of Records</span>
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                                Processing
                              </span>
                            </div>
                            <p className="text-mist text-sm">Requested: Jan 8, 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
