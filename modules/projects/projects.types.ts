export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  techStack: string[]
  githubLink?: string
  liveLink?: string
  screenshots?: string[]
}

export interface ProjectsSectionProps {
  title: string
  subtitle: string
  projects: Project[]
  limit?: number
  showViewAll?: boolean
}

