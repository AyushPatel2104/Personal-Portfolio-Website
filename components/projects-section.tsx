"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react"

const projects = [
  {
    title: "BookMyGame Website",
    description:
      "A comprehensive sports booking platform built with React and Node.js, featuring real-time availability, user authentication, and payment integration.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://bookmygame.vercel.app/",
    githubUrl: "#",
    featured: true,
    icon: Globe,
  },
  {
    title: "Hospital Management System",
    description:
      "Advanced C++ application with OOP principles, featuring patient management, appointment scheduling, and secure file encryption for medical records.",
    tech: ["C++", "OOP", "File Encryption", "Data Structures"],
    githubUrl: "#",
    featured: true,
    icon: Database,
  },
  {
    title: "Online Exam Portal",
    description:
      "Full-stack web application for conducting online examinations with features like timer, auto-submission, and result generation.",
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
    githubUrl: "#",
    featured: false,
    icon: Code,
  },
  {
    title: "Hotel Management Console App",
    description:
      "CLI-based Java application for hotel operations including room booking, customer management, and billing system.",
    tech: ["Java", "CLI", "File I/O", "OOP"],
    githubUrl: "#",
    featured: false,
    icon: Code,
  },
  {
    title: "Student Performance Dashboard",
    description:
      "Interactive Power BI dashboard analyzing student performance metrics with SQL database integration for comprehensive reporting.",
    tech: ["Power BI", "SQL", "Data Analytics", "Visualization"],
    githubUrl: "#",
    featured: false,
    icon: Database,
  },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my technical projects demonstrating expertise in full-stack development, data analytics, and
            software engineering
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className="rounded-full"
            >
              Featured
            </Button>
            <Button
              variant={filter === "other" ? "default" : "outline"}
              onClick={() => setFilter("other")}
              className="rounded-full"
            >
              Other
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="glass border-0 overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-4">
                  {project.demoUrl && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
