import Link from "next/link"
import { blogPosts } from "@/data/blog/posts"
import { NewsletterSection } from "@/components/blog/newsletter-section"

export default function BlogPage() {
  const posts = Object.values(blogPosts)

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 mb-6">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">
              Insights sobre digital commerce e transformação
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Fique por dentro das últimas tendências, cases e dicas para levar seu negócio digital ao próximo nível.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] bg-neutral-200 overflow-hidden">
                  <img
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700 mb-3">
                    {post.category}
                  </span>

                  <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  )
}
