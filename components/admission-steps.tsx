import { FileText, CreditCard, CheckCircle, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Complete the online application form with required documents",
    details: ["Personal Information", "Academic Records", "Essay/Statement", "Recommendation Letters"],
  },
  {
    icon: CreditCard,
    title: "Pay Application Fee",
    description: "Process your application fee through our secure payment system",
    details: ["₱1,500 Application Fee", "GCash Payment", "Bank Transfer", "Credit Card"],
  },
  {
    icon: CheckCircle,
    title: "Review & Assessment",
    description: "Our admissions team reviews your application and conducts assessment",
    details: ["Document Verification", "Entrance Exam", "Interview (if required)", "Background Check"],
  },
  {
    icon: GraduationCap,
    title: "Enrollment",
    description: "Upon acceptance, complete your enrollment and begin your journey",
    details: ["Acceptance Letter", "Course Registration", "Payment of Fees", "Orientation"],
  },
]

export default function AdmissionSteps() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Admission Process</h2>
        <p className="text-mist text-lg max-w-3xl mx-auto">Follow these simple steps to join the JRU community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-mist/30 z-0"></div>
            )}

            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 z-10">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-ivory" />
                </div>
                <div className="w-8 h-8 bg-almond rounded-full flex items-center justify-center mx-auto mb-4 text-navy font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-bold text-navy mb-3 text-center">{step.title}</h3>
              <p className="text-mist text-sm mb-4 text-center leading-relaxed">{step.description}</p>

              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-xs text-mist">
                    <div className="w-1.5 h-1.5 bg-almond rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
