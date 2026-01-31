'use client'

export type Theme = 'dark' | 'light'

export interface ThemeColors {
  primary: {
    blue: string
    purple: string
  }
  dark: {
    bg: string
    secondary: string
  }
  light: {
    bg: string
  }
  text: {
    primary: string
    secondary: string
    muted: string
  }
  border: {
    primary: string
    secondary: string
  }
  card: {
    bg: string
    border: string
  }
}

export const darkTheme: ThemeColors = {
  primary: {
    blue: '#2563EB',      // Azul profissional
    purple: '#7C3AED',    // Roxo sofisticado
  },
  dark: {
    bg: '#000000',        // Preto puro
    secondary: '#111111', // Cinza muito escuro
  },
  light: {
    bg: '#FFFFFF',        // Branco puro
  },
  text: {
    primary: '#FFFFFF',   // Branco puro
    secondary: '#A1A1AA', // Cinza médio
    muted: '#71717A',     // Cinza escuro
  },
  border: {
    primary: '#2563EB20', // Azul com transparência
    secondary: '#27272A', // Cinza escuro
  },
  card: {
    bg: '#0A0A0A',        // Preto com leve alívio
    border: '#1F1F1F',    // Cinza muito escuro
  }
}

export const lightTheme: ThemeColors = {
  primary: {
    blue: '#2563EB',
    purple: '#7C3AED',
  },
  dark: {
    bg: '#FFFFFF',
    secondary: '#F8FAFC',
  },
  light: {
    bg: '#FFFFFF',
  },
  text: {
    primary: '#0F172A',   // Cinza muito escuro
    secondary: '#475569', // Cinza médio
    muted: '#64748B',     // Cinza
  },
  border: {
    primary: '#2563EB30',
    secondary: '#E2E8F0', // Cinza claro
  },
  card: {
    bg: '#FFFFFF',
    border: '#E2E8F0',
  }
}
