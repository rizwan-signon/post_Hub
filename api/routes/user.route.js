import { Router } from "express";
import { verifyToken } from "../middlewares/verifyUser.js";
import {
  logInUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller.js";
const router = Router();
router.post("/register", registerUser);
router.post("/login", logInUser);
router.put("/update/:id", verifyToken, updateUser);
export default router;
