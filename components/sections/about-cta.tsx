import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AboutCTAProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  ctas: Array<{
    text: string
    href: string
    variant: "primary" | "secondary"
  }>
}

export function AboutCTA({ badge, title, titleHighlight, description, ctas }: AboutCTAProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Decorative */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-4 flex items-center justify-center rounded-2xl border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary">10+</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit text-xs uppercase tracking-wider">
                {badge}
              </Badge>

              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {title} <span className="text-primary">{titleHighlight}</span>
              </h2>

              <p className="text-pretty text-lg text-muted-foreground">{description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {ctas.map((cta, index) => (
                <Button
                  key={index}
                  asChild
                  variant={cta.variant === "primary" ? "default" : "outline"}
                  size="lg"
                  className={`gap-2 ${index == 0 ? "rounded-full bg-gradient-to-r from-[#8454F4] to-[#E61755]" : "uppercase"}`}
                >
                  <Link href={cta.href}>
                    {cta.text}
                    {cta.variant === "primary" && <ArrowUpRight className="h-4 w-4" />}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
