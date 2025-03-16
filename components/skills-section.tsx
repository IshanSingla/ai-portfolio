"use client"

import { motion } from "framer-motion"
import { Cloud, Code, Database, Layers } from "lucide-react"

const skills = [
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

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-violet-950">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My Expertise</h2>
          <p className="mt-4 text-lg text-gray-300">
            Specialized skills across AI, DevOps, MLOps, and cloud technologies
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-violet-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 text-white">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

