import { Zap, Palette, Rocket, Settings } from "lucide-react"

interface LayoutsBenefitsProps {
  badge: string
  title: string
  titleHighlight: string
  benefits: Array<{
    icon: string
    title: string
    description: string
  }>
}

const iconMap = {
  zap: Zap,
  palette: Palette,
  rocket: Rocket,
  settings: Settings,
}

export function LayoutsBenefits({ badge, title, titleHighlight, benefits }: LayoutsBenefitsProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-600">{badge}</p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            {title} <span className="text-purple-600">{titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap] || Zap
            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-purple-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 transition-transform group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="leading-relaxed text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
