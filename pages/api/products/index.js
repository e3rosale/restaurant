import Product from "@/models/Product";
import dbConnect from "@/util/mongo";

export default async function handler(req, res) {
  const { method } = req;

  try {
    dbConnect();
  } catch (err) {
    res.status(500).json({ err: err, msg: "Failed to connect to database" });
  }

  if (method === "GET") {
    res.status(200).json({ hello: "world", success: true });
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
