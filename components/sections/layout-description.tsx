interface LayoutDescriptionProps {
  description: string
  pages: string[]
  translations: {
    pagesIncluded: string
  }
}

export function LayoutDescription({ description, pages, translations }: LayoutDescriptionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>

          <div>
            <h3 className="text-2xl font-bold mb-4">{translations.pagesIncluded}</h3>
            <ul className="space-y-2">
              {pages.map((page, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{page}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
