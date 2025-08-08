import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ScrollReveal from "@/components/scroll-reveal"
import ImageTextSection from "@/components/image-text-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Clock, Users, Award, BookOpen, Briefcase } from "lucide-react"

export default function ProgramsPage() {
  const undergraduatePrograms = [
    {
      title: "Bachelor of Science in Computer Science",
      college: "College of Information Technology",
      duration: "4 years",
      units: "144",
      description: "Comprehensive program covering software development, algorithms, and computer systems.",
      specializations: ["Software Engineering", "Data Science", "Artificial Intelligence"],
      careerPaths: ["Software Developer", "Systems Analyst", "Data Scientist", "AI Engineer"],
    },
    {
      title: "Bachelor of Science in Information Technology",
      college: "College of Information Technology",
      duration: "4 years",
      units: "144",
      description: "Focus on practical IT skills, network administration, and system management.",
      specializations: ["Network Administration", "Cybersecurity", "Web Development"],
      careerPaths: ["IT Specialist", "Network Administrator", "Web Developer", "Cybersecurity Analyst"],
    },
    {
      title: "Bachelor of Multimedia Arts",
      college: "College of Multimedia Arts",
      duration: "4 years",
      units: "144",
      description: "Creative program combining traditional arts with digital media technologies.",
      specializations: ["Digital Animation", "Game Design", "Graphic Design"],
      careerPaths: ["Animator", "Game Designer", "Graphic Designer", "Digital Artist"],
    },
    {
      title: "Bachelor of Science in Business Administration",
      college: "College of Business Administration",
      duration: "4 years",
      units: "144",
      description: "Comprehensive business education with focus on management and entrepreneurship.",
      specializations: ["Marketing", "Finance", "Human Resources", "Entrepreneurship"],
      careerPaths: ["Business Manager", "Marketing Specialist", "Financial Analyst", "Entrepreneur"],
    },
    {
      title: "Bachelor of Science in Environmental Science",
      college: "College of Environmental Science",
      duration: "4 years",
      units: "144",
      description: "Interdisciplinary program addressing environmental challenges and sustainability.",
      specializations: ["Environmental Management", "Conservation Biology", "Climate Science"],
      careerPaths: ["Environmental Consultant", "Conservation Scientist", "Environmental Analyst"],
    },
    {
      title: "Bachelor of Science in Tourism Management",
      college: "College of Tourism & Hospitality",
      duration: "4 years",
      units: "144",
      description: "Comprehensive tourism education with focus on hospitality and service excellence.",
      specializations: ["Hotel Management", "Event Management", "Culinary Arts"],
      careerPaths: ["Tourism Manager", "Hotel Manager", "Event Coordinator", "Travel Consultant"],
    },
  ]

  const graduatePrograms = [
    {
      title: "Master of Science in Information Technology",
      college: "College of Information Technology",
      duration: "2 years",
      units: "36",
      description: "Advanced IT program focusing on emerging technologies and research.",
      specializations: ["Data Analytics", "Cybersecurity Management", "IT Leadership"],
      careerPaths: ["IT Director", "Chief Technology Officer", "Research Scientist"],
    },
    {
      title: "Master of Business Administration",
      college: "College of Business Administration",
      duration: "2 years",
      units: "36",
      description: "Executive MBA program for working professionals and business leaders.",
      specializations: ["Strategic Management", "Digital Business", "Global Business"],
      careerPaths: ["CEO", "Business Consultant", "Operations Director"],
    },
    {
      title: "Master of Science in Environmental Management",
      college: "College of Environmental Science",
      duration: "2 years",
      units: "36",
      description: "Advanced program in environmental policy, management, and sustainability.",
      specializations: ["Environmental Policy", "Sustainable Development", "Climate Change"],
      careerPaths: ["Environmental Manager", "Policy Analyst", "Sustainability Director"],
    },
  ]

  const doctoratePrograms = [
    {
      title: "Doctor of Philosophy in Information Technology",
      college: "College of Information Technology",
      duration: "3-5 years",
      units: "54",
      description: "Research-focused doctoral program in advanced IT topics.",
      specializations: ["AI Research", "Cybersecurity Research", "Data Science Research"],
      careerPaths: ["University Professor", "Research Director", "Chief Scientist"],
    },
    {
      title: "Doctor of Philosophy in Environmental Science",
      college: "College of Environmental Science",
      duration: "3-5 years",
      units: "54",
      description: "Doctoral program focusing on environmental research and policy.",
      specializations: ["Climate Research", "Biodiversity Studies", "Environmental Policy"],
      careerPaths: ["Research Scientist", "University Professor", "Policy Advisor"],
    },
  ]

  const programFeatures = [
    {
      icon: Award,
      title: "Accredited Programs",
      description: "All programs are accredited by PACUCOA and recognized by CHED",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals and academic experts",
    },
    {
      icon: Briefcase,
      title: "Industry Partnerships",
      description: "Strong connections with leading companies for internships and jobs",
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Updated curricula aligned with industry needs and global standards",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <PageBanner
        title="Academic Programs"
        subtitle="Comprehensive Education from Undergraduate to Doctoral Level"
        image="/student-project-presentations.png"
      />

      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Introduction */}
        <ScrollReveal direction="fade" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Programs That Shape Futures</h2>
          <p className="text-lg text-mist leading-relaxed">
            Discover our comprehensive range of academic programs designed to prepare you for success in today's dynamic
            global economy. From undergraduate degrees to doctoral programs, we offer pathways to excellence in diverse
            fields of study.
          </p>
        </ScrollReveal>

        {/* Program Overview */}
        <ImageTextSection
          title="Excellence in Every Program"
          description="Our academic programs are carefully designed to provide students with both theoretical knowledge and practical skills. With over 30 undergraduate and graduate programs across six colleges, we offer diverse pathways to career success and personal growth."
          image="/modern-computer-lab.png"
          imageAlt="Students in modern computer lab"
        >
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">30+</div>
              <div className="text-sm text-mist">Academic Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">96%</div>
              <div className="text-sm text-mist">Employment Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">85%</div>
              <div className="text-sm text-mist">Accredited Programs</div>
            </div>
          </div>
        </ImageTextSection>

        {/* Programs by Level */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Programs by Academic Level</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">Explore our comprehensive program offerings</p>
          </ScrollReveal>

          <ScrollReveal direction="fade">
            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="graduate">Graduate</TabsTrigger>
                <TabsTrigger value="doctorate">Doctorate</TabsTrigger>
              </TabsList>

              <TabsContent value="undergraduate" className="mt-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {undergraduatePrograms.map((program, index) => (
                    <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                      <Card className="h-full hover:shadow-xl transition-all duration-500 group">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <CardTitle className="text-lg text-navy group-hover:text-gold transition-colors duration-300">
                                {program.title}
                              </CardTitle>
                              <p className="text-sm text-mist mt-1">{program.college}</p>
                            </div>
                            <Badge variant="secondary" className="bg-navy/10 text-navy">
                              <GraduationCap className="w-3 h-3 mr-1" />
                              Bachelor's
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex gap-4 text-sm text-mist">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {program.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              {program.units} units
                            </div>
                          </div>

                          <p className="text-mist">{program.description}</p>

                          <div>
                            <h4 className="font-semibold text-navy mb-2">Specializations:</h4>
                            <div className="flex flex-wrap gap-1">
                              {program.specializations.map((spec, specIndex) => (
                                <Badge key={specIndex} variant="outline" className="text-xs border-navy/30 text-navy">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-navy mb-2">Career Paths:</h4>
                            <div className="flex flex-wrap gap-1">
                              {program.careerPaths.map((career, careerIndex) => (
                                <Badge key={careerIndex} variant="secondary" className="text-xs bg-gold/20 text-gold">
                                  {career}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full bg-navy hover:bg-navy/90">Learn More</Button>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="graduate" className="mt-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {graduatePrograms.map((program, index) => (
                    <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                      <Card className="h-full hover:shadow-xl transition-all duration-500 group">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <CardTitle className="text-lg text-navy group-hover:text-gold transition-colors duration-300">
                                {program.title}
                              </CardTitle>
                              <p className="text-sm text-mist mt-1">{program.college}</p>
                            </div>
                            <Badge variant="secondary" className="bg-gold/20 text-gold">
                              <GraduationCap className="w-3 h-3 mr-1" />
                              Master's
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex gap-4 text-sm text-mist">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {program.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              {program.units} units
                            </div>
                          </div>

                          <p className="text-mist">{program.description}</p>

                          <div>
                            <h4 className="font-semibold text-navy mb-2">Specializations:</h4>
                            <div className="flex flex-wrap gap-1">
                              {program.specializations.map((spec, specIndex) => (
                                <Badge key={specIndex} variant="outline" className="text-xs border-navy/30 text-navy">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-navy mb-2">Career Paths:</h4>
                            <div className="flex flex-wrap gap-1">
                              {program.careerPaths.map((career, careerIndex) => (
                                <Badge key={careerIndex} variant="secondary" className="text-xs bg-gold/20 text-gold">
                                  {career}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full bg-navy hover:bg-navy/90">Learn More</Button>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="doctorate" className="mt-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {doctoratePrograms.map((program, index) => (
                    <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                      <Card className="h-full hover:shadow-xl transition-all duration-500 group">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <CardTitle className="text-lg text-navy group-hover:text-gold transition-colors duration-300">
                                {program.title}
                              </CardTitle>
                              <p className="text-sm text-mist mt-1">{program.college}</p>
                            </div>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                              <GraduationCap className="w-3 h-3 mr-1" />
                              Doctorate
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex gap-4 text-sm text-mist">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {program.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              {program.units} units
                            </div>
                          </div>

                          <p className="text-mist">{program.description}</p>

                          <div>
                            <h4 className="font-semibold text-navy mb-2">Research Areas:</h4>
                            <div className="flex flex-wrap gap-1">
                              {program.specializations.map((spec, specIndex) => (
                                <Badge key={specIndex} variant="outline" className="text-xs border-navy/30 text-navy">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-navy mb-2">Career Paths:</h4>
                            <div className="flex flex-wrap gap-1">
                              {program.careerPaths.map((career, careerIndex) => (
                                <Badge key={careerIndex} variant="secondary" className="text-xs bg-gold/20 text-gold">
                                  {career}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full bg-navy hover:bg-navy/90">Learn More</Button>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </section>

        {/* Program Features */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">What Makes Our Programs Special</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Quality features that define excellence in all our academic programs
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programFeatures.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
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
          title="Find Your Perfect Program"
          description="With over 30 programs across six colleges, we offer diverse pathways to success. Our programs are designed to provide you with the knowledge, skills, and experience needed to excel in your chosen career. Take the first step towards your future today."
          image="/diverse-students-safe-campus.png"
          imageAlt="Diverse students on campus"
          reverse
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-navy hover:bg-navy/90">
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent"
            >
              Request Information
            </Button>
          </div>
        </ImageTextSection>
      </main>

      <Footer />
    </div>
  )
}
