import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  logo: string
}

interface TestimonialsSectionProps {
  title: string
  testimonials: Testimonial[]
}

export function TestimonialsSection({ title, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="bg-accent py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-pretty text-muted-foreground">&quot;{testimonial.quote}&quot;</p>

                {/* Author */}
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.company}
                    width={100}
                    height={30}
                    className="h-6 w-auto object-contain grayscale"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
