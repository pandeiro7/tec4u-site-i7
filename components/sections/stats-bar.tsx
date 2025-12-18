"use client"

import { AnimatedCounter } from "@/components/ui/animated-counter"

interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats: Stat[]
}

export function StatsBar({ stats }: StatsBarProps) {
  const parseStatValue = (value: string) => {
    const match = value.match(/^(\d+)(.*)$/)
    if (match) {
      return {
        number: Number.parseInt(match[1], 10),
        suffix: match[2],
      }
    }
    return { number: 0, suffix: value }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="absolute inset-0 z-0">
        <img src="/images/stats-bg.png" alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {stats.map((stat, index) => {
            const { number, suffix } = parseStatValue(stat.value)
            return (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
                  <AnimatedCounter end={number} duration={2000} suffix={suffix} />
                </p>
                <p className="mt-3 text-base font-medium uppercase tracking-wide text-gray-600 md:text-lg">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
