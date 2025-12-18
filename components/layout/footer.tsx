import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Phone } from "lucide-react"
import { navigationData, footerData } from "@/data/navigation"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#E61755] via-[#C0297B] to-[#8454F4] text-white overflow-hidden">
      <div className="container relative z-10 px-4 py-12 md:px-6 md:py-16">
        {/* Main content */}
        <div className="grid gap-12 md:grid-cols-[auto_1fr_auto] md:items-start">
          {/* Logo */}
          <div className="flex flex-col items-start gap-2">
            <Image
              src="/logo-white.svg"
              alt="TEC4U Digital"
              width={180}
              height={50}
              className="h-auto w-[140px] md:w-[180px]"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium md:justify-center md:text-base">
            {navigationData.footerLinks.map((link, index) => (
              <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-80">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href={navigationData.social[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href={navigationData.social[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href={navigationData.social[2].href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="WhatsApp"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 space-y-2 border-t border-white/20 pt-8 text-center text-sm md:text-base">
          <p className="opacity-90">{footerData.copyright}</p>
          <p className="opacity-75">{footerData.address}</p>
        </div>
      </div>
    </footer>
  )
}
