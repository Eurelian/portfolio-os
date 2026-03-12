'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { BlogPost } from '@/lib/types/blog'
import { format } from 'date-fns'

interface BlogCardProps {
  post: BlogPost
  index: number
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center relative">
          <span className="text-4xl font-bold text-primary-600/20 dark:text-primary-400/20 select-none">
            BLOG
          </span>
          <div className="absolute top-4 left-4">
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-white/80 dark:bg-dark-800/80 px-2 py-1 rounded">
              {post.category}
            </span>
          </div>
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-100/80 dark:bg-yellow-900/40 px-2 py-1 rounded">
                Featured
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {format(new Date(post.date), 'MMM d, yyyy')}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readingTime} min read
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
            {post.title}
          </h3>
        </Link>

        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs text-dark-500 dark:text-dark-400">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard
