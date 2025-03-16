"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden bg-zinc-900 border-zinc-800 hover:border-violet-500 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=600&width=800"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-gray-400 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="bg-zinc-800 text-cyan-400 border-zinc-700">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline" className="bg-zinc-800 text-cyan-400 border-zinc-700">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="text-violet-400 hover:text-violet-300 flex items-center font-medium"
          >
            View Details
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center font-medium"
            >
              Live Demo
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

