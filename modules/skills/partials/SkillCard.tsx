"use client"

import { motion } from "framer-motion"
import type { Skill } from "../skills.types"

interface SkillCardProps {
  skill: Skill
  index: number
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-violet-500 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 mr-3 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 text-white">{skill.icon}</div>
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
  )
}

