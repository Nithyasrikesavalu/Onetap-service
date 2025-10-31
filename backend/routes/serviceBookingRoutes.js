import { Router } from "express";
import multer from "multer";
import { createBooking, getAllBookings } from "../controllers/serviceBookingController.js";
const upload = multer({ dest: "uploads/" });
const router = Router();

router.post("/", upload.array("documents"), createBooking);
router.get("/", getAllBookings);
export default router;
