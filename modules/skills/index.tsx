"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Cloud, Server, Cpu, Layers } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const skills = [
    {
      category: "Languages & API Design",
      icon: <Code className="w-6 h-6" />,
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Bash",
        "RESTful API Design",
        "Microservices",
        "Event-driven Architecture",
      ],
    },
    {
      category: "Databases & ORMs",
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Mongoose", "TypeORM", "Sequelize"],
    },
    {
      category: "Backend Frameworks",
      icon: <Layers className="w-6 h-6" />,
      items: ["Node.js", "Express.js", "NestJS", "Django", "FastAPI", "WebSocket", "Kafka"],
    },
    {
      category: "Frontend & Mobile",
      icon: <Cpu className="w-6 h-6" />,
      items: ["Next.js", "React", "React Native", "Flutter", "IoT Development", "Responsive Design"],
    },
    {
      category: "DevOps & Cloud",
      icon: <Server className="w-6 h-6" />,
      items: ["AWS", "Azure", "GitHub Actions", "Azure DevOps", "Jenkins", "Docker", "Kubernetes", "Helm"],
    },
    {
      category: "AI & Machine Learning",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        "LangChain",
        "Vector Databases",
        "AWS Bedrock",
        "Llama Models",
        "Computer Vision",
        "TensorFlow",
        "OpenCV",
      ],
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300">
            My skills across backend development, AI, cloud architecture, and mobile development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={item}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20 text-violet-400 mr-4 group-hover:from-violet-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skill.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.5 + itemIndex * 0.05 }}
                    className="flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

