"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            const startTime = Date.now()
            const endTime = startTime + duration

            const updateCount = () => {
              const now = Date.now()
              const progress = Math.min((now - startTime) / duration, 1)

              // Easing function for smooth animation
              const easeOutQuad = (t: number) => t * (2 - t)
              const easedProgress = easeOutQuad(progress)

              setCount(Math.floor(easedProgress * end))

              if (progress < 1) {
                requestAnimationFrame(updateCount)
              } else {
                setCount(end)
              }
            }

            requestAnimationFrame(updateCount)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={elementRef} className={className}>
      {count}
      {suffix}
    </span>
  )
}
