import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ScrollReveal from "@/components/scroll-reveal"
import ImageTextSection from "@/components/image-text-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Medal } from "lucide-react"

export default function AwardsPage() {
  const awards = [
    {
      year: "2025",
      title: "Excellence in Information Technology Education",
      organization: "Commission on Higher Education (CHED)",
      description: "Recognized for outstanding IT curriculum and industry partnerships",
      category: "Academic Excellence",
    },
    {
      year: "2024",
      title: "Best Environmental Sustainability Program",
      organization: "Philippine Association of Universities",
      description: "Leading green campus initiatives and environmental research",
      category: "Sustainability",
    },
    {
      year: "2024",
      title: "Outstanding Student Support Services",
      organization: "Association of Philippine Universities",
      description: "Comprehensive student welfare and development programs",
      category: "Student Services",
    },
    {
      year: "2023",
      title: "Innovation in Digital Learning",
      organization: "Educational Technology Association",
      description: "Pioneering online and hybrid learning methodologies",
      category: "Technology",
    },
    {
      year: "2023",
      title: "Community Engagement Excellence",
      organization: "Philippine Community Development Foundation",
      description: "Outstanding community outreach and social responsibility programs",
      category: "Community Service",
    },
    {
      year: "2022",
      title: "Research Excellence Award",
      organization: "National Research Council",
      description: "Significant contributions to scientific research and innovation",
      category: "Research",
    },
  ]

  const recognitions = [
    {
      icon: Trophy,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certification for educational excellence",
    },
    {
      icon: Award,
      title: "PACUCOA Accredited",
      description: "Level IV accreditation for multiple academic programs",
    },
    {
      icon: Star,
      title: "CHED Center of Excellence",
      description: "Recognized center for Information Technology education",
    },
    {
      icon: Medal,
      title: "Green University Certification",
      description: "Environmental sustainability and green campus practices",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <PageBanner
        title="Awards & Recognition"
        subtitle="Celebrating Excellence in Education and Innovation"
        image="/campus-forum-speakers.png"
      />

      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Introduction Section */}
        <ScrollReveal direction="fade" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">A Legacy of Excellence</h2>
          <p className="text-lg text-mist leading-relaxed">
            Jak Roberto University has consistently been recognized for its commitment to academic excellence,
            innovation, and community service. Our awards and recognitions reflect our dedication to providing
            world-class education and making a positive impact on society.
          </p>
        </ScrollReveal>

        {/* Featured Achievement */}
        <ImageTextSection
          title="2025 Excellence in IT Education"
          description="Our Information Technology programs have been recognized by CHED as a Center of Excellence, highlighting our innovative curriculum, state-of-the-art facilities, and strong industry partnerships that prepare students for the digital future."
          image="/modern-computer-lab.png"
          imageAlt="Students in modern computer laboratory"
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gold/20 text-gold border-gold/30">
              CHED Recognition
            </Badge>
            <Badge variant="secondary" className="bg-navy/20 text-navy border-navy/30">
              2025 Award
            </Badge>
          </div>
        </ImageTextSection>

        {/* Awards Timeline */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Recent Awards & Achievements</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Our journey of recognition spans multiple areas of excellence
            </p>
          </ScrollReveal>

          <div className="grid gap-8">
            {awards.map((award, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-24 flex-shrink-0">
                        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                          <Trophy className="w-8 h-8 text-gold" />
                        </div>
                        <div className="mt-2 text-center">
                          <span className="text-sm font-semibold text-navy">{award.year}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                            {award.title}
                          </h3>
                          <Badge variant="outline" className="border-navy/30 text-navy">
                            {award.category}
                          </Badge>
                        </div>
                        <p className="text-mist font-medium mb-3">{award.organization}</p>
                        <p className="text-mist leading-relaxed">{award.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Certifications & Recognitions */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Certifications & Accreditations</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Our commitment to quality is validated by prestigious certifications
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitions.map((recognition, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-navy/20 transition-colors duration-300">
                      <recognition.icon className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">{recognition.title}</h3>
                    <p className="text-sm text-mist leading-relaxed">{recognition.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <ImageTextSection
          title="Making a Difference"
          description="Our awards reflect not just institutional excellence, but our impact on students, communities, and society. Each recognition motivates us to continue pushing boundaries in education, research, and service to create a better future for all."
          image="/students-community-help.png"
          imageAlt="Students helping in community service"
          reverse
        >
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">25+</div>
              <div className="text-sm text-mist">Awards Received</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">15</div>
              <div className="text-sm text-mist">Years of Excellence</div>
            </div>
          </div>
        </ImageTextSection>
      </main>

      <Footer />
    </div>
  )
}
