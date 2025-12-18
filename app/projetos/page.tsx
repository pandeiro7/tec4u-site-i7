import { ServiceHero } from "@/components/services/service-hero"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { projetosData } from "@/data/services/projetos"

export const metadata = {
  title: "Tecnologias & Projetos | TEC4U Digital",
  description:
    "Soluções personalizadas e inovadoras, transformando suas ideias em realidade. Desenvolvimento de sites, e-commerce e sistemas.",
}

export default function ProjetosPage() {
  return (
    <main>
      <ServiceHero {...projetosData.hero} />

      {projetosData.sections.map((section, index) => (
        <ServiceSection key={section.id} {...section} isReversed={index % 2 !== 0} />
      ))}

      <ServiceCTA />
    </main>
  )
}
