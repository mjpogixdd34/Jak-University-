import { Play, Camera, Map, ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const tourHighlights = [
  {
    title: "Modern Classrooms",
    description: "State-of-the-art learning environments with smart technology",
    image: "/modern-classroom-technology.png",
    icon: Camera,
  },
  {
    title: "Innovation Labs",
    description: "Cutting-edge laboratories for research and experimentation",
    image: "/innovation-lab-equipment.png",
    icon: Camera,
  },
  {
    title: "Campus Grounds",
    description: "Beautiful green spaces and recreational areas",
    image: "/campus-grounds-aerial.png",
    icon: Map,
  },
  {
    title: "Student Centers",
    description: "Vibrant hubs for student activities and collaboration",
    image: "/student-center-activities.png",
    icon: Camera,
  },
]

export default function VirtualTourPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-noir text-ivory relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-almond rounded-full -translate-x-32"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-almond rounded-full translate-x-48"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Campus</h2>
            <p className="text-almond text-xl max-w-4xl mx-auto leading-relaxed">
              Take a virtual tour of our beautiful campus and discover world-class facilities designed for learning and
              growth in 2025
            </p>
          </div>
        </ScrollReveal>

        {/* Main Tour Preview */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="aspect-[16/9]">
                <img
                  src="/campus-aerial-view.png"
                  alt="JRU Campus Aerial View"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-almond rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group">
                  <Play className="h-10 w-10 text-navy ml-1" />
                </button>
              </div>

              {/* Tour Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-2">360° Campus Tour</h3>
                  <p className="text-almond mb-4">Experience JRU like never before with our immersive virtual tour</p>
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="flex items-center space-x-2">
                      <Camera className="h-4 w-4" />
                      <span>HD Quality</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Map className="h-4 w-4" />
                      <span>Interactive Map</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>15 min tour</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tour Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tourHighlights.map((highlight, index) => (
            <ScrollReveal key={highlight.title} direction="up" delay={300 + index * 100}>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-3">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={highlight.image || "/placeholder.svg"}
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-almond rounded-lg flex items-center justify-center">
                        <highlight.icon className="h-5 w-5 text-navy" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-almond transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-mist text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={700}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-almond/20 to-almond/10 backdrop-blur-sm rounded-3xl p-12 border border-almond/30">
              <h3 className="text-3xl font-bold text-almond mb-6">Ready to Visit?</h3>
              <p className="text-mist mb-8 max-w-2xl mx-auto text-lg">
                Schedule an in-person campus visit or continue exploring with our virtual tour
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-almond text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-almond/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>Start Virtual Tour</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-almond text-almond px-8 py-4 rounded-full font-bold text-lg hover:bg-almond hover:text-navy transition-all duration-300 hover:scale-105">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
