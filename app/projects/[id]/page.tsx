import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"
import type { Metadata } from "next"
import { ProjectStructuredData } from "@/components/structured-data"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    }
  }

  return {
    title: `${project.title} | Ishan Singla`,
    description: project.description,
    keywords: [...project.techStack, project.title, "Ishan Singla", "portfolio", "project"],
    openGraph: {
      title: `${project.title} | Ishan Singla`,
      description: project.description,
      url: `https://ishansingla.io/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: project.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Structured Data for SEO */}
      <ProjectStructuredData project={project} />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-white hover:bg-zinc-900">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">{project.title}</h1>
            <div className="flex space-x-4">
              {project.githubLink && (
                <Button asChild variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              )}
              {project.liveLink && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600"
                >
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} className="bg-zinc-800 text-cyan-400 border-zinc-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">Project Description</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">{project.description}</p>
              {project.longDescription && (
                <div className="mt-4 text-gray-300">
                  {project.longDescription.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Screenshots</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

