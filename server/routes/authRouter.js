import express from 'express';
import {registerUser,loginUser,resetPassord,forgotPassword,verifyEmail} from '../controller/authController.js';
const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);
router.post("/reset-password", resetPassord);
router.post("/forgot-password", forgotPassword);
router.post("/verify-email", verifyEmail);

export default router;