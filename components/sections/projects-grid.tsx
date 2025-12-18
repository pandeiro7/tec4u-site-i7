import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface Project {
  name: string
  logo: string
  image: string
  href: string
}

interface ProjectsGridProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  projects: Project[]
}

export function ProjectsGrid({ badge, title, titleHighlight, description, projects }: ProjectsGridProps) {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Sticky content */}
          <div className="space-y-6 lg:sticky lg:top-32 lg:h-fit">
            <Badge
              variant="outline"
              className="border-gray-900/10 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-700"
            >
              {badge}
            </Badge>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              {title} <span className="font-bold text-gray-900">{titleHighlight}</span>
            </h2>

            <p className="text-pretty text-lg leading-relaxed text-gray-600">{description}</p>
          </div>

          {/* Right side - Scrolling masonry grid */}
          <div className="space-y-6">
            {/* Row 1: 2 columns - medium and small */}
            <div className="grid grid-cols-2 gap-6">
              {projects[0] && (
                <Link
                  href={projects[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative col-span-1 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[3/4]">
                    <Image
                      src={projects[0].image || `/placeholder.svg?height=600&width=450&query=${projects[0].name}`}
                      alt={projects[0].name}
                      width={450}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-2xl font-bold uppercase tracking-wide text-white">{projects[0].name}</p>
                  </div>
                </Link>
              )}
              {projects[1] && (
                <Link
                  href={projects[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative col-span-1 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[4/5]">
                    <Image
                      src={projects[1].image || `/placeholder.svg?height=500&width=400&query=${projects[1].name}`}
                      alt={projects[1].name}
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-2xl font-bold uppercase tracking-wide text-white">{projects[1].name}</p>
                  </div>
                </Link>
              )}
            </div>

            {/* Row 2: 2 columns - small and medium */}
            <div className="grid grid-cols-2 gap-6">
              {projects[2] && (
                <Link
                  href={projects[2].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative col-span-1 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[5/4]">
                    <Image
                      src={projects[2].image || `/placeholder.svg?height=400&width=500&query=${projects[2].name}`}
                      alt={projects[2].name}
                      width={500}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-2xl font-bold uppercase tracking-wide text-white">{projects[2].name}</p>
                  </div>
                </Link>
              )}
              {projects[3] && (
                <Link
                  href={projects[3].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative col-span-1 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[3/4]">
                    <Image
                      src={projects[3].image || `/placeholder.svg?height=600&width=450&query=${projects[3].name}`}
                      alt={projects[3].name}
                      width={450}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-2xl font-bold uppercase tracking-wide text-white">{projects[3].name}</p>
                  </div>
                </Link>
              )}
            </div>

            {/* Row 3: 2 columns - medium and small */}
            {projects[4] && (
              <div className="grid grid-cols-2 gap-6">
                <Link
                  href={projects[4].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative col-span-1 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[4/5]">
                    <Image
                      src={projects[4].image || `/placeholder.svg?height=500&width=400&query=${projects[4].name}`}
                      alt={projects[4].name}
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-2xl font-bold uppercase tracking-wide text-white">{projects[4].name}</p>
                  </div>
                </Link>
                {projects[5] && (
                  <Link
                    href={projects[5].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative col-span-1 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <div className="aspect-square">
                      <Image
                        src={projects[5].image || `/placeholder.svg?height=450&width=450&query=${projects[5].name}`}
                        alt={projects[5].name}
                        width={450}
                        height={450}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-2xl font-bold uppercase tracking-wide text-white">{projects[5].name}</p>
                    </div>
                  </Link>
                )}
              </div>
            )}

            {/* Row 4: Full width landscape */}
            {projects[6] && (
              <Link
                href={projects[6].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="aspect-[16/10]">
                  <Image
                    src={projects[6].image || `/placeholder.svg?height=500&width=800&query=${projects[6].name}`}
                    alt={projects[6].name}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-2xl font-bold uppercase tracking-wide text-white">{projects[6].name}</p>
                </div>
              </Link>
            )}

            {/* Row 5: 2 columns for remaining projects */}
            {projects.length > 7 && (
              <div className="grid grid-cols-2 gap-6">
                {projects.slice(7, 9).map((project) => (
                  <Link
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <div className="aspect-[4/5]">
                      <Image
                        src={project.image || `/placeholder.svg?height=500&width=400&query=${project.name}`}
                        alt={project.name}
                        width={400}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-2xl font-bold uppercase tracking-wide text-white">{project.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
