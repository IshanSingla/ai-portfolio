import type { Blog } from "./blog.types"

export const BLOG_DEFAULTS = {
  title: "Latest Blog Posts",
  subtitle: "Insights and tutorials on backend development, DevOps, and cloud technologies",
  limit: 3,
  showViewAll: true,
}

export const DEFAULT_BLOGS: Blog[] = [
  {
    id: "1",
    title: "Building Scalable Backend Systems with Node.js",
    slug: "building-scalable-backend-nodejs",
    date: "2023-11-15",
    excerpt:
      "Learn how to design and implement scalable backend systems using Node.js and modern architecture patterns.",
    tags: ["Node.js", "Backend", "Scalability", "Architecture"],
    author: "Ishan Singla",
    coverImage: "/placeholder.svg?height=600&width=800",
    content:
      "<p>This is a detailed guide on building scalable backend systems with Node.js...</p><h2>Why Node.js for Backend?</h2><p>Node.js provides several benefits for backend development...</p>",
  },
  {
    id: "2",
    title: "Implementing CI/CD Pipelines with Jenkins and Kubernetes",
    slug: "implementing-cicd-jenkins-kubernetes",
    date: "2023-10-22",
    excerpt:
      "A comprehensive guide to setting up continuous integration and deployment pipelines using Jenkins and Kubernetes.",
    tags: ["DevOps", "CI/CD", "Jenkins", "Kubernetes"],
    author: "Ishan Singla",
    coverImage: "/placeholder.svg?height=600&width=800",
    content:
      "<p>Continuous Integration and Continuous Deployment are essential practices...</p><h2>CI/CD Pipeline Components</h2><p>An effective pipeline includes the following stages...</p>",
  },
  {
    id: "3",
    title: "Multi-Cloud Strategy for Modern Applications",
    slug: "multi-cloud-strategy-modern-applications",
    date: "2023-09-18",
    excerpt:
      "Explore the benefits and challenges of implementing a multi-cloud strategy for modern application development.",
    tags: ["Cloud", "AWS", "Azure", "GCP", "Architecture"],
    author: "Ishan Singla",
    coverImage: "/placeholder.svg?height=600&width=800",
    content:
      "<p>As applications grow in complexity, many organizations are adopting multi-cloud strategies...</p><h2>Benefits of Multi-Cloud</h2><p>A multi-cloud approach offers several advantages...</p>",
  },
]

