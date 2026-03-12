'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote'
import { BlogPost } from '@/lib/types/blog'
import { format } from 'date-fns'

interface BlogPostViewProps {
  post: BlogPost
  mdxSource: any
}

const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold mt-8 mb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed text-dark-700 dark:text-dark-300" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-dark-700 dark:text-dark-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-dark-700 dark:text-dark-300" {...props} />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  code: (props: any) => (
    <code
      className="bg-gray-100 dark:bg-dark-700 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-dark-700 p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-primary-600 dark:text-primary-400 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary-500 pl-4 italic text-dark-600 dark:text-dark-400 mb-4"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-dark-900 dark:text-dark-100" {...props} />
  ),
}

const BlogPostView = ({ post, mdxSource }: BlogPostViewProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/40 px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 dark:text-dark-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readingTime} min read
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Cover Image Placeholder */}
        <div className="h-64 md:h-80 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl mb-10 flex items-center justify-center">
          <span className="text-6xl font-bold text-primary-600/10 dark:text-primary-400/10 select-none">
            BLOG
          </span>
        </div>

        {/* MDX Content */}
        <div className="prose-blog">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </div>
      </div>
    </motion.article>
  )
}

export default BlogPostView
