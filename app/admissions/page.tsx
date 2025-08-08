import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import AdmissionSteps from "@/components/admission-steps"
import ProgramsGrid from "@/components/programs-grid"
import ScholarshipInfo from "@/components/scholarship-info"
import { GraduationCap, FileText, CreditCard, Calendar } from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Admissions"
          subtitle="Start Your Journey to Excellence"
          image="/students-graduation-ceremony.png"
        />

        {/* Quick Actions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: GraduationCap,
                  title: "Apply Now",
                  description: "Submit your application online",
                  href: "/admissions/apply",
                },
                {
                  icon: FileText,
                  title: "Requirements",
                  description: "Check admission requirements",
                  href: "/admissions/requirements",
                },
                {
                  icon: CreditCard,
                  title: "Scholarships",
                  description: "Explore financial aid options",
                  href: "/admissions/scholarships",
                },
                {
                  icon: Calendar,
                  title: "Important Dates",
                  description: "View admission deadlines",
                  href: "/admissions/dates",
                },
              ].map((action, index) => (
                <div
                  key={action.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group cursor-pointer animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <action.icon className="h-6 w-6 text-ivory" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{action.title}</h3>
                  <p className="text-mist text-sm">{action.description}</p>
                </div>
              ))}
            </div>

            <AdmissionSteps />
          </div>
        </section>

        <ProgramsGrid />
        <ScholarshipInfo />

        {/* Application Deadlines */}
        <section className="py-16 bg-navy text-ivory">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Dates</h2>
              <p className="text-mist text-lg">Mark your calendar for these crucial admission deadlines</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { period: "First Semester 2024", deadline: "March 15, 2024", status: "Open" },
                { period: "Second Semester 2024", deadline: "August 15, 2024", status: "Open" },
                { period: "Summer 2024", deadline: "April 30, 2024", status: "Closed" },
              ].map((date, index) => (
                <div
                  key={date.period}
                  className="bg-navy/50 backdrop-blur-sm p-6 rounded-xl border border-mist/20 text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-bold text-almond mb-2">{date.period}</h3>
                  <p className="text-mist mb-4">Application Deadline</p>
                  <p className="text-2xl font-bold mb-4">{date.deadline}</p>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      date.status === "Open" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {date.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
