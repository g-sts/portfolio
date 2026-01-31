'use client'

import { useState } from 'react'
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react'

const experiences = [
  {
    id: 1,
    period: 'Jan 2026 - Presente',
    title: 'Estagiário em Desenvolvimento de Produtos',
    company: 'AutoMind',
    location: 'Salvador, Bahia',
    type: 'Híbrido',
    workType: 'Estágio',
    description: 'Desenvolvimento de funcionalidades utilizando Python (Django), PostgreSQL e React Native, aplicando regras de negócio e integrações. Tenho contato direto com dados da aplicação ao longo do fluxo do produto, realizando consultas e validações que ajudaram a melhorar o entendimento das regras de negócio e reduzir inconsistências no uso das informações pelo time. Atuo em ambiente Scrum, com uso de Azure DevOps e Docker, contribuindo para uma visão integrada entre backend, dados e aplicação.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'React Native', 'Scrum', 'Azure DevOps', 'Docker', 'SQL', 'Git', 'TypeScript'],
    achievements: [
      'Melhoria no entendimento das regras de negócio através de validações de dados',
      'Redução de inconsistências no uso de informações pelo time',
      'Desenvolvimento de visão integrada entre backend, dados e aplicação',
      'Aplicação prática de metodologias ágeis no ciclo de desenvolvimento'
    ]
  },
  {
    id: 2,
    period: 'Jul 2025 - Dez 2025',
    title: 'Analista de Sistemas',
    company: 'Ia Smarts',
    location: 'Salvador, Bahia',
    type: 'Remoto',
    workType: 'Freelance',
    description: 'Desenvolvi soluções web com foco em performance, usabilidade e SEO. Implementei automações e integrações utilizando n8n, Redis e APIs, incluindo agentes no WhatsApp com memória de conversas. Manipulei e analisei dados gerados pelas aplicações e automações, contribuindo para ajustes de fluxos, melhoria do funcionamento e maior previsibilidade do sistema.',
    technologies: ['n8n', 'Redis', 'APIs', 'WhatsApp', 'Node.js', 'Python', 'SQL', 'Docker', 'Git', 'SEO'],
    achievements: [
      'Implementação de automações complexas com n8n e integrações de APIs',
      'Desenvolvimento de agentes com memória de conversação no WhatsApp',
      'Análise de dados para otimização de fluxos e previsibilidade do sistema',
      'Melhoria contínua de performance e usabilidade das aplicações web'
    ]
  }
]

export function ExperienceTimeline() {
  const [activeExperience, setActiveExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle">Minha trajetória em dados e desenvolvimento</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative px-4 sm:px-0">
            {/* Vertical Line Central - ajustado para mobile */}
            <div className="absolute left-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-blue to-primary-purple"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start mb-12 sm:mb-20 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot - ajustado para mobile */}
                <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card-bg border-4 border-primary-blue rounded-full z-20 cursor-pointer hover:scale-110 transition-transform duration-300"
                     onClick={() => setActiveExperience(activeExperience === exp.id ? null : exp.id)}>
                </div>

                {/* Content Card - sempre à direita em mobile, alternado em desktop */}
                <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                  <div 
                    className={`bg-card-bg border border-card-border rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:border-primary-blue hover:shadow-lg hover:shadow-primary-blue/10 ${
                      activeExperience === exp.id ? 'border-primary-blue shadow-lg shadow-primary-blue/10' : ''
                    }`}
                    onClick={() => setActiveExperience(activeExperience === exp.id ? null : exp.id)}
                  >
                    {/* Date Badge */}
                    <div className="flex flex-wrap items-center gap-2 text-text-muted text-sm mb-4 justify-center sm:justify-start">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Header */}
                    <div className="text-center sm:text-left mb-4">
                      <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                        <Briefcase className="w-5 h-5 text-primary-blue" />
                        <span className="text-sm font-medium text-primary-blue">{exp.type}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-base sm:text-lg text-primary-blue font-semibold">
                        {exp.company}
                      </h4>
                      <div className="flex items-center gap-2 justify-center sm:justify-start mt-2">
                        <span className="text-xs text-text-muted">{exp.workType}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6 text-center sm:text-left text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {/* Expandable Content */}
                    {activeExperience === exp.id && (
                      <div className="space-y-6 animate-fade-in-up">
                        {/* Achievements */}
                        <div className="mb-6 text-left">
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="w-5 h-5 text-primary-blue" />
                            <h4 className="font-semibold text-text-primary">Principais Conquistas</h4>
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-text-secondary text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="text-center sm:text-left mb-6">
                          <h4 className="font-semibold text-text-primary mb-3">Tecnologias</h4>
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-xs font-medium border border-primary-blue/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Click to expand hint */}
                    {activeExperience !== exp.id && (
                      <div className="text-center mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 border border-primary-blue/30 rounded-full hover:bg-primary-blue/20 transition-colors cursor-pointer">
                          <span className="text-sm font-medium text-primary-blue">Clique para ver detalhes</span>
                          <svg className="w-4 h-4 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
