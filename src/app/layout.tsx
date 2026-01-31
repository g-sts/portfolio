import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gabriel-bordoni.vercel.app'),
  title: {
    default: 'Gabriel Bordoni - Analista de Dados | Python, SQL, Power BI',
    template: '%s | Gabriel Bordoni'
  },
  description: 'Analista de Dados especializado em transformar informações brutas em insights estratégicos usando Python, SQL e Power BI.',
  keywords: ['Analista de Dados', 'Python', 'SQL', 'Power BI', 'Análise de Dados', 'Data Science', 'Business Intelligence', 'Django', 'PostgreSQL'],
  authors: [{ name: 'Gabriel Bordoni' }],
  creator: 'Gabriel Bordoni',
  publisher: 'Gabriel Bordoni',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gabriel-bordoni.vercel.app',
    title: 'Gabriel Bordoni - Analista de Dados',
    description: 'Analista de Dados especializado em transformar informações brutas em insights estratégicos usando Python, SQL e Power BI.',
    siteName: 'Gabriel Bordoni Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gabriel Bordoni - Analista de Dados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Bordoni - Analista de Dados',
    description: 'Analista de Dados especializado em transformar informações brutas em insights estratégicos.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://gabriel-bordoni.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriel Bordoni',
    jobTitle: 'Analista de Dados & Desenvolvedor Full Stack',
    description: 'Analista de Dados especializado em transformar informações brutas em insights estratégicos usando Python, SQL e Power BI.',
    url: 'https://gabriel-bordoni.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/gabriel-bordoni-page',
      'https://github.com/g-sts',
    ],
    knowsAbout: [
      'Análise de Dados',
      'Python',
      'SQL',
      'Power BI',
      'Django',
      'PostgreSQL',
      'React',
      'TypeScript'
    ]
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
