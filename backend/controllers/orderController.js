// import Order from "../models/Order.js";

// // Get all orders for a shop (or all)
// export const getAllOrders = async (req, res) => {
//   try {
//     const filter = {};
//     if (req.query.shopId) filter.shopId = req.query.shopId;
//     const orders = await Order.find(filter).sort({ date: -1 });
//     res.json({ orders });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // Get single order by ID
// export const getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) return res.status(404).json({ message: "Order not found" });
//     res.json({ order });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // Update order status
// export const updateOrderStatus = async (req, res) => {
//   try {
//     const { status } = req.body;
//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );
//     if (!order) return res.status(404).json({ message: "Order not found" });
//     res.json({ success: true, order });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

import Order from "../models/Order.js";

// ✅ Get all orders (supports shopId and customerEmail filters)
export const getAllOrders = async (req, res) => {
  try {
    const filter = {};

    // Filter by shopId (for vendors)
    if (req.query.shopId) filter.shopId = req.query.shopId;

    // Filter by customerEmail (for customers)
    if (req.query.customerEmail) filter.customerEmail = req.query.customerEmail;

    const orders = await Order.find(filter).sort({ date: -1 });
    res.json({ orders });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(400).json({ message: err.message });
  }
};

// ✅ Get orders for a specific customer by email (dedicated endpoint)
export const getOrdersByCustomerEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const orders = await Order.find({ customerEmail: email }).sort({
      date: -1,
    });

    if (!orders.length)
      return res
        .status(404)
        .json({ message: "No orders found for this customer" });

    res.json({ orders });
  } catch (err) {
    console.error("Error fetching customer orders:", err);
    res.status(400).json({ message: err.message });
  }
};

// ✅ Get single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ order });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, email } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) return res.status(404).json({ message: "Order not found" });

    // When order status changes
    global.io.emit(`user_${email}_notification`, {
      id: Date.now(),
      type: "order_update",
      title: "Order Status Updated",
      message: `Your order is now ${order.status}.`,
      status: order.status,
      timestamp: new Date(),
      serviceDetails: {
        trackingId: order._id,
        progress: order.progress || 0,
        shopName: order.shopname,
        shopAddress: order.shopAddress,
      },
    });

    // console.log(email);

    res.json({ success: true, order });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
