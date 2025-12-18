import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LayoutsGalleryProps {
  title: string
  description: string
  layouts: Array<{
    id: string
    name: string
    thumbnail: string
    category: string
    categoryIcon: string
    price: string
    originalPrice: string
    href: string
  }>
}

export function LayoutsGallery({ title, description, layouts }: LayoutsGalleryProps) {
  return (
    <section id="galeria" className="bg-gray-50 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">{title}</h2>
          <p className="text-lg leading-relaxed text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {layouts.map((layout) => (
            <div
              key={layout.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
            >
              <Link href={layout.href} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={layout.thumbnail || "/placeholder.svg"}
                    alt={layout.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />

                  {/* Ver detalhes button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="group/btn gap-2 bg-white/95 backdrop-blur-sm hover:bg-white"
                    >
                      ver detalhes
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 overflow-hidden rounded-lg">
                    <img
                      src={layout.categoryIcon || "/placeholder.svg"}
                      alt={layout.category}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{layout.category}</span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">{layout.name}</h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500">R$</span>
                  <span className="text-3xl font-bold text-gray-900">R$ {layout.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
