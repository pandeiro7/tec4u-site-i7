import Link from "next/link"
import { blogPosts } from "@/data/blog/posts"

interface RelatedPostsProps {
  postSlugs: string[]
}

export function RelatedPosts({ postSlugs }: RelatedPostsProps) {
  const posts = postSlugs.map((slug) => blogPosts[slug]).filter(Boolean)

  if (posts.length === 0) return null

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">Outras postagens:</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
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

                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {post.excerpt && <p className="text-sm text-neutral-600 line-clamp-2">{post.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
