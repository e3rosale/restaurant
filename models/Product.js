import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true, maxlength: 60 },
    price: { type: [Number], required: true },
    desc: { type: String, required: true, maxlength: 200 },
    extraOptions: { type: [{ text: { type: String, required: true }, price: { type: Number, required: true } }] },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

export default models.Product || Product;
