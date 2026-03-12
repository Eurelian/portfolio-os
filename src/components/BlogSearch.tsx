'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

interface BlogSearchProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

const BlogSearch = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: BlogSearchProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="mb-12 space-y-6"
    >
      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400"
        />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-dark-800 text-dark-900 dark:text-dark-100 placeholder-dark-400 border border-transparent focus:border-primary-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            activeCategory === 'All'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              activeCategory === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default BlogSearch
