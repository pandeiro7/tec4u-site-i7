import { ServiceHero } from "@/components/services/service-hero"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { consultoriaData } from "@/data/services/consultoria"

export const metadata = {
  title: "Consultoria | TEC4U Digital",
  description:
    "Transforme seus desafios em oportunidades. Consultoria especializada em e-commerce, negócios, marketing e tecnologia.",
}

export default function ConsultoriaPage() {
  return (
    <main>
      <ServiceHero {...consultoriaData.hero} />

      {consultoriaData.sections.map((section, index) => (
        <ServiceSection key={section.id} {...section} isReversed={index % 2 !== 0} />
      ))}

      <ServiceCTA />
    </main>
  )
}
