'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { BlogPost } from '@/lib/types/blog'
import BlogCard from '@/components/BlogCard'
import BlogSearch from '@/components/BlogSearch'

interface BlogListingProps {
  posts: BlogPost[]
  categories: string[]
}

const BlogListing = ({ posts, categories }: BlogListingProps) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    let filtered = posts

    if (activeCategory !== 'All') {
      filtered = filtered.filter((post) => post.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [posts, activeCategory, searchQuery])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          Thoughts on software engineering, AI, DevOps, and building better products
        </p>
      </motion.div>

      <BlogSearch
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <motion.div
        key={activeCategory + searchQuery}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </motion.div>

      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-dark-500 dark:text-dark-400 text-lg">
            No posts found. Try a different search or category.
          </p>
        </motion.div>
      )}
    </>
  )
}

export default BlogListing
