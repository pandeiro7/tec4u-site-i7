import { ServiceHero } from "@/components/services/service-hero"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { operacoesData } from "@/data/services/operacoes"

export const metadata = {
  title: "Operações | TEC4U Digital",
  description:
    "Otimizando o presente, preparando o futuro. Soluções em operações para e-commerce, marketing e gestão de processos.",
}

export default function OperacoesPage() {
  return (
    <main>
      <ServiceHero {...operacoesData.hero} />

      {operacoesData.sections.map((section, index) => (
        <ServiceSection key={section.id} {...section} isReversed={index % 2 !== 0} />
      ))}

      <ServiceCTA />
    </main>
  )
}
