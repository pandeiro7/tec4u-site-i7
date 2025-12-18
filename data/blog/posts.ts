export interface BlogPost {
  slug: string
  title: string
  category: string
  author: {
    name: string
    role?: string
    image?: string
  }
  publishedDate: string
  readTime: string
  featuredImage: string
  excerpt: string
  content: {
    type: "paragraph" | "heading" | "quote" | "image" | "list"
    content: string | string[]
    author?: string
    level?: number
  }[]
  relatedPosts?: string[]
}

export const blogPosts: Record<string, BlogPost> = {
  "o-que-vimos-no-vtex-day-2025": {
    slug: "o-que-vimos-no-vtex-day-2025",
    title: "O que vimos no VTEX Day 2025: tendências do digital commerce e a presença da TEC4U",
    category: "Event",
    author: {
      name: "Yasmin Nobre",
      role: "Content Writer",
    },
    publishedDate: "04/06/2025",
    readTime: "3 a 4 min",
    featuredImage: "https://cdn.prod.website-files.com/6529c855b52b8f954930e984/6840c5e4a009274bfba0ed53_IMG_0715.jpg",
    excerpt:
      "A TEC4U marcou presença com stand próprio no VTEX Day 2025, um dos maiores eventos de digital commerce da América Latina. Durante os dois dias de evento, a equipe fez conexões importantes, apresentou soluções e acompanhou de perto as tendências do setor —como IA, concierge commerce e retail media.",
    content: [
      {
        type: "paragraph",
        content:
          "Nos dias 2 e 3 de junho, o São Paulo Expo foi palco do VTEX Day 2025, um dos maiores eventos de comércio digital da América Latina, que reuniu cerca de 50 mil participantes. A TEC4U marcou presença com um stand próprio, aproveitando a oportunidade para estreitar relacionamentos, apresentar soluções e absorver as principais tendências do setor.",
      },
      {
        type: "heading",
        content: "Destaques do evento",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "O VTEX Day 2025 abordou temas centrais para o futuro do varejo digital, como inteligência artificial, liderança feminina e novas estratégias de comércio. A atriz Viola Davis encerrou o evento com uma palestra inspiradora sobre coragem, autenticidade e superação, emocionando o público presente.",
      },
      {
        type: "paragraph",
        content:
          'Entre as inovações apresentadas, destacou-se o conceito de "concierge commerce", que visa oferecer experiências de compra mais fluidas e personalizadas, eliminando fricções e valorizando o tempo do consumidor.',
      },
      {
        type: "paragraph",
        content:
          "Além disso, a VTEX anunciou sua estratégia de crescimento para 2025, focada em três frentes: expansão no mercado B2B, atração de novos clientes que anteriormente operavam com tecnologia própria e investimento em retail media, utilizando inteligência artificial para otimizar campanhas publicitárias.",
      },
      {
        type: "heading",
        content: "A participação da TEC4U",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Durante os dois dias de evento, nosso stand foi ponto de encontro para parceiros, clientes e novos contatos. Apresentamos nossas soluções inovadoras e discutimos as transformações do mercado, reforçando nosso compromisso em estar na vanguarda do digital commerce.",
      },
      {
        type: "quote",
        content:
          "Participar de um evento da magnitude do VTEX Day é uma experiência única. Mais do que marcar presença, é sobre ver de perto os frutos de um trabalho construído com muita dedicação por todo um time. Se eu pudesse resumir em uma palavra, seria: gratificante.",
        author: "Melissa Pio, CEO & Fundadora da TEC4U",
      },
      {
        type: "paragraph",
        content:
          "O VTEX Day 2025 foi uma oportunidade valiosa para a TEC4U fortalecer sua presença no setor, absorver insights relevantes e contribuir para o avanço do comércio digital no Brasil e na América Latina.",
      },
    ],
    relatedPosts: ["adeus-carrinho-abandonado", "importancia-design-ecommerce", "h2h-modelo-tec4u"],
  },
  "adeus-carrinho-abandonado": {
    slug: "adeus-carrinho-abandonado",
    title: "Adeus, Carrinho Abandonado! Estratégias Essenciais para Turbinar Suas Vendas Online",
    category: "Innovation",
    author: {
      name: "TEC4U Team",
    },
    publishedDate: "10/06/2024",
    readTime: "5 min",
    featuredImage: "/shopping-cart-strategies.jpg",
    excerpt:
      "Descubra as 3 maiores causas do abandono de carrinho (Frete, Prazo, Confiança) e o plano de ação do e-commerce para reverter isso, com foco em Logística e UX.",
    content: [],
  },
  "importancia-design-ecommerce": {
    slug: "importancia-design-ecommerce",
    title: "Qual a importância de um design bem feito para o seu e-commerce?",
    category: "Tip",
    author: {
      name: "TEC4U Team",
    },
    publishedDate: "10/06/2024",
    readTime: "4 min",
    featuredImage:
      "https://cdn.prod.website-files.com/6529c855b52b8f954930e984/6666fd3f6d92002570e5ed97_Captura%20de%20Tela%202024-06-10%20a%CC%80s%2010.18.44.avif",
    excerpt:
      "Entenda como um design profissional impacta diretamente nas conversões e experiência do usuário no seu e-commerce.",
    content: [],
  },
  "h2h-modelo-tec4u": {
    slug: "h2h-modelo-tec4u",
    title: "H2H: o modelo que a TEC4U acredita e por que sua marca deve conhecer",
    category: "TEC4U",
    author: {
      name: "TEC4U Team",
    },
    publishedDate: "15/01/2025",
    readTime: "6 min",
    featuredImage:
      "https://cdn.prod.website-files.com/6529c855b52b8f954930e984/68a4b6cfe40bf285607eb410_CAPA%20BLOG.png",
    excerpt:
      "Mais do que B2B ou B2C, a TEC4U acredita no modelo H2H (Human to Human), que coloca as pessoas no centro de toda a jornada.",
    content: [],
  },
}
