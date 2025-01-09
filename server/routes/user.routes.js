import express from 'express';
import { getSavedBlogs, saveBlog } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/saved", getSavedBlogs);
router.patch("/save", saveBlog);

export default router;