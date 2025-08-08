import type React from "react"
import ScrollReveal from "./scroll-reveal"

interface ImageTextSectionProps {
  title: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
  children?: React.ReactNode
}

export default function ImageTextSection({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  children,
}: ImageTextSectionProps) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>
      <ScrollReveal direction={reverse ? "right" : "left"} delay={100} className="flex-1">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction={reverse ? "left" : "right"} delay={200} className="flex-1 space-y-8">
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">{title}</h3>
          <p className="text-mist text-lg lg:text-xl leading-relaxed">{description}</p>
        </div>
        {children}
      </ScrollReveal>
    </div>
  )
}
