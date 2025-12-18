interface Feature {
  title: string
  description: string
}

interface LayoutFeaturesProps {
  features: Feature[]
  translations: {
    mainFeatures: string
  }
}

export function LayoutFeatures({ features, translations }: LayoutFeaturesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{translations.mainFeatures}</h2>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
