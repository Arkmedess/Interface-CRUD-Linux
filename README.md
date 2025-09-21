# KernelAdmin

<p align="center">
  <img src="https://github.com/user-attachments/assets/d13fa921-5eac-479a-bd37-4155e9aff4bf" alt="Linux-CRUD" width="600"/>
</p>

---

<p align="center">
  <a href="https://arkmedess.github.io/Interface-CRUD-Linux/"><img src="https://img.shields.io/badge/Preview-Live-brightgreen?style=for-the-badge" alt="Preview"/></a>
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.4-cyan?style=for-the-badge" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Node.js-20-green?style=for-the-badge" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-6.0-green?style=for-the-badge" alt="MongoDB"/>
  <img src="https://img.shields.io/github/license/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="License"/>
  <img src="https://img.shields.io/github/repo-size/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Repo size"/>
  <img src="https://img.shields.io/github/last-commit/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Last commit"/>
  <img src="https://img.shields.io/github/stars/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Forks"/>
  <img src="https://img.shields.io/github/issues/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Open Issues"/>
  <img src="https://img.shields.io/github/watchers/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Watchers"/>
  <img src="https://img.shields.io/github/languages/top/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Main Language"/>
  <img src="https://img.shields.io/github/contributors/Arkmedess/Interface-CRUD-Linux?style=for-the-badge" alt="Contributors"/>
</p>


---
## 📌 Sobre o Projeto
Este é um projeto simples de full-stack para gerenciamento básico de usuários, construído com arquitetura cliente-servidor. O projeto demonstra operações CRUD em uma interface responsiva, com validação robusta e integração com banco de dados NoSQL.

---
## ✨ Funcionalidades

-  **Operações CRUD Completas**: Criação, leitura, atualização e exclusão de usuários
-  **Interface Responsiva**: Design adaptável para desktop, tablet e mobile
-  **Arquitetura Cliente-Servidor**: Separação clara entre frontend e backend
-  **Tipagem Forte**: Implementação completa com TypeScript
-  **API RESTful**: Endpoints bem estruturados com Express
-  **Persistência de Dados**: Gerenciamento de banco de dados MongoDB com Prisma
-  **Deploy Automatizado**: Configuração para GitHub Pages (frontend) e serviços cloud (backend)

---
## 🛠️ Tecnologias e Arquitetura
### 🖼️ Frontend
- **React** 18+ com hooks modernos
- **TypeScript** para tipagem estática
- **Tailwind CSS** 4.1 para estilização utilitária
- **Vite** para build rápido e otimizado
- **Axios** para comunicação com API

### </> Backend
- **Node.js** 20+ com suporte a ES Modules
- **Express** para criação de APIs REST
- **Prisma ORM** para modelagem de dados
- **MongoDB** como banco de dados
- **CORS** e middlewares de segurança

### 🛢Database
- **MongoDB** Atlas ou instância local
- **Migrations** automáticas via Prisma
- **Seeders** para dados iniciais

---
## 🚀 Como Executar Localmente
### Pré-requisitos
- Node.js 20+
- MongoDB 6.0+ (local ou Atlas)
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Arkmedess/KernelAdmin.git
cd KernelAdmin
```

2. Instale dependências:
```bash
   # Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. Configure o banco de dados:
```bash
npx prisma migrate dev
npx prisma db seed
```

4. Inicie os serviços:
```bash
# Backend (porta 3000)
npm run dev

# Frontend (porta 5173)
# Em outro terminal
cd client
npm run dev
```

5. Acesse a aplicação:
	- Frontend: [http://localhost:5173](http://localhost:5173/)
	- API: [http://localhost:3000](http://localhost:3000/)

### Variáveis de Ambiente

Crie um arquivo `.env` no diretório `server` e insira as informações do seu banco. Exemplo:
```env
DATABASE_URL="mongodb+srv://<seu_usuario>:<sua_senha>@users.lv44pyu.mongodb.net/Users?retryWrites=true&w=majority&appName=Users"
```

---
## Estrutura de Diretórios

```
KernelAdmin/
├── client/                 # Frontend React
│   ├── public/            # Arquivos estáticos
│   │   └── linux.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── trash.svg
│   │   ├── pages/
│   │   │   └── home/
│   │   │       ├── index.tsx
│   │   │       └── style.css
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── vite-env.d.ts
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── server/                # Backend
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── .env           # Deve ser criado manualmente
│   ├── package-lock.json
│   ├── package.json
│   ├── server.ts
│  	└── tsconfig.json
├── .gitignore
└── README.md
```

---
## 🤝 Diretrizes e Contribuição

- Utilize **Conventional Commits** para mensagens de commit
- Mantenha a **tipagem consistente** em TypeScript
- Atualize a **documentação** conforme necessário
- Respeite o **ESLint** e **Prettier** configurados

#### Processo de Contribuição

1. Faça um fork do projeto.

2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-nova-feature
   ```

3. Commit suas alterações:
   ```bash
   git commit -m '<tipo de commit>(escopo): <descrição do commit>'
   ```
   
4. Faça o push para o seu fork:
   ```bash
   git push origin minha-nova-feature
   ```

5. Abra um Pull Request!

*Todos os tipos de contribuições são bem-vindos: código, documentação, sugestões ou report de bugs!*

---
### 👾 Relatório de Issues (Bug Reports)

Ao reportar problemas:

1. Use o template de issue
2. Forneça passos para reprodução
3. Inclua screenshots quando aplicável
4. Especifique seu ambiente (SO, navegador, versões)

---
## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://chat.z.ai/c/LICENSE) para detalhes.

---

**Desenvolvido por [Arthur Victor](https://github.com/Arkmedess)**