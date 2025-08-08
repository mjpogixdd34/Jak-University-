import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import { Leaf, Recycle, Droplets, Sun } from "lucide-react"

const initiatives = [
  {
    icon: Leaf,
    title: "Carbon Neutrality Goal",
    description: "Committed to achieving carbon neutrality by 2030 through renewable energy and efficiency programs",
    progress: 65,
    color: "bg-green-500",
  },
  {
    icon: Recycle,
    title: "Zero Waste Campus",
    description: "Comprehensive recycling and waste reduction programs across all university facilities",
    progress: 78,
    color: "bg-blue-500",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Rainwater harvesting and greywater recycling systems reduce water consumption by 40%",
    progress: 85,
    color: "bg-cyan-500",
  },
  {
    icon: Sun,
    title: "Solar Energy Program",
    description: "Solar panels installed across campus buildings generate 30% of our electricity needs",
    progress: 72,
    color: "bg-yellow-500",
  },
]

const projects = [
  {
    title: "Green Building Certification",
    description: "All new campus buildings meet LEED Gold standards for sustainable construction",
    image: "/green-building-campus.png",
    status: "Ongoing",
    impact: "50% reduction in energy consumption",
  },
  {
    title: "Urban Garden Project",
    description: "Student-led organic farming initiative providing fresh produce for campus dining",
    image: "/campus-urban-garden.png",
    status: "Active",
    impact: "2,000 kg of organic produce annually",
  },
  {
    title: "E-Waste Recycling Program",
    description: "Collection and proper disposal of electronic waste from campus and community",
    image: "/e-waste-recycling-program.png",
    status: "Active",
    impact: "5 tons of e-waste recycled annually",
  },
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Sustainability Initiatives"
          subtitle="Building a Greener Future Together"
          image="/sustainability-campus-green.png"
        />

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Commitment to Sustainability</h2>
              <p className="text-mist text-lg max-w-4xl mx-auto">
                JRU is dedicated to environmental stewardship and sustainable practices. Through innovative programs and
                community engagement, we're working towards a carbon-neutral campus and a more sustainable future for
                all.
              </p>
            </div>

            {/* Key Initiatives */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {initiatives.map((initiative, index) => (
                <div
                  key={initiative.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`w-16 h-16 ${initiative.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <initiative.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-navy mb-3 text-center">{initiative.title}</h3>
                  <p className="text-mist text-sm mb-4 leading-relaxed text-center">{initiative.description}</p>

                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-mist">Progress</span>
                      <span className="font-semibold text-navy">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-mist/20 rounded-full h-2">
                      <div
                        className={`${initiative.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SDG Alignment */}
            <div className="bg-navy text-ivory p-8 rounded-xl mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">UN Sustainable Development Goals</h3>
                <p className="text-mist">Our initiatives directly contribute to achieving the UN SDGs</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {[
                  { number: "3", title: "Good Health" },
                  { number: "4", title: "Quality Education" },
                  { number: "6", title: "Clean Water" },
                  { number: "7", title: "Clean Energy" },
                  { number: "11", title: "Sustainable Cities" },
                  { number: "12", title: "Responsible Consumption" },
                  { number: "13", title: "Climate Action" },
                  { number: "15", title: "Life on Land" },
                ].map((sdg, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-almond rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-navy font-bold text-lg">{sdg.number}</span>
                    </div>
                    <p className="text-mist text-xs">{sdg.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section className="py-16 bg-mist/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Active Projects</h2>
              <p className="text-mist text-lg">Ongoing sustainability initiatives making a real impact</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-navy">{project.title}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-mist text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="bg-ivory p-3 rounded-lg">
                      <div className="text-xs text-mist mb-1">Impact:</div>
                      <div className="font-semibold text-navy">{project.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get Involved</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                Join our sustainability efforts and help create a more environmentally responsible campus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Green Club",
                  description: "Join student-led environmental initiatives and awareness campaigns",
                  action: "Join Now",
                },
                {
                  title: "Volunteer Programs",
                  description: "Participate in tree planting, clean-up drives, and conservation projects",
                  action: "Sign Up",
                },
                {
                  title: "Research Opportunities",
                  description: "Contribute to sustainability research and innovation projects",
                  action: "Learn More",
                },
                {
                  title: "Campus Audits",
                  description: "Help monitor and improve our environmental performance",
                  action: "Participate",
                },
              ].map((opportunity, index) => (
                <div
                  key={opportunity.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-navy mb-3">{opportunity.title}</h3>
                  <p className="text-mist text-sm mb-4 leading-relaxed">{opportunity.description}</p>
                  <button className="bg-navy text-ivory px-4 py-2 rounded-lg hover:bg-navy/90 transition-colors text-sm font-semibold">
                    {opportunity.action}
                  </button>
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
