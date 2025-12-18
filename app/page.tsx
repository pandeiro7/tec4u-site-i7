import { Hero } from "@/components/sections/hero"
import { BrandsMarquee } from "@/components/sections/brands-marquee"
import { SolutionsGrid } from "@/components/sections/solutions-grid"
import { StatsBar } from "@/components/sections/stats-bar"
import { MethodSection } from "@/components/sections/method-section"
import { AboutCTA } from "@/components/sections/about-cta"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { PartnersMarquee } from "@/components/sections/partners-marquee"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

import {
  heroData,
  brandsData,
  solutionsData,
  statsData,
  methodData,
  aboutData,
  projectsData,
  partnersData,
  testimonialsData,
} from "@/data/home"

export default function HomePage() {
  return (
    <>
      <Hero
        badge={heroData.badge}
        title={heroData.title}
        titleBold={heroData.titleBold}
        titleEnd={heroData.titleEnd}
        description={heroData.description}
        roleBadges={heroData.roleBadges}
        statCards={heroData.statCards}
      />

      <BrandsMarquee brands={brandsData} />

      <SolutionsGrid
        badge="soluções"
        title="Inovação, transformação e eficiência"
        titleHighlight="ao seu alcance"
        description="Como podemos te ajudar hoje? Clique nos botões abaixo e explore a nossa gama de soluções especializadas em cada área do digital."
        solutions={solutionsData}
      />

      <StatsBar stats={statsData} />

      <MethodSection {...methodData} />

      <AboutCTA {...aboutData} />

      <ProjectsGrid {...projectsData} />

      <PartnersMarquee {...partnersData} />

      <TestimonialsSection {...testimonialsData} />
    </>
  )
}
