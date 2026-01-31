'use client'

import { useState, useEffect } from 'react'

export type AccentColor = 'blue' | 'red' | 'green' | 'orange' | 'yellow'

const accentColors: Record<AccentColor, { primary: string; secondary: string; gradient: string }> = {
  blue: { primary: '#2563EB', secondary: '#7C3AED', gradient: 'linear-gradient(135deg, #2563EB, #7C3AED)' },
  red: { primary: '#DC2626', secondary: '#EA580C', gradient: 'linear-gradient(135deg, #DC2626, #EA580C)' },
  green: { primary: '#059669', secondary: '#10B981', gradient: 'linear-gradient(135deg, #059669, #10B981)' },
  orange: { primary: '#F26522', secondary: '#FF6B35', gradient: 'linear-gradient(135deg, #F26522, #FF6B35)' }, // Laranja Itaú
  yellow: { primary: '#EAB308', secondary: '#FACC15', gradient: 'linear-gradient(135deg, #EAB308, #FACC15)' },
}

export function useAccentColor() {
  const [accentColor, setAccentColorState] = useState<AccentColor>('blue')

  useEffect(() => {
    const stored = localStorage.getItem('accent-color') as AccentColor
    if (stored && accentColors[stored]) {
      setAccentColorState(stored)
      applyAccentColor(stored)
    }
  }, [])

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color)
    localStorage.setItem('accent-color', color)
    applyAccentColor(color)
  }

  const applyAccentColor = (color: AccentColor) => {
    const colors = accentColors[color]
    const root = document.documentElement
    root.style.setProperty('--primary-blue', colors.primary)
    root.style.setProperty('--primary-purple', colors.secondary)
    root.style.setProperty('--gradient-primary', colors.gradient)
  }

  return { accentColor, setAccentColor, accentColors }
}
