"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-12 opacity-0"
        case "down":
          return "-translate-y-12 opacity-0"
        case "left":
          return "translate-x-12 opacity-0"
        case "right":
          return "-translate-x-12 opacity-0"
        case "fade":
          return "opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-y-0 translate-x-0 opacity-100"
  }

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${getTransformClass()} ${className}`}>
      {children}
    </div>
  )
}
