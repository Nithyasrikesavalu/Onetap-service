// import { Router } from "express";
// import {
//   getAllOrders,
//   getOrderById,
//   updateOrderStatus,
// } from "../controllers/orderController.js";

// const router = Router();

// router.get("/", getAllOrders); // GET /api/orders?shopId=xxx
// router.get("/:id", getOrderById); // GET /api/orders/:id
// router.put("/:id/status", updateOrderStatus); // PUT /api/orders/:id/status { status: "completed" }
// // router.get("/:id/user", getOrderByUserID);
// export default router;

import { Router } from "express";
import {
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  getOrdersByCustomerEmail,
} from "../controllers/orderController.js";

const router = Router();

// Get all orders (supports ?shopId and ?customerEmail filters)
router.get("/", getAllOrders);

// Get all orders for a specific customer by email
router.get("/customer/:email", getOrdersByCustomerEmail);

// Get single order by ID
router.get("/:id", getOrderById);

// Update order status
router.put("/:id/status", updateOrderStatus);

export default router;
