import { Download, Settings, Search, TrendingUp, Target } from 'lucide-react'

const cycleSteps = [
  {
    icon: Download,
    title: 'Extração',
    description: 'Coleta de dados brutos de diversas fontes'
  },
  {
    icon: Settings,
    title: 'Tratamento',
    description: 'Limpeza, organização e modelagem'
  },
  {
    icon: Search,
    title: 'Análise Exploratória',
    description: 'Levantamento de hipóteses e padrões'
  },
  {
    icon: TrendingUp,
    title: 'Visualização',
    description: 'Storytelling e comunicação clara'
  },
  {
    icon: Target,
    title: 'Decisão',
    description: 'Transformação de insight em ação'
  }
]

export function AnalysisCycle() {
  return (
    <section id="cycle" className="py-20 bg-dark-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">O Ciclo da Análise</h2>
          <p className="section-subtitle">Da extração à decisão estratégica</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Linear Process Flow */}
          <div className="relative">
            {/* Progress Line - horizontal apenas em desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary-blue/20"></div>
            <div className="hidden md:block absolute top-12 left-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-purple transition-all duration-1000" style={{ width: '100%' }}></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative px-4 md:px-0 max-w-sm mx-auto md:max-w-none">
              {cycleSteps.map((step, index) => (
                <div key={step.title} className="text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-dark-bg/50 backdrop-blur-xs border-2 border-primary-blue/30 rounded-full flex items-center justify-center hover:border-primary-blue/60 transition-all duration-300">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-blue" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-blue text-white text-xs rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <h3 className="font-semibold text-text-primary mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-text-muted text-xs sm:text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Process Description */}
          <div className="mt-16 text-center">
            <div className="bg-dark-secondary/30 backdrop-blur-xs border border-primary-blue/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Metodologia Sistemática
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Cada etapa do ciclo é executada com rigor metodológico, garantindo que os insights 
                gerados sejam robustos, replicáveis e acionáveis. O foco está na qualidade 
                da análise e no impacto gerado para o negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
