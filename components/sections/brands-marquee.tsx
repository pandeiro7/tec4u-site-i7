import Image from "next/image"

interface Brand {
  name: string
  logo: string
}

interface BrandsMarqueeProps {
  brands: Brand[]
}

export function BrandsMarquee({ brands }: BrandsMarqueeProps) {
  return (
    <section className="border-y border-border bg-muted py-12">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 md:gap-16">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex min-w-[120px] items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
