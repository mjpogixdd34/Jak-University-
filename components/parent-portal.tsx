"use client"

import { useState } from "react"
import { User, BookOpen, CreditCard, Calendar, MessageCircle } from "lucide-react"

export default function ParentPortal() {
  const [activeTab, setActiveTab] = useState("overview")

  const studentData = {
    name: "Maria Elena Santos",
    studentId: "2022-67890",
    program: "BS Information Technology",
    year: "3rd Year",
    semester: "1st Semester AY 2024-2025",
    gpa: "3.85",
    image: "/student-maria-santos.png",
  }

  const recentGrades = [
    { subject: "Data Structures", grade: "A", date: "2025-01-15" },
    { subject: "Web Programming", grade: "A-", date: "2025-01-12" },
    { subject: "Database Systems", grade: "B+", date: "2025-01-10" },
  ]

  const upcomingEvents = [
    { event: "Parent-Teacher Conference", date: "2025-01-25", time: "2:00 PM" },
    { event: "Academic Awards Ceremony", date: "2025-02-05", time: "10:00 AM" },
    { event: "Career Fair", date: "2025-02-15", time: "9:00 AM" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Parent Dashboard</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Stay connected with your child's academic progress and university activities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <img
                  src={studentData.image || "/placeholder.svg"}
                  alt="Student"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-navy">{studentData.name}</h3>
                <p className="text-mist text-sm">{studentData.studentId}</p>
                <p className="text-mist text-sm">{studentData.program}</p>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "overview", label: "Overview", icon: User },
                  { id: "academics", label: "Academic Progress", icon: BookOpen },
                  { id: "finances", label: "Financial Information", icon: CreditCard },
                  { id: "events", label: "Events & Activities", icon: Calendar },
                  { id: "communication", label: "Communication", icon: MessageCircle },
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
              {activeTab === "overview" && (
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">Student Overview</h3>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Current GPA", value: studentData.gpa, color: "bg-green-500" },
                      { label: "Year Level", value: studentData.year, color: "bg-blue-500" },
                      { label: "Attendance", value: "95%", color: "bg-purple-500" },
                      { label: "Credits Earned", value: "89", color: "bg-orange-500" },
                    ].map((stat, index) => (
                      <div key={index} className="bg-ivory p-4 rounded-lg text-center">
                        <div
                          className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                        >
                          <span className="text-white font-bold text-sm">{stat.value}</span>
                        </div>
                        <p className="text-mist text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-navy mb-4">Recent Grades</h4>
                      <div className="space-y-3">
                        {recentGrades.map((grade, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-ivory rounded-lg">
                            <div>
                              <div className="font-semibold text-navy">{grade.subject}</div>
                              <div className="text-mist text-sm">{grade.date}</div>
                            </div>
                            <div className="text-lg font-bold text-navy">{grade.grade}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-navy mb-4">Upcoming Events</h4>
                      <div className="space-y-3">
                        {upcomingEvents.map((event, index) => (
                          <div key={index} className="p-3 bg-ivory rounded-lg">
                            <div className="font-semibold text-navy">{event.event}</div>
                            <div className="text-mist text-sm">
                              {event.date} at {event.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "academics" && (
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">Academic Progress</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-ivory p-6 rounded-lg">
                      <h4 className="font-bold text-navy mb-4">Current Semester Performance</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>GPA:</span>
                          <span className="font-bold text-green-600">3.85</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Units Enrolled:</span>
                          <span className="font-semibold">21</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Attendance Rate:</span>
                          <span className="font-semibold">95%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-ivory p-6 rounded-lg">
                      <h4 className="font-bold text-navy mb-4">Academic Standing</h4>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-navy mb-2">Dean's List</div>
                        <p className="text-mist">Excellent Academic Performance</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-4">Subject Performance</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-navy text-ivory">
                            <th className="border p-3 text-left">Subject</th>
                            <th className="border p-3 text-center">Midterm</th>
                            <th className="border p-3 text-center">Final</th>
                            <th className="border p-3 text-center">Overall</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { subject: "Data Structures", midterm: "A", final: "A", overall: "A" },
                            { subject: "Web Programming", midterm: "A-", final: "A", overall: "A-" },
                            { subject: "Database Systems", midterm: "B+", final: "A-", overall: "B+" },
                            { subject: "Software Engineering", midterm: "A", final: "-", overall: "A" },
                          ].map((grade, index) => (
                            <tr key={index} className="hover:bg-mist/5">
                              <td className="border p-3">{grade.subject}</td>
                              <td className="border p-3 text-center font-semibold">{grade.midterm}</td>
                              <td className="border p-3 text-center font-semibold">{grade.final}</td>
                              <td className="border p-3 text-center font-bold text-navy">{grade.overall}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "finances" && (
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">Financial Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-ivory p-6 rounded-lg">
                      <h4 className="font-bold text-navy mb-4">Current Balance</h4>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-navy mb-2">₱12,500.00</div>
                        <p className="text-mist">Outstanding Balance</p>
                        <button className="mt-4 bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-navy/90 transition-colors">
                          Pay Online
                        </button>
                      </div>
                    </div>

                    <div className="bg-ivory p-6 rounded-lg">
                      <h4 className="font-bold text-navy mb-4">Payment Schedule</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>1st Payment:</span>
                          <span className="text-green-600 font-semibold">Paid</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2nd Payment:</span>
                          <span className="text-green-600 font-semibold">Paid</span>
                        </div>
                        <div className="flex justify-between">
                          <span>3rd Payment:</span>
                          <span className="text-orange-600 font-semibold">Due Jan 30</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-4">Payment History</h4>
                    <div className="space-y-3">
                      {[
                        { date: "2025-01-15", amount: "₱25,000.00", description: "Tuition Fee - 1st Semester" },
                        { date: "2024-12-10", amount: "₱25,000.00", description: "Tuition Fee - 2nd Installment" },
                        { date: "2024-11-15", amount: "₱25,000.00", description: "Tuition Fee - 1st Installment" },
                      ].map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-ivory rounded-lg">
                          <div>
                            <div className="font-semibold text-navy">{payment.description}</div>
                            <div className="text-mist text-sm">{payment.date}</div>
                          </div>
                          <div className="font-bold text-navy">{payment.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "events" && (
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">Events & Activities</h3>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Parent-Teacher Conference",
                        date: "2025-01-25",
                        time: "2:00 PM - 5:00 PM",
                        location: "Main Auditorium",
                        description: "Meet with your child's professors to discuss academic progress",
                        type: "Academic",
                      },
                      {
                        title: "Academic Awards Ceremony",
                        date: "2025-02-05",
                        time: "10:00 AM - 12:00 PM",
                        location: "University Gymnasium",
                        description: "Recognition ceremony for outstanding students",
                        type: "Recognition",
                      },
                      {
                        title: "Career Fair",
                        date: "2025-02-15",
                        time: "9:00 AM - 4:00 PM",
                        location: "Student Center",
                        description: "Job opportunities and internship programs for students",
                        type: "Career",
                      },
                    ].map((event, index) => (
                      <div key={index} className="bg-ivory p-6 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-navy mb-2">{event.title}</h4>
                            <p className="text-mist text-sm mb-2">{event.description}</p>
                          </div>
                          <span className="bg-navy text-ivory px-3 py-1 rounded-full text-xs font-semibold">
                            {event.type}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-mist">Date:</span>
                            <div className="font-semibold">{new Date(event.date).toLocaleDateString()}</div>
                          </div>
                          <div>
                            <span className="text-mist">Time:</span>
                            <div className="font-semibold">{event.time}</div>
                          </div>
                          <div>
                            <span className="text-mist">Location:</span>
                            <div className="font-semibold">{event.location}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "communication" && (
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">Communication Center</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-navy mb-4">Send Message</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-navy font-semibold mb-2">To:</label>
                          <select className="w-full p-3 border border-mist/30 rounded-lg">
                            <option>Select Recipient</option>
                            <option>Academic Advisor</option>
                            <option>Program Coordinator</option>
                            <option>Student Affairs</option>
                            <option>Finance Office</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-navy font-semibold mb-2">Subject:</label>
                          <input
                            type="text"
                            className="w-full p-3 border border-mist/30 rounded-lg"
                            placeholder="Enter subject"
                          />
                        </div>
                        <div>
                          <label className="block text-navy font-semibold mb-2">Message:</label>
                          <textarea
                            className="w-full p-3 border border-mist/30 rounded-lg h-32"
                            placeholder="Enter your message"
                          ></textarea>
                        </div>
                        <button className="w-full bg-navy text-ivory py-3 rounded-lg hover:bg-navy/90 transition-colors">
                          Send Message
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-navy mb-4">Recent Messages</h4>
                      <div className="space-y-3">
                        {[
                          {
                            from: "Academic Advisor",
                            subject: "Mid-semester Progress Update",
                            date: "2025-01-18",
                            preview: "Your daughter is performing excellently in all subjects...",
                          },
                          {
                            from: "Finance Office",
                            subject: "Payment Reminder",
                            date: "2025-01-15",
                            preview: "This is a friendly reminder about the upcoming payment...",
                          },
                          {
                            from: "Student Affairs",
                            subject: "Parent-Teacher Conference",
                            date: "2025-01-12",
                            preview: "We would like to invite you to our upcoming conference...",
                          },
                        ].map((message, index) => (
                          <div
                            key={index}
                            className="p-4 bg-ivory rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-navy">{message.from}</span>
                              <span className="text-mist text-sm">{message.date}</span>
                            </div>
                            <div className="font-semibold text-navy mb-1">{message.subject}</div>
                            <div className="text-mist text-sm">{message.preview}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
