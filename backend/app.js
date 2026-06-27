import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";
import rateLimit from "express-rate-limit";

import { notFound, errorHandler } from "./middlewares/errorHandler.js";

// Routes Imports
import userRoutes from "./routes/userRoutes.js";
import serviceBookingRoutes from "./routes/serviceBookingRoutes.js";
import shopRoutes from "./routes/shopRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import serviceMasterRoutes from "./routes/serviceMasterRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// ==========================
// 🛡️ Security & Middlewares
// ==========================
// Trust the proxy (Render load balancer) so express-rate-limit gets the correct client IP
app.set("trust proxy", 1);

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } })); // Fixes CORS blocks from modern Helmet versions
app.use(compression()); // Compresses response bodies
app.use(cookieParser()); // Parses cookies for JWT
app.use(express.json({ limit: "5mb" })); // Parses incoming JSON payloads
app.use(express.urlencoded({ extended: true, limit: "5mb" })); // Parses URL-encoded data

// Rate limiting to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per windowMs
  message: { success: false, message: "Too many requests from this IP, please try again after 15 minutes" },
});
app.use("/api", limiter);

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173", // Local frontend dev
  "https://onetap-service.vercel.app", // Production Vercel frontend
  process.env.FRONTEND_URL, // Dynamic from .env
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true, // Allow sending cookies
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ==========================
// 🏥 Health Check Route
// ==========================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "OneTap Service API is running",
    environment: process.env.NODE_ENV,
  });
});

// ==========================
// 📡 API Routes
// ==========================
app.use("/api/users", userRoutes);
app.use("/api/servicebookings", serviceBookingRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/service-master", serviceMasterRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/contact", contactRoutes);

// ==========================
// 🚨 Error Handling
// ==========================
app.use(notFound); // Handles 404
app.use(errorHandler); // Global error handler

export default app;
