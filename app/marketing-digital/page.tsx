import { ServiceHero } from "@/components/services/service-hero"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { marketingData } from "@/data/services/marketing"

export const metadata = {
  title: "Marketing Digital | TEC4U Digital",
  description:
    "Solução completa para impulsionar suas vendas. Conteúdo, mídia paga e design estratégico para seu negócio.",
}

export default function MarketingDigitalPage() {
  return (
    <main>
      <ServiceHero {...marketingData.hero} />

      {marketingData.sections.map((section, index) => (
        <ServiceSection key={section.id} {...section} isReversed={index % 2 !== 0} />
      ))}

      <ServiceCTA />
    </main>
  )
}
