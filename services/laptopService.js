import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/laptops.json");

// Helper to read file
const readData = () => {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
};

// Helper to write file
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// Create
export const createLaptop = (data) => {
  const laptops = readData();
  const newLaptop = { id: uuidv4().slice(0, 24), ...data };
  laptops.push(newLaptop);
  writeData(laptops);
  return newLaptop;
};

// Get by ID
export const getLaptopById = (id) => {
  const laptops = readData();
  return laptops.find((lap) => lap.id === id);
};

// Get all
export const getAllLaptops = (filters) => {
  let results = readData();
  if (filters.type) results = results.filter(l => l.type === filters.type);
  if (filters.minPrice) results = results.filter(l => l.price >= Number(filters.minPrice));
  if (filters.maxPrice) results = results.filter(l => l.price <= Number(filters.maxPrice));
  if (filters.isAvailable !== undefined) results = results.filter(l => l.isAvailable === (filters.isAvailable === "true"));
  return results;
};

// Update
export const updateLaptop = (id, data) => {
  const laptops = readData();
  const index = laptops.findIndex(l => l.id === id);
  if (index === -1) return null;
  laptops[index] = { ...laptops[index], ...data };
  writeData(laptops);
  return laptops[index];
};

// Delete
export const deleteLaptop = (id) => {
  const laptops = readData();
  const index = laptops.findIndex(l => l.id === id);
  if (index === -1) return null;
  const deleted = laptops[index];
  laptops.splice(index, 1);
  writeData(laptops);
  return deleted;
};
