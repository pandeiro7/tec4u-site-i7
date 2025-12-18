import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface Partner {
  name: string
  logo: string
}

interface PartnersMarqueeProps {
  title: string
  partners: Partner[]
}

export function PartnersMarquee({ title, partners }: PartnersMarqueeProps) {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="border-gray-900/10 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-700"
          >
            {title}
          </Badge>
        </div>

        {/* Partners grid */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 md:gap-12">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-1-${index}`}
                className="flex h-20 min-w-[140px] items-center justify-center rounded-lg bg-white/80 px-8 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 md:min-w-[180px]"
              >
                <Image
                  src={partner.logo || `/placeholder.svg?height=50&width=120&query=${partner.name} logo`}
                  alt={partner.name}
                  width={120}
                  height={50}
                  className="h-auto w-full max-w-[120px] object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-2-${index}`}
                className="flex h-20 min-w-[140px] items-center justify-center rounded-lg bg-white/80 px-8 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 md:min-w-[180px]"
              >
                <Image
                  src={partner.logo || `/placeholder.svg?height=50&width=120&query=${partner.name} logo`}
                  alt={partner.name}
                  width={120}
                  height={50}
                  className="h-auto w-full max-w-[120px] object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
