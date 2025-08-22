import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  specifications: { type: String, required: true },
  modelYear: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  created_At: { type: String },
  updated_At: { type: String }
});

export default mongoose.model("Laptop", laptopSchema);
