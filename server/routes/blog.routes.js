import express from 'express';
import { createBlog, getBlog, getBlogs } from '../controllers/blog.controller.js';

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.get("/create", createBlog);
router.get("/delete/:id", createBlog);

export default router;