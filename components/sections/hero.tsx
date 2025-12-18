import { FloatingBadge } from "@/components/ui/floating-badge"
import { StatCard } from "@/components/ui/stat-card"
import { Star } from "lucide-react"

interface HeroProps {
  badge: string
  title: string
  titleBold: string
  titleEnd: string
  description: string
  roleBadges: Array<{
    label: string
    position: string
  }>
  statCards: Array<{
    type: string
    title: string
    score?: string
    description?: string
    count?: string
    avatars?: string[]
    rating?: number
    chartData?: Array<{ label: string; value: number }>
  }>
}

export function Hero({ badge, title, titleBold, titleEnd, description, roleBadges, statCards }: HeroProps) {
  const speedCard = statCards.find((card) => card.type === "speed")
  const satisfactionCard = statCards.find((card) => card.type === "satisfaction")
  const salesCard = statCards.find((card) => card.type === "sales")

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-purple-300 py-16 md:py-24">
      <div className="container relative z-10 px-4 md:px-6">
        {/* Top Text Content */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-700">{badge}</p>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            {title}
            <br />
            <span className="font-extrabold">{titleBold}</span> {titleEnd}
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-pretty text-base leading-relaxed text-gray-700 md:text-lg">
            {description}
          </p>
        </div>

        {/* Main Content Area with iPhone and Cards */}
        <div className="relative mx-auto mt-16 h-[600px] max-w-6xl md:h-[700px]">
          {/* Floating Role Badges */}
          <FloatingBadge className="absolute left-[5%] top-[15%] hidden md:flex">Designer</FloatingBadge>
          <FloatingBadge className="absolute right-[10%] top-[5%] hidden lg:flex">Developer</FloatingBadge>
          <FloatingBadge className="absolute left-[2%] top-[45%] hidden lg:flex">Project Manager</FloatingBadge>
          <FloatingBadge className="absolute bottom-[25%] left-[8%] hidden md:flex">Copywriter</FloatingBadge>
          <FloatingBadge className="absolute bottom-[15%] right-[5%] hidden lg:flex">Customer Success</FloatingBadge>

          {/* Central iPhone Mockup */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[480px] w-[240px] md:h-[580px] md:w-[290px]">
              <img
                src="/images/phone-mockup.png"
                alt="iPhone Mockup"
                className="h-full w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Stat Cards - Speed (Top Left) */}
          {speedCard && (
            <StatCard title={speedCard.title} className="absolute left-0 top-[20%] w-[280px] md:left-[5%] md:top-[35%]">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20">
                  <svg className="h-20 w-20 -rotate-90 transform" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="25.12"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-500">{speedCard.score}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{speedCard.description}</p>
                </div>
              </div>
            </StatCard>
          )}

          {/* Stat Cards - Satisfaction (Top Right) */}
          {satisfactionCard && (
            <StatCard
              title={satisfactionCard.title}
              className="absolute right-0 top-[10%] w-[280px] md:right-[5%] md:top-[15%]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {satisfactionCard.avatars?.slice(0, 4).map((avatar, i) => (
                    <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                      <img
                        src={avatar || "/placeholder.svg"}
                        alt={`Cliente ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <span className="ml-2 text-lg font-bold text-gray-900">{satisfactionCard.count}</span>
                </div>
                <div>
                  <p className="mb-2 text-xs text-gray-600">Experiência de compra:</p>
                  <div className="flex gap-1">
                    {Array.from({ length: satisfactionCard.rating || 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                </div>
              </div>
            </StatCard>
          )}

          {/* Stat Cards - Sales (Bottom Right) */}
          {salesCard && (
            <StatCard
              title={salesCard.title}
              className="absolute bottom-[5%] right-0 w-[300px] md:bottom-[15%] md:right-[2%]"
            >
              <div className="space-y-4">
                <div className="flex h-32 items-end justify-between gap-2">
                  {salesCard.chartData?.map((item, i) => {
                    const isAfter = i >= 2
                    const color = isAfter ? "bg-gradient-to-t from-pink-500 to-purple-500" : "bg-gray-400"
                    const height = `${item.value}%`
                    return (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <div className={`w-full rounded-t ${color}`} style={{ height }} />
                      </div>
                    )
                  })}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-gray-400" />
                    <span className="text-gray-600">Antes da TEC4U</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-gradient-to-r from-pink-500 to-purple-500" />
                    <span className="text-gray-600">Depois da TEC4U</span>
                  </div>
                </div>
              </div>
            </StatCard>
          )}
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform hover:scale-110"
      >
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </section>
  )
}
