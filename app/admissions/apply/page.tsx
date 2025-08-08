import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ApplicationForm from "@/components/application-form"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Online Application"
          subtitle="Take the first step towards your future"
          image="/students-studying-library.png"
        />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  )
}
