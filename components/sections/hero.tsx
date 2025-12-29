"use client"

import { useEffect, useRef } from "react"

interface HeroProps {
  badge: string
  title: string
  titleBold: string
  titleEnd: string
  description: string
}

export function Hero({ badge, title, titleBold, titleEnd, description }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = (clientX - innerWidth / 2) / 50
      const moveY = (clientY - innerHeight / 2) / 50

      // Apply parallax to tags
      const tags = heroRef.current.querySelectorAll('[data-parallax="tag"]')
      tags.forEach((tag) => {
        ;(tag as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`
      })

      // Apply reverse parallax to cards
      const cards = heroRef.current.querySelectorAll('[data-parallax="card"]')
      cards.forEach((card) => {
        ;(card as HTMLElement).style.transform = `translate3d(${-moveX}px, ${-moveY}px, 0px)`
      })

      const phone = heroRef.current.querySelector('[data-parallax="phone"]')
      if (phone) {
        ;(phone as HTMLElement).style.transform = `translate3d(${moveX * 0.5}px, ${moveY * 0.5}px, 0px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen overflow-hidden">
      <div className="w-full relative z-10 py-20 md:py-28">
        <div className="hero-filter absolute inset-0 z-[-1]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-b-xl mx-2"
            style={{ backgroundImage: "url(/images/hero-bg.avif)" }}
          />
        </div>
        <img
          src="https://cdn.prod.website-files.com/6526a00fbfb681da0e87743b/66685c45f3210e55b5c27ae5_Group%20100053821.svg"
          alt="Project Manager"
          className="tag-gerente absolute left-[5%] top-[35%] hidden lg:block transition-transform duration-200"
          data-parallax="tag"
        />
        <img
          src="https://cdn.prod.website-files.com/6526a00fbfb681da0e87743b/6526b7c42cef54d593dbb91c_Group%20100053819.svg"
          alt="Designer"
          className="tag-designer absolute left-[8%] top-[15%] hidden md:block transition-transform duration-200"
          data-parallax="tag"
        />
        <img
          src="https://cdn.prod.website-files.com/6526a00fbfb681da0e87743b/66685c45e9331a0ce3fc5919_Group%20100053820.svg"
          alt="Developer"
          className="tag-dev absolute right-[8%] top-[20%] hidden lg:block transition-transform duration-200"
          data-parallax="tag"
        />

        <div className="hero-text-wrapper hero mx-auto max-w-4xl text-center">
          <div className="vert-spacer-8 centered mb-8">
            <div className="tag inline-block rounded-full border border-gray-900/10 bg-white/80 px-4 py-2 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-800">{badge}</div>
            </div>
            <h1 className="title-hero hero mt-6 text-balance text-4xl font-semibold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              <span className="semibold font-bold">
                {title} {titleBold}
              </span>{" "}
              {titleEnd}
            </h1>
          </div>
          <p className="paragraph-16 _18 mx-auto max-w-2xl text-pretty text-base leading-relaxed text-gray-700 md:text-lg">
            {description}
          </p>
        </div>
      </div>

      <section className="cell-phone-sec relative pb-20">
        <div className="container px-4 md:px-6">
          <div className="relative mx-auto max-w-7xl">
            {/* iPhone Mockup */}
            <div className="relative z-20 mx-auto flex justify-center mb-16 md:mb-0">
              <img
                src="/images/phone-mockup.png"
                alt="iPhone mockup"
                className="w-[280px] md:w-[380px] lg:w-[420px] h-auto drop-shadow-2xl transition-transform duration-200"
                data-parallax="phone"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
                }}
              />
            </div>

            {/* Cards Grid - positioned absolutely to overlap phone */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="relative h-full">
                {/* Card 1: Sites Rápidos - Top Left */}
                <div
                  className="hero-card sites absolute left-0 top-[15%] md:top-[20%] lg:top-[25%] w-[280px] md:w-[320px] rounded-2xl bg-white p-6 shadow-lg transition-transform duration-200 pointer-events-auto"
                  data-parallax="card"
                >
                  <div className="card-title mb-4 text-xs font-bold uppercase tracking-wider text-gray-800">
                    sites mais rápidos
                  </div>
                  <div className="horiz-spacer-16 flex items-center gap-4">
                    <img src="/icons/speedometer-90.svg" loading="lazy" alt="90+" className="h-16 w-16" />
                    <div className="text-sm text-gray-600">Desempenho no Google PageSpeed</div>
                  </div>
                </div>

                {/* Card 2: Clientes Satisfeitos - Top Right */}
                <div
                  className="hero-card clientes absolute right-0 top-[5%] md:top-[10%] lg:top-[15%] w-[300px] md:w-[340px] rounded-2xl bg-white p-6 shadow-lg transition-transform duration-200 pointer-events-auto"
                  data-parallax="card"
                >
                  <div className="vert-spacer-10">
                    <div className="card-title mb-4 text-xs font-bold uppercase tracking-wider text-gray-800">
                      CLIENTES MAIS SATISFEITOS
                    </div>
                    <div className="horiz-spacer-16 flex items-center gap-4">
                      <img
                        src="/images/hero-avatars.avif"
                        loading="lazy"
                        width="136"
                        alt="Clientes"
                        className="h-auto w-[136px]"
                      />
                      <div className="card-title text-2xl font-bold text-gray-900">+6.435</div>
                    </div>
                  </div>
                  <div className="div-inside mt-4 space-y-2">
                    <div className="text-sm text-gray-600">Experiência de compra:</div>
                    <img src="/icons/stars-5.svg" loading="lazy" alt="5 estrelas" className="h-4 w-auto" />
                  </div>
                </div>

                {/* Card 3: Vendas Aumentadas - Bottom Right */}
                <div
                  className="hero-card vendas absolute right-0 bottom-[5%] md:bottom-[10%] lg:bottom-[15%] w-[300px] md:w-[340px] rounded-2xl bg-white p-6 shadow-lg transition-transform duration-200 pointer-events-auto"
                  data-parallax="card"
                >
                  <div className="card-title mb-4 text-xs font-bold uppercase tracking-wider text-gray-800">
                    vendas aumentadas
                  </div>
                  <img src="/icons/sales-chart.svg" loading="lazy" alt="Gráfico de vendas" className="h-auto w-full" />
                </div>

                {/* Copywriter tag - Bottom Left */}
                <img
                  src="https://cdn.prod.website-files.com/6526a00fbfb681da0e87743b/66685c45e9331a0ce3fc5919_Group%20100053820.svg"
                  alt="Copywriter"
                  className="absolute left-[5%] bottom-[20%] hidden lg:block transition-transform duration-200"
                  data-parallax="tag"
                />

                {/* Customer Success tag - Bottom Right */}
                <img
                  src="https://cdn.prod.website-files.com/6526a00fbfb681da0e87743b/66685c45f3210e55b5c27ae5_Group%20100053821.svg"
                  alt="Customer Success"
                  className="absolute right-[5%] bottom-[35%] hidden lg:block transition-transform duration-200"
                  data-parallax="tag"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
