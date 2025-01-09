import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getBlogComments = async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.postId })
      .populate("user", "username img")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    console.log("Error in getBlogComments: " + error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addComment = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const postId = req.params.postId;

    if (!clerkUserId) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    const user = await User.findOne({ clerkUserId });

    const newComment = new Comment({
      ...req.body,
      user: user._id,
      blog: postId,
    });

    const savedComment = await newComment.save();

    setTimeout(() => {
      res.status(201).json(savedComment);
    }, 3000);
  } catch (error) {
    console.log("Error in addComment: " + error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const id = req.params.id;

    if (!clerkId) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";

    if (role === "admin") {
      await Comment.findByIdAndDelete(req.params.id);
      return res.status(200).json("Comment Deleted Successfully");
    }

    const user = await User.findOne({ clerkUserId });

    const deletedComment = await Comment.findOneAndDelete({
      _id: id,
      user: user._id,
    });

    if (!deletedComment) {
      return res.status(403).json({ message: "Comment Not Yours!" });
    }

    res.status(200).json("Comment Deleted");
  } catch (error) {
    console.log("Error in deleteComment: " + error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
