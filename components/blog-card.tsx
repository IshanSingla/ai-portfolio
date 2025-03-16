"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar } from "lucide-react"
import type { Blog } from "@/lib/notion"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-zinc-900 border-zinc-800 hover:border-cyan-500 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.coverImage || "/placeholder.svg?height=400&width=600"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center mb-3 text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
          </div>
          <h3 className="text-xl font-bold text-white">{blog.title}</h3>
          <p className="mt-2 text-gray-400 line-clamp-3">{blog.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-zinc-800 text-cyan-400 border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={`/blog/${blog.slug}`} className="text-cyan-400 hover:text-cyan-300 flex items-center font-medium">
            Read More
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

