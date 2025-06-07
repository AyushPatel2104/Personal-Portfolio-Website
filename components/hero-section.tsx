"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Sphere
          key={i}
          position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]}
          scale={Math.random() * 0.5 + 0.1}
        >
          <meshStandardMaterial color={new THREE.Color().setHSL(Math.random(), 0.7, 0.5)} transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  )
}

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <FloatingElements />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Hi, I'm Ayush Patel
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
                Driven by Code, Fueled by Passion
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Software Developer • AI Enthusiast • Data Analyst
              </p>
            </div>
            <div className="pt-4">
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="glow-effect bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Explore Portfolio
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Background Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-all duration-1000 animate-pulse"></div>

              {/* Secondary Glow Ring */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-all duration-700 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Main Photo Container */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-blue-500/50">
                  <Image
                    src="/images/ayush-profile.jpg"
                    alt="Ayush Patel - Software Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Elements Around Photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce opacity-80"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse opacity-60"></div>
                <div
                  className="absolute top-1/4 -right-8 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-60"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown
          className="w-8 h-8 text-muted-foreground animate-bounce cursor-pointer hover:text-blue-400 transition-colors"
          onClick={scrollToAbout}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/80 z-5"></div>
    </section>
  )
}
