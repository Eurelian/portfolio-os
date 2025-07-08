'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My journey from frontend development to AI engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                My Story
              </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                I started my career as a frontend developer, building responsive and user-friendly web applications. 
                Over time, I expanded my skills into DevOps, learning about CI/CD pipelines, containerization, 
                and cloud infrastructure.
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                Now, I&apos;m passionate about AI and machine learning. I believe the combination of frontend development, 
                DevOps practices, and AI knowledge creates a powerful skill set for building the next generation 
                of intelligent applications.
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I&apos;m currently focused on learning machine learning algorithms, neural networks, and AI development 
                while applying my existing expertise to create innovative solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                Frontend Development
              </h4>
              <p className="text-dark-600 dark:text-dark-300">
                Building responsive, accessible, and performant web applications with modern frameworks.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                DevOps & Infrastructure
              </h4>
              <p className="text-dark-600 dark:text-dark-300">
                CI/CD pipelines, containerization, cloud deployment, and infrastructure automation.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                AI & Machine Learning
              </h4>
              <p className="text-dark-600 dark:text-dark-300">
                Learning ML algorithms, neural networks, and AI development for intelligent applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 