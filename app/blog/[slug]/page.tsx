import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog/posts"
import { PostHeader } from "@/components/blog/post-header"
import { PostContent } from "@/components/blog/post-content"
import { RelatedPosts } from "@/components/blog/related-posts"
import { NewsletterSection } from "@/components/blog/newsletter-section"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return {
    title: `${post.title} | TEC4U Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-white">
      <PostHeader
        category={post.category}
        title={post.title}
        author={post.author}
        publishedDate={post.publishedDate}
        readTime={post.readTime}
        featuredImage={post.featuredImage}
      />

      <PostContent content={post.content} />

      <NewsletterSection />

      {post.relatedPosts && post.relatedPosts.length > 0 && <RelatedPosts postSlugs={post.relatedPosts} />}
    </main>
  )
}
