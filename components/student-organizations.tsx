import { Music, Trophy, Code, Heart } from "lucide-react"

const organizations = [
  {
    category: "Academic",
    icon: Code,
    color: "bg-navy",
    orgs: [
      { name: "Computer Science Society", members: "450+", description: "Programming competitions and tech workshops" },
      { name: "Business Club", members: "380+", description: "Entrepreneurship and business case competitions" },
      { name: "Environmental Action Group", members: "220+", description: "Sustainability projects and research" },
    ],
  },
  {
    category: "Cultural",
    icon: Music,
    color: "bg-almond",
    orgs: [
      { name: "University Chorale", members: "85+", description: "Award-winning vocal ensemble" },
      { name: "Dance Troupe", members: "120+", description: "Traditional and modern dance performances" },
      { name: "Theater Guild", members: "95+", description: "Drama productions and acting workshops" },
    ],
  },
  {
    category: "Sports",
    icon: Trophy,
    color: "bg-mist",
    orgs: [
      { name: "Varsity Teams", members: "300+", description: "NCAA Division competitions" },
      { name: "Esports Club", members: "250+", description: "Competitive gaming and tournaments" },
      { name: "Martial Arts Club", members: "180+", description: "Traditional and modern martial arts" },
    ],
  },
  {
    category: "Service",
    icon: Heart,
    color: "bg-noir",
    orgs: [
      { name: "Community Outreach", members: "400+", description: "Volunteer work and social projects" },
      { name: "Red Cross Youth", members: "150+", description: "Emergency response and health programs" },
      { name: "Rotaract Club", members: "80+", description: "Leadership and community service" },
    ],
  },
]

export default function StudentOrganizations() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Student Organizations</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Join over 50 active student organizations and discover your passion while building lifelong friendships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizations.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <category.icon
                    className={`h-8 w-8 ${category.color === "bg-mist" || category.color === "bg-almond" ? "text-noir" : "text-ivory"}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-navy">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.orgs.map((org, orgIndex) => (
                  <div
                    key={org.name}
                    className="bg-ivory p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-navy text-sm">{org.name}</h4>
                      <span className="text-xs text-mist bg-white px-2 py-1 rounded-full">{org.members}</span>
                    </div>
                    <p className="text-mist text-xs leading-relaxed">{org.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <button className="text-navy font-semibold text-sm hover:text-navy/80 transition-colors">
                  View All {category.category} Orgs →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-navy/5 p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">Start Your Own Organization</h3>
            <p className="text-mist mb-6">
              Have a unique idea for a student organization? We support student initiatives and provide resources to
              help you create meaningful communities.
            </p>
            <button className="bg-navy text-ivory px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors">
              Learn How to Start
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
