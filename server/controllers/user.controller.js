import User from "../models/user.model.js";

export const getSavedBlogs = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    // Issue: Missing `await`
    const user = await User.findOne({ clerkUserId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure that `user.savedBlogs` is an array
    return res.status(200).json(user.savedBlogs || []);
  } catch (error) {
    console.log("Error in getSavedBlogs", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const saveBlog = async (req, res) => {
    const clerkUserId = req.auth.userId;
    const postId = req.body.postId;

    if(!clerkUserId) {
        return res.status(401).json({message: "Not Authenticated"});
    }

    const user = await User.findOne({clerkUserId});

    if(!user) {
        return res.status(404).json({message: "User not found"});
    }

    const isSaved = user.savedBlogs.some((blog) => blog === postId);

    if(isSaved) {
        await User.findByIdAndUpdate(user._id, {
            $pull: {savedBlogs: postId},
        });
    } else {
        await User.findByIdAndUpdate(user._id, {
            $push: {savedBlogs: postId},
        });
    }

    res.status(200).json(isSaved ? "Post Unsaved" : "Post Saved");
};
