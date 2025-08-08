"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

const faqCategories = [
  {
    category: "Admissions",
    faqs: [
      {
        question: "What are the admission requirements for undergraduate programs?",
        answer:
          "Admission requirements include: High school diploma or equivalent, Transcript of records, Birth certificate, 2x2 ID photos, Entrance examination results, and Medical certificate. Specific programs may have additional requirements.",
      },
      {
        question: "When is the application deadline?",
        answer:
          "Application deadlines are: First Semester - March 15, Second Semester - August 15, Summer Term - April 30. We recommend applying early as slots are limited.",
      },
      {
        question: "How much is the application fee?",
        answer:
          "The application fee is ₱1,500 for all undergraduate programs and ₱2,000 for graduate programs. This fee is non-refundable and must be paid upon submission of application.",
      },
      {
        question: "Can I apply for multiple programs?",
        answer:
          "Yes, you can apply for up to 3 programs, but you need to pay a separate application fee for each program. You will be considered for admission based on your program preferences.",
      },
    ],
  },
  {
    category: "Academic",
    faqs: [
      {
        question: "What is the grading system used at JRU?",
        answer:
          "JRU uses a 4.0 grading scale: A (4.0), A- (3.7), B+ (3.3), B (3.0), B- (2.7), C+ (2.3), C (2.0), C- (1.7), D (1.0), F (0.0). A grade of C or higher is required to pass most courses.",
      },
      {
        question: "How many units can I take per semester?",
        answer:
          "Regular load is 15-18 units per semester. Students with good academic standing may take up to 21 units with approval from their academic advisor. Minimum load for full-time status is 12 units.",
      },
      {
        question: "Can I change my major?",
        answer:
          "Yes, you can change your major by filing a Change of Program form with the Registrar's Office. Some programs may require additional entrance requirements or examinations.",
      },
      {
        question: "What is the attendance policy?",
        answer:
          "Students must maintain at least 80% attendance in each course. Excessive absences may result in a failing grade or being dropped from the course.",
      },
    ],
  },
  {
    category: "Financial",
    faqs: [
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept cash, check, credit/debit cards, bank transfer, GCash, PayMaya, and installment plans. Online payments can be made through the student portal.",
      },
      {
        question: "Are there scholarship opportunities available?",
        answer:
          "Yes, we offer various scholarships including Academic Excellence, Need-based Financial Aid, Sports Scholarships, and Community Service Awards. Applications are processed each semester.",
      },
      {
        question: "Can I pay tuition in installments?",
        answer:
          "Yes, we offer flexible payment plans. You can pay in 2, 3, or 4 installments per semester. A small processing fee applies for installment plans.",
      },
      {
        question: "What happens if I can't pay on time?",
        answer:
          "Late payment fees apply after the due date. Students with outstanding balances may be restricted from enrollment, accessing grades, or receiving transcripts until payments are settled.",
      },
    ],
  },
  {
    category: "Student Life",
    faqs: [
      {
        question: "Are there dormitories on campus?",
        answer:
          "Yes, we have modern dormitories for both male and female students. Rooms are available in single, double, and quad occupancy. All dorms have Wi-Fi, study areas, and 24/7 security.",
      },
      {
        question: "What student organizations can I join?",
        answer:
          "We have over 50 student organizations including academic clubs, cultural groups, sports teams, and service organizations. New students are encouraged to join during orientation week.",
      },
      {
        question: "Is there a dress code?",
        answer:
          "Yes, we have a smart casual dress code. Students must wear proper attire including closed shoes, appropriate clothing, and student ID at all times on campus.",
      },
      {
        question: "What dining options are available?",
        answer:
          "Campus has multiple dining options including the main cafeteria, coffee shops, fast food outlets, and vending machines. Meal plans are available for dormitory residents.",
      },
    ],
  },
  {
    category: "Technology",
    faqs: [
      {
        question: "How do I access the AIMS portal?",
        answer:
          "You can access AIMS at aims.jru.edu.ph using your student ID and password provided during enrollment. The portal is available 24/7 for checking grades, schedules, and other academic information.",
      },
      {
        question: "Is Wi-Fi available on campus?",
        answer:
          "Yes, free Wi-Fi is available throughout the campus. Students can connect using their JRU credentials. High-speed internet is available in libraries, computer labs, and study areas.",
      },
      {
        question: "Do I get a Microsoft 365 account?",
        answer:
          "Yes, all students receive a free Microsoft 365 Education account with access to Office apps, OneDrive storage, and collaboration tools. Your account remains active throughout your enrollment.",
      },
      {
        question: "What technical support is available?",
        answer:
          "Our ICT Services department provides technical support for students Monday-Friday 8AM-5PM. Support includes help with accounts, software, and campus technology systems.",
      },
    ],
  },
]

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("Admissions")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs =
    faqCategories
      .find((cat) => cat.category === activeCategory)
      ?.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ) || []

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about JRU"
          image="/students-asking-questions.png"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-mist" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-mist/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                  <h3 className="font-bold text-navy mb-4">Categories</h3>
                  <nav className="space-y-2">
                    {faqCategories.map((category) => (
                      <button
                        key={category.category}
                        onClick={() => {
                          setActiveCategory(category.category)
                          setOpenFAQ(null)
                          setSearchQuery("")
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          activeCategory === category.category
                            ? "bg-navy text-ivory"
                            : "text-mist hover:bg-mist/10 hover:text-navy"
                        }`}
                      >
                        {category.category}
                        <span className="float-right text-sm">{category.faqs.length}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* FAQ Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-navy mb-6">{activeCategory} Questions</h2>

                  {filteredFAQs.length > 0 ? (
                    <div className="space-y-4">
                      {filteredFAQs.map((faq, index) => (
                        <div key={index} className="border border-mist/20 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-mist/5 transition-colors"
                          >
                            <span className="font-semibold text-navy pr-4">{faq.question}</span>
                            {openFAQ === index ? (
                              <ChevronUp className="h-5 w-5 text-mist flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-mist flex-shrink-0" />
                            )}
                          </button>
                          {openFAQ === index && (
                            <div className="px-6 pb-6">
                              <div className="border-t border-mist/20 pt-4">
                                <p className="text-mist leading-relaxed">{faq.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-mist/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-8 w-8 text-mist" />
                      </div>
                      <h3 className="font-semibold text-navy mb-2">No results found</h3>
                      <p className="text-mist">Try adjusting your search terms or browse different categories</p>
                    </div>
                  )}
                </div>

                {/* Contact Support */}
                <div className="mt-8 bg-navy text-ivory p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                  <p className="text-mist mb-6">
                    Can't find what you're looking for? Our support team is here to help you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-almond text-navy px-6 py-3 rounded-lg font-semibold hover:bg-almond/90 transition-colors">
                      Contact Support
                    </button>
                    <button className="border border-almond text-almond px-6 py-3 rounded-lg font-semibold hover:bg-almond hover:text-navy transition-all duration-300">
                      Submit Question
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
