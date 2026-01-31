'use client'

import { Search, Brain, Target, GraduationCap } from 'lucide-react'

const mindsetItems = [
  {
    icon: Search,
    title: 'Curiosidade Investigativa',
    description: 'Questionar o óbvio, explorar os detalhes e entender o "porquê" por trás dos números.'
  },
  {
    icon: Brain,
    title: 'Pensamento Crítico',
    description: 'Analisar informações com rigor, identificar vieses e buscar evidências sólidas.'
  },
  {
    icon: Target,
    title: 'Foco em Impacto',
    description: 'Transformar insights em ações concretas que geram valor real para o negócio.'
  },
  {
    icon: GraduationCap,
    title: 'Aprendizado Contínuo',
    description: 'Estudar constantemente, experimentar com dados reais e evoluir metodologias.'
  }
]

export function Mindset() {
  return (
    <section id="mindset" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Mentalidade Analítica</h2>
          <p className="section-subtitle">Os princípios que guiam minha abordagem</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {mindsetItems.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 sm:p-8 transition-all duration-300 group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-blue/10 rounded-full flex items-center justify-center text-xl sm:text-2xl group-hover:bg-primary-blue/20 group-hover:scale-105 transition-all duration-300">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-text-primary">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
