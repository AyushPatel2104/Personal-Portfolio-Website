"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Award, Users } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Leadership Award",
    description: "Dubai Leadership Federation 2024",
    year: "2024",
  },
  {
    icon: Users,
    title: "Youngest Leader Trainer",
    description: "Robotics and Programming",
    year: "2024",
  },
  {
    icon: GraduationCap,
    title: "B.Tech in ICT",
    description: "Adani University, 6th Semester",
    year: "2022-2026",
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Software Developer, AI Enthusiast, and Data Analyst from Ahmedabad, Gujarat, India.
            Currently pursuing my B.Tech in ICT at Adani University, I'm known for my strong leadership skills and
            technical versatility across full-stack development, data analytics, and artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <Card className="bg-black/40 border-gray-800 p-8">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <span className="text-lg">Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                  <span className="text-lg">B.Tech in ICT, Adani University</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in computer science and a passion for emerging technologies, I specialize in
                  creating innovative solutions that bridge the gap between complex technical challenges and
                  user-friendly applications.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-on-scroll">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-black/40 border-gray-800 p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-500">{achievement.year}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
