"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface LayoutDetailHeroProps {
  name: string
  category: string
  description: string
  price: string
  heroImage: string
  desktopImage: string
  mobileImage: string
  platform: string
  onBuyClick?: () => void
  translations: {
    buyButton: string
    desktop: string
    mobile: string
  }
}

export function LayoutDetailHero({
  name,
  category,
  description,
  price,
  heroImage,
  desktopImage,
  mobileImage,
  platform,
  onBuyClick,
  translations,
}: LayoutDetailHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Platform Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="text-sm font-medium">
            <Image src="/nuvemshop-logo.png" alt={platform} width={20} height={20} className="mr-2" />
            {platform}
          </Badge>
        </div>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{category}</p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">{name}</h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>

            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-4xl font-bold">{price}</span>
            </div>

            <Button size="lg" className="text-base px-8" onClick={onBuyClick}>
              {translations.buyButton}
            </Button>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={heroImage || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Desktop/Mobile Preview */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {translations.desktop}
            </h3>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src={desktopImage || "/placeholder.svg"} alt={`${name} - Desktop`} fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {translations.mobile}
            </h3>
            <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image src={mobileImage || "/placeholder.svg"} alt={`${name} - Mobile`} fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
