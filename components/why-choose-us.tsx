import { Target, Lightbulb, Heart, Globe, Users, Trophy } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const reasons = [
  {
    icon: Target,
    title: "Excellence in Education",
    description: "Rigorous academic programs designed to meet industry standards and exceed expectations in 2025.",
    image: "/academic-excellence-classroom.png",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "State-of-the-art facilities and cutting-edge technology to foster creativity and innovation.",
    image: "/innovation-lab-students.png",
  },
  {
    icon: Heart,
    title: "Service to Community",
    description:
      "Strong commitment to social responsibility and community engagement through various outreach programs.",
    image: "/community-service-students.png",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International partnerships and exchange programs that broaden horizons and cultural understanding.",
    image: "/international-exchange-students.png",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Inclusive environment where every student is valued, supported, and encouraged to succeed.",
    image: "/supportive-campus-community.png",
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description: "Outstanding track record of graduate employment and recognition in various fields and industries.",
    image: "/successful-graduates-ceremony.png",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-noir text-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-almond rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-almond rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Jak Roberto University?</h2>
            <p className="text-almond text-xl max-w-4xl mx-auto leading-relaxed">
              Discover what sets us apart and makes JRU the ideal choice for your educational journey in 2025
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} direction="up" delay={index * 150}>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-almond/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-3 h-full">
                  {/* Icon and Image Container */}
                  <div className="relative mb-6">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img
                        src={reason.image || "/placeholder.svg"}
                        alt={reason.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-4 w-12 h-12 bg-almond rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="h-6 w-6 text-navy" />
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-4 group-hover:text-almond transition-colors">{reason.title}</h3>
                  <p className="text-mist leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <ScrollReveal direction="up" delay={900}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-almond/20 to-almond/10 backdrop-blur-sm rounded-3xl p-12 border border-almond/30">
              <h3 className="text-3xl font-bold text-almond mb-6">Ready to Start Your Journey?</h3>
              <p className="text-mist mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Join thousands of successful graduates who have built their careers with a JRU education. Your future
                starts here in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-almond text-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-almond/90 transition-all duration-300 hover:scale-105 shadow-lg">
                  Apply Now
                </button>
                <button className="border-2 border-almond text-almond px-10 py-4 rounded-full font-bold text-lg hover:bg-almond hover:text-navy transition-all duration-300 hover:scale-105">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
