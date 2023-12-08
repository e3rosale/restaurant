import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true, maxlength: 60 },
    sizes: { type: [{ name: { type: String, required: true }, price: { type: Number, required: true } }], required: true },
    description: { type: String, required: true, maxlength: 200 },
    extras: { type: [{ name: { type: String, required: true }, price: { type: Number, required: true } }] },
  },
  { timestamps: true }
);

export default models.Product || model("Product", ProductSchema);
