export interface LayoutDetail {
  id: string
  name: string
  slug: string
  category: string
  price: string
  originalPrice?: string
  featured: boolean
  images: {
    hero: string
    desktop: string
    mobile: string
    gallery: string[]
  }
  description: {
    short: string
    full: string
  }
  pages: string[]
  features: Array<{
    title: string
    description: string
  }>
  specifications: {
    platform: string
    styles: string[]
    features: string[]
    support: string
  }
  relatedLayouts: string[]
}

export const layoutDetailsData: Record<string, LayoutDetail> = {
  "layout-a": {
    id: "layout-a",
    name: "Layout A",
    slug: "layout-a",
    category: "Beleza & Cosméticos",
    price: "14.000,00",
    featured: true,
    images: {
      hero: "/beauty-products-store.jpg",
      desktop: "/beauty-products-store.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/beauty-products-store.jpg", "/images/hero-preview.png"],
    },
    description: {
      short:
        "Um design moderno e funcional, pensado para destacar produtos com clareza e oferecer uma navegação ágil. Perfeito para quem busca performance, estética e experiência de compra envolvente.",
      full: "Layout A é um layout Nuvemshop moderno e versátil, criado para destacar produtos e elevar a experiência de compra online. Com animações suaves de rolagem, efeitos dinâmicos de texto e uma homepage envolvente, ele traz movimento e personalidade para a sua loja. Repleto de áreas dedicadas a imagens de produtos, vitrines e layouts inteligentes, o Layout A facilita a criação de uma vitrine clara, impactante e funcional.",
    },
    pages: ["Home", "Sobre", "Página de categoria (PLP)", "Página de produto (PDP)", "Contato"],
    features: [
      {
        title: "Mostre seus produtos",
        description: "Até 5 espaços dedicados para destacar os itens mais importantes da sua loja.",
      },
      {
        title: "Banners em destaque",
        description:
          "Adicione quantos banners precisar na página inicial e organize-os da forma que melhor se adapta ao seu negócio.",
      },
      {
        title: "Classifique suas seções",
        description: "Personalize a ordem dos elementos da sua homepage para tornar sua loja única.",
      },
      {
        title: "Compra rápida",
        description:
          "Permita que clientes adicionem produtos ao carrinho diretamente das listagens (categorias, destaques e relacionados).",
      },
      {
        title: "Edite seus banners rotativos",
        description: "Personalize textos, descrições e botões dos banners para comunicar melhor suas ofertas.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Minimalista", "Clássico"],
      features: ["Aplicação de vídeos", "Banners de alta-definição", "Carregamento ultra-rápido"],
      support:
        "O Layout conta com 4 páginas cuidadosamente projetadas, oferecendo tudo o que você precisa para lançar sua loja rapidamente. O layout é pronto para uso, construído sem código personalizado e aproveitando apenas as Interações nativas da plataforma. Além disso, acompanha uma documentação detalhada e fácil de seguir, para que você personalize e publique seu site com confiança.",
    },
    relatedLayouts: ["layout-g", "layout-v", "layout-j"],
  },
  "layout-v": {
    id: "layout-v",
    name: "Layout V",
    slug: "layout-v",
    category: "Moda & Acessórios",
    price: "10.000,00",
    featured: true,
    images: {
      hero: "/beauty-products-store.jpg",
      desktop: "/beauty-products-store.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/beauty-products-store.jpg", "/images/hero-preview.png"],
    },
    description: {
      short:
        "Design clean e sofisticado para moda e acessórios. Focado em apresentar coleções com elegância e proporcionar uma navegação intuitiva que valoriza seus produtos.",
      full: "Layout V é um template premium para Nuvemshop, desenvolvido especialmente para lojas de moda e acessórios. Com um design minimalista e sofisticado, ele destaca suas peças de forma elegante através de grandes imagens, galerias imersivas e seções estratégicas. Ideal para marcas que buscam transmitir qualidade e estilo através de uma experiência visual impactante.",
    },
    pages: ["Home", "Coleções", "Página de categoria (PLP)", "Página de produto (PDP)", "Lookbook", "Sobre"],
    features: [
      {
        title: "Galerias de coleção",
        description: "Apresente suas coleções em galerias elegantes com imagens em alta resolução.",
      },
      {
        title: "Lookbook integrado",
        description: "Mostre suas peças em contexto real através de um lookbook moderno e inspirador.",
      },
      {
        title: "Filtros avançados",
        description: "Facilite a busca dos clientes com filtros por tamanho, cor, categoria e preço.",
      },
      {
        title: "Quick view",
        description: "Permita visualização rápida de produtos sem sair da página de categoria.",
      },
      {
        title: "Wishlist",
        description: "Clientes podem salvar produtos favoritos para comprar depois.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Minimalista", "Elegante", "Fashion"],
      features: ["Mega menu", "Lookbook", "Filtros avançados", "Quick view"],
      support:
        "Template completo com 6 páginas otimizadas para moda. Desenvolvido com código limpo e seguindo as melhores práticas da plataforma. Inclui documentação completa em português e suporte técnico especializado.",
    },
    relatedLayouts: ["layout-p", "layout-a", "layout-j"],
  },
  "layout-p": {
    id: "layout-p",
    name: "Layout P",
    slug: "layout-p",
    category: "Beleza & Cosméticos",
    price: "10.000,00",
    featured: true,
    images: {
      hero: "/sleepwear-e-commerce.jpg",
      desktop: "/sleepwear-e-commerce.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/sleepwear-e-commerce.jpg", "/beauty-products-store.jpg"],
    },
    description: {
      short:
        "Layout moderno e luminoso, perfeito para destacar produtos de beleza e cosméticos. Design limpo que transmite confiança e qualidade aos seus clientes.",
      full: "Layout P é um template profissional criado especificamente para lojas de beleza e cosméticos na Nuvemshop. Com um design luminoso e acolhedor, ele valoriza seus produtos através de fotografias de alta qualidade e seções estratégicas para destacar benefícios, ingredientes e resultados. Ideal para marcas que querem transmitir profissionalismo e cuidado.",
    },
    pages: ["Home", "Catálogo", "Página de categoria (PLP)", "Página de produto (PDP)", "Rotina de skincare", "Blog"],
    features: [
      {
        title: "Destaque de ingredientes",
        description: "Área dedicada para destacar ingredientes especiais e benefícios de cada produto.",
      },
      {
        title: "Rotinas personalizadas",
        description: "Crie páginas de rotinas de skincare para ajudar clientes a montar seu kit perfeito.",
      },
      {
        title: "Reviews com fotos",
        description: "Sistema de avaliações que permite clientes enviarem fotos dos resultados.",
      },
      {
        title: "Guia de tons",
        description: "Seletor visual de cores para bases, batons e outros produtos com variações.",
      },
      {
        title: "Quiz de produtos",
        description: "Questionário interativo para indicar produtos ideais para cada tipo de pele.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Limpo", "Luminoso", "Profissional"],
      features: ["Quiz interativo", "Guia de ingredientes", "Sistema de reviews", "Seletor de tons"],
      support:
        "Pacote completo com 6 páginas otimizadas para beleza e cosméticos. Código otimizado e responsivo, seguindo padrões da Nuvemshop. Documentação detalhada e vídeos tutoriais inclusos.",
    },
    relatedLayouts: ["layout-a", "layout-v", "layout-g"],
  },
  "layout-g": {
    id: "layout-g",
    name: "Layout G",
    slug: "layout-g",
    category: "Tecnologia & Eletrônicos",
    price: "10.000,00",
    featured: true,
    images: {
      hero: "/industrial-supplies-store.jpg",
      desktop: "/industrial-supplies-store.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/industrial-supplies-store.jpg", "/automotive-parts-e-commerce.jpg"],
    },
    description: {
      short:
        "Design técnico e moderno para lojas de eletrônicos. Interface focada em especificações, comparações e informações detalhadas dos produtos.",
      full: "Layout G é um template robusto desenvolvido para e-commerces de tecnologia e eletrônicos na Nuvemshop. Com foco em informações técnicas e especificações detalhadas, ele oferece recursos como tabelas comparativas, fichas técnicas expandidas e galerias de produtos em 360°. Perfeito para lojas que precisam apresentar muitos detalhes técnicos de forma organizada.",
    },
    pages: ["Home", "Catálogo", "Página de categoria (PLP)", "Página de produto (PDP)", "Comparador", "Suporte"],
    features: [
      {
        title: "Ficha técnica completa",
        description: "Apresente todas as especificações técnicas de forma clara e organizada.",
      },
      {
        title: "Comparador de produtos",
        description: "Ferramenta para clientes compararem até 4 produtos lado a lado.",
      },
      {
        title: "Galeria 360°",
        description: "Visualização interativa de produtos com rotação em 360 graus.",
      },
      {
        title: "Perguntas frequentes",
        description: "Sistema de FAQ expandível na página de produto para dúvidas comuns.",
      },
      {
        title: "Indicador de estoque",
        description: "Mostre disponibilidade em tempo real e gere senso de urgência.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Técnico", "Moderno", "Profissional"],
      features: ["Comparador", "Ficha técnica expandida", "Galeria 360°", "Sistema de FAQ"],
      support:
        "Template completo com 6 páginas especializadas em tech. Desenvolvido com performance em mente, otimizado para SEO. Inclui documentação técnica completa e suporte especializado.",
    },
    relatedLayouts: ["layout-j", "layout-p", "layout-v"],
  },
  "layout-j": {
    id: "layout-j",
    name: "Layout J",
    slug: "layout-j",
    category: "Joalheria & Luxo",
    price: "14.000,00",
    featured: true,
    images: {
      hero: "/sewing-supplies-e-commerce.jpg",
      desktop: "/sewing-supplies-e-commerce.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/sewing-supplies-e-commerce.jpg", "/beauty-products-store.jpg"],
    },
    description: {
      short:
        "Design luxuoso e refinado para joalherias e produtos premium. Cada detalhe pensado para transmitir exclusividade e sofisticação.",
      full: "Layout J é um template premium desenvolvido para joalherias e marcas de luxo na Nuvemshop. Com um design sofisticado e elegante, ele utiliza animações suaves, tipografia refinada e muito espaço em branco para criar uma experiência de compra exclusiva. Recursos como zoom de alta definição, certificados de autenticidade e packaging premium destacam o valor dos seus produtos.",
    },
    pages: [
      "Home",
      "Coleções",
      "Página de categoria (PLP)",
      "Página de produto (PDP)",
      "Nossa história",
      "Personalização",
    ],
    features: [
      {
        title: "Zoom ultra HD",
        description: "Visualização em altíssima definição para mostrar cada detalhe das peças.",
      },
      {
        title: "Certificado digital",
        description: "Área para exibir certificados de autenticidade e garantia das peças.",
      },
      {
        title: "Serviço de personalização",
        description: "Sistema para clientes solicitarem gravações e personalizações exclusivas.",
      },
      {
        title: "Gift wrapping",
        description: "Opção de embalagem premium com visualização do packaging no carrinho.",
      },
      {
        title: "Agendamento de visita",
        description: "Sistema para agendar visitas presenciais ao showroom ou loja física.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Luxo", "Sofisticado", "Elegante"],
      features: ["Zoom HD", "Certificados digitais", "Sistema de personalização", "Agendamento"],
      support:
        "Template premium com 6 páginas exclusivas para joalherias. Desenvolvido com atenção aos mínimos detalhes, otimizado para conversão de alto ticket. Suporte VIP e consultoria de implementação inclusos.",
    },
    relatedLayouts: ["layout-v", "layout-a", "layout-p"],
  },
}

