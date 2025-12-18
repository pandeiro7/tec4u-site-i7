import { Monitor, Megaphone, Users, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SolutionCard } from "@/components/ui/solution-card"

interface Solution {
  id: string
  title: string
  description: string
  href: string
}

interface SolutionsGridProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  solutions: Solution[]
}

const solutionConfig = {
  projetos: {
    icon: <Monitor className="h-6 w-6 text-cyan-500" />,
    graphicPath: "/icons/graphic-tech.svg",
    iconBgColor: "bg-cyan-50",
  },
  marketing: {
    icon: <Megaphone className="h-6 w-6 text-pink-600" />,
    graphicPath: "/icons/graphic-marketing.svg",
    iconBgColor: "bg-pink-50",
  },
  consultoria: {
    icon: <Users className="h-6 w-6 text-purple-600" />,
    graphicPath: "/icons/graphic-consultoria.svg",
    iconBgColor: "bg-purple-50",
  },
  operacoes: {
    icon: <Zap className="h-6 w-6 text-green-600" />,
    graphicPath: "/icons/graphic-operacoes.svg",
    iconBgColor: "bg-green-50",
  },
}

export function SolutionsGrid({ badge, title, titleHighlight, description, solutions }: SolutionsGridProps) {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <Badge
            variant="outline"
            className="border-gray-300 text-xs font-medium uppercase tracking-wider text-gray-700"
          >
            {badge}
          </Badge>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            {title} <span className="font-bold">{titleHighlight}</span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-gray-600 md:text-lg">{description}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {solutions.map((solution) => {
            const config = solutionConfig[solution.id as keyof typeof solutionConfig]
            return (
              <SolutionCard
                key={solution.id}
                id={solution.id}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                icon={config.icon}
                graphicPath={config.graphicPath}
                iconBgColor={config.iconBgColor}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
