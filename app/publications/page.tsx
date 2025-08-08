import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import { BookOpen, Download, Calendar, Users } from "lucide-react"

const publications = [
  {
    title: "JRU Research Journal",
    description: "Peer-reviewed academic journal featuring research from faculty and graduate students",
    type: "Academic Journal",
    frequency: "Quarterly",
    issn: "2345-6789",
    image: "/research-journal-cover.png",
    latestIssue: "Vol. 15, No. 4 (2025)",
    downloads: 1250,
  },
  {
    title: "Innovation & Technology Review",
    description: "Showcasing technological innovations and research breakthroughs from the university",
    type: "Research Publication",
    frequency: "Bi-annual",
    issn: "3456-7890",
    image: "/innovation-review-cover.png",
    latestIssue: "Vol. 8, No. 1 (2025)",
    downloads: 890,
  },
  {
    title: "Sustainability Report",
    description: "Annual report on the university's environmental initiatives and sustainability progress",
    type: "Annual Report",
    frequency: "Annual",
    issn: "4567-8901",
    image: "/sustainability-report-cover.png",
    latestIssue: "2024 Annual Report",
    downloads: 2100,
  },
  {
    title: "Student Research Anthology",
    description: "Collection of outstanding undergraduate research projects and thesis abstracts",
    type: "Student Publication",
    frequency: "Annual",
    issn: "5678-9012",
    image: "/student-research-cover.png",
    latestIssue: "2024 Edition",
    downloads: 750,
  },
]

const newsletters = [
  {
    title: "JRU Today",
    description: "Monthly newsletter featuring campus news, events, and achievements",
    image: "/newsletter-jru-today.png",
    date: "January 2025",
    type: "Newsletter",
  },
  {
    title: "Alumni Connect",
    description: "Quarterly publication highlighting alumni success stories and university updates",
    image: "/newsletter-alumni-connect.png",
    date: "Q4 2024",
    type: "Alumni Newsletter",
  },
  {
    title: "Research Highlights",
    description: "Bi-monthly showcase of ongoing research projects and academic achievements",
    image: "/newsletter-research-highlights.png",
    date: "December 2024",
    type: "Research Newsletter",
  },
]

const digitalLibrary = [
  {
    category: "Thesis & Dissertations",
    count: 2450,
    description: "Complete collection of graduate and undergraduate research papers",
    icon: BookOpen,
  },
  {
    category: "Faculty Publications",
    count: 890,
    description: "Research papers and articles published by JRU faculty members",
    icon: Users,
  },
  {
    category: "Conference Proceedings",
    count: 340,
    description: "Papers presented at academic conferences and symposiums",
    icon: Calendar,
  },
  {
    category: "Technical Reports",
    count: 560,
    description: "Research reports and technical documentation from various departments",
    icon: Download,
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Publications"
          subtitle="Academic Excellence Through Research and Scholarship"
          image="/university-library-publications.png"
        />

        {/* Featured Publications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Publications</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                Discover our latest research journals, reports, and academic publications showcasing the scholarly work
                of our university community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((publication, index) => (
                <div
                  key={publication.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={publication.image || "/placeholder.svg"}
                        alt={publication.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-navy text-ivory px-3 py-1 rounded-full text-sm font-semibold">
                          {publication.type}
                        </span>
                        <span className="text-mist text-sm">{publication.frequency}</span>
                      </div>

                      <h3 className="text-xl font-bold text-navy mb-3">{publication.title}</h3>
                      <p className="text-mist text-sm mb-4 leading-relaxed">{publication.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-mist">Latest Issue:</span>
                          <div className="font-semibold text-navy">{publication.latestIssue}</div>
                        </div>
                        <div>
                          <span className="text-mist">Downloads:</span>
                          <div className="font-semibold text-navy">{publication.downloads.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-mist">ISSN:</span>
                          <div className="font-semibold text-navy">{publication.issn}</div>
                        </div>
                        <div>
                          <span className="text-mist">Access:</span>
                          <div className="font-semibold text-green-600">Open Access</div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-navy text-ivory py-2 rounded-lg hover:bg-navy/90 transition-colors text-sm font-semibold">
                          View Latest Issue
                        </button>
                        <button className="flex-1 border border-navy text-navy py-2 rounded-lg hover:bg-navy hover:text-ivory transition-colors text-sm font-semibold">
                          Browse Archive
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletters */}
        <section className="py-16 bg-mist/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Newsletters & Updates</h2>
              <p className="text-mist text-lg">Stay informed with our regular publications and campus updates</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsletters.map((newsletter, index) => (
                <div
                  key={newsletter.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img
                    src={newsletter.image || "/placeholder.svg"}
                    alt={newsletter.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-almond text-noir px-3 py-1 rounded-full text-sm font-semibold">
                        {newsletter.type}
                      </span>
                      <span className="text-mist text-sm">{newsletter.date}</span>
                    </div>
                    <h3 className="font-bold text-navy mb-3">{newsletter.title}</h3>
                    <p className="text-mist text-sm mb-4 leading-relaxed">{newsletter.description}</p>
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-navy text-ivory py-2 rounded-lg hover:bg-navy/90 transition-colors text-sm font-semibold">
                        Read Online
                      </button>
                      <button className="px-4 py-2 border border-navy text-navy rounded-lg hover:bg-navy hover:text-ivory transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Library */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Digital Library</h2>
              <p className="text-mist text-lg">Access our comprehensive collection of academic resources</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {digitalLibrary.map((category, index) => (
                <div
                  key={category.category}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-ivory" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{category.category}</h3>
                  <div className="text-2xl font-bold text-almond mb-2">{category.count.toLocaleString()}</div>
                  <p className="text-mist text-sm leading-relaxed">{category.description}</p>
                  <button className="mt-4 bg-navy text-ivory px-4 py-2 rounded-lg hover:bg-navy/90 transition-colors text-sm font-semibold">
                    Browse Collection
                  </button>
                </div>
              ))}
            </div>

            {/* Search Interface */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-navy mb-6 text-center">Search Publications</h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Search by title, author, or keyword"
                    className="col-span-2 p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                  <select className="p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy">
                    <option>All Categories</option>
                    <option>Academic Journals</option>
                    <option>Research Reports</option>
                    <option>Thesis & Dissertations</option>
                    <option>Conference Papers</option>
                  </select>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Author"
                    className="flex-1 p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    className="flex-1 p-3 border border-mist/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  />
                  <button className="bg-navy text-ivory px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors font-semibold">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Guidelines */}
        <section className="py-16 bg-navy text-ivory">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Work</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                Share your research and scholarly work with the academic community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-almond rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">Research Papers</h3>
                <p className="text-mist mb-4">Submit your research for publication in our peer-reviewed journals</p>
                <button className="bg-almond text-navy px-6 py-2 rounded-lg hover:bg-almond/90 transition-colors font-semibold">
                  Submission Guidelines
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-almond rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">Thesis Repository</h3>
                <p className="text-mist mb-4">Add your thesis or dissertation to our digital repository</p>
                <button className="bg-almond text-navy px-6 py-2 rounded-lg hover:bg-almond/90 transition-colors font-semibold">
                  Upload Thesis
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-almond rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">Conference Papers</h3>
                <p className="text-mist mb-4">Share your conference presentations and proceedings</p>
                <button className="bg-almond text-navy px-6 py-2 rounded-lg hover:bg-almond/90 transition-colors font-semibold">
                  Submit Paper
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
