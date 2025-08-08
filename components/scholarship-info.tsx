import { Award, Users, Globe, Heart } from "lucide-react"

const scholarships = [
  {
    icon: Award,
    name: "Academic Excellence Scholarship",
    description: "Full tuition coverage for students with outstanding academic performance",
    requirements: ["GPA of 3.8 or higher", "Leadership experience", "Community involvement"],
    coverage: "100% tuition",
    color: "bg-navy",
  },
  {
    icon: Users,
    name: "Need-Based Financial Aid",
    description: "Partial to full support for students with demonstrated financial need",
    requirements: ["Family income assessment", "Academic standing", "Application essay"],
    coverage: "50-100% tuition",
    color: "bg-mist",
  },
  {
    icon: Globe,
    name: "International Student Grant",
    description: "Special assistance for international students pursuing education at JRU",
    requirements: ["International student status", "Academic merit", "English proficiency"],
    coverage: "25-75% tuition",
    color: "bg-almond",
  },
  {
    icon: Heart,
    name: "Community Service Award",
    description: "Recognition for students with exceptional community service records",
    requirements: ["200+ volunteer hours", "Leadership in service", "Recommendation letters"],
    coverage: "25-50% tuition",
    color: "bg-noir",
  },
]

export default function ScholarshipInfo() {
  return (
    <section className="py-16 bg-mist/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Scholarships & Financial Aid</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            We believe education should be accessible to all deserving students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholarships.map((scholarship, index) => (
            <div
              key={scholarship.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 ${scholarship.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <scholarship.icon
                    className={`h-6 w-6 ${scholarship.color === "bg-mist" || scholarship.color === "bg-almond" ? "text-noir" : "text-ivory"}`}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-navy mb-2 text-lg">{scholarship.name}</h3>
                  <p className="text-mist mb-4 text-sm leading-relaxed">{scholarship.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-2 text-sm">Requirements:</h4>
                    <ul className="space-y-1">
                      {scholarship.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-xs text-mist">
                          <div className="w-1.5 h-1.5 bg-almond rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-navy">Coverage: {scholarship.coverage}</span>
                    <button className="text-navy text-sm font-semibold hover:text-navy/80 transition-colors">
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">Need Help with Financial Aid?</h3>
            <p className="text-mist mb-6">
              Our financial aid counselors are here to help you navigate the application process and find the best
              options for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-navy text-ivory px-6 py-2 rounded-full font-semibold hover:bg-navy/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-navy text-navy px-6 py-2 rounded-full font-semibold hover:bg-navy hover:text-ivory transition-all duration-300">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
