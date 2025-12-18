"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface Feature {
  title: string
  description: string
}

interface Platform {
  name: string
  description: string
  logo: string
}

interface ServiceSectionProps {
  id: string
  badge: string
  title: {
    normal: string
    highlight: string
    final?: string
  }
  description: string
  ctaText: string
  image: string
  features?: Feature[]
  platforms?: Platform[]
  platformsIntro?: string
  platformsTitle?: string
  isReversed?: boolean
}

export function ServiceSection({
  id,
  badge,
  title,
  description,
  ctaText,
  image,
  features,
  platforms,
  platformsIntro,
  platformsTitle,
  isReversed = false,
}: ServiceSectionProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 uppercase tracking-wide">
              {badge}
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              {title.normal} <span className="inline-block">{title.highlight}</span>
              {title.final && (
                <>
                  <br />
                  {title.final}
                </>
              )}
            </h2>

            {/* Features Grid */}
            {features && features.length > 0 && (
              <div className="grid gap-6 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}

            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>

            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-6"
            >
              {ctaText}
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <div
            className={`relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl ${isReversed ? "lg:order-1" : ""}`}
          >
            <Image src={image || "/placeholder.svg"} alt={badge} fill className="object-cover" />
          </div>
        </div>

        {/* Platforms Section */}
        {platforms && platforms.length > 0 && (
          <div className="mt-20">
            {platformsIntro && (
              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">{platformsIntro}</p>
            )}

            {platformsTitle && <h3 className="text-3xl font-bold text-center mb-12">{platformsTitle}</h3>}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white hover:bg-gray-50 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <Image
                        src={platform.logo || "/placeholder.svg"}
                        alt={platform.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">{platform.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{platform.description}</p>
                  <button className="text-sm font-semibold text-pink-600 hover:text-pink-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Connect app
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
