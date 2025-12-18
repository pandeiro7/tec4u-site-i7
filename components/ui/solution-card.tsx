import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"

interface SolutionCardProps {
  id: string
  title: string
  description: string
  href: string
  icon: ReactNode
  graphicPath: string
  iconBgColor: string
  children?: ReactNode
}

export function SolutionCard({ id, title, description, href, icon, graphicPath, iconBgColor }: SolutionCardProps) {
  return (
    <Link href={href} className="group">
      <div className="relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl">
        {/* Icon - Top Left */}
        <div
          className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor} transition-transform group-hover:scale-110`}
        >
          {icon}
        </div>

        {/* Graphic - Top Right (positioned absolutely, overflow hidden by card) */}
        <div className="absolute right-0 top-0 opacity-100 transition-opacity group-hover:opacity-90">
          <Image src={graphicPath || "/placeholder.svg"} alt="" width={90} height={90} className="object-contain" />
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">{title}</h3>
          <p className="text-pretty text-sm leading-relaxed text-gray-600 md:text-base">{description}</p>
        </div>
      </div>
    </Link>
  )
}
