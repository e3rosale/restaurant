import Product from "@/models/Product";
import dbConnect from "@/util/mongo";

export default async function handler(req, res) {
  try {
    dbConnect();
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    const filter = { _id: id };

    try {
      const pizzaFound = await Product.findOne(filter);

      if (pizzaFound === null) {
        res.status(404).json({ success: false, message: "Pizza not found." });
      }

      res.status(200).json({ success: true, data: pizzaFound });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  }
}
