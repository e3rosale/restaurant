import Order from "@/models/Order";
import dbConnect from "@/util/mongo";

const handler = async (req, res) => {
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
      const orderFound = await Order.findOne(filter);

      if (orderFound === null) {
        res.status(404).json({ success: false, message: "Order not found." });
      }

      res.status(200).json({ success: true, data: orderFound });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  }
};

export default handler;
