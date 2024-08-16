import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";
const router = Router();
router.post("/create_post", createPost);
router.get("/getposts", getPosts);
export default router;
