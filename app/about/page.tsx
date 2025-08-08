import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import { Users, Award, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="About Jak Roberto University"
          subtitle="Excellence • Innovation • Service"
          image="/university-campus-aerial.png"
        />

        {/* University Profile */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in-0 slide-in-from-left-10 duration-1000">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">University Profile</h2>
                <p className="text-mist mb-6 leading-relaxed">
                  Founded in 1952, Jak Roberto University has been at the forefront of Philippine higher education for
                  over seven decades. We are committed to developing globally competitive graduates who embody our core
                  values of excellence, innovation, and service to humanity.
                </p>
                <p className="text-mist mb-6 leading-relaxed">
                  Our institution offers comprehensive programs across multiple disciplines, from cutting-edge
                  technology and esports to environmental science and multimedia arts. With state-of-the-art facilities
                  and world-class faculty, we prepare students for leadership roles in an increasingly complex global
                  landscape.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-navy">15,000+</div>
                    <div className="text-mist">Students</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-navy">500+</div>
                    <div className="text-mist">Faculty</div>
                  </div>
                </div>
              </div>
              <div className="animate-in fade-in-0 slide-in-from-right-10 duration-1000">
                <img
                  src="/university-main-building.png"
                  alt="JRU Main Building"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-navy text-ivory">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                These fundamental principles guide everything we do at Jak Roberto University
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Pursuing the highest standards in education and research",
                },
                { icon: Award, title: "Innovation", description: "Embracing new ideas and cutting-edge technologies" },
                { icon: Heart, title: "Service", description: "Commitment to community and social responsibility" },
                { icon: Users, title: "Integrity", description: "Upholding ethical principles in all our endeavors" },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-almond rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-almond">{value.title}</h3>
                  <p className="text-mist leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Awards & Recognition</h2>
              <p className="text-mist text-lg">
                Our commitment to excellence has been recognized nationally and internationally
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2024",
                  title: "Outstanding University in STEM Education",
                  organization: "Commission on Higher Education",
                  description:
                    "Recognized for innovative programs in Science, Technology, Engineering, and Mathematics",
                },
                {
                  year: "2023",
                  title: "Best Esports Education Program",
                  organization: "Philippine Esports Organization",
                  description: "First university to receive recognition for comprehensive esports curriculum",
                },
                {
                  year: "2023",
                  title: "Sustainability Excellence Award",
                  organization: "UN Global Compact Philippines",
                  description: "For outstanding commitment to Sustainable Development Goals",
                },
              ].map((award, index) => (
                <div
                  key={award.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-almond bg-navy px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    {award.year}
                  </div>
                  <h3 className="font-bold text-navy mb-2 text-lg">{award.title}</h3>
                  <p className="text-mist font-medium mb-3">{award.organization}</p>
                  <p className="text-mist text-sm leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
