import * as laptopService from "../services/laptopService.js";

// Create
export const createLaptop = async (req, res) => {
  try {
    const laptop = await laptopService.createLaptop(req.body);
    res.status(200).json(laptop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get by ID
export const getLaptopById = async (req, res) => {
  try {
    const laptop = await laptopService.getLaptopById(req.params.id);
    if (!laptop) return res.status(404).json({ error: "Laptop not found" });
    res.status(200).json(laptop);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format" });
  }
};

// Get all
export const getAllLaptops = async (req, res) => {
  try {
    const laptops = await laptopService.getAllLaptops(req.query);
    res.status(200).json(laptops);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update
export const updateLaptop = async (req, res) => {
  try {
    const laptop = await laptopService.updateLaptop(req.params.id, req.body);
    if (!laptop) return res.status(404).json({ error: "Laptop not found" });
    res.status(200).json(laptop);
  } catch (err) {
    res.status(400).json({ error: "Invalid input or ID format" });
  }
};

// Delete
export const deleteLaptop = async (req, res) => {
  try {
    const laptop = await laptopService.deleteLaptop(req.params.id);
    if (!laptop) return res.status(404).json({ error: "Laptop not found" });
    res.status(200).json({ message: "Laptop deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format" });
  }
};
