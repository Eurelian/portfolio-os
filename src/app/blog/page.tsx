import { getAllPosts, getAllCategories } from '@/lib/blog'
import BlogListing from '@/components/BlogListing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog - Portfolio',
  description: 'Thoughts on software engineering, AI, DevOps, and building better products.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <BlogListing posts={posts} categories={categories} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
