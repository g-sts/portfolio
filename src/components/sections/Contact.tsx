'use client'

import { Mail, Linkedin, Github } from 'lucide-react'

export function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/gabriel-bordoni-page/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/g-sts',
      color: 'hover:text-gray-400'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Vamos conversar?
          </h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Se você busca análises que vão além de dashboards e quer transformar dados em 
            decisões estratégicas, adoraria trocar ideias.
          </p>
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 text-text-secondary">
              <Mail className="w-5 h-5 text-primary-blue" />
              <span className="text-lg">contatogabrielbordoni@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 border border-primary-blue/20 rounded-lg text-text-secondary transition-all duration-300 hover:border-primary-blue hover:-translate-y-1 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
