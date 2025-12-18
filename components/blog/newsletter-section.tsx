"use client"

import type React from "react"
import { useState } from "react"
import { Mail, ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20 md:py-28 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Fique por dentro das novidades
          </h2>

          <p className="text-lg md:text-xl opacity-95 mb-10 text-pretty">
            Receba insights exclusivos sobre digital commerce, tendências e estratégias direto no seu e-mail.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div
              className={`bg-white rounded-2xl p-2 shadow-2xl transition-all duration-300 ${
                focused ? "ring-4 ring-white/30" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    required
                    className="w-full pl-12 pr-4 py-4 text-base text-neutral-900 placeholder:text-neutral-400 bg-transparent border-none focus:outline-none rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Inscrever-se
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <p className="text-sm text-white/80 mt-4">Sem spam. Apenas conteúdo relevante para o seu negócio.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
