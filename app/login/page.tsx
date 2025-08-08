"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Eye, EyeOff, User, Lock, CheckCircle } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const sampleAccounts = [
    { username: "student2021", password: "password123", role: "student", name: "Juan Carlos dela Cruz" },
    { username: "faculty001", password: "faculty123", role: "faculty", name: "Prof. Maria Santos" },
    { username: "admin001", password: "admin123", role: "admin", name: "Admin User" },
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const account = sampleAccounts.find(
      (acc) => acc.username === credentials.username && acc.password === credentials.password,
    )

    if (account) {
      // Store user session
      localStorage.setItem("user", JSON.stringify(account))
      router.push("/dashboard")
    } else {
      setError("Invalid username or password")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="pt-20">
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
          <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/students-using-laptops.png"
                  alt="Students using laptops"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-navy/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                  <p className="text-lg opacity-90">Access your academic portal and continue your journey</p>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-ivory" />
                  </div>
                  <h1 className="text-2xl font-bold text-navy mb-2">Student Portal Login</h1>
                  <p className="text-mist">Enter your credentials to access your account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Username</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-mist" />
                      <input
                        type="text"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-mist" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className="w-full pl-10 pr-12 py-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-mist hover:text-navy"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-navy text-ivory py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </button>
                </form>

                {/* Sample Accounts */}
                <div className="mt-8 p-4 bg-almond/30 rounded-lg">
                  <h3 className="font-semibold text-navy mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Sample Accounts
                  </h3>
                  <div className="space-y-2 text-sm">
                    {sampleAccounts.map((account, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-mist">{account.role}:</span>
                        <span className="font-mono text-navy">
                          {account.username} / {account.password}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a href="#" className="text-navy hover:text-navy/80 text-sm">
                    Forgot your password?
                  </a>
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
