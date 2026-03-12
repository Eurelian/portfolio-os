import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from './types/blog'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      slug: data.slug || filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      tags: data.tags || [],
      coverImage: data.coverImage || '',
      readingTime: data.readingTime || 5,
      featured: data.featured || false,
      content,
    } as BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category)
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured)
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  return Array.from(new Set(posts.map((post) => post.category)))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  return Array.from(new Set(posts.flatMap((post) => post.tags)))
}
