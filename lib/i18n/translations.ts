export const translations = {
  navigation: {
    pt: {
      logo: { text: "TEC4U", href: "/" },
      mainMenu: [
        {
          label: "SOLUÇÕES",
          href: "/solucoes",
          hasDropdown: true,
          badge: "Destaque",
          dropdown: {
            title: "Confira as nossas soluções:",
            sections: [
              {
                icon: "monitor",
                title: "Tecnologias & Projetos",
                badge: "Destaque",
                description: "Desenvolvimento de soluções inovadoras para e-commerce e muito mais, do início ao fim",
                href: "/projetos",
              },
              {
                icon: "megaphone",
                title: "Marketing Digital",
                description: "Estratégias de conteúdo, mídias e design para aprimorar resultados e sua visibilidade",
                href: "/marketing-digital",
              },
              {
                icon: "users",
                title: "Consultoria",
                description: "Orientações diversas para otimizar processos e melhorar o desempenho do seu negócio",
                href: "/consultoria",
              },
              {
                icon: "zap",
                title: "Operação",
                description: "Aprimoramento de operações para impulsionar o manuseio das suas plataformas",
                href: "/operacoes",
              },
            ],
            platforms: {
              title: "Veja as plataformas de e-commerce com que trabalhamos",
              items: ["vtex", "shopify", "nuvemshop"],
              cta: { text: "VER MAIS", href: "/solucoes/plataformas" },
            },
            ads: {
              title: "Saiba mais sobre as nossas soluções em Ads",
              items: ["google", "meta", "x"],
              cta: { text: "VER MAIS", href: "/solucoes/ads" },
            },
            producer: {
              title: "Precisa de ajuda no audiovisual? Conheça a nossa produtora!",
              cta: { text: "VER MAIS", href: "/produtora" },
            },
          },
        },
        { label: "SOBRE NÓS", href: "/sobre-nos" },
        { label: "BLOG", href: "/blog" },
        { label: "CASES", href: "/nossos-projetos" },
        { label: "LOJA DE LAYOUTS", href: "/layouts", highlight: true },
      ],
      contact: { text: "CONTATO", href: "/contato" },
      language: {
        label: "IDIOMA",
        options: [
          { label: "Português", value: "pt" },
          { label: "English", value: "en" },
          { label: "Español", value: "es" },
        ],
      },
    },
    en: {
      logo: { text: "TEC4U", href: "/" },
      mainMenu: [
        {
          label: "SOLUTIONS",
          href: "/solucoes",
          hasDropdown: true,
          badge: "Featured",
          dropdown: {
            title: "Check out our solutions:",
            sections: [
              {
                icon: "monitor",
                title: "Technology & Projects",
                badge: "Featured",
                description: "Development of innovative solutions for e-commerce and more, from start to finish",
                href: "/projetos",
              },
              {
                icon: "megaphone",
                title: "Digital Marketing",
                description: "Content, media and design strategies to improve results and visibility",
                href: "/marketing-digital",
              },
              {
                icon: "users",
                title: "Consulting",
                description: "Various guidelines to optimize processes and improve your business performance",
                href: "/consultoria",
              },
              {
                icon: "zap",
                title: "Operations",
                description: "Operation enhancement to boost the handling of your platforms",
                href: "/operacoes",
              },
            ],
            platforms: {
              title: "See the e-commerce platforms we work with",
              items: ["vtex", "shopify", "nuvemshop"],
              cta: { text: "LEARN MORE", href: "/solucoes/plataformas" },
            },
            ads: {
              title: "Learn more about our Ads solutions",
              items: ["google", "meta", "x"],
              cta: { text: "LEARN MORE", href: "/solucoes/ads" },
            },
            producer: {
              title: "Need help with audiovisual? Meet our production company!",
              cta: { text: "LEARN MORE", href: "/produtora" },
            },
          },
        },
        { label: "ABOUT US", href: "/sobre-nos" },
        { label: "BLOG", href: "/blog" },
        { label: "CASES", href: "/nossos-projetos" },
        { label: "LAYOUT STORE", href: "/layouts", highlight: true },
      ],
      contact: { text: "CONTACT", href: "/contato" },
      language: {
        label: "LANGUAGE",
        options: [
          { label: "Português", value: "pt" },
          { label: "English", value: "en" },
          { label: "Español", value: "es" },
        ],
      },
    },
  },
  home: {
    pt: {
      hero: {
        badge: "AGÊNCIA 360º",
        title: "Soluções 100%",
        titleBold: "personalizadas",
        titleEnd: "para o seu negócio!",
        description:
          "Ajudamos sua marca a construir uma presença digital forte e consistente, com estratégia bem pensada, planejamento detalhado e uma execução que realmente faz acontecer.",
      },
      solutions: [
        {
          id: "projetos",
          title: "TECNOLOGIAS & PROJETOS",
          description:
            "Soluções personalizadas e inovadoras, transformando suas ideias em realidade. Desde a concepção até a implementação, nossa equipe utiliza tecnologias de ponta e as melhores plataformas para impulsionar no digital.",
          href: "/projetos",
        },
        {
          id: "marketing",
          title: "MARKETING DIGITAL",
          description:
            "Conosco, você não apenas aumenta a visibilidade do seu produto, mas também constrói relacionamentos duradouros com seus clientes, elevando a fidelidade à sua marca. Juntos atingiremos patamares mais altos!",
          href: "/marketing-digital",
        },
        {
          id: "consultoria",
          title: "CONSULTORIA",
          description:
            "Nosso objetivo com a consultoria é identificar oportunidades, resolver desafios e otimizar processos, proporcionando crescimento e sucesso. Conte conosco para aprimorar e proteger todos os aspectos da sua empresa.",
          href: "/consultoria",
        },
        {
          id: "operacoes",
          title: "OPERAÇÕES",
          description:
            "Otimização de processos, gerenciamento de recursos e melhorias contínuas para sua empresa. Nossa abordagem estratégica visa maximizar a eficácia operacional e a satisfação do cliente.",
          href: "/operacoes",
        },
      ],
      stats: [
        { value: "80+", label: "projetos finalizados" },
        { value: "10+", label: "anos de experiência" },
        { value: "100+", label: "clientes pelo mundo" },
      ],
      method: {
        badge: "feito pensado em vender mais",
        title: "O método",
        titleHighlight: "TEC4U",
        description:
          "Utilizamos tecnologias de ponta e técnicas inovadoras para otimizar a experiência do usuário, aumentar a visibilidade do seu produto e maximizar suas conversões.",
        pillars: [
          {
            icon: "responsive",
            title: "Design responsivo e inteligente",
            description:
              "Oferecemos designs que se adaptam a todos os dispositivos, garantindo uma experiência do usuário intuitiva e atraente.",
          },
          {
            icon: "delivery",
            title: "Entregas justas e no prazo",
            description:
              "Comprometemo-nos com prazos realistas e cumprimos nossas entregas, mantendo a qualidade em cada projeto.",
          },
          {
            icon: "bug-free",
            title: "Desenvolvimento a prova de bugs",
            description:
              "Utilizamos métodos de teste rigorosos para garantir um software livre de falhas e uma navegação suave para o usuário.",
          },
          {
            icon: "retention",
            title: "Foco na retenção",
            description:
              "Trabalhamos para manter seus clientes satisfeitos e engajados, aumentando a lealdade à sua marca.",
          },
          {
            icon: "transparency",
            title: "Transparência a todo custo",
            description:
              "Mantemos uma comunicação aberta e honesta, garantindo que você esteja sempre informado sobre o progresso do seu projeto.",
          },
        ],
      },
      about: {
        badge: "expertise em e-commerce e mkt digital",
        title: "Somos uma agência de performance com mais de",
        titleHighlight: "10 anos de experiência",
        description:
          "Com uma década de know-how, dominamos a arte de impulsionar o crescimento e a visibilidade online. Seja para aumento de vendas, leads ou reconhecimento de marca, nossa equipe dedicada está pronta para levar seu negócio ao próximo nível.",
        ctas: [
          { text: "CONTATO", href: "/contato", variant: "primary" },
          { text: "conheça-nos", href: "/sobre-nos", variant: "secondary" },
        ],
      },
      projects: {
        badge: "crias da casa",
        title: "Conheça alguns de nossos",
        titleHighlight: "projetos",
        description:
          "Trabalhos orgulhosamente desenvolvidos e aprimorados internamente. Ao explorar esses projetos, você terá uma visão abrangente de nossa expertise e criatividade.",
      },
      partners: { title: "NOSSOS PARCEIROS" },
    },
    en: {
      hero: {
        badge: "360º AGENCY",
        title: "100%",
        titleBold: "customized",
        titleEnd: "solutions for your business!",
        description:
          "We help your brand build a strong and consistent digital presence, with well-thought-out strategy, detailed planning, and execution that truly delivers.",
      },
      solutions: [
        {
          id: "projetos",
          title: "TECHNOLOGY & PROJECTS",
          description:
            "Customized and innovative solutions, turning your ideas into reality. From conception to implementation, our team uses cutting-edge technologies and the best platforms to boost your digital presence.",
          href: "/projetos",
        },
        {
          id: "marketing",
          title: "DIGITAL MARKETING",
          description:
            "With us, you not only increase your product visibility but also build lasting relationships with your customers, elevating your brand loyalty. Together we will reach higher levels!",
          href: "/marketing-digital",
        },
        {
          id: "consultoria",
          title: "CONSULTING",
          description:
            "Our goal with consulting is to identify opportunities, solve challenges, and optimize processes, providing growth and success. Count on us to improve and protect all aspects of your company.",
          href: "/consultoria",
        },
        {
          id: "operacoes",
          title: "OPERATIONS",
          description:
            "Process optimization, resource management, and continuous improvements for your company. Our strategic approach aims to maximize operational effectiveness and customer satisfaction.",
          href: "/operacoes",
        },
      ],
      stats: [
        { value: "80+", label: "completed projects" },
        { value: "10+", label: "years of experience" },
        { value: "100+", label: "clients worldwide" },
      ],
      method: {
        badge: "designed to sell more",
        title: "The",
        titleHighlight: "TEC4U",
        description:
          "We use cutting-edge technologies and innovative techniques to optimize user experience, increase your product visibility, and maximize conversions.",
        pillars: [
          {
            icon: "responsive",
            title: "Responsive and intelligent design",
            description:
              "We offer designs that adapt to all devices, ensuring an intuitive and attractive user experience.",
          },
          {
            icon: "delivery",
            title: "Fair and on-time deliveries",
            description:
              "We commit to realistic deadlines and fulfill our deliveries, maintaining quality in every project.",
          },
          {
            icon: "bug-free",
            title: "Bug-proof development",
            description: "We use rigorous testing methods to ensure bug-free software and smooth navigation for users.",
          },
          {
            icon: "retention",
            title: "Focus on retention",
            description: "We work to keep your customers satisfied and engaged, increasing loyalty to your brand.",
          },
          {
            icon: "transparency",
            title: "Transparency at all costs",
            description:
              "We maintain open and honest communication, ensuring you are always informed about your project's progress.",
          },
        ],
      },
      about: {
        badge: "expertise in e-commerce and digital marketing",
        title: "We are a performance agency with over",
        titleHighlight: "10 years of experience",
        description:
          "With a decade of know-how, we master the art of boosting online growth and visibility. Whether for increasing sales, leads, or brand recognition, our dedicated team is ready to take your business to the next level.",
        ctas: [
          { text: "CONTACT", href: "/contato", variant: "primary" },
          { text: "get to know us", href: "/sobre-nos", variant: "secondary" },
        ],
      },
      projects: {
        badge: "our creations",
        title: "Get to know some of our",
        titleHighlight: "projects",
        description:
          "Works proudly developed and refined internally. By exploring these projects, you will have a comprehensive view of our expertise and creativity.",
      },
      partners: { title: "OUR PARTNERS" },
    },
  },
  sobre: {
    pt: {
      hero: {
        badge: "SOBRE NÓS",
        title: "Mais de uma década",
        titleHighlight: "de história no mundo digital",
        description:
          "Somos movidos pela paixão de criar soluções inovadoras que transformam negócios. Descubra como nossa equipe dedicada e nossos pilares estratégicos podem levar seu negócio a um próximo nível. Juntos, construímos o futuro.",
        ctas: [
          { text: "CONTATO", href: "/contato", variant: "primary" },
          { text: "NOSSOS PILARES", href: "#pilares", variant: "secondary" },
        ],
      },
      purpose: {
        badge: "NOSSO PROPÓSITO",
        title: "Humanizar",
        titleHighlight: "toda a jornada",
        description:
          'Na TEC4U, o H2H (Human to Human, ou "de humano para humano", em português) é um valor fundamental. Acreditamos na importância de humanizar todo o processo, desde a concepção, passando pelo marketing, até a venda e o pós-venda. Esse valor guia nossa abordagem para construir parcerias significativas e duradouras, além de fornecer serviços excepcionais. Todos os nossos projetos e serviços são 100% personalizados.',
        bannerTitle: "H2H",
        bannerSubtitle: "Humanizamos todas as etapas",
      },
      pillars: {
        badge: "O ALICERCE",
        title: "Nossos",
        titleHighlight: "pilares",
        description:
          "A TEC4U é estruturada em quatro pilares essenciais que representam a base da nossa entrega: tecnologia, consultoria, operações e marketing. Cada um liderado por especialistas que unem estratégia, execução e criatividade para gerar resultados reais. Juntos, formam o alicerce da nossa parceria com foco em performance e transformação.",
        items: [
          {
            id: "tech",
            icon: "monitor",
            title: "TECNOLOGIA & PROJETOS",
            description:
              "A nossa visão da tecnologia é o elo que une a expertise e as nossas realizações por meio de projetos pensados e focados em performance.",
            link: { text: "Saiba mais sobre Tech", href: "/solucoes/tecnologia" },
            color: "cyan",
          },
          {
            id: "consultoria",
            icon: "users",
            title: "CONSULTORIA",
            description:
              "Nossa consultoria vai além dos números; é sobre realizar metas e alcançar resultados impactantes.",
            link: { text: "Saiba mais sobre Consultoria", href: "/solucoes/consultoria" },
            color: "purple",
          },
          {
            id: "operacoes",
            icon: "zap",
            title: "OPERAÇÕES",
            description:
              "Transformamos cada ação em um passo firme em direção ao sucesso. Faça da excelência operacional a sua marca registrada conosco!",
            link: { text: "Saiba mais sobre Ops", href: "/solucoes/operacoes" },
            color: "green",
          },
          {
            id: "marketing",
            icon: "megaphone",
            title: "MARKETING",
            description:
              "O marketing é a força que transforma metas em realidade e um dos pilares essenciais para o sucesso de qualquer empresa.",
            link: { text: "Saiba mais sobre MKT", href: "/solucoes/marketing" },
            color: "pink",
          },
        ],
      },
    },
    en: {
      hero: {
        badge: "ABOUT US",
        title: "Over a decade",
        titleHighlight: "of history in the digital world",
        description:
          "We are driven by the passion to create innovative solutions that transform businesses. Discover how our dedicated team and strategic pillars can take your business to the next level. Together, we build the future.",
        ctas: [
          { text: "CONTACT", href: "/contato", variant: "primary" },
          { text: "OUR PILLARS", href: "#pilares", variant: "secondary" },
        ],
      },
      purpose: {
        badge: "OUR PURPOSE",
        title: "Humanize",
        titleHighlight: "the entire journey",
        description:
          "At TEC4U, H2H (Human to Human) is a fundamental value. We believe in the importance of humanizing the entire process, from conception, through marketing, to sales and after-sales. This value guides our approach to building meaningful and lasting partnerships, as well as providing exceptional services. All our projects and services are 100% customized.",
        bannerTitle: "H2H",
        bannerSubtitle: "We humanize every step",
      },
      pillars: {
        badge: "THE FOUNDATION",
        title: "Our",
        titleHighlight: "pillars",
        description:
          "TEC4U is structured on four essential pillars that represent the foundation of our delivery: technology, consulting, operations, and marketing. Each led by specialists who combine strategy, execution, and creativity to generate real results. Together, they form the foundation of our partnership focused on performance and transformation.",
        items: [
          {
            id: "tech",
            icon: "monitor",
            title: "TECHNOLOGY & PROJECTS",
            description:
              "Our vision of technology is the link that unites expertise and our achievements through thoughtful projects focused on performance.",
            link: { text: "Learn more about Tech", href: "/solucoes/tecnologia" },
            color: "cyan",
          },
          {
            id: "consultoria",
            icon: "users",
            title: "CONSULTING",
            description:
              "Our consulting goes beyond numbers; it's about achieving goals and reaching impactful results.",
            link: { text: "Learn more about Consulting", href: "/solucoes/consultoria" },
            color: "purple",
          },
          {
            id: "operacoes",
            icon: "zap",
            title: "OPERATIONS",
            description:
              "We transform each action into a firm step towards success. Make operational excellence your trademark with us!",
            link: { text: "Learn more about Ops", href: "/solucoes/operacoes" },
            color: "green",
          },
          {
            id: "marketing",
            icon: "megaphone",
            title: "MARKETING",
            description:
              "Marketing is the force that transforms goals into reality and one of the essential pillars for any company's success.",
            link: { text: "Learn more about MKT", href: "/solucoes/marketing" },
            color: "pink",
          },
        ],
      },
    },
  },
  layouts: {
    pt: {
      hero: {
        badge: "LOJA DE LAYOUTS",
        title: "Layouts profissionais para lojas virtuais",
        titleHighlight: "de alta performance",
        description:
          "Transforme sua loja virtual com nossos layouts premium, desenvolvidos especialmente para maximizar conversões e proporcionar uma experiência excepcional aos seus clientes.",
        platforms: ["VTEX", "Nuvemshop", "Shopify", "Wake", "Tray"],
      },
      categories: {
        title: "Categorias em destaque",
        items: [
          { name: "Moda", icon: "shirt", count: 12 },
          { name: "Eletrônicos", icon: "laptop", count: 8 },
          { name: "Beleza", icon: "sparkles", count: 10 },
          { name: "Casa & Decoração", icon: "home", count: 15 },
        ],
      },
      gallery: {
        title: "Explore nossos",
        titleHighlight: "layouts",
        description:
          "Cada layout é cuidadosamente projetado para entregar performance e conversão. Escolha o que melhor se adapta ao seu negócio.",
      },
      benefits: {
        badge: "QUALIDADE GARANTIDA",
        title: "Por que escolher",
        titleHighlight: "nossos layouts?",
        items: [
          {
            icon: "zap",
            title: "Alta Performance",
            description: "Otimizados para velocidade e SEO, garantindo excelentes resultados no Google PageSpeed.",
          },
          {
            icon: "monitor",
            title: "Design Responsivo",
            description: "Layouts que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela.",
          },
          {
            icon: "shopping-cart",
            title: "Foco em Conversão",
            description: "Desenvolvidos com base em estudos de UX para maximizar suas vendas.",
          },
          {
            icon: "headphones",
            title: "Suporte Dedicado",
            description: "Equipe especializada pronta para ajudar na implementação e customização.",
          },
        ],
      },
      cta: {
        badge: "PRONTO PARA COMEÇAR?",
        title: "Transforme sua loja virtual com nossos",
        titleHighlight: "layouts premium",
        description:
          "Entre em contato e descubra como nossos layouts podem elevar o padrão da sua loja virtual e aumentar suas conversões.",
        ctas: [
          { text: "VER TODOS OS LAYOUTS", href: "/layouts", variant: "primary" },
          { text: "FALAR COM ESPECIALISTA", href: "/contato", variant: "secondary" },
        ],
      },
    },
    en: {
      hero: {
        badge: "LAYOUT STORE",
        title: "Professional layouts for",
        titleHighlight: "high-performance online stores",
        description:
          "Transform your online store with our premium layouts, specially developed to maximize conversions and provide an exceptional experience to your customers.",
        platforms: ["VTEX", "Nuvemshop", "Shopify", "Wake", "Tray"],
      },
      categories: {
        title: "Featured categories",
        items: [
          { name: "Fashion", icon: "shirt", count: 12 },
          { name: "Electronics", icon: "laptop", count: 8 },
          { name: "Beauty", icon: "sparkles", count: 10 },
          { name: "Home & Decor", icon: "home", count: 15 },
        ],
      },
      gallery: {
        title: "Explore our",
        titleHighlight: "layouts",
        description:
          "Each layout is carefully designed to deliver performance and conversion. Choose the one that best fits your business.",
      },
      benefits: {
        badge: "QUALITY GUARANTEED",
        title: "Why choose",
        titleHighlight: "our layouts?",
        items: [
          {
            icon: "zap",
            title: "High Performance",
            description: "Optimized for speed and SEO, ensuring excellent results on Google PageSpeed.",
          },
          {
            icon: "monitor",
            title: "Responsive Design",
            description: "Layouts that perfectly adapt to all devices and screen sizes.",
          },
          {
            icon: "shopping-cart",
            title: "Conversion Focused",
            description: "Developed based on UX studies to maximize your sales.",
          },
          {
            icon: "headphones",
            title: "Dedicated Support",
            description: "Specialized team ready to help with implementation and customization.",
          },
        ],
      },
      cta: {
        badge: "READY TO START?",
        title: "Transform your online store with our",
        titleHighlight: "premium layouts",
        description:
          "Get in touch and discover how our layouts can elevate your online store standard and increase your conversions.",
        ctas: [
          { text: "SEE ALL LAYOUTS", href: "/layouts", variant: "primary" },
          { text: "TALK TO A SPECIALIST", href: "/contato", variant: "secondary" },
        ],
      },
    },
  },
  layoutDetail: {
    pt: {
      buyButton: "Comprar",
      desktop: "Desktop",
      mobile: "Mobile",
      pagesIncluded: "Páginas incluídas:",
      mainFeatures: "Funcionalidades principais:",
      readyToLaunch: "Estrutura pronta para lançar:",
      support: "Suporte:",
      supportText:
        "Se precisar de ajuda, tiver dúvidas ou quiser enviar um feedback sobre o layout, entre em contato conosco.",
      compatibleWith: "Compatível com:",
      styles: "Estilos:",
      templateFeatures: "Features do Template:",
      seeAlso: "Veja também:",
      viewDetails: "ver detalhes",
      ctaBadge: "PRONTO PARA COMEÇAR?",
      ctaTitle: "Transforme sua loja virtual com o",
      ctaDescription:
        "Entre em contato com nossa equipe e descubra como podemos acelerar o lançamento da sua loja com este layout de alta performance e design impecável.",
      ctaButton1: "Falar com especialista",
      ctaButton2: "Ver todos os layouts",
    },
    en: {
      buyButton: "Buy",
      desktop: "Desktop",
      mobile: "Mobile",
      pagesIncluded: "Pages included:",
      mainFeatures: "Main features:",
      readyToLaunch: "Ready to launch structure:",
      support: "Support:",
      supportText: "If you need help, have questions or want to send feedback about the layout, contact us.",
      compatibleWith: "Compatible with:",
      styles: "Styles:",
      templateFeatures: "Template Features:",
      seeAlso: "See also:",
      viewDetails: "view details",
      ctaBadge: "READY TO START?",
      ctaTitle: "Transform your online store with",
      ctaDescription:
        "Contact our team and discover how we can accelerate your store launch with this high-performance and beautifully designed layout.",
      ctaButton1: "Talk to a specialist",
      ctaButton2: "See all layouts",
    },
  },
  footer: {
    pt: {
      address: "R. Gomes de Carvalho, 1629 - Vila Olímpia, São Paulo - SP, 04547-006, Brasil.",
      copyright: "© Copyright 2024 - TEC4U. Todos os direitos reservados",
    },
    en: {
      address: "R. Gomes de Carvalho, 1629 - Vila Olímpia, São Paulo - SP, 04547-006, Brazil.",
      copyright: "© Copyright 2024 - TEC4U. All rights reserved",
    },
  },
}
