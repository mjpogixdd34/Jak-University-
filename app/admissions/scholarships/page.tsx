import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ScrollReveal from "@/components/scroll-reveal"
import ImageTextSection from "@/components/image-text-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Trophy, Heart, Users, Star, BookOpen, DollarSign, Calendar } from "lucide-react"

export default function ScholarshipsPage() {
  const scholarshipPrograms = [
    {
      icon: Trophy,
      title: "Academic Excellence Scholarship",
      description: "For outstanding academic achievers with GPA of 95% and above",
      coverage: "100% Tuition Fee",
      requirements: ["High School GPA: 95% and above", "Entrance Exam: Top 5%", "Interview", "Maintain 95% GPA"],
      color: "from-gold/10 to-gold/20",
      iconColor: "text-gold",
    },
    {
      icon: Users,
      title: "Leadership Scholarship",
      description: "For students with exceptional leadership potential and community involvement",
      coverage: "75% Tuition Fee",
      requirements: ["Leadership experience", "Community service record", "Recommendation letters", "Maintain 90% GPA"],
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Need-Based Scholarship",
      description: "Financial assistance for deserving students from low-income families",
      coverage: "50-100% Tuition Fee",
      requirements: [
        "Financial need assessment",
        "Academic performance: 85%+",
        "Good moral character",
        "Maintain 85% GPA",
      ],
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Star,
      title: "Sports Scholarship",
      description: "For student-athletes who excel in various sports disciplines",
      coverage: "50-100% Tuition Fee",
      requirements: [
        "Sports achievement record",
        "Physical fitness test",
        "Academic performance: 80%+",
        "Team commitment",
      ],
      color: "from-red-50 to-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: BookOpen,
      title: "STEM Excellence Scholarship",
      description: "Supporting future innovators in Science, Technology, Engineering, and Mathematics",
      coverage: "75% Tuition Fee",
      requirements: ["STEM program enrollment", "Math/Science excellence", "Research interest", "Maintain 90% GPA"],
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Alumni Legacy Scholarship",
      description: "For children and grandchildren of JRU alumni",
      coverage: "25% Tuition Fee",
      requirements: [
        "Parent/Grandparent JRU graduate",
        "Academic performance: 85%+",
        "Application essay",
        "Maintain 85% GPA",
      ],
      color: "from-navy/10 to-navy/20",
      iconColor: "text-navy",
    },
  ]

  const applicationProcess = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Review scholarship requirements and ensure you meet the criteria",
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather all required documents including transcripts and certificates",
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Complete the scholarship application form and submit all documents",
    },
    {
      step: 4,
      title: "Assessment",
      description: "Applications are reviewed by the scholarship committee",
    },
    {
      step: 5,
      title: "Interview",
      description: "Selected candidates may be invited for an interview",
    },
    {
      step: 6,
      title: "Award Notification",
      description: "Successful applicants receive scholarship award notification",
    },
  ]

  const importantDates = [
    { event: "Scholarship Application Opens", date: "January 15, 2025", status: "upcoming" },
    { event: "Early Application Deadline", date: "March 1, 2025", status: "upcoming" },
    { event: "Regular Application Deadline", date: "April 15, 2025", status: "upcoming" },
    { event: "Interview Period", date: "May 1-15, 2025", status: "upcoming" },
    { event: "Award Notification", date: "June 1, 2025", status: "upcoming" },
    { event: "Scholarship Orientation", date: "July 15, 2025", status: "upcoming" },
  ]

  const benefits = [
    {
      title: "Tuition Coverage",
      description: "Partial to full tuition fee coverage based on scholarship type",
    },
    {
      title: "Academic Support",
      description: "Access to tutoring, mentoring, and academic resources",
    },
    {
      title: "Leadership Development",
      description: "Exclusive workshops and leadership training programs",
    },
    {
      title: "Career Guidance",
      description: "Priority access to career counseling and job placement services",
    },
    {
      title: "Alumni Network",
      description: "Connection to JRU's extensive alumni network",
    },
    {
      title: "Research Opportunities",
      description: "Priority consideration for research projects and internships",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <PageBanner
        title="Scholarships & Financial Aid"
        subtitle="Investing in Your Future - Making Quality Education Accessible"
        image="/microsoft-certified-students.png"
      />

      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Introduction */}
        <ScrollReveal direction="fade" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Unlock Your Potential</h2>
          <p className="text-lg text-mist leading-relaxed">
            At Jak Roberto University, we believe that financial constraints should never be a barrier to quality
            education. Our comprehensive scholarship programs are designed to support deserving students in achieving
            their academic dreams and building successful careers.
          </p>
        </ScrollReveal>

        {/* Scholarship Impact */}
        <ImageTextSection
          title="Transforming Lives Through Education"
          description="Our scholarship programs have supported over 2,000 students in the past decade, with 95% of scholarship recipients graduating with honors and securing employment within six months of graduation. We're committed to nurturing the next generation of leaders and innovators."
          image="/students-community-help.png"
          imageAlt="Students helping in community"
        >
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">2,000+</div>
              <div className="text-sm text-mist">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">₱50M</div>
              <div className="text-sm text-mist">Total Aid Given</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">95%</div>
              <div className="text-sm text-mist">Graduate Success Rate</div>
            </div>
          </div>
        </ImageTextSection>

        {/* Scholarship Programs */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Scholarship Programs</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">Discover the scholarship that's right for you</p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipPrograms.map((scholarship, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-500 group bg-gradient-to-br ${scholarship.color}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                        <scholarship.icon className={`w-6 h-6 ${scholarship.iconColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-navy">{scholarship.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 bg-white/60">
                          <DollarSign className="w-3 h-3 mr-1" />
                          {scholarship.coverage}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-mist">{scholarship.description}</p>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {scholarship.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-mist flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-navy rounded-full flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">How to Apply</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">Simple steps to secure your scholarship</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationProcess.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-navy text-ivory rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors duration-300">
                      <span className="font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-mist">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Important Dates */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Important Dates for 2025</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">Don't miss these crucial scholarship deadlines</p>
          </ScrollReveal>

          <ScrollReveal direction="fade">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-navy" />
                        <span className="font-medium text-navy">{item.event}</span>
                      </div>
                      <Badge variant="secondary" className="bg-gold/20 text-gold">
                        {item.date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </section>

        {/* Scholarship Benefits */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Beyond Financial Support</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Our scholarships provide comprehensive support for your success
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <CardContent className="text-center space-y-4">
                    <h3 className="text-lg font-bold text-navy">{benefit.title}</h3>
                    <p className="text-mist">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <ImageTextSection
          title="Start Your Scholarship Journey Today"
          description="Don't let financial barriers hold you back from achieving your dreams. Our scholarship programs are designed to support students who demonstrate academic excellence, leadership potential, or financial need. Take the first step towards a brighter future."
          image="/diverse-students-safe-campus.png"
          imageAlt="Diverse students on campus"
          reverse
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-navy hover:bg-navy/90">
              Apply for Scholarship
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent"
            >
              Download Application Form
            </Button>
          </div>
        </ImageTextSection>

        {/* Contact Information */}
        <ScrollReveal direction="fade">
          <Card className="bg-gradient-to-r from-navy/5 to-gold/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-navy mb-4">Need Help with Your Application?</h3>
              <p className="text-mist mb-6 max-w-2xl mx-auto">
                Our Financial Aid Office is here to guide you through the scholarship application process. Contact us
                for personalized assistance and answers to your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <p className="font-semibold text-navy">Email</p>
                  <p className="text-mist">scholarships@jru.edu.ph</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-navy">Phone</p>
                  <p className="text-mist">(02) 8123-4567</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-navy">Office Hours</p>
                  <p className="text-mist">Mon-Fri, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
