import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Monitor, Users, Zap, Megaphone, ArrowRight } from "lucide-react"

interface PillarsSectionProps {
  data: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    pillars: Array<{
      id: string
      icon: string
      title: string
      description: string
      link: { text: string; href: string }
      color: "cyan" | "purple" | "green" | "pink"
    }>
  }
}

const iconMap = {
  monitor: Monitor,
  users: Users,
  zap: Zap,
  megaphone: Megaphone,
}

const colorStyles = {
  cyan: {
    bg: "bg-[#02CAF6]",
    text: "text-gray-800",
    bgLight: "bg-cyan-50",
  },
  purple: {
    bg: "bg-[#8454F4]",
    text: "text-gray-800",
    bgLight: "bg-purple-50",
  },
  green: {
    bg: "bg-[#01D859]",
    text: "text-gray-800",
    bgLight: "bg-green-50",
  },
  pink: {
    bg: "bg-[#E61755]",
    text: "text-gray-800",
    bgLight: "bg-pink-50",
  },
}

export function PillarsSection({ data }: PillarsSectionProps) {
  return (
    <section
      id="pilares"
      className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 py-20 md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Sticky content */}
          <div className="space-y-6 lg:sticky lg:top-32 lg:h-fit">
            <Badge
              variant="outline"
              className="border-gray-900/10 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-700"
            >
              {data.badge}
            </Badge>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              {data.title} <span className="font-bold text-gray-900">{data.titleHighlight}</span>
            </h2>

            <p className="text-pretty text-lg leading-relaxed text-gray-600">{data.description}</p>
          </div>

          {/* Right side - Scrolling pillar cards */}
          <div className="space-y-8">
            {data.pillars.map((pillar) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap]
              const styles = colorStyles[pillar.color]

              return (
                <div
                  key={pillar.id}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  {/* Icon circle */}
                  <div className="mb-6 inline-flex">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full ${styles.bg} transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-900">{pillar.title}</h3>

                    <p className="text-pretty text-base leading-relaxed text-gray-700">{pillar.description}</p>

                    <Link
                      href={pillar.link.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-gray-600"
                    >
                      {pillar.link.text}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
