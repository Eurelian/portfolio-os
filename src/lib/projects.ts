export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  github: string
  live: string
  category: string
  featured: boolean
  date: string
  duration: string
  teamSize?: number
  role: string
  challenges: string[]
  solutions: string[]
  results: string[]
  screenshots: string[]
  demoVideo?: string
  architecture?: string
  keyFeatures: string[]
  lessonsLearned: string[]
}

export const projects: Project[] = [
  {
    slug: 'ai-powered-portfolio',
    title: 'AI-Powered Portfolio',
    description: 'A modern portfolio website with AI integration, built with Next.js and machine learning features.',
    longDescription: 'This project showcases the integration of AI capabilities into a modern web portfolio. The system includes intelligent content recommendations, automated SEO optimization, and interactive AI-powered features that enhance user engagement.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'TensorFlow', 'OpenAI API', 'Vercel'],
    image: '/api/placeholder/800/400',
    github: 'https://github.com/yourusername/ai-portfolio',
    live: 'https://your-portfolio.com',
    category: 'AI/ML',
    featured: true,
    date: '2024-01',
    duration: '3 months',
    teamSize: 1,
    role: 'Full Stack Developer & AI Engineer',
    challenges: [
      'Integrating multiple AI APIs seamlessly',
      'Optimizing performance with AI features',
      'Creating intuitive user interactions',
      'Balancing AI automation with user control'
    ],
    solutions: [
      'Implemented a microservices architecture for AI features',
      'Used React Suspense and lazy loading for performance',
      'Created a conversational UI for AI interactions',
      'Built a feedback loop system for continuous improvement'
    ],
    results: [
      '40% increase in user engagement time',
      'Improved SEO scores by 25%',
      'Reduced bounce rate by 30%',
      'Successfully deployed AI features in production'
    ],
    screenshots: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    demoVideo: 'https://youtube.com/watch?v=example',
    architecture: 'Microservices with AI API integration',
    keyFeatures: [
      'AI-powered content recommendations',
      'Intelligent SEO optimization',
      'Interactive chatbot for visitors',
      'Automated content generation',
      'Real-time analytics dashboard',
      'Multi-language support with AI translation'
    ],
    lessonsLearned: [
      'AI integration requires careful UX design',
      'Performance optimization is crucial for AI features',
      'User feedback is essential for AI system improvement',
      'Balancing automation with user control is key'
    ]
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built from the ground up, featuring a modern React frontend, robust Node.js backend, and seamless payment processing. The platform handles thousands of products and transactions with high performance and security.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker', 'Redis', 'AWS'],
    image: '/api/placeholder/800/400',
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://ecommerce-demo.com',
    category: 'Web Development',
    featured: true,
    date: '2023-09',
    duration: '6 months',
    teamSize: 3,
    role: 'Full Stack Developer',
    challenges: [
      'Handling high concurrent user traffic',
      'Implementing secure payment processing',
      'Managing complex inventory systems',
      'Ensuring data consistency across microservices'
    ],
    solutions: [
      'Implemented Redis caching for improved performance',
      'Used Stripe for secure payment processing',
      'Built a robust inventory management system',
      'Implemented event-driven architecture for data consistency'
    ],
    results: [
      'Processed $500K+ in transactions',
      'Achieved 99.9% uptime',
      'Reduced page load time by 60%',
      'Increased conversion rate by 25%'
    ],
    screenshots: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    demoVideo: 'https://youtube.com/watch?v=example2',
    architecture: 'Microservices with event-driven architecture',
    keyFeatures: [
      'Advanced product catalog with search',
      'Secure payment processing with Stripe',
      'Real-time inventory management',
      'Admin dashboard with analytics',
      'Order tracking and notifications',
      'Multi-vendor support',
      'Mobile-responsive design',
      'SEO optimization'
    ],
    lessonsLearned: [
      'Event-driven architecture improves scalability',
      'Caching is crucial for e-commerce performance',
      'Security should be built-in from the start',
      'User experience directly impacts conversion rates'
    ]
  },
  {
    slug: 'devops-automation',
    title: 'DevOps Automation',
    description: 'CI/CD pipeline automation with Docker, Kubernetes, and cloud deployment.',
    longDescription: 'A comprehensive DevOps automation solution that streamlines the entire software development lifecycle. The system includes automated testing, deployment, monitoring, and infrastructure management using modern cloud-native technologies.',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Prometheus', 'Grafana'],
    image: '/api/placeholder/800/400',
    github: 'https://github.com/yourusername/devops-automation',
    live: 'https://devops-demo.com',
    category: 'DevOps',
    featured: true,
    date: '2023-06',
    duration: '4 months',
    teamSize: 2,
    role: 'DevOps Engineer',
    challenges: [
      'Managing complex multi-environment deployments',
      'Ensuring zero-downtime deployments',
      'Implementing comprehensive monitoring',
      'Automating security scanning and compliance'
    ],
    solutions: [
      'Implemented blue-green deployment strategy',
      'Used Kubernetes for container orchestration',
      'Built comprehensive monitoring with Prometheus/Grafana',
      'Integrated security scanning into CI/CD pipeline'
    ],
    results: [
      'Reduced deployment time by 80%',
      'Achieved 99.99% uptime',
      'Reduced manual errors by 90%',
      'Improved team productivity by 60%'
    ],
    screenshots: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    demoVideo: 'https://youtube.com/watch?v=example3',
    architecture: 'Kubernetes-based microservices with GitOps',
    keyFeatures: [
      'Automated CI/CD pipelines',
      'Infrastructure as Code with Terraform',
      'Container orchestration with Kubernetes',
      'Comprehensive monitoring and alerting',
      'Security scanning and compliance',
      'Multi-cloud deployment support',
      'Disaster recovery automation',
      'Cost optimization and resource management'
    ],
    lessonsLearned: [
      'Automation reduces human error significantly',
      'Monitoring is essential for production systems',
      'Security should be integrated into every stage',
      'Documentation is crucial for team adoption'
    ]
  },
  {
    slug: 'react-component-library',
    title: 'React Component Library',
    description: 'Reusable component library with TypeScript and comprehensive documentation.',
    longDescription: 'A comprehensive React component library designed for consistency and developer productivity. The library includes 50+ reusable components with full TypeScript support, comprehensive documentation, and extensive testing coverage.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'Styled Components'],
    image: '/api/placeholder/800/400',
    github: 'https://github.com/yourusername/react-component-library',
    live: 'https://component-library-demo.com',
    category: 'Web Development',
    featured: false,
    date: '2023-03',
    duration: '2 months',
    teamSize: 1,
    role: 'Frontend Developer',
    challenges: [
      'Ensuring component reusability across projects',
      'Maintaining consistent design system',
      'Providing comprehensive documentation',
      'Ensuring accessibility compliance'
    ],
    solutions: [
      'Used Storybook for component documentation',
      'Implemented design tokens for consistency',
      'Created comprehensive testing suite',
      'Followed WCAG guidelines for accessibility'
    ],
    results: [
      '50+ reusable components created',
      'Reduced development time by 40%',
      'Improved design consistency by 80%',
      'Achieved 95% test coverage'
    ],
    screenshots: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    architecture: 'Monorepo with Storybook and testing',
    keyFeatures: [
      '50+ reusable components',
      'Full TypeScript support',
      'Comprehensive documentation',
      'Accessibility compliant',
      'Theme customization',
      'Extensive testing coverage',
      'Storybook integration',
      'NPM package distribution'
    ],
    lessonsLearned: [
      'Component design requires careful planning',
      'Documentation is as important as code',
      'Testing ensures component reliability',
      'Accessibility should be built-in from the start'
    ]
  },
  {
    slug: 'machine-learning-dashboard',
    title: 'Machine Learning Dashboard',
    description: 'Interactive dashboard for visualizing ML model performance and predictions.',
    longDescription: 'An interactive web application for visualizing machine learning model performance, predictions, and insights. The dashboard provides real-time monitoring of ML models in production with interactive visualizations and automated reporting.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly', 'Docker', 'AWS'],
    image: '/api/placeholder/800/400',
    github: 'https://github.com/yourusername/ml-dashboard',
    live: 'https://ml-dashboard-demo.com',
    category: 'AI/ML',
    featured: false,
    date: '2023-12',
    duration: '3 months',
    teamSize: 2,
    role: 'ML Engineer & Full Stack Developer',
    challenges: [
      'Visualizing complex ML model outputs',
      'Handling real-time data streams',
      'Ensuring dashboard performance with large datasets',
      'Making ML insights accessible to non-technical users'
    ],
    solutions: [
      'Used Plotly for interactive visualizations',
      'Implemented data streaming with WebSockets',
      'Optimized queries and caching for performance',
      'Created intuitive UI for complex data'
    ],
    results: [
      'Improved model monitoring efficiency by 70%',
      'Reduced time to detect model drift by 80%',
      'Increased stakeholder understanding by 60%',
      'Automated 90% of reporting tasks'
    ],
    screenshots: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    demoVideo: 'https://youtube.com/watch?v=example4',
    architecture: 'Streamlit app with real-time data processing',
    keyFeatures: [
      'Real-time model performance monitoring',
      'Interactive data visualizations',
      'Automated model drift detection',
      'Customizable dashboards',
      'Export capabilities for reports',
      'User authentication and permissions',
      'API integration for external data',
      'Mobile-responsive design'
    ],
    lessonsLearned: [
      'Data visualization is crucial for ML adoption',
      'Real-time processing requires careful optimization',
      'User experience matters even for technical tools',
      'Automation reduces manual monitoring overhead'
    ]
  },
  {
    slug: 'api-gateway-service',
    title: 'API Gateway Service',
    description: 'Microservices API gateway with authentication, rate limiting, and monitoring.',
    longDescription: 'A high-performance API gateway service that provides centralized authentication, rate limiting, request routing, and monitoring for microservices architecture. The gateway handles thousands of requests per second with minimal latency.',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Prometheus', 'Docker', 'Kubernetes'],
    image: '/api/placeholder/800/400',
    github: 'https://github.com/yourusername/api-gateway',
    live: 'https://api-gateway-demo.com',
    category: 'Web Development',
    featured: false,
    date: '2023-08',
    duration: '2 months',
    teamSize: 2,
    role: 'Backend Developer',
    challenges: [
      'Handling high request volumes',
      'Implementing secure authentication',
      'Managing rate limiting across services',
      'Ensuring low latency routing'
    ],
    solutions: [
      'Used Redis for caching and rate limiting',
      'Implemented JWT-based authentication',
      'Built efficient request routing',
      'Added comprehensive monitoring'
    ],
    results: [
      'Handled 10K+ requests per second',
      'Reduced latency by 50%',
      'Improved security with centralized auth',
      'Achieved 99.9% uptime'
    ],
    screenshots: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    architecture: 'Microservices gateway with Redis caching',
    keyFeatures: [
      'Centralized authentication and authorization',
      'Rate limiting and throttling',
      'Request routing and load balancing',
      'Real-time monitoring and metrics',
      'API versioning support',
      'Request/response transformation',
      'Circuit breaker pattern',
      'Comprehensive logging and tracing'
    ],
    lessonsLearned: [
      'Caching is essential for gateway performance',
      'Security should be implemented at multiple layers',
      'Monitoring is crucial for production systems',
      'Rate limiting prevents abuse and ensures fairness'
    ]
  }
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
} 