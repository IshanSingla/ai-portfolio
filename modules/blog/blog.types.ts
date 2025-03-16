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

export interface BlogSectionProps {
  title: string
  subtitle: string
  blogs: Blog[]
  limit?: number
  showViewAll?: boolean
}

