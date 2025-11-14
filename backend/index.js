// ==========================
// 🌐 Import Dependencies
// ==========================
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";

// ==========================
// 🛠 Import Routes
// ==========================
import userRoutes from "./routes/userRoutes.js";
import serviceBookingRoutes from "./routes/serviceBookingRoutes.js";
import shopRoutes from "./routes/shopRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import serviceMasterRoutes from "./routes/serviceMasterRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// ==========================
// ⚙️ Configuration
// ==========================
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ==========================
// ⚡ Create HTTP Server & Socket.IO
// ==========================
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Change to your frontend URL if needed
    methods: ["GET", "POST"],
  },
});

// Make io available globally
global.io = io;

// ==========================
// 🔌 Socket.IO Connection
// ==========================
io.on("connection", (socket) => {
  console.log("⚡ Vendor/Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Vendor/Client disconnected:", socket.id);
  });
});

// ==========================
// 📡 Express API Routes
// ==========================
app.use("/api/users", userRoutes);
app.use("/api/servicebookings", serviceBookingRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/service-master", serviceMasterRoutes);
app.use("/api/orders", orderRoutes);

// ==========================
// 🚀 Start Server
// ==========================
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
