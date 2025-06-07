"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "C++", level: 80 },
      { name: "C", level: 75 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Tableau", level: 75 },
      { name: "Power BI", level: 80 },
      { name: "Advanced Excel", level: 85 },
    ],
  },
  {
    title: "Concepts & Domains",
    skills: [
      { name: "AI/ML", level: 85 },
      { name: "Data Analytics", level: 88 },
      { name: "Web Development", level: 90 },
      { name: "OOP", level: 85 },
      { name: "Cybersecurity", level: 70 },
      { name: "Software Engineering", level: 80 },
    ],
  },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass border-0 p-6 hover:scale-105 transition-all duration-300">
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold text-center mb-6 text-blue-400">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={isVisible ? skill.level : 0} className="h-2 bg-secondary" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
