import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"
import { getAllBlogs } from "@/lib/notion"

export const metadata = {
  title: "Blog | AI Developer Portfolio",
  description: "Read my latest articles on AI, DevOps, MLOps, and cloud technologies",
}

export default async function BlogPage() {
  const blogs = await getAllBlogs()

  return (
    <main className="min-h-screen bg-black">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-white hover:bg-zinc-900">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-300">
            Insights and tutorials on AI, DevOps, MLOps, and cloud technologies
          </p>
        </div>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  )
}

