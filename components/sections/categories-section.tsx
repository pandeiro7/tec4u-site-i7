import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface CategoriesSectionProps {
  title: string
  description: string
  categories: Array<{
    id: string
    name: string
    image: string
    href: string
  }>
}

export function CategoriesSection({ title, description, categories }: CategoriesSectionProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">{title}</h2>
          <p className="text-lg leading-relaxed text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-balance text-xl font-bold text-white md:text-2xl">{category.name}</h3>
              </div>
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5 text-gray-900" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
