# MasterKey

MasterKey é uma vitrine de e-commerce para jogos digitais desenvolvida com Next.js, React, TypeScript e Tailwind CSS.  
O projeto consome uma API externa para listar jogos, organizar produtos por categorias e exibir páginas de detalhes.  
É voltado para demonstração de interface, componentização e consumo de API

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8)
![License](https://img.shields.io/badge/license-MIT-green)

## Demonstração

| Recurso               | Link                                                             |
| --------------------- | ---------------------------------------------------------------- |
| Aplicação em produção | [vercel](https://master-azure-sigma.vercel.app)                  |
| Repositório           | [github.com/phjsilva/master](https://github.com/phjsilva/master) |

## Tecnologias Utilizadas

| Tecnologia                                    | Uso no projeto                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------- |
| [Next.js 14](https://nextjs.org/)             | Framework React com App Router, renderização server-side e rotas da aplicação |
| [React 18](https://react.dev/)                | Construção dos componentes de interface                                       |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática das entidades, componentes e serviços                        |
| [Tailwind CSS](https://tailwindcss.com/)      | Estilização utilitária e responsividade                                       |
| [Swiper](https://swiperjs.com/)               | Carrosséis de produtos e destaques                                            |
| [Lucide React](https://lucide.dev/)           | Ícones da interface                                                           |
| [ESLint](https://eslint.org/)                 | Padronização e validação estática do código                                   |
| [PostCSS](https://postcss.org/)               | Processamento do CSS utilizado pelo Tailwind                                  |

## Funcionalidades

- Página inicial com hero promocional.
- Listagem de jogos por seções: destaques, RPG, mais vendidos e novos lançamentos.
- Carrosséis responsivos para navegação entre produtos.
- Cards de produto com imagem, nome, preço original, desconto e preço final.
- Página dinâmica de detalhes do jogo por ID.
- Exibição de descrição, destaques, metadados e requisitos do jogo.
- Central de suporte com busca visual e categorias de atendimento.
- Header global com navegação, busca visual, carrinho e perfil.
- Formatação de moeda em Real brasileiro.
- Consumo de API externa com revalidação de dados no Next.js.

## Arquitetura do Projeto

O projeto utiliza a arquitetura padrão do **Next.js App Router**, com separação por responsabilidades:

- **`src/app`**: contém as rotas da aplicação, layouts globais e páginas renderizadas pelo Next.js.
- **`src/components`**: reúne componentes reutilizáveis de layout, produto e seções da interface.
- **`src/lib`**: concentra regras auxiliares e integração com serviços externos, como API e formatadores.
- **`src/types`**: centraliza os contratos TypeScript usados pelos dados da aplicação.
- **`public`**: armazena imagens, ícones e demais assets estáticos.

### Padrão Arquitetural Utilizado

O projeto segue uma abordagem baseada em **componentização por domínio visual** e **separação de camada de dados**:

| Camada      | Responsabilidade                                             |
| ----------- | ------------------------------------------------------------ |
| Rotas       | Definem páginas, parâmetros dinâmicos e composição das telas |
| Componentes | Encapsulam partes reutilizáveis da UI                        |
| Serviços    | Centralizam chamadas HTTP para a API externa                 |
| Utilitários | Reúnem funções puras de cálculo e formatação                 |
| Tipos       | Descrevem o contrato dos dados consumidos                    |

### Integração com API

A integração está centralizada em `src/lib/api.ts`.

```ts
const API_BASE_URL = "https://keygames.onrender.com";
```

Rotas consumidas:

| Método | Endpoint           | Finalidade                                |
| ------ | ------------------ | ----------------------------------------- |
| `GET`  | `/games/vendidos`  | Lista jogos mais vendidos                 |
| `GET`  | `/games/destaques` | Lista jogos em destaque                   |
| `GET`  | `/games/recentes`  | Lista lançamentos recentes                |
| `GET`  | `/games/rpg`       | Lista jogos da categoria RPG              |
| `GET`  | `/games/:id`       | Retorna os detalhes de um jogo específico |

## Estrutura de Diretórios

```text
masterkey
├── public
│   ├── assets
│   └── img
├── src
│   ├── app
│   │   ├── produto
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   └── suporte
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   ├── product
│   │   └── sections
│   ├── lib
│   │   ├── api.ts
│   │   └── formatters.ts
│   └── types
│       └── game.ts
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/) 18 ou superior.
- [npm](https://www.npmjs.com/) 9 ou superior.
- Git.
- Acesso à internet para consumir a API externa.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/phjsilva/master.git
```

Acesse a pasta do projeto:

```bash
cd master
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## Variáveis de Ambiente

Atualmente o projeto não utiliza variáveis de ambiente.

| Variável  | Obrigatória | Descrição |
| --------- | ----------- | --------- |
| A definir | A definir   | A definir |

> Observação: a URL da API está definida diretamente em `src/lib/api.ts`.

## Scripts Disponíveis

| Script          | Descrição                                 |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento      |
| `npm run build` | Gera a versão de produção                 |
| `npm run start` | Executa a versão de produção após o build |
| `npm run lint`  | Executa a validação com ESLint            |

## Banco de Dados

O projeto não possui banco de dados próprio.

Todos os dados são consumidos através da API externa:

https://keygames.onrender.com

## Rotas da Aplicação

| Rota               | Descrição                               |
| ------------------ | --------------------------------------- |
| `/`                | Página inicial com seções de produtos   |
| `/produto/[id]`    | Página dinâmica com detalhes de um jogo |
| `/produto/suporte` | Central de suporte                      |

## Qualidade de Código

O projeto possui configuração de lint com `eslint-config-next`.

Para executar:

```bash
npm run lint
```

## Build de Produção

Gere a build:

```bash
npm run build
```

Execute a aplicação em modo produção:

```bash
npm run start
```

## Deploy

A aplicação está hospedada na Vercel:

https://master-azure-sigma.vercel.app

Para realizar um novo deploy:

1. Conecte o repositório ao Vercel.
2. Configure as variáveis de ambiente (quando existirem).
3. Faça push para a branch principal.

## Roadmap

- [ ] Sistema de carrinho persistente.
- [ ] Lista de desejos.
- [ ] Busca integrada à API.
- [ ] Filtros por categoria.
- [ ] Paginação de produtos.
- [ ] Testes automatizados.
- [ ] Integração com autenticação.

## Contribuição

Contribuições são bem-vindas.

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```

3. Faça commit das alterações:

```bash
git commit -m "feat: adiciona minha feature"
```

4. Envie para o repositório remoto:

```bash
git push origin minha-feature
```

5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT.

## Autor

Pedro Henrique Silva

- GitHub: https://github.com/phjsilva
- LinkedIn: www.linkedin.com/in/pedro-silva-3b5869380
