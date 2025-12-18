import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PostHeaderProps {
  category: string
  title: string
  author: {
    name: string
    role?: string
  }
  publishedDate: string
  readTime: string
  featuredImage: string
}

export function PostHeader({ category, title, author, publishedDate, readTime, featuredImage }: PostHeaderProps) {
  return (
    <header className="relative">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <span className="inline-block px-4 py-1 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 mb-6">
            {category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">{title}</h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <span className="font-medium text-neutral-900">{author.name}</span>
            <span>•</span>
            <time>{publishedDate}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="max-w-5xl mx-auto">
          <img src={featuredImage || "/placeholder.svg"} alt={title} className="w-full h-auto rounded-2xl shadow-lg" />
        </div>
      </div>
    </header>
  )
}
