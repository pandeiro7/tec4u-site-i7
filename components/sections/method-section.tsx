interface Pillar {
  icon: string
  title: string
  description: string
}

interface MethodSectionProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  pillars: Pillar[]
}

function MethodIcon({ variant }: { variant: number }) {
  const colors = ["#00D9C9", "#00C4B8", "#00AFA7", "#009A96", "#008585"]
  const color = colors[variant % colors.length]

  const paths = [
    // Responsive icon - four arrows pointing outward
    <svg
      key="responsive-icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12L28 16L24 20L20 16L24 12Z" fill={color} />
      <path d="M36 24L32 20L28 24L32 28L36 24Z" fill={color} />
      <path d="M24 36L20 32L24 28L28 32L24 36Z" fill={color} />
      <path d="M12 24L16 28L20 24L16 20L12 24Z" fill={color} />
    </svg>,
    // Delivery icon - two arrows pointing down and up
    <svg key="delivery-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12L16 16L20 20L24 16L20 12Z" fill={color} />
      <path d="M28 36L32 32L28 28L24 32L28 36Z" fill={color} />
      <path d="M16 24L20 28L24 24L20 20L16 24Z" fill={color} />
      <path d="M32 24L28 20L24 24L28 28L32 24Z" fill={color} />
    </svg>,
    // Bug-free icon - arrows forming a shield
    <svg key="bug-free-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 10L28 14L32 18L28 22L24 26L20 22L16 18L20 14L24 10Z" fill={color} />
      <path d="M24 26L28 30L32 34L28 38L24 34L20 38L16 34L20 30L24 26Z" fill={color} />
    </svg>,
    // Retention icon - circular arrows
    <svg key="retention-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 14L32 18L28 26L24 22L24 14Z" fill={color} />
      <path d="M24 34L16 30L20 22L24 26L24 34Z" fill={color} />
      <path d="M14 24L18 16L26 20L22 24L14 24Z" fill={color} />
      <path d="M34 24L30 32L22 28L26 24L34 24Z" fill={color} />
    </svg>,
    // Transparency icon - diamond with lines
    <svg
      key="transparency-icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 8L32 16L24 24L16 16L24 8Z" fill={color} />
      <path d="M24 24L32 32L24 40L16 32L24 24Z" fill={color} />
      <path d="M8 24L16 32L24 24L16 16L8 24Z" fill={color} />
      <path d="M40 24L32 16L24 24L32 32L40 24Z" fill={color} />
    </svg>,
  ]

  return paths[variant]
}

export function MethodSection({ badge, title, titleHighlight, description, pillars }: MethodSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="inline-block rounded-full border border-gray-300 bg-white px-6 py-2">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-600">{badge}</span>
            </div>

            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {title} <span className="font-bold">{titleHighlight}</span>
            </h2>

            <p className="text-pretty text-lg leading-relaxed text-gray-700 md:text-xl">{description}</p>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <MethodIcon variant={index} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                  <p className="text-pretty leading-relaxed text-gray-600">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
