import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface PurposeSectionProps {
  data: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    bannerTitle: string
    bannerSubtitle: string
    bannerImage: string
  }
}

export function PurposeSection({ data }: PurposeSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-6 text-center">
            <Badge variant="outline" className="border-gray-300 text-xs uppercase tracking-wider">
              {data.badge}
            </Badge>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              {data.title} <span className="text-balance">{data.titleHighlight}</span>
            </h2>

            <p className="text-pretty text-lg text-gray-600 leading-relaxed">{data.description}</p>
          </div>

          {/* H2H Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 md:p-16">
            <div className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
              {/* Left: Image */}
              <div className="relative">
                <Image
                  src={data.bannerImage || "/placeholder.svg"}
                  alt="H2H - Human to Human"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </div>

              {/* Right: Text */}
              <div className="space-y-4 text-white">
                <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
                  {data.bannerTitle.split("").map((char, i) => (
                    <span key={i} className={char === "2" ? "text-cyan-400" : ""}>
                      {char}
                    </span>
                  ))}
                </h3>
                <p className="text-2xl md:text-3xl font-semibold text-balance">{data.bannerSubtitle}</p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
