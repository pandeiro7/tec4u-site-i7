import Image from "next/image"

interface Partner {
  name: string
  logo: string
}

interface PartnersSectionProps {
  title: string
  partners: Partner[]
}

export function PartnersSection({ title, partners }: PartnersSectionProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
