import { LayoutsHero } from "@/components/sections/layouts-hero"
import { CategoriesSection } from "@/components/sections/categories-section"
import { LayoutsGallery } from "@/components/sections/layouts-gallery"
import { LayoutsBenefits } from "@/components/sections/layouts-benefits"
import { AboutCTA } from "@/components/sections/about-cta"
import {
  layoutsHeroData,
  categoriesData,
  layoutsGalleryData,
  layoutsBenefitsData,
  layoutsCtaData, // Added layoutsCtaData import
} from "@/data/layouts"

export const metadata = {
  title: "Layouts Profissionais para E-commerce | TEC4U Digital",
  description:
    "Explore nossa coleção exclusiva de layouts prontos para e-commerce, desenvolvidos com foco em usabilidade, velocidade e conversão.",
}

export default function LayoutsPage() {
  return (
    <main>
      <LayoutsHero {...layoutsHeroData} />
      {/* <CategoriesSection {...categoriesData} /> */}
      <LayoutsGallery {...layoutsGalleryData} />
      <LayoutsBenefits {...layoutsBenefitsData} />
      <AboutCTA {...layoutsCtaData} />
    </main>
  )
}
