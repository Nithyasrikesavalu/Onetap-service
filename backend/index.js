import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import serviceBookingRoutes from "./routes/serviceBookingRoutes.js"; // <-- Add this import

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// API routes
app.use("/api/users", userRoutes);
app.use("/api/service-booking", serviceBookingRoutes); // <-- Add this route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
