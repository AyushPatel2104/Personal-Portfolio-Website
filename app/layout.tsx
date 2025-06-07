import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayush Patel - Software Developer & AI Enthusiast",
  description:
    "Portfolio of Ayush Shaileshbhai Patel - Passionate Software Developer, AI Enthusiast, and Data Analyst from Ahmedabad, Gujarat, India.",
  keywords: "Ayush Patel, Software Developer, AI Enthusiast, Data Analyst, Full Stack Developer, React, Python, Java",
  authors: [{ name: "Ayush Patel" }],
  openGraph: {
    title: "Ayush Patel - Software Developer & AI Enthusiast",
    description: "Driven by Code, Fueled by Passion",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="ayush-portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
