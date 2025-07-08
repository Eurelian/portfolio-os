'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading frontend development for web applications, mentoring junior developers, and implementing best practices.',
      achievements: [
        'Led development of 5+ major web applications',
        'Improved application performance by 40%',
        'Mentored 3 junior developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Developed full-stack applications using modern technologies and cloud services.',
      achievements: [
        'Built scalable microservices architecture',
        'Reduced deployment time by 60%',
        'Implemented automated testing',
        'Migrated to cloud infrastructure'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      period: '2018 - 2020',
      description: 'Created responsive and interactive web experiences for various clients.',
      achievements: [
        'Delivered 20+ client projects',
        'Improved accessibility scores',
        'Optimized for mobile performance',
        'Collaborated with design teams'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University Name',
      period: '2014 - 2018',
      description: 'Focused on software engineering and web development'
    },
    {
      degree: 'AI/ML Certification',
      school: 'Online Platform',
      period: '2023 - Present',
      description: 'Currently pursuing advanced AI and machine learning courses'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                        {exp.title}
                      </h4>
                      <p className="text-lg font-medium text-dark-700 dark:text-dark-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </p>
                      <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-dark-600 dark:text-dark-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                        {edu.degree}
                      </h4>
                      <p className="text-lg font-medium text-dark-700 dark:text-dark-300">
                        {edu.school}
                      </p>
                    </div>
                    <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </p>
                  </div>
                  
                  <p className="text-dark-600 dark:text-dark-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 