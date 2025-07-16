"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingTransition() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0d1b2a]"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-3"
      >
        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          ∫
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          MathGrit
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
