import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jak Roberto University - Excellence • Innovation • Service",
  description:
    "Leading university in the Philippines offering world-class education in Information Technology, Esports, Environmental Science, Multimedia Arts, and more.",
  keywords:
    "university, education, Philippines, IT, esports, environmental science, multimedia arts, customs administration, tourism",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
