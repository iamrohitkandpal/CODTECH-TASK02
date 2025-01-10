import express from 'express';
import { createBlog, deleteBlog, getBlog, getBlogs, uploadAuth, featureBlog } from '../controllers/blog.controller.js';
import increaseVisits from '../middlewares/increaseVisits.js';

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getBlogs);
router.get("/:slug", increaseVisits, getBlog);
router.post("/", createBlog);
router.delete("/delete/:id", deleteBlog);
router.patch("/featureBlog", featureBlog);

export default router;