"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"
import ImageTextSection from "./image-text-section"

const newsItems = [
  {
    id: 1,
    title: "JRU Dominates NCAA Volleyball Championship",
    excerpt:
      "Our volleyball team secures another victory in the NCAA tournament, showcasing exceptional teamwork and skill.",
    image: "/volleyball-team-victory.png",
    date: "2025-01-15",
    location: "Sports Complex",
    category: "Sports",
  },
  {
    id: 2,
    title: "Community Outreach Program Reaches 1000 Families",
    excerpt:
      "Students and faculty collaborate to provide essential services to underserved communities in Metro Manila.",
    image: "/students-community-help.png",
    date: "2025-01-12",
    location: "Various Communities",
    category: "Community Service",
  },
  {
    id: 3,
    title: "SDG Publication Launch: Sustainable Future",
    excerpt:
      "University publishes comprehensive research on sustainable development goals and environmental conservation.",
    image: "/placeholder-0jnpq.png",
    date: "2025-01-10",
    location: "Main Auditorium",
    category: "Research",
  },
  {
    id: 4,
    title: "Student Innovation Showcase 2025",
    excerpt: "Outstanding student projects in technology, arts, and sciences displayed at annual innovation fair.",
    image: "/student-project-presentations.png",
    date: "2025-01-08",
    location: "Innovation Hub",
    category: "Innovation",
  },
  {
    id: 5,
    title: "International Exchange Program Expansion",
    excerpt: "New partnerships with universities in Asia and Europe offer more opportunities for global education.",
    image: "/international-students-collaboration.png",
    date: "2025-01-05",
    location: "International Office",
    category: "International",
  },
]

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= newsItems.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, newsItems.length - itemsPerView) : prev - 1))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-white to-almond/10">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Campus News & Events</h2>
            <p className="text-mist text-xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest happenings at JRU throughout 2025
            </p>
          </div>
        </ScrollReveal>

        {/* Featured News Section */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mb-16">
            <ImageTextSection
              title="Latest Highlight"
              description={newsItems[0].excerpt}
              image={newsItems[0].image}
              imageAlt={newsItems[0].title}
              reverse={false}
            >
              <div className="flex items-center space-x-6 text-sm text-mist mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-navy" />
                  <span>{new Date(newsItems[0].date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-navy" />
                  <span>{newsItems[0].location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-navy text-ivory px-4 py-2 rounded-full text-sm font-semibold">
                  {newsItems[0].category}
                </span>
                <button className="text-navy font-semibold hover:text-navy/80 transition-colors">
                  Read Full Story →
                </button>
              </div>
            </ImageTextSection>
          </div>
        </ScrollReveal>

        {/* Navigation Controls */}
        <ScrollReveal direction="fade" delay={300}>
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold text-navy">More Stories</h3>
            <div className="hidden md:flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent rounded-full w-12 h-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent rounded-full w-12 h-12"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* News Cards Carousel */}
        <ScrollReveal direction="up" delay={400}>
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {newsItems.slice(1).map((item, index) => (
                <div key={item.id} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/90 backdrop-blur-sm text-navy px-4 py-2 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="font-bold text-navy mb-4 text-xl leading-tight group-hover:text-navy/80 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-mist mb-6 text-sm leading-relaxed">{item.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-mist">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-navy" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-navy" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center space-x-3 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="border-navy text-navy hover:bg-navy hover:text-ivory bg-transparent rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
