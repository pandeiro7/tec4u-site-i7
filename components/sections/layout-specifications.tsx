import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface LayoutSpecificationsProps {
  platform: string
  styles: string[]
  features: string[]
  support: string
  galleryImage: string
  translations: {
    readyToLaunch: string
    support: string
    supportText: string
    compatibleWith: string
    styles: string
    templateFeatures: string
  }
}

export function LayoutSpecifications({
  platform,
  styles,
  features,
  support,
  galleryImage,
  translations,
}: LayoutSpecificationsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Structure Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{translations.readyToLaunch}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{support}</p>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">{translations.support}</h3>
              <p className="text-muted-foreground">{translations.supportText}</p>
            </div>
          </div>

          {/* Gallery Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image src={galleryImage || "/placeholder.svg"} alt="Layout Gallery" fill className="object-cover" />
          </div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Platform */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {translations.compatibleWith}
              </h3>
              <div className="flex items-center gap-2">
                <Image src="/nuvemshop-logo.png" alt={platform} width={24} height={24} />
                <span className="font-medium">{platform}</span>
              </div>
            </div>

            {/* Styles */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {translations.styles}
              </h3>
              <div className="flex flex-wrap gap-2">
                {styles.map((style, index) => (
                  <Badge key={index} variant="outline">
                    {style}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {translations.templateFeatures}
              </h3>
              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <Badge key={index} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
