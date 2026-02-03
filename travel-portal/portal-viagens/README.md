
# 🌍 Horizonte Aberto

O **Horizonte Aberto** é um portal de viagens desenvolvido como projeto acadêmico para aplicar **conceitos iniciais do framework Next.js**.

O objetivo principal do projeto foi compreender a **estrutura de páginas, componentes, navegação e organização de arquivos no Next.js**, utilizando dados simulados e rotas simples.

A **estilização foi mantida propositalmente simples**, pois o foco esteve na aplicação dos conceitos fundamentais do Next.js, e não em design avançado ou animações complexas.

---

## 🗺️ Estrutura das Páginas

- **Home (`/`)**  
  Página inicial com uma breve apresentação do portal.

- **Destinos (`/destinos`)**  
  Página que exibe a listagem de destinos turísticos em formato de cards.

- **Páginas de Destinos Individuais (rotas estáticas)**  
  Cada destino possui sua própria página com imagem e descrição:
  - `/paris`
  - `/roma`
  - `/toquio`
  - `/rio`

---

## 📂 Estrutura de Pastas (simplificada)
```
app/
├── Components/
│   ├── CardDestino/
│   ├── Header/
│   ├── Footer/
│   └── data/
│       └── destinos.ts
│
├── destinos/
│   └── page.tsx
│
├── paris/
│   └── page.tsx
├── roma/
│   └── page.tsx
├── toquio/
│   └── page.tsx
├── rio/
│   └── page.tsx
│
├── layout.tsx
├── page.tsx
```


---

## 🧩 Componentes Principais

- **Header**  
  Menu de navegação presente em todas as páginas.

- **Footer**  
  Rodapé fixo na estrutura do layout.

- **CardDestino**  
  Componente reutilizável responsável por exibir imagem e nome dos destinos na listagem.

---

## 🛠️ Tecnologias Utilizadas

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🚀 Como instalar e executar

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/RaykaDev/EBAC-Projects.git

2. Acesse a pasta do projeto:
   ```
   cd EBAC-Projects/travel-portal
3. Instale as depedências: 
    ```
     npm install
    ```

4. Inicie o servidor de desenvolvimento: 
    ```
      npm run dev
    ```
5. Abra o navegador e acesse:
     ```bash
     http://localhost:3000
     ```

---


