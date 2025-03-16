import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Ishan Singla",
  description: "Read my latest articles on AI development, backend systems, mobile apps, and cloud technologies",
  keywords: [
    "AI development blog",
    "Backend development blog",
    "Mobile app development",
    "Flutter tutorials",
    "NestJS tutorials",
    "Node.js articles",
    "Ishan Singla blog",
  ],
  openGraph: {
    title: "Blog | Ishan Singla",
    description: "Read my latest articles on AI development, backend systems, mobile apps, and cloud technologies",
    url: "https://ishansingla.io/blog",
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-black">{children}</div>
}

