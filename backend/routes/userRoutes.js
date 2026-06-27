import { Router } from "express";
import {
  register,
  sendOtp,
  verifyOtp,
  login,
  refreshToken,
  logout
} from "../controllers/userController.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import { validateLogin } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", asyncWrapper(register));
router.post("/login", validateLogin, asyncWrapper(login));
router.post("/send-otp", asyncWrapper(sendOtp));
router.post("/verify-otp", asyncWrapper(verifyOtp));
router.post("/refresh", asyncWrapper(refreshToken));
router.post("/logout", logout);

export default router;
