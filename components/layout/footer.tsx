"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Phone } from "lucide-react"
import { useTranslations } from "@/lib/i18n/hooks"

export function Footer() {
  const navigationData = useTranslations("navigation")
  const footerData = useTranslations("footer")

  return (
    <footer className="relative bg-gradient-to-br from-[#E61755] via-[#C0297B] to-[#8454F4] text-white overflow-hidden">
      <div className="container relative z-10 px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 md:grid-cols-[auto_1fr_auto] md:items-start">
          <div className="flex flex-col items-start gap-2">
            <Image
              src="/logo-white.svg"
              alt="TEC4U Digital"
              width={180}
              height={50}
              className="h-auto w-[140px] md:w-[180px]"
            />
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium md:justify-center md:text-base">
            {navigationData.mainMenu.map((link) => (
              <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-80">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/tec4udigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/tec4u-digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://wa.me/5511973127075"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="WhatsApp"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/20 pt-8 text-center text-sm md:text-base">
          <p className="opacity-90">{footerData.copyright}</p>
          <p className="opacity-75">{footerData.address}</p>
        </div>
      </div>
    </footer>
  )
}
