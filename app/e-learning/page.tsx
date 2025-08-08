"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Play, BookOpen, Clock, Download, MessageCircle } from "lucide-react"

export default function ELearningPage() {
  const [activeTab, setActiveTab] = useState("courses")

  const courses = [
    {
      id: 1,
      title: "Advanced Web Development",
      instructor: "Prof. Maria Santos",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      duration: "8 weeks",
      image: "/course-web-development.png",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Database Management Systems",
      instructor: "Dr. Carlos Rodriguez",
      progress: 100,
      totalLessons: 10,
      completedLessons: 10,
      duration: "6 weeks",
      image: "/course-database-systems.png",
      status: "Completed",
    },
    {
      id: 3,
      title: "Software Engineering Principles",
      instructor: "Prof. Ana Cruz",
      progress: 45,
      totalLessons: 15,
      completedLessons: 7,
      duration: "10 weeks",
      image: "/course-software-engineering.png",
      status: "In Progress",
    },
  ]

  const assignments = [
    {
      title: "Web Development Project",
      course: "Advanced Web Development",
      dueDate: "2025-01-25",
      status: "Pending",
      points: 100,
    },
    {
      title: "Database Design Assignment",
      course: "Database Management Systems",
      dueDate: "2025-01-20",
      status: "Submitted",
      points: 85,
    },
    {
      title: "Software Requirements Document",
      course: "Software Engineering Principles",
      dueDate: "2025-01-30",
      status: "Draft",
      points: 75,
    },
  ]

  const discussions = [
    {
      title: "Best Practices in React Development",
      course: "Advanced Web Development",
      author: "Juan dela Cruz",
      replies: 12,
      lastActivity: "2 hours ago",
    },
    {
      title: "SQL vs NoSQL Databases",
      course: "Database Management Systems",
      author: "Maria Garcia",
      replies: 8,
      lastActivity: "1 day ago",
    },
    {
      title: "Agile vs Waterfall Methodology",
      course: "Software Engineering Principles",
      author: "Carlos Mendoza",
      replies: 15,
      lastActivity: "3 hours ago",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-navy text-ivory py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">E-Learning Platform</h1>
            <p className="text-mist">Access your courses, assignments, and learning materials</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: "courses", label: "My Courses", icon: BookOpen },
              { id: "assignments", label: "Assignments", icon: Clock },
              { id: "discussions", label: "Discussions", icon: MessageCircle },
              { id: "resources", label: "Resources", icon: Download },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id ? "bg-navy text-ivory" : "bg-white text-mist hover:bg-mist/10 hover:text-navy"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === "courses" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy">My Courses</h2>
                <div className="text-sm text-mist">
                  {courses.filter((c) => c.status === "In Progress").length} courses in progress
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            course.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {course.status}
                        </span>
                        <span className="text-mist text-sm">{course.duration}</span>
                      </div>

                      <h3 className="font-bold text-navy mb-2">{course.title}</h3>
                      <p className="text-mist text-sm mb-4">by {course.instructor}</p>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-mist/20 rounded-full h-2">
                          <div
                            className="bg-navy h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-mist mt-1">
                          {course.completedLessons} of {course.totalLessons} lessons completed
                        </div>
                      </div>

                      <button className="w-full bg-navy text-ivory py-2 rounded-lg hover:bg-navy/90 transition-colors flex items-center justify-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>Continue Learning</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy">Assignments</h2>
                <div className="text-sm text-mist">
                  {assignments.filter((a) => a.status === "Pending").length} pending assignments
                </div>
              </div>

              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-navy mb-1">{assignment.title}</h3>
                        <p className="text-mist text-sm">{assignment.course}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          assignment.status === "Submitted"
                            ? "bg-green-100 text-green-800"
                            : assignment.status === "Pending"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-mist">Due Date:</span>
                        <div className="font-semibold">{new Date(assignment.dueDate).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <span className="text-mist">Points:</span>
                        <div className="font-semibold">{assignment.points} pts</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-navy text-ivory px-4 py-2 rounded hover:bg-navy/90 transition-colors">
                          View Details
                        </button>
                        {assignment.status === "Pending" && (
                          <button className="border border-navy text-navy px-4 py-2 rounded hover:bg-navy hover:text-ivory transition-colors">
                            Submit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "discussions" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy">Discussion Forums</h2>
                <button className="bg-navy text-ivory px-4 py-2 rounded-lg hover:bg-navy/90 transition-colors">
                  New Discussion
                </button>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-navy mb-2">{discussion.title}</h3>
                        <p className="text-mist text-sm mb-2">{discussion.course}</p>
                        <div className="flex items-center space-x-4 text-sm text-mist">
                          <span>by {discussion.author}</span>
                          <span>{discussion.replies} replies</span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                      <button className="text-navy hover:text-navy/80 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "resources" && (
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Learning Resources</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Course Syllabus - Web Development", type: "PDF", size: "2.5 MB", downloads: 45 },
                  { title: "Database Design Templates", type: "ZIP", size: "15.2 MB", downloads: 32 },
                  { title: "Software Engineering Guidelines", type: "PDF", size: "8.7 MB", downloads: 67 },
                  { title: "Programming Best Practices", type: "PDF", size: "4.1 MB", downloads: 89 },
                  { title: "Project Management Tools", type: "ZIP", size: "25.6 MB", downloads: 23 },
                  { title: "Code Review Checklist", type: "PDF", size: "1.8 MB", downloads: 56 },
                ].map((resource, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                        <Download className="h-6 w-6 text-ivory" />
                      </div>
                      <span className="text-xs bg-mist/20 text-mist px-2 py-1 rounded-full">{resource.type}</span>
                    </div>

                    <h3 className="font-bold text-navy mb-2">{resource.title}</h3>
                    <div className="flex items-center justify-between text-sm text-mist mb-4">
                      <span>{resource.size}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>

                    <button className="w-full bg-navy text-ivory py-2 rounded-lg hover:bg-navy/90 transition-colors flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
