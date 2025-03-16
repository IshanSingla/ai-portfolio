"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import type { HeroProps } from "../hero.types"

export const HeroContent = ({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: HeroProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <div className="container relative px-4 py-32 mx-auto text-center sm:px-6 lg:px-8 lg:py-40">
      <motion.div className="max-w-3xl mx-auto" variants={container} initial="hidden" animate="show">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          variants={item}
        >
          <span className="block">Ishan Singla</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-yellow-300 mt-2">
            {title}
          </span>
        </motion.h1>

        <motion.p className="mt-6 text-xl text-white/90" variants={item}>
          {subtitle}
        </motion.p>

        <motion.div className="flex justify-center mt-8 space-x-4" variants={item}>
          <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-white/90">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
          </Button>
        </motion.div>

        <motion.div className="flex justify-center mt-8 space-x-6" variants={item}>
          <Link href="https://github.com/IshanSingla" className="text-white hover:text-white/80">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/itzishansingla/" className="text-white hover:text-white/80">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" className="text-white hover:text-white/80">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

