import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ScrollReveal from "@/components/scroll-reveal"
import ImageTextSection from "@/components/image-text-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Award, TrendingUp, Globe, Cpu, Palette, Briefcase, Leaf, Heart } from "lucide-react"

export default function CollegesPage() {
  const colleges = [
    {
      icon: Cpu,
      title: "College of Information Technology",
      description:
        "Leading the digital transformation with cutting-edge programs in computer science, software engineering, and cybersecurity.",
      programs: ["Computer Science", "Information Technology", "Software Engineering", "Cybersecurity", "Data Science"],
      students: "1,200+",
      faculty: "45",
      image: "/modern-computer-lab.png",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Palette,
      title: "College of Multimedia Arts",
      description:
        "Nurturing creative minds through innovative programs in digital arts, animation, and multimedia production.",
      programs: ["Digital Arts", "Animation", "Game Development", "Graphic Design", "Film Production"],
      students: "800+",
      faculty: "32",
      image: "/creative-studio.png",
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Briefcase,
      title: "College of Business Administration",
      description:
        "Developing future business leaders with comprehensive programs in management, entrepreneurship, and finance.",
      programs: ["Business Administration", "Entrepreneurship", "Marketing", "Finance", "Human Resources"],
      students: "950+",
      faculty: "38",
      image: "/placeholder-w4w2i.png",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Leaf,
      title: "College of Environmental Science",
      description:
        "Addressing global environmental challenges through research and education in sustainability and conservation.",
      programs: ["Environmental Science", "Environmental Engineering", "Sustainability Studies", "Marine Biology"],
      students: "600+",
      faculty: "28",
      image: "/environmental-research.png",
      color: "from-emerald-50 to-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: Globe,
      title: "College of Tourism & Hospitality",
      description:
        "Preparing students for the global tourism industry with world-class hospitality and tourism management programs.",
      programs: ["Tourism Management", "Hotel & Restaurant Management", "Culinary Arts", "Event Management"],
      students: "700+",
      faculty: "30",
      image: "/luxury-hotel-hospitality-training.png",
      color: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Heart,
      title: "College of Health Sciences",
      description:
        "Training compassionate healthcare professionals with programs in nursing, medical technology, and allied health.",
      programs: ["Nursing", "Medical Technology", "Physical Therapy", "Pharmacy", "Psychology"],
      students: "850+",
      faculty: "42",
      image: "/health-clinic.png",
      color: "from-red-50 to-red-100",
      iconColor: "text-red-600",
    },
  ]

  const achievements = [
    {
      title: "PACUCOA Accredited Programs",
      value: "85%",
      description: "of our programs hold Level III or IV accreditation",
    },
    {
      title: "Industry Partnerships",
      value: "200+",
      description: "active partnerships with leading companies",
    },
    {
      title: "Research Publications",
      value: "150+",
      description: "peer-reviewed publications in 2024",
    },
    {
      title: "Graduate Employment Rate",
      value: "96%",
      description: "of graduates employed within 6 months",
    },
  ]

  const features = [
    {
      icon: Award,
      title: "Excellence in Education",
      description: "All colleges maintain high academic standards with accredited programs",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified faculty with industry experience and advanced degrees",
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Updated curricula aligned with industry needs and global standards",
    },
    {
      icon: TrendingUp,
      title: "Career Success",
      description: "Strong track record of graduate employment and career advancement",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <PageBanner
        title="Our Colleges"
        subtitle="Six Colleges of Excellence - Shaping Tomorrow's Leaders"
        image="/campus-forum-speakers.png"
      />

      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Introduction */}
        <ScrollReveal direction="fade" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Centers of Academic Excellence</h2>
          <p className="text-lg text-mist leading-relaxed">
            Our six colleges represent diverse fields of study, each committed to providing world-class education that
            prepares students for successful careers and meaningful contributions to society. With over 4,100 students
            and 215 dedicated faculty members, we offer a comprehensive educational experience.
          </p>
        </ScrollReveal>

        {/* University Overview */}
        <ImageTextSection
          title="A University of Distinction"
          description="Jak Roberto University stands as a beacon of educational excellence in the Philippines. Our colleges work together to create an integrated learning environment where students can explore interdisciplinary opportunities and develop well-rounded perspectives on their chosen fields."
          image="/diverse-students-safe-campus.png"
          imageAlt="Diverse students on campus"
        >
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">4,100+</div>
              <div className="text-sm text-mist">Total Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">215</div>
              <div className="text-sm text-mist">Faculty Members</div>
            </div>
          </div>
        </ImageTextSection>

        {/* Colleges Grid */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Six Colleges</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Explore our diverse academic offerings across six specialized colleges
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {colleges.map((college, index) => (
              <ScrollReveal key={index} direction="fade" delay={index * 100}>
                <Card
                  className={`overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${college.color}`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
                    >
                      <div className="lg:w-1/2 p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                            <college.icon className={`w-8 h-8 ${college.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-navy">{college.title}</h3>
                            <div className="flex gap-4 mt-2">
                              <Badge variant="secondary" className="bg-white/60">
                                <Users className="w-3 h-3 mr-1" />
                                {college.students} Students
                              </Badge>
                              <Badge variant="secondary" className="bg-white/60">
                                <BookOpen className="w-3 h-3 mr-1" />
                                {college.faculty} Faculty
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-mist text-lg mb-6 leading-relaxed">{college.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-navy mb-3">Programs Offered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {college.programs.map((program, programIndex) => (
                              <Badge key={programIndex} variant="outline" className="border-navy/30 text-navy">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="bg-navy hover:bg-navy/90">Learn More</Button>
                      </div>

                      <div className="lg:w-1/2">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={college.image || "/placeholder.svg"}
                            alt={college.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Achievements</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">Measurable excellence across all our colleges</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <CardContent className="space-y-4">
                    <div className="text-4xl font-bold text-gold group-hover:text-navy transition-colors duration-300">
                      {achievement.value}
                    </div>
                    <h3 className="text-lg font-bold text-navy">{achievement.title}</h3>
                    <p className="text-sm text-mist">{achievement.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">What Sets Our Colleges Apart</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Common strengths that define excellence across all our colleges
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-navy/20 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                    <p className="text-sm text-mist leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <ImageTextSection
          title="Choose Your Path to Excellence"
          description="Each of our colleges offers unique opportunities for growth, learning, and career development. Whether you're passionate about technology, arts, business, environment, tourism, or health sciences, we have the perfect program to help you achieve your goals and make a meaningful impact in your chosen field."
          image="/student-project-presentations.png"
          imageAlt="Students presenting projects"
          reverse
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-navy hover:bg-navy/90">
              Explore Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent"
            >
              Schedule Campus Visit
            </Button>
          </div>
        </ImageTextSection>
      </main>

      <Footer />
    </div>
  )
}
