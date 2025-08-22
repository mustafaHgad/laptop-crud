/*import express from "express";
import mongoose from "mongoose";
import laptopRoutes from "./routes/laptopRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/laptops", laptopRoutes);

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/laptopsDB")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("❌ DB connection error:", err));*/


import express from "express";
import laptopRoutes from "./routes/laptopRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/laptops", laptopRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
