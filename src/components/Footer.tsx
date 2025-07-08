'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-dark-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Your Name</h3>
            <p className="text-gray-300 mb-4">
              Frontend Developer with DevOps skills, transitioning into AI. 
              Building the future with modern technologies and innovative solutions.
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 Octavian Sum. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-primary-400 transition-colors">Experience</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Email</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Vibe Coded with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 