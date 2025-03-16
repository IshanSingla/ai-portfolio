import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Ishan Singla | Backend Developer & AI Developer",
    template: "%s | Ishan Singla",
  },
  description:
    "Backend Developer & AI Developer with 2 years of experience in Node.js, NestJS, Flutter, and AI technologies",
  keywords: [
    "Backend Developer",
    "AI Developer",
    "Node.js",
    "NestJS",
    "Flutter",
    "React Native",
    "Python",
    "AWS",
    "Azure",
    "LangChain",
    "Vector Databases",
  ],
  authors: [{ name: "Ishan Singla" }],
  creator: "Ishan Singla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ishansingla.io",
    title: "Ishan Singla | Backend Developer & AI Developer",
    description:
      "Backend Developer & AI Developer with 2 years of experience in Node.js, NestJS, Flutter, and AI technologies",
    siteName: "Ishan Singla Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ishan Singla Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Singla | Backend Developer & AI Developer",
    description:
      "Backend Developer & AI Developer with 2 years of experience in Node.js, NestJS, Flutter, and AI technologies",
    images: ["/og-image.jpg"],
    creator: "@ishansingla",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://ishansingla.io"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'