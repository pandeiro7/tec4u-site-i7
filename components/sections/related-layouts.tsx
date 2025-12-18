import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface RelatedLayout {
  id: string
  name: string
  image: string
  price: string
  slug: string
}

interface RelatedLayoutsProps {
  layouts: RelatedLayout[]
  translations: {
    seeAlso: string
    viewDetails: string
  }
}

export function RelatedLayouts({ layouts, translations }: RelatedLayoutsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{translations.seeAlso}</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {layouts.map((layout) => (
            <Link
              key={layout.id}
              href={`/layout/${layout.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video">
                <Image src={layout.image || "/placeholder.svg"} alt={layout.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-medium">
                    {translations.viewDetails}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">{layout.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-2xl font-bold">{layout.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
