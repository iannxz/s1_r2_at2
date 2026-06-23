<div align="center">

# 🏰 Disney Characters Explorer

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=28&pause=1000&color=AA3BFF&center=true&vCenter=true&width=800&lines=Explore+personagens+da+Disney;Busque+em+tempo+real;React+%2B+TypeScript+%2B+Axios+%2B+Vite" alt="Typing SVG" />

<p>
  Aplicação Front-End desenvolvida em <strong>React</strong> para consumir uma API pública de personagens da Disney, exibindo os dados de forma dinâmica com busca em tempo real.
</p>

<p>
  <img src="https://img.shields.io/github/repo-size/iannxz/s1_r2_at2?style=for-the-badge&color=AA3BFF" />
  <img src="https://img.shields.io/github/languages/top/iannxz/s1_r2_at2?style=for-the-badge&color=AA3BFF" />
  <img src="https://img.shields.io/github/languages/count/iannxz/s1_r2_at2?style=for-the-badge&color=AA3BFF" />
  <img src="https://img.shields.io/github/last-commit/iannxz/s1_r2_at2?style=for-the-badge&color=AA3BFF" />
</p>

<p>
  <img src="https://skillicons.dev/icons?i=react,ts,vite,css,html,nodejs,git,github" />
</p>

</div>

---

## ✨ Sobre o Projeto

O **Disney Characters Explorer** é uma aplicação web construída com **React + TypeScript**, utilizando **Axios** para consumir dados de uma API pública.

A proposta principal é exibir personagens da Disney em uma interface simples, moderna e responsiva, permitindo que o usuário pesquise personagens dinamicamente sem recarregar a página.

---

## 🎯 Objetivo da Aplicação

Este projeto foi desenvolvido com foco em praticar conceitos fundamentais de Front-End moderno, como:

- ⚛️ Criação de componentes com React
- 🔎 Barra de pesquisa com input controlado
- 🌐 Consumo de API pública
- 📦 Requisições HTTP com Axios
- 🧠 Gerenciamento de estado com `useState`
- 🔁 Execução de efeitos com `useEffect`
- 🧩 Separação de responsabilidades por componentes
- 🎨 Estilização com CSS
- 📱 Layout responsivo

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🏰 Listagem de personagens | Exibe personagens retornados pela API da Disney |
| 🔎 Pesquisa dinâmica | Filtra personagens conforme o usuário digita |
| ⚡ Interface reativa | Atualiza os resultados sem recarregar a página |
| 🖼️ Imagens dos personagens | Mostra imagem do personagem quando disponível |
| 🎬 Informações extras | Exibe filmes e séries relacionados ao personagem |
| ⏳ Estado de carregamento | Mostra mensagem enquanto os dados são buscados |
| ⚠️ Tratamento de erro | Exibe mensagem caso a API não carregue corretamente |
| 📱 Responsividade | Layout adaptado para diferentes tamanhos de tela |

---

## 🧠 Como a Aplicação Funciona

```mermaid
flowchart TD
    A[Usuário acessa a aplicação] --> B[Componente App é carregado]
    B --> C[useEffect executa a requisição]
    C --> D[Axios busca dados na Disney API]
    D --> E[Dados são armazenados no useState]
    E --> F[CharacterList renderiza os personagens]
    F --> G[Usuário digita na SearchBar]
    G --> H[Estado search é atualizado]
    H --> I[Lista é filtrada dinamicamente]
    I --> F
```

---

## 🧩 Arquitetura dos Componentes

