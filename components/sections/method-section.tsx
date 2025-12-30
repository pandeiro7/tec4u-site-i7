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
      xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 16h-6a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v6" /><path d="M7 20h3.5" /><path d="M9 16v4" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" /></svg>,
    // Delivery icon - two arrows pointing down and up
    <svg key="delivery-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M15 19l2 2l4 -4" /></svg>,
    // Bug-free icon - arrows forming a shield
    <svg key="bug-free-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" /><path d="M15 19l2 2l4 -4" /></svg>,
    // Retention icon - circular arrows
    <svg key="retention-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-presentation"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4l18 0" /><path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" /><path d="M12 16l0 4" /><path d="M9 20l6 0" /><path d="M8 12l3 -3l2 2l3 -3" /></svg>,
    // Transparency icon - diamond with lines
    <svg
      key="transparency-icon"
      xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>,
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
                <div className="flex-shrink-0 px-3 pt-1 text-[#03cbf0]">
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
