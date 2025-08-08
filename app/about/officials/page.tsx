import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

const officials = [
  {
    name: "Dr. Maria Santos",
    position: "University President",
    education: "Ph.D. Educational Leadership, Harvard University",
    experience: "25 years in higher education administration",
    image: "/president-portrait.png",
    email: "president@jru.edu.ph",
  },
  {
    name: "Dr. Roberto Cruz",
    position: "Vice President for Academic Affairs",
    education: "Ph.D. Educational Management, UP Diliman",
    experience: "20 years in academic leadership",
    image: "/vp-academic-affairs.png",
    email: "vpaa@jru.edu.ph",
  },
  {
    name: "Prof. Ana Rodriguez",
    position: "Vice President for Student Affairs",
    education: "M.A. Student Personnel Administration, Ateneo",
    experience: "18 years in student development",
    image: "/vp-student-affairs.png",
    email: "vpsa@jru.edu.ph",
  },
  {
    name: "Dr. Carlos Mendoza",
    position: "Vice President for Research and Innovation",
    education: "Ph.D. Research Methodology, De La Salle University",
    experience: "22 years in research and development",
    image: "/vp-research.png",
    email: "vpri@jru.edu.ph",
  },
  {
    name: "Ms. Elena Pascual",
    position: "Vice President for Administration and Finance",
    education: "MBA Finance, Asian Institute of Management",
    experience: "15 years in financial management",
    image: "/vp-admin-finance.png",
    email: "vpaf@jru.edu.ph",
  },
  {
    name: "Dr. Miguel Torres",
    position: "Dean, College of Computer Studies",
    education: "Ph.D. Computer Science, MIT",
    experience: "12 years in technology education",
    image: "/dean-computer-studies.png",
    email: "dean.ccs@jru.edu.ph",
  },
]

export default function OfficialsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="University Officials"
          subtitle="Leadership Excellence in Higher Education"
          image="/university-administration-building.png"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Executive Leadership</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                Meet the dedicated leaders who guide JRU toward excellence in education, research, and community service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officials.map((official, index) => (
                <div
                  key={official.name}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img
                    src={official.image || "/placeholder.svg"}
                    alt={official.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{official.name}</h3>
                    <p className="text-almond font-semibold mb-3">{official.position}</p>
                    <div className="space-y-2 text-sm text-mist mb-4">
                      <p>
                        <strong>Education:</strong> {official.education}
                      </p>
                      <p>
                        <strong>Experience:</strong> {official.experience}
                      </p>
                    </div>
                    <a
                      href={`mailto:${official.email}`}
                      className="text-navy font-semibold text-sm hover:text-navy/80 transition-colors"
                    >
                      {official.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section className="py-16 bg-mist/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Board of Trustees</h2>
              <p className="text-mist text-lg">Distinguished leaders providing strategic governance and oversight</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Hon. Ricardo Villanueva",
                  title: "Chairman of the Board",
                  company: "Former Secretary of Education",
                },
                { name: "Dr. Patricia Lim", title: "Vice Chairwoman", company: "CEO, Tech Innovations Inc." },
                { name: "Atty. Jose Reyes", title: "Board Member", company: "Senior Partner, Reyes & Associates" },
                {
                  name: "Ms. Carmen dela Cruz",
                  title: "Board Member",
                  company: "President, Global Business Solutions",
                },
              ].map((trustee, index) => (
                <div
                  key={trustee.name}
                  className="bg-white p-6 rounded-xl shadow-lg text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-ivory font-bold text-lg">
                      {trustee.name.split(" ")[0][0]}
                      {trustee.name.split(" ")[1][0]}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy mb-2">{trustee.name}</h3>
                  <p className="text-almond font-semibold text-sm mb-2">{trustee.title}</p>
                  <p className="text-mist text-xs">{trustee.company}</p>
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
