import express from "express";
import {
  createLaptop,
  getLaptopById,
  getAllLaptops,
  updateLaptop,
  deleteLaptop
} from "../controllers/laptopController.js";

import { addCreatedAt, addUpdatedAt } from "../middleware/timestampMiddleware.js";

const router = express.Router();

router.post("/", addCreatedAt, addUpdatedAt, createLaptop);
router.get("/", getAllLaptops);
router.get("/:id", getLaptopById);
router.patch("/:id", addUpdatedAt, updateLaptop);
router.delete("/:id", deleteLaptop);

export default router;
