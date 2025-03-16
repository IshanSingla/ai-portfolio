import type { Project } from "./projects.types"

export const PROJECTS_DEFAULTS = {
  title: "Featured Projects",
  subtitle: "Check out some of my recent work in backend development, DevOps, and cloud technologies",
  limit: 3,
  showViewAll: true,
}

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "backend-api-platform",
    title: "Backend API Platform",
    description:
      "A scalable RESTful API platform built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.",
    longDescription:
      "This project implements a production-ready API platform that serves as the backbone for multiple client applications.\n\nThe architecture follows clean code principles with a layered approach separating controllers, services, and data access. It includes JWT authentication, role-based access control, request validation, and comprehensive error handling.\n\nThe platform is deployed on AWS using containerization for consistent environments across development and production.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "AWS"],
    githubLink: "https://github.com/IshanSingla/backend-api-platform",
    liveLink: "https://api-demo.example.com",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "cloud-native-microservices",
    title: "Cloud-Native Microservices",
    description:
      "A suite of microservices built with Spring Boot and deployed on Kubernetes, demonstrating event-driven architecture and service discovery.",
    longDescription:
      "This project showcases a modern microservices architecture deployed on Kubernetes.\n\nThe system includes service discovery, centralized configuration, circuit breaking, and distributed tracing. Services communicate through both synchronous REST calls and asynchronous messaging using Kafka.\n\nThe entire infrastructure is defined as code using Terraform, enabling consistent deployment across environments and cloud providers.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["Java", "Spring Boot", "Kubernetes", "Kafka", "PostgreSQL", "Terraform"],
    githubLink: "https://github.com/IshanSingla/cloud-native-microservices",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "serverless-data-pipeline",
    title: "Serverless Data Pipeline",
    description:
      "A scalable, event-driven data processing pipeline built on AWS Lambda for real-time analytics and data transformation.",
    longDescription:
      "This Serverless Data Pipeline provides a fully managed, event-driven solution for processing and analyzing large volumes of data in real-time.\n\nThe architecture uses AWS Lambda functions to process data as it arrives, with automatic scaling to handle varying workloads. The pipeline includes components for data validation, transformation, enrichment, and loading into analytical data stores.\n\nBy leveraging serverless technologies, the solution eliminates the need for managing infrastructure while providing cost-effective processing that scales with demand.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["AWS Lambda", "Node.js", "DynamoDB", "S3", "Step Functions", "CloudFormation"],
    githubLink: "https://github.com/IshanSingla/serverless-data-pipeline",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation Suite",
    description:
      "A comprehensive suite of tools for automating CI/CD pipelines, infrastructure provisioning, and security scanning across development environments.",
    longDescription:
      "This DevOps Automation Suite provides a comprehensive set of tools and workflows to streamline software delivery from code commit to production deployment.\n\nIt includes customizable CI/CD pipeline templates, infrastructure-as-code modules, automated security scanning, and compliance checks. The suite integrates with popular version control systems, container registries, and cloud platforms.\n\nThe automation suite has helped teams reduce deployment time by 70% and decrease security incidents by implementing consistent security checks throughout the development lifecycle.",
    image: "/placeholder.svg?height=600&width=800",
    techStack: ["Jenkins", "Azure DevOps", "Docker", "Kubernetes", "Terraform", "Ansible", "Python"],
    githubLink: "https://github.com/username/devops-automation-suite",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
]

