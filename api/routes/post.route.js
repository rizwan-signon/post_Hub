import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";
const router = Router();
router.post("/create_post", createPost);
export default router;
