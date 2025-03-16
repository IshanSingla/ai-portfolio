import type { ReactNode } from "react"

export interface Skill {
  category: string
  icon: ReactNode
  items: string[]
}

export interface SkillsSectionProps {
  title: string
  subtitle: string
  skills: Skill[]
}

