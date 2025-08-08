import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import StudentPortals from "@/components/student-portals"
import StudentServices from "@/components/student-services"

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Student Portal"
          subtitle="Your Gateway to Academic Success"
          image="/students-using-laptops.png"
        />
        <StudentPortals />
        <StudentServices />
      </main>
      <Footer />
    </div>
  )
}
