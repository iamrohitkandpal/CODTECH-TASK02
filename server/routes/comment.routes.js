import express from 'express';
import { addComment, deleteComment, getBlogComments } from '../controllers/comment.controller.js';

const router = express.Router();

router.get("/:postId", getBlogComments);
router.post("/:postId", addComment);
router.delete("/:id", deleteComment);

export default router;