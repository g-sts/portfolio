import { Database, HelpCircle, Lightbulb, Network } from 'lucide-react'

const philosophyItems = [
  {
    icon: Database,
    title: 'Dados Reais',
    description: 'Trabalho com informações que não vêm "prontas". Dados que exigem entendimento do contexto, investigação e tratamento antes de qualquer análise.'
  },
  {
    icon: HelpCircle,
    title: 'Perguntas Primeiro',
    description: 'Contexto antes da ferramenta. Entendo o problema e as perguntas certas antes de sair buscando respostas nos dados.'
  },
  {
    icon: Lightbulb,
    title: 'Decisão Antes do Dashboard',
    description: 'O objetivo não é criar visualizações bonitas, mas gerar insights que levem a ações concretas e decisões informadas.'
  },
  {
    icon: Network,
    title: 'Visão Integrada',
    description: 'Conexo desenvolvimento de produtos, backend e análise de dados para entender o ciclo completo da informação.'
  }
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Filosofia de Trabalho</h2>
          <p className="section-subtitle">Como transformo dados em conhecimento</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {philosophyItems.map((item) => (
            <div
              key={item.title}
              className="bg-dark-bg/50 backdrop-blur-xs border border-primary-blue/20 rounded-xl p-6 sm:p-8 text-center hover:border-primary-blue/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary-blue/10 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-text-primary">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
