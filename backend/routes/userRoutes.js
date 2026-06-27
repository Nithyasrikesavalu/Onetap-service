import { Router } from "express";
import {
  register,
  sendOtp,
  verifyOtp,
  login,
} from "../controllers/userController.js";
import asyncWrapper from "../utils/asyncWrapper.js";

const router = Router();

router.post("/register", asyncWrapper(register));
router.post("/login", asyncWrapper(login));
router.post("/send-otp", asyncWrapper(sendOtp));
router.post("/verify-otp", asyncWrapper(verifyOtp));

export default router;
