"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayush2102004@gmail.com",
      href: "mailto:ayush2102004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 70410 46518",
      href: "tel:+917041046518",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ayushpatel2104",
      href: "https://www.linkedin.com/in/ayushpatel2104",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "AyushPatel2104",
      href: "https://github.com/AyushPatel2104",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-4">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-muted"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-muted"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-muted resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="glass border-0 p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group cursor-pointer"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground group-hover:text-blue-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
