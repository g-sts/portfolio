'use client'

import { ExternalLink, Github, BarChart3 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Web Scraping Wikipédia',
    subtitle: 'Top 10 Diretores por Bilheteria',
    description: 'Projeto de web scraping que coleta, limpa e analisa dados de bilheteria de filmes da Wikipedia para identificar os diretores mais lucrativos da história.',
    image: null,
    tech: ['Python', 'Pandas', 'Requests', 'Matplotlib', 'Jupyter'],
    features: [
      'Web scraping com requests e cabeçalhos personalizados',
      'ETL completo com tratamento de dados financeiros',
      'Análise estatística e agregação por diretor',
      'Visualização com gráfico de barras customizado'
    ],
    links: {
      github: 'https://github.com/g-sts/web-scraping-wikipedia',
      demo: null
    },
    category: 'data-analysis',
    icon: BarChart3
  }
]

const categoryColors = {
  'data-analysis': 'from-blue-500 to-purple-500',
  'web-dev': 'from-green-500 to-teal-500',
  'database': 'from-orange-500 to-red-500'
}

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-bg to-dark-secondary">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">Código que faz diferença</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-bg/50 backdrop-blur-xs border border-primary-blue/20 rounded-xl p-8 mb-8 hover:border-primary-blue/40 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row gap-8 mb-6">
                {/* Project Icon - ícone de gráfico de barras */}
                <div className="lg:w-1/3">
                  <div className="relative overflow-hidden rounded-lg bg-dark-secondary/50 h-48 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-blue/20 to-primary-purple-20 rounded-2xl flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-primary-blue" />
                    </div>
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:w-2/3">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-primary-blue font-medium mb-4">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors]} flex items-center justify-center flex-shrink-0`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-xs font-medium border border-primary-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1"
                    >
                      <Github className="w-4 h-4" />
                      Ver Código
                    </a>
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-primary-blue/30 text-text-primary rounded-lg font-medium transition-all duration-300 hover:bg-primary-blue/10 hover:border-primary-blue hover:-translate-y-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-primary-blue/10 pt-6">
                <h4 className="font-semibold text-text-primary mb-4">Recursos Principais</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-full">
            <BarChart3 className="w-5 h-5 text-primary-blue" />
            <span className="text-primary-blue font-medium">Mais projetos em breve...</span>
          </div>
        </div>
      </div>
    </section>
  )
}
