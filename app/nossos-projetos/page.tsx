import { AboutHero } from "@/components/sections/about-hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { projectsData } from "@/data/home"

const projectsHeroData = {
  badge: "NOSSOS PROJETOS",
  title: "Cases de sucesso que",
  titleHighlight: "transformam negócios",
  description:
    "Explore nossa coleção de projetos desenvolvidos com excelência. Cada trabalho representa nosso compromisso em entregar soluções digitais que geram resultados reais e impactam positivamente os negócios de nossos clientes.",
  ctas: [
    { text: "CONTATO", href: "/contato", variant: "primary" as const },
    { text: "CONHEÇA-NOS", href: "/sobre-nos", variant: "secondary" as const },
  ],
  image: "/images/hero-preview.png",
}

export const metadata = {
  title: "Nossos Projetos - TEC4U Digital",
  description:
    "Conheça os cases de sucesso da TEC4U. Projetos de e-commerce, marketing digital e tecnologia que transformam negócios.",
}

export default function NossosProjetosPage() {
  return (
    <>
      <AboutHero data={projectsHeroData} />
      <ProjectsGrid {...projectsData} />
    </>
  )
}
