import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface AboutHeroProps {
  data: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    ctas: Array<{
      text: string
      href: string
      variant: "primary" | "secondary"
    }>
    image: string
  }
}

export function AboutHero({ data }: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Phone mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Background gradient blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-teal-300/20 to-green-400/20 blur-3xl" />

              <div className="relative">
                <Image
                  src={data.image || "/placeholder.svg"}
                  alt="TEC4U Dashboard"
                  width={400}
                  height={600}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <Badge variant="outline" className="border-gray-300 text-xs uppercase tracking-wider">
              {data.badge}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {data.title} <span className="text-balance">{data.titleHighlight}</span>
            </h1>

            <p className="text-pretty text-lg text-gray-600 md:text-xl leading-relaxed">{data.description}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              {data.ctas.map((cta, index) => (
                <Button
                  key={index}
                  asChild
                  variant={cta.variant === "primary" ? "default" : "outline"}
                  size="lg"
                  className={
                    cta.variant === "primary"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      : ""
                  }
                >
                  <Link href={cta.href}>
                    {cta.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
