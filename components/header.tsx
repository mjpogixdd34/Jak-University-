"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import SearchModal from "@/components/search-modal"

const navigationItems = [
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "University Profile", href: "/about" },
      { name: "President's Message", href: "/about/president" },
      { name: "Officials", href: "/about/officials" },
      { name: "Awards", href: "/about/awards" },
      { name: "Core Philosophy", href: "/about/philosophy" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    submenu: [
      { name: "Programs", href: "/admissions" },
      { name: "Apply Now", href: "/admissions/apply" },
      { name: "Requirements", href: "/admissions/requirements" },
      { name: "Scholarships", href: "/admissions/scholarships" },
      { name: "AIMS Portal", href: "/aims-portal" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    submenu: [
      { name: "Academic Calendar", href: "/academics" },
      { name: "Colleges", href: "/academics/colleges" },
      { name: "Programs", href: "/academics/programs" },
      { name: "Research Centers", href: "/academics/research" },
      { name: "Innovation Hubs", href: "/academics/innovation" },
    ],
  },
  {
    name: "Departments",
    href: "/departments",
    submenu: [
      { name: "Registrar", href: "/departments/registrar" },
      { name: "Student Affairs", href: "/departments/student-affairs" },
      { name: "Human Resources", href: "/departments/hr" },
      { name: "ICT Services", href: "/departments/ict" },
      { name: "Counseling", href: "/departments/counseling" },
    ],
  },
  {
    name: "Campus Life",
    href: "/campus-life",
    submenu: [
      { name: "Student Organizations", href: "/campus-life/organizations" },
      { name: "Sports & Recreation", href: "/campus-life/sports" },
      { name: "Cultural Affairs", href: "/campus-life/cultural" },
      { name: "Virtual Tour", href: "/campus-life/virtual-tour" },
    ],
  },
  {
    name: "Students",
    href: "/students",
  },
  {
    name: "Parents",
    href: "/parents",
  },
  {
    name: "Alumni",
    href: "/alumni",
    submenu: [
      { name: "Alumni Services", href: "/alumni" },
      { name: "E-Card", href: "/alumni/e-card" },
      { name: "A-LEAP Program", href: "/alumni/a-leap" },
      { name: "Events", href: "/alumni/events" },
      { name: "Yearbook", href: "/alumni/yearbook" },
    ],
  },
  {
    name: "Sustainability",
    href: "/sustainability",
  },
  {
    name: "Publications",
    href: "/publications",
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-navy"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="JAK University Logo" className="w-12 h-12 lg:w-16 lg:h-16" />
              <div className="hidden sm:block">
                <h1 className="text-ivory font-bold text-lg lg:text-xl">Jak Roberto University</h1>
                <p className="text-mist text-xs lg:text-sm">Excellence • Innovation • Service</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-ivory hover:text-almond transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>

                  {item.submenu && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-ivory shadow-xl rounded-lg border border-mist/20 py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-noir hover:bg-almond/50 transition-colors duration-200 text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-ivory hover:text-almond"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-ivory hover:text-almond"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-mist/20 animate-in slide-in-from-top-5 duration-200">
              <nav className="py-4 space-y-2 max-h-96 overflow-y-auto">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-ivory hover:text-almond transition-colors duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-6 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-1 text-mist hover:text-almond transition-colors duration-200 text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
