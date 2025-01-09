import express from 'express';
import { createBlog, deleteBlog, getBlog, getBlogs, uploadAuth, featurePost } from '../controllers/blog.controller.js';

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getBlogs);
router.get("/:slug", getBlog);
router.post("/", createBlog);
router.delete("/delete/:id", deleteBlog);
router.patch("feature", featurePost);

export default router;