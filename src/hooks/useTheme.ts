'use client'

import { useState, useEffect } from 'react'
import { Theme, darkTheme, lightTheme } from '@/lib/theme'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    const colors = theme === 'dark' ? darkTheme : lightTheme
    
    // Apply CSS custom properties
    root.style.setProperty('--primary-blue', colors.primary.blue)
    root.style.setProperty('--primary-purple', colors.primary.purple)
    root.style.setProperty('--dark-bg', colors.dark.bg)
    root.style.setProperty('--dark-secondary', colors.dark.secondary)
    root.style.setProperty('--light-bg', colors.light.bg)
    root.style.setProperty('--text-primary', colors.text.primary)
    root.style.setProperty('--text-secondary', colors.text.secondary)
    root.style.setProperty('--text-muted', colors.text.muted)
    root.style.setProperty('--border-primary', colors.border.primary)
    root.style.setProperty('--border-secondary', colors.border.secondary)
    root.style.setProperty('--card-bg', colors.card.bg)
    root.style.setProperty('--card-border', colors.card.border)
    
    // Save preference
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme, colors: theme === 'dark' ? darkTheme : lightTheme }
}
