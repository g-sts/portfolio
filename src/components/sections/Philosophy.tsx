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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyItems.map((item) => (
            <div
              key={item.title}
              className="bg-dark-bg/50 backdrop-blur-xs border border-primary-blue/20 rounded-xl p-8 text-center hover:border-primary-blue/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-blue/10 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-primary">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
