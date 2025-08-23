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
laptop-crud/
├── controllers/
│ └── laptopController.js
├── data/
│ └── laptops.json
├── middleware/
│ └── timestampMiddleware.js
├── routes/
│ └── laptopRoutes.js
├── services/
│ └── laptopService.js
├── server.js
├── package.json
└── README.md
