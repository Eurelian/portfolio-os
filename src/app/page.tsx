import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogSection from '@/components/BlogSection'
import { JsonLd } from '@/components/JsonLd'
import { getAllPosts } from '@/lib/blog'
import { SITE_URL, AUTHOR_NAME } from '@/lib/constants'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: AUTHOR_NAME,
          url: SITE_URL,
          jobTitle: 'Frontend Developer & AI Enthusiast',
        }}
      />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <BlogSection posts={posts} />
      <Contact />
      <Footer />
    </main>
  )
}
