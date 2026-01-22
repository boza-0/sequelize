# API REST con Node.js, Express y Sequelize

Este proyecto es una API REST desarrollada con Node.js, Express y Sequelize, conectada a una base de datos MySQL.

## Requisitos
- Node.js
- MySQL

## Instalación
1. Clonar el repositorio
2. Instalar dependencias:
   npm install
3. Crear un archivo `.env` basado en `.env.example` y completar los valores
4. Iniciar el servidor:
   npm run dev

## Endpoints disponibles
- GET /api/productos
- POST /api/productos
- GET /api/productos/:id
- PUT /api/productos/:id
- DELETE /api/productos/:id

## Notas
- Las credenciales de la base de datos se gestionan mediante variables de entorno
- El archivo `.env` no debe subirse al repositorio
