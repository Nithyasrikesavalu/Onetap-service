import { Router } from "express";
import { createBooking, getAllBookings } from "../controllers/serviceBookingController.js";

const router = Router();

// POST: Create a new service booking
router.post("/", createBooking);

// GET: All bookings (for admin panel)
router.get("/", getAllBookings);

export default router;
