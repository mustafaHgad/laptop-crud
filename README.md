# 💻 Laptop CRUD API (Express + JSON File)

A simple CRUD project built with **Express.js** and **Nodemon**, using a fake database stored in a JSON file.  

---

## 🚀 Features
- Create, Read, Update, Delete laptops  
- Data stored in `data/laptops.json`  
- Middleware for adding `created_At` and `updated_At` timestamps  
- Layered Architecture (Routes + Controllers + Services + Middleware)  
- Runs with Nodemon during development  

---

## 📂 Project Structure
laptop-crud/ </br>
├── controllers/ </br>
│ └── laptopController.js </br>
├── data/ </br>
│ └── laptops.json </br>
├── middleware/ </br>
│ └── timestampMiddleware.js </br>
├── routes/ </br>
│ └── laptopRoutes.js </br>
├── services/ </br>
│ └── laptopService.js </br>
├── server.js </br>
├── package.json </br>
└── README.md </br>
