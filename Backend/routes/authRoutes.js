import express from "express";
import { sendOtp, verifyOtp, logout, getMe } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, getMe);

export default router;