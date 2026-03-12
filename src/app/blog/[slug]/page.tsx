import { notFound } from 'next/navigation'
import { serialize } from 'next-mdx-remote/serialize'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import BlogPostView from '@/components/BlogPostView'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, AUTHOR_NAME } from '@/lib/constants'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      publishedTime: post.date,
      authors: [AUTHOR_NAME],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const mdxSource = await serialize(post.content)

  return (
    <main className="min-h-screen">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          datePublished: post.date,
          description: post.excerpt,
          author: { '@type': 'Person', name: AUTHOR_NAME },
          url: `${SITE_URL}/blog/${post.slug}`,
        }}
      />
      <Header />
      <BlogPostView post={post} mdxSource={mdxSource} />
      <Footer />
    </main>
  )
}
