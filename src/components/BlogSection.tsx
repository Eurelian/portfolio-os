'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { BlogPost } from '@/lib/types/blog'
import { format } from 'date-fns'

interface BlogSectionProps {
  posts: BlogPost[]
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  const displayPosts = posts.slice(0, 3)

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Thoughts on software engineering, AI, and building better products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-40 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center relative">
                  <span className="text-3xl font-bold text-primary-600/20 dark:text-primary-400/20 select-none">
                    BLOG
                  </span>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-white/80 dark:bg-dark-800/80 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-dark-500 dark:text-dark-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readingTime} min
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-dark-600 dark:text-dark-300 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 btn-primary px-8 py-3"
          >
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
