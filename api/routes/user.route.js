import { Router } from "express";
import { logInUser, registerUser } from "../controllers/user.controller.js";
const router = Router();
router.post("/register", registerUser);
router.post("/login", logInUser);
export default router;
