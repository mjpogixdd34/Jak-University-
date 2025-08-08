import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"
import ParentPortal from "@/components/parent-portal"
import ParentResources from "@/components/parent-resources"

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <PageBanner
          title="Parents Portal"
          subtitle="Supporting Your Child's Educational Journey"
          image="/parents-student-support.png"
        />
        <ParentPortal />
        <ParentResources />
      </main>
      <Footer />
    </div>
  )
}
