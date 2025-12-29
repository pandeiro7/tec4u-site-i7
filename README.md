# Tec4U Digital - Website Institucional

Site institucional da Tec4U Digital, uma agência 360° especializada em soluções digitais personalizadas para e-commerce e marketing digital.

## 📋 Requisitos Iniciais

Antes de começar, certifique-se de ter instalado em sua máquina:

### Ferramentas Necessárias

- **Node.js** (versão 18.17 ou superior)
  - [Download Node.js](https://nodejs.org/)
  - Verificar versão: `node --version`
  
- **npm** (geralmente vem com Node.js) ou **pnpm** (recomendado)
  - npm: já incluído com Node.js
  - pnpm: `npm install -g pnpm`
  - Verificar versão: `npm --version` ou `pnpm --version`

- **Git** (para controle de versão)
  - [Download Git](https://git-scm.com/)
  - Verificar versão: `git --version`

### Versões Recomendadas

\`\`\`bash
Node.js: v18.17.0 ou superior
npm: v9.0.0 ou superior
pnpm: v8.0.0 ou superior (opcional, mas recomendado)
\`\`\`

## 🚀 Instalação

### 1. Clone o Repositório

\`\`\`bash
git clone <url-do-repositorio>
cd tec4u-website
\`\`\`

### 2. Instale as Dependências

Escolha um gerenciador de pacotes:

**Usando npm:**
\`\`\`bash
npm install
\`\`\`

**Usando pnpm (recomendado):**
\`\`\`bash
pnpm install
\`\`\`

### 3. Configuração de Variáveis de Ambiente (Opcional)

O projeto atualmente não requer variáveis de ambiente obrigatórias para rodar em desenvolvimento. No futuro, quando integrar com CMS ou APIs externas, você precisará criar um arquivo `.env.local`:

\`\`\`bash
# Copie o arquivo de exemplo (quando disponível)
cp .env.example .env.local
\`\`\`

Exemplo de variáveis que podem ser necessárias no futuro:
\`\`\`env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## 💻 Execução

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento:

**Usando npm:**
\`\`\`bash
npm run dev
\`\`\`

**Usando pnpm:**
\`\`\`bash
pnpm dev
\`\`\`

O site estará disponível em: **http://localhost:3000**

### Build de Produção

Para criar uma build otimizada para produção:

\`\`\`bash
npm run build
# ou
pnpm build
\`\`\`

### Executar Build de Produção Localmente

Após criar a build, você pode testar localmente:

\`\`\`bash
npm run start
# ou
pnpm start
\`\`\`

### Linting

Para verificar problemas de código:

\`\`\`bash
npm run lint
# ou
pnpm lint
\`\`\`

## 📁 Estrutura de Pastas

\`\`\`
tec4u-website/
├── app/                          # Páginas e rotas (Next.js App Router)
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página inicial (Home)
│   ├── sobre-nos/              # Página Sobre Nós
│   ├── nossos-projetos/        # Página de Projetos/Cases
│   ├── layouts/                # Página de Layouts
│   ├── blog/                   # Blog e posts
│   ├── contato/                # Página de Contato
│   └── [servicos]/             # Páginas de serviços dinâmicas
│
├── components/                  # Componentes React reutilizáveis
│   ├── layout/                 # Componentes de layout
│   │   ├── header.tsx         # Cabeçalho do site
│   │   └── footer.tsx         # Rodapé do site
│   ├── sections/              # Seções de página
│   │   ├── hero.tsx          # Seção hero da home
│   │   ├── solutions-grid.tsx # Grade de soluções
│   │   ├── projects-grid.tsx  # Grade de projetos
│   │   └── ...               # Outras seções
│   ├── services/             # Componentes específicos de serviços
│   ├── blog/                 # Componentes do blog
│   └── ui/                   # Componentes UI base (shadcn/ui)
│
├── data/                       # Dados mockados (futuro CMS)
│   ├── navigation.ts          # Dados de navegação
│   ├── home.ts               # Dados da página inicial
│   ├── sobre.ts              # Dados da página sobre
│   ├── layouts.ts            # Dados de layouts
│   ├── blog/                 # Dados do blog
│   └── services/             # Dados dos serviços
│
├── lib/                       # Utilitários e configurações
│   ├── utils.ts              # Funções utilitárias
│   └── i18n/                 # Sistema de internacionalização
│       ├── context.tsx       # Contexto de idioma
│       ├── hooks.ts          # Hooks de tradução
│       └── translations.ts   # Traduções PT/EN
│
├── hooks/                     # React Hooks customizados
│   ├── use-mobile.ts         # Hook para detectar mobile
│   └── use-toast.ts          # Hook para notificações
│
├── public/                    # Arquivos estáticos
│   ├── images/               # Imagens do site
│   ├── icons/                # Ícones SVG
│   └── ...                   # Logos e outros assets
│
├── styles/                    # Estilos globais
│   └── globals.css           # CSS global e variáveis Tailwind
│
├── next.config.mjs           # Configuração do Next.js
├── tsconfig.json             # Configuração TypeScript
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
\`\`\`

## 🛠️ Como Fazer Alterações

### Editando Conteúdo das Páginas

Todo o conteúdo do site está organizado em arquivos TypeScript na pasta `data/`. Isso facilita a manutenção e prepara o projeto para futura integração com CMS.

#### Exemplo: Alterar conteúdo da Home

Edite o arquivo `data/home.ts`:

\`\`\`typescript
// data/home.ts
export const heroData = {
  badge: "AGÊNCIA 360°",
  title: "Soluções 100% personalizadas para o seu negócio!",
  // ... outros campos
}
\`\`\`

#### Exemplo: Adicionar um novo projeto

Edite `data/home.ts` e adicione no array `projectsData`:

\`\`\`typescript
export const projectsData = [
  // ... projetos existentes
  {
    image: "/seu-novo-projeto.jpg",
    title: "Nome do Projeto",
    category: "E-commerce",
    description: "Descrição do projeto..."
  }
]
\`\`\`

### Adicionando Novas Páginas

#### 1. Criar arquivo de página

Crie um novo arquivo em `app/`:

\`\`\`typescript
// app/nova-pagina/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nova Página - Tec4U Digital',
  description: 'Descrição da nova página',
}

export default function NovaPagina() {
  return (
    <div>
      <h1>Nova Página</h1>
    </div>
  )
}
\`\`\`

#### 2. Adicionar ao menu de navegação

Edite `data/navigation.ts`:

\`\`\`typescript
export const navigationData = {
  menu: [
    // ... itens existentes
    { label: "Nova Página", href: "/nova-pagina" }
  ]
}
\`\`\`

### Criando Novos Componentes

Componentes devem ser criados na pasta `components/` seguindo a estrutura existente:

\`\`\`typescript
// components/sections/meu-componente.tsx
import { Button } from '@/components/ui/button'

interface MeuComponenteProps {
  title: string
  description: string
}

export function MeuComponente({ title, description }: MeuComponenteProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}
\`\`\`

### Estilização com Tailwind CSS

O projeto usa Tailwind CSS v4 com configuração no `app/globals.css`:

\`\`\`css
/* app/globals.css */
@theme inline {
  --color-primary: #E91E63;
  --font-sans: 'Inter', sans-serif;
}
\`\`\`

Classes utilitárias estão disponíveis em `lib/utils.ts`:

\`\`\`typescript
import { cn } from '@/lib/utils'

<div className={cn("base-classes", condition && "conditional-classes")} />
\`\`\`

### Sistema de Tradução

O site possui suporte a múltiplos idiomas (PT/EN):

#### Adicionar novas traduções

Edite `lib/i18n/translations.ts`:

\`\`\`typescript
export const translations = {
  pt: {
    home: {
      hero: {
        title: "Título em Português"
      }
    }
  },
  en: {
    home: {
      hero: {
        title: "Title in English"
      }
    }
  }
}
\`\`\`

#### Usar traduções em componentes

\`\`\`typescript
import { useTranslations } from '@/lib/i18n/hooks'

export function MeuComponente() {
  const t = useTranslations()
  return <h1>{t.home.hero.title}</h1>
}
\`\`\`

## 🚢 Deploy

### Deploy na Vercel (Recomendado)

O projeto é otimizado para deploy na Vercel:

1. **Conecte seu repositório:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Import Project"
   - Conecte seu repositório Git

2. **Configure o projeto:**
   - Framework Preset: Next.js
   - Build Command: `npm run build` ou `pnpm build`
   - Output Directory: `.next` (padrão)

3. **Adicione variáveis de ambiente (se necessário):**
   - Na dashboard da Vercel, acesse Settings > Environment Variables

4. **Deploy:**
   - Clique em "Deploy"
   - Cada push para a branch principal fará deploy automático

### Deploy em Outros Serviços

#### Netlify

\`\`\`bash
# Build command
npm run build

# Publish directory
.next
\`\`\`

#### Deploy Manual (VPS)

\`\`\`bash
# 1. Build do projeto
npm run build

# 2. Inicie o servidor
npm run start

# 3. Configure PM2 para manter rodando
npm install -g pm2
pm2 start npm --name "tec4u-site" -- start
pm2 save
pm2 startup
\`\`\`

## 🐛 Troubleshooting

### Problema: Erro ao instalar dependências

**Sintoma:** Erros durante `npm install` ou `pnpm install`

**Solução:**
\`\`\`bash
# Limpe o cache
npm cache clean --force
# ou
pnpm store prune

# Delete node_modules e lock files
rm -rf node_modules package-lock.json pnpm-lock.yaml

# Reinstale
npm install
# ou
pnpm install
\`\`\`

### Problema: Porta 3000 já está em uso

**Sintoma:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solução:**
\`\`\`bash
# Encontre o processo usando a porta 3000
lsof -i :3000

# Mate o processo (substitua PID pelo número encontrado)
kill -9 PID

# Ou use uma porta diferente
PORT=3001 npm run dev
\`\`\`

### Problema: Fontes não carregam em produção

**Sintoma:** Fontes não aparecem corretamente após deploy

**Solução:**
- Verifique se as fontes estão importadas corretamente em `app/layout.tsx`
- Certifique-se de que `next.config.mjs` está configurado corretamente
- Limpe o cache do navegador (Ctrl+Shift+R)

### Problema: Imagens não aparecem

**Sintoma:** Imagens quebradas em produção

**Solução:**
- Verifique se as imagens estão na pasta `public/`
- Use caminhos relativos: `/image.jpg` ao invés de `./image.jpg`
- Configure `next.config.mjs` para domínios externos se necessário:

\`\`\`javascript
// next.config.mjs
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
}
\`\`\`

### Problema: Erro de hidratação do React

**Sintoma:** `Warning: Text content did not match...`

**Solução:**
- Verifique se não há conteúdo dinâmico sendo renderizado no servidor
- Use `useEffect` para conteúdo que depende do cliente
- Certifique-se de que a estrutura HTML é idêntica no servidor e cliente

### Problema: Build falha com erro de TypeScript

**Sintoma:** Erros de tipo durante `npm run build`

**Solução:**
\`\`\`bash
# Execute o type checker
npx tsc --noEmit

# Corrija os erros apontados
# Se necessário, adicione // @ts-ignore temporariamente (não recomendado)
\`\`\`

### Problema: CSS não aplica em produção

**Sintoma:** Estilos funcionam em dev mas não em produção

**Solução:**
- Limpe `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`
- Verifique se não há estilos inline que podem estar causando conflitos
- Confirme que `postcss.config.mjs` está configurado corretamente

## 🤝 Contribuição

### Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch para sua feature:**
   \`\`\`bash
   git checkout -b feature/MinhaNovaFeature
   \`\`\`
3. **Commit suas mudanças:**
   \`\`\`bash
   git commit -m 'Adiciona nova feature X'
   \`\`\`
4. **Push para a branch:**
   \`\`\`bash
   git push origin feature/MinhaNovaFeature
   \`\`\`
5. **Abra um Pull Request**

### Padrões de Código

- Use TypeScript para type safety
- Siga as convenções ESLint configuradas
- Nomeie componentes em PascalCase
- Nomeie arquivos em kebab-case
- Adicione comentários para lógica complexa
- Mantenha componentes pequenos e reutilizáveis

### Commits Semânticos

Use prefixos nos commits:

\`\`\`
feat: Nova funcionalidade
fix: Correção de bug
docs: Mudanças na documentação
style: Formatação, ponto e vírgula, etc
refactor: Refatoração de código
test: Adição de testes
chore: Atualização de build, configs, etc
\`\`\`

Exemplo:
\`\`\`bash
git commit -m "feat: adiciona página de contato com formulário"
\`\`\`

## 📚 Recursos Adicionais

### Documentação das Tecnologias

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Comandos Úteis

\`\`\`bash
# Ver todas as dependências
npm list --depth=0

# Atualizar dependências
npm update

# Verificar dependências desatualizadas
npm outdated

# Analisar bundle size
npm run build && npx @next/bundle-analyzer
\`\`\`

## 📝 Notas Importantes

### Preparação para CMS

Os arquivos em `data/` são mockados e preparados para futura integração com CMS (Strapi, Contentful, etc.):

- Mantenha a estrutura de dados consistente
- Use TypeScript interfaces para type safety
- Documente novos campos adicionados
- Considere campos obrigatórios vs opcionais

### Performance

O projeto está otimizado para performance:

- Imagens otimizadas com Next.js Image
- Lazy loading de componentes
- Font optimization
- Code splitting automático

### SEO

Cada página deve ter metadata apropriada:

\`\`\`typescript
export const metadata: Metadata = {
  title: 'Título da Página - Tec4U Digital',
  description: 'Descrição clara e concisa da página',
  openGraph: {
    title: 'Título para redes sociais',
    description: 'Descrição para compartilhamento',
    images: ['/og-image.jpg'],
  }
}
\`\`\`

## 📞 Suporte

Para dúvidas ou problemas:

- Abra uma issue no repositório
- Entre em contato com a equipe de desenvolvimento
- Consulte a documentação das tecnologias utilizadas

---

**Desenvolvido com ❤️ pela equipe Tec4U Digital**
