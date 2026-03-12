import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogSection from '@/components/BlogSection'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen">
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
