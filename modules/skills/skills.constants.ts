import { Code, Database, Layers, Cloud } from "lucide-react"
import type { Skill } from "./skills.types"

export const SKILLS_DEFAULTS = {
  title: "My Expertise",
  subtitle: "Specialized skills across backend development, DevOps, and cloud technologies",
}

export const DEFAULT_SKILLS: Skill[] = [
  {
    category: "Languages",
    icon: <Code className="w-6 h-6" />,
    items: ["Node.js", "Python", "Java", "Go", "JavaScript", "TypeScript"],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Redis"],
  },
  {
    category: "Frameworks",
    icon: <Layers className="w-6 h-6" />,
    items: ["Spring Boot", "Next.js", "FastAPI", "Express.js", "React"],
  },
  {
    category: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Jenkins", "Grafana"],
  },
]

