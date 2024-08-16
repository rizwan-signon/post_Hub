import { Router } from "express";
import { verifyToken } from "../middlewares/verifyUser.js";
import {
  deleteUser,
  logInUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller.js";
const router = Router();
router.post("/register", registerUser);
router.post("/login", logInUser);
router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
export default router;
