"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, Download, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react"

export default function DocumentPortalPage() {
  const [user, setUser] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("request")
  const [selectedDocument, setSelectedDocument] = useState("")
  const [requestForm, setRequestForm] = useState({
    purpose: "",
    copies: 1,
    urgency: "regular",
  })
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const availableDocuments = [
    {
      id: "coe",
      name: "Certificate of Enrollment",
      fee: 50,
      processingTime: "1-2 business days",
      description: "Official document certifying current enrollment status",
    },
    {
      id: "tor",
      name: "Transcript of Records",
      fee: 150,
      processingTime: "3-5 business days",
      description: "Complete academic record with grades",
    },
    {
      id: "cgm",
      name: "Certificate of Good Moral",
      fee: 75,
      processingTime: "2-3 business days",
      description: "Character certification from the university",
    },
    {
      id: "diploma",
      name: "Diploma (Certified True Copy)",
      fee: 200,
      processingTime: "5-7 business days",
      description: "Certified copy of graduation diploma",
    },
    {
      id: "cog",
      name: "Certificate of Grades",
      fee: 100,
      processingTime: "2-3 business days",
      description: "Official grades for specific semester/year",
    },
    {
      id: "honorable",
      name: "Honorable Dismissal",
      fee: 100,
      processingTime: "3-5 business days",
      description: "Transfer credential for students changing schools",
    },
  ]

  const requestHistory = [
    {
      id: "REQ-2025-001",
      document: "Certificate of Enrollment",
      requestDate: "2025-01-10",
      status: "Ready for Pickup",
      fee: 50,
      purpose: "Employment requirement",
    },
    {
      id: "REQ-2025-002",
      document: "Transcript of Records",
      requestDate: "2025-01-08",
      status: "Processing",
      fee: 150,
      purpose: "Graduate school application",
    },
    {
      id: "REQ-2024-089",
      document: "Certificate of Good Moral",
      requestDate: "2024-12-15",
      status: "Released",
      fee: 75,
      purpose: "Job application",
    },
  ]

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    alert("Document request submitted successfully!")
    setSelectedDocument("")
    setRequestForm({ purpose: "", copies: 1, urgency: "regular" })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready for Pickup":
        return "bg-green-100 text-green-800"
      case "Processing":
        return "bg-yellow-100 text-yellow-800"
      case "Released":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Ready for Pickup":
        return CheckCircle
      case "Processing":
        return Clock
      case "Released":
        return Download
      default:
        return AlertCircle
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-navy text-ivory py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Document Request Portal</h1>
            <p className="text-mist">Request and track your official university documents</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { id: "request", label: "New Request", icon: Plus },
                  { id: "status", label: "Request Status", icon: Clock },
                  { id: "history", label: "Request History", icon: FileText },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-navy text-ivory"
                        : "bg-white text-mist hover:bg-mist/10 hover:text-navy"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* New Request Tab */}
              {activeTab === "request" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-navy">Request New Document</h2>

                  {/* Document Selection */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-navy mb-4">Select Document Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableDocuments.map((doc) => (
                        <div
                          key={doc.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedDocument === doc.id
                              ? "border-navy bg-navy/5"
                              : "border-mist/30 hover:border-navy/50"
                          }`}
                          onClick={() => setSelectedDocument(doc.id)}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-navy">{doc.name}</h4>
                            <span className="text-navy font-bold">₱{doc.fee}</span>
                          </div>
                          <p className="text-mist text-sm mb-2">{doc.description}</p>
                          <p className="text-xs text-mist">Processing: {doc.processingTime}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Request Form */}
                  {selectedDocument && (
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="font-bold text-navy mb-4">Request Details</h3>
                      <form onSubmit={handleSubmitRequest} className="space-y-4">
                        <div>
                          <label className="block text-navy font-semibold mb-2">Purpose of Request *</label>
                          <textarea
                            value={requestForm.purpose}
                            onChange={(e) => setRequestForm({ ...requestForm, purpose: e.target.value })}
                            className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                            rows={3}
                            placeholder="Please specify the purpose for this document request"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-navy font-semibold mb-2">Number of Copies</label>
                            <select
                              value={requestForm.copies}
                              onChange={(e) =>
                                setRequestForm({ ...requestForm, copies: Number.parseInt(e.target.value) })
                              }
                              className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                            >
                              {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                  {num} copy{num > 1 ? "ies" : ""}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-navy font-semibold mb-2">Processing Type</label>
                            <select
                              value={requestForm.urgency}
                              onChange={(e) => setRequestForm({ ...requestForm, urgency: e.target.value })}
                              className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                            >
                              <option value="regular">Regular Processing</option>
                              <option value="rush">Rush Processing (+50% fee)</option>
                            </select>
                          </div>
                        </div>

                        <div className="bg-almond/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-navy mb-2">Request Summary</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Document:</span>
                              <span>{availableDocuments.find((d) => d.id === selectedDocument)?.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Copies:</span>
                              <span>{requestForm.copies}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Processing:</span>
                              <span>{requestForm.urgency === "rush" ? "Rush" : "Regular"}</span>
                            </div>
                            <div className="flex justify-between font-bold border-t pt-2">
                              <span>Total Fee:</span>
                              <span>
                                ₱
                                {(availableDocuments.find((d) => d.id === selectedDocument)?.fee || 0) *
                                  requestForm.copies *
                                  (requestForm.urgency === "rush" ? 1.5 : 1)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-navy text-ivory py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
                        >
                          Submit Request
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* Request Status Tab */}
              {activeTab === "status" && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-navy mb-6">Current Request Status</h2>
                  {requestHistory
                    .filter((req) => req.status !== "Released")
                    .map((request) => {
                      const StatusIcon = getStatusIcon(request.status)
                      return (
                        <div key={request.id} className="bg-white p-6 rounded-xl shadow-lg">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  request.status === "Ready for Pickup" ? "bg-green-500" : "bg-yellow-500"
                                }`}
                              >
                                <StatusIcon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-navy">{request.document}</h3>
                                <p className="text-mist text-sm">Request ID: {request.id}</p>
                              </div>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(request.status)}`}
                            >
                              {request.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-mist">Request Date:</span>
                              <div className="font-semibold">{new Date(request.requestDate).toLocaleDateString()}</div>
                            </div>
                            <div>
                              <span className="text-mist">Fee:</span>
                              <div className="font-semibold">₱{request.fee}</div>
                            </div>
                            <div>
                              <span className="text-mist">Purpose:</span>
                              <div className="font-semibold">{request.purpose}</div>
                            </div>
                          </div>

                          {request.status === "Ready for Pickup" && (
                            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                              <p className="text-green-800 font-semibold text-sm">
                                Your document is ready for pickup at the Registrar's Office
                              </p>
                              <p className="text-green-600 text-xs">Office Hours: Monday-Friday, 8:00 AM - 5:00 PM</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                </div>
              )}

              {/* Request History Tab */}
              {activeTab === "history" && (
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-6">Request History</h2>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-navy text-ivory">
                          <tr>
                            <th className="px-6 py-4 text-left">Request ID</th>
                            <th className="px-6 py-4 text-left">Document</th>
                            <th className="px-6 py-4 text-left">Date</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-right">Fee</th>
                            <th className="px-6 py-4 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {requestHistory.map((request) => (
                            <tr key={request.id} className="border-b border-mist/20 hover:bg-mist/5">
                              <td className="px-6 py-4 font-mono text-sm">{request.id}</td>
                              <td className="px-6 py-4">{request.document}</td>
                              <td className="px-6 py-4">{new Date(request.requestDate).toLocaleDateString()}</td>
                              <td className="px-6 py-4 text-center">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}
                                >
                                  {request.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right font-bold">₱{request.fee}</td>
                              <td className="px-6 py-4 text-center">
                                <button className="text-navy hover:text-navy/80 transition-colors">
                                  <Download className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Important Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 font-semibold">Processing Times</p>
                    <p className="text-blue-600 text-xs">Regular: 1-7 business days</p>
                    <p className="text-blue-600 text-xs">Rush: 50% faster processing</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 font-semibold">Payment Required</p>
                    <p className="text-yellow-600 text-xs">Pay at Cashier's Office before processing</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Registrar's Office</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Location:</strong> Admin Building, 2nd Floor
                  </p>
                  <p>
                    <strong>Phone:</strong> (02) 8123-4567 ext. 201
                  </p>
                  <p>
                    <strong>Email:</strong> registrar@jru.edu.ph
                  </p>
                  <p>
                    <strong>Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Requirements</h3>
                <ul className="space-y-2 text-sm text-mist">
                  <li>• Valid ID (Student ID or Government ID)</li>
                  <li>• Completed request form</li>
                  <li>• Payment receipt</li>
                  <li>• Authorization letter (if claimed by representative)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
