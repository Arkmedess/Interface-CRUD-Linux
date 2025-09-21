# 📊 Projeto Fullstack Básico

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/) 
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/) 
[![Prisma](https://img.shields.io/badge/ORM-Prisma-black?logo=prisma)](https://www.prisma.io/) 
[![TypeScript](https://img.shields.io/badge/Lang-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/) 
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Aplicação **fullstack** em **TypeScript** com CRUD, tendo o frontend em **React + Tailwind** e backend em **Node + Express + Prisma**.

---

## 🚀 Como rodar

```bash
# 1. Clonar repositório
git clone https://github.com/usuario/repositorio.git
cd repositorio

# 2. Instalar dependências
cd client && npm install
cd ../server && npm install

# 3. Configurar ambiente (em server/.env)
DATABASE_URL="sua_string_de_conexao"

# 4. Rodar migrations e gerar Prisma Client
cd server
npx prisma migrate dev
npx prisma generate

# 5. Rodar backend
npm run dev  # http://localhost:3000

# 6. Rodar frontend
cd ../client
npm run dev  # http://localhost:5173
