'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-center">
        <div className="loading-dots flex gap-2 justify-center mb-5">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="text-text-secondary text-sm tracking-wider">Analisando dados...</p>
      </div>
    </div>
  )
}
