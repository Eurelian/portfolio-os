'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Server, Brain } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { getAllProjects } from '@/lib/projects'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const projects = getAllProjects()

  const categories = [
    { name: 'All', icon: Code, count: projects.length },
    { name: 'Web Development', icon: Globe, count: projects.filter(p => p.category === 'Web Development').length },
    { name: 'DevOps', icon: Server, count: projects.filter(p => p.category === 'DevOps').length },
    { name: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'AI/ML').length }
  ]

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return Globe
      case 'DevOps':
        return Server
      case 'AI/ML':
        return Brain
      default:
        return Code
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            A showcase of my work across different technologies and domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.name
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                }`}
              >
                <IconComponent size={20} />
                {category.name}
                <span className="ml-1 text-sm opacity-75">({category.count})</span>
              </button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center relative cursor-pointer">
                    <CategoryIcon className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-white/80 dark:bg-dark-800/80 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-100/80 dark:bg-yellow-900/40 px-2 py-1 rounded">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                
                <div className="p-6">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-dark-500 dark:text-dark-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
                    >
                      View Details
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-dark-500 dark:text-dark-400 text-lg">
              No projects found in this category yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects 