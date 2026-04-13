# ☕ DNC Coffee — Cafeteria Artesanal

Site completo de uma cafeteria artesanal construído com tecnologias modernas. Inclui cardápio digital com produtos, preços, categorias, busca, páginas informativas e formulário de contato.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

## 📸 Visão Geral

O projeto simula o site de uma cafeteria real, com as seguintes seções:

- **Home** — Hero, categorias, produtos em destaque, depoimentos, CTA
- **Cardápio** — Catálogo completo com 27 produtos, filtros por categoria e busca
- **Sobre** — História, valores, timeline e números da cafeteria
- **Contato** — Formulário de contato, informações, mapa e horários

## 🚀 Tecnologias

| Tecnologia | Versão | Função |
|---|---|---|
| [React](https://react.dev) | 19 | Biblioteca UI com componentes funcionais |
| [TypeScript](https://typescriptlang.org) | 6.0 | Tipagem estática para segurança e DX |
| [Vite](https://vite.dev) | 8 | Build tool ultrarrápida com HMR |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first CSS framework |
| [React Router](https://reactrouter.com) | 7 | Navegação SPA com rotas |
| [Lucide React](https://lucide.dev) | 1.x | Ícones SVG modernos e leves |
| [Framer Motion](https://motion.dev) | 12 | Animações (extensível) |

## 📁 Estrutura do Projeto

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navbar responsiva com menu mobile
│   │   ├── Footer.tsx        # Rodapé com contato, horários e links
│   │   └── ProductCard.tsx   # Card de produto reutilizável
│   ├── data/
│   │   └── products.ts       # Catálogo: 27 produtos, 6 categorias, preços
│   ├── pages/
│   │   ├── Home.tsx          # Página inicial com hero, destaques e CTA
│   │   ├── Menu.tsx          # Cardápio com filtros e busca
│   │   ├── About.tsx         # Sobre nós, valores e história
│   │   └── Contact.tsx       # Formulário e informações de contato
│   ├── App.tsx               # Layout principal e rotas
│   ├── main.tsx              # Entry point
│   └── index.css             # Tema Tailwind customizado
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🍰 Cardápio — Categorias e Produtos

| Categoria | Qtd | Faixa de Preço |
|---|---|---|
| ☕ Cafés Clássicos | 5 | R$ 8,90 – R$ 14,90 |
| ✨ Cafés Especiais | 5 | R$ 15,90 – R$ 19,90 |
| 🧊 Bebidas Geladas | 4 | R$ 15,90 – R$ 21,90 |
| 🍵 Chás | 3 | R$ 10,90 – R$ 16,90 |
| 🍰 Doces | 5 | R$ 8,90 – R$ 18,90 |
| 🥐 Salgados | 5 | R$ 7,90 – R$ 17,90 |

**Total: 27 itens** com nome, descrição, preço, imagem e tags

## 🛠️ Como Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org) 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/day6-dinamic-cafeteria.git
cd day6-dinamic-cafeteria

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Build de produção (TypeScript + Vite) |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Verifica erros com ESLint |

## ✨ Funcionalidades

- **Design responsivo** — Mobile-first, funciona em qualquer dispositivo
- **Navegação SPA** — Transições instantâneas entre páginas sem reload
- **Cardápio interativo** — Filtro por categoria com URL sync e busca por texto
- **Tema customizado** — Paleta de cores quentes (cream, accent, primary)
- **Tipografia** — Playfair Display (títulos) + Inter (corpo)
- **SEO-friendly** — Meta tags, semântica HTML5, lazy loading de imagens
- **Acessibilidade** — Labels ARIA, navegação por teclado, contraste adequado
- **Performance** — Code splitting, tree shaking, imagens otimizadas

## 🎨 Design System

### Cores

| Nome | Hex | Uso |
|---|---|---|
| Primary | `#2A3342` | Textos, navbar, botões principais |
| Accent | `#C8956C` | CTAs, destaques, preços |
| Cream | `#FDF8F3` | Fundo principal |
| Gray Warm | `#6B7280` | Textos secundários |

### Fontes

- **Playfair Display** — Títulos e headings (serif elegante)
- **Inter** — Corpo do texto (sans-serif moderna)

## 📝 Licença

Este projeto é de uso educacional e livre para estudo.

---

Feito com ☕ e 💛
