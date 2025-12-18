import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface LayoutsHeroProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  ctaText: string
  ctaHref: string
  platforms: Array<{
    name: string
    logo: string
    status: string
  }>
  previewImages: string[]
}

export function LayoutsHero({
  badge,
  title,
  titleHighlight,
  description,
  ctaText,
  ctaHref,
  platforms,
  previewImages,
}: LayoutsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-purple-300 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-700">{badge}</p>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            {title}
            <br />
            <span className="font-extrabold">{titleHighlight}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-pretty text-base leading-relaxed text-gray-700 md:text-lg">
            {description}
          </p>

          <Button asChild size="lg" className="group mb-12 bg-gray-900 hover:bg-gray-800">
            <Link href={ctaHref}>
              {ctaText}
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>

          {/* Platforms */}
          <div className="mb-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-700">Funciona com:</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex flex-col items-center gap-2">
                  <div className="relative h-12 w-32 overflow-hidden rounded-lg bg-white/80 p-2 backdrop-blur-sm">
                    <img
                      src={platform.logo || "/placeholder.svg"}
                      alt={platform.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide ${
                      platform.status === "DISPONÍVEL" ? "text-green-600" : "text-gray-600"
                    }`}
                  >
                    {platform.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview Images */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {previewImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-105"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Preview ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
