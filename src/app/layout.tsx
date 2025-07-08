import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Frontend Developer & AI Enthusiast',
  description: 'Portfolio of a Frontend Developer with DevOps skills transitioning into AI. Showcasing projects, skills, and insights on the journey to becoming an AI engineer.',
  keywords: ['Frontend Developer', 'DevOps', 'AI', 'Machine Learning', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Your Name - Frontend Developer & AI Enthusiast',
    description: 'Portfolio of a Frontend Developer with DevOps skills transitioning into AI.',
    siteName: 'Your Name Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Frontend Developer & AI Enthusiast',
    description: 'Portfolio of a Frontend Developer with DevOps skills transitioning into AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-dark-900 text-dark-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
} 