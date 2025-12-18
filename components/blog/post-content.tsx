import { Share2, LinkIcon } from "lucide-react"
import type { JSX } from "react"

interface ContentBlock {
  type: "paragraph" | "heading" | "quote" | "image" | "list"
  content: string | string[]
  author?: string
  level?: number
}

interface PostContentProps {
  content: ContentBlock[]
}

export function PostContent({ content }: PostContentProps) {
  return (
    <article className="container mx-auto px-4 mb-16 md:mb-24">
      <div className="max-w-3xl mx-auto">
        {/* Share Button */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-neutral-200">
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            <LinkIcon className="w-4 h-4" />
            Copiar Link
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            <Share2 className="w-4 h-4" />
            Compartilhar
          </button>
        </div>

        {/* Content Blocks */}
        <div className="prose prose-lg max-w-none">
          {content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-[17px] md:text-lg text-neutral-700 leading-[1.7] mb-6 font-normal">
                    {block.content}
                  </p>
                )

              case "heading":
                const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements
                return (
                  <HeadingTag
                    key={index}
                    className="text-2xl md:text-[28px] font-bold text-neutral-900 mt-12 mb-6 leading-tight"
                  >
                    {block.content}
                  </HeadingTag>
                )

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-12 pl-8 border-l-[3px] border-primary bg-gradient-to-r from-pink-50/50 to-transparent py-6 pr-6 rounded-r-lg"
                  >
                    <p className="text-[19px] md:text-xl font-medium text-neutral-900 mb-4 leading-relaxed">
                      {block.content}
                    </p>
                    {block.author && (
                      <cite className="text-sm font-semibold text-primary not-italic block">— {block.author}</cite>
                    )}
                  </blockquote>
                )

              case "image":
                return (
                  <figure key={index} className="my-12">
                    <img
                      src={(block.content as string) || "/placeholder.svg"}
                      alt=""
                      className="w-full rounded-xl shadow-md"
                    />
                  </figure>
                )

              case "list":
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-3">
                    {(block.content as string[]).map((item, i) => (
                      <li key={i} className="text-[17px] md:text-lg text-neutral-700 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )

              default:
                return null
            }
          })}
        </div>
      </div>
    </article>
  )
}
