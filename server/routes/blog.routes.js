import express from 'express';
import { createBlog, getBlog, getBlogs } from '../controllers/blog.controller.js';

const router = express.Router();

router.get("/upload-auth", createBlog);
router.get("/", getBlogs);
router.get("/:slug", getBlog);
router.post("/", createBlog);
router.delete("/delete/:slug", createBlog);

export default router;