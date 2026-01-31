'use client'

import { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Code, Database, Settings, BarChart3 } from 'lucide-react'

const toolCategories = [
  {
    title: 'Análise de Dados',
    icon: BarChart3,
    tools: [
      { name: 'Python', description: 'Pandas, NumPy, Scikit-learn' },
      { name: 'SQL', description: 'PostgreSQL, MySQL, SQLite' },
      { name: 'Power BI', description: 'Dashboards, DAX, Data Modeling' }
    ]
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    tools: [
      { name: 'PostgreSQL', description: 'Advanced Queries, Optimization' },
      { name: 'MySQL', description: 'Performance Tuning' },
      { name: 'Redis', description: 'Caching, Session Storage' }
    ]
  },
  {
    title: 'Infraestrutura',
    icon: Settings,
    tools: [
      { name: 'Docker', description: 'Containers, Docker Compose' },
      { name: 'n8n', description: 'Workflows, Automations' },
      { name: 'Azure', description: 'DevOps, Cloud Services' }
    ]
  },
  {
    title: 'Desenvolvimento',
    icon: Code,
    tools: [
      { name: 'Django', description: 'REST APIs, ORM, Admin' },
      { name: 'React Native', description: 'Mobile Apps, Navigation' },
      { name: 'Git', description: 'Version Control, CI/CD' }
    ]
  }
]

export function ToolsHorizontal() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    )
  }

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 400
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    container.addEventListener('scroll', checkScroll)
    checkScroll()

    return () => container.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-dark-bg to-dark-secondary">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Ferramentas e Tecnologias</h2>
          <p className="section-subtitle">Navegue horizontalmente para explorar meu stack técnico</p>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-card-bg/90 backdrop-blur-xs border border-card-border rounded-full flex items-center justify-center text-text-primary hover:bg-primary-blue/10 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-card-bg/90 backdrop-blur-xs border border-card-border rounded-full flex items-center justify-center text-text-primary hover:bg-primary-blue/10 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {toolCategories.map((category) => (
              <div
                key={category.title}
                className="flex-shrink-0 w-80 bg-card-bg border border-card-border rounded-xl p-8"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {category.title}
                  </h3>
                </div>

                {/* Tools List */}
                <div className="space-y-6">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="group p-4 bg-dark-secondary/50 rounded-lg hover:bg-primary-blue/10 transition-all duration-300">
                      <h4 className="font-semibold text-text-primary group-hover:text-primary-blue transition-colors duration-300 mb-2">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-text-muted">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {toolCategories.map((_, index) => (
              <div
                key={index}
                className="w-16 h-1 bg-primary-blue/20 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-primary-blue rounded-full transition-all duration-300"
                  style={{
                    width: index === 0 ? '100%' : '0%'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-text-muted text-sm">
            Use as setas ou arraste para navegar →
          </p>
        </div>
      </div>
    </section>
  )
}
