"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const highlights = [
    "AI Development with LangChain and Vector Databases",
    "Backend Development with NestJS and Node.js",
    "Mobile App Development with Flutter and React Native",
    "Microservices Architecture",
    "Cloud Infrastructure on AWS",
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-violet-950/20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <div className="order-2 lg:order-1">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300"
              variants={item}
            >
              About Me
            </motion.h2>

            <motion.p className="text-lg text-gray-300 mb-6" variants={item}>
              I'm a developer with 2 years of experience in backend systems, AI development, and mobile applications. My
              journey started at Chitkara University, where I learned Node.js, TypeScript, Python, and various database
              technologies.
            </motion.p>

            <motion.p className="text-lg text-gray-300 mb-8" variants={item}>
              I've worked with modern AI frameworks and technologies like LangChain and Vector Databases. My experience
              includes developing AI-powered matchmaking platforms, computer vision systems for quality control, and
              management solutions for various industries.
            </motion.p>

            <motion.div className="space-y-3" variants={item}>
              {highlights.map((highlight, index) => (
                <motion.div key={index} className="flex items-start" variants={item} custom={index}>
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="order-1 lg:order-2 relative" variants={item}>
            <div className="relative h-[400px] w-full lg:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 mix-blend-overlay z-10 rounded-lg" />
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Ishan Singla"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-violet-500/30 rounded-lg z-0" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-indigo-500/30 rounded-lg z-0" />

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-white font-medium">2 Years Experience</p>
              <p className="text-white/80 text-sm">Full Stack Development</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

