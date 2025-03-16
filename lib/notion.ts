// This would normally be an environment variable
const NOTION_TOKEN = process.env.NOTION_API_KEY || "dummy-token"
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "dummy-database-id"

export interface Blog {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  tags: string[]
  author?: string
  coverImage?: string
  content: string
}

// Mock data for demonstration purposes
const mockBlogs: Blog[] = [
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
  {
    id: "4",
    title: "Optimizing MongoDB for High-Traffic Applications",
    slug: "optimizing-mongodb-high-traffic",
    date: "2023-08-05",
    excerpt: "Best practices for configuring and optimizing MongoDB databases for high-traffic applications.",
    tags: ["MongoDB", "Database", "Performance", "Optimization"],
    author: "Ishan Singla",
    coverImage: "/placeholder.svg?height=600&width=800",
    content:
      "<p>MongoDB is a popular choice for modern applications, but it needs proper optimization...</p><h2>Indexing Strategies</h2><p>Proper indexing is crucial for MongoDB performance...</p>",
  },
  {
    id: "5",
    title: "Building Microservices with Spring Boot",
    slug: "building-microservices-spring-boot",
    date: "2023-07-12",
    excerpt: "How to design and implement a microservices architecture using Spring Boot and related technologies.",
    tags: ["Java", "Spring Boot", "Microservices", "Architecture"],
    author: "Ishan Singla",
    coverImage: "/placeholder.svg?height=600&width=800",
    content:
      "<p>Microservices architecture has become the standard for building scalable applications...</p><h2>Spring Boot for Microservices</h2><p>Spring Boot provides an excellent foundation for building microservices...</p>",
  },
  {
    id: "6",
    title: "Serverless Backend Development with AWS Lambda",
    slug: "serverless-backend-aws-lambda",
    date: "2023-06-20",
    excerpt:
      "Explore how serverless technologies are transforming backend development with AWS Lambda and related services.",
    tags: ["Serverless", "AWS Lambda", "Backend", "Cloud"],
    author: "Ishan Singla",
    coverImage: "/placeholder.svg?height=600&width=800",
    content:
      "<p>Serverless computing offers a new paradigm for backend development...</p><h2>Benefits of Serverless for Backend</h2><p>Serverless platforms provide automatic scaling, reduced operational overhead...</p>",
  },
]

// In a real implementation, this would connect to the Notion API
export async function getLatestBlogs(count = 3): Promise<Blog[]> {
  // This is a mock implementation
  return mockBlogs.slice(0, count)
}

export async function getAllBlogs(): Promise<Blog[]> {
  // This is a mock implementation
  return mockBlogs
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  // This is a mock implementation
  const blog = mockBlogs.find((b) => b.slug === slug)
  return blog || null
}

// In a real implementation, this function would fetch data from Notion
async function fetchFromNotion() {
  try {
    // This would be replaced with actual Notion API calls
    // For example:
    // const notion = new Client({ auth: NOTION_TOKEN });
    // const response = await notion.databases.query({
    //   database_id: NOTION_DATABASE_ID,
    //   sorts: [{ property: 'Date', direction: 'descending' }],
    // });

    // For now, we'll use mock data
    return mockBlogs
  } catch (error) {
    console.error("Error fetching from Notion:", error)
    return []
  }
}

