import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from '@/lib/constants'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${AUTHOR_NAME} - Frontend Developer & AI Enthusiast`,
  description: 'Portfolio of a Frontend Developer with DevOps skills transitioning into AI. Showcasing projects, skills, and insights on the journey to becoming an AI engineer.',
  keywords: ['Frontend Developer', 'DevOps', 'AI', 'Machine Learning', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `${AUTHOR_NAME} - Frontend Developer & AI Enthusiast`,
    description: 'Portfolio of a Frontend Developer with DevOps skills transitioning into AI.',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${AUTHOR_NAME} - Frontend Developer & AI Enthusiast`,
    description: 'Portfolio of a Frontend Developer with DevOps skills transitioning into AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased bg-white dark:bg-dark-900 text-dark-900 dark:text-white`}>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
          }}
        />
        {children}
      </body>
    </html>
  )
}
