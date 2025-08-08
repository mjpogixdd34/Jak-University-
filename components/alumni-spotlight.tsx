const spotlightAlumni = [
  {
    name: "Maria Elena Santos",
    graduationYear: "2018",
    degree: "BS Information Technology",
    currentPosition: "Senior Software Engineer at Google",
    achievement: "Led the development of AI-powered accessibility features used by millions",
    image: "/successful-graduates-ceremony.png",
    quote: "JRU gave me the technical foundation and confidence to pursue my dreams in tech.",
  },
  {
    name: "Carlos Miguel Rodriguez",
    graduationYear: "2015",
    degree: "BS Business Administration",
    currentPosition: "CEO & Founder of EcoTech Solutions",
    achievement: "Built a sustainable technology company valued at $50M",
    image: "/tech-innovation-summit.png",
    quote: "The entrepreneurship program at JRU taught me to think big and act responsibly.",
  },
  {
    name: "Dr. Ana Patricia Cruz",
    graduationYear: "2012",
    degree: "BS Environmental Science",
    currentPosition: "Climate Research Scientist at NOAA",
    achievement: "Published groundbreaking research on climate change adaptation",
    image: "/environmental-research.png",
    quote: "JRU's environmental program prepared me to tackle the world's biggest challenges.",
  },
]

export default function AlumniSpotlight() {
  return (
    <section className="py-16 bg-mist/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Alumni Spotlight</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Celebrating the remarkable achievements of our graduates who are making a difference worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {spotlightAlumni.map((alumni, index) => (
            <div
              key={alumni.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img src={alumni.image || "/placeholder.svg"} alt={alumni.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4 bg-navy text-ivory px-3 py-1 rounded-full text-sm font-semibold">
                  Class of {alumni.graduationYear}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{alumni.name}</h3>
                <p className="text-mist text-sm mb-2">{alumni.degree}</p>
                <p className="font-semibold text-navy mb-4">{alumni.currentPosition}</p>

                <div className="bg-almond/20 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-navy mb-2 text-sm">Key Achievement:</h4>
                  <p className="text-mist text-sm leading-relaxed">{alumni.achievement}</p>
                </div>

                <blockquote className="border-l-4 border-almond pl-4 italic text-mist text-sm">
                  "{alumni.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">Share Your Success Story</h3>
            <p className="text-mist mb-6">
              Are you a JRU alumnus making waves in your field? We'd love to feature your achievements and inspire
              current students.
            </p>
            <button className="bg-navy text-ivory px-8 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
