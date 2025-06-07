"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Eye, X } from "lucide-react"
import Image from "next/image"

// Certificate data
const certificates = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle",
    date: "September 2024",
    description: "Comprehensive certification in Oracle AI technologies and machine learning implementations",
    type: "AI/ML",
    color: "from-red-500 to-orange-500",
    content: `Ayush Patel
Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate
September 02, 2024
304469290OCI24AICFA`,
    credentialId: "304469290OCI24AICFA",
  },
  {
    title: "Oracle Cloud Data Management Foundations",
    issuer: "Oracle",
    date: "August 2023",
    description: "Foundational knowledge of Oracle Cloud Infrastructure services and data management",
    type: "Cloud",
    color: "from-blue-500 to-cyan-500",
    content: `Ayush Patel
Oracle Cloud Data Management 2023 Certified Foundations Associate
August 22, 2023
304469290OCDMF2023`,
    credentialId: "304469290OCDMF2023",
  },
  {
    title: "Oracle Java Developer",
    issuer: "Oracle",
    date: "September 2024",
    description: "Oracle Learning Explorer certification demonstrating Java programming proficiency",
    type: "Programming",
    color: "from-orange-500 to-red-500",
    image: "/images/oracle-java-badge.png",
  },
  {
    title: "Leadership Award",
    issuer: "Dubai Leadership Federation",
    date: "April 2024",
    description: "Recognition for outstanding leadership skills and contribution to the tech community",
    type: "Leadership",
    color: "from-purple-500 to-pink-500",
    image: "/images/leadership-award.jpg",
  },
  {
    title: "Youngest Leader in Training on Coding and Robotics",
    issuer: "Leadership Federation",
    date: "April 2024",
    description: "Recognized as the youngest leader trainer in robotics and programming education",
    type: "Achievement",
    color: "from-green-500 to-teal-500",
    image: "/images/youngest-leader-certificate.jpg",
  },
]

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null)

  const openCertificate = (certificate: (typeof certificates)[0]) => {
    setSelectedCertificate(certificate)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
            Certificates & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition of my achievements and continuous learning in technology and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="bg-black/40 border-gray-800 p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="space-y-4 p-0">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color}`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs bg-black/30 border-gray-700">
                    {cert.type}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>

                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">ID:</span> {cert.credentialId}
                  </p>
                )}

                <Button
                  onClick={() => openCertificate(cert)}
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 group-hover:bg-blue-500 group-hover:text-white transition-colors bg-black/30 border-gray-700"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                onClick={closeCertificate}
                variant="outline"
                size="icon"
                className="absolute -top-12 right-0 z-10 bg-black/50 backdrop-blur-sm border-gray-700 text-white hover:bg-black/70"
              >
                <X className="w-4 h-4" />
              </Button>
              <div className="bg-black/80 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
                      <p className="text-blue-100">
                        {selectedCertificate.issuer} • {selectedCertificate.date}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex justify-center items-center">
                  {selectedCertificate.image ? (
                    <div className="flex justify-center">
                      <Image
                        src={selectedCertificate.image || "/placeholder.svg"}
                        alt={selectedCertificate.title}
                        width={800}
                        height={600}
                        className="max-h-[70vh] w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-gray-800 max-w-lg">
                      <pre className="whitespace-pre-wrap text-lg text-center font-medium text-white">
                        {selectedCertificate.content}
                      </pre>
                    </div>
                  )}
                </div>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{selectedCertificate.description}</p>
                  {selectedCertificate.credentialId && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Credential ID:</span> {selectedCertificate.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
