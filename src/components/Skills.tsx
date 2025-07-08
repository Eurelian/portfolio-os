'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      technologies: [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS',
        'Tailwind CSS', 'Styled Components', 'Redux', 'GraphQL',
        'Webpack', 'Vite', 'Jest', 'React Testing Library'
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      icon: Cloud,
      technologies: [
        'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD',
        'Jenkins', 'GitHub Actions', 'Linux', 'Git', 'Nginx',
        'Prometheus', 'Grafana', 'ELK Stack', 'Helm'
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      technologies: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas',
        'NumPy', 'Jupyter', 'OpenCV', 'NLTK', 'Transformers',
        'Streamlit', 'FastAPI', 'MLflow', 'DVC'
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      technologies: [
        'Node.js', 'Express.js', 'Python', 'FastAPI', 'MongoDB',
        'PostgreSQL', 'Redis', 'REST APIs', 'GraphQL', 'Microservices',
        'JWT', 'OAuth', 'WebSockets', 'Message Queues'
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark-700 dark:text-dark-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-3 py-1 rounded-lg border border-gray-200 dark:border-dark-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-200 dark:hover:border-primary-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Additional Skills & Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  Development Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'Git', 'Postman', 'Docker Desktop', 'TablePlus', 'Figma', 'Adobe XD', 'Sketch'].map((tool) => (
                    <span
                      key={tool}
                      className="text-sm bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Agile', 'Scrum', 'Kanban', 'TDD', 'BDD', 'CI/CD', 'DevOps', 'Microservices'].map((method) => (
                    <span
                      key={method}
                      className="text-sm bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Team Leadership', 'Problem Solving', 'Communication', 'Project Management', 'Mentoring', 'Documentation', 'Code Review'].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 