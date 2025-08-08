import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

export default function PresidentPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="President's Message"
          subtitle="Leadership Vision for Excellence"
          image="/president-office.png"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <img
                      src="/president-portrait.png"
                      alt="Dr. Maria Santos, University President"
                      className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                    />
                    <h3 className="text-xl font-bold text-navy mb-2">Dr. Maria Santos</h3>
                    <p className="text-mist mb-4">University President</p>
                    <div className="text-sm text-mist space-y-1">
                      <p>Ph.D. Educational Leadership, Harvard University</p>
                      <p>M.A. Public Administration, UP Diliman</p>
                      <p>B.S. Education, Ateneo de Manila</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-mist leading-relaxed mb-6">
                      Dear Students, Faculty, Staff, Alumni, and Friends of Jak Roberto University,
                    </p>

                    <p className="text-mist leading-relaxed mb-6">
                      It is with great pride and excitement that I welcome you to our vibrant academic community. As we
                      navigate the challenges and opportunities of the 21st century, Jak Roberto University remains
                      steadfast in our commitment to providing world-class education that prepares our students for
                      global leadership.
                    </p>

                    <p className="text-mist leading-relaxed mb-6">
                      Our university has always been at the forefront of educational innovation. From pioneering the
                      first comprehensive Esports program in the Philippines to leading research in environmental
                      sustainability, we continue to break new ground in higher education. Our faculty, comprised of
                      distinguished scholars and industry experts, brings real-world experience into the classroom,
                      ensuring that our students receive education that is both academically rigorous and practically
                      relevant.
                    </p>

                    <p className="text-mist leading-relaxed mb-6">
                      The launch of our Outcome-Based Education (OBE) framework represents our commitment to measurable
                      learning outcomes and student success. We believe that education should not only impart knowledge
                      but also develop critical thinking, creativity, and ethical leadership—qualities essential for
                      addressing the complex challenges of our time.
                    </p>

                    <p className="text-mist leading-relaxed mb-6">
                      As we look toward the future, we remain committed to our core values of Excellence, Innovation,
                      and Service. These principles guide us as we expand our international partnerships, enhance our
                      research capabilities, and strengthen our community engagement programs.
                    </p>

                    <p className="text-mist leading-relaxed mb-6">
                      I invite you to explore all that Jak Roberto University has to offer. Whether you are a
                      prospective student, a current member of our community, or a valued alumnus, you are part of our
                      extended family working together to create a better tomorrow.
                    </p>

                    <p className="text-mist leading-relaxed">
                      With warm regards,
                      <br />
                      <strong className="text-navy">Dr. Maria Santos</strong>
                      <br />
                      University President
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
