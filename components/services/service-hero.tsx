"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface QuickLink {
  id: string
  title: string
  description: string
}

interface ServiceHeroProps {
  badge: string
  title: {
    normal: string
    highlight: string
    final?: string
  }
  description: string
  image: string
  quickLinks?: QuickLink[]
}

export function ServiceHero({ badge, title, description, image, quickLinks }: ServiceHeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 uppercase tracking-wide">
              {badge}
            </span>

            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              {title.normal + " "} 
              <span className="font-normal"> {title.highlight} {title.final && (
                <>
                  <br />
                  {title.final}
                </>
              )}</span>
              
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">{description}</p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                CONTATO
                <ArrowUpRight className="w-5 h-5" />
              </Link>

              {quickLinks && quickLinks.length > 0 && (
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full transition-all duration-300 border border-gray-200 shadow-md hover:shadow-lg"
                >
                  ver soluções
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={image || "/placeholder.svg"}
              alt={badge}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Quick Links */}
        {quickLinks && quickLinks.length > 0 && (
          <div id="solutions" className="grid md:grid-cols-3 gap-6 mt-20">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group p-6 bg-white hover:bg-gray-50 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 text-left"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">{link.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{link.description}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
