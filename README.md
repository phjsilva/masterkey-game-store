# MasterKey

MasterKey é uma vitrine de e-commerce para jogos digitais, construída com Next.js, TypeScript e Tailwind CSS. O projeto consome uma API externa de games, organiza produtos por categorias e apresenta páginas de listagem, detalhes do produto e suporte.

## Preview

O foco da interface é simular uma loja moderna de games, com hero promocional, carrosséis de destaque, cards de produto responsivos, preços com desconto e página individual com descrição, requisitos e informações comerciais.

## Funcionalidades

- Home com hero promocional e seções de produtos.
- Carrosséis responsivos para destaques e categorias.
- Listas de mais vendidos e novos lançamentos.
- Página de detalhes do jogo com preço, desconto, descrição, requisitos e metadados.
- Central de suporte com busca visual e categorias de atendimento.
- Layout responsivo para desktop, tablet e mobile.
- Componentização organizada por responsabilidade.

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Swiper
- Lucide React

## Arquitetura

```text
src
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   └── produto
│       ├── [id]/page.tsx
│       └── suporte/page.tsx
├── components
│   ├── layout
│   ├── product
│   └── sections
├── lib
│   ├── api.ts
│   └── formatters.ts
└── types
    └── game.ts
```

## Como executar

Clone o repositório e instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## API

O projeto consome dados da API:

```text
https://keygames.onrender.com
```

Principais rotas utilizadas:

- `/games/vendidos`
- `/games/destaques`
- `/games/recentes`
- `/games/rpg`
- `/games/:id`

## Melhorias aplicadas

- Separação de tipos, serviços de API e formatadores.
- Substituição de múltiplos `useEffect` por carregamento server-side com revalidação.
- Componentes reutilizáveis para cards, preço, hero, carrosséis e header.
- Correção de textos, metadata e responsividade.
- Remoção de código duplicado e componentes antigos não utilizados.
