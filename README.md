# 🔍 Busfil GitHub

Uma aplicação que permite buscar usuários do GitHub e visualizar suas principais informações, além dos repositórios mais recentemente atualizados.

---

## 🚀 Tecnologias utilizadas

- Next.js
- React
- TypeScript
- TailwindCSS
- GitHub API

---

## ✨ Funcionalidades

- 🔎 Busca de usuários pelo username
- 👤 Exibição de dados do perfil:
  - Nome
  - Username
  - Seguidores
  - Biografia
- 📦 Listagem dos repositórios mais recentes
- 📅 Ordenação por última atualização (`pushed_at`)
- 🔗 Acesso direto aos repositórios
- 📱 Layout responsivo

---

## 🧠 Lógica principal

A aplicação consome dois endpoints da API do GitHub:

```ts
const urlProfile = `https://api.github.com/users/${user}`;
const urlRepoProfile = `https://api.github.com/users/${user}/repos`;
```

Após buscar os repositórios, eles são ordenados pelos mais recentes:

```ts
const sortedRepos = [...dataRepoProfile]
  .sort(
    (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
  )
  .slice(0, 4);
```

---

## 🎯 Boas práticas aplicadas

- Separação de responsabilidades com componentes (`RepoCard`)
- Uso de estados independentes para evitar conflitos
- Validação simples antes da requisição
- Manipulação e transformação de dados antes da renderização
- Uso de `map` para renderização dinâmica

---

## 📂 Estrutura do projeto

```
src/
 ├── app/
 │    └── page.tsx
 ├── components/
 │    ├── Header.tsx
 │    ├── Main.tsx
 │    ├── RepoCard.tsx
 │    └── Footer.tsx
```

---

## 🎯 Aprendizados

- Consumo de API REST no front-end
- Manipulação e ordenação de dados
- Estruturação de componentes reutilizáveis
- Controle de estado com React
- Melhoria de UX com dados relevantes (repositórios recentes)

---

## 🔗 Deploy

👉 https://busfil-git-hub.vercel.app

---

## 👨‍💻 Autor

Desenvolvido por **Felipe de Lima Passarelli**

- GitHub: https://github.com/Felipe-de-Lima-Passarelli

---

## 📌 Observação

Projeto focado em praticar integração com APIs e organização de dados no front-end, simulando um cenário real de consumo de informações externas.
