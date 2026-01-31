'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Minimal particle system - muito mais sutil
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      update(): void
      draw(): void
    }

    const particles: Particle[] = []
    const particleCount = 20 // Reduzido de 50 para 20
    const connectionDistance = 100 // Reduzido de 150 para 100

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2, // Velocidade reduzida
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1 + 0.5, // Partículas menores
      opacity: Math.random() * 0.2 + 0.1, // Mais transparentes
      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      },
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(30, 64, 175, ${this.opacity})` // Azul mais sério
        ctx.fill()
      }
    })

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle())
    }

    // Animation loop mais lento e sutil
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections mais sutis
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.1 // Mais transparente
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(107, 33, 168, ${opacity})` // Roxo mais sóbrio
            ctx.lineWidth = 0.5 // Linhas mais finas
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Canvas - mais sutil */}
      <div className="absolute inset-0 z-0 opacity-30">
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <div className="text-center lg:text-left">
              {/* Integrated Name and Title */}
              <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-primary-blue mb-2 font-light tracking-wide">
                    Gabriel Bordoni
                  </span>
                  <span className="block text-text-primary text-3xl sm:text-4xl lg:text-5xl mb-3 font-medium">
                    Dados reais,
                  </span>
                  <span className="block text-primary-blue text-5xl sm:text-6xl lg:text-7xl font-bold">
                    decisões reais
                  </span>
                </h1>
              </div>
              
              {/* Role */}
              <p className="text-xl text-text-secondary font-medium mb-6">
                Analista de Dados | Python | SQL | Power BI
              </p>
              
              {/* Description */}
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Não trabalho com suposições. Analiso dados reais para encontrar padrões 
                que outros não veem. Cada insight é validado com evidências concretas, 
                transformando números brutos em estratégias que funcionam.
              </p>
              
              {/* Key Technologies - Removido pois já está no título */}
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="px-8 py-4 bg-primary-blue text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-primary-blue/25 hover:-translate-y-1"
                >
                  Ver minha trajetória
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-4 border border-primary-blue/30 text-text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-primary-blue/10 hover:border-primary-blue hover:-translate-y-1"
                >
                  Entrar em contato
                </button>
              </div>
            </div>

            {/* Right Content - Simplified Data Animation */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Clean Data Visualization */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'var(--primary-blue)', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'var(--primary-blue)', stopOpacity: 0.6 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Simple Grid */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line
                      key={`grid-h-${i}`}
                      x1="0"
                      y1={50 + i * 50}
                      x2="400"
                      y2={50 + i * 50}
                      stroke="var(--border-secondary)"
                      strokeWidth="1"
                      opacity="0.1"
                    />
                  ))}
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <line
                      key={`grid-v-${i}`}
                      x1={50 + i * 50}
                      y1="0"
                      x2={50 + i * 50}
                      y2="300"
                      stroke="var(--border-secondary)"
                      strokeWidth="1"
                      opacity="0.1"
                    />
                  ))}
                  
                  {/* Animated Data Bars - Single Color */}
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <g key={`bar-${i}`}>
                      <rect
                        x={80 + i * 40}
                        y={200 - (i * 25)}
                        width="30"
                        height={i * 25}
                        rx="4"
                        fill="url(#dataGradient)"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="height"
                          values={`${i * 25};${i * 25 + 20};${i * 25}`}
                          dur="2s"
                          begin={`${i * 0.2}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="y"
                          values={`${200 - (i * 25)};${180 - (i * 25)};${200 - (i * 25)}`}
                          dur="2s"
                          begin={`${i * 0.2}s`}
                          repeatCount="indefinite"
                        />
                      </rect>
                      
                      {/* Simple Data Points */}
                      <circle
                        cx={95 + i * 40}
                        cy={200 - (i * 25)}
                        r="3"
                        fill="var(--primary-blue)"
                      >
                        <animate
                          attributeName="cy"
                          values={`${200 - (i * 25)};${180 - (i * 25)};${200 - (i * 25)}`}
                          dur="2s"
                          begin={`${i * 0.2}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  ))}
                  
                  {/* Simple Flow Lines */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line
                      key={`flow-${i}`}
                      x1={95 + i * 40}
                      y1={200 - (i * 25)}
                      x2={135 + i * 40}
                      y2={200 - ((i + 1) * 25)}
                      stroke="var(--primary-blue)"
                      strokeWidth="1"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.3;0.6;0.3"
                        dur="2s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - mais discreto */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <button
          onClick={() => scrollToSection('#philosophy')}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-primary-blue transition-colors duration-300"
        >
          <ArrowDown className="w-5 h-5" />
          <span className="text-xs uppercase tracking-wider">Explore mais</span>
        </button>
      </div>
    </section>
  )
}
