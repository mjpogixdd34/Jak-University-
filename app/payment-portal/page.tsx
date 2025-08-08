"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CreditCard, Calendar, Download, CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function PaymentPortalPage() {
  const [user, setUser] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const paymentHistory = [
    {
      date: "2025-01-15",
      description: "Tuition Fee - 1st Semester",
      amount: 25000,
      status: "Paid",
      reference: "PAY-2025-001",
    },
    { date: "2024-12-10", description: "Miscellaneous Fees", amount: 5000, status: "Paid", reference: "PAY-2024-089" },
    { date: "2024-11-15", description: "Laboratory Fee", amount: 3500, status: "Paid", reference: "PAY-2024-078" },
    { date: "2024-10-20", description: "Library Fee", amount: 1500, status: "Paid", reference: "PAY-2024-067" },
  ]

  const pendingPayments = [
    { description: "Tuition Fee - 2nd Installment", amount: 15750, dueDate: "2025-02-15", type: "Tuition" },
    { description: "Graduation Fee", amount: 2500, dueDate: "2025-03-01", type: "Graduation" },
    { description: "Thesis Binding Fee", amount: 500, dueDate: "2025-02-28", type: "Academic" },
  ]

  const paymentMethods = [
    { name: "Credit/Debit Card", icon: CreditCard, available: true },
    { name: "Bank Transfer", icon: Download, available: true },
    { name: "Over-the-Counter", icon: CheckCircle, available: true },
    { name: "Online Banking", icon: CreditCard, available: true },
  ]

  if (!user) return null

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-navy text-ivory py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Payment Portal</h1>
                <p className="text-mist">Manage your tuition and fee payments</p>
              </div>
              <div className="text-right">
                <p className="text-mist text-sm">Outstanding Balance</p>
                <p className="text-3xl font-bold text-almond">₱18,750.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { id: "overview", label: "Overview", icon: CreditCard },
                  { id: "pending", label: "Pending Payments", icon: Clock },
                  { id: "history", label: "Payment History", icon: CheckCircle },
                  { id: "methods", label: "Payment Methods", icon: CreditCard },
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

              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Payment Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-navy mb-2">Outstanding</h3>
                      <p className="text-2xl font-bold text-red-500">₱18,750</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-navy mb-2">Paid This Year</h3>
                      <p className="text-2xl font-bold text-green-500">₱35,000</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-navy mb-2">Next Due</h3>
                      <p className="text-lg font-bold text-blue-500">Feb 15, 2025</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="font-bold text-navy mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button className="flex items-center justify-center space-x-3 p-4 border-2 border-navy text-navy rounded-lg hover:bg-navy hover:text-ivory transition-colors">
                        <CreditCard className="h-5 w-5" />
                        <span>Pay Outstanding Balance</span>
                      </button>
                      <button className="flex items-center justify-center space-x-3 p-4 border-2 border-mist text-mist rounded-lg hover:bg-mist hover:text-white transition-colors">
                        <Download className="h-5 w-5" />
                        <span>Download Statement</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Pending Payments Tab */}
              {activeTab === "pending" && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-navy mb-6">Pending Payments</h2>
                  {pendingPayments.map((payment, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-navy">{payment.description}</h3>
                          <p className="text-mist text-sm">Due: {new Date(payment.dueDate).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-navy">₱{payment.amount.toLocaleString()}</p>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              payment.type === "Tuition"
                                ? "bg-red-100 text-red-800"
                                : payment.type === "Graduation"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {payment.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-navy text-ivory py-2 rounded-lg hover:bg-navy/90 transition-colors">
                          Pay Now
                        </button>
                        <button className="px-6 border border-navy text-navy py-2 rounded-lg hover:bg-navy hover:text-ivory transition-colors">
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Payment History Tab */}
              {activeTab === "history" && (
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-6">Payment History</h2>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-navy text-ivory">
                          <tr>
                            <th className="px-6 py-4 text-left">Date</th>
                            <th className="px-6 py-4 text-left">Description</th>
                            <th className="px-6 py-4 text-right">Amount</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-center">Reference</th>
                            <th className="px-6 py-4 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paymentHistory.map((payment, index) => (
                            <tr key={index} className="border-b border-mist/20 hover:bg-mist/5">
                              <td className="px-6 py-4">{new Date(payment.date).toLocaleDateString()}</td>
                              <td className="px-6 py-4">{payment.description}</td>
                              <td className="px-6 py-4 text-right font-bold">₱{payment.amount.toLocaleString()}</td>
                              <td className="px-6 py-4 text-center">
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                                  {payment.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-center font-mono text-sm">{payment.reference}</td>
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

              {/* Payment Methods Tab */}
              {activeTab === "methods" && (
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-6">Payment Methods</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mr-4">
                            <method.icon className="h-6 w-6 text-ivory" />
                          </div>
                          <div>
                            <h3 className="font-bold text-navy">{method.name}</h3>
                            <p className="text-mist text-sm">{method.available ? "Available" : "Coming Soon"}</p>
                          </div>
                        </div>
                        <button
                          className={`w-full py-2 rounded-lg transition-colors ${
                            method.available
                              ? "bg-navy text-ivory hover:bg-navy/90"
                              : "bg-mist/20 text-mist cursor-not-allowed"
                          }`}
                          disabled={!method.available}
                        >
                          {method.available ? "Use This Method" : "Coming Soon"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Payment Reminders */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Payment Reminders</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold text-sm">Tuition Due Soon</p>
                    <p className="text-red-600 text-xs">Due: February 15, 2025</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 font-semibold text-sm">Graduation Fee</p>
                    <p className="text-yellow-600 text-xs">Due: March 1, 2025</p>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-navy mb-4">Need Help?</h3>
                <p className="text-mist text-sm mb-4">Contact our finance office for payment assistance</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Phone:</strong> (02) 8123-4567
                  </p>
                  <p>
                    <strong>Email:</strong> finance@jru.edu.ph
                  </p>
                  <p>
                    <strong>Office Hours:</strong> 8AM - 5PM
                  </p>
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
