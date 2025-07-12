# 🧪 Teste Frontend - Thera

Este projeto foi desenvolvido como parte de um desafio técnico de Frontend. A aplicação permite gerenciar produtos com funcionalidades de **listagem, filtro, ordenação, paginação e adição de novos produtos** via formulário.

---

## 🚀 Tecnologias utilizadas

- **Next.js 15 (App Router)** – estrutura moderna com suporte a SSR e client components
- **TypeScript** – para garantir segurança de tipos e melhor manutenibilidade
- **Tailwind CSS** – estilização rápida e consistente
- **ShadCN UI** – componentes acessíveis e com tema dark/light integrado
- **Zustand** – gerenciamento de estado simples e leve
- **Mock Service Worker (MSW)** – simulação de API para testes e desenvolvimento offline
- **LocalStorage** – persistência de dados entre recarregamentos

---

## 📦 Funcionalidades entregues

- ✅ **Listagem de produtos**
- ✅ **Filtro por nome e preço**
- ✅ **Ordenação alfabética**
- ✅ **Paginação (6 por página)**
- ✅ **Formulário para adicionar produtos**
- ✅ **Contador de produtos atualizado dinamicamente**
- ✅ **Modo escuro/claro**
- ✅ **Responsivo em dispositivos móveis**

---

## ⚙️ Decisões técnicas

- Optei por **Zustand** ao invés de Context API puro por ser mais simples, reativo e direto para esse escopo.
- Os dados estão sendo persistidos em `localStorage` e combinados com um mock via `MSW`, facilitando o uso offline sem backend real.
- Os **componentes do ShadCN UI** foram utilizados para manter uma UI moderna e consistente, com suporte a acessibilidade.
- A **paginação** foi feita de forma local, com slicing no array de produtos.
- O sistema de **filtros e ordenação** é realizado antes da paginação para garantir resultados precisos.

---

## 📸 Imagens

Você pode buscar imagens diretamente no [unsplash.com](https://unsplash.com) e colar o link no campo "Imagem (URL)".

---
