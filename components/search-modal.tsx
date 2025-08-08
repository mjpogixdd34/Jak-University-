"use client"

import { useState, useEffect } from "react"
import { Search, X, FileText, Users, Calendar, BookOpen } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const searchResults = [
  {
    type: "page",
    title: "Admissions Requirements",
    description: "Complete list of admission requirements and documents",
    icon: FileText,
    url: "/admissions/requirements",
  },
  {
    type: "page",
    title: "Academic Calendar",
    description: "Important dates and academic schedule",
    icon: Calendar,
    url: "/academics/calendar",
  },
  {
    type: "page",
    title: "Student Organizations",
    description: "List of active student clubs and societies",
    icon: Users,
    url: "/campus-life/organizations",
  },
  {
    type: "program",
    title: "BS Information Technology",
    description: "Comprehensive IT program with specializations",
    icon: BookOpen,
    url: "/academics/programs/bs-it",
  },
  {
    type: "program",
    title: "BS Esports",
    description: "First comprehensive esports program in the Philippines",
    icon: BookOpen,
    url: "/academics/programs/bs-esports",
  },
  {
    type: "service",
    title: "AIMS Portal",
    description: "Student information system and academic records",
    icon: FileText,
    url: "/aims-portal",
  },
  {
    type: "page",
    title: "Alumni Services",
    description: "Services and programs for JRU graduates",
    icon: Users,
    url: "/alumni",
  },
  {
    type: "page",
    title: "Campus Virtual Tour",
    description: "Explore our campus facilities online",
    icon: FileText,
    url: "/campus-life/virtual-tour",
  },
]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState(searchResults)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults(searchResults)
    } else {
      const filtered = searchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredResults(filtered)
    }
  }, [searchQuery])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-200">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl animate-in slide-in-from-top-5 duration-300">
          {/* Search Header */}
          <div className="flex items-center p-6 border-b border-mist/20">
            <Search className="h-5 w-5 text-mist mr-3" />
            <input
              type="text"
              placeholder="Search JRU website..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-lg outline-none text-navy placeholder-mist"
              autoFocus
            />
            <button onClick={onClose} className="ml-3 p-2 hover:bg-mist/10 rounded-lg transition-colors">
              <X className="h-5 w-5 text-mist" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredResults.length > 0 ? (
              <div className="p-4 space-y-2">
                {filteredResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    onClick={onClose}
                    className="flex items-center p-3 rounded-lg hover:bg-mist/10 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-navy/20 transition-colors">
                      <result.icon className="h-5 w-5 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy group-hover:text-navy/80 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-mist">{result.description}</p>
                    </div>
                    <div className="text-xs text-mist bg-mist/20 px-2 py-1 rounded-full capitalize">{result.type}</div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-mist/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-mist" />
                </div>
                <h3 className="font-semibold text-navy mb-2">No results found</h3>
                <p className="text-mist text-sm">
                  Try searching for programs, services, or general information about JRU
                </p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="border-t border-mist/20 p-4">
            <h4 className="font-semibold text-navy mb-3 text-sm">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {["Admissions", "Academic Calendar", "Student Portal", "Campus Tour", "Scholarships"].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-3 py-1 bg-mist/20 text-mist text-xs rounded-full hover:bg-navy/10 hover:text-navy transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
