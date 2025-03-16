import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Ishan Singla",
  description: "Explore my projects in AI development, backend systems, mobile apps, and cloud technologies",
  keywords: [
    "AI projects",
    "Backend projects",
    "Mobile app development",
    "Flutter projects",
    "NestJS projects",
    "Node.js projects",
    "Ishan Singla portfolio",
  ],
  openGraph: {
    title: "Projects | Ishan Singla",
    description: "Explore my projects in AI development, backend systems, mobile apps, and cloud technologies",
    url: "https://ishansingla.io/projects",
    type: "website",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-black">{children}</div>
}

