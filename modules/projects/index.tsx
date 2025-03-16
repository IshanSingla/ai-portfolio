"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  // Display only the first 3 projects on the home page
  const featuredProjects = projects.slice(0, 3)

  return (
    <section id="projects" ref={ref} className="py-24 bg-gradient-to-b from-violet-950/20 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300">
            Explore my latest work in AI, backend development, and mobile applications
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-violet-900/20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 mix-blend-overlay z-10" />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-violet-500/30 rounded-lg z-0 group-hover:border-violet-500/50 transition-all duration-300" />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-indigo-500/30 rounded-lg z-0 group-hover:border-indigo-500/50 transition-all duration-300" />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{project.title}</h3>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} className="bg-zinc-800 text-violet-400 border-zinc-700">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-violet-500"
                  >
                    <Link href={`/projects/${project.id}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>

                  {project.githubLink && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-violet-500"
                    >
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  )}

                  {project.liveLink && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white"
                    >
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-900/20"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

