"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-violet-500/30 border-t-violet-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <p className="mt-4 text-gray-400">Loading content...</p>
    </div>
  )
}

