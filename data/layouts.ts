export const layoutsHeroData = {
  badge: "layouts by tec4u",
  title: "Layouts profissionais para lojas virtuais",
  titleHighlight: "de alta performance",
  description:
    "Explore nossa coleção exclusiva de layouts prontos para e-commerce, desenvolvidos com foco em usabilidade, velocidade e conversão.",
  ctaText: "ver todos os temas",
  ctaHref: "#galeria",
  platforms: [
    {
      name: "Olist",
      logo: "/olist-logo.png",
      status: "EM BREVE",
    },
    {
      name: "Nuvemshop",
      logo: "/nuvemshop-logo.png",
      status: "DISPONÍVEL",
    },
    {
      name: "Shopify",
      logo: "/shopify-logo.png",
      status: "EM BREVE",
    },
    {
      name: "VTEX",
      logo: "/vtex-logo.jpg",
      status: "EM BREVE",
    },
  ],
  previewImages: ["/images/hero-preview.png", "/beauty-products-store.jpg", "/automotive-parts-e-commerce.jpg"],
}

export const categoriesData = {
  title: "Categorias em destaque",
  description: "Explore as nossas categorias e escolha com base no seu nicho de atuação:",
  categories: [
    {
      id: "beleza-cosmeticos",
      name: "Beleza & Cosméticos",
      image: "/beauty-products-store.jpg",
      href: "/layouts/categoria/beleza-cosmeticos",
    },
    {
      id: "casa-decoracao",
      name: "Casa & Decoração",
      image: "/sleepwear-e-commerce.jpg",
      href: "/layouts/categoria/casa-decoracao",
    },
    {
      id: "esportes-fitness",
      name: "Esportes & Fitness",
      image: "/automotive-parts-e-commerce.jpg",
      href: "/layouts/categoria/esportes-fitness",
    },
    {
      id: "joalheria-luxo",
      name: "Joalheria & Luxo",
      image: "/sewing-supplies-e-commerce.jpg",
      href: "/layouts/categoria/joalheria-luxo",
    },
    {
      id: "moda-acessorios",
      name: "Moda & Acessórios",
      image: "/sleepwear-e-commerce.jpg",
      href: "/layouts/categoria/moda-acessorios",
    },
    {
      id: "tecnologia-eletronicos",
      name: "Tecnologia & Eletrônicos",
      image: "/industrial-supplies-store.jpg",
      href: "/layouts/categoria/tecnologia-eletronicos",
    },
  ],
}

export const layoutsGalleryData = {
  title: "Galeria de layouts",
  description:
    "Nossos layouts foram criados para oferecer qualidade máxima com agilidade na entrega. Explore nosso catálogo completo:",
  layouts: [
    {
      id: "layout-v",
      name: "Layout V",
      thumbnail: "/beauty-products-store.jpg",
      category: "Moda & Acessórios",
      categoryIcon: "/beauty-products-store.jpg",
      price: "10.000,00",
      originalPrice: "10.000,00",
      href: "/layout/layout-v",
    },
    {
      id: "layout-p",
      name: "Layout P",
      thumbnail: "/sleepwear-e-commerce.jpg",
      category: "Beleza & Cosméticos",
      categoryIcon: "/beauty-products-store.jpg",
      price: "10.000,00",
      originalPrice: "10.000,00",
      href: "/layout/layout-p",
    },
    {
      id: "layout-g",
      name: "Layout G",
      thumbnail: "/industrial-supplies-store.jpg",
      category: "Tecnologia & Eletrônicos",
      categoryIcon: "/industrial-supplies-store.jpg",
      price: "10.000,00",
      originalPrice: "10.000,00",
      href: "/layout/layout-g",
    },
    {
      id: "layout-j",
      name: "Layout J",
      thumbnail: "/sewing-supplies-e-commerce.jpg",
      category: "Joalheria & Luxo",
      categoryIcon: "/sewing-supplies-e-commerce.jpg",
      price: "14.000,00",
      originalPrice: "14.000,00",
      href: "/layout/layout-j",
    },
    {
      id: "layout-a",
      name: "Layout A",
      thumbnail: "/beauty-products-store.jpg",
      category: "Beleza & Cosméticos",
      categoryIcon: "/beauty-products-store.jpg",
      price: "14.000,00",
      originalPrice: "14.000,00",
      href: "/layout/layout-a",
    },
  ],
}

export const layoutsBenefitsData = {
  badge: "qualidade e agilidade",
  title: "Por que escolher nossos",
  titleHighlight: "layouts?",
  benefits: [
    {
      icon: "zap",
      title: "Alta Performance",
      description:
        "Layouts otimizados para velocidade e conversão, garantindo a melhor experiência para seus clientes.",
    },
    {
      icon: "palette",
      title: "Design Profissional",
      description:
        "Projetos criados por designers especializados em e-commerce, seguindo as melhores práticas do mercado.",
    },
    {
      icon: "rocket",
      title: "Entrega Rápida",
      description: "Layouts prontos para implementação imediata, reduzindo seu time-to-market significativamente.",
    },
    {
      icon: "settings",
      title: "Personalizável",
      description: "Estrutura flexível que permite customizações para adequar perfeitamente à sua marca.",
    },
  ],
}

export const layoutsCtaData = {
  badge: "PRONTO PARA COMEÇAR?",
  title: "Transforme sua loja virtual com nossos",
  titleHighlight: "layouts profissionais",
  description:
    "Entre em contato com nossa equipe e descubra como podemos acelerar o lançamento da sua loja com layouts de alta performance e design impecável.",
  ctas: [
    {
      text: "Falar com especialista",
      href: "/contato",
      variant: "primary" as const,
    },
    {
      text: "Ver mais cases",
      href: "/nossos-projetos",
      variant: "secondary" as const,
    },
  ],
}
