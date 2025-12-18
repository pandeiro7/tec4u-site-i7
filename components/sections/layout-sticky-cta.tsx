"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface LayoutStickyCtaProps {
  name: string
  image: string
  price: string
  onBuyClick?: () => void
  translations: {
    buyButton: string
  }
}

export function LayoutStickyCta({ name, image, price, onBuyClick, translations }: LayoutStickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 animate-in slide-in-from-bottom">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 hidden sm:block">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">R$ {price}</p>
            </div>
          </div>

          <Button size="lg" onClick={onBuyClick}>
            {translations.buyButton}
          </Button>
        </div>
      </div>
    </div>
  )
}
