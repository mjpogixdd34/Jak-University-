import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ScrollReveal from "@/components/scroll-reveal"
import ImageTextSection from "@/components/image-text-section"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, Users, Target, Compass, Shield } from "lucide-react"

export default function PhilosophyPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Excellence",
      description:
        "We strive for the highest standards in education, research, and service, continuously improving to exceed expectations.",
      color: "text-red-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking approaches to solve challenges and create opportunities for growth.",
      color: "text-yellow-600",
    },
    {
      icon: Users,
      title: "Service",
      description: "We are committed to serving our students, community, and society with dedication and compassion.",
      color: "text-blue-600",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our actions, fostering trust and accountability.",
      color: "text-green-600",
    },
    {
      icon: Compass,
      title: "Leadership",
      description: "We develop leaders who can navigate challenges and inspire positive change in their communities.",
      color: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Sustainability",
      description: "We are committed to environmental stewardship and sustainable practices for future generations.",
      color: "text-emerald-600",
    },
  ]

  const philosophicalPillars = [
    {
      title: "Holistic Education",
      description:
        "We believe in developing the whole person - intellectually, emotionally, socially, and spiritually. Our educational approach nurtures critical thinking, creativity, and character formation.",
      image: "/diverse-students-safe-campus.png",
    },
    {
      title: "Student-Centered Learning",
      description:
        "Every student is unique, and we tailor our approach to meet individual learning needs, fostering an environment where every student can thrive and reach their full potential.",
      image: "/student-project-presentations.png",
    },
    {
      title: "Community Partnership",
      description:
        "Education extends beyond the classroom. We actively engage with communities, industries, and global partners to create meaningful learning experiences and social impact.",
      image: "/international-students-collaboration.png",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <PageBanner
        title="Core Philosophy"
        subtitle="Our Guiding Principles and Educational Beliefs"
        image="/campus-forum-speakers.png"
      />

      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Mission & Vision */}
        <section className="space-y-16">
          <ScrollReveal direction="fade" className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Our Educational Philosophy</h2>
            <p className="text-lg text-mist leading-relaxed">
              At Jak Roberto University, we believe that education is transformative. Our philosophy centers on
              developing not just knowledgeable graduates, but ethical leaders who can contribute meaningfully to
              society and drive positive change in the world.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <Card className="h-full p-8 bg-gradient-to-br from-navy/5 to-gold/5 border-navy/20">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
                  <p className="text-mist leading-relaxed">
                    To provide transformative education that empowers students to become ethical leaders, innovative
                    thinkers, and responsible global citizens who contribute to the betterment of society through
                    excellence in learning, research, and service.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="h-full p-8 bg-gradient-to-br from-gold/5 to-navy/5 border-gold/20">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <Compass className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Our Vision</h3>
                  <p className="text-mist leading-relaxed">
                    To be a leading university recognized globally for academic excellence, innovative research, and
                    meaningful community engagement, producing graduates who are catalysts for positive change and
                    sustainable development.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              These fundamental principles guide every aspect of our university life
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <CardContent className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300`}
                    >
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-navy">{value.title}</h3>
                    <p className="text-mist leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Philosophical Pillars */}
        <section className="space-y-16">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Educational Pillars</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              The foundational principles that shape our approach to education
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {philosophicalPillars.map((pillar, index) => (
              <ImageTextSection
                key={index}
                title={pillar.title}
                description={pillar.description}
                image={pillar.image}
                imageAlt={pillar.title}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        {/* Commitment Statement */}
        <ScrollReveal direction="fade" className="text-center bg-gradient-to-r from-navy/5 to-gold/5 rounded-3xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Our Commitment to You</h2>
          <p className="text-lg text-mist leading-relaxed max-w-4xl mx-auto">
            We pledge to provide an educational experience that not only imparts knowledge but transforms lives. Our
            commitment extends beyond graduation, as we continue to support our alumni in their journey of lifelong
            learning and professional growth. Together, we build a community of learners, leaders, and changemakers who
            make a positive impact on the world.
          </p>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