```mermaid
graph TD
    App[App.tsx]
    SearchBar[SearchBar.tsx]
    CharacterList[CharacterList.tsx]
    API[Disney API]

    App --> SearchBar
    App --> CharacterList
    App --> API
    SearchBar --> App
    CharacterList --> Cards[Cards de Personagens]
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| ⚛️ React | Construção da interface |
| 🟦 TypeScript | Tipagem estática |
| ⚡ Vite | Ambiente de desenvolvimento rápido |
| 🌐 Axios | Consumo da API |
| 🎨 CSS | Estilização da aplicação |
| 🧪 ESLint | Padronização e análise de código |

---

## 🌐 API Utilizada

A aplicação consome dados da **Disney API**, uma API pública que disponibiliza informações sobre personagens, filmes, séries e outros conteúdos relacionados ao universo Disney.

```ts
https://api.disneyapi.dev/character
```

Exemplo de dados utilizados na aplicação:

```ts
type Character = {
  _id: number;
  name: string;
  imageUrl?: string;
  films: string[];
  tvShows: string[];
};
```

---

## 📁 Estrutura do Projeto

```bash
s1_r2_at2/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CharacterList.tsx
│   │   └── SearchBar.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 📌 Principais Componentes

### 🧠 `App.tsx`

Componente principal da aplicação.

Responsável por:

- Controlar os estados da aplicação
- Fazer a requisição para a API
- Armazenar os personagens
- Controlar o texto digitado na busca
- Filtrar os resultados
- Renderizar os componentes principais

---

### 🔎 `SearchBar.tsx`

Componente responsável pela barra de pesquisa.

Ele recebe:

```ts
value: string;
onChange: (value: string) => void;
```

Esse componente permite que o input seja controlado pelo React, atualizando o estado conforme o usuário digita.

---

### 🏰 `CharacterList.tsx`

Componente responsável por exibir os personagens.

Ele recebe uma lista de personagens e renderiza cards contendo:

- Imagem
- Nome
- Filmes
- Séries

Caso nenhum personagem seja encontrado, exibe uma mensagem informando que não há resultados.

---

## 📊 Fluxo de Estados

```mermaid
stateDiagram-v2
    [*] --> Carregando
    Carregando --> Sucesso: API retorna dados
    Carregando --> Erro: Falha na requisição
    Sucesso --> Pesquisando: Usuário digita no input
    Pesquisando --> ResultadosFiltrados
    ResultadosFiltrados --> Pesquisando
    Erro --> [*]
```

---

## 📈 Visão Geral do Repositório

<div align="center">

<img height="170" src="https://github-readme-stats.vercel.app/api?username=iannxz&show_icons=true&theme=midnight-purple&hide_border=true&title_color=AA3BFF&icon_color=AA3BFF" />

<img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=iannxz&layout=compact&theme=midnight-purple&hide_border=true&title_color=AA3BFF" />

</div>

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/iannxz/s1_r2_at2.git
```

### 2. Acesse a pasta do projeto

```bash
cd s1_r2_at2
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

### 5. Acesse no navegador

```bash
http://localhost:5173
```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza a versão de produção localmente |
| `npm run lint` | Executa a análise do código com ESLint |

---

## ✅ Requisitos Atendidos

| Requisito | Status |
|---|---|
| Componente principal da página | ✅ |
| Componente para exibição da lista | ✅ |
| Barra de pesquisa | ✅ |
| Input controlado | ✅ |
| Consumo de API pública | ✅ |
| Uso de Axios | ✅ |
| Uso de `useState` | ✅ |
| Uso de `useEffect` | ✅ |
| Exibição dinâmica dos dados | ✅ |
| Filtro em tempo real | ✅ |
| Campo textual usado no filtro | ✅ Nome do personagem |
| Tratamento de carregamento | ✅ |
| Tratamento de erro | ✅ |

---

## 🖼️ Prévia da Interface

> Adicione aqui um print do projeto rodando.

```bash
public/preview.png
```

Depois, use:

```md
![Prévia do Projeto](./public/preview.png)
```

---

## 💡 Possíveis Melhorias Futuras

- ⭐ Adicionar favoritos
- 📄 Criar paginação de personagens
- 🎭 Exibir mais detalhes ao clicar em um personagem
- 🔎 Adicionar filtros por filme ou série
- 🌙 Criar botão manual de tema claro/escuro
- 🚀 Fazer deploy do projeto
- 🧪 Adicionar testes automatizados
---

<div align="center">

### 🏰 Projeto desenvolvido com React, TypeScript e magia Disney ✨

<img src="https://capsule-render.vercel.app/api?type=waving&color=AA3BFF&height=120&section=footer" />

</div>
