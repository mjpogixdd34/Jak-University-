import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ScrollReveal from "@/components/scroll-reveal"
import ImageTextSection from "@/components/image-text-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, GraduationCap, Clock, AlertCircle } from "lucide-react"

export default function RequirementsPage() {
  const freshmenRequirements = [
    "High School Diploma or equivalent (Form 138)",
    "Certificate of Good Moral Character",
    "Birth Certificate (NSO/PSA)",
    "2x2 ID Photos (4 pieces)",
    "Medical Certificate",
    "Entrance Examination Results",
    "Application Form (completed)",
    "Application Fee Payment Receipt",
  ]

  const transferRequirements = [
    "Official Transcript of Records (TOR)",
    "Certificate of Transfer Credential",
    "Certificate of Good Moral Character",
    "Birth Certificate (NSO/PSA)",
    "2x2 ID Photos (4 pieces)",
    "Medical Certificate",
    "Entrance Examination Results (if required)",
    "Application Form (completed)",
    "Application Fee Payment Receipt",
  ]

  const internationalRequirements = [
    "Authenticated Academic Records",
    "English Proficiency Test Results (TOEFL/IELTS)",
    "Student Visa Documentation",
    "Passport and Immigration Documents",
    "Medical Certificate with Health Insurance",
    "Financial Statement/Proof of Financial Support",
    "Certificate of Good Moral Character",
    "2x2 ID Photos (6 pieces)",
    "Application Form (completed)",
    "Application Fee Payment Receipt",
  ]

  const graduateRequirements = [
    "Bachelor's Degree Transcript (TOR)",
    "Diploma Copy (authenticated)",
    "Certificate of Good Moral Character",
    "Birth Certificate (NSO/PSA)",
    "2x2 ID Photos (4 pieces)",
    "Medical Certificate",
    "Graduate Admission Test Results",
    "Statement of Purpose/Research Proposal",
    "Letters of Recommendation (2-3)",
    "Application Form (completed)",
    "Application Fee Payment Receipt",
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete the online application form and submit required documents",
      timeline: "1-2 weeks before deadline",
    },
    {
      step: 2,
      title: "Take Entrance Exam",
      description: "Schedule and take the university entrance examination",
      timeline: "As scheduled",
    },
    {
      step: 3,
      title: "Document Review",
      description: "Admissions committee reviews all submitted documents",
      timeline: "2-3 weeks",
    },
    {
      step: 4,
      title: "Interview (if required)",
      description: "Selected applicants may be called for an interview",
      timeline: "1 week",
    },
    {
      step: 5,
      title: "Admission Decision",
      description: "Receive notification of admission status",
      timeline: "1-2 weeks",
    },
    {
      step: 6,
      title: "Enrollment",
      description: "Complete enrollment process and pay fees",
      timeline: "Before semester starts",
    },
  ]

  const importantDates = [
    { event: "Application Period Opens", date: "January 15, 2025" },
    { event: "Early Application Deadline", date: "March 15, 2025" },
    { event: "Regular Application Deadline", date: "May 15, 2025" },
    { event: "Entrance Examinations", date: "March - June 2025" },
    { event: "Admission Results Release", date: "July 1, 2025" },
    { event: "Enrollment Period", date: "July 15 - August 15, 2025" },
    { event: "Classes Begin", date: "August 20, 2025" },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <PageBanner
        title="Admission Requirements"
        subtitle="Your Gateway to Excellence - Complete Guide to JRU Admission"
        image="/student-project-presentations.png"
      />

      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Introduction */}
        <ScrollReveal direction="fade" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Start Your Journey with JRU</h2>
          <p className="text-lg text-mist leading-relaxed">
            We've streamlined our admission process to make it as straightforward as possible. Follow our comprehensive
            guide to ensure your application is complete and submitted on time.
          </p>
        </ScrollReveal>

        {/* Application Process Overview */}
        <ImageTextSection
          title="Simple Application Process"
          description="Our admission process is designed to be transparent and efficient. We evaluate each application holistically, considering academic performance, extracurricular activities, and personal qualities that align with our university values."
          image="/diverse-students-safe-campus.png"
          imageAlt="Diverse students on campus"
        >
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="bg-navy/10 text-navy">
              Online Application
            </Badge>
            <Badge variant="secondary" className="bg-gold/10 text-gold">
              Document Submission
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Quick Processing
            </Badge>
          </div>
        </ImageTextSection>

        {/* Requirements by Category */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Admission Requirements</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">Choose your category to see specific requirements</p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Freshmen Requirements */}
            <ScrollReveal direction="left">
              <Card className="h-full hover:shadow-xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-navy/5 to-navy/10">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-navy" />
                    <CardTitle className="text-xl text-navy">Freshmen Students</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-mist mb-6">For high school graduates entering university for the first time</p>
                  <ul className="space-y-3">
                    {freshmenRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-mist">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Transfer Requirements */}
            <ScrollReveal direction="right">
              <Card className="h-full hover:shadow-xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-gold/5 to-gold/10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-gold" />
                    <CardTitle className="text-xl text-navy">Transfer Students</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-mist mb-6">For students transferring from other institutions</p>
                  <ul className="space-y-3">
                    {transferRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-mist">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* International Requirements */}
            <ScrollReveal direction="left" delay={100}>
              <Card className="h-full hover:shadow-xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-xl text-navy">International Students</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-mist mb-6">For students from other countries</p>
                  <ul className="space-y-3">
                    {internationalRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-mist">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Graduate Requirements */}
            <ScrollReveal direction="right" delay={100}>
              <Card className="h-full hover:shadow-xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                    <CardTitle className="text-xl text-navy">Graduate Students</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-mist mb-6">For Master's and Doctoral programs</p>
                  <ul className="space-y-3">
                    {graduateRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-mist">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Application Steps */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Application Process</h2>
            <p className="text-lg text-mist max-w-2xl mx-auto">Follow these steps to complete your application</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-navy text-ivory rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors duration-300">
                      <span className="font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-mist mb-4">{step.description}</p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.timeline}
                    </Badge>
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
            <p className="text-lg text-mist max-w-2xl mx-auto">Mark your calendar with these crucial admission dates</p>
          </ScrollReveal>

          <ScrollReveal direction="fade">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {importantDates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span className="font-medium text-navy">{item.event}</span>
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

        {/* Call to Action */}
        <ImageTextSection
          title="Ready to Apply?"
          description="Don't wait until the last minute! Start your application early to ensure you have enough time to gather all required documents and complete the process smoothly. Our admissions team is here to help you every step of the way."
          image="/student-project-presentations.png"
          imageAlt="Students presenting projects"
          reverse
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-navy hover:bg-navy/90">
              Start Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent"
            >
              Contact Admissions
            </Button>
          </div>
        </ImageTextSection>

        {/* Important Notice */}
        <ScrollReveal direction="fade">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Important Notice</h3>
                  <p className="text-amber-700 leading-relaxed">
                    All documents must be submitted in original form or authenticated copies. Incomplete applications
                    will not be processed. For questions about specific requirements, please contact our Admissions
                    Office at admissions@jru.edu.ph or call (02) 8123-4567.
                  </p>
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
