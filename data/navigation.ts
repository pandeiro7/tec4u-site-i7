export const navigationData = {
  logo: {
    text: "TEC4U",
    href: "/",
  },
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
          cta: {
            text: "VER MAIS",
            href: "/solucoes/plataformas",
          },
        },
        ads: {
          title: "Saiba mais sobre as nossas soluções em Ads",
          items: ["google", "meta", "x"],
          cta: {
            text: "VER MAIS",
            href: "/solucoes/ads",
          },
        },
        producer: {
          title: "Precisa de ajuda no audiovisual? Conheça a nossa produtora!",
          cta: {
            text: "VER MAIS",
            href: "/produtora",
          },
        },
      },
    },
    { label: "SOBRE NÓS", href: "/sobre-nos" },
    { label: "BLOG", href: "/blog" },
    { label: "CASES", href: "/cases" },
    { label: "LOJA DE LAYOUTS", href: "/layouts", highlight: true },
  ],
  secondaryMenu: [
    { label: "mkt digital", href: "/marketing-digital" },
    { label: "consultoria", href: "/consultoria" },
    { label: "operações", href: "/operacoes" },
    { label: "trabalhe conosco", href: "/trabalhe-conosco" },
  ],
  footerLinks: [
    { label: "TECH & PROJETOS", href: "/projetos" },
    { label: "MKT DIGITAL", href: "/marketing-digital" },
    { label: "CONSULTORIA", href: "/consultoria" },
    { label: "OPERAÇÕES", href: "/operacoes" },
    { label: "TWODUO", href: "/twoduo" },
    { label: "SOBRE NÓS", href: "/sobre-nos" },
    { label: "LAYOUTS", href: "/layouts" },
    { label: "CONTATO", href: "/contato" },
    { label: "TRABALHE CONOSCO", href: "/trabalhe-conosco" },
  ],
  social: [
    { platform: "instagram", href: "https://www.instagram.com/tec4udigital/", icon: "instagram" },
    { platform: "linkedin", href: "https://www.linkedin.com/company/tec4u-digital/", icon: "linkedin" },
    { platform: "whatsapp", href: "https://wa.me/5511973127075", icon: "whatsapp" },
  ],
  contact: {
    text: "CONTATO",
    href: "/contato",
  },
  language: {
    label: "IDIOMA",
    options: [
      { label: "Português", value: "pt" },
      { label: "English", value: "en" },
      { label: "Español", value: "es" },
    ],
  },
}

export const footerData = {
  address: "R. Gomes de Carvalho, 1629 - Vila Olímpia, São Paulo - SP, 04547-006, Brasil.",
  copyright: "© Copyright 2024 - TEC4U. Todos os direitos reservados",
}
