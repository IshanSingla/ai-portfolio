"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { getLatestBlogs } from "@/lib/notion"

export default async function BlogSection() {
  const blogs = await getLatestBlogs(3)

  return (
    <section className="py-24 bg-gradient-to-b from-black to-violet-950/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-300">
            Insights and tutorials on backend development, cloud architecture, and DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-900/20"
          >
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function BlogCard({ blog, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group-hover:border-violet-500/50 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 mix-blend-overlay z-10" />
          <Image
            src={blog.coverImage || "/placeholder.svg?height=400&width=600"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex-grow">
          <div className="flex items-center mb-4 text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-2 text-violet-400" />
            <time dateTime={blog.date}>{formatDate(blog.date)}</time>

            {blog.author && (
              <>
                <span className="mx-2">•</span>
                <User className="w-4 h-4 mr-2 text-violet-400" />
                <span>{blog.author}</span>
              </>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="flex items-center text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </div>
            ))}
            {blog.tags.length > 3 && (
              <div className="flex items-center text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">
                +{blog.tags.length - 3}
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pb-6">
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-300"
          >
            Read Article
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

