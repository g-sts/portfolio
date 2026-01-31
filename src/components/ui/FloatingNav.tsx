'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, ChevronUp } from 'lucide-react'

export function FloatingNav() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {/* Social Links - Sempre visíveis */}
      <div className="flex flex-col gap-3">
        <a
          href="https://www.linkedin.com/in/gabriel-bordoni-page"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-card-bg/90 backdrop-blur-sm border border-card-border rounded-full flex items-center justify-center text-text-primary hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-all duration-300 hover:scale-110 group"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        
        <a
          href="https://github.com/g-sts"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-card-bg/90 backdrop-blur-sm border border-card-border rounded-full flex items-center justify-center text-text-primary hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-all duration-300 hover:scale-110 group"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>

      {/* Scroll to Top - Aparece só quando scrollar */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary-blue/25 animate-fade-in-up"
          title="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
