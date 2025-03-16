"use client"

import { useParallaxEffect } from "../hero.hooks"
import { motion } from "framer-motion"

export const HeroBackground = () => {
  const { offset } = useParallaxEffect()

  return (
    <>
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(120, 0, 255, 0.8) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 0, 150, 0.8) 0%, transparent 50%)",
          y: offset,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/50"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              y: {
                duration: Math.random() * 10 + 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              opacity: {
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                yoyo: true,
              },
            }}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>
    </>
  )
}

