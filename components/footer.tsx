"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AyushPatel2104",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayushpatel2104",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ayush2102004@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-secondary/20 to-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Ayush Patel
            </h3>
            <p className="text-muted-foreground mt-2">Software Developer • AI Enthusiast • Data Analyst</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© 2024 Ayush Patel. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee ☕</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
