# Escolarium Web
**"Gestão escolar simples, organizada e eficiente."**

![TypeScript](https://img.shields.io/badge/TypeScript-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status: Em desenvolvimento](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow?style=for-the-badge)

---

## Visão Geral
O **Escolarium Web** é o **frontend** do sistema de gestão escolar **Escolarium**, desenvolvido para facilitar a experiência de alunos, professores, responsáveis e administradores.  
Ele consome APIs seguras e oferece uma interface moderna, responsiva e modular, pronta para expansão e integração com futuras funcionalidades.

---

## Tecnologias
- **Next.js + React** (SSR, SSG, SPA híbrido)
- **TypeScript** (tipagem estática e segurança)
- **Tailwind CSS** (estilização rápida e responsiva)
- Estrutura modular de pastas e componentes reutilizáveis
- Preparado para integração com o backend em NestJS + Prisma + PostgreSQL

---

## Funcionalidades do Frontend (MVP)
- **Autenticação e Perfis de Acesso**
  - Login seguro (via JWT)
  - Interfaces adaptadas por perfil: Administrador, Professor, Aluno e Responsável
- **Dashboard Dinâmico**
  - Visão resumida de dados acadêmicos, financeiros e administrativos
- **Gestão Acadêmica**
  - Visualização e manipulação de alunos, professores, turmas e notas
- **Gestão Financeira**
  - Consulta de mensalidades, pagamentos e inadimplência
- **Comunicação**
  - Avisos internos e mensagens direcionadas a alunos, pais ou turmas
- **Configurações**
  - Personalização de dados institucionais e regras acadêmicas

---

## Estrutura de Pastas
```
/pages
    /classes       → Gestão de turmas
    /dashboard     → Painel principal
    /finances      → Controle financeiro
    /grades        → Notas e boletins
    /login         → Páginas de autenticação
    /notices       → Avisos e comunicação
    /parents       → Gestão de responsáveis
    /settings      → Configurações gerais
    /students      → Gestão de alunos
    /teachers      → Gestão de professores
    /users         → Administração de usuários
```

---

## Segurança
- Proteção de rotas por perfil de usuário
- Comunicação segura com backend via JWT
- Preparado para:
  - Captcha contra ataques de força bruta
  - CSRF
  - Multi-tenant

---

## Como Executar
### Pré-requisitos
- Node.js 18+
- NPM ou Yarn

### Passos
```bash
# Clone o repositório
git clone https://github.com/snt94/escolarium-web.git
cd escolarium-web

# Instale dependências
npm install

# Inicie o frontend
npm run dev
```

---

## Roadmap Futuro
- Integração com multi-tenant
- Notificações em tempo real (e-mail e push)
- Aplicativo mobile
- Relatórios avançados acadêmicos e financeiros
- Componentes adicionais reutilizáveis

---

## Licença
Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.