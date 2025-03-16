import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getBlogBySlug, getAllBlogs } from "@/lib/notion"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"
import { BlogPostStructuredData } from "@/components/structured-data"

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${blog.title} | Ishan Singla`,
    description: blog.excerpt,
    keywords: [...blog.tags, "blog", "article", "Ishan Singla"],
    openGraph: {
      title: `${blog.title} | Ishan Singla`,
      description: blog.excerpt,
      url: `https://ishansingla.io/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author || "Ishan Singla"],
      tags: blog.tags,
      images: [
        {
          url: blog.coverImage || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage || "/og-image.jpg"],
    },
  }
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs()

  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Structured Data for SEO */}
      <BlogPostStructuredData blog={blog} />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-white hover:bg-zinc-900">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">{blog.title}</h1>
            <div className="flex flex-wrap items-center text-gray-400 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              </div>
              {blog.author && (
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{blog.author}</span>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} className="bg-zinc-800 text-cyan-400 border-zinc-700">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {blog.coverImage && (
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
              <Image
                src={blog.coverImage || "/placeholder.svg"}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </article>
      </div>
    </main>
  )
}

