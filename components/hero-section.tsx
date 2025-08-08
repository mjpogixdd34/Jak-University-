"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const heroSlides = [
  {
    id: 1,
    title: "BS in Information Technology",
    subtitle: "Shape the Future of Technology",
    description:
      "Master cutting-edge programming, cybersecurity, and digital innovation in our state-of-the-art facilities.",
    image: "/modern-computer-lab.png",
    cta: "Explore IT Program",
    link: "/academics/programs/bs-it",
  },
  {
    id: 2,
    title: "BS in Esports",
    subtitle: "Pioneer the Gaming Industry",
    description:
      "Join the fastest-growing industry with comprehensive training in competitive gaming, management, and technology.",
    image: "/placeholder-w4w2i.png",
    cta: "Join Esports Program",
    link: "/academics/programs/bs-esports",
  },
  {
    id: 3,
    title: "BS in Environmental Science",
    subtitle: "Protect Our Planet's Future",
    description:
      "Lead sustainability initiatives and environmental conservation through scientific research and innovation.",
    image: "/environmental-research.png",
    cta: "Discover Environmental Science",
    link: "/academics/programs/bs-environmental-science",
  },
  {
    id: 4,
    title: "BA in Multimedia Arts",
    subtitle: "Create Visual Masterpieces",
    description: "Develop your artistic vision through digital design, animation, and multimedia production.",
    image: "/creative-studio.png",
    cta: "Explore Multimedia Arts",
    link: "/academics/programs/ba-multimedia-arts",
  },
  {
    id: 5,
    title: "BS in Customs Administration",
    subtitle: "Master International Trade",
    description: "Navigate global commerce and customs regulations in our comprehensive trade program.",
    image: "/placeholder-a9f37.png",
    cta: "Learn Customs Administration",
    link: "/academics/programs/bs-customs-administration",
  },
  {
    id: 6,
    title: "BS in International Travel & Tourism",
    subtitle: "Explore the World of Hospitality",
    description: "Build a career in the dynamic tourism industry with hands-on experience and global perspectives.",
    image: "/luxury-hotel-hospitality-training.png",
    cta: "Discover Tourism Program",
    link: "/academics/programs/bs-tourism",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen mt-16 lg:mt-20 overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-navy/60" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-ivory animate-in fade-in-0 slide-in-from-left-10 duration-1000">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-almond mb-6 font-light">{slide.subtitle}</h2>
                <p className="text-lg md:text-xl mb-8 text-mist leading-relaxed max-w-2xl">{slide.description}</p>
                <Link href={slide.link}>
                  <Button
                    size="lg"
                    className="bg-almond text-navy hover:bg-almond/90 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory hover:text-almond hover:bg-navy/50 w-12 h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory hover:text-almond hover:bg-navy/50 w-12 h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-almond scale-125" : "bg-mist/50 hover:bg-mist"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
