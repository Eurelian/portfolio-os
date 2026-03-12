export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  tags: string[]
  coverImage: string
  readingTime: number
  featured: boolean
  content: string
}
