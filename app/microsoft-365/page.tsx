"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, FileText, Users, Video, Cloud, MessageSquare, Shield, Clock } from "lucide-react"

export default function Microsoft365Page() {
  const [activeTab, setActiveTab] = useState("overview")

  const apps = [
    {
      icon: Mail,
      name: "Outlook",
      description: "Professional email with calendar integration",
      features: ["50GB mailbox", "Calendar scheduling", "Contact management", "Mobile sync"],
      color: "bg-blue-500",
      url: "https://outlook.office365.com",
    },
    {
      icon: FileText,
      name: "Office Apps",
      description: "Word, Excel, PowerPoint online and desktop",
      features: ["Latest Office suite", "Real-time collaboration", "Cloud sync", "Mobile apps"],
      color: "bg-orange-500",
      url: "https://office.com",
    },
    {
      icon: Users,
      name: "Teams",
      description: "Chat, meetings, and collaboration platform",
      features: ["Video conferencing", "Team chat", "File sharing", "Class integration"],
      color: "bg-purple-500",
      url: "https://teams.microsoft.com",
    },
    {
      icon: Cloud,
      name: "OneDrive",
      description: "1TB cloud storage for all your files",
      features: ["1TB storage", "File sync", "Version history", "Secure sharing"],
      color: "bg-blue-600",
      url: "https://onedrive.com",
    },
    {
      icon: Video,
      name: "Stream",
      description: "Video sharing and streaming platform",
      features: ["Video hosting", "Live streaming", "Secure sharing", "Analytics"],
      color: "bg-red-500",
      url: "https://stream.microsoft.com",
    },
    {
      icon: MessageSquare,
      name: "Yammer",
      description: "Enterprise social networking",
      features: ["Community discussions", "Knowledge sharing", "Group collaboration", "News feed"],
      color: "bg-blue-700",
      url: "https://yammer.com",
    },
  ]

  const tutorials = [
    {
      title: "Getting Started with Microsoft 365",
      description: "Learn the basics of your JRU Microsoft 365 account",
      duration: "15 min",
      type: "Video",
    },
    {
      title: "Using Teams for Online Classes",
      description: "Join virtual classes and collaborate with classmates",
      duration: "20 min",
      type: "Guide",
    },
    {
      title: "OneDrive File Management",
      description: "Organize and share your academic files securely",
      duration: "12 min",
      type: "Video",
    },
    {
      title: "Outlook Email Best Practices",
      description: "Professional email communication for students",
      duration: "18 min",
      type: "Guide",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-navy text-ivory py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-almond rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-navy font-bold text-2xl">M365</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Microsoft 365 for Education</h1>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                Access powerful productivity tools and collaboration platforms with your JRU account
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {[
              { id: "overview", label: "Overview", icon: Shield },
              { id: "apps", label: "Applications", icon: FileText },
              { id: "tutorials", label: "Tutorials", icon: Video },
              { id: "support", label: "Support", icon: MessageSquare },
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
          {activeTab === "overview" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Your Microsoft 365 Account</h2>
                <p className="text-mist text-lg max-w-3xl mx-auto">
                  Every JRU student receives a free Microsoft 365 Education account with access to premium productivity
                  tools
                </p>
              </div>

              {/* Account Info */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-4">Account Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-mist">Email Address:</span>
                        <span className="font-semibold">studentid@student.jru.edu.ph</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mist">License:</span>
                        <span className="font-semibold">Microsoft 365 A3 for Students</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mist">Storage:</span>
                        <span className="font-semibold">1TB OneDrive</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mist">Status:</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-navy mb-4">Quick Access</h3>
                    <div className="space-y-3">
                      <a
                        href="https://portal.office.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-navy text-ivory p-3 rounded-lg hover:bg-navy/90 transition-colors text-center"
                      >
                        Launch Microsoft 365 Portal
                      </a>
                      <a
                        href="https://outlook.office365.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-navy text-navy p-3 rounded-lg hover:bg-navy hover:text-ivory transition-colors text-center"
                      >
                        Access Email
                      </a>
                      <button className="w-full bg-mist/20 text-mist p-3 rounded-lg">Download Office Apps</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Enterprise Security",
                    description: "Advanced security features protect your academic work and personal data",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Integration",
                    description: "Access your files from anywhere with seamless cloud synchronization",
                  },
                  {
                    icon: Users,
                    title: "Collaboration Tools",
                    description: "Work together on projects with real-time collaboration features",
                  },
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-ivory" />
                    </div>
                    <h3 className="font-bold text-navy mb-3">{feature.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "apps" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Available Applications</h2>
                <p className="text-mist text-lg">
                  Explore the full suite of Microsoft 365 applications available to you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apps.map((app, index) => (
                  <div
                    key={app.name}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center mr-4`}>
                          <app.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-navy">{app.name}</h3>
                          <p className="text-mist text-sm">{app.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-mist">
                            <div className="w-1.5 h-1.5 bg-almond rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-navy text-ivory py-3 rounded-lg hover:bg-navy/90 transition-colors text-center font-semibold"
                      >
                        Launch {app.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tutorials" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Learning Resources</h2>
                <p className="text-mist text-lg">Get the most out of your Microsoft 365 tools with these tutorials</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-navy mb-2">{tutorial.title}</h3>
                        <p className="text-mist text-sm mb-3">{tutorial.description}</p>
                      </div>
                      <span className="bg-navy text-ivory px-3 py-1 rounded-full text-xs font-semibold ml-4">
                        {tutorial.type}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-mist">
                        <Clock className="h-4 w-4 mr-2" />
                        {tutorial.duration}
                      </div>
                      <button className="bg-navy text-ivory px-4 py-2 rounded-lg hover:bg-navy/90 transition-colors text-sm font-semibold">
                        Start Tutorial
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Resources */}
              <div className="mt-12 bg-navy text-ivory p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Additional Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-almond mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">User Guides</h4>
                    <p className="text-mist text-sm">Comprehensive documentation for all Microsoft 365 apps</p>
                  </div>
                  <div className="text-center">
                    <Video className="h-12 w-12 text-almond mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Video Library</h4>
                    <p className="text-mist text-sm">Step-by-step video tutorials for common tasks</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-almond mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Community Forum</h4>
                    <p className="text-mist text-sm">Connect with other students and get help from peers</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Technical Support</h2>
                <p className="text-mist text-lg">Get help with your Microsoft 365 account and applications</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-navy mb-4">Common Issues</h3>
                  <div className="space-y-4">
                    {[
                      {
                        issue: "Can't access my email",
                        solution:
                          "Check your internet connection and try clearing browser cache. Contact ICT if problem persists.",
                      },
                      {
                        issue: "OneDrive not syncing",
                        solution:
                          "Restart the OneDrive app and check your storage quota. Ensure you're signed in with your JRU account.",
                      },
                      {
                        issue: "Teams meeting issues",
                        solution:
                          "Update your Teams app and check microphone/camera permissions in your browser settings.",
                      },
                      {
                        issue: "Office apps not activating",
                        solution:
                          "Sign out and sign back in with your JRU credentials. Ensure you're using the correct account.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="border-l-4 border-almond pl-4">
                        <h4 className="font-semibold text-navy mb-1">{item.issue}</h4>
                        <p className="text-mist text-sm">{item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-navy mb-4">Contact Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-ivory rounded-lg">
                      <Mail className="h-5 w-5 text-navy" />
                      <div>
                        <div className="font-semibold text-navy">Email Support</div>
                        <div className="text-mist text-sm">ict@jru.edu.ph</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-ivory rounded-lg">
                      <MessageSquare className="h-5 w-5 text-navy" />
                      <div>
                        <div className="font-semibold text-navy">Live Chat</div>
                        <div className="text-mist text-sm">Available Mon-Fri 8AM-5PM</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-ivory rounded-lg">
                      <Users className="h-5 w-5 text-navy" />
                      <div>
                        <div className="font-semibold text-navy">ICT Office</div>
                        <div className="text-mist text-sm">Ground Floor, Admin Building</div>
                      </div>
                    </div>

                    <button className="w-full bg-navy text-ivory py-3 rounded-lg hover:bg-navy/90 transition-colors font-semibold">
                      Submit Support Ticket
                    </button>
                  </div>
                </div>
              </div>

              {/* System Status */}
              <div className="mt-8 bg-green-50 border border-green-200 p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-green-800 mb-2">System Status</h3>
                    <p className="text-green-700 text-sm">All Microsoft 365 services are operational</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
