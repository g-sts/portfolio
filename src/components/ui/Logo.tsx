'use client'

import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.span 
      className="text-3xl font-bold"
      style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-purple))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      G
    </motion.span>
  )
}
