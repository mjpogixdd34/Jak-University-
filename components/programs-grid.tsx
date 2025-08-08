const programs = [
  {
    category: "Technology",
    programs: [
      {
        name: "BS Information Technology",
        duration: "4 years",
        description:
          "Comprehensive IT education with specializations in software development, cybersecurity, and data science",
      },
      {
        name: "BS Computer Science",
        duration: "4 years",
        description: "Advanced computing concepts, algorithms, and software engineering principles",
      },
      {
        name: "BS Esports",
        duration: "4 years",
        description: "First comprehensive esports program covering gaming, management, and technology",
      },
    ],
    color: "bg-navy",
  },
  {
    category: "Business",
    programs: [
      {
        name: "BS Business Administration",
        duration: "4 years",
        description: "Core business principles with specializations in management, marketing, and finance",
      },
      {
        name: "BS Customs Administration",
        duration: "4 years",
        description: "International trade, customs regulations, and global commerce",
      },
      {
        name: "BS International Travel & Tourism",
        duration: "4 years",
        description: "Tourism management, hospitality, and travel industry operations",
      },
    ],
    color: "bg-mist",
  },
  {
    category: "Arts & Sciences",
    programs: [
      {
        name: "BA Multimedia Arts",
        duration: "4 years",
        description: "Digital design, animation, video production, and interactive media",
      },
      {
        name: "BS Environmental Science",
        duration: "4 years",
        description: "Sustainability, conservation, and environmental research and policy",
      },
      {
        name: "BS Psychology",
        duration: "4 years",
        description: "Human behavior, mental health, and psychological research methods",
      },
    ],
    color: "bg-almond",
  },
]

export default function ProgramsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Academic Programs</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Discover our comprehensive range of undergraduate and graduate programs
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">{category.category}</h3>
                <div className="w-24 h-1 bg-almond mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.programs.map((program, programIndex) => (
                  <div
                    key={program.name}
                    className="bg-ivory p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div
                      className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span
                        className={`text-lg font-bold ${category.color === "bg-mist" || category.color === "bg-almond" ? "text-noir" : "text-ivory"}`}
                      >
                        {program.name.split(" ")[0]}
                      </span>
                    </div>

                    <h4 className="font-bold text-navy mb-2 group-hover:text-navy/80 transition-colors">
                      {program.name}
                    </h4>

                    <div className="text-sm text-mist mb-3">Duration: {program.duration}</div>

                    <p className="text-mist text-sm leading-relaxed mb-4">{program.description}</p>

                    <button className="text-navy font-semibold text-sm hover:text-navy/80 transition-colors">
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
