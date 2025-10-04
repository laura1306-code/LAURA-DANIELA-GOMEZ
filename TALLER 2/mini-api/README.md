# 🍽️ Mini API - Restaurante

Este proyecto es una **API en NestJS** para gestionar un restaurante.  
Fue desarrollado como parte del taller, cumpliendo con el uso de **params, query params, body y DTOs con validaciones** ✅

---

## 🚀 Tecnologías
- [NestJS](https://nestjs.com/) (framework backend Node.js)
- TypeScript
- class-validator & class-transformer (validaciones en DTOs)

---

## 📂 Dominio y entidades
El dominio elegido es **Restaurante**, con las siguientes entidades:

1. **Menu** 🍕  
   - id, name, price, category  
   - ✅ Implementada completamente (CRUD + DTOs + validaciones + params, query params y body)
2. **Ingredients** 🥦  
   - id, name, supplier, stock  
3. **Orders** 🧾  
   - id, customer, date, total, status, items[], waiterId  
4. **Waiters** 👩‍🍳  
   - id, name, shift, yearsExperience  

> Las demás entidades (`ingredients`, `orders`, `waiters`) ya tienen su módulo, controlador y servicio generados, listos para implementar.

---

## ⚙️ Instalación y ejecución

```bash
# Clonar el proyecto
git clone <repo-url>
cd mini-api

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run start:dev
