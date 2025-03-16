import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Ishan Singla",
  description: "Get in touch with Ishan Singla for collaboration, project inquiries, or job opportunities",
  keywords: [
    "Contact Ishan Singla",
    "Hire backend developer",
    "Hire AI developer",
    "Hire Flutter developer",
    "Freelance developer",
    "Developer for hire",
  ],
  openGraph: {
    title: "Contact | Ishan Singla",
    description: "Get in touch with Ishan Singla for collaboration, project inquiries, or job opportunities",
    url: "https://ishansingla.io/contact",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-black">{children}</div>
}

