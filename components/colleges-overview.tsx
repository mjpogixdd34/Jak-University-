import { Code, Briefcase, Palette, Globe } from "lucide-react"

const colleges = [
  {
    name: "College of Computer Studies",
    icon: Code,
    description: "Leading technology education with cutting-edge programs in IT, Computer Science, and Esports",
    programs: ["BS Information Technology", "BS Computer Science", "BS Esports"],
    students: "3,500+",
    faculty: "85",
    image: "/computer-lab-students.png",
    color: "bg-navy",
  },
  {
    name: "College of Business Administration",
    icon: Briefcase,
    description: "Comprehensive business education preparing future leaders and entrepreneurs",
    programs: ["BS Business Administration", "BS Customs Administration", "BS Entrepreneurship"],
    students: "4,200+",
    faculty: "92",
    image: "/business-students-presentation.png",
    color: "bg-mist",
  },
  {
    name: "College of Arts and Sciences",
    icon: Palette,
    description: "Creative and scientific excellence across diverse disciplines",
    programs: ["BA Multimedia Arts", "BS Psychology", "BS Environmental Science"],
    students: "2,800+",
    faculty: "78",
    image: "/arts-students-creative.png",
    color: "bg-almond",
  },
  {
    name: "College of Tourism and Hospitality",
    icon: Globe,
    description: "World-class education in tourism, hospitality, and travel management",
    programs: ["BS Tourism Management", "BS Hotel & Restaurant Management", "BS Travel Services"],
    students: "1,900+",
    faculty: "45",
    image: "/tourism-students-training.png",
    color: "bg-noir",
  },
]

export default function CollegesOverview() {
  return (
    <section className="py-16 bg-mist/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Colleges</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Explore our diverse academic colleges, each offering specialized programs and world-class education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {colleges.map((college, index) => (
            <div
              key={college.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={college.image || "/placeholder.svg"}
                    alt={college.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${college.color} rounded-lg flex items-center justify-center mr-4`}>
                      <college.icon
                        className={`h-6 w-6 ${college.color === "bg-mist" || college.color === "bg-almond" ? "text-noir" : "text-ivory"}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-navy">{college.name}</h3>
                  </div>

                  <p className="text-mist mb-4 text-sm leading-relaxed">{college.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-ivory rounded-lg">
                      <div className="text-lg font-bold text-navy">{college.students}</div>
                      <div className="text-xs text-mist">Students</div>
                    </div>
                    <div className="text-center p-3 bg-ivory rounded-lg">
                      <div className="text-lg font-bold text-navy">{college.faculty}</div>
                      <div className="text-xs text-mist">Faculty</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-2 text-sm">Featured Programs:</h4>
                    <div className="space-y-1">
                      {college.programs.map((program) => (
                        <div key={program} className="flex items-center text-xs text-mist">
                          <div className="w-1.5 h-1.5 bg-almond rounded-full mr-2"></div>
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="text-navy font-semibold text-sm hover:text-navy/80 transition-colors">
                    Explore College →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
