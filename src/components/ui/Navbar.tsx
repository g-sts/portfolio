'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Palette } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useAccentColor } from '@/hooks/useAccentColor'
import { Logo } from './Logo'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { accentColor, setAccentColor, accentColors } = useAccentColor()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Filosofia', href: '#philosophy' },
    { name: 'Ciclo', href: '#cycle' },
    { name: 'Ferramentas', href: '#tools' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contato', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card-bg/95 backdrop-blur-xs border-b border-card-border shadow-lg' 
        : 'bg-card-bg/80 backdrop-blur-xs'
    }`}>
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-text-secondary hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                  aria-label={`Navegar para ${item.name}`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-text-secondary hover:text-primary-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Accent Color Picker */}
              <div className="relative">
                <button
                  onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                  className="p-2 text-text-secondary hover:text-primary-blue transition-colors duration-300"
                  title="Escolher cor de destaque"
                >
                  <Palette size={18} />
                </button>
                
                {isColorPickerOpen && (
                  <div className="absolute right-0 mt-2 py-2 px-3 bg-card-bg border border-card-border rounded-xl shadow-lg z-50">
                    <div className="flex gap-2">
                      {(Object.keys(accentColors) as Array<keyof typeof accentColors>).map((color) => (
                        <button
                          key={color}
                          onClick={() => {
                            setAccentColor(color)
                            setIsColorPickerOpen(false)
                          }}
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                            accentColor === color ? 'border-white scale-110' : 'border-transparent hover:scale-105'
                          }`}
                          style={{ backgroundColor: accentColors[color].primary }}
                          title={color.charAt(0).toUpperCase() + color.slice(1)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-primary-blue transition-colors duration-300"
              title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Accent Color Picker Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                className="p-2 text-text-secondary hover:text-primary-blue transition-colors duration-300"
                title="Escolher cor de destaque"
              >
                <Palette size={18} />
              </button>
              
              {isColorPickerOpen && (
                <div className="absolute right-0 mt-2 py-2 px-3 bg-card-bg border border-card-border rounded-xl shadow-lg z-50">
                  <div className="flex gap-2">
                    {(Object.keys(accentColors) as Array<keyof typeof accentColors>).map((color) => (
                      <button
                        key={color}
                        onClick={() => {
                          setAccentColor(color)
                          setIsColorPickerOpen(false)
                        }}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                          accentColor === color ? 'border-white scale-110' : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: accentColors[color].primary }}
                        title={color.charAt(0).toUpperCase() + color.slice(1)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary hover:text-primary-blue p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-text-secondary hover:text-primary-blue block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
