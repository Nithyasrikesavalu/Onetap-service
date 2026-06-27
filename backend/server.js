import http from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import app from "./app.js";

// ==========================
// ⚙️ Environment Configuration
// ==========================
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ["PORT", "MONGO_URI"];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

// ==========================
// 🔌 Database Connection
// ==========================
connectDB();

// ==========================
// ⚡ Create HTTP Server & Socket.IO
// ==========================
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173", 
      "https://onetap-service.vercel.app",
      process.env.FRONTEND_URL
    ].filter(Boolean),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

// Make io available globally for controllers to use
global.io = io;

io.on("connection", (socket) => {
  console.log("⚡ Vendor/Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Vendor/Client disconnected:", socket.id);
  });
});

// ==========================
// 🚀 Start Server
// ==========================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.error(`❌ Unhandled Rejection: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
