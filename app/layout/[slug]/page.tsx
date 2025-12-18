"use client"

import { notFound } from "next/navigation"
import { layoutDetailsData, layoutDetailsDataEn } from "@/data/layout-details"
import { layoutsGalleryData } from "@/data/layouts"
import { LayoutDetailHero } from "@/components/sections/layout-detail-hero"
import { LayoutDescription } from "@/components/sections/layout-description"
import { LayoutFeatures } from "@/components/sections/layout-features"
import { LayoutSpecifications } from "@/components/sections/layout-specifications"
import { RelatedLayouts } from "@/components/sections/related-layouts"
import { LayoutStickyCta } from "@/components/sections/layout-sticky-cta"
import { AboutCTA } from "@/components/sections/about-cta"
import { useI18n } from "@/lib/i18n/context"
import { useTranslations } from "@/lib/i18n/hooks"

interface PageProps {
  params: {
    slug: string
  }
}

export default function LayoutDetailPage({ params }: PageProps) {
  const { locale } = useI18n()
  const t = useTranslations("layoutDetail")

  const layoutData = locale === "en" ? layoutDetailsDataEn : layoutDetailsData
  const layout = layoutData[params.slug]

  if (!layout) {
    notFound()
  }

  // Get related layouts data
  const relatedLayouts = layout.relatedLayouts
    .map((id) => {
      const galleryLayout = layoutsGalleryData.layouts.find((l) => l.id === id)
      return galleryLayout
        ? {
            id: galleryLayout.id,
            name: galleryLayout.name,
            image: galleryLayout.thumbnail,
            price: galleryLayout.price,
            slug: galleryLayout.id,
          }
        : null
    })
    .filter(Boolean) as Array<{
    id: string
    name: string
    image: string
    price: string
    slug: string
  }>

  const handleBuyClick = () => {
    // Scroll to contact form or open modal
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main>
      <LayoutDetailHero
        name={layout.name}
        category={layout.category}
        description={layout.description.short}
        price={layout.price}
        heroImage={layout.images.hero}
        desktopImage={layout.images.desktop}
        mobileImage={layout.images.mobile}
        platform={layout.specifications.platform}
        onBuyClick={handleBuyClick}
        translations={{
          buyButton: t.buyButton,
          desktop: t.desktop,
          mobile: t.mobile,
        }}
      />

      <LayoutDescription
        description={layout.description.full}
        pages={layout.pages}
        translations={{
          pagesIncluded: t.pagesIncluded,
        }}
      />

      <LayoutFeatures
        features={layout.features}
        translations={{
          mainFeatures: t.mainFeatures,
        }}
      />

      <LayoutSpecifications
        platform={layout.specifications.platform}
        styles={layout.specifications.styles}
        features={layout.specifications.features}
        support={layout.specifications.support}
        galleryImage={layout.images.gallery[0]}
        translations={{
          readyToLaunch: t.readyToLaunch,
          support: t.support,
          supportText: t.supportText,
          compatibleWith: t.compatibleWith,
          styles: t.styles,
          templateFeatures: t.templateFeatures,
        }}
      />

      <RelatedLayouts
        layouts={relatedLayouts}
        translations={{
          seeAlso: t.seeAlso,
          viewDetails: t.viewDetails,
        }}
      />

      <AboutCTA
        badge={t.ctaBadge}
        title={t.ctaTitle}
        titleHighlight={layout.name}
        description={t.ctaDescription}
        ctas={[
          {
            text: t.ctaButton1,
            href: "/contato",
            variant: "primary" as const,
          },
          {
            text: t.ctaButton2,
            href: "/layouts",
            variant: "secondary" as const,
          },
        ]}
      />

      <LayoutStickyCta
        name={layout.name}
        image={layout.images.hero}
        price={layout.price}
        onBuyClick={handleBuyClick}
        translations={{
          buyButton: t.buyButton,
        }}
      />
    </main>
  )
}
