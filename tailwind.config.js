/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'var(--primary-blue)',
          purple: 'var(--primary-purple)',
        },
        dark: {
          bg: 'var(--dark-bg)',
          secondary: 'var(--dark-secondary)',
        },
        light: {
          bg: 'var(--light-bg)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
        },
        card: {
          bg: 'var(--card-bg)',
          border: 'var(--card-border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'data-flow': 'dataFlow 4s ease-in-out infinite',
        'rotate-slow': 'rotate 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: 0.8,
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        gridMove: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(50px, 50px)',
          },
        },
        dataFlow: {
          '0%, 100%': {
            transform: 'scale(1) translate(0, 0)',
            opacity: 0.3,
          },
          '50%': {
            transform: 'scale(2) translate(20px, -20px)',
            opacity: 1,
          },
        },
        rotate: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #33A6FF, #9829D0)',
        'gradient-dark': 'linear-gradient(180deg, #051016 0%, #0A1929 100%)',
        'grid-pattern': `linear-gradient(rgba(51, 166, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(51, 166, 255, 0.1) 1px, transparent 1px)`,
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
