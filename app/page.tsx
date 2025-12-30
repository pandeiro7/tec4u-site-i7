"use client"

import { Hero } from "@/components/sections/hero"
import { BrandsMarquee } from "@/components/sections/brands-marquee"
import { SolutionsGrid } from "@/components/sections/solutions-grid"
import { StatsBar } from "@/components/sections/stats-bar"
import { MethodSection } from "@/components/sections/method-section"
import { AboutCTA } from "@/components/sections/about-cta"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { PartnersMarquee } from "@/components/sections/partners-marquee"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { useTranslations } from "@/lib/i18n/hooks"
import { brandsData, projectsData as fallbackProjectsData, partnersData, testimonialsData } from "@/data/home"

export default function HomePage() {
  const homeData = useTranslations("home")

  return (
    <>
      <Hero
        badge={homeData.hero.badge}
        title={homeData.hero.title}
        titleBold={homeData.hero.titleBold}
        titleEnd={homeData.hero.titleEnd}
        description={homeData.hero.description}
        roleBadges={fallbackProjectsData.projects.slice(0, 5).map((p, i) => ({
          label: ["Designer", "Developer", "Project Manager", "Copywriter", "Customer Success"][i],
          position: ["top-left", "top-right", "middle-left", "bottom-left", "bottom-right"][i],
        }))}
        statCards={[
          {
            type: "speed",
            title: homeData.stats[0]?.value === "80+" ? "SITES MAIS RÁPIDOS" : "FASTER SITES",
            score: "90+",
            description: "Desempenho no Google PageSpeed",
          },
          {
            type: "satisfaction",
            title: homeData.stats[2]?.label?.toUpperCase() || "CLIENTES MAIS SATISFEITOS",
            count: "+6.435",
            avatars: [
              "/placeholder.svg?height=40&width=40",
              "/placeholder.svg?height=40&width=40",
              "/placeholder.svg?height=40&width=40",
              "/placeholder.svg?height=40&width=40",
            ],
            rating: 5,
          },
          {
            type: "sales",
            title: "VENDAS AUMENTADAS",
            chartData: [
              { label: "R$ 0,00", value: 0 },
              { label: "R$ 10K", value: 20 },
              { label: "R$ 20K", value: 35 },
              { label: "R$ 30K", value: 55 },
              { label: "R$ 40K", value: 80 },
            ],
          },
        ]}
      />

      <BrandsMarquee brands={brandsData} />

      <SolutionsGrid
        badge={homeData.solutions[0]?.id === "projetos" ? "soluções" : "solutions"}
        title={
          homeData.solutions[0]?.id === "projetos"
            ? "Inovação, transformação e eficiência"
            : "Innovation, transformation and efficiency"
        }
        titleHighlight={homeData.solutions[0]?.id === "projetos" ? "ao seu alcance" : "within your reach"}
        description={
          homeData.solutions[0]?.id === "projetos"
            ? "Como podemos te ajudar hoje? Clique nos botões abaixo e explore a nossa gama de soluções especializadas em cada área do digital."
            : "How can we help you today? Click the buttons below and explore our range of specialized solutions in each area of digital."
        }
        solutions={homeData.solutions}
      />

      <StatsBar stats={homeData.stats} />

      <MethodSection {...homeData.method} />

      <AboutCTA {...homeData.about} />

      <ProjectsGrid {...homeData.projects} projects={fallbackProjectsData.projects} />

      <PartnersMarquee {...partnersData} />

      {/* <TestimonialsSection {...testimonialsData} /> */}
    </>
  )
}
