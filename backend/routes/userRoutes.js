import express from "express";
import {
  registerUser,
  verifyOtp,
  sendOtp,
  loginUser,
  getUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);

export default router;
