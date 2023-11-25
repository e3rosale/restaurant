import Product from "@/models/Product";
import dbConnect from "@/util/mongo";

export default async function handler(req, res) {
  const { method } = req;

  try {
    dbConnect();
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }

  if (method === "GET") {
    try {
      const products = await Product.find({});

      if (products.length === 0) {
        res.status(404).json({ success: false, message: "Pizza products data is empty." });
      }

      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({ success: true, data: product });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}
