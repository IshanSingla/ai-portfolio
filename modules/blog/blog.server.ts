import { getLatestBlogs } from "@/lib/notion"
import { DEFAULT_BLOGS } from "./blog.constants"

export async function fetchBlogPosts(limit = 3) {
  try {
    const blogs = await getLatestBlogs(limit)
    return blogs
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return DEFAULT_BLOGS.slice(0, limit)
  }
}

