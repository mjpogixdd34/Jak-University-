"use client"

import type React from "react"

import { useState } from "react"
import { Upload, CheckCircle } from "lucide-react"

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    semester: "",
    previousSchool: "",
    gpa: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Application Submitted Successfully!</h2>
              <p className="text-mist mb-6">
                Thank you for your interest in Jak Roberto University. We have received your application and will review
                it within 5-7 business days.
              </p>
              <p className="text-mist mb-8">
                You will receive a confirmation email shortly with your application reference number and next steps.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-navy text-ivory px-8 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-navy text-ivory p-6">
              <h2 className="text-2xl font-bold mb-2">Online Application Form</h2>
              <p className="text-mist">Please fill out all required fields to submit your application</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-navy font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Preferred Program *</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  >
                    <option value="">Select a program</option>
                    <option value="bs-it">BS Information Technology</option>
                    <option value="bs-esports">BS Esports</option>
                    <option value="bs-environmental">BS Environmental Science</option>
                    <option value="ba-multimedia">BA Multimedia Arts</option>
                    <option value="bs-customs">BS Customs Administration</option>
                    <option value="bs-tourism">BS International Travel & Tourism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Intended Semester *</label>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  >
                    <option value="">Select semester</option>
                    <option value="first-2024">First Semester 2024</option>
                    <option value="second-2024">Second Semester 2024</option>
                    <option value="summer-2024">Summer 2024</option>
                  </select>
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Previous School</label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">GPA/Grade Average</label>
                  <input
                    type="text"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    className="w-full p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                </div>
              </div>

              {/* Document Upload Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-navy mb-4">Required Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["High School Transcript", "Birth Certificate", "2x2 ID Photos", "Recommendation Letter"].map(
                    (doc) => (
                      <div
                        key={doc}
                        className="border-2 border-dashed border-mist/30 rounded-lg p-4 text-center hover:border-navy/30 transition-colors"
                      >
                        <Upload className="h-8 w-8 text-mist mx-auto mb-2" />
                        <p className="text-sm text-mist mb-2">{doc}</p>
                        <button type="button" className="text-navy text-sm font-semibold hover:text-navy/80">
                          Choose File
                        </button>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-8">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1" />
                  <span className="text-sm text-mist">
                    I agree to the{" "}
                    <a href="#" className="text-navy font-semibold">
                      Terms and Conditions
                    </a>{" "}
                    and
                    <a href="#" className="text-navy font-semibold">
                      {" "}
                      Privacy Policy
                    </a>
                    . I understand that submitting this application does not guarantee admission.
                  </span>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-navy text-ivory px-12 py-4 rounded-full font-semibold hover:bg-navy/90 transition-all duration-300 hover:scale-105"
                >
                  Submit Application
                </button>
                <p className="text-sm text-mist mt-4">
                  Application fee of ₱1,500 will be required after initial review
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
