import { AboutHero } from "@/components/sections/about-hero"
import { PurposeSection } from "@/components/sections/purpose-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { sobreHeroData, purposeData, pillarsData } from "@/data/sobre"

export const metadata = {
  title: "Sobre Nós - TEC4U Digital",
  description:
    "Mais de uma década de história no mundo digital. Conheça nossa história, valores e pilares estratégicos.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero data={sobreHeroData} />
      <PurposeSection data={purposeData} />
      <PillarsSection data={pillarsData} />
    </>
  )
}
