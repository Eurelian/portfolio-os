'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, Code, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react'
import { Project } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectDetailProps {
  project: Project
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 py-8"
      >
        <div className="container-custom">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-dark-600 dark:text-dark-300 mb-6">
              {project.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-dark-500 dark:text-dark-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {project.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {project.duration}
              </div>
              {project.teamSize && (
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  {project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Code size={16} />
                {project.role}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-24 h-24 text-primary-600 dark:text-primary-400" />
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-dark-600 dark:text-dark-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  Challenges
                </h2>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-600 dark:text-dark-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  Solutions
                </h2>
                <div className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-600 dark:text-dark-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                Results & Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-dark-600 dark:text-dark-300">{result}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Lessons Learned */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Lessons Learned
              </h2>
              <div className="space-y-3">
                {project.lessonsLearned.map((lesson, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-dark-600 dark:text-dark-300">{lesson}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-3 bg-white dark:bg-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors"
                >
                  <Github size={20} />
                  <span>View Code</span>
                  <ExternalLink size={16} className="ml-auto text-gray-400" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-3 bg-white dark:bg-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                  <ExternalLink size={16} className="ml-auto text-gray-400" />
                </a>
                {project.demoVideo && (
                  <a
                    href={project.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full p-3 bg-white dark:bg-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Watch Demo</span>
                    <ExternalLink size={16} className="ml-auto text-gray-400" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-white dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-3 py-1 rounded-lg border border-gray-200 dark:border-dark-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-dark-500 dark:text-dark-400">Category:</span>
                  <span className="font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-500 dark:text-dark-400">Duration:</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-500 dark:text-dark-400">Role:</span>
                  <span className="font-medium">{project.role}</span>
                </div>
                {project.architecture && (
                  <div className="flex justify-between">
                    <span className="text-dark-500 dark:text-dark-400">Architecture:</span>
                    <span className="font-medium">{project.architecture}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 