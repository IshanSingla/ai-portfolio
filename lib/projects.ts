export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  techStack: string[]
  githubLink?: string
  liveLink?: string
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    id: "ai-coach-matchmaking",
    title: "AI-powered Coach-Coachee Matchmaking Platform",
    description:
      "An intelligent platform that uses AI to match coaches with coachees based on skills, experience, and preferences, improving match accuracy by 50%.",
    longDescription:
      "Developed for Enablerz Private Limited, this AI-powered coach-coachee matchmaking platform revolutionizes how professional coaching connections are made.\n\nThe system leverages advanced AI algorithms to analyze coach expertise, coachee needs, and personality compatibility, resulting in a 50% improvement in match accuracy. The platform integrates seamlessly with Google Meet and Zoom for virtual coaching sessions, increasing communication efficiency by 40%.\n\nA comprehensive monitoring system using the ELK stack provides real-time insights and streamlined error handling, reducing system downtime by 30%. Data security and compliance are ensured through secure MongoDB Atlas implementation with proper encryption and access controls.\n\nThe platform's AI capabilities are powered by a sophisticated tech stack including LangChain, MongoDB Vector Search, Llama 3.2, and AWS Bedrock, optimizing the matchmaking process and user experience.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["NestJS", "Next.js", "LangChain", "MongoDB", "Vector Search", "Llama 3.2", "AWS Bedrock", "ELK Stack"],
    liveLink: "https://enablerz.com",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "textile-quality-control",
    title: "Textile Materials Quality Control System",
    description:
      "An AI-driven quality control system using computer vision and deep learning models for fabric manufacturing, achieving 95% defect detection accuracy.",
    longDescription:
      "This innovative quality control system for textile manufacturing leverages computer vision and deep learning to detect and classify fabric defects with unprecedented accuracy.\n\nThe system achieved 95% defect detection accuracy, significantly improving production efficiency by 35%. By integrating high-resolution cameras with edge computing capabilities, the solution provides real-time defect classification, reducing detection time by 50%.\n\nThe architecture includes a distributed network of cameras that feed into a central processing system, where custom-trained neural networks analyze the fabric in real-time. An intuitive user interface allows operators to monitor production quality, review detected defects, and generate comprehensive reports.\n\nThis solution has transformed quality control processes in textile manufacturing, reducing waste, improving product quality, and enhancing operational transparency.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["Python", "TensorFlow", "OpenCV", "Edge Computing", "React", "Node.js", "MongoDB", "Docker"],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "product-verification-app",
    title: "Product Verification App",
    description:
      "A secure product verification system using QR serial numbers with polynomial equation method and RSA encryption, processing 100+ verifications daily.",
    longDescription:
      "Developed for HANUVEEN Pvt Ltd, this product verification app provides a robust solution for authenticating products and preventing counterfeiting.\n\nThe system employs a sophisticated approach using QR codes with embedded serial numbers, secured through a polynomial equation method and RSA encryption. This ensures that each product has a unique, tamper-proof identifier that can be easily verified by consumers.\n\nThe backend infrastructure is built on Node.js with a Flutter mobile application for end-users. Data is stored across PostgreSQL, Redis, and DynamoDB to optimize for different access patterns and performance requirements.\n\nDeployed on AWS using EKS, ECS, Lambda, RDS, and DynamoDB, the system achieved a 30% improvement in reliability. The solution currently handles 100+ active users and processes 10,000 product verifications daily in the internal CRM.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["Node.js", "Flutter", "PostgreSQL", "Redis", "DynamoDB", "AWS EKS", "AWS Lambda", "RSA Encryption"],
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "vollmx-system-integration",
    title: "VOLLMX System Integration",
    description:
      "An end-to-end business management system integrating product, inventory, warehouse, sales, expense, and marketplace management for IndusianAssist Pvt Ltd.",
    longDescription:
      "Designed for IndusianAssist Pvt Ltd, this comprehensive system integration project streamlined operations across multiple business functions.\n\nThe solution provides seamless integration between product management, inventory control, warehouse operations, sales tracking, expense management, and marketplace connections. By centralizing these functions, the system reduced manual data entry by 40% and improved operational efficiency across 5 departments.\n\nThe architecture leverages AWS services including EKS, ECS, Lambda, RDS, and DynamoDB to ensure scalability, reliability, and performance. The system successfully handles 20,000+ daily entries with 30+ business CRM internal users.\n\nThis integration project has transformed business operations, providing real-time visibility into all aspects of the business and enabling data-driven decision making.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["AWS EKS", "AWS ECS", "AWS Lambda", "AWS RDS", "DynamoDB", "Node.js", "React", "Docker"],
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "talerally-management-platform",
    title: "Talerally - Tailor & Boutique Management Platform",
    description:
      "A comprehensive management and marketplace platform for tailors and boutiques, streamlining order processing, customer measurements, scheduling, and inventory management.",
    longDescription:
      "Talerally is an innovative platform designed specifically for tailors and boutiques to modernize their business operations and enhance customer experience.\n\nThe system provides end-to-end management capabilities including order processing, detailed customer measurements tracking, appointment scheduling through an interactive calendar, inventory management, and a marketplace for displaying products and services.\n\nBuilt with a Flutter frontend for cross-platform mobile access and a NestJS backend for robust API services, the platform uses MongoDB for flexible document storage and SQL databases for relational data. The architecture follows a microservices approach to ensure scalability and maintainability.\n\nKey features include a digital measurement system that stores customer body measurements with version history, an intelligent scheduling system that optimizes tailor availability, a customer portal for order tracking and appointment booking, and comprehensive employee management with performance analytics.\n\nThe marketplace component allows tailors and boutiques to showcase their designs, fabrics, and services, creating new revenue opportunities and expanding their customer base beyond local markets.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["Flutter", "NestJS", "MongoDB", "PostgreSQL", "Redis", "AWS", "Firebase", "WebSockets"],
    liveLink: "https://talerally.example.com",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "ai-powered-content-platform",
    title: "AI-Powered Content Platform",
    description:
      "A content management and generation platform leveraging AI for automated content creation, SEO optimization, and personalized recommendations using FastAPI and ML models.",
    longDescription:
      "This innovative content platform uses artificial intelligence to streamline content creation, optimization, and distribution for digital publishers.\n\nBuilt with FastAPI for high-performance API endpoints, the system integrates with various machine learning models for content generation, sentiment analysis, and personalized recommendations. The architecture follows a modular design with clear separation of concerns.\n\nKey features include automated content generation, SEO optimization, A/B testing capabilities, and analytics dashboards. The platform is deployed on Azure with CI/CD pipelines and monitoring systems to ensure reliability.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["Python", "FastAPI", "Machine Learning", "PostgreSQL", "Redis", "Azure", "Docker", "React"],
    githubLink: "https://github.com/IshanSingla/ai-content-platform",
    liveLink: "https://ai-content-demo.example.com",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

