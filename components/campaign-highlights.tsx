import { Shield, Volume2, Award, BookOpen } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import ImageTextSection from "./image-text-section"

const campaigns = [
  {
    icon: Shield,
    title: "Safe Spaces Initiative",
    description:
      "Creating inclusive and secure environments for all students, faculty, and staff across campus throughout 2025.",
    image: "/diverse-students-safe-campus.png",
    color: "bg-navy",
    stats: "100% Campus Coverage",
  },
  {
    icon: Volume2,
    title: "Strong Voices Campaign",
    description:
      "Empowering students to speak up, share ideas, and make their voices heard in university decisions this year.",
    image: "/campus-forum-speakers.png",
    color: "bg-mist",
    stats: "500+ Student Participants",
  },
  {
    icon: Award,
    title: "Microsoft Certification",
    description:
      "Comprehensive orientation program for industry-recognized Microsoft certifications and skills development.",
    image: "/microsoft-certified-students.png",
    color: "bg-almond",
    stats: "95% Pass Rate",
  },
  {
    icon: BookOpen,
    title: "Outcome-Based Education",
    description: "Revolutionary OBE framework focusing on measurable learning outcomes and student success metrics.",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-noir",
    stats: "All Programs Covered",
  },
]

export default function CampaignHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-mist/5 via-white to-navy/5">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Key Initiatives</h2>
            <p className="text-mist text-xl max-w-4xl mx-auto leading-relaxed">
              Discover the programs and campaigns that make JRU a leader in innovative education and student development
              in 2025
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-20">
          {campaigns.map((campaign, index) => (
            <ScrollReveal key={campaign.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
              <ImageTextSection
                title={campaign.title}
                description={campaign.description}
                image={campaign.image}
                imageAlt={campaign.title}
                reverse={index % 2 === 1}
              >
                <div className="flex items-center space-x-6 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${campaign.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                  >
                    <campaign.icon
                      className={`h-8 w-8 ${campaign.color === "bg-mist" || campaign.color === "bg-almond" ? "text-noir" : "text-ivory"}`}
                    />
                  </div>
                  <div>
                    <p className="text-navy font-bold text-lg">{campaign.stats}</p>
                    <p className="text-mist text-sm">Achievement Metric</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-navy text-ivory px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                  <button className="border-2 border-navy text-navy px-6 py-3 rounded-full font-semibold hover:bg-navy hover:text-ivory transition-all duration-300">
                    Get Involved
                  </button>
                </div>
              </ImageTextSection>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-navy to-noir rounded-3xl p-12 text-ivory shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h3>
              <p className="text-almond text-lg mb-8 max-w-2xl mx-auto">
                Join our initiatives and be part of the positive change happening at JRU in 2025
              </p>
              <button className="bg-almond text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-almond/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Explore All Programs
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
