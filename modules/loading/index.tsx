"use client"

import { motion } from "framer-motion"
import { LOADING_DEFAULTS, LOADING_SIZES, LOADING_COLORS } from "./loading.constants"
import type { LoadingProps } from "./loading.types"

export default function Loading({
  size = LOADING_DEFAULTS.size,
  color = LOADING_DEFAULTS.color,
  text = LOADING_DEFAULTS.text,
}: LoadingProps = {}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`${LOADING_SIZES[size]} ${LOADING_COLORS[color]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="60"
            strokeDashoffset="60"
            pathLength="60"
          />
        </svg>
      </motion.div>
      {text && <p className="mt-2 text-sm font-medium">{text}</p>}
    </div>
  )
}

