🎟️ Ticket Sales – Sistema de Venda de Ingressos

Este repositório reúne o backend (microsserviço de vendas) e o frontend web do sistema Ticket Sales, desenvolvido como atividade prática da disciplina Sistemas Web II (CSI607).
A aplicação tem como objetivo gerenciar usuários, eventos e vendas de ingressos, oferecendo tanto uma API REST quanto uma interface web para clientes e administradores.

Aluno(a): Beatriz Dalfior – 22.1.8012

🧩 Visão Geral da Arquitetura

O projeto é composto por:

Backend

Microsserviço de Vendas (Sales)

Desenvolvido com Spring Boot

Exposição de API REST em JSON

Frontend

Interface web para clientes e administradores

Desenvolvido com React + Vite

Gateway

Responsável pela comunicação entre frontend e backend

Infraestrutura

Orquestração via Docker Compose

🚀 Inicialização do Projeto
🔧 Pré-requisitos

Docker Desktop em execução

Node.js e npm (para rodar o frontend isoladamente, se desejado)

▶️ Subindo toda a aplicação (Backend + Frontend)

Acesse a pasta docker

Execute o comando:

docker-compose -f docker-compose-dev.yml up --build

Esse comando irá subir:

API de vendas (porta 4000)

Frontend web

Gateway

▶️ Rodando apenas o Frontend

Caso queira iniciar somente o frontend:

cd frontend
npm install
npm run dev

⚠️ Atenção: o backend precisa estar em execução para que o frontend funcione corretamente.

🌐 Backend – API do Microsserviço de Vendas

URL Base:

http://localhost:4000

A API é responsável pelo gerenciamento de Usuários, Eventos e Vendas.

👤 Usuários (/users)

Representa os usuários do sistema, que podem ser CLIENTE ou ADMIN.

Criar usuário

POST /users

{
  "name": "Fulana da Silva",
  "email": "fulana@example.com",
  "password": "senha_segura_123",
  "city": "São Paulo",
  "type": "CLIENTE"
}
Listar usuários

GET /users

Buscar usuário por ID

GET /users/{id}

Atualizar usuário

PUT /users/{id}

{
  "name": "Sachi Nanjou",
  "email": "novo@email.com",
  "password": "nova_senha",
  "city": "Rio de Janeiro",
  "type": "ADMIN"
}
Deletar usuário

DELETE /users/{id}

🎫 Eventos (/events)

Responsável pelo cadastro e consulta de eventos disponíveis para venda.

Criar evento

POST /events

{
  "description": "Show da Banda X",
  "type": "SHOW",
  "date": "2026-12-25T20:00:00",
  "startSales": "2026-11-01T09:00:00",
  "endSales": "2026-12-24T23:59:59",
  "price": 150.75
}
Listar eventos

GET /events

Buscar evento por ID

GET /events/{id}

Atualizar evento

PUT /events/{id}

Deletar evento

DELETE /events/{id}

💳 Vendas (/sales)

Controla a compra de ingressos vinculando usuários a eventos.

Criar venda (comprar ingresso)

POST /sales

{
  "userId": "uuid-do-usuario",
  "eventId": "uuid-do-evento",
  "saleStatus": "EM_ABERTO"
}
Listar vendas

GET /sales

Buscar venda por ID

GET /sales/{id}

Listar vendas por usuário

GET /sales/user/{userId}

Atualizar venda

PUT /sales/{id}

{
  "userId": "uuid-do-usuario",
  "eventId": "uuid-do-evento",
  "saleStatus": "PAGO"
}
Deletar venda

DELETE /sales/{id}

🖥️ Frontend Web – Ticket Sales

O frontend fornece a interface visual para interação com a API, incluindo:

Painel administrativo

Área do cliente

Gerenciamento completo de usuários, eventos e vendas

Tecnologias Utilizadas

React

Vite

Shadcn/ui

ESLint

🔐 Funcionalidades do Sistema
🔑 Acesso Administrativo (/admin)

Para acessar o painel administrativo, é necessário possuir um usuário do tipo ADMIN.

Criar usuário administrador (exemplo)
POST http://localhost:4000/users
Content-Type: application/json

{
  "name": "Admin",
  "email": "admin@teste.com",
  "password": "admin1234",
  "city": "Belo Horizonte",
  "type": "ADMIN"
}
📋 Páginas Disponíveis
1. Eventos (Admin) – /admin/events

Listar eventos

Criar novos eventos

Deletar eventos existentes

2. Vendas (Admin) – /admin/sales

Visualizar vendas

Criar vendas

Atualizar status da venda

Deletar vendas

3. Usuários (Admin) – /admin/users

Listar usuários

Criar novos usuários

Editar ou remover usuários

4. Eventos (Cliente) – /events

Visualizar eventos disponíveis

Comprar ingressos

5. Perfil do Usuário – /profile

Visualizar dados pessoais

Consultar compras realizadas

Efetuar pagamento de compras em aberto

Estornar compras