"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/documents/AYUSH_RESUME.pdf"
    link.download = "Ayush_Patel_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Ayush Patel
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:scale-105 transform"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={downloadResume}
                variant="outline"
                size="sm"
                className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          {/* Theme Toggle Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              onClick={() => setTheme("dark")}
              variant="outline"
              size="icon"
              className="rounded-full bg-blue-900/30 border-blue-700/50 hover:bg-blue-800/50"
              title="Dark Theme"
            >
              <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
              <span className="sr-only">Dark Theme</span>
            </Button>
            <Button
              onClick={() => setTheme("light")}
              variant="outline"
              size="icon"
              className="rounded-full bg-yellow-500/20 border-yellow-400/30 hover:bg-yellow-500/30"
              title="Light Theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
              <span className="sr-only">Light Theme</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => setTheme("dark")}
              variant="outline"
              size="icon"
              className="rounded-full bg-blue-900/30 border-blue-700/50 hover:bg-blue-800/50"
              title="Dark Theme"
            >
              <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
            </Button>
            <Button
              onClick={() => setTheme("light")}
              variant="outline"
              size="icon"
              className="rounded-full bg-yellow-500/20 border-yellow-400/30 hover:bg-yellow-500/30"
              title="Light Theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={downloadResume}
              variant="outline"
              size="sm"
              className="mt-4 mx-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