// English translations
export const layoutDetailsDataEn: Record<string, LayoutDetail> = {
  "layout-a": {
    id: "layout-a",
    name: "Layout A",
    slug: "layout-a",
    category: "Beauty & Cosmetics",
    price: "14,000.00",
    featured: true,
    images: {
      hero: "/beauty-products-store.jpg",
      desktop: "/beauty-products-store.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/beauty-products-store.jpg", "/images/hero-preview.png"],
    },
    description: {
      short:
        "A modern and functional design, designed to highlight products with clarity and offer agile navigation. Perfect for those seeking performance, aesthetics and engaging shopping experience.",
      full: "Layout A is a modern and versatile Nuvemshop layout, created to highlight products and elevate the online shopping experience. With smooth scroll animations, dynamic text effects and an engaging homepage, it brings movement and personality to your store. Full of areas dedicated to product images, showcases and smart layouts, Layout A makes it easy to create a clear, impactful and functional showcase.",
    },
    pages: ["Home", "About", "Category page (PLP)", "Product page (PDP)", "Contact"],
    features: [
      {
        title: "Show your products",
        description: "Up to 5 dedicated spaces to highlight the most important items in your store.",
      },
      {
        title: "Featured banners",
        description:
          "Add as many banners as you need on the homepage and organize them in the way that best suits your business.",
      },
      {
        title: "Classify your sections",
        description: "Customize the order of elements on your homepage to make your store unique.",
      },
      {
        title: "Quick purchase",
        description:
          "Allow customers to add products to cart directly from listings (categories, featured and related).",
      },
      {
        title: "Edit your rotating banners",
        description: "Customize texts, descriptions and buttons on banners to better communicate your offers.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Minimalist", "Classic"],
      features: ["Video application", "High-definition banners", "Ultra-fast loading"],
      support:
        "The Layout has 4 carefully designed pages, offering everything you need to launch your store quickly. The layout is ready to use, built without custom code and taking advantage of only the native Interactions of the platform. In addition, it comes with detailed and easy-to-follow documentation, so you can customize and publish your site with confidence.",
    },
    relatedLayouts: ["layout-g", "layout-v", "layout-j"],
  },
  "layout-v": {
    id: "layout-v",
    name: "Layout V",
    slug: "layout-v",
    category: "Fashion & Accessories",
    price: "10,000.00",
    featured: true,
    images: {
      hero: "/beauty-products-store.jpg",
      desktop: "/beauty-products-store.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/beauty-products-store.jpg", "/images/hero-preview.png"],
    },
    description: {
      short:
        "Clean and sophisticated design for fashion and accessories. Focused on presenting collections with elegance and providing intuitive navigation that values your products.",
      full: "Layout V is a premium template for Nuvemshop, developed especially for fashion and accessories stores. With a minimalist and sophisticated design, it highlights your pieces elegantly through large images, immersive galleries and strategic sections. Ideal for brands looking to convey quality and style through an impactful visual experience.",
    },
    pages: ["Home", "Collections", "Category page (PLP)", "Product page (PDP)", "Lookbook", "About"],
    features: [
      {
        title: "Collection galleries",
        description: "Present your collections in elegant galleries with high resolution images.",
      },
      {
        title: "Integrated lookbook",
        description: "Show your pieces in real context through a modern and inspiring lookbook.",
      },
      {
        title: "Advanced filters",
        description: "Facilitate customer search with filters by size, color, category and price.",
      },
      {
        title: "Quick view",
        description: "Allow quick product preview without leaving the category page.",
      },
      {
        title: "Wishlist",
        description: "Customers can save favorite products to buy later.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Minimalist", "Elegant", "Fashion"],
      features: ["Mega menu", "Lookbook", "Advanced filters", "Quick view"],
      support:
        "Complete template with 6 pages optimized for fashion. Developed with clean code following platform best practices. Includes complete documentation in English and specialized technical support.",
    },
    relatedLayouts: ["layout-p", "layout-a", "layout-j"],
  },
  "layout-p": {
    id: "layout-p",
    name: "Layout P",
    slug: "layout-p",
    category: "Beauty & Cosmetics",
    price: "10,000.00",
    featured: true,
    images: {
      hero: "/sleepwear-e-commerce.jpg",
      desktop: "/sleepwear-e-commerce.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/sleepwear-e-commerce.jpg", "/beauty-products-store.jpg"],
    },
    description: {
      short:
        "Modern and bright layout, perfect for highlighting beauty and cosmetics products. Clean design that conveys trust and quality to your customers.",
      full: "Layout P is a professional template created specifically for beauty and cosmetics stores on Nuvemshop. With a bright and welcoming design, it values your products through high quality photography and strategic sections to highlight benefits, ingredients and results. Ideal for brands that want to convey professionalism and care.",
    },
    pages: ["Home", "Catalog", "Category page (PLP)", "Product page (PDP)", "Skincare routine", "Blog"],
    features: [
      {
        title: "Ingredients highlight",
        description: "Dedicated area to highlight special ingredients and benefits of each product.",
      },
      {
        title: "Personalized routines",
        description: "Create skincare routine pages to help customers build their perfect kit.",
      },
      {
        title: "Reviews with photos",
        description: "Review system that allows customers to submit photos of results.",
      },
      {
        title: "Tone guide",
        description: "Visual color selector for foundations, lipsticks and other products with variations.",
      },
      {
        title: "Product quiz",
        description: "Interactive questionnaire to indicate ideal products for each skin type.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Clean", "Bright", "Professional"],
      features: ["Interactive quiz", "Ingredients guide", "Review system", "Tone selector"],
      support:
        "Complete package with 6 pages optimized for beauty and cosmetics. Optimized and responsive code, following Nuvemshop standards. Detailed documentation and tutorial videos included.",
    },
    relatedLayouts: ["layout-a", "layout-v", "layout-g"],
  },
  "layout-g": {
    id: "layout-g",
    name: "Layout G",
    slug: "layout-g",
    category: "Technology & Electronics",
    price: "10,000.00",
    featured: true,
    images: {
      hero: "/industrial-supplies-store.jpg",
      desktop: "/industrial-supplies-store.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/industrial-supplies-store.jpg", "/automotive-parts-e-commerce.jpg"],
    },
    description: {
      short:
        "Technical and modern design for electronics stores. Interface focused on specifications, comparisons and detailed product information.",
      full: "Layout G is a robust template developed for technology and electronics e-commerce on Nuvemshop. Focusing on technical information and detailed specifications, it offers features such as comparison tables, expanded datasheets and 360° product galleries. Perfect for stores that need to present many technical details in an organized way.",
    },
    pages: ["Home", "Catalog", "Category page (PLP)", "Product page (PDP)", "Comparator", "Support"],
    features: [
      {
        title: "Complete datasheet",
        description: "Present all technical specifications clearly and organized.",
      },
      {
        title: "Product comparator",
        description: "Tool for customers to compare up to 4 products side by side.",
      },
      {
        title: "360° gallery",
        description: "Interactive product visualization with 360-degree rotation.",
      },
      {
        title: "Frequently asked questions",
        description: "Expandable FAQ system on product page for common questions.",
      },
      {
        title: "Stock indicator",
        description: "Show real-time availability and generate sense of urgency.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Technical", "Modern", "Professional"],
      features: ["Comparator", "Expanded datasheet", "360° gallery", "FAQ system"],
      support:
        "Complete template with 6 specialized pages in tech. Developed with performance in mind, optimized for SEO. Includes complete technical documentation and specialized support.",
    },
    relatedLayouts: ["layout-j", "layout-p", "layout-v"],
  },
  "layout-j": {
    id: "layout-j",
    name: "Layout J",
    slug: "layout-j",
    category: "Jewelry & Luxury",
    price: "14,000.00",
    featured: true,
    images: {
      hero: "/sewing-supplies-e-commerce.jpg",
      desktop: "/sewing-supplies-e-commerce.jpg",
      mobile: "/images/phone-mockup.png",
      gallery: ["/sewing-supplies-e-commerce.jpg", "/beauty-products-store.jpg"],
    },
    description: {
      short:
        "Luxurious and refined design for jewelry and premium products. Every detail designed to convey exclusivity and sophistication.",
      full: "Layout J is a premium template developed for jewelry stores and luxury brands on Nuvemshop. With a sophisticated and elegant design, it uses smooth animations, refined typography and plenty of white space to create an exclusive shopping experience. Features such as high definition zoom, certificates of authenticity and premium packaging highlight the value of your products.",
    },
    pages: ["Home", "Collections", "Category page (PLP)", "Product page (PDP)", "Our story", "Customization"],
    features: [
      {
        title: "Ultra HD zoom",
        description: "Very high definition visualization to show every detail of the pieces.",
      },
      {
        title: "Digital certificate",
        description: "Area to display certificates of authenticity and warranty of pieces.",
      },
      {
        title: "Customization service",
        description: "System for customers to request exclusive engravings and customizations.",
      },
      {
        title: "Gift wrapping",
        description: "Premium packaging option with packaging visualization in cart.",
      },
      {
        title: "Visit scheduling",
        description: "System to schedule in-person visits to showroom or physical store.",
      },
    ],
    specifications: {
      platform: "Nuvemshop",
      styles: ["Luxury", "Sophisticated", "Elegant"],
      features: ["HD zoom", "Digital certificates", "Customization system", "Scheduling"],
      support:
        "Premium template with 6 exclusive pages for jewelry stores. Developed with attention to the smallest details, optimized for high ticket conversion. VIP support and implementation consulting included.",
    },
    relatedLayouts: ["layout-v", "layout-a", "layout-p"],
  },
}
