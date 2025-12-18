import Link from "next/link"

export function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Vamos juntos!</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Se interessou pelos nossos serviços? Clique no botão abaixo e entre em contato conosco! 🤝
        </p>
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-gray-100 text-purple-600 font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
        >
          ENTRAR EM CONTATO
        </Link>
      </div>
    </section>
  )
}
